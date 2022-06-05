import express from 'express'
import { Data } from '../interfaces/interfaces'

const router = express.Router()

const data: Data = {
  city: 'Aldo Bonzi',
  temperature: '20° C',
  feelsLike: '19° C',
  tempMin: '10° C',
  tempMax: '23° C',
  weather: 'Rainy',
  humidity: '50%',
  wind: '10km/h'
}

router.get('/', (_req, res) => {
  res.send(data)
})

export default router