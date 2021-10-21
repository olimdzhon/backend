import express, { Application } from "express"
import * as path from "path"
import { resolve } from "./resolver/someResolver"
import { getServices } from "./resolver/servicesResolver"
import { getPaymentHistory } from "./resolver/paymentResolver"

const port = process.env.PORT || 3000

const app: Application = express()

const assetsPath = process.env.ASSETS_PATH || "../assets/images"
app.use(
  "/assets/images",
  express.static(path.resolve(__dirname + "/" + assetsPath)),
)

app.get("/", resolve)
app.get("/getServices", getServices)
app.get("/getPaymentHistory", getPaymentHistory)

app.listen(port, () => console.log("Server running on port 3000"))
