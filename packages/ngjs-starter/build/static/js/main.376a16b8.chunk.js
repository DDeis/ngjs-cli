(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    function(n, e) {
      n.exports = "<div>\n  <h1>AngularJS App</h1>\n  <home></home>\n</div>";
    },
    function(n, e) {
      n.exports = "<p>Hello, {{homeCtrl.name}}</p>";
    },
    function(n, e, o) {
      n.exports = o(11);
    },
    ,
    ,
    ,
    function(n, e, o) {},
    ,
    function(n, e, o) {},
    ,
    function(n, e, o) {
      "use strict";
      o.r(e);
      o(4);
      var t = o(0),
        a = o.n(t),
        r = o(1),
        l = o.n(r),
        c = (o(7), { template: l.a }),
        p = a.a.module("common", []),
        i = o(2),
        u = o.n(i);
      function m(n, e) {
        for (var o = 0; o < e.length; o++) {
          var t = e[o];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(n, t.key, t);
        }
      }
      var s = (function() {
          function n(e) {
            "ngInject";
            !(function(n, e) {
              if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
              (this.$scope = e);
          }
          var e, o, t;
          return (
            (n.$inject = ["$scope"]),
            (e = n),
            (o = [
              {
                key: "$onInit",
                value: function() {
                  console.log("hello"), (this.name = "World!");
                }
              }
            ]) && m(e.prototype, o),
            t && m(e, t),
            n
          );
        })(),
        f = (o(9), { template: u.a, controller: s, controllerAs: "homeCtrl" }),
        h = a.a.module("homeModule", []).component("home", f),
        d = a.a.module("app.pages", [h.name]);
      a.a.module("app", [p.name, d.name]).component("app", c);
    }
  ],
  [[3, 2, 1]]
]);
//# sourceMappingURL=main.376a16b8.chunk.js.map
