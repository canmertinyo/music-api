import { Router } from "express";

export default class MakeRouter {
  constructor(public readonly router: Router) {
    this.router = router;
  }

  public generate(path: string, controller: any): Router {
    return this.router.use(path, controller);
  }
}
