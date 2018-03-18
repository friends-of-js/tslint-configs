/* tslint:disable */
/* tslint:enable:no-statements-same-line */
(() => {
  onEvent(function() { doSomething(); });               // Compliant
  onEvent(function(p) { doSomething(); return p % 2; }); // Noncompliant
})
