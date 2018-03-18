/* tslint:disable */
/* tslint:enable:mocha-no-side-effect-code */
const a = 1
describe('test', () => {
  it.only('should do nothing', () => {
    expect(a).to.be.equal(1)
  })
})
