// Реализуйте функцию debounce(fn, ms), которая ограничивает частоту выполнения функции fn. Функция fn должна вызываться не чаще одного раза в ms миллисекунд.

function debounce(func, ms) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}
const searchInput = document.querySelector('.search');

function handleSearch(event) {
    console.log(`Search query: ${event.target.value}`);
}

const debouncedSearch = debounce(handleSearch, 3000);

searchInput.addEventListener('input', debouncedSearch);