import { Router } from "express";
import CartManager from "../CartManager.js";

const cartManager = new CartManager("carrito.json")
const router = Router();

// --- Rellena de codigo las rutas!! 
// Recuerda utilizar async/await en caso de trabajar con asincronismo

router.post("/", (req, res) => {});

router.get("/:cid", (req, res) => {});

router.get("/:cid/product/:pid", (req, res) => {});


export default router;
