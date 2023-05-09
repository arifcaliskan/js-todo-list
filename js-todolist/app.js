let ekle = document.querySelector("#liveToastBtn")
let ulDOM = document.querySelector("#list")
let inputDOM = document.querySelector("#task")
let toast = document.querySelector("#toast")
ekle.addEventListener("click", addTodo)

function addTodo() {
    let liDOM = document.createElement("li")
    if(inputDOM.value.trim()){

    console.log("clicked");
    liDOM.innerHTML = `${input} `
    console.log(`${input} başarıyla eklendi!`)
    
    ulDOM.append(liDOM)
    inputDOM=""
    } else {
    //    AlertFunction() 
    console.log("boş ekleme yapıldı");
    }    
}

function AlertFunction() {
    // const myAlert = document.getElementById("liveToast");

    const bsAlert = new bootstrap.Toast(toast);
    bsAlert.show();

}


