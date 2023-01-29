import { IUrl } from './../domain/interfaces/url.interface';
import { Request, Response, Router } from 'express'
const shortener = require('node-url-shortener')

export const urlRouter = Router()

urlRouter.post('/', async (req: Request, res: Response) => {
    const bodyUrl: IUrl = { ...req.body }

    const urlRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/


    if (urlRegex.test(bodyUrl.url)) {
        shortener.short(`${bodyUrl.url}`, (err: any, urlShortenerRes: string) => {

            bodyUrl.urlShortened = urlShortenerRes

            return res.status(200).send(bodyUrl)
        })
    } else {
        return res.status(400).send('Url Inválida!')
    }

})