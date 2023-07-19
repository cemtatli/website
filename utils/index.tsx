export const formatCreationDate = (dateString: string) => {
  const creationDate = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - creationDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
};
