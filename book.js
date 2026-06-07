document.getElementById("dateselector").onsubmit = function(e) {

    if (document.getElementById("startDate").value.trim() === "") {
        document.getElementById("startError").innerText = "Select start date";
        e.preventDefault();
    }

    if (document.getElementById("endDate").value.trim() === "") {
        document.getElementById("endError").innerText = "Select end date";
        e.preventDefault();
    }
};