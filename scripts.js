
const blockBtn = document.getElementById("blockBtn");
const container = document.getElementById("container");
const justCont = document.getElementById("just-cont");
const algnItems = document.getElementById("algn-items")
const algnSelf = document.getElementById("algn-self")
let blockVal = 0;
let blockId = "";

// Code for when the block (create button) is click
blockBtn.onclick = () => {

    // Add block value by 1
    blockVal += 1;

    // Create new block with block value text
    const block = document.createElement("div");
    block.innerText = blockVal
    block.classList.add("block");
    block.id = `block-${Date.now()}`

    // Event Listener for block
    block.addEventListener("click", function () {
        let blockIdLabel = document.getElementById("blockId");
        blockId = block.id;

        console.log(block.id.slice(12));
        blockIdLabel.innerText = `Block ID ${block.id.slice(12)}`;
    })

    // Append new block to container
    container.appendChild(block);
}


// Event listener for justCont dropdown
justCont.addEventListener("change", function () {
    let just = justCont.value;

    container.style.justifyContent = just;
})

// Event listener for algnItems dropdown
algnItems.addEventListener("change", function () {
    let algn = algnItems.value;

    container.style.alignItems = algn;
})

// Event listener for algnSelf dropdown
algnSelf.addEventListener("input", function () {
    let algn = algnSelf.value;

    // Select the block using the latest blockId
    if (blockId) {
        const currentBlock = document.getElementById(blockId);
        if (currentBlock) {
            currentBlock.style.alignSelf = algn;
        }
    }
});