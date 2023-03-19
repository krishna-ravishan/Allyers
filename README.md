# Allyers

URL to Website: [To see API in Use check out CHAT BUDDY] [First Press SUBMIT button after entering prompt, then after content is generated press GENERATE VOICE to convert text to speech]

https://allyers-hackitup.netlify.app/

QR code to Website:

![frame](https://user-images.githubusercontent.com/126204661/226153261-f4585dcc-5e3d-46c2-8d8a-a6b2bd3fbfb7.png)

Use of AIVA CHAT API by AIVINYA: [Javascript - fetch]

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

