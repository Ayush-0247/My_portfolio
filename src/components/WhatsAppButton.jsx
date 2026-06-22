import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "919939565466";

  return (
    <a
      href={`https://wa.me/${phone}?text=Hi%20Ayush,%20I%20visited%20your%20portfolio`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 right-6 z-50"
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
        <FaWhatsapp size={32} />
      </div>
    </a>
  );
}
