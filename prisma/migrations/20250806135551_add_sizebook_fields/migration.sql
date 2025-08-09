-- CreateTable
CREATE TABLE "public"."SizeBook" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "sketchUrl" TEXT,
    "bustCircumference" DOUBLE PRECISION,
    "waistCircumference" DOUBLE PRECISION,
    "hipCircumference" DOUBLE PRECISION,
    "backLength" DOUBLE PRECISION,
    "backWidth" DOUBLE PRECISION,
    "frontLength" DOUBLE PRECISION,
    "frontWidth" DOUBLE PRECISION,
    "shoulderLength" DOUBLE PRECISION,
    "sleeveLength" DOUBLE PRECISION,
    "armholeCircumference" DOUBLE PRECISION,
    "armCircumference" DOUBLE PRECISION,
    "dressLength" DOUBLE PRECISION,
    "hipHeight" DOUBLE PRECISION,
    "sideLength" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SizeBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SizeBook" ADD CONSTRAINT "SizeBook_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
