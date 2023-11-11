// To find out the computer generated choice

const comp = ["paper", "stone", "scissor"];
const images = ["pap.png", "st.png", "sc.png"];

const imgUser = document.querySelector("#userImg img");
const imgCpu = document.querySelector("#cpuImg img");

const x = Math.floor(Math.random() * 3);

function cpu() {
  return comp[x];
}

function userInput() {
  const choices = document.getElementsByName("choice");

  for (i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      return choices[i].value;
    }
  }
}

document.querySelector(".btn").addEventListener("click", () => {
  if (userInput() === undefined) {
    alert("Please choose an option!");
    return;
  } else {
    document.getElementById("winner").style.display = "block"; // To show the overlay part

    imgCpu.src = images[x]; // To show the output image as per CPU choice

    //To show the ouput image as per user choice

    if (userInput() === "paper") {
      imgUser.src = "pap.png";
    } else if (userInput() === "scissor") {
      imgUser.src = "sc.png";
    } else if (userInput() === "stone") {
      imgUser.src = "st.png";
    }

    // Choose the winner

    if (userInput() === "paper" && cpu() === "stone") {
      document.querySelector("#result").innerHTML = "YOU WIN";
    } else if (userInput() === "paper" && cpu() === "scissor") {
      document.querySelector("#result").innerHTML = "COMPUTER WIN";
    } else if (userInput() == "paper" && cpu() === "paper") {
      document.querySelector("#result").innerHTML = "IT'S A DRAW";
    } else if (userInput() === "stone" && cpu() === "scissor") {
      document.querySelector("#result").innerHTML = "YOU WIN";
    } else if (userInput() === "stone" && cpu() === "paper") {
      document.querySelector("#result").innerHTML = "COMPUTER WIN";
    } else if (userInput() === "stone" && cpu() === "stone") {
      document.querySelector("#result").innerHTML = "IT'S A DRAW";
    } else if (userInput() === "scissor" && cpu() === "paper") {
      document.querySelector("#result").innerHTML = "YOU WIN";
    } else if (userInput() === "scissor" && cpu() === "stone") {
      document.querySelector("#result").innerHTML = "COMPUTER WIN";
    } else if (userInput() === "scissor" && cpu() === "scissor") {
      document.querySelector("#result").innerHTML = "IT'S A DRAW";
    }
  }
}),
  false;
document.querySelector(".result").addEventListener("click", () => {
  location.reload();
}),
  false;
