let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone,key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error("!!!");
}

obj={
    id: 1,
    name: 'JavaScript',
    greeting(){
        console.log('Hello World!');
    }

}

const clone=cloner(obj);