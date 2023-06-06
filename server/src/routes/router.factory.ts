import { Router } from "express";

export default class GenerateRouter {
  constructor(public readonly router: Router) {
    this.router = router;
  }

  public POST(path: string, controller: any): Router {
    return this.router.post(path, controller);
  }
  public GET(path: string, controller: any): Router {
    return this.router.get(path, controller);
  }
  public PUT(path: string, controller: any): Router {
    return this.router.put(path, controller);
  }
  public DELETE(path: string, controller: any): Router {
    return this.router.delete(path, controller);
  }
  public HEAD(path: string, controller: any): Router {
    return this.router.head(path, controller);
  }
  public OPTIONS(path: string, controller: any): Router {
    return this.router.options(path, controller);
  }
  public PATCH(path: string, controller: any): Router {
    return this.router.patch(path, controller);
  }
}
