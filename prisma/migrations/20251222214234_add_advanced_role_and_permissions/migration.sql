-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'ADVANCED';

-- CreateTable
CREATE TABLE "RolePermissions" (
    "id" SERIAL NOT NULL,
    "module" TEXT NOT NULL,
    "userAccess" BOOLEAN NOT NULL DEFAULT false,
    "advancedAccess" BOOLEAN NOT NULL DEFAULT false,
    "adminAccess" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RolePermissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RolePermissions_module_key" ON "RolePermissions"("module");
