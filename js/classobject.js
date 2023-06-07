class Building {
    constructor(l,w){
        this.length = l;
        this.width = w;
    }

    area(){
        let ans;
        ans = this.length*this.width;
        console.log("Ans is " + ans);
    }
    estimate(m){
        console.log(m + " Month");
    }
}

const b1 = new Building(100,200);
b1.area();
b1.estimate(6);

const b2 = new Building(600,400);
b2.area();
b2.estimate(8);