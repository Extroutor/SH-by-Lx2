window.onload = () => {
    var universSelect = universeSelect.universe;

    function changeOption() {
        var selectedOption = universSelect.options[universSelect.selectedIndex];

        console.log("Вы выбрали: " + selectedOption.text);

        var arrow = document.querySelector('.arrow-1');
        arrow.style.opacity = '100';
    }

    universSelect.addEventListener("change", changeOption);

}