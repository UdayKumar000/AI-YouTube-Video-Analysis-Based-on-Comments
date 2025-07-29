import express from "express";
import router from "./routes/allRoutes.js";
import fs from "fs";
const app = express();

const filePath = "./tmp/visitCount.txt";

// Load or initialize count
let visitCount = 0;
if (fs.existsSync(filePath)) {
  visitCount = parseInt(fs.readFileSync(filePath, "utf-8"));
}

app.use((req, res, next) => {
  visitCount++;
  fs.writeFileSync(filePath, visitCount.toString());
  next();
});


const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/",router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Run the function

