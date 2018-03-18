/* tslint:disable */
/* tslint:enable:no-unnecessary-bind */
(() => {
  var r = _.filter(users, function (user) {
    return user.age > this.age;
  }, this);
})
