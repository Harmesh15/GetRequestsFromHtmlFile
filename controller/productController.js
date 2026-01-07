const path = require("path");

const getAllProducts =(req,res)=>{
    
    res.sendFile(path.join(__dirname,"..","view","viewProduct.html"));

}
const getAllProductss =(req,res)=>{
    
    res.sendFille(path,__dirname,"..","view","viewProduct.html");

}
const addnewData=(req,res)=>{
    
    const data = req.body;
    res.json({value:data.productName});
}
module.exports = {
    getAllProducts,
    getAllProductss,
    addnewData
}