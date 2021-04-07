export class Pokemon {
    name: string;
    speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    fight(pok:Pokemon) {
        if (pok.speed > this.speed)
            return pok;
        return this;
    }
}
