import Link from "next/link";
import type { Metadata } from "next";
import { BookingFlow } from "@/components/booking/booking-flow";
import { WhatsAppIcon } from "@/components/icons";
import { business, whatsappUrl } from "@/lib/business";
import { BrandLockup } from "@/components/brand-lockup";
import "../public-design.css";

export const metadata: Metadata = {
  title: "Agendar | Barbearia Lisboa",
  description: "Escolha o serviço, a data e o horário do seu atendimento na Barbearia Lisboa.",
};

export default function BookingPage() {
  return (
    <main className="barber-public bp-booking-page">
      <div className="bp-grain" aria-hidden="true" />
      <div className="container-shell bp-booking-shell">
        <header className="bp-booking-page-header">
          <Link className="brand-mark" href="/barbearia-lisboa/">
            <BrandLockup priority />
          </Link>
          <a className="bp-booking-help" href={whatsappUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-5" />
            <span className="hidden sm:inline">Prefere WhatsApp?</span>
          </a>
        </header>
        <BookingFlow />
        <p className="bp-booking-timezone">
          Horários exibidos em Brasília · {business.whatsappDisplay}
        </p>
      </div>
    </main>
  );
}
