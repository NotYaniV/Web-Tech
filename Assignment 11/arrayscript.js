var a = [11,12,30,4,5];
function printArray(a){
	//var a = [1,2,3,4,5];
	var string="";
	
	for (var i in a)
	{
			
			string += " " + a[i]; // string = string + "" +array[i]
	}
	//console.log("The array is "+string);
	return "The array is "+string;
}
console.log ( printArray(a) );

function sumArray(a){
	//var a = [1,2,3,4,5];
	var sum=0;
	
	for (var i in a)
	{
			sum += a[i];
			//sum+= " " + a[i];
	}
	//console.log("The sum of array is "+sum);
	return "The sum of array is "+sum;
}
console.log (sumArray(a) );

function maxArray(a){
	//var a = [11,12,30,4,5];
    var max=a[1];
	
	for(i=1;i<=a.length;i++)  //a.length finds the length of the array 
	{
		if(max<a[i])
		{
			max=a[i];
		}
	}
	//console.log("The max number in array is "+max);
	return "The max number in array is "+max ;
}
console.log ( maxArray(a) );

function minArray(a){
	//var a = [1,2,3,4,5];
    var min=a[1];
	
	for(i=1;i<=a.length;i++) 
	{
		if(min>a[i])
		{
			min=a[i];
		}
	}
	//console.log("The min number in array is "+min);
	return "The min number in array is "+min ;
}
console.log( minArray(a) );


function sorting(a){
	var temp,string="";
	var n= a.length;
	for ( i = 0; i < n-1; i++){ 
			for ( j = 0; j < n-i-1; j++){
						if(a[j] > a[j+1]){
							temp=a[j];
							a[j]=a[j+1];
							a[j+1]=temp;
							
						}
					}
				}
		return a;
}
console.log(sorting(a));