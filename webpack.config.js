module.exports = {
    "devServer": {
      "historyApiFallback": true,
      "proxy": {
        "/api": {
          "target" : "https://maps.googleapis.com/maps",
          "secure": false
        }
      }
    }
  }
  