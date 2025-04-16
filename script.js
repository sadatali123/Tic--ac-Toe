let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector(".reset-btn"); // renamed to camelCase
let turno = true;
let msgContainer = document.querySelector(".msg-container"); // renamed to camelCase
let msg = document.querySelector("#msg");
let newBtn = document.querySelector(".new-btn"); // renamed to camelCase
const winPatterns = [ // renamed to camelCase
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
const resetgame= ()=>{
    turno=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

const disableboxes= () =>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableboxes= () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let boxVal1 = boxes[pattern[0]].innerText;
    let boxVal2 = boxes[pattern[1]].innerText;
    let boxVal3 = boxes[pattern[2]].innerText;

    if (boxVal1 !== "" && boxVal2 !== "" && boxVal3 !== "") {
      if (boxVal1 === boxVal2 && boxVal2 === boxVal3) {
        console.log("Winner:", boxVal1);
        showWinner(boxVal1);
        return; // exit the loop after finding a winner
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

newBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);