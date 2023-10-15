import app from "./app";

const options = { port: process.env.APP_PORT };

app.listen(options, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
