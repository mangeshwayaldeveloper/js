const num=new Number(5.456543)
console.log(typeof num)

x=num.toString()
x=num.toString().length
x=num.toFixed(3)
console.log(typeof x)
console.log(x)


x=num.toPrecision(2)
console.log(x)

x=num.toLocaleString('mr-IN')
console.log(x)

x=Number.MAX_VALUE
console.log(x)