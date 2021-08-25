import { Request, Response } from "express"
import dbClient from "../../utils/client"
import { User } from ".prisma/client"
import { compare } from "bcrypt"
import { findUserWithValidation } from "./service"

export const loginUser = async (req: Request, res: Response) => {
    const loginDetails: User = req.body

    try {
        const loggedUser = await findUserWithValidation(loginDetails)

        res.json({ user: { id: loggedUser.id, username: loggedUser.username }})
    } catch (error) {
        res.status(401).json({ msg: error.message })
    }
}

// export const createUser = async (req: Request, res: Response) => {
//     const newUser = req.body
//     const savedUser = await user.create({ data: newUser })

//     res.json({ data: savedUser })
// }