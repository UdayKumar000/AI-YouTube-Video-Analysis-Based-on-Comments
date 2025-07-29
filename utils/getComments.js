import youtube from "../config/configYT.js";

export default async function getAllComments(videoId) {
  let comments = [];
  let nextPageToken = null;

  try {
    // getCommentCount(videoId).then((count) => {
    //   console.log(`Total comments for video ${videoId}: ${count}`);
    // });
    do {
      const response = await youtube.commentThreads.list({
        part: "snippet",
        videoId: videoId,
        maxResults: 100,
        pageToken: nextPageToken,
      });

      response.data.items.forEach((item) => {
        const comment = item.snippet.topLevelComment.snippet.textDisplay;
        comments.push(comment);
      });

      nextPageToken = response.data.nextPageToken;
    } while (nextPageToken && comments.length < 500); // Limit to 500 comments

    console.log(`Fetched ${comments.length} comments.`);
    return {comments};
  } catch (error) {
    console.error("Error fetching comments:", error.message);
    return {error:error.message};
  }
}
