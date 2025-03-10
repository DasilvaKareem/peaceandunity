import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Interfaces for Groq API with more detailed structure
interface GroqToolParameter {
  type: string;
  description: string;
}

interface GroqToolProperties {
  query: GroqToolParameter;
  city?: GroqToolParameter;
}

interface GroqToolFunction {
  name: string;
  description: string;
  parameters: {
    type: string;
    properties: GroqToolProperties;
    required: string[];
  };
}

interface GroqTool {
  type: string;
  function: GroqToolFunction;
}

interface GroqMessage {
  role: string;
  content: string;
}

interface GroqPayload {
  model: string;
  messages: GroqMessage[];
  tools?: GroqTool[];
  tool_choice?: string;
  temperature?: number;
  max_tokens?: number;
}

// Interfaces for GoFundMe API response
interface GoFundMeResult {
  amount_to_goal?: number;
  balance: number;
  cat_name: string;
  category_id: number;
  cdn_pic: string;
  cdn_thumbnail: number;
  city?: string;
  comment_count_full: string;
  country: string;
  created_at: string;
  currencycode: string;
  custom_complete: boolean;
  donation_count: number;
  donation_count_full: number;
  funddescription: string;
  fundname: string;
  geoloc?: { lat: number; lng: number };
  goal_progress: number;
  goalamount: number;
  good_to_share?: boolean;
  has_donations: boolean;
  has_recent_donations: boolean;
  heart_count: number;
  high_balance_score?: number;
  id: string;
  is_popular_2?: boolean;
  last_donation_at: string;
  locationtext?: string;
  main_img_url: string;
  mediatype: number;
  popularity_1: number;
  popularity_2: number;
  popularity_2_fixed: number;
  popularity_updated_at: string;
  projecttype: number;
  realbalance: number;
  recent_donation_count: number;
  recently_created: boolean;
  social_share_total?: number;
  state?: string;
  status: number;
  thumb_img_url: string;
  timeout_start: string;
  updated_at: string;
  url: string;
  user_language_id: number;
  user_language_locale: string;
  user_language_name: string;
  username: string;
  zip?: string;
  bene_name?: string;
}

interface GoFundMeApiResponse {
  result: GoFundMeResult[];
}

// System message for Unity DAO context
const SYSTEM_MESSAGE = {
  role: "system",
  content: `You are an AI Agent for Unity DAO, a decentralized autonomous organization dedicated to funding and supporting initiatives that promote global peace, cooperation, and unity. 

Unity DAO operates on the Solana blockchain, using $UNITY tokens for governance and proposal funding. Members can vote on proposals across categories like Humanitarian, Environment, Sustainability, Education, Healthcare, Food Security, Technology, and Urban Planning.

When responding to users:
1. Be helpful, concise, and informative about Unity DAO's mission and operations
2. Provide specific information about proposals when asked
3. Explain how governance works (voting, proposal creation, token usage)
4. Be knowledgeable about blockchain technology, especially Solana
5. Maintain a positive, supportive tone aligned with Unity DAO's peace-focused mission

If asked about technical details you're unsure about, provide general information and suggest where they might find more specific answers.`
};

