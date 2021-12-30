const router = require('express').Router()
import { Request, Response } from 'express'

router.get('/', (req: Request, res: Response) => {
    return res.json({ 
        message: "This is my chat application",
        author: "Carlos Alves",
        repo_link:  "https://github.com/EuCarlos/chat",
        website: "https://carlosalves.now.sh"
    })
})

export = router