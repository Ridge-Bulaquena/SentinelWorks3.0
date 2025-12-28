
import React from 'react';
import { Activity, AlertTriangle, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import DigitalTwin from './DigitalTwin';
import { MOCK_ALERTS } from '../constants';
import Tooltip from './Tooltip';

const StatCard = ({ label, value, trend, trendValue, icon: Icon, color }: any) => (
  <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-xl ${color} bg-opacity-10`}>
        <Icon size={20} className={color.replace('bg-', 'text-')} />
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-[10px] font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
          {trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trendValue}
        </div>
      )}
    </div>
    <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{label}</h4>
    <div className="text-2xl font-bold text-slate-100">{value}</div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Business Health" value="98.4%" trend="up" trendValue="+1.2%" icon={Activity} color="bg-indigo-500" />
        <StatCard label="Critical Risks" value="02" trend="down" trendValue="-3" icon={AlertTriangle} color="bg-rose-500" />
        <StatCard label="Net Liquidity" value="$12.4M" trend="up" trendValue="+$0.5M" icon={DollarSign} color="bg-emerald-500" />
        <StatCard label="Compliance Score" value="A+" trend="up" trendValue="Stable" icon={TrendingUp} color="bg-amber-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DigitalTwin />
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-100">Validated Alerts</h3>
            <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View Archive</button>
          </div>
          <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {MOCK_ALERTS.map((alert) => (
              <div key={alert.id} className="p-3 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      alert.type === 'critical' ? 'bg-rose-500' : 
                      alert.type === 'warning' ? 'bg-amber-500' : 'bg-indigo-500'
                    }`} />
                    <h5 className="text-sm font-semibold text-slate-200">{alert.message}</h5>
                  </div>
                  <span className="text-[10px] text-slate-500">{alert.timestamp}</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">{alert.detail}</p>
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-[9px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700">
                    Source: {alert.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Cross-Check Confidence</span>
              <span className="text-emerald-400 font-bold">99.8%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-emerald-500 w-[99.8%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
