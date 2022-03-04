import './array-credit-lock.js';
import tableData from './data.js';

let toggle = false;

window.addEventListener('load', () => {
    setTableData(4);
});

document.getElementById("show-all").addEventListener("click", showHideToggle)

function setTableData(showSize) {
    const table = document.getElementById('table');
    table.innerHTML = "";
    for (let i=0; i<showSize; i++) {
        const el = document.createElement('array-credit-lock');
        el.tableEl = tableData[i];
        table.appendChild(el);
    };

    if (toggle) {
        document.getElementById("show-all").innerText = `Hide All`;
    } else {
        document.getElementById("show-all").innerText = `Show All (${tableData.length - showSize})`;
    }
}

function showHideToggle(e) {
    toggle = !toggle;
    if (toggle) {
        setTableData(tableData.length);
    } else {
        setTableData(4);
    }
}


