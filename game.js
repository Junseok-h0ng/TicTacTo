var td = document.getElementsByTagName('td');
var tr = document.getElementsByTagName('tr');

var game = { 'lines': [], 'blanks': [] };

game.clickTd = function (event) {
    var line = event.target.parentNode;
    var table = line.parentNode;
    console.log(line, table);
    var wLine = this.lines.indexOf(line);

}

function clickTd(event) {
    game.clickTd(event);
}

var init = function () {
    var k = -1;
    for (var i = 0; i < 3; i++) {
        game.lines.push(tr[i]);
        game.blanks.push([]);
        k++;
        for (var j = 0; j < 3; j++) {
            game.blanks[i].push(td[j + k + i]);
        }
        k++;
    }
}

init();