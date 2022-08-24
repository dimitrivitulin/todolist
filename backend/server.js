let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database')
    bodyParser = require('body-parser')

mongoose.Promise = global.Promise;

mongoose.connect(database.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
console.log("Database connected successfully");
}),error =>{
    console.log("cannot connect to database " + error);
}

// api

const todoAPI = require('../backend/routes/Todos.route')
const app =express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())

app.use('/api', todoAPI)

const port = process.env.PORT || 4000;
const server = app.listen(port, () =>{
    console.log("connect to port " + port);
})

app.use((req,rex,next) =>{
    next(createError(404))
})

app.use(function(err, rea, res, next) {
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})