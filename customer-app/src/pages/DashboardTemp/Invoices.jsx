import { INVOICES } from "@/constants/dashboardContent";
import StatusBadge from "@/components/common/StatusBadge";
import { Download } from "lucide-react";

export default function Invoices() {
  const totalDue = INVOICES.filter((i) => i.status !== "Paid").reduce(
    (sum, i) => sum + i.amount,
    0
  );

  return (
    <div>
      <p className="eyebrow mb-3">Billing</p>
      <h1 className="font-display text-4xl mb-4">Invoices</h1>
      <p className="text-steel mb-10">
        Total outstanding:{" "}
        <span className="text-ink font-medium">₹{totalDue.toFixed(2)}</span>
      </p>

      <div className="border border-mist bg-white">
        <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 border-b border-mist text-xs tracking-widest2 uppercase text-steel font-mono">
          <span>Invoice</span>
          <span>Service</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {INVOICES.map((inv) => (
          <div
            key={inv.id}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6 py-5 border-b border-mist last:border-b-0 items-center text-sm"
          >
            <span className="font-mono text-ink">{inv.invoiceNo}</span>
            <span className="text-ink">{inv.service}</span>
            <span className="text-steel">
              {new Date(inv.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
           <span className="text-ink font-medium">₹{inv.amount.toFixed(2)}</span>
            <div className="flex items-center justify-between md:justify-start gap-3">
              <StatusBadge status={inv.status} />
              <button className="text-steel hover:text-brand transition-colors">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}