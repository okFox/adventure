function hasCompletedAllRuns(runs, user) {
    // iterate through quests
    for (let i = 0; i < runs.length; i++) {
        const currentRun = runs[i];
        // if any of the quests is incomplete
        if (!user.completed[currentRun.id]) {
            return false;
        }
    }

    return true;
}

export default hasCompletedAllRuns;