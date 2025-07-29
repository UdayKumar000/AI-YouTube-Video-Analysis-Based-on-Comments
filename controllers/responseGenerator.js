import cohere from "../config/configCohere.js";
export default async function generateResponse(comments) {
try {
  //
  const prompt = comments.join("\n");
  const system_message = " i provide you top 500 comments from youtube you have to analyze these comments and generate the following outputs based on your analysis i) does video contains fake information ii) how many % of users enjoyed watching video iii) how many % of users feel bored by watching this video iv) does contain any adult or illegal content v) category under which this video falls vi) mention if any comments from big youtube channels along with there names vii) also detect comments are fake or not only generate the 7 points of outputs and keep it consice and short dont generate any extra information or text";
  const response = await cohere.chat({
    model: "command-a-03-2025",
    messages: [
      { role: "system", content: system_message },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  //
  const aiResponse = response.message.content[0].text;
  if (!aiResponse) {
    console.error("No response from AI");
  }
  return {response:aiResponse};
} catch (err) {
  console.log("Error in AI response:", err.message);
  return {error:err.message};
}
}

