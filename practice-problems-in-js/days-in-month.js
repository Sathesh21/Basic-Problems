// To find the number of days in a month

let year = 1997;
let month = 7;
switch (month) {
    case 1:
        console.log("Janurary,31 days");
        break;
    case 3:
        console.log(" March,31 days");
        break;
    case 5:
        console.log(" May,31 days");
        break;
    case 7:
        console.log(" July,31 days");
        break;
    case 8:
        console.log(" August,31 days");
        break;
    case 10:
        console.log(" October,31 days");
        break;
    case 12:
        console.log(" December,31 days");
        break;
    case 4:
        console.log("April,30");
        break;
    case 6:
        console.log("June,30");
        break;
    case 9:
        console.log("September,30");
        break;
    case 11:
        console.log("November,30");
        break;
    case 2:
        if (year % 4 == 0) {
            console.log("Feb,29");
        }
        else {
            console.log("Feb,28");
        }
        break;
    default:
        console.log("Invalid");
}