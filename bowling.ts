export default calculScore;

function calculScore(rolls: number[]) {
    let score = 0;
    rolls.forEach(roll => score = score + roll)
    return score;
}
