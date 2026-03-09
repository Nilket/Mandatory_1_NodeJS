import express from 'express';
import path from 'path';

const app = express();
app.use(express.static('public'));
app.use(express.json());

// <=================================== PAGES =================================>

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'));
});



// <=================================== API ===================================>




const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log("Server started on port", server.address().port);
});