const course ={
    name: 'cs2250',
    duration: 75,
    'section': 3,
}

// for .. in
for(const key in course){
    console.log(course[key]);
    
}

const numbers = [11, 12, 13, 14];
for(const idx in numbers){
    console.log(`${idx}, ${numbers[idx]}`);
    
}