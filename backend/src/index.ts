import app from "./app";
import { LISTENER_PORT } from "./config";

// starting up server
const server = app.listen(LISTENER_PORT, () => {
  console.log(`Listening on port ${LISTENER_PORT}`);
});

// handling graceful shutdown with logs
["SIGTERM, SIGINT"].forEach((signal) => {
  process.on(signal, () => {
    console.log(`${signal} signal recieved: closing server`);
    server.close(() => {
      console.log("Server closed");
    });
  });
});
