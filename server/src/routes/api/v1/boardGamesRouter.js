import express from "express"

import prisma from "../../../prisma/prisma.js"

const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
  try {
    const boardgames = await prisma.boardGame.findMany()
    console.log(boardgames)
    res.status(200).json({ boardGames: boardgames })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error })
  }
})

boardGamesRouter.get("/:id", async (req, res) => {
  try {
    const boardGameId = req.params.id
    console.log(req.params)
    const boardGame = await prisma.boardGame.findUnique({ where: { id: parseInt(boardGameId) } })
    res.status(200).json({ boardGame: boardGame })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error })
  }
})

export default boardGamesRouter
