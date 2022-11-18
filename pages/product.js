import Link from "next/link";
// import initDB from "../helpers/initDB"

// import Product from "../models/Product";
import { useState } from "react";

// initDB()

// export default (res,req)=>{
//   switch(req.method)
//   {
//     case "GET":
//     await getallProducts(req,res)
//     break
//     case "POST":
//     await saveProduct(req,res)
//     break
//   }
// }

// const getallProducts =async(req,res)=>{
//   Products.find().then(products=>{
//     res.status(200).json(products)
//   })
// }

// const saveProduct= async(req,res)=>{
//   const {name,price,description,mediaUrl}=req.body
//   if(!name || !price || !description || !mediaUrl){
// return res.status(422).json({error:"please add all the fields"})}
//  const product = await new Product({
//   name,
//   price,
//   description,
//   mediaUrl
//  }).save()
//  res.status(201).json(product)

// }

const Product = () => {
  const [image, setImage] = useState("");
  return (
    <div
      style={{
        dispaly: "flex",
        justifyContent: "center",
        marginLeft: "70px",
        marginTop: "50px",
        width: "30%",
      }}
    >
      <input
        type="text"
        style={{
          border: "2px solid #808080",
          borderRadius: "4px",
          paddingLeft: "4px",
        }}
        placeholder="Name..."
      ></input>
      <input
        style={{
          border: "2px solid #808080",
          paddingLeft: "4px",
          borderRadius: "4px",
        }}
        type="text"
        placeholder="Price..."
      ></input>
      <input
        onChange={(e) => setImage(e.target.value)}
        style={{
          border: "none",
          underline: "none",
          marginTop: "5px",
          marginBottom: "12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        type="file"
      ></input>
      <div>{image}</div>
      <input
        placeholder="Description..."
        style={{
          border: "2px solid #808080",
          paddingLeft: "4px",
          borderRadius: "4px",
        }}
        type="text"
      ></input>
      <button
        style={{
          backgroundColor: "green",
          cursor: "pointer",
          height: "40px",
          width: "100px",
          border: "none",
          borderRadius: "12px",
          color: "white",
          fontWeight: "700",
        }}
      >
        Add
      </button>
      <br />
      <br />
      <Link href="/">
        <a>go to home</a>
      </Link>
    </div>
  );
};

export default Product;
