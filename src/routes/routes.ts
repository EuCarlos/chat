const router = require('express').Router()
import { Request, Response } from 'express'
import path from 'path'

router.get('/author', (req: Request, res: Response) => {
    return res.json({ 
        message: "This is my chat application",
        author: "Carlos Alves",
        repo_link:  "https://github.com/EuCarlos/chat",
        website: "https://carlosalves.now.sh"
    })
})

router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../public/view/index.html'))
})

export = router