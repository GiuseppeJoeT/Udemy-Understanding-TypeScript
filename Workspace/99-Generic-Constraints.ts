// function stampaDettagli<T>(elenco: T[]): void {
//     // ERRORE: Property 'dettagli' does not exist on type 'T'.
//     elenco.forEach(elemento => {
//         // elemento.dettagli(); 
//     });
// }

interface HasDetails {
    dettagli(): string;
}

interface Veicolo {
    modello: string;
    marca: string;
    dettagli(): string;
}

class Automobile implements Veicolo {
    public marca: string;
    public modello: string;
    public anno: number | string;

    constructor(marca: string, modello: string, anno?: number) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno || 'n.d.';
    }

    dettagli(): string {
        // template strings, ES6
        return `Dettagli auto:
            marca:${this.marca}
            modello:${this.modello}
            anno:${this.anno}
        `;
    }
}

class Motocicletta implements Veicolo {
    
    constructor(public marca: string, public modello: string, public anno?: number) {
        this.marca = marca;
        this.modello = modello;
    }

    dettagli(): string {
        return `Dettagli moto:
            marca:${this.marca}
            modello:${this.modello}
        `;
    }
}

function stampaDettagli<T extends HasDetails>(elenco: T[]): void {
    elenco.forEach(elemento => {
        console.log(elemento.dettagli());
    });
}

const elencoVeicoli = [
  new Automobile('Ferrari', '365 GTB/4', 1972),
  new Automobile('Aston Martin', 'Vantage'),
  new Motocicletta('Yamaha', 'XSR700')
];

stampaDettagli<Veicolo>(elencoVeicoli);