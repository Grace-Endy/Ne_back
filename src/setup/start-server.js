// App Imports
import { PORT, NODE_ENV } from "../config/env"

// Start server
export default function (server) {
  console.info("SETUP - Starting server..")

  var server2 = require("http").createServer(server)

  server2.listen(PORT, (error) => {
    if (error) {
      console.error("ERROR - Unable to start server.")
    } else {
      console.info(
        `INFO - Server started on http://localhost:${PORT} [${NODE_ENV}]`
      )
    }
  })
  require("./io").initialize(server2)
}
