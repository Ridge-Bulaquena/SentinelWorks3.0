
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function askAgent(prompt: string, agentName: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are ${agentName}, a specialized meta-agent within SentinelWorks, an autonomous enterprise intelligence system. Your goal is to provide executive-level, conversational, and actionable insights. Be professional, direct, and authoritative in your domain. If someone asks for data, simulate based on "SentinelWorks" context.`,
        temperature: 0.7,
      }
    });
    return response.text || "I am processing the data. Please standby.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Communication link with core intelligence temporarily unstable. Retrying synchronization...";
  }
}

#Adds AI capability. The system is designed to operate as a continuously self-maintaining financial brain rather than a traditional accounting tool. It automatically manages multiple ledgers across subsidiaries, business units, or legal entities, ensuring that intercompany activity is recorded correctly, synchronized in real time, and consolidated without manual intervention. As organizations expand across borders or structures, the platform absorbs complexity instead of creating it.

All transactions are tracked across currencies with real-time foreign exchange awareness. Exchange rate exposure is monitored continuously, balances are reconciled as transactions occur, and financial reports remain accurate regardless of where revenue is earned or costs are incurred. This removes the need for periodic FX adjustments and eliminates hidden currency risk.

Journal entries are never allowed to drift out of balance. Instead of relying on month-end closing rituals, the system validates and balances journals continuously as data flows in. Errors are detected immediately, long before they can compound into reporting failures or compliance risks.

Accounts receivable and payable processes run autonomously from ingestion to reconciliation. Invoices are matched, payments are tracked, and discrepancies are flagged automatically. Only true exceptions surface for human review, allowing finance teams to focus on oversight and decision-making rather than transaction processing.

When inconsistencies or errors do appear, the system does not simply flag them—it proposes corrective entries on its own. These self-correcting adjustments are accompanied by confidence scoring, reasoning, and full audit context, ensuring transparency while eliminating repetitive manual corrections.

The platform actively searches for phantom revenue and ghost costs—duplicate, outdated, or incorrectly posted entries that quietly distort financial reality. By eliminating these artifacts automatically, reported performance reflects what the business actually earned and spent, not what accounting noise suggests.

Transaction categorization evolves intelligently. Instead of rigid rules, the system uses contextual signals such as vendor behavior, contract terms, historical patterns, and operational usage to classify activity. Over time, it learns from corrections and outcomes, continuously refining accuracy without constant rule maintenance.

Contracts are not treated as static documents but as living financial drivers. Obligations, milestones, penalties, and revenue terms are directly linked to ledger entries so that financial statements reflect contractual reality at all times. This alignment reduces legal risk, revenue leakage, and compliance exposure.

Inventory data is continuously monitored for drift between recorded values and actual movement or usage. Shrinkage, miscounts, valuation timing issues, and process breakdowns are detected early and corrected before they affect margins or cash flow.

Gross profit is tracked in real time across products, channels, customers, and geographies. Leadership can immediately see which segments create value and which quietly erode margins, enabling faster strategic adjustments.

The system uncovers hidden cost sinks—expenses that individually appear harmless but collectively drain profitability. By analyzing patterns across time and operations, it exposes inefficiencies that traditional reporting often misses.

Financial statements are always tax-ready. VAT, withholding, income, and local tax positions are continuously calculated, allowing filings to be prepared at any time without last-minute scrambles or reconciliation chaos.

Balance sheet integrity is continuously assessed. The platform evaluates whether assets, liabilities, and equity remain internally consistent, assigns integrity scores, and highlights structural weaknesses that could signal deeper accounting or operational issues.

Cash and accrual views are maintained simultaneously. Stakeholders can see true liquidity alongside long-term performance without reconciling separate systems, enabling clearer planning, forecasting, and risk assessment.

Deferred revenue and unearned income are automatically tracked and recognized according to accounting rules and contract terms. Revenue appears only when it is truly earned, protecting both compliance and credibility.

Bank reconciliation becomes a background process. Transactions are matched automatically, discrepancies are resolved algorithmically, and human review is reserved for rare anomalies rather than routine matching.

Expenses are allocated autonomously based on real usage patterns, contractual logic, or operational data. Cost attribution becomes accurate and dynamic instead of static and arbitrary.

Every financial action is fully traceable. Each entry carries a complete audit trail from source to outcome, making regulatory reviews, audits, and internal investigations straightforward and defensible.

Company performance is continuously benchmarked against industry norms using composite metrics. Leadership gains real-time awareness of whether margins, costs, and efficiency are competitive or drifting out of alignment.

Cost categorization adapts as the business evolves. As new vendors, services, or operational models emerge, the system learns and adjusts automatically, keeping financial structure aligned with reality without constant human intervention.

Taken together, this system turns accounting from a backward-looking record into a real-time intelligence layer that protects accuracy, reveals hidden risks, preserves margins, and gives leadership a continuously truthful view of the business.
