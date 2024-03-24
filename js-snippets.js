console.clear();
function add(x) {
    return function (y) {
        return function () {
            return x + y;
        };
    };
}

function addInfinite(a) {
    return function (b) {
        if (b === undefined) {
            return a;
        } else {
            return addInfinite(a + b);
        }
    };
}

let addCompressed = (a) => (b) => b ? addCompressed(a + b) : a;

let res = addCompressed(2)(3)(4)(10)(1);
console.log(res());

// --------------------------------------------------

let fetchData = () => {
    console.log("fetching data");
};

function debouncificate(targetFunction, delayInMilliSeconds) {
    let timer;
    return function () {
        // on every keystore clear the previous timer
        clearTimeout(timer);
        // now on every key stroke deplay the function call by dms.
        timer = setTimeout(function () {
            targetFunction();
        }, delayInMilliSeconds);
    };
}

const debouncedFunction = debouncificate(fetchData, 300);
debouncedFunction();
debouncedFunction();
debouncedFunction();
debouncedFunction();
setTimeout(() => debouncedFunction(), 300);
