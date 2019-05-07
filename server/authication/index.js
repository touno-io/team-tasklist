const bodyParser = require('body-parser')
const logger = require('@debuger')('AUTH')

const { Router } = require('express')
const router = Router()

router.use(bodyParser.json())
router.get('/', require('./router/callback'))
router.post('/', require('./router/callback'))
router.get('/user', require('./router/user'))
router.post('/login', require('./router/login'))
router.post('/logout', (req, res) => res.json({ ok: true }).end())

// Export the server middleware
module.exports = () => {
  const port = process.env.PORT || 3001
  logger.start(`Authentication on ${port} created`)
  return router
}