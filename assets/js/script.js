var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:30
});

typewriter.typeString(" HI! I'm Alperen.I  love <strong>CODING!</strong>")
    .pauseFor(3500)
    .deleteChars(7)
    .typeString('<strong>NEW YORK!🗽</strong>')
    .pauseFor(3500)
    .start();