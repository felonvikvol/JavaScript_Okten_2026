let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

lenArr=coursesAndDurationArray.length

for (let i = 0; i < lenArr; i++)
    if (coursesAndDurationArray[i].monthDuration>5)
        console.log(coursesAndDurationArray[i].title,coursesAndDurationArray[i].monthDuration,'Супер');
