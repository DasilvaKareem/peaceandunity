import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function POST(req: NextRequest) {
  try {
    const { messages, model } = await req.json();
    
    // Use the correct model name for Qwen on Groq
    // Groq currently supports these models: llama3-8b-8192, llama3-70b-8192, mixtral-8x7b-32768, gemma-7b-it
    const modelName = model === 'qwen' ? 'mixtral-8x7b-32768' : 'llama3-70b-8192';
    
    console.log(`Using model: ${modelName}`);
    
    // System message to provide context about Unity DAO
    const systemMessage = {
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
    
    // Add system message to the beginning if not already present
    const messagesWithSystem = messages[0]?.role === 'system' 
      ? messages 
      : [systemMessage, ...messages];
    
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: modelName,
        messages: messagesWithSystem,
        temperature: 0.7,
        max_tokens: 1024
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API error:', errorData);
      throw new Error(`Groq API error: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json({ 
      response: data.choices[0].message.content 
    });
    
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
