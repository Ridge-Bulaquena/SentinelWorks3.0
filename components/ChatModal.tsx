
import React, { useState, useRef, useEffect } from 'react';
import { Agent } from '../types';
import { X, Send, Mic, Sparkles } from 'lucide-react';
import { askAgent } from '../services/geminiService';

interface ChatModalProps {
  agent: Agent | null;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ agent, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'agent'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (agent && messages.length === 0) {
      setMessages([{ 
        role: 'agent', 
        text: `Greetings. I am ${agent.name}, specializing in ${agent.role}. How can I assist with your executive intelligence needs today?` 
      }]);
    }
  }, [agent]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || !agent || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAgent(userMsg, agent.name);
    setMessages(prev => [...prev, { role: 'agent', text: response }]);
    setLoading(false);
  };

  if (!agent) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
        {/* Header */}
        <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              {agent.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-slate-100">{agent.name}</h3>
              <p className="text-xs text-slate-400">{agent.role}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-900/30">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                m.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-3 rounded-2xl border border-slate-700 rounded-tl-none flex gap-2 items-center text-slate-400">
                <Sparkles size={16} className="animate-pulse text-indigo-400" />
                <span className="text-xs italic">Agent processing digital twin state...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-800/50 border-t border-slate-700">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the agent..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-4 pr-24 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <div className="absolute right-2 top-1.5 flex gap-1">
              <button className="p-2 text-slate-400 hover:text-indigo-400 transition-colors" title="Voice Interaction">
                <Mic size={18} />
              </button>
              <button 
                onClick={handleSend}
                disabled={loading}
                className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
          <p className="text-[10px] text-center text-slate-500 mt-2">
            Interacting with SentinelWorks Meta-Intelligence Layer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
