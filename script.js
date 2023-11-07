fetchData();
let containers = document.querySelectorAll(".list-item");
let button = document.querySelector(".button");
button.disabled = true;
setTimeout(() => button.disabled = false, 1000)

let data = [];
button.addEventListener("click", insertData);

async function fetchData() {
    let arr = [];
    let count = 5;

    async function GetData() {
        let response = await fetch('https://randomuser.me/api');
        let data = await response.json();
        return data;
    }

    for (let i = 0; i < count; i++) {
        let userData = await GetData();
        arr.push(userData);
    }

    data = arr;
}

function insertData() {
    fetchData();
    for (let i = 0; i < containers.length; i++) {
        containers[i].children[0].style.backgroundImage = `url("${data[i].results[0].picture.large}")`;
        containers[i].children[1].innerHTML = `Cell: ${data[i].results[0].cell}`;
        containers[i].children[2].innerHTML = `City: ${data[i].results[0].location.city} `;
        containers[i].children[3].innerHTML = `Postcode: ${data[i].results[0].location.postcode} `;
        containers[i].children[4].innerHTML = `Email: ${data[i].results[0].email} `;
        button.disabled = true;
        setTimeout(() => button.disabled = false, 1000)
    }
}
