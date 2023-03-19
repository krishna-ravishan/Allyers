var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// var input = "What is a placeholder"

// function takePrompt(){
//     var input2 = document.getElementById("prompt").value;
//     console.log(input2);
//     input = input2;
// };

function onClick(){

    let textEl = document.getElementById("txt");

    var input = document.getElementById("prompt").value;

    var raw = JSON.stringify({
        "text": input
      }
    );

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.aivinya.education/api/public/aivachat", requestOptions)
    .then(response => response.json())
    .then(result => {textEl.innerText = result["res"];})
    .catch(error => console.log('error', error));
    console.log("working function")
}
