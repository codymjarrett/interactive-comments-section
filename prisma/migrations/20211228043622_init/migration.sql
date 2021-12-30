/*
  Warnings:

  - You are about to drop the column `messageId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_messageId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "messageId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "username" TEXT;
