import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "491712326771";
  const message = "Hey! Ich hätte Interesse an ihrem Service!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;