-- CreateTable
CREATE TABLE "URLs" (
    "compressed_url" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "URLs_compressed_url_key" ON "URLs"("compressed_url");
