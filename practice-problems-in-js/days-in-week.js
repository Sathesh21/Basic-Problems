// skip Wed(3) and print remaining day with greatings

let a = 1;
while (a >= 1 && a <= 7) 
{
    
    if (a == 3) 
    {
        a++;
        continue;
    }
    console.log("It is Your day, Give your Best", a);
    a++;
}