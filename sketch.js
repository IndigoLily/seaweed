var spacers = [];
var container;

function setup() {
    noCanvas();
    container = createDiv('');
    container.id('container');
    for(var i = 0; i < 20; i++) {
        addRow(container);
    }
}

function draw() {
    for(var i = 0; i < spacers.length; i++) {
        var speed = millis() * ((1/60)/(1000/60));
        var offset = map(i, 0, spacers.length, 0, PI*1.5);
        spacers[i].style('width', map(sin(speed + offset), -1, 1, 5, 30)+'vw');
    }
}

function addRow(parent) {
    var row = createDiv('');
    row.addClass('row');
    addTooth(row);
    addSpacer(row);
    addTooth(row);
    parent.child(row);
}

function addTooth(parent) {
    var tooth = createDiv('');
    tooth.addClass('tooth');
    parent.child(tooth);
}

function addSpacer(parent) {
    var spacer = createDiv('');
    spacer.addClass('spacer');
    parent.child(spacer);
    spacers.push(spacer);
}
