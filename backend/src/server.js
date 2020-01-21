const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.json({
        message: 'PergunteME'
    })
})

app.listen(3333);