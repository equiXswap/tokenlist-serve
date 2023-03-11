const express = require('express')
const app = express()
const port = 3020
const fs = require("fs");
const path = require("path");

let tokenList = {};

app.get('/', (get, res) => {
    return new Promise(resolve => {
        fs.readFile(
          path.join(__dirname, "./data/equix-default.tokenlist.json"),
          "utf8",
          (err, data) => {
            if (err) console.log({ err });
            const parsedData = JSON.parse(data);
            //export by reference
            tokenList = parsedData;
            // resolve(tokenList);
            res.send(tokenList)
          }
        );
      })
})

app.listen(port, () => {
    console.log(`Serving tokenList for EquiXswap on port ${port}`)
})