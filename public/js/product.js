const handleonsubmit=(e)=>{
    e.preventDefault();
    const product = e.target.productName.value;
    let obj ={
      "productName":product,
    }
  
  axios.post('http://localhost:3000'+"/api/products",obj).then((result)=>{
      console.log("hello from post request",result.data.value);
    })
}