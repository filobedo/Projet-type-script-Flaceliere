import {Pokemon} from "./Pokemon";

export class Manager {

    public static fight(poke1: Pokemon, poke2: Pokemon): void {
        if(poke1.life > 0 && poke2.life > 0) {
            if (poke1.whoAttackFirst(poke2) == poke1) {
                poke1.fight(poke1.choiceAttack(1));
                poke2.fight(poke2.choiceAttack(2));
            } else {
                poke2.fight(poke2.choiceAttack(2));
                poke1.fight(poke1.choiceAttack(1));

            }

        }
    }
}
