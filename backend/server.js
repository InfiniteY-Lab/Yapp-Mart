import express from 'express'
// const products = require('./data/products')
import dotenv from 'dotenv'
// import products from './data/products.js'
import connectDB from './config/db.js'
// const products=require('./data/products');
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import teamRoutes from './routes/teamRoutes.js'
import aboutUsRoutes from './routes/aboutUsRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()
connectDB();

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/users', userRoutes)

app.use('/api/products', productRoutes)

app.use('/api/teams', teamRoutes)
app.use('/api/aboutUs', aboutUsRoutes)
app.use('/api/contact', contactRoutes)
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
// app.listen(5000, console.log('Server running on port 5000'))