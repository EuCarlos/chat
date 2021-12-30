import express from 'express'
import http from 'http'
import routes from './routes/routes'
import path from 'path'


const app = express()
const server = new http.Server(app)
var io = require('socket.io')(server)
const port = process.env.PORT || 8080


app.use(express.static(path.join(__dirname, '../public/scripts')))

app.use('/', routes)

server.listen(port, () => console.log(`🔥 Server is running in PORT ${port}`))

io.on('connection', (socket: any) => {
    console.log('A user has connected')

    socket.on('disconnect', () => {
        console.log('A user has disconnected')
    })
})