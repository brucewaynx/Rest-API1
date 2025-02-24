const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



require("dotenv").config();
const userRoutes = require("./routes/userRoutes")

const app = express();
const port = 3030;

app.use(cors());
app.use(bodyParser.json());


app.use('/api', userRoutes);

let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
];

app.get('/item', (req, res) => {
    res.json(items);
});

app.get('/item/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
});

app.post('/item', (req, res) =>{
    const newItem = {id: items.length+1, name: req.body.name};
    items.push(newItem);
    res.status(201).json(items);
});

app.put('/item/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: "Item not found" });
    

    item.name = req.body.name || item.name; 
    res.json(item);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
