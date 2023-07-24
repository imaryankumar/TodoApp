import { app } from "./app.js";
import { connectDB } from "./data/database.js";

//connect DB
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
