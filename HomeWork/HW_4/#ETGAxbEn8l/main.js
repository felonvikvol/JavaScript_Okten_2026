function plo(r) {
    return (Math.PI*Math.pow(r,2)).toFixed(2);
}

let r=5;

document.writeln(`
<h1>Площа кола з радіусом ${r} = ${plo(r)}</h1>
`);