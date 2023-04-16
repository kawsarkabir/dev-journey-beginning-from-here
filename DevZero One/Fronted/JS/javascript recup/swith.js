const day = 5;

switch(day){
    case 0:
    console.log('monday');
    break;
    case 1:
    console.log('Tuesday');
    break;
    case 2:
    console.log('wenesday');
    break;
    case 3:
    console.log('Thusday');
    break;
    case 4:
    console.log('friday');
    break;
    case 5:
    console.log('saturday');
    break;
    case 6:
        console.log('sunday');
        break;
    default:
        throw new Error('invalid day')
}