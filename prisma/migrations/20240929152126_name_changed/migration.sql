/*
  Warnings:

  - You are about to drop the `URLs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "URLs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "urls" (
    "compressed_url" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_compressed_url_key" ON "urls"("compressed_url");
