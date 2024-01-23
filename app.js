const express = require('express');
const path = require('path');

const app = express();

// const publicPath = path.resolve(__dirname, '/public');
app.use( express.static( 'public') );

const PORT  = process.env.PORT || 3000

app.listen( PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`) )

app.get('/', (req, res) => {
 res.sendFile(path.resolve(__dirname, './views/home.html'));
})