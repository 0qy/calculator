let entriesList = [];
let total = 0;
let temp = '';

let display = document.getElementById('display');

console.log(document.getElementById('display').value)

document.addEventListener ('click', function(){
    let val = event.target.value;
    console.log(val);
    if(!isNaN(val) || val === '.') {
      //  let display=document.getElementById('display');
        display.value.val;
    }
})

//function findButtonValue () {
//    let val = event.target.value;
//   console.log(val);
//    if (!isNaN(val) || val === '.') {
//        let display = document.getElementById('answer');
//        display.value = val;
//        console.log(val)
//    }
//}





