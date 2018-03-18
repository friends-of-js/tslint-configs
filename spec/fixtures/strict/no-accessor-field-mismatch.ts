/* tslint:disable */
/* tslint:enable:no-accessor-field-mismatch */
(() => {
  class A {
    private x: number = 0;
    private y: number = 0;

    public setX(val: number) { // Noncompliant: field 'x' is not updated
      if (val >= 0 && val < 10) {
        this.y = val;
      }
    }

    public getY() { // Noncompliant: field 'y' is not used in the return value
      return this.x;
    }
  }
})
