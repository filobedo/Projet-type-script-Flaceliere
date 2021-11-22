import {Pokemon} from '../src/Pokemon';
import {Manager} from "../src/manager";

// 'use strict';
// function timerGame(callback) {
//     console.log('Ready....go!');
//     setTimeout(() => {
//         console.log("Time's up -- stop!");
//         callback && callback();
//     }, 1000);
// }fveregrfsd


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

        // setTimeout(Manager.fight(pika, cara), 1000);
        // setInterval(Manager.fight(pika, cara), 1000);

        // while(pika.life > 0 && cara.life > 0) {
        //     console.log('if');
        //     if (pika.whoAttackFirst(cara) == pika) {
        //         pika.fight(pika.choiceAttack(1));
        //         cara.fight(cara.choiceAttack(2));
        //     } else {
        //         cara.fight(cara.choiceAttack(2));
        //         pika.fight(pika.choiceAttack(1));
        //
        //     }
        //
        // }

    });

    // test('calls the callback after 1 second', () => {
    //     const timerGame = require('../timerGame');
    //     const callback = jest.fn();
    //
    //     timerGame(callback);
    //
    //     // At this point in time, the callback should not have been called yet
    //     expect(callback).not.toBeCalled();
    //
    //     // Fast-forward until all timers have been executed
    //     jest.runAllTimers();
    //
    //     // Now our callback should have been called!
    //     expect(callback).toBeCalled();
    //     expect(callback).toHaveBeenCalledTimes(1);
    // });
});
