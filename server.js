const express = require('express');
const app = express();
let port = 5000;

app.use(express.static('server/public'));

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})