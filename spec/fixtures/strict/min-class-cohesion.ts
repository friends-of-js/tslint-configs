/* tslint:disable */
/* tslint:enable:min-class-cohesion */
(() => {
  class Test {
    constructor(private a: number) {
    }
    public b: number;
    private c: number;
    public getA(): number {
      return this.a;
    }
    public getB(): number {
      return this.b;
    }
    public getC(): number {
      return this.c;
    }
  }
})
