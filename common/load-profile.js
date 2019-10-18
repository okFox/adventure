import isDead from '../common/is-dead.js';
import { getUser } from '../data/api.js';

function loadProfile() {
 
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/' + user.role + '.png';
    gold.textContent = user.nuyen;

    if (isDead(user)) {
        hp.textContent = 'R.I.P.';
    } else {
        hp.textContent = user.hp;
    }

}
export default loadProfile;