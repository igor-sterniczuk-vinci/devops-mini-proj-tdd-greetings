(() => {
  const n = {
    672: (n) => {
      function r(n) {
        return n === n.toUpperCase();
      }
      n.exports = function (n) {
        return (function (n) {
          return n == null || n === "";
        }(n))
          ? "Hello, my friend."
          : Array.isArray(n)
          ? (function (n) {
              let e = "Hello, ";
              const t = [];
              const o = [];
              let u = "en";
              switch (
                (n.forEach((n) => {
                  ((n) => ["fr", "nl"].includes(n))(n) ? (u = n) : r(n) ? t.push(n) : o.push(n);
                }),
                u)
              ) {
                case "fr":
                  e = "Bonjour ";
                  break;
                case "nl":
                  e = "Halo ";
              }
              if (
                ((e += (function (n, r) {
                  let e = "";
                  let t = "and";
                  return (
                    r === "fr" ? (t = "et") : r === "nl" && (t = "en"),
                    n.forEach((r, o) => {
                      o < n.length - 2
                        ? (e += `${r}, `)
                        : o === n.length - 1
                        ? (e += `${t} ${r}.`)
                        : (e += `${r} `);
                    }),
                    e
                  );
                }(o, u))),
                t.length > 0)
              ) {
                const n = t.map((n) => n.toUpperCase());
                e += ` AND HELLO ${n.join(" AND ")} !`;
              }
              return e;
            }(n))
          : (function (n) {
              return r(n) ? `HELLO, ${n}!` : `Hello, ${n}.`;
            }(n));
      };
    },
  };
  const r = {};
  !(function e(t) {
    const o = r[t];
    if (void 0 !== o) return o.exports;
    const u = (r[t] = { exports: {} });
    return n[t](u, u.exports, e), u.exports;
  }(672));
})();
