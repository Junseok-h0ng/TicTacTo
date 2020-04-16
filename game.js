var td = document.getElementsByTagName('td');
var tr = document.getElementsByTagName('tr');

var game = { 'lines': [], 'blanks': [], 'currentTurn': 'X' };

//현재 누른 칸의 위치 찾기
game.clickTd = function (event) {
    var wLine = this.lines.indexOf(event.target.parentNode);
    var wBlank = this.blanks[wLine].indexOf(event.target);
    console.log(wLine, wBlank);
    this.checkBlank(wLine, wBlank);
}

game.checkBlank = function (wLine, wBlank) {
    console.log('check')
    var currentLocation = this.blanks[wLine][wBlank].textContent;
    if (currentLocation != "") {

    } else {
        console.log('x');
        if (this.currentTurn === 'X') {
            this.blanks[wLine][wBlank].textContent = this.currentTurn;
            this.currentTurn = 'O';
        } else {
            this.blanks[wLine][wBlank].textContent = this.currentTurn;
            this.currentTurn = 'X';
        }
    }
}

//칸을 클릭
function clickTd(event) {
    game.clickTd(event);
}

//줄들 과 칸들 배열에 넣기
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