const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/packages", {
            target: "https://pure-island-82181.herokuapp.com",
            secure: false,
            changeOrigin: true
        })
    )
}