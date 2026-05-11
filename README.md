# Office-Bingo

:video_game: :point_right: [**Play here!**](https://michaelsanford.com/Office-Bingo/)

![Homer Simpson: 'Bingo? That's my favourite game!'](https://media.giphy.com/media/3o6Mb3UCn0FSwjCorm/giphy.gif)

## Cool Features

- Full mobile support
- Still works well on Desktop
- Uses viewport units so (hopefully, if your phone is big enough) it'll fit perfectly
- Has a `manifest.json` so you can Add to Homescreen as an app
- Automatically detects your OS Dark Mode and adapts the board to match. Works on Android, Windows, macOS.
- **Win detection** — completing any row, column, or diagonal highlights the winning cells in green and shows a BINGO! banner

## Gameplay

On load, a list of "common tiles" is subjected to a [Schwartzian transform](https://en.wikipedia.org/wiki/Schwartzian_transform) and the first 25 items are assigned to the playing grid. The center tile is chosen at random from the shorter Free Square list.

Clicking/tapping a tile activates it. Tapping it again deactivates it, to account for goal-driven maniacs who will stop at nothing to trounce the competition, only to later realize it's only office bingo.

Complete any row, column, or diagonal to win. Multiple bingos are detected simultaneously. Refresh the board to generate a new one.

## Adding Phrases

Edit `docs/app.js` directly:

- `commonSquares` is for the main squares that shuffle
- `freeSquares` is a smaller pool for the free center square

You can do that [right from the GitHub web UI](https://github.com/michaelsanford/Office-Bingo/blob/master/docs/app.js)!

## Local Development

No build step required — the app is plain HTML/CSS/JS.

```
git clone https://github.com/michaelsanford/Office-Bingo.git
cd Office-Bingo
npx serve docs
```

Then open http://localhost:3000.

## Colophon

App icon by [monkik](https://www.flaticon.com/free-icon/bingo_1728620).
