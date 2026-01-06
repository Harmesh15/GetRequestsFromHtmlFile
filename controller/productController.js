const path = require("path");

const getAllProducts =(req,res)=>{
    
    res.sendFile(path.join(__dirname,"..","view","viewProduct.html"));

}

const getAllProductss =(req,res)=>{
    
    res.sendFille(path,__dirname,"..","view","viewProduct.html");
}

module.exports = {
    getAllProducts,
    getAllProductss
}