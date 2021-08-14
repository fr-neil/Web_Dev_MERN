const launguage = `arabic`;

switch(launguage){
    case `chinese`:
    case `mandarin`:
        console.log(`'MOST number of native speakers!'`);
        break;
    case `spanish`:
        console.log(`'2nd place in number of native speakers'`);
        break;
    case `english`:
        console.log(`Third place`);
        break;
    case `hindi`:
        console.log(`Fourth place`);
        break;
    case `arabic`:
        console.log(`fifth place`);
        break;
    default:
        console.log(`Great launguage too :D`);
        break;
}