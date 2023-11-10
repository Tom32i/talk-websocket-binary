var test = '{ "name": "client", "id": 42 }';

function toInt(value) {
    return value.split('').map(c => c.charCodeAt(0));
}

function toBin(value) {
    return value.split('').map(c => intToBin(c.charCodeAt(0)));
}

function intToBin(value) {
    return (value >>> 0).toString(2).padStart(8, '0');
}

//console.log(...toInt('{ "name": "client:position", "id": 42, "x": 3466, "y": 6046 }'));
//console.log(...toBin('{ "name": "client:position", "id": 42, "x": 3466, "y": 6046 }'));
//console.log(...[5, 42, 3466, 6046].map(intToBin));
