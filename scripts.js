// scripts.js
document.querySelectorAll('.abstract-btn').forEach(function (btn) {
    btn.onclick = function () {
        var modal = document.getElementById('abstractModal');
        modal.style.display = "block";
    }
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    var modal = document.getElementById('abstractModal');
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById('abstractModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("toggleAbstractButton").addEventListener("click", function () {
    var content = document.getElementById("abstractContent");
    if (content.style.display === "none") {
        content.style.display = "block";
        this.textContent = "[-] Abstract"; // Change button text to "Hide Abstract"
    } else {
        content.style.display = "none";
        this.textContent = "[+] Abstract"; // Change button text back to "Show Abstract"
    }
});