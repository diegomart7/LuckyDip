//To clear the value on the input at click:
let i = 0;
let arr = [];


document.querySelector("#playerInput").onclick = function() {
  clearInputValue()
};

function clearInputValue() {
  document.querySelector("#playerInput").value = "";
};


//To add palyer names to the players list:
document.querySelector("#addButton").onclick = function() {
  addNameToList()
};



function addNameToList() {
  if (i === 9) {

    alert("No more than 9 players allowed !")


  } else {
    arr.push(document.querySelector("#playerInput").value);
    console.log(arr);
    document.querySelectorAll('p')[i].innerText = arr[i];

    i++;

  }
};



//Play Button Function
document.querySelector("#playButton").onclick = function() {
  chooseWinner()
};

function chooseWinner() {

  let randomWinner = Math.floor(Math.random() * arr.length)
  console.log(arr[randomWinner] + " has to pay !");

  document.querySelectorAll("h2")[2].innerText = (arr[randomWinner] + " won!");


};
