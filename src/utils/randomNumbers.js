export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateNewNumberAndVerifyIt = (
  countriesIndexesArr,
  numberOfCountries
) => {
  const randomNumber = generateRandomNumber(0, numberOfCountries);
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
