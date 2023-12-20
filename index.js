const express = require('express');
const path = require('path');
const userRoutes = require('./routes/route');


const app = express();

app.set("view engine", "ejs");







app.use("/libs", express.static(path.join(__dirname, 'node_modules')));
app.use("/assets", express.static(path.join(__dirname, 'assets')));
app.use(userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Site ${port} portunda çalışıyor`);
});


