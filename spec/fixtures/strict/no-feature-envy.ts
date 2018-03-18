/* tslint:disable */
/* tslint:enable:no-feature-envy */
(() => {
  class Test {
    salePrice(item) {
      return (item.price - item.rebate);
    }
  }
})
