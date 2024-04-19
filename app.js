const getFactBtn = document.querySelector("#getFact");
const randomFact = document.querySelector("#randomFact");
let factNum = document.querySelector("#inputNum");
const fact = document.querySelector(".fact");
let url = `http://numbersapi.com/`;

let fetchFact = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl).then(res => res.text())
        .then(data => {
            fact.style.display = "block";
            fact.innerHTML = `
        <h2>${num}</h2>
        <p>${data}</p>
        `;
            document.querySelector(".container").append(fact);
        })
}
let factNumber;
let getFact = () => {
    factNumber = factNum.value;
    if (factNumber) {
        if (factNumber >= 0 && factNumber <= 300) {
            fetchFact(factNumber)
        } else {
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg">Please enter a number between 0 and 300</p>`;
        }
    } else {
        fact.style.display = "block";
        fact.innerHTML = `<p class="msg">The input Field cannot be empty</p>`
    }
}

let getRandomFact = () => {
    let randomNum = Math.floor(Math.random() * 301);
    fetchFact(randomNum);
}

getFactBtn.addEventListener("click", getFact);
randomFact.addEventListener("click", getRandomFact);
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getFact()
    } else if (e.key === "r") {
        getRandomFact()
    }
})