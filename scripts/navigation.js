{
    const fanBody = document.querySelector('#ebin');
    const wings = document.querySelector('#mustache');
    const powerBtn = document.querySelector('#power');
    const powerLabel = document.querySelector('#powerLabel');
    const speedControlBtns = document.querySelectorAll('.speed-control');

    const speedLvls = [...speedControlBtns].map(x => +x.value);

    powerBtn.addEventListener('click', (e) => {
        if (powerBtn.checked) {
            powerLabel.innerText = 'Off';
            fanBody.classList.remove('animation-paused');
            wings.classList.remove('animation-paused');
            speedControlBtns.forEach(x => x.disabled = false);

            if (![...speedControlBtns].some(x => x.checked)) {
                speedControlBtns[0].checked = true;
            }
        } else {
            powerLabel.innerText = 'On';
            fanBody.classList.add('animation-paused');
            wings.classList.add('animation-paused');
            speedControlBtns.forEach(x => x.disabled = true);
        }
    });

    for (const speedControlBtn of speedControlBtns) {
        speedControlBtn.addEventListener('change', (e) => {
            const clickedBtn = e.target;
            const selectedVal = +clickedBtn.value;

            const toRemove = speedLvls
                .filter(x => x !== selectedVal)
                .map(x => `speed-${x}`);

            wings.classList.remove(...toRemove)
            wings.classList.add(`speed-${selectedVal}`);

            if (selectedVal === 5) {
                fanBody.classList.add('broken');
                wings.classList.add('animation-reversed');
            } else {
                fanBody.classList.remove('broken');
                wings.classList.remove('animation-reversed');
            }
        });
    }
}
