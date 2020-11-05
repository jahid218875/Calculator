function generatePin(){
    const pin = Math.floor(1000 + Math.random() * 9000)
    document.getElementById("pinInput").value = pin
}
function subMitPin(event){
    event.preventDefault()

    let pinMatch = document.getElementById("pinMatch")
    let pinNotMatch = document.getElementById("pinNotMatch")

    let submitInput = document.getElementById("submitInput").value
    let generateInput = document.getElementById("pinInput").value
    if (generateInput == "") {
        alert("At First Generate Pin Number please")
        return
    }
    if (submitInput == '') {
        alert("Enter valide Number please")
        return
    }

   

    document.getElementById("submitInput").value = ""

    let tryLeft = document.getElementById("hit").value--

    if (tryLeft <= 0) {
        document.getElementById("left").innerText = "0 try Left";
    } else {
        document.getElementById("left").innerText = tryLeft + "try Left";

        if (generateInput == submitInput) {
            pinMatch.style.display = "block"
            pinNotMatch.style.display = "none"
        }
        if (generateInput != submitInput) {
            pinNotMatch.style.display = "block"
            pinMatch.style.display = "none"
        }
    }

    
}