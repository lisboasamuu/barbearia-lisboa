# Barbearia Lisboa

Site responsivo de barbearia com agendamento público e painel administrativo protegido. O projeto usa repositório, Supabase e Vercel próprios. Criei esse projeto linkado aquele do negocio-ns pois sera uma serie de projetos volatados a sites para negocios.

## O que está incluído

- Landing page em `/barbearia-lisboa`.
- Agendamento público em `/barbearia-lisboa/agendar`.
- Atalhos `/agendar` e `/agenda` configurados na Vercel.
- Painel administrativo em `/barbearia-lisboa/agenda`.
- Serviços, horários, disponibilidade semanal e bloqueios configuráveis.
- Criação manual e cancelamento lógico de agendamentos.
- Proteção contra choque de horários no banco.
- Supabase Auth, RLS e RPCs seguras.
- Fuso de negócio `America/Sao_Paulo` e timestamps armazenados em UTC.
- Integração alternativa com WhatsApp.
- Interface mobile-first e animações compatíveis com `prefers-reduced-motion`.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Supabase/PostgreSQL
- Vitest
- Vercel

## Rotas

| Rota | Acesso | Uso |
| --- | --- | --- |
| `/barbearia-lisboa` | Público | Site institucional |
| `/barbearia-lisboa/agendar` | Público | Agendamento sem cadastro |
| `/barbearia-lisboa/agenda` | Administrador | Gestão da agenda |
| `/agendar` | Público | Atalho para agendamento |
| `/agenda` | Administrador | Atalho para o painel |

## 1. Instalação local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse `http://localhost:3000/barbearia-lisboa/`.

## 2. Supabase próprio

Crie um projeto novo no Supabase. Não compartilhe o banco com outro negócio, pois o modelo atual representa um único estabelecimento.

No SQL Editor do novo projeto, execute nesta ordem:

1. `supabase/migrations/20260915070000_mvp2_appointments.sql`
2. `supabase/migrations/20260916070000_mvp21_weekday_services.sql`
3. `supabase/seed.sql`

O seed cria apenas os serviços e horários iniciais da barbearia. Ele não cria clientes nem agendamentos fictícios.

## 3. Variáveis de ambiente

Preencha `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON
```

Use somente a chave pública `anon` no frontend. Nunca exponha a `service_role`.

## 4. Administrador

Crie o usuário em Supabase → Authentication → Users. Depois autorize o UUID exato no SQL Editor:

```sql
insert into public.admin_users (user_id)
select id from auth.users where email = 'dono@barbearia.com';
```

Não existe cadastro público de administradores. A proteção usa Supabase Auth, RLS e a tabela `admin_users`.

## 5. Desenvolvimento e validação

```bash
npm run typecheck
npm test
npm run build
```

## 6. Vercel próprio

Crie um projeto novo na Vercel apontando para o repositório `barbearia-lisboa`. Cadastre as mesmas duas variáveis de ambiente e faça o deploy.

## Onde personalizar

- Nome, WhatsApp, endereço, Instagram e horários exibidos: `lib/business.ts`.
- Serviços e textos da landing page: `lib/content.ts`.
- Serviços e expediente iniciais do banco: `supabase/seed.sql`.
- Imagens: `public/images/`.
- Identidade visual: `app/globals.css`.

O endereço está marcado como `Endereço a definir` até receber o dado real da barbearia.
