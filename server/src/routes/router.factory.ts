import { Router } from "express";

export default class MakeRouter {
  constructor(public readonly router: Router) {
    this.router = router;
  }

  public generatePOST(path: string, controller: any): Router {
    return this.router.post(path, controller);
  }
  public generateGET(path: string, controller: any): Router {
    return this.router.get(path, controller);
  }
  public generatePUT(path: string, controller: any): Router {
    return this.router.put(path, controller);
  }
  public generateDELETE(path: string, controller: any): Router {
    return this.router.delete(path, controller);
  }
  public generateHEAD(path: string, controller: any): Router {
    return this.router.head(path, controller);
  }
  public generateOPTIONS(path: string, controller: any): Router {
    return this.router.options(path, controller);
  }
  public generatePATCH(path: string, controller: any): Router {
    return this.router.patch(path, controller);
  }
}
