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

var request = new XMLHttpRequest();
request.onload = getCommitCount;
// Initialize a request
request.open('get', 'https://api.github.com/repos/NuclearPanda/SE-veebileht/contributors');
// Send it
request.send();

