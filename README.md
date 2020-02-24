# Office-Bingo

Play office bingo and win. Works relatively well on mobile.

What do you win? You'll have to play to see.

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