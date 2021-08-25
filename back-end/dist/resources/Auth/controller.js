"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const service_1 = require("./service");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginDetails = req.body;
    try {
        const loggedUser = yield service_1.findUserWithValidation(loginDetails);
        res.json({ user: { id: loggedUser.id, username: loggedUser.username } });
    }
    catch (error) {
        res.status(401).json({ msg: error.message });
    }
});
exports.loginUser = loginUser;
// export const createUser = async (req: Request, res: Response) => {
//     const newUser = req.body
//     const savedUser = await user.create({ data: newUser })
//     res.json({ data: savedUser })
// }
