import { Request, Response, NextFunction } from "express";
import jwt, { Jwt } from "jsonwebtoken";
import { verifyToken } from "../jwt/token";
import { UserModel } from "../../model/user.model";
import { JwtInvalidTokenException, JwtUserNotFoundException } from "../../exceptions";

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer")) return next();

  const accessToken = bearer.split("Bearer")[1].trim();

  try {
    const payload: any = await verifyToken(accessToken);

    if (payload instanceof jwt.JsonWebTokenError) {
      return next(new JwtInvalidTokenException("Invalid Token"));
    }

    const user = await UserModel.findById(payload.id).select("-password").exec();

    if (!user) {
      return next(new JwtUserNotFoundException("User not found!"));
    }
    req.user = user;
    return next();
  } catch (error: any) {
    return next(new Error(error.message));
  }
}
