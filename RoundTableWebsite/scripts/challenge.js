//Globals
var textBox = document.getElementById('challenge-text-box');
var output = document.getElementById('result-box');

//===== Challenge 1 =====//

var developers = [
    { firstName: 'Jeff', lastName: 'A', age: 28, language: 'C#', yearsOfExperience: 5 },
    { firstName: 'Lindsey', lastName: 'S', age: 35, language: 'Python', yearsOfExperience: 3 },
    { firstName: 'Gavin', lastName: 'K', age: 46, language: 'Java', yearsOfExperience: 12 },
    { firstName: 'Marleen', lastName: 'B', age: 51, language: 'C#', yearsOfExperience: 20 },
    { firstName: 'Brent', lastName: 'K', age: 21, language: 'JavaScript', yearsOfExperience: 1 },
    { firstName: 'Ashley', lastName: 'T', age: 33, language: 'JavaScript', yearsOfExperience: 6 },
    { firstName: 'Kristen', lastName: 'H', age: 41, language: 'Python', yearsOfExperience: 9 },
    { firstName: 'Joshua', lastName: 'Y', age: 50, language: 'Python', yearsOfExperience: 5 }
];



function groupDevs(devs) {
    //create object to store results {key:[values]}
    var groups = {};
    //loop through list
    for (let i in devs) {
        var lang = devs[i].language;
        var name = devs[i].firstName + " " + devs[i].lastName;
        //If the object doesn't contain the language, add it in as a key and add add name property to values list
        if (!groups[lang]) {
            groups[lang] = [name];
        }
        //else if object contains key (language) add name property to values list
        else {
            groups[lang].push(name);
        }
    }
    //return object
    for (let [key, value] of Object.entries(groups)) {
        output.innerHTML += `</br> ${key}: ${value}`;
    }
}


//===== Challenge 2 =====//

var liquids = [
    ['H', 'H', 'W', 'O'],
    ['W', 'W', 'O', 'W'],
    ['H', 'H', 'O', 'O']
]

function seperateLiquids(list){
    var O = [];
    var W = [];
    var H = [];
    var result = [];
    for (var i of list){
        for(var j of i){
            if(j == 'O') O.push(j)
            else if (j == 'W') W.push(j)
            else H.push(j)
        }
    }
    result.push(O,W,H)
    for (var i of result){
        output.innerHTML += `${i}</br>`
    }
}



//////////////////////////////////////////////////////////////////////////////////////




//Determines which option on challenge dropdown is selected 
function getOption() {
    var option = document.getElementById('options').value;
    return option;
}

//Displays anwer/result to output window
function returnResult() {
    var option = getOption();
    if (option == 'Challenge 1' && output.innerHTML == '') {
        groupDevs(developers); //currently need to enter function name here, would like to replace with Challenge1() and Challenge2()
    }
    else if (option == 'Challenge 2' && output.innerHTML == '') {
        seperateLiquids(liquids);
    }
}

//Clears both input/poutput windows 
function clearFields() {
    output.innerHTML = '';
    textBox.innerHTML = '';
}

//Functions to read challenge from a text file and display to user
const streamToText = async (blob) => {
    const readableStream = await blob.getReader();
    const chunk = await readableStream.read();

    return new TextDecoder('utf-8').decode(chunk.value);
};

const bufferToText = (buffer) => {
    const bufferByteLength = buffer.byteLength;
    const bufferUnit8Array = new Uint8Array(buffer, 0, bufferByteLength);

    return new TextDecoder().decode(bufferUnit8Array);
}

document.getElementById('file-input').addEventListener('change', function (e) {
    let file = document.getElementById('file-input').files[0];

    (async () => {
        const fileContent = await file.text();
        textBox.innerHTML = fileContent;

    })();
})