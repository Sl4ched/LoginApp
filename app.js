const mongoose = require('mongoose')
const express =require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.static('global'))
app.use(express.urlencoded({extended:true}))

//routers
const loginRouters = require('./routers/loginRouters')
const registerRouters = require('./routers/registerRoute')
const loginSuccessRoutes = require('./routers/lastScreenRoutes')

const url = 'mongodb+srv://Slached:254857Os@mysite.n8xf8lg.mongodb.net/loginDB'

mongoose.connect(url)
    .then(() => app.listen(3000))
    .catch(err => console.log(err))

app.use(('/login'),loginRouters)

app.use(('/register'),registerRouters)

app.use(('/login_success'),loginSuccessRoutes)

app.get('/', (req, res) => {
    res.redirect('/register')
})

app.use((req, res, next)=> {
    res.status(404).render('404')
    next()
})