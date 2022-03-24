function canWin(n){
    if(n === 7 || n===8){
      return false;
    }else if(n < 7) {
      return true;
    } else{
      n = n-6;
      return canWin(n);
    }
  }
  
  console.log(canWin(13))