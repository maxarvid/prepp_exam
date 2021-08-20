const calculateMetricBMI = (weight, height) => {
  let result;
  result = ((1.3 * weight) / Math.pow(height / 100, 2.5)).toFixed(2);
  return result;
};

const getBMIClassification = (value) => {
  if (value < 0) {
    return "using negative numbers"
  } else if (value < 18.5) {
    return "Underweight";
  } else if (value < 25) {
    return "Healthy";
  } else if (value < 30) {
    return "Overweight";
  } else {
    return "breaking this website"
  }
};
