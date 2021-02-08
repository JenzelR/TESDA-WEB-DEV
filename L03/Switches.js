const color = 'grin';

switch(color){
    case 'blew':
        console.log('Color is blew');
        break;
    case 'penk':
        console.log('Color is penk');
        break;
    default:
        console.log("The color is not blew or penk :(");
        break;
}

let day

switch(new Date().getDay()) {
    case '0':
        day = 'Sunday';
        break;
    case '1':
        day = 'Monday';
        break;
    case '2':
        day = 'Tuesday';
        break;
    case '3':
        day = 'Wednesday';
        break;
    case '4':
        day = 'Thursday';
        break;
    case '5':
        day = 'Friday';
        break;
    case '6':
        day = 'Saturday';
        break;
}
console.log(`Today is Two day${day}`);