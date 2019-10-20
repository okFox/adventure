import isDead from '../common/is-dead.js';
import { getUser } from '../common/utils.js';

function loadProfile() {
 
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const nuyen = document.getElementById('nuyen');

    const user = getUser();

    if (!user) {
        window.location = './';
    }
//check this after formatting final art
    name.textContent = user.name;
    avatar.src = '../assets/' + user.role + '.png';
    nuyen.textContent = user.nuyen;

    if (isDead(user)) {
        hp.textContent = 'R.I.P.';
    } else {
        hp.textContent = user.hp;
    }

}
export default loadProfile;