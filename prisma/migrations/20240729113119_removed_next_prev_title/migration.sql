/*
  Warnings:

  - You are about to drop the column `nextTitle` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `prevTitle` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "nextTitle",
DROP COLUMN "prevTitle";
