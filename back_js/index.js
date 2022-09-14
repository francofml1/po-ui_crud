const express = require('express');
const { all } = require('express/lib/application');
var cors = require('cors');
const fs = require("fs")

const db_path = './db.json';
let db = require(db_path);

// APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

app.post('/assets', (req, res) => {
    console.log("POST '/assets'");
    const { name, price } = req.body;

    let id = Math.max(...db.items.map(o => o.id)) + 1;

    const asset = { id, name, price };
    db.items.push(asset);

    saveJSON(db_path, db);

    return res.status(201).json(asset);
});

app.get('/assets', (req, res) => {
    console.log("GET '/assets'");
    const allAssets = db;
    return res.status(200).json(allAssets);
});


app.get('/assets/:id', (req, res) => {
    console.log("GET '/assets/:id'");
    const { id } = req.params;
    const asset = db.items.find((asset) => asset.id == id);

    if (!asset)
        return res.status(404).json('não encontrado')
    return res.status(200).json(asset);
})

app.put('/assets/:id', (req, res) => {
    console.log("PUT '/assets/:id'");
    const { id, name, price } = req.body;
    const asset = { id, name, price };

    db.items = db.items.map((item) => {
        if (item.id == id)
            return { ...item, name: name, price: price }
        return item;
    });

    saveJSON(db_path, db);

    return res.status(200).json(asset);
});

app.delete('/assets/:id', (req, res) => {
    console.log("DELETE '/assets/:id'");
    const { id } = req.params;

    console.log('id:', id);
    console.log('before: ', db.items)
    
    db.items = db.items.filter(asset => asset.id != id);
    console.log('after: ', db.items)
    
    saveJSON(db_path, db);

    return res.status(204).json({});
});

// RUN SERVER
app.listen(3333, () => console.log("Server running"))

function saveJSON(file, obj) {
    fs.writeFileSync(file, JSON.stringify(obj), (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}