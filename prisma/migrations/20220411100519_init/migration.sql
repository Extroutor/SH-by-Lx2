/*
  Warnings:

  - You are about to drop the column `isLoggedIn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isLoggedIn";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
