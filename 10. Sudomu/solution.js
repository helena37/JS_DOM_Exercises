function solve() {
    let tdMatrix = document.getElementsByTagName("td");
    let checkBtn = document.querySelector("#exercise > table > tfoot > tr > td > button:nth-child(1)");

    checkBtn.addEventListener("click", checkingStatus);

    function checkingStatus() {
        let currentElement = tdMatrix[0][0];
        let counter = 0;

        for (let i = 0; i < tdMatrix.length; i++) {
            for (let j = 0; j < tdMatrix[0].length; j++) {

            }
        }

        for (const x of numbers) {
            if (x !== currentElement) {
               document.getElementById("container").style.borderColor = "solid red";
               document.getElementById("container").style.borderWidth = "2px";
               return document.getElementById("check").textContent = "NOP! You are not done yet…";
            } else {
                counter++;
            }
        }

        if (counter === numbers.length) {
            document.getElementById("container").style.borderColor = "solid green";
            document.getElementById("container").style.borderWidth = "2px";
           return document.getElementById("check").textContent = "You solve it! Congratulations!";
        }
    }
}