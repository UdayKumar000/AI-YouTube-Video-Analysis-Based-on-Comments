import { CohereClientV2 } from "cohere-ai";
import { fileURLToPath } from "url";
const _dirname = path.dirname(fileURLToPath(import.meta.url));

import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(_dirname, "../.env") });
console.log("Cohere API Key:", process.env.COHERE_API_KEY);
const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});
export default cohere;
