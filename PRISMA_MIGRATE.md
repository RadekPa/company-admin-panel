## Migration and seeding instructions

I added an `Invoice` model to `prisma/schema.prisma` and updated `prisma/seed.ts` to create sample invoices for the seeded clients.

To apply these changes locally, run the following steps in your project root (macOS / zsh):

```bash
# 1. Install Prisma CLI (if not installed)
npx prisma --version

# 2. Create a migration and update the database
npx prisma migrate dev --name add-invoice --preview-feature

# 3. Regenerate Prisma client (should happen automatically after migrate)
npx prisma generate

# 4. Run seed script (if package.json has a seed script) or run directly:
node prisma/seed.ts

# If your project uses ts-node for seed.ts, run:
npx ts-node prisma/seed.ts
```

Notes:
- I updated `prisma/seed.ts` to use `(prisma as any).invoice` — after running `npx prisma generate` the typed client will include `prisma.invoice` and you can remove the `as any` cast.
- Ensure your `DATABASE_URL` env var is set and points to the correct Postgres database before running the migration.