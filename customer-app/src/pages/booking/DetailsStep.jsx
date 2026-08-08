import TextField from "@/components/forms/TextField";
import TextArea from "@/components/forms/TextArea";

export default function DetailsStep({ details, onChange, onNext, onBack }) {
  const handleField = (e) => {
    onChange({ ...details, [e.target.name]: e.target.value });
  };

  const isValid = details.name && details.email && details.phone;

  return (
    <div>
      <p className="eyebrow mb-2 text-center">Step 3 of 4</p>
      <h2 className="font-display text-3xl text-center mb-10">Your details</h2>

      <form className="max-w-md mx-auto flex flex-col gap-6">
        <TextField label="Full Name" name="name" value={details.name} onChange={handleField} required />
        <TextField label="Email" name="email" type="email" value={details.email} onChange={handleField} required/>
        <TextField label="Phone" name="phone" type="number" value={details.phone} onChange={handleField} required />
        <TextArea label="Notes (optional)" name="notes" value={details.notes} onChange={handleField} />
      </form>

      <div className="mt-12 flex justify-center gap-4">
        <button type="button" onClick={onBack} className="btn-ghost">
          Back
        </button>
        <button
          type="button"
          disabled={!isValid}
          onClick={onNext}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}