const { Router } = require("express");

const { getUser, postUser } = require("../controller/user.controller");

const userRouter = Router();

userRouter.get("/user",getUser );

userRouter.post("/user",postUser);

module.exports = userRouter;
