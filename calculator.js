let entriesList = [];
let total = 0;
let temp = '';

let display = document.getElementById("screen");

function allClear(){
  entriesList = [];
  total = 0;
  temp = '';
  display.value = '0';
}




document.addEventListener ('click', function(){
  let val = event.target.value;

  function pushSymbol(){
    entriesList.push(temp);
    entriesList.push(val);
    temp = '';
  }

  if(!isNaN(val) || val === '.') {
    temp += val;
    display.value = temp.substring(0.10);
  } else if (val === "AC"){
    allClear();
  } else if (val === "CE"){
    temp = '';
    display.value = '0';
  } else if (val === "+"){
    pushSymbol();
  } else if (val === "-"){
    pushSymbol();
  } else if (val === "x"){
    pushSymbol();
  } else if (val === "/"){
    pushSymbol();
  } else if (val === "equal"){
    entriesList.push(temp);
    temp = '';
    nt = Number(entriesList[0]);
    for(var i=0; i<entriesList.length; i++){
      let nextNum = Number(entriesList[i+1]);
      let symbol = entriesList[i];
      if(symbol === '+'){
        nt += nextNum;
      } else if (symbol === '-'){
        nt -= nextNum;
      } else if (symbol === 'x'){
        nt *= nextNum;
      } else if (symbol === '/'){
        nt /= nextNum;
      }
    } 
    if(nt < 0){
      nt = Math.abs(total) + '-';
      display.value = total + nt;
      entriesList = [];
      temp = '';
      total = 0;
    } 
    console.log(entriesList);
    display.value = total + nt;  
    total = 0; 
    temp = JSON.stringify(nt);
    entriesList = []; 
  }
}
)