// Function to call the GoFundMe search tool via Groq's function calling API
async function callGoFundMeSearchTool(query: string, city?: string): Promise<any> {
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable not set.');
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GROQ_API_KEY}`,
  };

  const messages: GroqMessage[] = [{ role: 'user', content: query }];

  const tools: GroqTool[] = [
    {
      type: 'function',
      function: {
        name: 'gofundme_vector_search',
        description: 'Search GoFundMe campaigns based on a query and optional city.',
        parameters: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: "The search query, e.g., 'cancer treatment', 'help with medical bills'.",
            },
            city: {
              type: 'string',
              description: "The city to filter by, e.g., 'San Francisco'.",
            },
          },
          required: ['query'],
        },
      },
    },
  ];

  const payload: GroqPayload = {
    model: 'llama-3.3-70b-versatile',
    messages: messages,
    tools: tools,
    tool_choice: 'auto',
  };

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return null;
  }
}

async function makeGroqRequest(payload: GroqPayload) {
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable not set.');
  }
  
  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Groq API error:', errorData);
    
    // Handle specific error cases
    if (errorData.error && errorData.error.code === 'tool_use_failed') {
      console.log('Tool use failed. Retrying without tool calling...');
      // Remove tools and retry if tool call failed
      const retryPayload = { ...payload };
      delete retryPayload.tools;
      delete retryPayload.tool_choice;
      
      // Retry the request without tools
      const retryResponse = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify(retryPayload)
      });
      
      if (!retryResponse.ok) {
        throw new Error(`Groq API retry failed: ${retryResponse.status}`);
      }
      
      return retryResponse.json();
    }
    
    // For other errors, throw with status code
    throw new Error(`Groq API error: ${response.status}`);
  }

  return response.json();
}

// GoFundMe Parser Function
function parseGoFundMeResultsToContext(response: GoFundMeApiResponse): string {
  if (!response || !response.result || response.result.length === 0) {
    return "No GoFundMe results found.";
  }
  const contextStrings = response.result.map((result) => {
    let context = `GoFundMe Campaign: ${result.fundname}\n`;
    context += `Category: ${result.cat_name}\n`;
    if (result.city && result.state) {
      context += `Location: ${result.city}, ${result.state}, ${result.country}\n`;
    } else if (result.country) {
      context += `Country: ${result.country}\n`;
    }
    context += `Description: ${result.funddescription}\n`;
    context += `Goal: ${result.currencycode} ${result.goalamount.toLocaleString()}\n`;
    context += `Raised: ${result.currencycode} ${result.realbalance.toLocaleString()}\n`;
    context += `Progress: ${(result.goal_progress * 100).toFixed(2)}%\n`;
    context += `Donations: ${result.donation_count_full}\n`;
    context += `URL: ${result.url}\n`;
    context += `Created at: ${result.created_at}\n`;
    if (result.bene_name) {
      context += `Beneficiary: ${result.bene_name}\n`;
    }
    return context;
  });
  return contextStrings.join("\n\n");
}

export async function POST(req: NextRequest) {
  try {
    const { messages, model, searchQuery, cityFilter } = await req.json();

    // Set up the model name based on the model parameter
    const modelName: string = (model === 'qwen') ? 'mixtral-8x7b-32768' : (model || 'llama-3.3-70b-versatile');
    console.log(`Using model: ${modelName}`);

    // Extract search query from the last user message if not explicitly provided
    let searchTerm = searchQuery;
    if (!searchTerm) {
      // Find the last user message
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].role === 'user') {
          // Simple extraction of potential search terms
          searchTerm = messages[i].content;
          break;
        }
      }
    }

    // Only attempt to fetch GoFundMe results if we have a search term
    let goFundMeContext = '';
    if (searchTerm) {
      try {
        // Construct the GoFundMe API URL with query parameters
        const goFundMeApiUrl = `http://127.0.0.1:8000/api/search?q=${encodeURIComponent(searchTerm)}${cityFilter ? `&city=${encodeURIComponent(cityFilter)}` : ''}`;
        console.log('Calling GoFundMe API URL:', goFundMeApiUrl);
        
        const goFundMeResponse = await fetch(goFundMeApiUrl);
        
        if (!goFundMeResponse.ok) {
          console.error(`GoFundMe API returned status ${goFundMeResponse.status}`);
        } else {
          const goFundMeData: GoFundMeApiResponse = await goFundMeResponse.json();
          goFundMeContext = parseGoFundMeResultsToContext(goFundMeData);
          console.log('Successfully retrieved GoFundMe data');
        }
      } catch (error) {
        console.error('Error calling GoFundMe API:', error);
      }
    }

    // Modify the system message to include GoFundMe results if available
    let systemMessage = SYSTEM_MESSAGE;
    if (goFundMeContext) {
      systemMessage = {
        role: 'system',
        content: `${SYSTEM_MESSAGE.content}\n\nHere are some GoFundMe campaigns that might be relevant to the user's query:\n${goFundMeContext}`
      };
    }

    // Ensure there's a system message
    const messagesWithSystem = messages[0]?.role === 'system'
      ? messages.map((msg: GroqMessage) => msg.role === 'system' ? systemMessage : msg)
      : [systemMessage, ...messages];

    // Create the payload for Groq API
    const chatPayload: GroqPayload = {
      model: modelName,
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 1024
    };

    // Make the request to Groq
    const data = await makeGroqRequest(chatPayload);
    
    // Return the response content
    return NextResponse.json({ response: data.choices[0].message.content });
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
