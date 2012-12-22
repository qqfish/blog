// Import
var Fs = require('fs'),
    Readline = require('readline');
    Moment = require('moment');

// Config
var basePath = 'src/',
    postName = 'fixme';
    currentDate = Moment().format('YYYY-MM-DD');

// Create Interface
var rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your post? ', function(answer) {
    if(answer !== '') {
        postName = answer;
    }

    // Template
    var fileContent = [
'---',
'layout: post',
'title: "' + postName + '"',
'tags: [\'\']',
'---'
    ].join('\n');

    Fs.writeFile(basePath + '_posts/' + currentDate + '-' + postName.toLowerCase().split(' ').join('-') + '.html', fileContent);

    rl.close();
});
