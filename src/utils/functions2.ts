export async function postData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify([["Segunda", "Tentativa"]])
    };

    await fetch("https://v1.nocodeapi.com/lucasdev/google_sheets/UcUeXmmwtWxmipSD?tabId=Page1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
