import express from 'express'
import errorMiddleware from './middleware/errors'
import loggerMiddleware from './middleware/logger'
import { createLogger } from './utils/logger'

const app = express()
const port = 3000
export const logger = createLogger()

// routes have to been registered before middleware
export const router = express.Router()
require('./routes')
app.use(router)

// middleware
router.use(loggerMiddleware)
router.use(errorMiddleware)

app.listen(port, () => console.log(`Running on port ${port}`))
