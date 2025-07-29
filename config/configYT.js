import { google } from "googleapis";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
const _dirname = path.dirname(fileURLToPath(import.meta.url));

import path from "path";
dotenv.config({ path: path.resolve(_dirname, "../.env") });
// Load environment variables from .env file
const API_KEY = process.env.GOOGLE_API_KEY;

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});
export default youtube;
