"use client";

import { useEffect, useState } from "react";
import { business, navigation } from "@/lib/business";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { BrandLockup } from "@/components/brand-lockup";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="bp-header sticky top-0 z-50">
      <div className="container-shell bp-header-inner">
        <a href="#inicio" className="brand-mark bp-header-brand" aria-label={`${business.name} — ir ao início`}>
          <BrandLockup priority />
          <span className="bp-brand-meta" aria-hidden="true">Est. 2026</span>
        </a>

        <nav className="bp-desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} className="nav-link focus-ring" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="bp-header-cta" href="/barbearia-lisboa/agendar/" aria-label="Agendar horário online">
          <span className="sm:hidden">Agendar</span>
          <span className="hidden sm:inline">Agendar horário</span>
          <ArrowUpRightIcon />
        </a>

        <button
          type="button"
          className="bp-menu-button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" className="bp-mobile-nav" aria-label="Navegação mobile">
          <div className="container-shell">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="bp-mobile-link"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="bp-mobile-cta" href="/barbearia-lisboa/agendar/" onClick={() => setIsOpen(false)}>
              Agendar online
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
