const app = require('express')();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/pages/frontpage/frontpage.html');
});



app.listen(8080);