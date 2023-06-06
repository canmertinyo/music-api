import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IToken } from "../../utils/interface/token.interface";
import { verifyToken } from "../jwt/token";
import { UserModel } from "../../model/user.model";

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer")) {
    return next();
  }

  const accessToken = bearer.split("Bearer: ")[1].trim();

  try {
    const payload: any = await verifyToken(accessToken);

    if (payload instanceof jwt.JsonWebTokenError) {
      return next(new Error("UNAUTHORIZED"));
    }

    const user = await UserModel.findById(payload.id)
      .select("-password")
      .exec();

    if (!user) {
      return next(new Error("UNAUTHORIZED"));
    }
    req.user = user;
  } catch (error: any) {
    return next(new Error(error.message));
  }
}
