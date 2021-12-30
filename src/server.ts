import express from 'express'
import http from 'http'
import routes from './routes/routes'

const app = express()
const server = new http.Server(app)
const port = process.env.PORT || 8080

app.use('/', routes)

server.listen(port, () => console.log(`🔥 Server is running in PORT ${port}`))