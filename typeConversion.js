let a="100"
// a=+a  //we can also use this method for type conversion
 a=parseInt(a) //this is usual method of type conversion
a=Number(a) //this is another way of type conversion
console.log(a,typeof a)

//change number to string
b=100
b=b.toString();
console.log(b,typeof b)

// convert to decimal
c=100
c=parseFloat(c)
console.log(c,typeof c)

//convert to boolean
//0 is the only number which is false
c=Boolean(c)
console.log(c,typeof c)


console.log(Math.sqrt(-1))
console.log(1+NaN)
console.log(undefined+undefined)
console.log('foo'/3);
