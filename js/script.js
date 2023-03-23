// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form');
let table = document.querySelector('table');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let btncounter = document.getElementsByClassName('btn');
let counter = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let newID = document.querySelector('#id').value;
    let newName = document.querySelector('#name').value;
    let newExtension = document.querySelector('#extension').value;
    let newDepartment = document.querySelector('#department').value;
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1);
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0);
    let cellName = row.insertCell(0);
    let cellExtension = row.insertCell(0);
    let cellDepartment = row.insertCell(0);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(cellID);
    let textName = document.createTextNode(cellName);
    let textExtension = document.createTextNode(cellExtension);
    let textDepartment = document.createTextNode(cellDepartment);

    row.appendChild(textID);
    row.appendChild(textName);
    row.appendChild(textExtension);
    row.appendChild(textDepartment);

    table.appendChild(row);
    // CREATE THE DELETE BUTTON
    let textDelete = document.createElement('button');
    let visualTextDelete = document.createTextNode('X');
    textDelete.appendChild(visualTextDelete);
    row.appendChild(textDelete);
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    // newID.focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    btncounter.addEventListener('click', function countRows() {
        counter++;
        appendChild(counter);
    })
})

// DELETE EMPLOYEE

table.addEventListener('click', (e) => {
    if (e.target.classTable.contains('delete')) {
        if(confirm(`Are you sure you want to delete the ${e.target.parentElement.innerText} task?`)) {
            table.removeChild(e.target.parentElement);
        }
    }
});