/* tslint:disable */
/* tslint:enable:no-unconditional-jump */
(() => {
  for (let i = 0; i < 10; i++) {
    console.log("i is " + i);
    break
  }

  for (let i = 0; i < 10; i++) {
    if (i > 5) return
    console.log("i is " + i);
  }
})
