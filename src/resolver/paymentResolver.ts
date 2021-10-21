import { Request, Response } from "express"

export async function getPaymentHistory(request: Request, response: Response) {
  response.json([
    {
      id: "9d13fad5-f778-4b26-9885-381c08ce7dbf",
      name: "Internet",
      to: "Megafon",
      from: "Sadykov",
      cost: "-$470.00",
      date: "1 Oct 2021",
    },
    {
      id: "97ddc79a-1ede-40a6-a031-9e5477e48e8f",
      name: "The salary",
      to: "Sadykov",
      from: "Megafon",
      cost: "$2000.00",
      date: "3 Oct 2021",
    },
    {
      id: "a7ae8bd2-f699-45e8-a498-b4d35cf024c7",
      name: "Movies",
      to: "Kayhon",
      from: "Sadykov",
      cost: "-$120.00",
      date: "13 Oct 2021",
    },
    {
      id: "e8f0c80f-3c67-49ce-ae7d-0429c79acd0c",
      name: "Games",
      to: "Steam",
      from: "Sadykov",
      cost: "-$90.00",
      date: "15 Oct 2021",
    },
    {
      id: "4fd8c233-9a4e-43ee-af5c-cea5c2fd13e4",
      name: "Electricity",
      to: "Barqi Tojik",
      from: "Sadykov",
      cost: "-$340.00",
      date: "18 Oct 2021",
    },
    {
      id: "ef227477-146f-440f-9df9-f49542da49c6",
      name: "Birthday gift",
      to: "Sadykov",
      from: "Hamraev",
      cost: "$500.00",
      date: "18 Oct 2021",
    },
  ])
}
