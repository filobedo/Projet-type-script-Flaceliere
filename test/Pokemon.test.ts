import {Pokemon} from '../src/Pokemon';

describe("test1",() => {
   it('mon test', () => {
       const pika = new Pokemon("toto", 100);
       const cara = new Pokemon("cara", 100);
       const res = pika.fight(cara);
       expect(res.name).toBe("toto");
   });
});
