import mongoose from 'mongoose'
import app from './app'
import { config as dotenv } from 'dotenv'

dotenv()

const port = process.env.PORT

app.listen(port, console.log("SERVIDOR CORRIENDO EN PUERTO 4000"))

