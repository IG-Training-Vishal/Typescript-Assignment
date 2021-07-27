console.log("welcome!!");
sum(10, 20);
function sum(x:number, y:number)
{
    const trace = 'To Task runners';
    if(x < 0) {  console.warn(trace); }
    return x + y;
}