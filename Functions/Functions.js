function addition(){
    var a = 5;
    var b = 5;
    var sum = a + b;
    console.log(sum)
}
addition()


function hello(){
    var hello = "Hello World."
    console.log(hello)
}
hello()


function hellow(){
    var hello = "Hello World"
    var world = "How are you"
    var result = hello + "! " + world + "?"
    console.log(result)
}
hellow()


function Prabhas(){
    console.log("My name is Prabhas :)")
}

function Mahesh(){
    console.log("My name is Mahesh :)")
}

Prabhas()
Mahesh()
Prabhas()


function printName(name){
    console.log("My Favourate hero is:-",name)
}

printName("Prabhas :)")
printName("Mahesh :)")
printName("Allu Arjun :)")


function addition13and31(){
    var a = 13;
    var b = 31;
    var sum = a + b;
    console.log(sum)
}
addition13and31()


function add(a,b){
    var sum = a + b;
    console.log(sum)
}
add(20,30)
add(23,32)
add(50,50)
add(100,100)


function multiply(a,b){
    var sum = a * b;
    console.log(sum)
}
multiply(2,2)
multiply(5,5)
multiply(3,33)


function addAndDouble(a,b,c){
    var sum = a+b+c;
    var doubleSum = 2*sum
    console.log("double sum value", "a =", a, "b = ",b, "c =",c, "result =",doubleSum)
  }

  addAndDouble(1,2,3)
  addAndDouble(2,6,2)
  addAndDouble(2,5)


  function addAndTriple(d,e,f){
    var sum = d+e+f
    var tripleSum = 3 * sum;
    console.log("triple sum value", "d =", d, "e = ", e, "f =", f, "result =",tripleSum)
  }

  addAndTriple(1,1,1)
  addAndTriple(2,2,2)


  function addition(){
    var a = Number(document.getElementById("aValue").value)
    var b = Number(document.getElementById("bValue").value)
    var sum = a + b;
    document.getElementById("result").innerHTML = "Result = " + sum
  }