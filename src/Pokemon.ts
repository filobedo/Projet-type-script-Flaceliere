//P
export class Pokemon {
    name: string;
    speed: number;
    attack = [
        {
            title: "pisto cornichon",
            damage: 20
        },
        {
            title: "pisto crevette",
            damage: 5
        },
        {
            title: "pisto cnacki",
            damage: 50
        },
    ];
    life: number;


    constructor(name: string, speed: number, life: number) {
        this.name = name;
        this.speed = speed;
        this.life = life;
    }

    whoAttackFirst(pok: Pokemon): Pokemon {
        if (pok.speed > this.speed)
            return pok;
        return this;
    }

    fight(dammage: number): Pokemon {
        this.life -= dammage;
        if (this.life < 0) {
            this.life = 0;
        }
        return this;
    }

    choiceAttack(choice: number): number {
        console.log(`${this.name} choses ${this.attack[choice].title} who deals ${this.attack[choice].damage} damage(s)`);
        return this.attack[choice].damage;
    }
}
