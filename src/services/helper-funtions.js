export const sortingFilter = (state, condition) => {

  switch (condition) {
    case "oldest":
      return [...state].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );

    case "latest":
      return [...state].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "Trending":
      return [...state].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    default:
      break;
  }
};

export const calcPostTimeDiff = (postTime) => {
  const postCreation = new Date(postTime);
  const presentTime = new Date();
  const milliSec = Math.floor(presentTime - postCreation);
  const seconds = Math.floor(milliSec / 1000);
  const min = Math.floor(seconds / 60);
  const hours = Math.floor(min / 60);
  const postYear = postCreation.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const presentYear = presentTime.toLocaleDateString("en-US", {
    year: "numeric",
  });

  if (seconds > 59) {
    if (min > 60) {
      if (hours > 23) {
        if (postYear === presentYear) {
          return postCreation
            .toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })
            .split(" ")
            .reverse()
            .join(" ");
        } else {
          return `${postCreation
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
            .split(" ")
            .reverse()
            .join(" ")} ${postYear}`;
        }
      } else {
        return `${hours}h`;
      }
    } else {
      return `${min}m`;
    }
  } else {
    return `${seconds}s`;
  }
};
