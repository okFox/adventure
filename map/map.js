import { getUser } from '../common/utils.js';
import isDead from '../common/is-dead.js';
import hasCompletedAllRuns from '../map/has-completed-all-runs.js';
import runsList from '../data/runs-api.js';
import createCompletedRun from './create-completed-run.js';
import loadProfile from '../common/load-profile.js';
import createRunLink from './create-run-link.js';

const nav = document.getElementById('runs');

loadProfile();
const user = getUser();

if (isDead(user) || hasCompletedAllRuns(runsList, user)) {
    window.location = '../results';
}

for (let i = 0; i < runsList.length; i++) {
    const run = runsList[i];
    let runDisplay = null;
    // if the user has completed it
    if (user.completed[runsList.id]) {
        // make a completed quest display (with a checkmark)
        runDisplay = createCompletedRun(run);
    }
    else {
        // otherwise, make a link to the quest
        runDisplay = createRunLink(run);
    }
    nav.appendChild(runDisplay); // add the quest display to the nav
}
