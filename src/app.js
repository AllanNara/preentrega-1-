import express from "express";
import cartRouter from "./routes/cart.routes.js";
import productRouter from "./routes/product.routes.js"

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", cartRouter);
app.use("/api", productRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))