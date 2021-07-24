const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use("/", require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`);
        return;
    }
    console.log(`Server is up and running on Port : ${port}`);
})


