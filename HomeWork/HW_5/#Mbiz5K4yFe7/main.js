let r=10;
let h=5;

let plo=(r,h)=>2*Math.PI*r*(h+r);

document.writeln(`

<h1>Площа циліндра за радусом ${r} та висотою ${h} = ${plo(r,h).toFixed(2)}</h1>

`)