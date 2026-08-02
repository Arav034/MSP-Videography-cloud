import { useState } from "react";
import { Tag, X, Check } from "lucide-react";
import { COUPONS } from "@/constants/bookingContent";

export default function CouponInput({ appliedCoupon, onApply, onRemove }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleApply = () => {
    const match = COUPONS.find(
      (c) => c.code.toLowerCase() === code.trim().toLowerCase()
    );
    if (!match) {
      setError("Invalid or expired coupon code.");
      return;
    }
    setError("");
    onApply(match);
    setCode("");
  };

  if (appliedCoupon) {
    return (
      <div className="flex items-center justify-between border border-brand/30 bg-brand/5 px-4 py-3">
        <span className="flex items-center gap-2 text-sm text-brand font-mono">
          <Check size={15} />
          {appliedCoupon.code} applied — {appliedCoupon.label}
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="text-steel hover:text-ink transition-colors"
          aria-label="Remove coupon"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <div className="flex-1 flex items-center gap-2 border border-mist bg-white px-4 py-2">
          <Tag size={15} className="text-steel shrink-0" />
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter coupon code"
            className="w-full text-sm text-ink focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={handleApply}
          disabled={!code.trim()}
          className="btn-ghost disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Apply
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-red-600 font-mono">{error}</p>}
    </div>
  );
}