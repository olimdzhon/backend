import { Request, Response } from "express"

export async function getServices(request: Request, response: Response) {
  response.json([
    {
      id: "4fd8c233-9a4e-43ee-af5c-cea5c2fd13e4",
      name: "Electricity",
      image: "electricity.png",
    },
    {
      id: "9d13fad5-f778-4b26-9885-381c08ce7dbf",
      name: "Internet",
      image: "wifi.png",
    },
    {
      id: "5c823f95-26bd-49bd-a66a-7a71efa7b9e4",
      name: "Water",
      image: "drop.png",
    },
    {
      id: "75dc376c-9d70-41fa-b2cc-769b0e113119",
      name: "Hotel",
      image: "hotel.png",
    },
    {
      id: "f2df7454-367e-46a0-91b8-fc5b4ae9b19f",
      name: "Order Food",
      image: "udon.png",
    },
    {
      id: "a7ae8bd2-f699-45e8-a498-b4d35cf024c7",
      name: "Movies",
      image: "ticket.png",
    },
    {
      id: "e8f0c80f-3c67-49ce-ae7d-0429c79acd0c",
      name: "Games",
      image: "games.png",
    },
    {
      id: "f4c40fab-1174-41c8-8c5e-27ce117494f6",
      name: "More",
      image: "more.png",
    },
  ])
}
