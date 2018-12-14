function stampaDettagli<T>(elenco: T[]): void {
    // ERRORE: Property 'dettagli' does not exist on type 'T'.
    elenco.forEach(elemento => {
        // elemento.dettagli(); 
    });
}

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