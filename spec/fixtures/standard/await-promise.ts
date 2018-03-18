/* tslint:disable */
/* tslint:enable:await-promise */
(() => {
  class Thenable {
    public then () {
      return 1
    }
  }

  class Test {
    public async test () {
      return await new Thenable()
    }

    public async method () {
      return await 1
    }
  }
})
