import express from "express";
import UserRoutes from "./domains/users/routes.js";
const app = express();

app.use(express.json());
app.use("/users", UserRoutes);

    

app.listen(3000,()=>{
    console.log("servidor online");
});