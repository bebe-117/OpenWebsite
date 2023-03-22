function doReply(){
    alert('Hii!');
    var inputText = document.getElementById('inputText');
    console.log(inputText.value);
    var msgArea = document.getElementById("msgArea");
    msgArea.innerText = inputText.value;
}
