import express from "express";
import router from "./routes/allRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fs from "fs";
const app = express();

const filePath = path.join(__dirname, "./visitCount.txt");

// Load or initialize count
let visitCount = 0;
if (fs.existsSync(filePath)) {
  visitCount = parseInt(fs.readFileSync(filePath, "utf-8"));
}
app.use((req, res, next) => {
  visitCount++;
  console.log(visitCount)
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

