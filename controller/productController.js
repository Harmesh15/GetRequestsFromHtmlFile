const path = require("path");
const { sendResponseErro,sendResponse} = require("../utils/response");

// const getAllProducts =(req,res)=>{
    
//     res.sendFile(path.join(__dirname,"..","view","viewProduct.html"));

// }

const getAllProducts =(req,res,next)=>{
   
    try{
       const user = req.params.id;
    if(user>10){
        let err = new Error("User not found");
        err.statusCode = 404;
        throw err;
        
        // return sendResponseErro(res,{message:"User not found",statusCode:404});
    }
    return sendResponse(res,user,200);

    }
    catch (error){
        return sendResponseErro(res,error);
    }

}

const addnewData=(req,res,next)=>{

   try{

     const {name,email} = req.body;
    
    if(!name || !email){
        let err = new Error("Name and email not found")
        err.statusCode = 400;
        throw err;
        // return sendResponseErro(res,{message:"Name and email not found",statusCode:400});
    }

    const user = {id:1,name,email};
    return sendResponse(res,user,201);

   } catch(error){
      return sendResponseErro(res,error);
   }


   
    
}

module.exports = {
    getAllProducts,
    addnewData
}