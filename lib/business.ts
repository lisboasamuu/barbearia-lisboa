export const business = {
  name: "Barbearia Lisboa",
  shortName: "BL",
  tagline: "Estilo, precisão e presença.",
  whatsapp: "5519995376340",
  whatsappDisplay: "(19) 99537-6340",
  whatsappMessage:
    "Olá! Conheci a Barbearia Lisboa pelo site e gostaria de agendar um horário.",
  address: "Endereço a definir",
  instagram: "@lisboasamuu",
  instagramUrl: "https://www.instagram.com/lisboasamuu",
  openingHours: "Seg–sex, 9h–19h · sáb, 9h–17h",
  contactIsPlaceholder: true,
} as const;

export function createWhatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = createWhatsappUrl(business.whatsappMessage);

export const whatsappSupportActions = [
  {
    title: "Reagendar um horário",
    description: "Conte qual horário você reservou e qual nova data prefere.",
    href: createWhatsappUrl("Olá! Gostaria de reagendar um horário na Barbearia Lisboa."),
  },
  {
    title: "Cancelar um agendamento",
    description: "Fale com a equipe para cancelar com segurança e confirmar a alteração.",
    href: createWhatsappUrl("Olá! Gostaria de cancelar um agendamento na Barbearia Lisboa."),
  },
  {
    title: "Tirar uma dúvida",
    description: "Converse com a equipe sobre serviços, preparo ou atendimento.",
    href: createWhatsappUrl("Olá! Tenho uma dúvida sobre os serviços da Barbearia Lisboa."),
  },
] as const;

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;
