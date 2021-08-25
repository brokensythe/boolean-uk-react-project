import { Router } from "express";
import { createUser, getAllUsers } from "./controller";

const userRouter = Router()

userRouter.get("/", getAllUsers)
userRouter.post("/", createUser)

export default userRouter 