document.addEventListener("DOMContentLoaded", function () {


    const increaseButtons = document.querySelectorAll(".increase");

    increaseButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const container = this.closest(".quantity-container");
            const input = container.querySelector(".quantity-amount");

            let value = parseInt(input.value) || 0;
            input.value = value + 1;

        });
    });



    const decreaseButtons = document.querySelectorAll(".decrease");

    decreaseButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const container = this.closest(".quantity-container");
            const input = container.querySelector(".quantity-amount");

            let value = parseInt(input.value) || 0;

            if (value > 1) {
                input.value = value - 1;
            }

        });
    });

});