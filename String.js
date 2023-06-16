let x
const name="mangesh"
const age=22
x="hello my name is " +name+ " and i am "+age+ " year young"
console.log(x)


//use literals
x=`hello my name is ${name} and i am ${age} year old`
console.log(x)


const s =new String("Hello how are you")
x=typeof s
console.log(x)
x=s.length
console.log(x)
x=s[1]
console.log(x)

x=s.__proto__;
console.log(x)

x=s.toLowerCase()
console.log(x)

x=s.toUpperCase()
console.log(x)

x=s.charAt(0)
console.log(x)
x=s.indexOf('e')
console.log(x)

x=s.substring(0,4)
console.log(x)

x=s.slice(-11,-6)
console.log(x)

x=s.trim()
console.log(x)

x=s.replace('Hello','Hiiii')
console.log(x)

x=s.includes('hell')
console.log(x)

x=s.valueOf()
console.log(x)

x=s.split()
console.log(x)