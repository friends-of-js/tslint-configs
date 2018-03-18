/* tslint:disable */
/* tslint:enable:no-identical-functions */
(() => {
  class MyClass {
    private readonly CODE = "bounteous";

    public calculateCode(): string {
      doTheThing();
      doOtherThing();
      return this.CODE;
    }

    public getName(): string {  // Noncompliant
      doTheThing();
      doOtherThing();
      return this.CODE;
    }
  }
})
