const calcul = {
    init: function () {
        const btn = document.querySelectorAll('span');
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', calcul.handleClick);
        }
    },

    handleClick: function (e) {
        // console.log(handleClick);
        e.preventDefault();
        // const btnClick = e.target.value;
        const buttons = document.querySelector('.buttons');
        const value = document.getElementById('value');


        if (this.innerHTML === "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML === 'Clear') {
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", calcul.init);