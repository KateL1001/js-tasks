// Реализуйте функцию throttle(fn, ms), которая также ограничивает частоту выполнения функции fn, но отличается от debounce тем, что функция вызывается на старте и в конце интервала.
function onScroll() {
    console.log('Scroll event triggered');
    // Здесь можно выполнять тяжелые операции при прокрутке
}

const throttledScroll = throttle(onScroll, 100);

window.addEventListener('scroll', throttledScroll);


function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedArgs = null;
            }
        }, ms);
    }

    return wrapper;
}