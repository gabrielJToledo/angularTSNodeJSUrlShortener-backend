import { Schema, Model, model } from 'mongoose'
import { IUrl } from '../domain/interfaces/url.interface'

const urlShortnerSchema = new Schema({
    url: {
        type: String
    },
    urlShortner: {
        type: String
    }
})

export const UrlModel: Model<IUrl> = model<IUrl>('Url', urlShortnerSchema)