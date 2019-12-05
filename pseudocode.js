//declare variable 'entries' as a array
//decalre variable 'total', which value starts at 0

//declare 'temp' variable  as an empty string
//everytime a button is clicked (everytime an element with the id 'button' is clicked), a function is ran which: declares a variable 'val', which assigns it the value of '$(this).text()

/////'this' referes to different things in differnt places, in a function it referes to the global object, here it refers to the button

//FIRST if condition: Got a number, add to temp
//make sure that it is a number, or a decimal, using isNaN function 
//replacing the '#answer' value, which should be displayed on the screen, and replace it the the 'temp' value, using substring function to make sure the decimal places fit the screen 

////SUBSTRING METHOD: extracts characters from a string, between start and end. var i= str.substring(2), start extracting at 2nd. 

//SECOND if condition: Got some symbol other than equals, add temp to our entries 
//then add our current symbol and clear temp. 
//if symbol is 'AC', entries is an empty array, temp is an empty string, total is 0, '#answer' on screen has no value. 

//if symbol is 'CE', clear last entry
//temp goes back to being an empty string, '#answer' on screen has no value. 

//THIRD if condition: if the symbol 'x' is entered
//the 'temp' value is pushed to the 'entries array', the '*' symbol is pushed to the 'entries array', temp goes back to being an empty string. 

//FOURTH if condition: if the divide symbol is entered
//the 'temp' value is pushed to the 'entries array', the '/' symbol is pushed to the 'entries' array, temp goes back to being an empty string. 

//FIFTH if condition: if the symbol '=' is entered, perform the calculation 
//push 'temp' value to 'entries' array, 
//decalre 'nt' variable, which would be entries[0] value
//create a for loop, to loop through every item in the entries array
    //in the loop, declare 'nextNum' variable, which is supposed to find the symbol after the current number in the loop. Because entries[0,2,4...] will be numbers, and the odd entries would be symbols 
    //decalre 'symbol' variable, which would be entries[i]
    //if the symbol '+' is entered, 'nt' first entry would add next num to get answer 
    //if the symbol '-' is entered, 'nt' will minus 
    //if '*', 'nt' will multiply 
    //if '/', 'nt' will devide
    //increment by one
    
//if 'nt' first number is smaller than 0, then the 'nt' value would get its absolute number and then adding a '-' to the end.
//the values of 'answer' id would be the 'nt' value, the entries would go back to being an empty array, and the temp an empty string. 
//if 'nt' is not smaller than 0, then it will just push the temp to the entries array, and then push the value to asnwers. 'temp' string goes back to being empty. 



