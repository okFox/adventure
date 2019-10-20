function createRunLink(run) {
    const link = document.createElement('a');
    link.classList.add('runs');

    const searchParams = new URLSearchParams();
    searchParams.set('id', run.id);
    link.href = '../runs/?' + searchParams.toString();
    //link.href = '../runs/?id=' + run.id; //too fancy for me

    link.style.top = run.map.top;
    link.style.left = run.map.left;
    link.textContent = run.title;

    return link;
}

export default createRunLink;