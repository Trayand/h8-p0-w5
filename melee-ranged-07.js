function meleeRangedGrouping (str) {
    //your code here
    if(str.length == 0){
      return []
    }
  
    let result = [[],[]]
    var tes = str.split(',')
  
    for(i=0;i<tes.length;i++){
      var temp = ''
      // var tamp = ''
      if(tes[i].indexOf('-Ranged') >-1 ){
        for(j=0;j<tes[i].length;j++){
          if(tes[i][j] == '-'){
            break;
          }
          temp+=tes[i][j]
        }
      result[0].push(temp)
      }else{
        for(j=0;j<tes[i].length;j++){
          if(tes[i][j] == '-'){
            break;
          }
          temp+=tes[i][j]
        }
      result[1].push(temp)
      }
    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []