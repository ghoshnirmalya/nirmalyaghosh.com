import readingTime from "reading-time";

const calculateReadingTime = (text: string) => {
  const stats = readingTime(text);

  return stats.text;
};

export default calculateReadingTime;
