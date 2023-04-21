const express = require('express')
const cors = require('cors')

// Khởi tạo express
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./app/routes/authRouter')
app.use('/api/auth', router)

//static Images Folder

// app.use('/Images', express.static('./Images'))


//port
const PORT = process.env.PORT || 8080
app.get("/", function (req, res) {
    res.send("Trung nguyên")
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})