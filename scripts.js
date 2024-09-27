
const blockBtn = document.getElementById("blockBtn");
const container = document.getElementById("container");
let block = document.getElementsByClassName("block");
const justCont = document.getElementById("just-cont");
const algnItems = document.getElementById("algn-items")
let blockVal = 0;

//
blockBtn.onclick = () => {

    // Add block value by 1
    blockVal += 1;

    // Create new block with block value text
    const block = document.createElement("div");
    block.innerText = blockVal
    block.classList.add("block");
    block.id = `block-${Date.now()}`

    // Append new block to container
    container.appendChild(block);
}

// Code when block is clicked
block.onclick = () => {
    return;
}


// Event listener for justCont dropdown
justCont.addEventListener("input", function () {
    let just = justCont.value;

    container.style.justifyContent = just;
})

// Event listener for algnItems dropdown
algnItems.addEventListener("input", function () {
    let algn = algnItems.value;

    container.style.alignItems = algn;
})