import express from "express";
import cors from "cors";

import connection from "./config/database/connection";
import routes from "./router/index.router";
// import errorHandler from "./errorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);
// app.use(errorHandler);

const port = process.env.PORT || 3333;

// app.listen(port, () => connection());
