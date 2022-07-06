import calculScore from "./bowling";
var assert = require('assert')

describe('Calcul bowling score when no spares or strikes', function() {
    it('for full 0', function() {
        let result = 0;
        const rolls: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        result = calculScore(rolls);

        assert.equal(result, 0);
    })

    it('for random tab', function() {
        let result = 0;
        const rolls: number[] = [0,0,5,0,0,6,0,0,0,0,6,0,0,8,0,3,0,0,2,0,0,0]

        result = calculScore(rolls);

        assert.equal(result, 30);
    })
})

describe('Calcul bowling score when spares and no strikes', function() {

})

describe('Calcul bowling score when strikes and no spares', function() {

})

describe('Calcul bowling score when strikes and spares', function() {

})
