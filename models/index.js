let mongoose = require('mongoose')


//connect to mongodb
mongoose.connect(process.env.MONGOD_URI || 'mongod://localhost/zdate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

module.exports.User = require('./user')
module.exports.OurUser = require('./ouruser')