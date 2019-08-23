function getJSONfromDB(){
    return [
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'Computer Science',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'Computer Science',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'Computer Science',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'Computer Science',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
    ];
}

function LoadDB(){
    let JSONText = getJSONfromDB();
    let DataObject = getJSONfromDB();

    for(let item of DataObject){
        let x = 0;
        let l = 0;
        for(let mark of item.subjects){
            x+=mark.marks;
        }
        if(l!=0) x = x / l;
        document.getElementById('tableBody').innerHTML += `<div class="divTableRow">
        <div class="divTableCell1">
            <div style="display: flex;align-items: center;width: 100%">
                <svg class="icon icon-triangle-right" style="width: 20px;height: 20px;" onclick="popUpBox()">
                    <use xlink:href="#icon-triangle-right"></use>
                </svg>
                <p style="margin-left: 15px;">${item.firstName} ${item.lastName}</p>
            </div>
        </div>
        <div class="divTableCell2">${x}</div>
    </div>`;
    }
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

