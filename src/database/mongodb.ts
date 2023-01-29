import { connect, set } from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const mongodbURL = process.env.MONGODB_URL

export function connectDB() {
    set('strictQuery', false)

    try {
        connect(`${mongodbURL}`).then(() => console.log('Conexão com o mongoDB bem sucedida!'))
    } catch (err) {
        console.log(err)
    }
}