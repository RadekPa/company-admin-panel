-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "net" DOUBLE PRECISION NOT NULL,
    "vatPerc" INTEGER NOT NULL,
    "vat" DOUBLE PRECISION NOT NULL,
    "gross" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'issued',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
