
let students = [
    {
        FirstName: 'name 1',
        LastName: 'lname 1',
        PersonalNumber: '00000000000',
        Grade: 84
    },
    {
        FirstName: 'name 2',
        LastName: 'lname 2',
        PersonalNumber: '00000000001',
        Grade: 30
    },
    {
        FirstName: 'name 3',
        LastName: 'lname 3',
        PersonalNumber: '00000000002',
        Grade: 55
    },
    {
        FirstName: 'name 4',
        LastName: 'lname 4',
        PersonalNumber: '00000000003',
        Grade: 70
    },
    {
        FirstName: 'name 5',
        LastName: 'lname 5',
        PersonalNumber: '00000000004',
        Grade: 92
    },
    {
        FirstName: 'name 6',
        LastName: 'lname 6',
        PersonalNumber: '00000000005',
        Grade: 88
    },
    {
        FirstName: 'name 7',
        LastName: 'lname 7',
        PersonalNumber: '00000000006',
        Grade: 99
    },
    {
        FirstName: 'name 8',
        LastName: 'lname 8',
        PersonalNumber: '00000000007',
        Grade: 65
    }

];
let body = document.querySelector("body");
function tableFromList(list)
{
    let table = document.createElement("table");
    for(let i = 0;i<list.length;i++)
    {
        let tr = document.createElement("tr");
        for(let key in list[i])
        {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(list[i][key]));
            tr.appendChild(td);
            if(key === 'Grade'){
                
                  if(list[i][key]<51){
                  
                    tr.style.backgroundColor="red";
                  }
                else{
                    tr.style.backgroundColor="green";  
                }
                  
                
                
                
                 if (list[i][key] < 51) {
                    td.appendChild(document.createTextNode(" FX"));
                    tr.appendChild(td);
                }
                else if (list[i][key] > 51 && list[i][key] < 61) {
                    td.appendChild(document.createTextNode(" E"));
                    tr.appendChild(td);
                }
                else if (list[i][key] > 61 && list[i][key] < 71) {
                    td.appendChild(document.createTextNode(" D"));
                    tr.appendChild(td);
                }
                else if (list[i][key] > 71 && list[i][key] < 81) {
                    td.appendChild(document.createTextNode(" C"));
                    tr.appendChild(td);
                }
                else if (list[i][key] > 81 && list[i][key] < 91) {
                    td.appendChild(document.createTextNode(" B"));
                    tr.appendChild(td);
                }
                else if (list[i][key] > 91) {
                    td.appendChild(document.createTextNode(" A"));
                    tr.appendChild(td);
                }
               
                
            }
        }   
        table.appendChild(tr);
    }
   
    
    
return document.body.appendChild(table);
}
tableFromList(students);