!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 0));
})([
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(1),
      r = document.getElementById("value"),
      o = document.getElementById("tree"),
      l =
        (document.getElementById("balance-status"),
        document.getElementById("btn")),
      a = new n.Tree();
    function h(t, e) {
      var i = document.createElement("div"),
        n = document.createElement("div");
      if (null == t) return (i.innerHTML = ""), void e.appendChild(i);
      (i.innerHTML = t.value.toString()), i.classList.add("node-value");
      var r = document.createElement("div"),
        o = document.createElement("div");
      r.classList.add("node-child"),
        o.classList.add("node-child"),
        n.classList.add("children-container"),
        n.appendChild(r),
        n.appendChild(o),
        e.appendChild(i),
        e.appendChild(n),
        h(t.left, n.firstChild),
        h(t.right, n.lastChild);
    }
    r.addEventListener("keyup", function (t) {
      "Enter" == t.key && (t.preventDefault(), l.click());
    }),
      l.addEventListener("click", function () {
        var t = r.value;
        if (((r.value = ""), "" != t)) {
          var e = parseInt(t);
          if (isNaN(e)) return void alert("wrong input!");
          a.insert(e), (o.innerHTML = ""), h(a.root, o);
        } else alert("field is empty");
      });
    for (
      var u = 0, s = [15, 14, 0, 10, 8, 2, 26, 11, 4, 25, 3, 6, 28, 29, 16, 18];
      u < s.length;
      u++
    ) {
      var d = s[u];
      a.insert(d);
    }
    h(a.root, o);
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Tree = e.TreeNode = void 0);
    var n = function (t) {
      (this.value = t), (this.height = 0);
    };
    e.TreeNode = n;
    var r = (function () {
      function t() {
        this.root = void 0;
      }
      return (
        (t.prototype.insert = function (t) {
          this.root = this.__insert(t, this.root);
        }),
        (t.prototype.__insert = function (t, e) {
          return null == e
            ? new n(t)
            : (t < e.value
                ? (e.left = this.__insert(t, e.left))
                : (e.right = this.__insert(t, e.right)),
              (e.height =
                Math.max(this.getHeight(e.left), this.getHeight(e.right)) + 1),
              e);
        }),
        (t.prototype.getHeight = function (t) {
          return null == t ? 0 : t.height;
        }),
        (t.prototype.isBalanced = function () {
          return this.__isBalanced(this.root);
        }),
        (t.prototype.__isBalanced = function (t) {
          if (null == t) return !0;
          var e = this.getHeight(t.left),
            i = this.getHeight(t.right);
          return (
            Math.abs(i - e) <= 1 &&
            this.__isBalanced(t.left) &&
            this.__isBalanced(t.right)
          );
        }),
        (t.prototype.getBalance = function (t) {
          return null == t
            ? 0
            : this.getHeight(t.left) - this.getHeight(t.right);
        }),
        (t.prototype.balanceStep = function () {
          this.__balanceStep(this.root);
        }),
        (t.prototype.__balanceStep = function (t) {}),
        (t.prototype.leftRotate = function (t) {
          var e = t.right,
            i = e.left;
          (e.left = t),
            (t.right = i),
            (t.height =
              Math.max(this.getHeight(t.left), this.getHeight(t.right)) + 1),
            (e.height =
              Math.max(this.getHeight(e.left), this.getHeight(e.right)) + 1);
        }),
        (t.prototype.rightRotate = function (t) {
          var e = t.left,
            i = e.right;
          (e.right = t),
            (t.left = i),
            (t.height =
              Math.max(this.getHeight(t.left), this.getHeight(t.right)) + 1),
            (e.height =
              Math.max(this.getHeight(e.left), this.getHeight(e.right)) + 1);
        }),
        t
      );
    })();
    e.Tree = r;
  },
]);
