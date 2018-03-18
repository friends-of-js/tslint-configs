/* tslint:disable */
/* tslint:enable:prefer-immediate-return */
(() => {
  function ms(hours: number, minutes: number, seconds: number) {
    const duration = ((hours * 60 + minutes) * 60 + seconds) * 1000;
    return duration;
  }
})
