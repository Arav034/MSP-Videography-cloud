import { useState } from "react";
import StepIndicator from "@/components/common/StepIndicator";
import ServiceStep from "@/pages/booking/ServiceStep";
import DateTimeStep from "@/pages/booking/DateTimeStep";
import DetailsStep from "@/pages/booking/DetailsStep";
import ReviewStep from "@/pages/booking/ReviewStep";
import Confirmation from "@/pages/booking/Confirmation";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import SEO from "@/components/common/SEO";

const STEP_LABELS = ["Service", "Date & Time", "Details", "Review"];

export default function Book() {
  const { currentStepIndex, next, back } = useMultiStepForm(STEP_LABELS);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [service, setService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", notes: "" });

const [bookingTotal, setBookingTotal] = useState(null);

  const handleConfirm = ({ total, coupon }) => {
    // No backend wired yet — UI-only per project rules.
    console.log("Booking submitted:", { service, date, time, details, total, coupon });
    setBookingTotal(total);
    setSubmitted(true);
  };
  

if (submitted) {
    return (
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-24">
        <Confirmation service={service} total={bookingTotal} />
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
      <SEO
        title="Book a Session"
        description="Book your photography or videography session with MSP Videography."
        path="/book"
      />

      <div className="mb-14">
        <StepIndicator labels={STEP_LABELS} currentIndex={currentStepIndex} />
      </div>

      {currentStepIndex === 0 && (
        <ServiceStep value={service} onChange={setService} onNext={next} />
      )}
      {currentStepIndex === 1 && (
          <DateTimeStep
            date={date}
            time={time}
            onChangeDate={setDate}
            onChangeTime={setTime}
            onNext={next}
            onBack={back}
          />
        )}
        {currentStepIndex === 2 && (
        <DetailsStep details={details} onChange={setDetails} onNext={next} onBack={back} />
      )}
      {currentStepIndex === 3 && (
        <ReviewStep
          service={service}
          date={date}
          time={time}
          details={details}
          onConfirm={handleConfirm}
          onBack={back}
          submitting={submitting}
        />
      )} 
      

    </section>
  );
}

