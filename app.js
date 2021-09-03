const express = require('express');

const app = express(); 

app.use(express.static('public'));

app.get('/home', (request,response,next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home.html');
}); 

app.get('/about', (request,response,next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
}); 

app.get('/gallery', (request,response,next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
}); 

app.get('/works', (request,response,next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/works.html');
}); 

app.get('/search', (request,response) => {
    console.log(request.query);
    response.send(request.query);
});

app.listen(3000, () => console.log('servidor ligado na porta 3000'));