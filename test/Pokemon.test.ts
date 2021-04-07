import {Pokemon} from '../src/Pokemon';

describe("compare between two pokemon",() => {
   it('should return pokemon one', () => {
       const pika = new Pokemon("toto", 100, 300);
       const cara = new Pokemon("cara", 100, 310);
       const res = pika.whoAttackFirst(cara);
       expect(res.name).toBe("toto");
   });


    it('The life of the pokemon Cara going down to 0', () => {
        const pika = new Pokemon("toto", 100, 300);
        const cara = new Pokemon("cara", 100, 310);

        while (pika.life > 0 && cara.life > 0) {
            if (pika.whoAttackFirst(cara) == pika) {
                pika.fight(pika.choiceAttack(1));
                cara.fight(cara.choiceAttack(2));
            } else {
                cara.fight(cara.choiceAttack(2));
                pika.fight(pika.choiceAttack(1));
            }
        }

        expect(cara.life).toBe(0);

    });
});
