function printText(text) {
    for (let i=0; i < 3; i++) {
        document.writeln(`
            <li style="font-size: 24pt;">${text}</li>
       `);
    }
}

let str = "Glory To Ukraine!";

document.writeln(`<ul>`);

printText(str);

document.writeln(`</ul>`);

