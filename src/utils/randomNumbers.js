export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateNewNumberAndVerifyIt = (countriesIndexesArr) => {
  const randomNumber = generateRandomNumber(0, 249);
  const repeatedRandomNumber = countriesIndexesArr.find(
    (number) => number === randomNumber
  );
  if (!repeatedRandomNumber) {
    countriesIndexesArr.push(randomNumber);
    return;
  } else {
    generateNewNumberAndVerifyIt();
  }
};
