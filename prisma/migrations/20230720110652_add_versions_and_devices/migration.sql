-- CreateTable
CREATE TABLE "Version" (
    "id" TEXT NOT NULL,
    "uploadedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "binaryUrl" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,

    CONSTRAINT "Version_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "token" TEXT NOT NULL,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT,
    "versionId" TEXT NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Version" ADD CONSTRAINT "Version_modelName_fkey" FOREIGN KEY ("modelName") REFERENCES "Model"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "Version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
