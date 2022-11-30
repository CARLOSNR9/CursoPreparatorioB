/*var suma = 0
  for (var i= 0; i<11; i++){
    console.log(i)
  /*  suma = suma + i; */

  /*}*/

 /* var suma = 0;
  var i= 1;
  while (i<11) {

    console.log(i)
    i++
  /*  suma = suma + i; */

  /*} */


 /* var numeros = [1,2,3,4,5,6,7,8,9,10];
  var suma = 0;
  for (var element of numeros) {
    suma = element + suma;
    console.log (suma)
  }*/

  /*var numeros = [1,2,3,4,5,6,7,8,9,10];
  var suma = 0;
  numeros.forEach((element)) => {
    suma = element + suma;
    console.log (suma)
  });*/

 /* var numeros = [1,2,3,4,5,6,7,8,9,10];
  var array = []
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log (numeros[i])
    }
  }*/

  function encuentraPares(array) {

    return array.filter ((element) => element % 2 === 0);
  }
  console.log(encuentraPares([1,2,3,4,5,6,7,8,9,10]));
  
