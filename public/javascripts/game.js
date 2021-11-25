const p_batu = document.getElementById("p_batu");
const p_kertas = document.getElementById("p_kertas");
const p_gunting = document.getElementById("p_gunting");

const comBatuBg = document.getElementById("com-batu");
const comKertasBg = document.getElementById("com-kertas");
const comGuntingBg = document.getElementById("com-gunting");

const area_middle = document.querySelector(".area-middle");
const text_middle = document.querySelector(".text-middle");

const refreshText = document.getElementById("text-refresh")
const refreshPage = document.getElementById("refresh");

function set(duration1, duration2, duration3) {
    setTimeout(() => {
        comBatuBg.style.background = "var(--btn-play-bg)";
        comBatuBg.style.borderRadius = "15%";
        setTimeout(() => {
            comBatuBg.style.background = "";
        }, 300)
    }, duration1)
    setTimeout(() => {
        comKertasBg.style.background = "var(--btn-play-bg)";
        comKertasBg.style.borderRadius = "15%";
        setTimeout(() => {
            comKertasBg.style.background = "";
        }, 300)
    }, duration2)
    setTimeout(() => {
        comGuntingBg.style.background = "var(--btn-play-bg)";
        comGuntingBg.style.borderRadius = "15%";
        setTimeout(() => {
            comGuntingBg.style.background = "";
        }, 300)
    }, duration3)
}

function scramble() {
    for (let i = 0; i < 10; i++) {
        if (i === 1) {
            set(300, 600, 900);
        } else if (i === 2) {
            set(1200, 1500, 1800);
        } else if (i === 3) {
            set(2100, 2400, 2700)
        } else if (i === 4) {
            set(3000, 3300, 3600)
        }
    }
}

function compare(comBg, computer, resultConsole, result, newClass, shuffle) {
    setTimeout(() => {
        comBg.style.background = "var(--btn-play-bg)";
        comBg.style.borderRadius = "15%";
        setTimeout(() => {
            if (shuffle === computer) {
                area_middle.className = newClass;
                text_middle.innerHTML = result;
                comBg.style.background = "var(--btn-play-bg)";
                comBg.style.borderRadius = "15%";
                console.log(resultConsole)
                setTimeout(() => {
                    p_batu.className = "disable-click";
                    p_kertas.className = "disable-click";
                    p_gunting.className = "disable-click";
                    refreshText.innerHTML = "Please refresh to play again";
                }, 1500)
            } else {
                comBg.style.background = "";
            }
        }, 300)
    }, 4000)

    if (shuffle === computer) {
        return;
    }
}

class player {
    batu() {
        p_batu.addEventListener("click", () => {
            console.log(p_batu.id)
            const comShuffle = [c_batu, c_kertas, c_gunting];
            const shuffle = comShuffle[Math.floor(Math.random() * comShuffle.length)].id;
            console.log(shuffle)

            set();
            scramble();
            compare(comBatuBg, "c_batu", "DRAW", "DRAW", "result-draw", shuffle);
            compare(comKertasBg, "c_kertas", "COM WINS", "COM <br> WINS", "result", shuffle);
            compare(comGuntingBg, "c_gunting", "PLAYER 1 WINS", "PLAYER 1 <br> WINS", "result", shuffle);
        })
    }

    kertas() {
        p_kertas.addEventListener("click", () => {
            console.log(p_kertas.id)
            const comShuffle = [c_batu, c_kertas, c_gunting];
            const shuffle = comShuffle[Math.floor(Math.random() * comShuffle.length)].id;
            console.log(shuffle)

            set();
            scramble();
            compare(comBatuBg, "c_batu", "PLAYER 1 WINS", "PLAYER 1 <br> WINS", "result", shuffle);
            compare(comKertasBg, "c_kertas", "DRAW", "DRAW", "result-draw", shuffle);
            compare(comGuntingBg, "c_gunting", "COM WINS", "COM <br> WINS", "result", shuffle);
        })
    }

    gunting() {
        p_gunting.addEventListener("click", () => {
            console.log(p_gunting.id)
            const comShuffle = [c_batu, c_kertas, c_gunting];
            const shuffle = comShuffle[Math.floor(Math.random() * comShuffle.length)].id;
            console.log(shuffle)

            set();
            scramble();
            compare(comBatuBg, "c_batu", "COM WINS", "COM <br> WINS", "result", shuffle);
            compare(comKertasBg, "c_kertas", "PLAYER 1 WINS", "PLAYER 1 <br> WINS", "result", shuffle);
            compare(comGuntingBg, "c_gunting", "DRAW", "DRAW", "result-draw", shuffle);
        })
    }

    playAgain() {
        refreshPage.addEventListener("click", () => {
            location.reload();
        })
    }
}

const play = new player();

play.batu();
play.kertas();
play.gunting();
play.playAgain();