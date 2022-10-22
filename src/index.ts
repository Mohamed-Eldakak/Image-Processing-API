import express from "express";
import routes from "./routes/index";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server is Running');
  });
app.use("/api", routes);

app.listen(port, () => {
  console.log("server stared");
});
export default app;
