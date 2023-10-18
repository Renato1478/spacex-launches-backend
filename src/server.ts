import app from "./app";

const options = { port: process.env.APP_PORT || 3333 };

app.listen(options, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
