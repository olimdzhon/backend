import express, { Application, Request, Response, NextFunction } from "express"

import { resolve } from "./resolver/someResolver"

const port = process.env.PORT || 3000

const app: Application = express()

app.get("/", resolve)

app.listen(port, () => console.log("Server running on port 3000"))
