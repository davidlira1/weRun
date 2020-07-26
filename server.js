const express = require('express');
const app = express();

app.use(express.static('client'));
app.use(express.static('public/dist'));




app.listen(3000, (err) => {
    if (err) console.err(err);

    console.log('listening on port 3000');

})