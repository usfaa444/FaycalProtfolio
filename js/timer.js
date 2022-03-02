window.setInterval(function () {
    let milliseconds = Date.now();
    let date = new Date(milliseconds);
    document.getElementById("date").innerHTML = date.toDateString() + "\n" + date.toTimeString().substring(0, 9);
}, 1000);

//Wed Mar 02 2022 05:11:41 GMT+0000