import express from  "express";
import dotenv from "dotenv"
import errorHandler from "./middleware/errorHandlers.js";
import contactRoutes from "./routes/contactRoutes.js";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
connectDb();
const app = express();


app.use(express.json());
app.use("api/contacts", contactRoutes);
app.use(errorHandler);

app.get("/", (req,res) => {
    res.json({message: " App is running v2 "});
})

// app.get("/api/contacts", (req,res) => {
//     res.status(200).json({message: " gell all "});
// })
app.use("/api/contacts", contactRoutes); // use middleware

app.listen(PORT, () => {
    console.log(` App running on ${PORT} `);
})