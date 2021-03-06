let TC = document.querySelector(".ticket-container");
let allFilters = document.querySelectorAll(".filter");
let modalVisible = false;
let selectedPriority = "pink";

for(let i=0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", filterHandler)
}

function filterHandler(e) {
    // let filter = e.currentTarget.children[0].classList[0]
    // TC.style.backgroundColor = filter.split("-")[0];
}

let addButton = document.querySelector(".add");

addButton.addEventListener("click", showModal);

function showModal(e) {
    if(!modalVisible){
        let modal = `<div class="modal">
    <div class="input-container" data-type="false" contenteditable="true">
        <span class="placeholder">Enter your text</span>

    </div>
    <div class="priority-list">
        <div class="pink-modal-filter modal-filter active"></div>
        <div class="red-modal-filter modal-filter"></div>
        <div class="blue-modal-filter modal-filter"></div>
        <div class="green-modal-filter modal-filter"></div>
    </div>
</div>`;
    TC.innerHTML = TC.innerHTML + modal;
    selectedPriority = "pink";
    let taskTyper = document.querySelector(".input-container");
    taskTyper.addEventListener("click", function(e) {
        
        if(e.currentTarget.getAttribute("data-type") == "false"){
            e.currentTarget.innerHTML = "";
            e.currentTarget.setAttribute("data-type", "true");
        }
    })
    taskTyper.addEventListener("keypress", addTicket.bind(this, taskTyper));
    modalVisible = true;
    let modalFilters = document.querySelectorAll(".modal-filter");

    for(let i=0; i < modalFilters.length; i++){
        modalFilters[i].addEventListener("click", selectPriority);
    }
    }
    
}

function selectPriority(e) {
    let activeFilter = document.querySelector(".modal-filter.active");
    activeFilter.classList.remove("active");
    selectedPriority = e.currentTarget.classList[0].split("-")[0];
    e.currentTarget.classList.add("active");
}

function addTicket(taskTyper, e) {
    if(e.key == "Enter" && taskTyper.innerText != "") {
        let ticket = `<div class="ticket active">
        <div class="ticket-color ticket-color-${selectedPriority}"></div>
        <div class="ticket-id">#12626</div>
        <div class="task">${taskTyper.innerText}</div>
        </div>`;
        console.log(ticket);
        document.querySelector(".modal").remove();
        modalVisible = false;
        TC.innerHTML = TC.innerHTML + ticket;
    }
    else if(e.key == "Enter"){
        e.preventDefault();
    }
}