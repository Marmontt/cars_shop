const express = require('express');
const path = require('path');
const mongo = require('mongodb').MongoClient;

const port = process.env.PORT || 9000;
const app = express();
const url = process.env.ATLAS_URI;
const mongo_config = {
    useNewUrlParser: true
};

app.use(express.static(path.join(__dirname, 'build')));


app.get('/cars', function (req, res) {
    let cars_list = [];
    mongo.connect(url, mongo_config, (err, client) => {
        if (err) console.log(err);
        client.db('cars_shop').collection('cars').find().forEach(car => {
            cars_list.push(car);
        }, () => {
            client.close().then(res.send(cars_list));
        });
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, console.log(`server started on ${port}`));