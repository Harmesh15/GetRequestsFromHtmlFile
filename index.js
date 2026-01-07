const express = require("express");
const app = express();
const productrouter = require("./routes/productRoutes");

app.use(express.static('public'));
app.use(express.json());

app.use("/api",productrouter)


app.listen(3000,()=>{
    console.log(`Server is listening at 3000`);
})