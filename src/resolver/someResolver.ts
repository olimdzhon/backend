import { Request, Response } from "express"

export async function resolve(request: Request, response: Response) {
  response.json({
    name: "2go-backend",
    version: "0.0.1",
    description: "2GO app's backend",
  })
}
