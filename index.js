/**
 * Application entry point.
 * Imports the Express app and starts the HTTP server.
 */
const app = require('./server/index');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Portfolio running → http://localhost:${PORT}`);
});
