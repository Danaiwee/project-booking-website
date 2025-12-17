export const generateObj = (dateArr) => {
  const newObj = {};

  for (let date of dateArr) {
    newObj[date] = (newObj[date] || 0) + 1;
  }
  return newObj;
};

export const findMaxOfSameKey = (obj1, obj2) => {
    const commonKeys = Object.keys(obj1).filter(key => key in obj2);// [2025-02-11, 2025-02-12]

    const maxValues = commonKeys.map(key => Math.max(obj1[key], obj2[key])); //[1, 2, 3]

    const maxValue = maxValues.length > 0 ? Math.max(...maxValues) : 0; // [3]
  
    return maxValue;
};
