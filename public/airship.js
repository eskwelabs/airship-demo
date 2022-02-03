// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1643861503.1769903
!(function (n, r, e, t, c) {
  var i,
    o = "Promise" in n,
    u = {
      then: function () {
        return u;
      },
      catch: function (n) {
        return n(new Error("Airship SDK Error: Unsupported browser")), u;
      },
    },
    s = o
      ? new Promise(function (n, r) {
          i = function (e, t) {
            e ? r(e) : n(t);
          };
        })
      : u;
  (s._async_setup = function (n) {
    if (o)
      try {
        i(null, n(c));
      } catch (n) {
        i(n);
      }
  }),
    (n[t] = s);
  var a = r.createElement("script");
  (a.src = e),
    (a.async = !0),
    (a.id = "_uasdk"),
    (a.rel = t),
    r.head.appendChild(a);
})(window, document, "https://aswpsdkus.com/notify/v1/ua-sdk.min.js", "UA", {
  // Only needed when used on insecure hosts:
  // secureIframeUrl: 'https://your.secure.domain/path/to/web-push-secure-bridge.html',

  vapidPublicKey:
    "BGEP8U6YK2iEsLrjBDOktGn4OKWdgbM4ACVfd2dhzfCQeRCcHev8akcpspPsVCxf4rE5uUlyUlHgQR77CzAMzvo=",
  appKey: "EDb5A1cKQlW6173DWA2GaA",
  token:
    "MTpFRGI1QTFjS1FsVzYxNzNEV0EyR2FBOnJxYnZpLVlFU2pXaElDdHkybzJELWd3bEt5Tk1ka3dNQ05EUG8zNGF4M2M",
});
