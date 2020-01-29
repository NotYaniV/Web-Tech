//all the variables used
var num=5;
var n=6;
var number=6;
var num1=54;
//////)()()()()()()(/////

//FUNCTION TO FIND FACTORIAL//

function factorial(num) {
  if (num < 0) 
  //fact of negative number cannot be found
         return -1;	 
  // If the number is 0, its factorial is 1.
   else if (num === 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorial(num - 1));
	}

}
console.log("the factorial is",factorial(num));


//FUNCTION TO FIND EVEN AND ODD NUMBER//


function evenOdd(number) {
	//check for remainder
	var temp=number;
	if(number%2==0)
	{
		//console.log(temp + " is an even number");
		return temp + " is an even number";
	}
	else
	{
		//console.log(temp + " is an odd number");
		return temp + " is an odd number"
	}
}
console.log( evenOdd(number) );

//FUNCTION TO FIND PRIME NUMBER//


function prime(n) {
	
		   if(n===0)
		   {
			  // console.log("0 is neither prime, nor composite number")
			   return "0 is neither prime, nor composite number"
		   }
		    if(n===1)
		   {
			   flag = false;
		   }
	       for (i = 2; i <= n - 1; i++) 
		   {
			   if (n % i == 0) { 
                    flag = false; 
                    break; 
                } 
		   }      
            // Check and display output 
            if (flag == true) 
                //console.log(n + " is prime"); 
				return n + " is prime";
            else
                //console.log(n + " is not prime"); 
				return n + " is not prime ";
} 

console.log( prime(n) );

//FUNCTION TO FIND REVERSE OF A NUMBER//


function reverseNumber(numberRev){
	var remainder,sum=0;
	var temp=numberRev;
	while(numberRev> 0)
	{
	  remainder = numberRev % 10;
	  sum = sum * 10 + remainder;
	  numberRev = parseInt( numberRev / 10 );  //The parseInt() function parses a string and returns an integer.
	}
	//console.log("The reverse of "+temp +" is "+sum);
	return "The reverse of "+temp +" is "+sum;
}

console.log( reverseNumber(num1) );


//FUNCTION TO FIND ARMSTRONG NUMBER//

function armstrongNumber(armNumber){
	var rem,sum=0;
	var n=armNumber;//n is a temporary number equals to 
	while(n>0)    
	{    
		rem=n%10;    
		sum=sum+(rem*rem*rem);    
		n= parseInt(n/10);    
	}    

		if(armNumber==sum)    
			//console.log(armNumber + " is a armstrong  number ");    
			return armNumber + " is a armstrong  number ";
		else    
			//console.log(armNumber + " not armstrong number"); 
			return armNumber + " not armstrong number";
		return 0;  
}	
console.log ( armstrongNumber(150) );
 
//FUNCTION TO FIND FIBONACCI SERIES//


function fibonacciList(fibNum){
	  var firstNumber=0,secondNumber=1;
	  var fibString="";
	  console.log("The fibonacci series is ");
	  for (i = 1; i <= fibNum; ++i) {
        //console.log(firstNumber);
        nextTerm = firstNumber + secondNumber;
        fibString += " " +nextTerm;  //saving the numbers in
	    firstNumber= secondNumber;
        secondNumber = nextTerm;
      }
	  ///console.log(fibString);
	  return fibString;
}

console.log( fibonacciList(10) );