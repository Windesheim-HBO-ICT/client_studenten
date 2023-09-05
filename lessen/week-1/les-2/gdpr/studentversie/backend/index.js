const express = require('express')
const app = express()
const port = 3000

app.get('/gdpr', (req, res) => {
    res.setHeader('Set-Cookie', 'gdpr=1; path=/; expires=Fri, 1 Nov 2024 23:59:59 GMT');
    res.json('OK');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})