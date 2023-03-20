import express from "express";

import { quotationRoutes } from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use("/quotation", quotationRoutes);


export default app ;