export default calculScore;

function calculScore(rolls: number[]) {
    let score = 0;

    score = calculScoreWithoutBonus(rolls)

    //no strikes spares:   function calculBonusBySpares(tab)

    //strikes no spares:   function calculBonusByStrikes(tab)

    return score;
}

function calculScoreWithoutBonus(rolls: number[]) {
    let score = 0;
    return rolls.reduce((previousRoll, currentRoll) => previousRoll + currentRoll, score)
}
