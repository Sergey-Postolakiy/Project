function bmi(weight, height) {
   if (weight / (height * height) <= 18.5) {
      return "Underweight";
   } else if (weight / (height * height) <= 25) {
      return "Normal";
   } else if (weight / (height * height) <= 30) {
      return "Overweight";
   } else {
      return "Obese";
   }
};

/*
function bmi(weight, height) {

   var bmi = weight / (height * height);

   return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

function bmi(weight, height) {
   if (weight / Math.pow(height,2)) <= 18.5) {
      return "Underweight";
   } else if (weight / Math.pow(height,2)) <= 25) {
      return "Normal";
   } else if (weight / Math.pow(height,2)) <= 30) {
      return "Overweight";
   } else {
      return "Obese";
   }
};
*/

console.log(bmi(80, 1.80));