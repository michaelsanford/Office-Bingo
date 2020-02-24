import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tiles {
  private commonSquares = [
    `"C'est bien d'la job!"`,
    `Defending current bug by referring to old spec`,
    `"You have a PR waiting"`,
    `Starting a Teams chat with a single "Hey"`,
    `Being reminded how many days are left in the sprint`,
    `Someone says "Agile"`,
    `Someone says "Kanban"`,
    `Not saying anything in scrum`,
    `Saying something weird in scrum`,
    `A bug you can't decipher`,
    `A bug you can't reproduce`,
    `Get shot by a nerf gun`,
    `Someone forgets to empty the hopper`,
    `Broadcast email for leaving a TV on`,
    `Receive an Amazon package`,
    `Try to pet Boo but he runs away`,
    `Take a call in a conference room`,
    `Chairs moved unnecessarily loudly`,
    `Michael gives unsolicited advice about git`,
    `Michael mentions his proximity to the office`,
    `Free fries at lunch!`,
    `Get a coffee without washing previous cup`,
    `Another update for Node.js`,
    `'It works on my machine'`,
    `Rerun maven clean install`,
    `"I always have Docker problems"`,
    `"I never have Docker problems"`,
  ];

  private freeSquares = [
    `"BON MATIN!"`,
    `Marco gets annoyed`,
    `Michael complains about architecture`,
    `JBoss problems!`,
    `Make a PR`
  ];

  assemble = (saveGame ? : number[]) => {
    let vector: string[];

    if (!saveGame) {
      vector = Tiles.shuffle(this.commonSquares);
      vector[12] = Tiles.randomElement(this.freeSquares);
    } else {
      vector = saveGame.map(saved => this.commonSquares[saved]);
      vector[12] = this.freeSquares[saveGame[12]];
    }

    return Tiles.gridify(vector);
  };

  validSaveGame = (vector: number[]): boolean =>
    vector.length === 25 && // Grid size
    vector[12] <= this.freeSquares.length && // Center square
    vector.every(i => i <= this.commonSquares.length - 1);

  static gridify = (vector: string[]): string[][] => [
    [vector[0], vector[1], vector[2], vector[3], vector[4]],
    [vector[5], vector[6], vector[7], vector[8], vector[9]],
    [vector[10], vector[11], vector[12], vector[13], vector[14]],
    [vector[15], vector[16], vector[17], vector[18], vector[19]],
    [vector[20], vector[21], vector[22], vector[23], vector[24]]
  ];

  static randomElement = (vector: string[]) => vector[Math.floor(Math.random() * vector.length)];

  // Implementation of https://en.wikipedia.org/wiki/Schwartzian_transform
  static shuffle = (vector: string[]) => vector
    .map((a: string) => ({
      sort: Math.random(),
      value: a
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}
