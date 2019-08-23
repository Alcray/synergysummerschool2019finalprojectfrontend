function getJSONfromDB(){
    return [
        {firstName, lastName, },
        {},
        {},
        {},
        {}
    ];
}
function LoadDB(){
    let JSONText = getJSONfromDB();
    let DataObject = JSON.parse(JSONText);
}



function popUpBox(){
    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

