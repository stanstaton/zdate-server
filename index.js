//required packages
let cors = require('cors')
let express = require('express')
let morgan = require('morgan')
let rowdyLogger = require('rowdy-logger')
require('dotenv').config()

//initiate app
let app = express()
let rowdyResults = rowdyLogger.begin(app)

//middleware
app.use(express.urlencoded({ extended: false,limit: '50mb' }))
app.use(express.json({ limit: '10mb' }))
app.use(cors())
app.use(morgan('dev'))

//controllers
app.use('/users', require('./controllers/users'))


//routes
app.get('*', (req,res) => {
    res.status(404).send({message: 'No one is home right now to take your message'})

})

app.listen(process.env.PORT || 3001, () => {
    console.log('Server started')
    rowdyResults.print()
})

