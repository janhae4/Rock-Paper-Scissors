const randomOpt = () => {
    return Math.floor(Math.random() * 3) + 1;
}

const playRound = (userOpt, computerOpt) => {
    if (userOpt == computerOpt) {
        return 'Draw';
    }
    else if (computerOpt - userOpt == 1) { return 'Computer Win!!!'; }
    else if (computerOpt - userOpt == 2) { return 'You Win!!!'; }
    else if (computerOpt - userOpt == -1) { return 'You Win!!!'; }
    else if (computerOpt - userOpt == -2) { return 'Computer Win!!!'; }
}

document.addEventListener("DOMContentLoaded", () => {
    let userOpt = document.querySelectorAll(".choose .icon i");
    let title = document.querySelector(".title h1");
    userOpt.forEach(opt => {
        opt.addEventListener("click", () => {
            title.innerHTML = 'Wait';
            let dotCount = 0;
            let maxDots = 5;
            let user = document.querySelector(".p1 i");
            let computer = document.querySelector(".p2 i");
            let interval = setInterval(() => {
                if (dotCount < maxDots) {
                    dotCount++;
                } else {
                    dotCount = 1;
                }
                title.innerHTML = 'Wait' + '.'.repeat(dotCount);
                user.classList = ('fa-regular fa-hand-back-fist active');
                computer.classList = ('fa-regular fa-hand-back-fist active');
            }, 500);

            setTimeout(() => {
                clearInterval(interval);
                let computerOpt = randomOpt();
                console.log(computerOpt, opt.id);
                let result = playRound(opt.id, computerOpt);
                user.classList = opt.classList;
                computer.classList = computerOpt == 1 ? 'fa-regular fa-hand-back-fist' : computerOpt == 2 ? 'fa-regular fa-hand' : 'fa-regular fa-hand-scissors';
                title.innerHTML = result;
                console.log(result);
            }, 2000);
        });
    });
});

