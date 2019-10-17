function kaliTerusRekursif(angka) {
    // you can only write your code here!
    // let angka1 = angka
    let arr = angka.toString();
    let num = 1
    if(arr.length==0){
      return 1
    }else{
      num = Number(arr[0]) * kaliTerusRekursif(arr.slice(1))
    }
      // let cetak = Number(num.toString().split('').slice(-1))
      // return num
    // let cek = num.toString()
    if(num.toString().length == 1){
     return num
    }
      // console.log(num)
      return kaliTerusRekursif(num)
      // arr = cek
  }
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6