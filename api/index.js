const express = require('express'); // exportar las clases de express
const app = express();    // creamos la app
const port = process.env.PORT || 3000;

app.get('/api', (req, res)=>{   // crear funcion anonima
    res.send("Hola caracola");
});

app.listen(port, ()=>{
    console.log(`Server ejecutando en el puerto ${port}`);
});

// http://localhost:3000/api