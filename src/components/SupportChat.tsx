import React, { useState, useRef, useEffect } from 'react';

interface SupportChatProps {
  embedded?: boolean;
}

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SupportChat: React.FC<SupportChatProps> = ({ embedded = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'system', 
      content: 'Welcome to Unity DAO! I\'m your AI Agent assistant. How can I help you with proposals, governance, or token information today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          model: 'qwen'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error processing your request. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`support-chat ${embedded ? 'embedded' : ''}`}>
      <div className="chat-header">
        <h3>AI Agent</h3>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.role === 'assistant' ? 'assistant' : message.role === 'system' ? 'system' : 'user'}`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="message assistant loading">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about proposals, governance, or token info..."
          rows={1}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? (
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          )}
        </button>
      </div>
      <style jsx>{`
        .support-chat {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          background: white;
        }
        .embedded {
          border: 1px solid #e2e8f0;
        }
        .chat-header {
          padding: 16px;
          background: #7C4DFF;
          color: white;
        }
        .chat-messages {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
        }
        .message {
          margin-bottom: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          max-width: 80%;
          white-space: pre-wrap;
        }
        .system {
          background: #e9d5ff;
          align-self: center;
          width: fit-content;
        }
        .user {
          background: #e2e8f0;
          align-self: flex-end;
        }
        .assistant {
          background: #7C4DFF20;
          align-self: flex-start;
        }
        .loading {
          background: transparent;
        }
        .chat-input {
          display: flex;
          padding: 12px;
          border-top: 1px solid #e2e8f0;
          align-items: center;
        }
        textarea {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          margin-right: 8px;
          resize: none;
          max-height: 100px;
          min-height: 38px;
        }
        button {
          background: #7C4DFF;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px;
          cursor: pointer;
          height: 38px;
          width: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button:hover:not(:disabled) {
          background: #6b46c1;
        }
        button:disabled {
          background: #a5a5a5;
          cursor: not-allowed;
        }
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        .typing-indicator span {
          height: 8px;
          width: 8px;
          background: #7C4DFF;
          border-radius: 50%;
          display: inline-block;
          margin-right: 3px;
          animation: bounce 1.5s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(1) {
          animation-delay: 0s;
        }
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
          margin-right: 0;
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default SupportChat; 