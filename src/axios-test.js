//opsi pemanggilan 1
const { default: axios } = require("axios");
const Axios = require("axios");
const port = 3000;
const hostname = "127.0.0.1";
//opsi pemanggilan 2
// import Axios from "axios";

//Coding
//cara promise
// Axios.get(`http://${hostname}:${port}/products`)
//   .then((Response) => {
//     //handle success
//     console.log(Response);
//   })
//   .catch((Error) => {
//     //handle error
//     console.log(Error);
//   })
//   .then(() => {
//     //always executed
//   });

//cara menggunakan async/await
const getProducts = async () => {
  try {
    const Response = await Axios.get(`http://${hostname}:${port}/products`);
    console.log(Response);
  } catch (error) {
    console.error(error);
  }
};
getProducts();

// cara async/await

// coding ega
// import axios from "axios";
// const Home = () => {
//   const getData = async () => {
//     try {
//       const data = await axios.get("http://localhost:3000/products");
//       console.log("DATYAAAA", data);
//     } catch (error) {
//       console.log(error.response);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
