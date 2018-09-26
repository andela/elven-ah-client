
const readTime = (article) => {
  const wordsCount = article.split(' ').length;
  const minutesToRead = Math.round(wordsCount / 250);
  if (minutesToRead < 1) return 'a few seconds read';
  return `${minutesToRead} min read`;
};

export default readTime;
