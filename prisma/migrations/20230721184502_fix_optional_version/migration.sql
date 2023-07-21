-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_versionId_fkey";

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "versionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "Version"("id") ON DELETE SET NULL ON UPDATE CASCADE;
