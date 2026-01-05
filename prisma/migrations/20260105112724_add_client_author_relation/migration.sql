-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "clientId" INTEGER;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
