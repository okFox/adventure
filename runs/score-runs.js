function scoreRun(choice, runId, user) {

    user.hp += choice.hp;
    user.nuyen += choice.nuyen;
    
    user.completed[runId] = true;
}

export default scoreRun;