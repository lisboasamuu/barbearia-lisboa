import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { BrandLockup } from "@/components/brand-lockup";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/icons";
import { business, navigation, whatsappSupportActions, whatsappUrl } from "@/lib/business";
import { differentiators, journey, services } from "@/lib/content";
import "./public-design.css";

export const metadata: Metadata = {
  title: "Barbearia Lisboa | Corte, barba e presença",
  description: "Corte, barba e acabamento com hora marcada. Agende online na Barbearia Lisboa.",
};

const whatsappLinkProps = {
  href: whatsappUrl,
  target: "_blank",
  rel: "noreferrer",
};

function EditorialTitle({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="bp-heading">
      <p className="bp-kicker">{eyebrow}</p>
      <h2>{title}{accent ? <><br /><span>{accent}</span></> : null}</h2>
    </div>
  );
}

export default function BarbeariaLisboaPage() {
  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3);

  return (
    <div className="barber-public">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <ScrollReveal />
      <SiteHeader />

      <main id="conteudo">
        <section id="inicio" className="bp-hero scroll-mt-24" aria-labelledby="hero-title">
          <Image
            src="/images/hero-editorial.webp"
            alt="Barbeiro segurando uma máquina de corte diante de uma parede escura"
            fill
            priority
            sizes="100vw"
            className="bp-hero-image"
          />
          <div className="bp-hero-shade" aria-hidden="true" />
          <div className="bp-grain" aria-hidden="true" />

          <div className="container-shell bp-hero-layout">
            <div className="bp-hero-copy" data-reveal>
              <p className="bp-overline"><span>Barbearia Lisboa</span> Corte autoral · Hora marcada</p>
              <h1 id="hero-title">
                Corte.<br />
                Barba.<br />
                <strong>Presença.</strong>
              </h1>
              <p className="bp-hero-text">
                Técnica precisa, conversa direta e um visual que continua sendo seu.
              </p>
              <div className="bp-actions">
                <a className="bp-button bp-button-primary" href="/barbearia-lisboa/agendar/">
                  Reservar horário <ArrowUpRightIcon aria-hidden="true" />
                </a>
                <a className="bp-button bp-button-outline" href="#servicos">Conhecer serviços</a>
              </div>
            </div>

            <div className="bp-hero-stamp" aria-hidden="true">
              <span>BL</span>
              <small>Estilo sem atalhos</small>
            </div>
            <p className="bp-hero-side" aria-hidden="true">Corte · Barba · Acabamento · Lisboa</p>
          </div>

          <div className="bp-hero-bottom">
            <span>01</span>
            <p>Role para conhecer</p>
            <i aria-hidden="true" />
          </div>
        </section>

        <section id="servicos" className="bp-section bp-services scroll-mt-20" aria-labelledby="services-title">
          <div className="container-shell">
            <div className="bp-section-intro" data-reveal>
              <EditorialTitle eyebrow="O que fazemos" title="Serviços sem" accent="enrolação." />
              <p>
                Escolha o que precisa. O tempo de cada serviço já fica reservado para o acabamento receber a mesma atenção do corte.
              </p>
            </div>

            <div className="bp-service-grid">
              <div className="bp-service-column">
                {leftServices.map((service, index) => (
                  <article className="bp-service-item" key={service.title} data-reveal>
                    <span>0{index + 1}</span>
                    <div><h3>{service.title}</h3><p>{service.description}</p></div>
                    <strong>{service.duration}</strong>
                  </article>
                ))}
              </div>

              <div className="bp-tools-art" data-reveal>
                <Image
                  src="/images/tools-editorial.webp"
                  alt="Tesoura, navalha e pente sobre uma composição gráfica laranja"
                  fill
                  sizes="(max-width: 960px) 92vw, 31vw"
                  className="object-cover"
                />
                <div className="bp-tools-caption">
                  <small>Ferramenta + técnica</small>
                  <strong>Detalhe não é extra.</strong>
                </div>
              </div>

              <div className="bp-service-column">
                {rightServices.map((service, index) => (
                  <article className="bp-service-item" key={service.title} data-reveal>
                    <span>0{index + 4}</span>
                    <div><h3>{service.title}</h3><p>{service.description}</p></div>
                    <strong>{service.duration}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="bp-services-cta" data-reveal>
              <p>Já sabe o que vai fazer?</p>
              <a className="bp-text-link" href="/barbearia-lisboa/agendar/">Ver horários livres <ArrowUpRightIcon /></a>
            </div>
          </div>
        </section>

        <div className="bp-marquee" aria-hidden="true">
          <div>CORTE <span>✦</span> BARBA <span>✦</span> ACABAMENTO <span>✦</span> ATITUDE <span>✦</span> LISBOA</div>
        </div>

        <section id="experiencia" className="bp-section bp-experience scroll-mt-20" aria-labelledby="experience-title">
          <div className="container-shell bp-experience-grid">
            <div className="bp-experience-photo" data-reveal>
              <Image
                src="/images/studio-barbearia.webp"
                alt="Cadeira de couro e bancada da Barbearia Lisboa"
                fill
                sizes="(max-width: 960px) 92vw, 46vw"
                className="object-cover"
              />
              <div className="bp-photo-tag"><strong>Sem pressa.</strong><span>Sem atraso.</span></div>
            </div>

            <div className="bp-experience-copy" data-reveal>
              <EditorialTitle eyebrow="A experiência" title="A cadeira" accent="é sua." />
              <p className="bp-lead">
                Você não entra numa linha de produção. Primeiro vem a conversa; depois, um corte pensado para o seu rosto, seu cabelo e sua rotina.
              </p>
              <div className="bp-principles">
                {differentiators.map((item) => (
                  <article key={item.number}>
                    <span>{item.number}</span>
                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
              <a className="bp-button bp-button-dark" {...whatsappLinkProps}>
                Falar com a barbearia <WhatsAppIcon aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bp-section bp-booking" aria-labelledby="journey-title">
          <div className="bp-grain" aria-hidden="true" />
          <div className="container-shell">
            <div className="bp-booking-head" data-reveal>
              <EditorialTitle eyebrow="Agendamento online" title="Seu horário." accent="Sem espera." />
              <p>A agenda mostra somente os horários realmente livres para o serviço escolhido.</p>
            </div>

            <ol className="bp-steps">
              {journey.map((step) => (
                <li key={step.number} data-reveal>
                  <span>0{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>

            <div className="bp-booking-actions" data-reveal>
              <a className="bp-button bp-button-primary" href="/barbearia-lisboa/agendar/">
                Escolher meu horário <ArrowUpRightIcon aria-hidden="true" />
              </a>
              <a className="bp-whatsapp-link" {...whatsappLinkProps}><WhatsAppIcon /> Prefiro WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="bp-section bp-support" aria-labelledby="help-title">
          <div className="container-shell">
            <div className="bp-support-head" data-reveal>
              <EditorialTitle eyebrow="Depois de agendar" title="Mudou o plano?" accent="Fala com a gente." />
            </div>
            <div className="bp-support-grid">
              {whatsappSupportActions.map((action, index) => (
                <a href={action.href} key={action.title} target="_blank" rel="noreferrer" data-reveal>
                  <span>0{index + 1}</span>
                  <WhatsAppIcon aria-hidden="true" />
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                  <strong>Iniciar conversa <ArrowUpRightIcon /></strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-final-cta" aria-labelledby="final-cta-title">
          <div className="bp-final-mark" aria-hidden="true">BL</div>
          <div className="container-shell" data-reveal>
            <p>Seu próximo corte começa aqui.</p>
            <h2 id="final-cta-title">O espelho vai<br /><span>confirmar.</span></h2>
            <a className="bp-button bp-button-light" href="/barbearia-lisboa/agendar/">
              Agendar agora <ArrowUpRightIcon aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer id="contato" className="bp-footer scroll-mt-20">
        <div className="container-shell">
          <div className="bp-footer-top">
            <a href="#inicio" className="brand-mark" aria-label={`${business.name} — ir ao início`}><BrandLockup /></a>
            <p>Corte, barba e acabamento com técnica, atenção e hora marcada.</p>
            <a className="bp-text-link" href="/barbearia-lisboa/agendar/">Agendar horário <ArrowUpRightIcon /></a>
          </div>
          <div className="bp-footer-grid">
            <nav aria-label="Navegação do rodapé">
              <h2>Navegação</h2>
              {navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </nav>
            <address>
              <h2>Contato</h2>
              <p><strong>WhatsApp</strong>{business.whatsappDisplay}</p>
              <p><strong>Endereço</strong>{business.address}</p>
              <p><strong>Horário</strong>{business.openingHours}</p>
              <p><strong>Instagram</strong><a href={business.instagramUrl} target="_blank" rel="noreferrer">{business.instagram}</a></p>
            </address>
          </div>
          <div className="bp-footer-bottom">
            <p>© {new Date().getFullYear()} {business.name}</p>
            <p>{business.tagline}</p>
          </div>
        </div>
      </footer>

      <a className="bp-floating-whatsapp" {...whatsappLinkProps} aria-label="Agendar pelo WhatsApp">
        <WhatsAppIcon aria-hidden="true" /><span>Agendar</span>
      </a>
    </div>
  );
}
