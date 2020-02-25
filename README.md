# Office-Bingo

Play office bingo and win. Works relatively well on mobile.

What do you win? You'll have to play to see.

## Game

There is a long, static list of phrases that form the Common tiles. Every new game, that list is
subjected to a [Schwartzian transform](https://en.wikipedia.org/wiki/Schwartzian_transform), and then
the first 25 items are assigned to the playing grid.

Then, the center tile is chosen at random from the shorter Free Square list.

Clicking a tile activates it. Tapping it again deactivates it, to account for goal-driven maniacs
who will stop at nothing to trounce the competition, only to later realize it's only office bingo and regret
their zeal.

I considered adding win detection, but ... _shuffles deck_ `OUT OF SCOPE`.

## Save game

The current state of your game will be saved in `LocalStorage`. I do have plans to implement board
sharing via matrix URL.

Paradoxically, _loading_ a shared board is implemented, but _saving_ the game to a URL is not.

## Adding Phrases

Just make a PR to `tiles.ts`:

- `commonSquares` is for the main squares that shuffle,
- `freeSquares` is a smaller number of extremely-common events that form the pool for the free center square

You can do that [right from the Github web UI](https://github.com/michaelsanford/Office-Bingo/blob/master/src/app/tiles.ts)!

## Local Development

```
git clone https://github.com/michaelsanford/Office-Bingo.git
cd Office-Bingo
ng serve
```