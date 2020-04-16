var td = document.getElementsByTagName('td');
var tr = document.getElementsByTagName('tr');
var divResult = document.getElementById('result');
var reset = document.getElementById('reset');
var game = { 'lines': [], 'blanks': [], 'currentTurn': 'X' };

//현재 누른 칸의 위치 찾기
game.clickTd = function (event) {
    var wLine = this.lines.indexOf(event.target.parentNode);
    var wBlank = this.blanks[wLine].indexOf(event.target);
    console.log(wLine, wBlank);
    this.checkBlank(wLine, wBlank);
}

//현재 누른 칸의 칸채우기
game.checkBlank = function (wLine, wBlank) {
    var currentLocation = this.blanks[wLine][wBlank].textContent;
    if (currentLocation != "") {

    } else {
        this.blanks[wLine][wBlank].textContent = this.currentTurn;
        this.checkLine(wLine, wBlank);
    }

}

//3줄의 칸이 같은지 찾기
game.checkLine = function (wLine, wBlank) {
    var result = false;
    //가로줄 체크
    if (this.blanks[wLine][0].textContent === this.currentTurn &&
        this.blanks[wLine][1].textContent === this.currentTurn &&
        this.blanks[wLine][2].textContent === this.currentTurn) {
        result = true;
    }
    //세로줄 체크
    if (this.blanks[0][wBlank].textContent === this.currentTurn &&
        this.blanks[1][wBlank].textContent === this.currentTurn &&
        this.blanks[2][wBlank].textContent === this.currentTurn) {
        result = true;
    }
    //대각선 체크
    if ((wLine - wBlank === 0) || (Math.abs(wLine + wBlank === 2))) {
        if ((this.blanks[0][0].textContent === this.currentTurn &&
            this.blanks[1][1].textContent === this.currentTurn &&
            this.blanks[2][2].textContent === this.currentTurn)
            || this.blanks[0][2].textContent === this.currentTurn &&
            this.blanks[1][1].textContent === this.currentTurn &&
            this.blanks[2][0].textContent === this.currentTurn) {
            result = true;
        }
    }

    this.changeTurn(wLine, wBlank, result);
}

//칸이 다찼으면 종료 안찼으면 턴 바꾸기
game.changeTurn = function (wLine, wBlank, result) {
    if (result) {
        divResult.innerText = (this.currentTurn + '님이 승리했습니다.');
        reset.style.display = "block";
    } else {
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

//리셋
reset.addEventListener('click', function () {
    game.blanks.forEach(function (line) {
        line.forEach(function (blank) {
            blank.textContent = "";
        })
    })

    result.innerText = '';
    reset.style.display = 'none';

});