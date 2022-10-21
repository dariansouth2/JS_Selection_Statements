console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//Exercise 1
let answer = prompt("Pick a number");
let favNum = 50;
if (favNum> answer){
  console.log("Too low");
} else if(favNum< answer){
  console.log("Too high");
}
else (favNum==answer);
  console.log("Congratulations!!");



//Exercise 2
let birthMonth = prompt("What is your birth month?")
switch(birthMonth){
  case "March":
  case "April":
  case"May":
  console.log("Your birth month is in Spring")
  break;
  case "June":
  case "July":
  case "August":
  console.log("Your birth month is in Summer")
  break;
  case "September":
  case "October":
  case "November":
  console.log("Your birth month is in Fall")
  break;
  case "December":
  case "January":
  case "February":
  console.log("Your birth month is in Winter")
  break;
}
//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
  case "01":
    type = "Tank top";
    break;
  case "02":
    type ="T-shirt";
    break;
  case "03":
    type ="Long Sleeve";
    break;
  case "04":
    type ="Sweat Shirt";
    break;
  default:
    type = "Other";
}
switch(colorId){
  case "BLA":
    color = "Black";
  break;
  case "BLU":
    color = "Blue";
  break;
  case "RD":
    color = "Red";
  break;
  case "PU":
    color = "Purple";
  break;
  default:
    color = "white";
}
switch(sizeId){
  case "S":
    size ="Small"
  break;
  case "M":
    size ="Medium"
  break;
  case "L":
    size ="Large"
  break;
  case "XL":
    size ="Extra Large"
  break;
  default:
    size = "One Size Fits All"
}

console.log(`Product: ${size} ${color} ${type}`);
