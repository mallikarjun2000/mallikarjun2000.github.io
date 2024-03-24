function generateProgress() {
    let downloadPercent = 0;
    const progressIndicators = document.getElementById("progress-indicator");
    const indicatorDisplay = document.getElementById("loading");
    const startButton = document.getElementById("start");
    startButton.addEventListener("click", (e) => handleClick(e));
    function updateUI(value) {
        progressIndicators.style.width = value;
        indicatorDisplay.innerHTML = value;
    }

    function startDowload() {
        startButton.disabled = true;
        const interval = setInterval(() => {
            downloadPercent++;
            updateUI(`${downloadPercent}%`);

            if (downloadPercent === 100) {
                clearInterval(interval);
                updateUI(`${0}%`);
                startButton.disabled = false;
                downloadPercent = 0;
            }
        }, 100);
    }

    function handleClick(e) {
        startDowload();
    }
}
