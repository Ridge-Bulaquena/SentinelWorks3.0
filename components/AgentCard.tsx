
import React from 'react';
import { Agent } from '../types';
import { Activity, MessageSquare } from 'lucide-react';
import Tooltip from './Tooltip';

interface AgentCardProps {
  agent: Agent;
  onChat: (agent: Agent) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onChat }) => {
  const statusColors = {
    healthy: 'bg-emerald-500',
    warning: 'bg-amber-500',
    critical: 'bg-rose-500'
  };

  const statusShadows = {
    healthy: 'shadow-emerald-900/20',
    warning: 'shadow-amber-900/20',
    critical: 'shadow-rose-900/20'
  };

  return (
    <div className={`p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all ${statusShadows[agent.status]} hover:shadow-lg group relative`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${statusColors[agent.status]} animate-pulse`} />
          <h3 className="font-semibold text-sm text-slate-100">{agent.name}</h3>
        </div>
        <button 
          onClick={() => onChat(agent)}
          className="p-1.5 rounded-lg bg-slate-700 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors"
        >
          <MessageSquare size={14} />
        </button>
      </div>
      
      <p className="text-xs text-slate-400 mb-4 h-8 overflow-hidden line-clamp-2">
        {agent.description}
      </p>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>Confidence</span>
          <span>{(agent.confidence * 100).toFixed(0)}%</span>
        </div>
        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${statusColors[agent.status]} transition-all duration-1000`} 
            style={{ width: `${agent.confidence * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-900/50 p-2 rounded-lg">
        <Activity size={10} className="text-slate-400" />
        <span className="truncate">{agent.lastAction}</span>
      </div>

      <div className="absolute top-2 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
        <Tooltip text={agent.role}>
          <div className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-300">Role</div>
        </Tooltip>
      </div>
    </div>
  );
};

export default AgentCard;
