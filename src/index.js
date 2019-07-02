const express = require ('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req , res) => {
    res.send('HELLO WORLD');

});

app.listen(3000);
