
import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, ShieldCheck, Zap, BarChart3, 
  FileText, Cpu, Settings, Bell, Search, Menu, 
  ChevronRight, LogOut, Umbrella, Eye, TrendingUp, AlertCircle, CheckCircle2
} from 'lucide-react';
import { SILOS, META_AGENTS, MOCK_ALERTS } from './constants';
import { Agent } from './types';
import Tooltip from './components/Tooltip';
import AgentCard from './components/AgentCard';
import ChatModal from './components/ChatModal';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activeSilo, setActiveSilo] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chattingAgent, setChattingAgent] = useState<Agent | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const renderIcon = (iconName: string, size = 20) => {
    switch (iconName) {
      case 'LayoutDashboard': return <LayoutDashboard size={size} />;
      case 'BookOpen': return <BookOpen size={size} />;
      case 'ShieldCheck': return <ShieldCheck size={size} />;
      case 'Zap': return <Zap size={size} />;
      case 'BarChart3': return <BarChart3 size={size} />;
      case 'FileText': return <FileText size={size} />;
      case 'Cpu': return <Cpu size={size} />;
      case 'Settings': return <Settings size={size} />;
      case 'Bell': return <Bell size={size} />;
      case 'Umbrella': return <Umbrella size={size} />;
      case 'Eye': return <Eye size={size} />;
      default: return <LayoutDashboard size={size} />;
    }
  };

  const renderContent = () => {
    switch (activeSilo) {
      case 'dashboard':
        return <Dashboard />;
      case 'agents':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Meta-Agent Control Panel</h2>
                <p className="text-slate-400 mt-1">18 Autonomous agents cross-validating corporate survival vectors</p>
              </div>
              <div className="flex gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 shadow-inner">
                <button className="px-4 py-1.5 text-xs bg-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-500/20">Active Agents</button>
                <button className="px-4 py-1.5 text-xs text-slate-400 hover:text-white rounded-lg transition-colors">Cross-Check Logs</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {META_AGENTS.map(agent => (
                <AgentCard key={agent.id} agent={agent} onChat={(a) => setChattingAgent(a)} />
              ))}
            </div>
          </div>
        );
      case 'accounting':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                    <BookOpen className="text-indigo-400" size={20} />
                    Automated Multi-Ledger Control
                  </h3>
                  <div className="space-y-3">
                    {[
                      { l: 'Subsidiary A Ledger', s: 'Reconciled', v: '$4.2M' },
                      { l: 'Subsidiary B Ledger', s: 'Processing', v: '$1.8M' },
                      { l: 'Tax Reserve Ledger', s: 'Reconciled', v: '$850K' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/40 rounded-xl border border-slate-700/30">
                        <span className="text-slate-300 font-medium">{item.l}</span>
                        <div className="flex items-center gap-6">
                          <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{item.s}</span>
                          <span className="text-slate-100 font-bold">{item.v}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                   <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Integrity Check</h4>
                   <div className="flex flex-col items-center justify-center h-48">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-slate-800 border-t-indigo-500 animate-spin" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <span className="text-2xl font-bold text-slate-100">100%</span>
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-slate-400 text-center">Zero drift detected across 48,000 journal entries.</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 'risk':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
             <div className="bg-gradient-to-r from-rose-900/20 to-indigo-900/20 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-100">Survival Simulation Engine</h2>
                    <p className="text-slate-400 mt-2">Current business resilience vs. black swan interference vectors.</p>
                  </div>
                  <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-rose-900/20">Trigger Stress Test</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                   {[
                     { n: 'Insolvency Buffer', v: '92%', s: 'Optimal' },
                     { n: 'Supply Lag Tolerance', v: '18 Days', s: 'Warning' },
                     { n: 'Survival Horizon', v: '4.2 Years', s: 'Strong' }
                   ].map((item, idx) => (
                     <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                        <div className="text-xs text-slate-500 mb-2">{item.n}</div>
                        <div className="text-3xl font-black text-slate-100 mb-2">{item.v}</div>
                        <div className={`text-[10px] font-bold ${item.s === 'Optimal' ? 'text-emerald-400' : item.s === 'Warning' ? 'text-amber-400' : 'text-indigo-400'}`}>
                          Status: {item.s}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="p-8 bg-slate-900 rounded-full border border-slate-800 shadow-2xl relative">
              <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full" />
              <div className="relative z-10 text-indigo-400">
                {renderIcon(SILOS.find(s => s.id === activeSilo)?.icon || '', 64)}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-100 capitalize">{activeSilo.replace('-', ' ')} Hub</h2>
              <p className="text-slate-400 max-w-lg mt-3 text-lg leading-relaxed">
                The {activeSilo} intelligence silo is currently processing real-time state vectors. 
                Executive reporting and deep-drill analytics are being generated by the meta-agent layer for your review.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={() => setActiveSilo('dashboard')} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-900/30">Return to Executive HQ</button>
              <button onClick={() => setChattingAgent(META_AGENTS[0])} className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl transition-all">Consult Reality Twin</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Sidebar */}
      <aside className={`bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-22'}`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30">
            <ShieldCheck className="text-white" size={22} />
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight text-white">SentinelWorks</span>}
        </div>

        <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto custom-scrollbar py-4">
          {SILOS.map((silo) => (
            <Tooltip key={silo.id} text={isSidebarOpen ? '' : silo.name} position="right">
              <button
                onClick={() => setActiveSilo(silo.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                  activeSilo === silo.id 
                    ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20' 
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 border border-transparent'
                }`}
              >
                <div className={`${activeSilo === silo.id ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                  {renderIcon(silo.icon)}
                </div>
                {isSidebarOpen && (
                  <div className="flex flex-col items-start overflow-hidden">
                    <span className="font-semibold text-sm whitespace-nowrap">{silo.name}</span>
                  </div>
                )}
              </button>
            </Tooltip>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/50 space-y-2">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-300 transition-colors">
            <Menu size={20} className={isSidebarOpen ? '' : 'mx-auto'} />
            {isSidebarOpen && <span className="text-sm font-medium">Collapse Menu</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-rose-400 transition-colors">
            <LogOut size={20} className={isSidebarOpen ? '' : 'mx-auto'} />
            {isSidebarOpen && <span className="text-sm font-medium">Logout System</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-900/40 border-b border-slate-800/60 px-6 flex items-center justify-between backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Query survival vectors or agents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-800/80 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-500/5 rounded-full border border-emerald-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Engine: Optimal</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Tooltip text="Material Alerts">
                <button className="p-2 text-slate-400 hover:text-white relative bg-slate-800/40 rounded-lg hover:bg-slate-800 transition-all">
                  <Bell size={18} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900" />
                </button>
              </Tooltip>
              <div className="w-px h-6 bg-slate-800" />
              <button className="flex items-center gap-3 pl-3 pr-1 py-1 rounded-full hover:bg-slate-800/60 transition-all group">
                <div className="text-right hidden lg:block">
                  <div className="text-xs font-bold text-slate-100">Marcus Sterling</div>
                  <div className="text-[10px] text-slate-500 font-medium">Global CFO • HQ</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 flex items-center justify-center text-white text-xs font-bold ring-2 ring-slate-800 group-hover:ring-indigo-500/40 transition-all shadow-lg">
                  MS
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-6 font-bold uppercase tracking-widest">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">SentinelWorks</span>
              <ChevronRight size={10} className="text-slate-700" />
              <span className="text-slate-300">{activeSilo.replace('-', ' ')}</span>
            </div>

            {renderContent()}
          </div>
        </div>
      </main>

      {/* Chat Overlay */}
      <ChatModal agent={chattingAgent} onClose={() => setChattingAgent(null)} />
    </div>
  );
};

export default App;
