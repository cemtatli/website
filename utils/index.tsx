export const formatCreationDate = (dateString: string) => {
  const creationDate = new Date(dateString);
  const today = new Date();
  const diffTime = today.getTime() - creationDate.getTime();
  const diffSeconds = Math.floor(diffTime / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  switch (true) {
    case diffSeconds < 60:
      return `${diffSeconds} second${diffSeconds !== 1 ? "s" : ""} ago`;
    case diffMinutes < 60:
      return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    case diffHours < 24:
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    case diffDays < 30:
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    case diffMonths < 12:
      return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
    default:
      return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
  }
};
