/*
  Warnings:

  - Made the column `userId` on table `Urls` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Urls" (
    "compressed_url" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Urls" ("compressed_url", "original_url", "updated_at", "userId") SELECT "compressed_url", "original_url", "updated_at", "userId" FROM "Urls";
DROP TABLE "Urls";
ALTER TABLE "new_Urls" RENAME TO "Urls";
CREATE UNIQUE INDEX "Urls_compressed_url_key" ON "Urls"("compressed_url");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
