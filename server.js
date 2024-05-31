require('dotenv').config();
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

// lets tackle cors policy
const corsOptions = {
  origin: "http://localhost:5173",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

// this middleware is any routers that need to handle JSON data in the request body
app.use(express.json());
app.use("/api/auth", router);



const PORT = 5000;

connectDb().then(() =>{
    app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
});

});

