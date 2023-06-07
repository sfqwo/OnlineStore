const moneyTransformer = (sum: number) => {
  return parseFloat(sum.toString())
    .toFixed(1)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
};

export default moneyTransformer;
