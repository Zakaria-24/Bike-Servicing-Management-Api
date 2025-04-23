/*
  Warnings:

  - Changed the type of `status` on the `serviceRecords` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('pending', 'in_progress', 'done');

-- AlterTable
ALTER TABLE "serviceRecords" DROP COLUMN "status",
ADD COLUMN     "status" "ServiceStatus" NOT NULL;

-- DropEnum
DROP TYPE "BikeStatus";
