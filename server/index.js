const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const { mongourl } = require('./keys');

require('./models/user'); 
const requireToken = require('./routes/middleware/requireToken');

const authRoute = require('./routes/authRoutes');

app.use(bodyParser.json());

app.use(authRoute);


mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('mongose atls conected')
});
mongoose.connection.on('error', (err) => {
    console.log(`mongoose error is : ${err}`)
});

app.get('/',requireToken,(req,res)=>{
    res.statusCode=200
    console.log(req.user);
        res.json({cruntUser:req.user});
        // res.send('your email is'+req.user.email,'your email is'+req.user.password);

})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is runing on port # ${port}`);
})