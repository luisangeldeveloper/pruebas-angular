// Ejecutar con ng test

export class Jugador {

  hp: number; // vidas

  constructor() {
    this.hp = 100;
  }

  recibeDanio(danio: number) {

    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }

    return this.hp;
  }

}
