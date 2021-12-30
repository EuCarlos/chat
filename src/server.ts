import express from 'express'
import http from 'http'
import routes from './routes/routes'

const app = express()
const server = new http.Server(app)
const port = process.env.PORT || 8080

app.use('/', routes)

server.listen(port, () => console.log(`🔥 Server is running in PORT ${port}`))

// import express from 'express'
// import routesAPI from './routes/routes'
// import 'dotenv/config'
// // import cors from 'cors'
// import bodyParser from 'body-parser'

// const app = express()
// const port = process.env.PORT || 8080

// // Config CORS
// const allowedOrigins = [`http://localhost:${port}`]
// const options: cors.CorsOptions = { origin: allowedOrigins }


// app.use(cors(options))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/', routesAPI)

// app.listen(port, () => console.log(`🔥 Server is running in PORT ${port}`))