function printText(text, count) {
    for (let i=0; i < count; i++) {
        document.writeln(`
            <li style="font-size: 24pt;">${text}</li>
       `);
    }
}

let str = "Glory To Ukraine!";
let count = 5;

document.writeln(`<ul>`);

printText(str,count);

document.writeln(`</ul>`);

