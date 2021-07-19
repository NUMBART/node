const fs = require('fs');

dataBuffer = fs.readFileSync('1-JSON.json');
data = JSON.parse(dataBuffer.toString());

data.name = 'Subhrangshu';
data.age = '23';

fs.writeFileSync('1-JSON.json', JSON.stringify(data));
