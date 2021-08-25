import user from "./service"
import { Request, Response } from "express"

export const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await user.findMany()

    res.json({ data: allUsers })
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body
    const savedUser = await user.create({ data: newUser })

    res.json({ data: savedUser })
}