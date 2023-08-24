const endDate = "03 July 2024 2:03 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// as per rule date start with 01 Jan 1970 

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    // console.log(diff);
    if (diff < 0) return;

    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //convert into hours
    inputs[1].value = Math.floor(diff / 3600 ) % 24;

    //convert into min
    inputs[2].value = Math.floor(diff / 60 ) % 60;

    //convert into sec
    inputs[3].value = Math.floor(diff) % 60;


}

//initail call
clock()
setInterval(
    ()=> {
        clock()
    },1000
)