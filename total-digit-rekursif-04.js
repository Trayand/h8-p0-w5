function totalDigitRekursif(angka) {
    // you can only write your code here!
    let arr = angka.toString()
    var count = 0
    if(arr.length==0){
      return 0
    }else{
      return Number(arr[0]) + totalDigitRekursif(arr.slice(1))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5