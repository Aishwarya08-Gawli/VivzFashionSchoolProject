const AccBtn = document.getElementById("accordion1id")
const AccPanel = document.getElementById("sect1");

AccBtn.onclick = function () {
    AccPanel.classList.toggle("panel1Hidden");

    if (AccPanel.classList.contains("panel1Hidden")) {
        AccBtn.setAttribute("aria-expanded", "false");
    } else {
        AccBtn.setAttribute("aria-expanded", "true");
    }
};

const Acc2Btn = document.getElementById("accordion2id")
const Acc2Panel = document.getElementById("sect2");

Acc2Btn.onclick = function () {
    Acc2Panel.classList.toggle("panel2Hidden");

    if (Acc2Panel.classList.contains("panel2Hidden")) {
        Acc2Btn.setAttribute("aria-expanded", "false");
    } else {
        Acc2Btn.setAttribute("aria-expanded", "true");
    }
};