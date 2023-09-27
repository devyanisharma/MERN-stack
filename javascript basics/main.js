//implement call,bind and apply
//function borrowing is a concept in which one object can borrow function from other object
console.log("Call,bind and apply")

let user1 = { firstname:"shiva",
lastname:"sharma"
}

let user2 = {firstname : "devyani",
lastname:"sharma"
}

let printfullname = function() {
    console.log(this.firstname +" "+  this.lastname)
}

printfullname.call(user1) 
printfullname.call(user2)

//apply approach
//let asume we want to pass number of variables in function like

let printfulladdress = function(hometown,state,country) {
    console.log(this.firstname +" "+  this.lastname + " lives in small town-" + hometown + " from " + state +" and wants to live in "+ country)
}

printfulladdress.call(user1,"babrala","U.P","canada")
printfulladdress.call(user2,"babrala","U.P","USA")

//with the help of apply method we can participate this arguments as array list
printfulladdress.apply(user1,["babrala","U.P","canada"])
printfulladdress.apply(user2,["babrala","U.P","USA"])

//bind approach
//The bind() method returns a new function, when invoked, has its this sets to a specific value.
//Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a copy of the function whose this sets to thisArg argument and which can be invoked later

var printmyaddress = printfulladdress.bind(user1,"babrala","U.P","USA");
console.log(printmyaddress)
printmyaddress()

var printmyaddress = printfulladdress.bind(user2,"babrala","U.P","USA");
printmyaddress()

//Polyfill is a fallback for a method that is not supported by the browser by default. You can find browser support for any function or method on the mdn website.
//polyfill for bind - it means creating own implementation of bind function
//everymethod should get access to mybind method like they get access to bind method, so use Function.prototype 
