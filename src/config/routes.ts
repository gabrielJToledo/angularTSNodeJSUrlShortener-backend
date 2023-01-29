import { json } from 'express'
import { urlRouter } from '../controllers/url.controller'
import cors from 'cors'

export function initRoutes(app: any) {
    app.use(cors())
    app.use(json())
    app.use('/api/url', urlRouter)
}