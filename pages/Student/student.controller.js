function getJSONfromDB(){
    return [
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'Law',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'ComputerScience',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
        {
            firstName: 'Aaran', lastName: 'Barber', faculty: 'ComputerScience',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
        {
            firstName: 'Roger', lastName: 'Barber', faculty: 'ComputerScience',
            subjects: [
                {subject:'Combinatorics', marks: 20},
                {subject:'Graph Theory', marks: 17},
                {subject:'Algorithms', marks: 16}
            ]
        },
    ];
}

function LoadDB(){
    window.DataObject = getJSONfromDB();

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

function updateResult(query) {
    let res = document.getElementById("tableBody");
    res.innerHTML = "";

    window.DataObject.map(function(algo){
        query.split(" ").map(function (word){
            if((algo.firstName + ' ' + algo.lastName).toLowerCase().indexOf(word.toLowerCase()) != -1){

              let x = 0;
              let l = 0;
              for (let mark of algo.subjects) {
                  x += mark.marks;
              }
              if (l != 0) x = x / l;

                res.innerHTML += `<div class="divTableRow">
                <div class="divTableCell1">
                    <div class="autocomp-div" >
                        <svg class="icon icon-triangle-right" style="width: 20px;height: 20px;" onclick="popUpBox()">
                            <use xlink:href="#icon-triangle-right"></use>
                        </svg>
                        <p style="margin-left: 15px;">${algo.firstName} ${algo.lastName}</p>
                    </div>
                </div>
                <div class="divTableCell2">${x}</div>
            </div>`;
            }
        })
    })
    let autocomp = document.getElementsByClassName("autocomp-div")[0].querySelector('p').innerHTML;
    alert(autocomp);
}


function sortByFaculty() {
    let res = document.getElementById("tableBody");


    let query = document.getElementById("sortByFaculty").value;
res.innerHTML = "";
    window.DataObject.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.faculty.toLowerCase() == query || query == "all"){
              let x = 0;
                let l = 0;
                for (let mark of algo.subjects) {
                    x += mark.marks;
                }
                if (l != 0) x = x / l;
                res.innerHTML += `<div class="divTableRow">
                <div class="divTableCell1">
                    <div class="autocomp-div" >
                        <svg class="icon icon-triangle-right" style="width: 20px;height: 20px;" onclick="popUpBox()">
                            <use xlink:href="#icon-triangle-right"></use>
                        </svg>
                        <p style="margin-left: 15px;">${algo.firstName} ${algo.lastName}</p>
                    </div>
                </div>
                <div class="divTableCell2">${x}</div>
            </div>`;
            }
        })
    })
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
