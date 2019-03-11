const router = require('express').Router()
const { Quote } = require('../models/db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const quote = await Quote.findRandom()
    res.json(quote)
  } catch (err) {
    next(err)
  }
})

router.get('/all', async (req, res, next) => {
  try {
    const quotes = await Quote.findAll()
    res.json(quotes)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { quote, author, source } = req.body
    const newQuote = await Quote.create({quote, author, source}, {returning: true})
    res.json(newQuote)
  } catch (error) {
    next(error)
  }
})
