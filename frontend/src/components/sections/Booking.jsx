import { useState, useEffect } from "react";
import { CalendarCheck, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import {
  BRANCH_OPTIONS,
  SERVICES,
  PREMIUM_SERVICES,
  buildWhatsAppLink,
} from "@/data/site";

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const today = new Date().toISOString().split("T")[0];

const initialForm = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
  branch: "",
};

// Combined service options (regular services + offers)
const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.name),
  ...PREMIUM_SERVICES.map((s) => s.name),
  "Bridal Trial Makeup (Free)",
  "Other",
];

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Listen for "preselect-service" events fired by other CTAs
  useEffect(() => {
    const handler = (e) => {
      const value = e?.detail || "";
      setForm((prev) => ({ ...prev, service: value || prev.service }));
      setSuccess(false);
      setError("");
    };
    window.addEventListener("preselect-service", handler);
    return () => window.removeEventListener("preselect-service", handler);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setForm((prev) => ({ ...prev, [name]: nextValue }));
  };

  const buildMessage = (details = form) => {
    const lines = [
      "Hello Ganga Beauty Parlour,",
      "",
      "I would like to make a booking.",
      "",
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Branch: ${details.branch}`,
      `Service: ${details.service}`,
      details.date ? `Date: ${details.date}` : "",
      details.time ? `Time: ${details.time}` : "",
      details.message ? `Additional Message: ${details.message}` : "",
      "",
      "Please confirm my booking.",
      "",
      "Thank you.",
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const cleanedForm = {
      ...form,
      name: form.name.trim(),
      phone: form.phone.replace(/\D/g, ""),
      branch: form.branch.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
    };

    if (
      !cleanedForm.name ||
      !cleanedForm.phone ||
      !cleanedForm.branch ||
      !cleanedForm.service
    ) {
      setError("Please fill your name, phone, branch and service.");
      return;
    }

    if (!PHONE_PATTERN.test(cleanedForm.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!BRANCH_OPTIONS.includes(cleanedForm.branch)) {
      setError("Please select a valid branch.");
      return;
    }

    setSubmitting(true);
    setForm(cleanedForm);
    setSuccess(true);

    const wa = buildWhatsAppLink(buildMessage(cleanedForm));
    const newWindow = window.open(wa, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      window.location.href = wa;
    }

    setSubmitting(false);
  };

  const resetForm = () => {
    setForm(initialForm);
    setSuccess(false);
    setError("");
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="section bg-[#050505] relative overflow-hidden"
      data-sr
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-2">
          <div data-sr data-sr-delay="60ms">
            <span className="eyebrow">Book Now</span>
            <div className="gold-divider mt-3 mb-5" />
            <h2
              className="font-serif text-white text-4xl min-[400px]:text-5xl tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Reserve your{" "}
              <span className="italic gold-text">moment.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-300/82 sm:text-base">
              Tell us a little about what you'd like, and we'll confirm
              availability instantly on WhatsApp. Bridal & special occasion
              bookings are taken on prior appointment.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-zinc-300/90">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1" />
                Quick confirmation on WhatsApp
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1" />
                Personal consultation before bridal services
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1" />
                Flexible scheduling - Mon-Sun, 10 AM - 8 PM
              </li>
            </ul>
          </div>

          <div className="luxe-card-premium p-5 md:p-7" data-sr data-sr-delay="120ms">
            {success ? (
              <div
                className="text-center py-10"
                data-testid="booking-success"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3
                  className="font-serif text-2xl md:text-3xl text-white mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Booking received!
                </h3>
                <p className="text-zinc-400 max-w-sm mx-auto">
                  We've opened WhatsApp with your details. Send the message to
                  confirm - we'll respond within minutes.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  data-testid="booking-new"
                  className="mt-8 btn-outline-gold"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-describedby={error ? "booking-error" : undefined}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      data-testid="booking-name"
                      className="luxe-input"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      data-testid="booking-phone"
                      className="luxe-input"
                      inputMode="numeric"
                      autoComplete="tel"
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-branch"
                    className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                  >
                    Branch *
                  </label>
                  <select
                    id="booking-branch"
                    name="branch"
                    value={form.branch || ""}
                    onChange={handleChange}
                    data-testid="booking-branch"
                    className="luxe-input appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Select branch
                    </option>
                    {BRANCH_OPTIONS.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="booking-service"
                    className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                  >
                    Service *
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    data-testid="booking-service"
                    className="luxe-input appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      data-testid="booking-date"
                      className="luxe-input"
                      min={today}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-time"
                      className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                    >
                      Preferred Time
                    </label>
                    <input
                      id="booking-time"
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      data-testid="booking-time"
                      className="luxe-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-message"
                    className="text-[10px] tracking-[0.22em] text-[#D4AF37]/85 uppercase block mb-2"
                  >
                    Note (optional)
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any details we should know"
                    data-testid="booking-message"
                    className="luxe-input resize-none"
                  />
                </div>

                {error && (
                  <p
                    id="booking-error"
                    className="text-sm text-red-400"
                    data-testid="booking-error"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="booking-submit"
                  className="btn-gold w-full justify-center disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="w-4 h-4" />
                      Request Bridal Consultation
                    </>
                  )}
                </button>

                <p className="text-xs text-zinc-500 text-center inline-flex items-center justify-center gap-1.5 w-full">
                  <MessageCircle className="w-3 h-3 text-[#D4AF37]" /> Submitting
                  opens WhatsApp with your details prefilled
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
