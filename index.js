let Count = document.getElementById("count-d")
let count = 0
function incrementCount() {
    console.log("Incrementing count")
    count = count + 1;
    Count.innerHTML = count;
}
function decrementCount() {
    count = count - 1;
    Count.innerHTML = count;
}