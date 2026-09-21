import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";

export default function FloatingWhatsApp() {
  const wa = buildWhatsAppLink(
    "Hi Ganga Beauty Parlour! I'd like to know more."
  );

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      className="fixed z-40 rounded-full bg-[#25D366] hover:bg-[#1DA851] flex items-center justify-center float-wa transition-all duration-300"
      style={{
        right: "1.25rem",
        bottom: "calc(env(safe-area-inset-bottom, 0.5rem) + 1.25rem)",
        width: "56px",
        height: "56px",
        boxShadow: "0 10px 30px -5px rgba(37,211,102,0.5)"
      }}
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
