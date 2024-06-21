let randomMessages = [
    'HI BABY!!',
    'Hey munchkin!',
    'HI BABYYYY!!!!',
    'hi my angel',
    'Hello my sweet girl :)',
    'Hi cupcake!',
    'Hi you cute, funny, hot, pretty, sexy, stunning, perfect, beautiful little queen <3',
];
let selectedMessage = randomMessages[Math.round(Math.random() * randomMessages.length) + 1];
if(selectedMessage != undefined)
{
    alert(selectedMessage);
} else 
{
    alert('I love you so much');
}
let eeps = [
    document.getElementById('e1'),
    document.getElementById('e2'),
    document.getElementById('e3'),
    document.getElementById('e4'),
];
// styling the eepy marks

let eepyness;
eepyness = localStorage.getItem('amount');
if(eepyness == null)
{
    eepyness = 30;
}
document.getElementById('custom').value = eepyness;

// main update loop for the bar
function update()
{
    document.getElementById('fill').style.height = eepyness + '%';
    document.getElementById('curr').innerHTML = 'Current eepyness: ' + eepyness;
    eepyness = document.getElementById('custom').value;
    requestAnimationFrame(update);
}
update();

function save()
{
    localStorage.setItem('amount', eepyness);
}

// onclicks
document.getElementById('bar').onclick = () => {
    document.getElementById('window').style.display = 'block';
}
document.getElementById('close').onclick = () => {
    document.getElementById('window').style.display = 'none';
    save();
}