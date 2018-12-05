let a = Number(prompt("sheiyvanet pirveli ricxvi"));
let b = Number(prompt("sheiyvanet meore ricxvi"));
let sum=0;
if(a<=0 || b<=0 || a>b || b>1000 || a==b)
alert("araswori shualedi");
for(let i = a;i<b+1;i++)
{
    sum=sum+i;
}
alert(sum);