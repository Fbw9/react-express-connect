const express = require('express')
const path = require('path')

const app = express()

//Routing for react front end
app.use(express.static(path.join(__dirname, 'client/build')))

//Endpoint for some items
app.get('/api/getItems', (req, res) => {
    const items = ['shoes', 'socks', 'underwear']
    res.json(items)
})

//Any additional requests
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(process.env.PORT || 3001, () => {
    console.log('Listening on Port 3001')
} )
