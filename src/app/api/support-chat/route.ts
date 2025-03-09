import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// DAO-specific categories for support
const daoSupportCategories = {
  "categories": [
    {
      "id": "voting",
      "name": "Voting",
      "keywords": [
        "vote", "proposal", "ballot", "decision", "election", 
        "referendum", "poll", "support", "oppose", "abstain"
      ]
    },
    {
      "id": "tokens",
      "name": "Tokens",
      "keywords": [
        "token", "UNITY", "balance", "wallet", "purchase", "buy", 
        "sell", "transfer", "stake", "unstake", "claim"
      ]
    },
    {
      "id": "proposals",
      "name": "Proposals",
      "keywords": [
        "create proposal", "submit", "draft", "requirements", 
        "guidelines", "format", "deadline", "criteria"
      ]
    },
    {
      "id": "technical",
      "name": "Technical",
      "keywords": [
        "error", "bug", "issue", "connection", "wallet", "metamask", 
        "phantom", "solana", "transaction", "failed"
      ]
    },
    {
      "id": "governance",
      "name": "Governance",
      "keywords": [
        "rules", "constitution", "bylaws", "framework", "structure", 
        "decision-making", "quorum", "threshold"
      ]
    }
  ]
};

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const categoryListString = daoSupportCategories.categories
      .map(cat => `${cat.id}: ${cat.keywords.join(", ")}`)
      .join("\n");

    const systemPrompt = `You are a helpful assistant for the Unity DAO platform, a decentralized autonomous organization focused on global peace and unity initiatives. 
    
The Unity DAO allows users to:
1. Create and vote on proposals related to world issues
2. Use $UNITY tokens for voting (1 token = 1 vote)
3. Submit new proposals (requires 100 $UNITY tokens)
4. Participate in governance decisions

When responding to users:
- Be concise, helpful, and friendly
- Provide specific information about the DAO's features and processes
- If you don't know something, be honest about it
- For technical issues, suggest basic troubleshooting steps

Here are the categories of questions you might receive:
${categoryListString}

Format your response as plain text with markdown formatting where appropriate. Use bullet points, numbered lists, and bold text to make information clear and scannable.`;

    const userMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      system: systemPrompt,
      messages: userMessages,
      max_tokens: 1000,
    });

    return NextResponse.json({ response: response.content[0].text });
  } catch (error) {
    console.error("Error in support chat:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 