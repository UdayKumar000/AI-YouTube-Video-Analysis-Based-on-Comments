import youtube from "../config/configYT.js";

export default async function getCommentCount(videoId) {
  try {
    const response = await youtube.videos.list({
      part: "statistics",
      id: videoId,
    });

    const videoStats = response.data.items[0].statistics;
    const commentCount = videoStats.commentCount;

    console.log(`Total Comments: ${commentCount}`);
    return commentCount;
  } catch (error) {
    console.error("Error getting comment count:", error.message);
  }
}
