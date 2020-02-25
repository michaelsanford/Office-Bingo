# Office-Bingo

:video_game: :point_right: [**Play here!**](https://michaelsanford.com/Office-Bingo/)

![Homer Simpson: 'Bingo? That's my favourite game!'](https://media.giphy.com/media/3o6Mb3UCn0FSwjCorm/giphy.gif)

## Cool Features

- Full mobile support,
- Still works well on Desktop,
- Uses viewport units so (hopefully, if your phone is big enough) it'll fit perfectly
- Has a `manifest.json` so can Add to Homescreen as an app
- Automatically detects your OS Dark Mode and adapts the board to match. Works on Android, Windows, macOS.

## Gameplay

On load, a list of "common tiles" is subjected to a [Schwartzian transform](https://en.wikipedia.org/wiki/Schwartzian_transform) and then
the first 25 items are assigned to the playing grid.

Then, the center tile is chosen at random from the shorter Free Square list.

Clicking/tapping a tile activates it. Tapping it again deactivates it, to account for goal-driven maniacs
who will stop at nothing to trounce the competition, only to later realize it's only office bingo and regret
their zeal.

Refresh the board to generate a new one.

I considered adding win detection, but ... _shuffles deck_ `OUT OF SCOPE`.

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

## Colophon

App icon by [monkik](https://www.flaticon.com/free-icon/bingo_1728620).
