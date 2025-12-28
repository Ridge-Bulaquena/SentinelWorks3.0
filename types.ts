
export type Status = 'healthy' | 'warning' | 'critical';

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: Status;
  description: string;
  lastAction: string;
  confidence: number;
}

export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'critical' | 'success';
  message: string;
  timestamp: string;
  source: string;
  detail?: string;
}

export interface Silo {
  id: string;
  name: string;
  icon: string;
  hover: string;
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  status?: Status;
}
