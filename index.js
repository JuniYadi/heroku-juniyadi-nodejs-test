const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'success',
        data: [
            {
                status: 'oke'
            }
        ]
    })
})

app.listen(3000, () => {
    console.log('Node running in port 3000')
})