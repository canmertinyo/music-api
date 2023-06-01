// Dependency Injection Container
import 'reflect-metadata';
import { SignupService } from '../../routes/signup/signup.service';

export class Container {
  private dependencies = new Map<string, any>();

  public register(key: string, dependency: any) {
    this.dependencies.set(key, dependency);
  }

  public resolve<T>(key: string): T {
    const dependency = this.dependencies.get(key);
    if (!dependency) {
      throw new Error(`Dependency not found: ${key}`);
    }
    return dependency;
  }
}

// Decorator
export function MyInjectable() {
  return function (target: any) {
    const original = target;

    function construct(constructor: any, args: any) {
      const container = new Container();
      const instance: any = Reflect.construct(constructor, args);
      const dependencies =
        Reflect.getMetadata('design:paramtypes', target) || [];
      dependencies.forEach((dependency: any, index: any) => {
        const dependencyName = dependency.name;
        const dependencyInstance = container.resolve(dependencyName);
        instance[dependencyName] = dependencyInstance;
      });
      return instance;
    }

    const f: any = function (...args: any) {
      return construct(original, args);
    };

    f.prototype = original.prototype;

    return f;
  };
}

// const container = new Container();
// container.register('UserService', UserService);
// const loggerService = container.resolve<LoggerService>('LoggerService');
