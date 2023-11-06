-- CreateTable
CREATE TABLE "BoardGame" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "minimumAmountOfPlayers" INTEGER NOT NULL,
    "maximumAmountOfPlayers" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BoardGame_pkey" PRIMARY KEY ("id")
);
