import { WhatsAppIcon } from "./site-nav";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Naiyapudai%2C%20I'd%20like%20to%20talk%20about%20a%20project."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Naiyapudai on WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 grid place-items-center hover:scale-105 transition-transform animate-float-slow"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
