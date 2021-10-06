import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Contact from '../models/contactModel.js'

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const contact = await Contact.find({})

    res.json(contact)
  })
)

export default router