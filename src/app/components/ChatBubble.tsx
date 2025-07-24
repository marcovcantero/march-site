import React from 'react';

interface ChatBubbleProps {
  message: string;
  position?: 'left' | 'right';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, position = 'left' }) => {
  const isLeft = position === 'left';

  return (
    <div
      className={`relative max-w-[50%] mt-5 p-2.5 px-4 text-3xl text-left leading-relaxed 
        ${isLeft
          ? 'bg-slate-200 text-black rounded-t-3xl rounded-br-3xl float-left'
          : 'bg-blue-400 text-white rounded-t-3xl rounded-bl-3xl float-right'
        }`}
    >
      {message}

      <div
        className={`absolute bottom-0 w-0 h-0 
          ${isLeft
            ? 'left-[-8px] border-b-[10px] border-l-[9px] border-b-slate-200 border-l-transparent'
            : 'right-[-8px] border-b-[9px] border-r-[9px] border-b-blue-400 border-r-transparent'
          }`}
      ></div>
    </div>
  );
};

export default ChatBubble;
