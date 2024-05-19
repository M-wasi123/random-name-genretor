function rendom() {
    var password = document.getElementById('userInput').value;
    var passwordSplit = password.split('');
    var generatePass = "";
    for (i = 0; i < 3; i++) {
        var pass = passwordSplit[Math.floor(Math.random() * passwordSplit.length)];
        generatePass += pass;
    }
        document.getElementById('pera').innerHTML = generatePass.toUpperCase();  
}

function colour() {
    var randomColor = Math.floor(Math.random()*2569)
    var outputColor = '#' +randomColor;
    document.body.style.backgroundColor = outputColor;
    document.getElementById('pera2').innerHTML = outputColor;
}
