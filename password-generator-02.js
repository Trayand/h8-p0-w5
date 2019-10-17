function removeSpaces (str) {
    //code di sini
    var tamp = ''
    for(i=0;i<str.length;i++){
      if(str[i] !== ' '){
        tamp+=str[i]
      }
    }
    return tamp
  }
  
  function changeVocals (str) {
    //code di sini
    var cek = 'aiueoAIUEO'
    var tes = ''
    for(i=0;i<str.length;i++){
      if(cek.indexOf(str[i])<0){
        tes+=str[i]
      }else{
        tes+=String.fromCharCode(str[i].charCodeAt()+1)
      }
    }
    return tes
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var temp = ''
    for(i=0;i<str.length;i++){
      if(str[i] == str[i].toLowerCase()){
        temp+=str[i].toUpperCase()
      }else if(str[i] == str[i].toUpperCase()){
        temp+=str[i].toLowerCase()
      }
    }
    return temp
  }
  
  function reverseWord (str) {
    //code di sini
    let result = ''
    for(var i=str.length-1;i>=0;i--){
      result+=str[i]
    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
  
    var spasi = removeSpaces(name)
    var vokal = changeVocals(spasi)
    var upLowCase = setLowerUpperCase(vokal)
    var balik = reverseWord(upLowCase)
  
    return balik
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'