//question1
let number1 = 20
let number2 = 25
let number3= 35
 if (number1 > number2 && number1 > number3){
  console. log (number + " is the largest number")
  }else if(number2 > number1 && number2 > number3){ console. log (number2 + " is the largest number")
  }else if(number3 > number1 && number3 > number2){
  console. log(number3 + " is the largest number")
  }else(console. log("you can't have an empty value for any of the numbers."))

//question2
let day = "friday"
let isholiday = true
if(day.startsWith("s")){ console.log("isweekend")
if(isholiday === true){ console.log("weekendholiday")

}else{console.log("regularweekend")}

}else if(day == "monday"|| day=="tuesday" || day=="wednesday" || day == "thursday"|| day == "friday" ){
  console.log("isweekday")
  if(isholiday === true){
  console.log(`weekdayholiday`);
  }else{console.log("regularweekday")}
}else{ console.log("invalid input")
}

//question3
let years = 100
let salary = 20000
let bonus = 50000
if(years >= 10 && years <= 50){
  console.log("congrats,you are eligible to recieve the company's bonus")
  bonus= bonus*5/100
  console.log(bonus)
}else{console.log("try again when you have been a worker for at least 10 years and not more than 50 years,thank you!")
}

//question 4
let costOfPurchasedItems = 5000
let discount = costOfPurchasedItems*10/100
if(costOfPurchasedItems > 1000 ){
  console.log("Total price = ",costOfPurchasedItems - discount)
}else{
 console.log("please add more items to qualify for our discounted price, thank you.")
}

// question4
let side1 = 10
let side2 = 10
let side3 = 15
if(side1==side2 && side2== side3){
  console.log("equalsteral triangle")
}else if(side1 == side2 && side2 > side3 || side2 < side3){
  console.log("isosceles triangle")
}else if(side2 == side3 && side3 > side1 || side3 < side1){
    console.log("also an isosceles triangle")

}else {console.log("scalene triangle")
}
//question5
let number = "15"
if(number%7 == 0 || number.endsWith(7)){
  console.log("buzz number")
}else{console.log("not a buzz number");

}

//question 5. Given a string, change every second letter to an uppercase ‘Z’.
let str= "puppy and a dog"
let upperZ= ""
for(let i=0; i<str.length; i++){
     if(i%2=== 0){
      upperZ+= "Z"
     console.log(upperZ)  
    }else{ upperZ+= str.charAt(i)

    }
}console.log(upperZ)
