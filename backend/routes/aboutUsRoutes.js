import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Aboutus from '../models/aboutUsModel.js'


router.get(
  '/',
  asyncHandler(async (req, res) => {
    const aboutUs = await Aboutus.find({})

    res.json(aboutUs)
  })
)

export default router