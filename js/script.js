
function getCommitCount() {
    var responseObj = JSON.parse(this.responseText);
    for (var i in responseObj) {
        try {
            if (responseObj[i].login === 'NuclearPanda') {
                document.getElementById(responseObj[i].login).innerHTML = responseObj[i].contributions;
            } else if (responseObj[i].login === 'spitko') {
                document.getElementById(responseObj[i].login).innerHTML = responseObj[i].contributions;
            } else if (responseObj[i].login === 'MrSanderSi') {
                document.getElementById(responseObj[i].login).innerHTML = responseObj[i].contributions;
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    //console.log(responseObj[0].login + " has " + responseObj[0].contributions + " commits!");
}

function findTable() {
    let table = document.getElementById("commitTable");
    if (table != null) {
        const url = "https://api.github.com/repos/NuclearPanda/SE-veebileht/commits";
        fetch(url, {
            method : "GET"
        }).then(
            response => response.json()
        ).then(
            response => buildTable(table, response)
        )
    }
}

function buildTable(table, data) {
    data = data.slice(0, 10);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let commit = data[i]["commit"];
        let row = table.insertRow(i + 1);
        let time = row.insertCell(0);
        time.innerHTML = commit["author"]["date"].slice(0, 10);
        let author = row.insertCell(1);
        author.innerHTML = commit["author"]["name"];
        let message = row.insertCell(2);
        message.innerHTML = commit["message"];
    }
}

findTable();

var request = new XMLHttpRequest();
request.onload = getCommitCount;
// Initialize a request
request.open('get', 'https://api.github.com/repos/NuclearPanda/SE-veebileht/contributors');
// Send it
request.send();

