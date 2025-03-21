const rateLimit = require("express-rate-limit");

const rateLimiter = rateLimit({
  windowMs: 6000,
  max: 10,
  message: "Too many requests, wait a little bit!",
});

module.exports = rateLimiter;
