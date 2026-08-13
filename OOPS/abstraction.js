
class CoffeeMachine{

    start(){
        this.#addWater();
        this.#addCoffee();
        this.#brewCoffee();
        console.log("Coffee is ready!");
    }

    #addWater(){
        console.log("Adding Water...")
    }
    #addCoffee(){
        console.log("Adding Coffee...");
    }
    #brewCoffee(){
        console.log("Brewing Coffee...");
    }
}

const myCofee = new CoffeeMachine();
myCofee.start();
