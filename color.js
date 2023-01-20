//Set the initial colors of the boxes to either black or white

(() => {
  //this is a self invoking fuction
  let arrayColor = ["black", "white"];
  let allBoxes = document.querySelectorAll(".boxes");

  allBoxes.forEach((x) => {
    if (x.classList.contains("odd")) {
      x.style.backgroundColor = arrayColor[0];
      x.style.outline = "none";
    } else if (x.classList.contains("even")) {
      x.style.backgroundColor = arrayColor[1];
      x.style.outline = "none";
    }
  });
})();
/*function "myRandomColors" returns an 6 hexadecimal cobination of values appended to "#" 
to form different hexadecimal color code whenever it is invoked*/
let myRandomColors = () => {
  let arrayValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "D",
    "E",
    "F",
  ];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 15);
    color += arrayValues[randomNumber];
  }
  return color;
};
/* function "setColorBoxes" takes advantage of the "myRandomColors" function to
display different colors to the boxes on the html page by manipulating the DOM of the page
 this function is invoked using a click event listener*/
let setColorBoxes = () => {
  let arrayForAll = []; //all the random colors are collected into this array
  let computerChoosenValue = Math.floor(Math.random() * 12);

  let coloredBoxes = document.querySelectorAll(".boxes");
  let boxContent = document.querySelectorAll(".boxNum");
  let myhex;
  for (let i = 0; i < coloredBoxes.length; i++) {
    let rand = myRandomColors();
    coloredBoxes[i].style.backgroundColor = rand;

    //myhex=boxContent[i].textContent = rand
    boxContent[i].textContent = i;
    arrayForAll.push(rand);
    coloredBoxes[i].style.outline = "none";
  }
  let computerChoosenColor = arrayForAll[computerChoosenValue];
  let getColoredBoxes = document.querySelectorAll(".boxes");
  let reset = 0;
  getColoredBoxes.forEach((x) => {
    x.addEventListener("click", () => {
      let b0 = x.classList.contains("box1");
      let b1 = x.classList.contains("box2");
      let b2 = x.classList.contains("box3");
      let b3 = x.classList.contains("box4");
      let b4 = x.classList.contains("box5");
      let b5 = x.classList.contains("box6");
      let b6 = x.classList.contains("box7");
      let b7 = x.classList.contains("box8");
      let b8 = x.classList.contains("box9");
      let b9 = x.classList.contains("box10");
      let b10 = x.classList.contains("box11");
      let b11 = x.classList.contains("box12");
      if (b0) {
      
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b1) {
        reset += 1;
   
        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b2) {
        reset += 1;
     
        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b3) {
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b4) {
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b5) {
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b6) {
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b7) {
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          
        if (reset > 2) {
          alert("Your fault, the earth is cursed");
          location.reload();
        }
        }
      } else if (b8) {
        reset += 1;

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b9) {
        reset += 1;
  
        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b10) {
        reset += 1;
  

        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      } else if (b11) {
        reset += 1;
  
        if (x.textContent == computerChoosenValue) {
          x.style.outline = "3px solid green";
          x.style.outlineOffset = "-4px";
          alert("congratulations, You saved the earth");
          location.reload();
        } else {
          x.style.outline = "3px solid red";
          x.style.outlineOffset = "-4px";
          if (reset > 2) {
            alert("Your fault, the earth is cursed");
            location.reload();
          }
        }
      }
    });
  });
  console.log(computerChoosenValue);
  console.log(computerChoosenColor);
};
//this fuction: "setColors", take advantage of event listeners to invoked the function "setColorBoxes."
let setColors = () => {
  let startGameBtn = document.querySelector(".randomColors");
  startGameBtn.addEventListener("click", setColorBoxes);
};
setColors();
