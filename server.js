const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/API/listCards', (req, res) => {
    const cards = []
    for (let i =0; i < 3; i++){
        const card = {
            id: i,
            title: `Card Title: ${i+1}`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere eos, quisquam ipsum consequuntur beatae. Sint, porro non! Temporibus tempora sed perspiciatis fugit perferendis unde hic, officiis quidem similique!`
        }
        // const card = `card ${i}`
        cards.push(card)
    }
    res.json(cards)
    // res.send({data: cards})
    console.log("Sent list of cards")
    // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });