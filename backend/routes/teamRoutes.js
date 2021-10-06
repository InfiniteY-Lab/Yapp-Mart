import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Team from '../models/teamModel.js'


router.get(
  '/',
  asyncHandler(async (req, res) => {
    const teams = await Team.find({})

    res.json(teams)
  })
)

export default router