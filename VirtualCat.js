var Cat = function(tiredness, hunger, loneliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
    this.pet = function() {
        loneliness--;
    };
    this.feed = function() {
        hunger--;
    };
    this.sleep = function() {
        tiredness--;
    };

    this.starve = function() {
        hunger++;
    };

    this.walking = function() {
        happiness++;
    };

    this.status = function() {
        console.log("tiredness: " + tiredness);
        console.log("hunger: " + hunger);
        console.log("loneliness: " + loneliness);
        console.log("happiness: " + happiness);
    };
};

newCat = new Cat(9,8,7,4);
newCat.status();
newCat.pet();
newCat.pet();
newCat.pet();
newCat.pet();
newCat.feed();
newCat.feed();
newCat.feed();
newCat.feed();
newCat.walking();
console.log("*****************************");
newCat.status();