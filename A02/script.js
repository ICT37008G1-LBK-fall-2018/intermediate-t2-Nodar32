let button = document.querySelector("button");
let phoneList = document.querySelectorAll(".phone-list-item");
button.onclick = function()
{
    let feri = prompt("sheiyvanet peri");
    let id = Number(prompt("sheiyvanet id"));
    if(id<1 || id>phoneList.length)
    alert(
        "id ar moidzebneba"
    )
    else
    phoneList[id-1].style.backgroundColor = feri;
}