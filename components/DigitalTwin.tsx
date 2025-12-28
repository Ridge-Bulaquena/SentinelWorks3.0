
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DigitalTwin: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const nodes = [
      { id: 'Business Core', group: 1, val: 20 },
      { id: 'General Ledger', group: 2, val: 15 },
      { id: 'Inventory', group: 2, val: 12 },
      { id: 'Cash Reserves', group: 3, val: 18 },
      { id: 'Contracts', group: 4, val: 10 },
      { id: 'Regulatory Hub', group: 5, val: 8 },
      { id: 'Risk Engine', group: 6, val: 14 },
    ];

    const links = [
      { source: 'Business Core', target: 'General Ledger' },
      { source: 'Business Core', target: 'Inventory' },
      { source: 'Business Core', target: 'Cash Reserves' },
      { source: 'Business Core', target: 'Contracts' },
      { source: 'General Ledger', target: 'Regulatory Hub' },
      { source: 'Cash Reserves', target: 'Risk Engine' },
      { source: 'Inventory', target: 'Risk Engine' },
      { source: 'Contracts', target: 'Regulatory Hub' },
    ];

    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#334155')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '5,5')
      .attr('class', 'animate-dash');

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('g')
      .call(d3.drag<any, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any);

    node.append('circle')
      .attr('r', d => d.val)
      .attr('fill', d => {
        const colors = ['#6366f1', '#10b981', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#ef4444'];
        return colors[d.group - 1];
      })
      .attr('stroke', '#1e293b')
      .attr('stroke-width', 2);

    node.append('text')
      .text(d => d.id)
      .attr('x', 0)
      .attr('y', d => d.val + 15)
      .attr('text-anchor', 'middle')
      .attr('fill', '#94a3b8')
      .attr('font-size', '10px');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => simulation.stop();
  }, []);

  return (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 relative overflow-hidden h-full min-h-[400px]">
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-lg font-bold text-slate-100">Live Digital Twin Core</h3>
        <p className="text-xs text-slate-400">Real-time state mapping of organizational nodes</p>
      </div>
      <div className="absolute top-6 right-6 flex gap-2">
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Synchronized
        </div>
      </div>
      <svg ref={svgRef} className="w-full h-full" viewBox="0 0 600 400" />
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-dash {
          animation: dash 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DigitalTwin;
