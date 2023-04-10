const message = require("../messages");

function Auth(headers, callback) {
  if (process.env.API_AUTH_ENABLED == "true") {
    if (!headers["api-key"] || headers["api-key"] !== process.env.API_KEY) {
      return callback({
        status: "failed",
        message: headers["api-key"]
          ? message.AUTH_API_KEY_INVALID
          : message.AUTH_API_KEY_REQUIRED,
      });
    }
  }

  callback({
    status: "success",
    message: message.AUTH_AUTHORIZED,
  });
}

module.exports = Auth;
