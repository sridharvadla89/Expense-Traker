document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("list").addEventListener("submit", function (e) {
        e.preventDefault(); // Only triggers on form submit

        let exp_name = document.forms["list"]["expense_name"].value;
        let amount = document.forms["list"]["Amount"].value;
        let categories = document.getElementById("category").value;
        let date = document.forms["list"]["date"].value;
        if(!isValidname(exp_name)){
            return false;
        }
        if (exp_name && amount && categories && date) {//it is used to check if any value is written or not 
            document.querySelector("#expense-list").innerHTML += `
                <tr>
                    <td>${exp_name}</td>
                    <td> $${amount}</td>
                    <td>${categories}</td>
                    <td>${date}</td>
                    <td><button onclick="deleteRow(this)">delete</button>
                    <button onclick="editrows(this)">edit</button></td>
                </tr>`;
            document.forms["list"].reset();
        }
    });
});
function isValidname(str){
    for(let i=0;i<str.length;i++){
        let al=str.charCodeAt(i);
        if(!(al>=65&&al<=90)&&!(al>=97&&al<=122)){
            alert("Your name is invalid");
            return false;
        }
    }
    return true;
}
function deleteRow(button) {
    button.closest("tr").remove();
}
function editrows(button){
    let rows=button.closest("tr");
    let cells=document.getElementsByTagName("td");
    document.forms["list"]["expense_name"].value=cells[0].innerText;
    document.forms["list"]["Amount"].value=cells[1].innerText.replace("$","");
    document.getElementById("category").value=cells[2].innerText;
    document.forms["list"]["date"].value=cells[3].innerText;
    rows.remove();
}
