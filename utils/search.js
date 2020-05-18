export const addScore = (data, score) => {
  const updated = data.map((item) => {
    if (item.hasOwnProperty("relevance")) {
      return (item.relevance = item.relevance + score);
    }
    item["relevance"] = score;
    return item;
  });

  return updated;
};

export const getInterestNames = (data) => {
  const names = data.map((item) => {
    return item.name;
  });

  return names;
};

export const containsKeyword = (key, phrase) => {
  const lowerPhrase = phrase.toLowerCase();
  const lowerKey = key.toLowerCase();

  return lowerPhrase.indexOf(lowerKey);
};

export const splitArray = (array, size) => {
  const length = array.length;
  const setNumber = Math.ceil(length / size);
  let limit = size;
  let start = 0;
  let arraySplit = [];

  for (let i = 0; i < setNumber; i++) {
    const set = array.slice(start, limit);
    arraySplit.push(set);
    limit = limit + size;
    start = start + size;
  }
  return arraySplit;
};

export const addLinks = (array) => {
  const updated = data.map((item) => {
    item["links"] = [
      `https://www.facebook.com/search/pages/?q=${item.name}`,
      `https://www.google.com/search?q=${item.name}`,
    ];
    return item;
  });

  return updated;
};
