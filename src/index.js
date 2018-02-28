module.exports = function solveEquation(equation) {
  var parameters = equation.split(" ");
  var a = parseInt(parameters[0], 10); 
  var b = parseInt(parameters[3]+parameters[4], 10);
  var c = parseInt(parameters[7]+parameters[8], 10);
  
  var discr = b*b - 4*a*c;
 
  if (discr>0){
      var hFirst = -1*b;
      var lFirst = Math.sqrt(discr);
      var iFirst = 2*a;
      var firstResult = (hFirst+lFirst)/iFirst;
      var secResult = (hFirst-lFirst)/iFirst;
      var result = [firstResult, secResult];
      var sortedResult = result.sort((c, z) => c - z);
      return sortedResult;
  }
  else{
      return undefined;
  }
}
