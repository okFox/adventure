//need to account for images

function createCompletedRun(run) {
    const span = document.createElement('span');
    span.classList.add('run');
    span.classList.add('completed');

    span.style.top = run.map.top;
    span.style.left = run.map.left;

    span.textContent = run.title;
    return span;
}

export default createCompletedRun;