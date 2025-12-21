# Next.js Admin Panel (Advanced) + PostgreSQL + Prisma + NextAuth + Tailwind + Zod + TailAdmin v2

Rozszerzona wersja: paginacja, filtrowanie, sortowanie na listach, walidacja Zod, integracja komponentów TailAdmin v2 (layout, sidebar, header, karty, tabela).

## Szybki start

```bash
docker compose up -d
cp .env.example .env
# wygeneruj NEXTAUTH_SECRET
openssl rand -base64 32
npm install
npm run db:migrate
npm run db:generate   # wygeneruje również zod z prisma-zod-generator
npm run db:seed
npm run dev
```

## Dane logowania
- email: admin@example.com
- hasło: admin123

## Zmiany vs wersja podstawowa
- [x] Paginacja (server-side, meta w odpowiedzi API)
- [x] Filtrowanie (search dla klientów i dokumentów, status dla dokumentów)
- [x] Sortowanie (kolumny id/name/email/phone/createdAt dla klientów, itp.)
- [x] Walidacja wejścia (Zod) po stronie API i klienta
- [x] TailAdmin v2: layout, sidebar, header, komponenty UI (Button, Card, Table, Pagination)

## Generatory Zod z Prisma
W `prisma/schema.prisma` dodano generator:
```prisma
generator zod {
  provider = "prisma-zod-generator"
  output   = "./src/zod"
}
```
Po `npm run db:generate` w `src/zod` pojawią się gotowe schematy Zod.

## API parametry
- `GET /api/clients?search=&page=1&pageSize=10&sortBy=name&sortOrder=asc`
- `GET /api/clients/:id/documents?search=&status=&page=1&pageSize=10&sortBy=createdAt&sortOrder=desc`

## Licencja
MIT

## Deploy helper

- `./scripts/create_and_push_github.sh <github-account> [repo-name] [public|private]` — helper to create a repo under the given account and push current repo. Requires `gh` CLI or `GITHUB_TOKEN`.
