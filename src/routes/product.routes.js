import { Router } from "express";
import ProductManager from "../ProductManager.js";

const productManager = new ProductManager("productos.json");
const router = Router();

// --- Rellena de codigo las rutas!! 
// Recuerda utilizar async/await en caso de trabajar con asincronismo

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.get("/:pid", (req, res) => {});

router.put("/:pid", (req, res) => {});

router.delete("/:pid", (req, res) => {});


export default router;
