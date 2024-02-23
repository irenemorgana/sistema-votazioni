class Progetto {
    constructor(titolo) {
        this.titolo = titolo;
        this.voti = 0;
    }

    vota() {
        this.voti++;
        aggiornaElencoProgetti();
    }

    getVoti() {
        return this.voti;
    }
}

class GestoreProgetti {
    constructor() {
        this.progetti = [];
    }

    aggiungiProgetto(titolo) {
        const progetto = new Progetto(titolo);
        this.progetti.push(progetto);
        aggiornaElencoProgetti();
    }

    votaProgetto(i) {
        this.progetti[i].vota();
    }

    getProgetti() {
        return this.progetti;
    }
    
}

const gestoreProgetti = new GestoreProgetti();

gestoreProgetti.aggiungiProgetto("Progetto A");
gestoreProgetti.aggiungiProgetto("Progetto B");
gestoreProgetti.aggiungiProgetto("Progetto C");

function aggiornaElencoProgetti() {
    const elencoProgetti = document.getElementById("elenco-progetti");
    elencoProgetti.innerHTML = "";
    gestoreProgetti.getProgetti().forEach((progetto, indice) => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = `${progetto.titolo}: ${progetto.getVoti()} voti `;
        const pulsanteVota = document.createElement("button");
        pulsanteVota.textContent = "Vota";
        pulsanteVota.addEventListener("click", () => {
            gestoreProgetti.votaProgetto(indice);
        });
        elementoLista.appendChild(pulsanteVota);
        elencoProgetti.appendChild(elementoLista);
    });
}

aggiornaElencoProgetti();