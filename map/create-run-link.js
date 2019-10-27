function createRunLink(run) {
    const link = document.createElement('a');
    const linkImg = document.createElement('img');
    link.classList.add('runs');
    

    const searchParams = new URLSearchParams();
    searchParams.set('id', run.id);
    link.href = '../runs/?' + searchParams.toString();

    linkImg.style.top = run.map.top;
    linkImg.style.left = run.map.left;
    //link.textContent = run.title;
    link.append(linkImg);
    linkImg.src = '../assets/' + run.image;

    return link;
}

export default createRunLink;