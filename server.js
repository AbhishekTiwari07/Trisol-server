const express = require('express')
const app = express()
const cors = require('cors')
const patient = require('./routes/patient')
require('./db/db')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/patient', patient)

app.listen(PORT, (err)=>{
    if (err) 
        console.log(err.message)
    console.log(`Server is up at ${PORT}`)
})