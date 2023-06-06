import { Router, Handler } from "express";

export default class GenerateRouter {
  constructor(public readonly router: Router) {
    this.router = router;
  }

  public POST(path: string, validator: any, controller: any): Router {
    return this.router.post(path, validator, controller);
  }
  public GET(path: string, validator: any, controller: any): Router {
    return this.router.get(path, validator, controller);
  }
  public PUT(path: string, validator: any, controller: any): Router {
    return this.router.put(path, validator, controller);
  }
  public DELETE(path: string, validator: any, controller: any): Router {
    return this.router.delete(path, validator, controller);
  }
  public HEAD(path: string, validator: any, controller: any): Router {
    return this.router.head(path, validator, controller);
  }
  public OPTIONS(path: string, validator: any, controller: any): Router {
    return this.router.options(path, validator, controller);
  }
  public PATCH(path: string, validator: any, controller: any): Router {
    return this.router.patch(path, validator, controller);
  }
}
