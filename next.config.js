/** @type {import('next').NextConfig} */
require("dotenv").config
module.exports = {
  env: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
}
