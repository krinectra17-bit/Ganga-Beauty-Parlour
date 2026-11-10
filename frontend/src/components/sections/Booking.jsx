import { useState, useEffect } from "react";
import { CalendarCheck, MessageCircle, Loader2, CheckCircle2, Check } from "lucide-react";
import {
  BRANCH_OPTIONS,
  SERVICES,
  PREMIUM_SERVICES,
  BRIDAL_PACKAGES,
  PREMIUM_BRIDAL_PACKAGES,
  OUT_OF_PARLOUR_MAKEUP,
  TWO_TIME_MAKEUP,
  THREE_TIME_MAKEUP,
  FACIAL_SERVICES,
  O3_PROFESSIONAL_FACIAL,
  HYDRA_FACIAL_SERVICES,
  LASER_TREATMENTS,
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

// Combined service options (regular services + updated rate card packages)
const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.name),
  ...BRIDAL_PACKAGES.map((p) => p.bookingLabel),
  ...PREMIUM_BRIDAL_PACKAGES.map((p) => p.bookingLabel),
  ...OUT_OF_PARLOUR_MAKEUP.map((p) => `Out of Parlour: ${p.name} (${p.price})`),
  ...TWO_TIME_MAKEUP.map((p) => p.bookingLabel),
  ...THREE_TIME_MAKEUP.map((p) => p.bookingLabel),
  ...FACIAL_SERVICES.map((f) => `${f.name} (${f.price})`),
  ...O3_PROFESSIONAL_FACIAL.map((f) => `${f.name} (${f.price})`),
  ...HYDRA_FACIAL_SERVICES.map((h) => `${h.name} (${h.price})`),
  ...LASER_TREATMENTS.map((l) => `${l.name} (${l.price})`),
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
      className="section bg-[#070707] relative overflow-hidden"
      data-sr
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
          <div data-sr data-sr-delay="60ms">
            <span className="eyebrow">Bespoke Consultation</span>
            <div className="gold-divider mt-2.5 mb-4 sm:mt-3 sm:mb-5" />
            <h2
              className="font-serif text-white text-3xl min-[400px]:text-4xl sm:text-5xl tracking-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Reserve your{" "}
              <span className="italic font-serif text-[#DFCEB8]">consultation.</span>
            </h2>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-zinc-300/80 sm:text-sm sm:leading-7">
              Share your ceremonial dates and preferred beauty rituals. We will verify artist availability and confirm your reservation directly on WhatsApp.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-zinc-300/85">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#c5a880] mt-0.5 shrink-0" />
                <span>Instant confirmation and appointment coordination on WhatsApp</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#c5a880] mt-0.5 shrink-0" />
                <span>Personalized skin and makeup consultation prior to bridal events</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#c5a880] mt-0.5 shrink-0" />
                <span>Flexible studio scheduling &middot; Mon&ndash;Sun, 10 AM &ndash; 8 PM</span>
              </li>
            </ul>
          </div>

          <div className="luxe-card-premium p-5 sm:p-6 md:p-7 rounded-2xl" data-sr data-sr-delay="120ms">
            {success ? (
              <div
                className="text-center py-8 sm:py-10"
                data-testid="booking-success"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a880]/12 border border-[#c5a880]/40 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6 text-[#c5a880]" />
                </div>
                <h3
                  className="font-serif text-2xl md:text-3xl text-white mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Consultation requested
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  We have prefilled WhatsApp with your selected details. Send the message to confirm &mdash; our atelier team responds promptly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  data-testid="booking-new"
                  className="mt-6 btn-outline-gold"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
                aria-describedby={error ? "booking-error" : undefined}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
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
                      className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
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
                    className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
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
                    className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
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
                    {form.service && !SERVICE_OPTIONS.includes(form.service) && (
                      <option value={form.service}>{form.service}</option>
                    )}
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
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
                      className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
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
                    className="text-[10px] tracking-[0.16em] text-[#c5a880]/90 uppercase block mb-1.5 font-medium"
                  >
                    Special Requests (optional)
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ceremony timing, guest count, or makeup preferences"
                    data-testid="booking-message"
                    className="luxe-input resize-none"
                  />
                </div>

                {error && (
                  <p
                    id="booking-error"
                    className="text-xs sm:text-sm text-red-400"
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
                  className="btn-gold w-full justify-center disabled:opacity-60 py-3 text-xs sm:text-sm"
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

                <p className="text-[11px] sm:text-xs text-zinc-500 text-center inline-flex items-center justify-center gap-1.5 w-full mt-1">
                  <MessageCircle className="w-3.5 h-3.5 text-[#c5a880]" />
                  Submitting directly initiates WhatsApp consultation with prefilled details
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
