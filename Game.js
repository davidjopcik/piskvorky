class Muz {
    pohlavi = "muz";
    
    lov() {
        console.log("Muz lovi");
    }
}

class Zena {
    pohlavi = "zena";
    
    var() {
        console.log("Zena vari");
    }
}

class Hrdina extends Muz {
    
    litej() {
        
    }
}

const hrdina = new Hrdina();
hrdina.lov();

class Uzivatel {
    pohlavi = "muz";

    constructor(jmeno) {
        this.jmeno = jmeno;
    }

    zmenJmeno(jmeno) {
        this.jmeno = jmeno;
    }

    chod() {
        console.log(this.jmeno + "" + "chodi");
    }
}

const franta = new Uzivatel("Franta");
franta.chod();
franta.zmenJmeno("Jozka");
console.log(franta.jmeno);
console.log(franta.pohlavi);
const pepa = new Uzivatel("Pepa");
console.log(pepa.jmeno);