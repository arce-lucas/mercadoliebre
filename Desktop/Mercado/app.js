const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'./public');
app.use(express.static('public'));
/* const PORT=process.env.PORT || 3000; */



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.'));
})

app.get('/formlogin', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/formlogin.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})
app.listen(3000,() => {console.log("Servidor escuchando puerto 3000")});
/* app.listen (3000, () => {
    console.log('Servidor corriendo en el puerto'+PORT);
}); */