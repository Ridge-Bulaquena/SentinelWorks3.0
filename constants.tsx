
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  FileText, 
  Settings, 
  Bell, 
  Activity,
  Cpu,
  Umbrella,
  Eye
} from 'lucide-react';
import { Silo, Agent, Alert } from './types';

export const SILOS: Silo[] = [
  { id: 'dashboard', name: 'Dashboard', icon: 'LayoutDashboard', hover: 'Executive health metrics, risk heatmaps, and digital twin status.' },
  { id: 'accounting', name: 'Accounting', icon: 'BookOpen', hover: 'Automated bookkeeping, multi-ledger, and reconciliations.' },
  { id: 'tax', name: 'Tax & Compliance', icon: 'ShieldCheck', hover: 'Continuous tax computation, regulatory filings, and audit trail.' },
  { id: 'risk', name: 'Risk & Survival', icon: 'Zap', hover: 'Stress tests, black swan simulations, and failure modeling.' },
  { id: 'insurance', name: 'Insurance & Forecasting', icon: 'Umbrella', hover: 'Coverage optimization and scenario predictive analytics.' },
  { id: 'legal', name: 'Contracts & Legal', icon: 'FileText', hover: 'Clause extraction, compliance scoring, and breach alerts.' },
  { id: 'analytics', name: 'Analytics & Insights', icon: 'BarChart3', hover: 'KPI storytelling and interactive intelligence querying.' },
  { id: 'agents', name: 'Agents Panel', icon: 'Cpu', hover: 'Visual representation of all 18 meta-agents and cross-check logs.' },
  { id: 'settings', name: 'Integrations', icon: 'Settings', hover: 'Manage ERP, Bank, and Payroll connections.' },
  { id: 'alerts', name: 'Notifications', icon: 'Bell', hover: 'Escalation rules and material risk notifications.' }
];

export const META_AGENTS: Agent[] = [
  { id: 'reality', name: 'Reality Twin Architect', role: 'State Mapping', status: 'healthy', lastAction: 'Mapped 4,200 asset nodes', confidence: 0.99, description: 'Maintains the 1:1 digital twin of the business state.' },
  { id: 'accounting', name: 'Accounting Core', role: 'Ledger Automation', status: 'healthy', lastAction: 'Reconciled multi-subsidiary ledgers', confidence: 1.0, description: 'Bookkeeping automation, auto-classification, and reconciliations.' },
  { id: 'forensic', name: 'Forensic Ledger AI', role: 'Fraud Detection', status: 'healthy', lastAction: 'Cleared daily ledger sweep', confidence: 0.98, description: 'Detects phantom revenue and ghost costs automatically.' },
  { id: 'tax', name: 'Tax Intelligence AI', role: 'Tax Computation', status: 'warning', lastAction: 'VAT liability recalculated', confidence: 0.94, description: 'Continuous tax computation and predictive penalty modeling.' },
  { id: 'stress', name: 'Operations Stress AI', role: 'Failure Analysis', status: 'healthy', lastAction: 'Simulated 30% supply chain lag', confidence: 0.96, description: 'Operational stress test and systemic failure modeling.' },
  { id: 'legal', name: 'Legal Risk AI', role: 'Compliance Scoring', status: 'healthy', lastAction: 'Audited 12 new vendor contracts', confidence: 0.95, description: 'Legal compliance and contract enforcement monitoring.' },
  { id: 'insurance', name: 'Insurance Optimization AI', role: 'Coverage Analytics', status: 'healthy', lastAction: 'Policy arbitrage suggested', confidence: 0.92, description: 'Optimizes coverage vs claim prediction modeling.' },
  { id: 'insider', name: 'Insider Threat AI', role: 'Internal Security', status: 'healthy', lastAction: 'Monitoring privilege access logs', confidence: 0.99, description: 'Detects internal fraud and irregular access patterns.' },
  { id: 'liquidity', name: 'Liquidity Sentinel', role: 'Cash Protection', status: 'healthy', lastAction: 'Runway extended by 14 days', confidence: 0.98, description: 'Cash flow collapse prevention and burn rate guardian.' },
  { id: 'supply', name: 'Supply Chain Risk AI', role: 'Vendor Dependency', status: 'critical', lastAction: 'Disruption risk detected at Port B', confidence: 0.88, description: 'Monitors vendor health and dependency risk levels.' },
  { id: 'reg', name: 'Regulatory Shock AI', role: 'Policy Monitor', status: 'healthy', lastAction: 'Ingested 44 legislative updates', confidence: 0.97, description: 'Models the impact of legal and regulatory changes.' },
  { id: 'macro', name: 'Macro Interference AI', role: 'Economic Modeling', status: 'warning', lastAction: 'Interest rate hike impact modeled', confidence: 0.91, description: 'Economic stress and macro-economic modeling.' },
  { id: 'blackswan', name: 'Black Swan Engine', role: 'Extinction Testing', status: 'healthy', lastAction: 'Ran global cyber-outage test', confidence: 0.93, description: 'Rare catastrophic risk simulation and mitigation.' },
  { id: 'scenario', name: 'Scenario Twin AI', role: 'Future Pathing', status: 'healthy', lastAction: 'Generated 3 survival scenarios', confidence: 0.95, description: 'Parallel future simulations and reality forking.' },
  { id: 'riskcap', name: 'Risk Capital AI', role: 'Resource Allocation', status: 'healthy', lastAction: 'Buffer allocation optimized', confidence: 0.97, description: 'Allocates capital specifically for risk mitigation.' },
  { id: 'human', name: 'Human Error Emulator', role: 'Mistake Modeling', status: 'healthy', lastAction: 'Simulated key-man error', confidence: 0.89, description: 'Models the probability and impact of executive error.' },
  { id: 'board', name: 'Board Intelligence AI', role: 'Executive Insights', status: 'healthy', lastAction: 'Prepared Q1 survival briefing', confidence: 0.99, description: 'Generates board-level insights and dashboards.' },
  { id: 'crosscheck', name: 'Cross-Check Engine', role: 'Validation Layer', status: 'healthy', lastAction: 'Unified agent confidence check', confidence: 1.0, description: 'Recursive validation of all 17 other agent outputs.' }
];

export const MOCK_ALERTS: Alert[] = [
  { id: '1', type: 'warning', message: 'VAT filing delayed', detail: 'Projected penalty: $12,450', timestamp: '2 mins ago', source: 'Tax Intelligence AI' },
  { id: '2', type: 'critical', message: 'Supplier chain risk detected', detail: 'Probability of disruption 27% in 2 weeks', timestamp: '15 mins ago', source: 'Supply Chain Risk AI' },
  { id: '3', type: 'success', message: 'Payroll processed automatically', detail: 'All 450 records reconciled', timestamp: '1 hour ago', source: 'Accounting Core' },
  { id: '4', type: 'info', message: 'Risk simulation complete', detail: 'Survival probability: 97%', timestamp: '3 hours ago', source: 'Black Swan Engine' }
];
