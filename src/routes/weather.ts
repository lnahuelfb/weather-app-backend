import express from 'express'

const router = express.Router()

interface Data {
  city: String,
  temperature: String,
  humidity: String,
  weather: String,
  wind: String
}

const data: Data = {
  city: 'Aldo Bonzi',
  temperature: '20° C',
  weather: 'rainy',
  humidity: '50%',
  wind: '10km/h'
}

router.get('/', (_req, res) => {
  res.send(data)
})
  
export default router