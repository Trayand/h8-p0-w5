function sorting(arrNumber) {
    // code di sini
    var hasilSort = []
    for(i=0;i<arrNumber.length;i++){
        var check = false;
        for(j=0;j<hasilSort.length;j++){
        if(arrNumber[i] < hasilSort[j]){
            check = true
            hasilSort.splice(j, 0, arrNumber[i]);
            break;
        }
        }
        if(!check){
        hasilSort.push(arrNumber[i])
        }
        // console.log(hasilSort)
    }
    return hasilSort
}
  
function getTotal(arrNumber) {
// code di sini
    if(arrNumber.length === 0){
        return 'Invalid input'
    }else{
        var res = arrNumber.pop()
        var count = 1
        for(var i=0;i<arrNumber.length;i++){
            if(arrNumber[i]==res){
            count++
            }
        }
    return 'angka paling besar adalah '+res+' dan jumlah kemunculan sebanyak '+count+' kali'
    }
}
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''