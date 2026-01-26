function plo(r,h) {
    return (Math.PI*Math.pow(r,2)*h).toFixed(2);
}

let r=1.2;
let h=3.8;

document.writeln(`
<h1>Площа кола з радіусом ${r} та висотою ${h} = ${plo(r,h)}</h1>
`);