import { Request, Response } from "express"

export async function resolve(request: Request, response: Response) {
  response.json({
    name: "meg-backend",
    version: "0.0.1",
    description: "meg app's backend",
  })
}
