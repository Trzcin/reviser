-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "modelId" TEXT;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("name") ON DELETE SET NULL ON UPDATE CASCADE;
