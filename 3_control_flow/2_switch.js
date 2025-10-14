let course = "CS2250";

if(course.toLocaleLowerCase() == 'cs2250'){
    console.log("web development");
    
}else if(course.toLocaleLowerCase() == 'cs4800'){
    console.log("software enginner");
    
}else if(course.toLocaleLowerCase() == 'cs3310'){
    console.log("algorithm");
    
}else if(course.toLocaleLowerCase() == 'cs4310'){
    console.log("database");
    
}else{
    console.log("other courses");
    
}

// !(number >= 10 && number < 20)
switch(course.toLocaleLowerCase()){
    case 'cs2250':
        console.log("web development");
        break;
    case 'cs4800':
        console.log("software engineering");
        break;
    case 'cs3310':
        console.log("algorithm");
        break;
    case 'cs3310':
        console.log("database");
        break;
    default:
        console.log("other courses");
        break;
}