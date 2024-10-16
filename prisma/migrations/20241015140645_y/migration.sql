-- CreateTable
CREATE TABLE "Urls" (
    "compressed_url" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "username_lower" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPro" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Urls_compressed_url_key" ON "Urls"("compressed_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_lower_key" ON "User"("username_lower");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
