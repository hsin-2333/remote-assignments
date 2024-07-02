const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/getData', (req, res) => {
    if (!req.query.number) {
        res.send("Lack of Parameter");
    }
    else{
        const number = Number(req.query.number,10);
        // const number = parseInt(req.query.number,10);
        console.log(number);
        if (isNaN(number)){
            res.send('Wrong Parameter');
        }
        else{
            let result = (1+number)*number/2;
            res.send(`${result}`);
        }
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));
