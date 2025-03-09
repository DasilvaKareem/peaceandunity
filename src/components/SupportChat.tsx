import React from 'react';

interface SupportChatProps {
  embedded?: boolean;
}

const SupportChat: React.FC<SupportChatProps> = ({ embedded = false }) => {
  return (
    <div className={`support-chat ${embedded ? 'embedded' : ''}`}>
      <div className="chat-header">
        <h3>Support Chat</h3>
      </div>
      <div className="chat-messages">
        <div className="message system">
          Welcome to Unity DAO support! How can we help you today?
        </div>
        {/* You can add more functionality here later */}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message here..." />
        <button>Send</button>
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
        }
        .message {
          margin-bottom: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          max-width: 80%;
        }
        .system {
          background: #e9d5ff;
          align-self: center;
          width: fit-content;
        }
        .chat-input {
          display: flex;
          padding: 12px;
          border-top: 1px solid #e2e8f0;
        }
        input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          margin-right: 8px;
        }
        button {
          background: #7C4DFF;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          cursor: pointer;
        }
        button:hover {
          background: #6b46c1;
        }
      `}</style>
    </div>
  );
};

export default SupportChat; 