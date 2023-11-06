import prisma from "../prisma.js";

class BoardGameSeeder {
  static async seed() {
    const gamesData = [
      {
        title: "Risk",
        minimumAmountOfPlayers: 2,
        maximumAmountOfPlayers: 6,
        description: "A Game of world domination. Seek shelter in Australia.",
      },
      {
        title: "Monopoly",
        minimumAmountOfPlayers: 2,
        maximumAmountOfPlayers: 6,
        description: "Money Money Money $$$",
      },
    ]

    for (const singleGameData of gamesData) {
      const currentGame = await prisma.boardGame.findFirst({ 
        where: {
          title: singleGameData.title
        }
      })
      if (!currentGame) {
        await prisma.boardGame.create({ data: singleGameData })
      }
    }
  }
}

export default BoardGameSeeder
