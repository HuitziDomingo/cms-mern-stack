import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { API_VERSION } from './config'



const app = express()

//Middelwares
app.use(cors())//para conectar backend
app.use(morgan("dev")) //para ver las peticiones que van llegando
app.use(express.json())


/**
 * Load Routing
 */

export default app