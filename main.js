class hero{
    constructor(name,age,heroType){
        this.name = name
        this.age = age
        this.heroType = heroType
    }
    atack(){
        let power;
        if(this.heroType === "mage"){
            power = "magic";
        }else if(this.heroType === "warrior"){
            power = "sword"
        }else if(this.heroType === "monk"){
            power = "martil arts"
        }else if(this.heroType === "ninja"){
            power = "shuriken"
        }else{
            power = "The hero type don't exist in the game";
        }
        return `The ${this.heroType} atack using ${power}.`;
    }
}

let firstHero = new hero("jarvanrei",25,"warrior");
console.log(firstHero.atack());

let secondHero = new hero("zazzyTease",24, "monk");
console.log(secondHero.atack());

let thirdHero = new hero("Midoriya", 15, "mage");
console.log(thirdHero.atack());

let fourHero = new hero("Minato", 28, "ninja");
console.log(fourHero.atack());

let fiveHero = new hero("Tobi", 34, "human");
console.log(fiveHero.atack());