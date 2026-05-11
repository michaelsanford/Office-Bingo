const commonSquares = [
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
  `Try to pet dog but he runs away`,
  `Take a call in a conference room`,
  `Chairs moved unnecessarily loudly`,
  `Make a commit with wrong JIRA`,
  `Someone mentions their proximity to the office`,
  `Free fries at lunch!`,
  `Get a coffee without washing previous cup`,
  `Another update for Node.js`,
  `"It works on my machine"`,
  `"Just rerun 'maven clean install'"`,
  `"I always have Docker problems"`,
  `"I never have Docker problems"`,
  `Suggest a refactoring`,
  `Someone suggests Node.js backend rewrite`,
  `Someone suggests a Go backend rewrite`,
  `Someone mentions Haskell, Clojure or Lisp`,
  `"Zoom in a little bit!"`,
  `Set a PR to "Needs Work"`,
  `Your PR is "Needs Work"`,
  `White Knighting a team member`,
  `Someone falls asleep in a meeting`,
  `"It shouldn't take that long"`,
  `Someone repeats a mistake for the 3rd time`,
  `Discover more Acceptance Criteria during briefing`,
  `Defending lack of common sense as lack of spec`,
  `"Is it lunch yet?"`,
  `"Oh look at the time"`,
  `"That wasn't in the acceptance criteria"`,
  `"I don't know how to do that"`,
  `You're interrupted while speaking`,
  `Someone complains about a legacy system`,
  `Question interrupted by a premature answer`,
];

const freeSquares = [
  `"BON MATIN!"`,
  `Michael complains about architecture`,
  `JBoss problems`,
  `Make a PR`,
  `Get a coffee`,
];

const LINES = [
  [[0,0],[0,1],[0,2],[0,3],[0,4]],
  [[1,0],[1,1],[1,2],[1,3],[1,4]],
  [[2,0],[2,1],[2,2],[2,3],[2,4]],
  [[3,0],[3,1],[3,2],[3,3],[3,4]],
  [[4,0],[4,1],[4,2],[4,3],[4,4]],
  [[0,0],[1,0],[2,0],[3,0],[4,0]],
  [[0,1],[1,1],[2,1],[3,1],[4,1]],
  [[0,2],[1,2],[2,2],[3,2],[4,2]],
  [[0,3],[1,3],[2,3],[3,3],[4,3]],
  [[0,4],[1,4],[2,4],[3,4],[4,4]],
  [[0,0],[1,1],[2,2],[3,3],[4,4]],
  [[0,4],[1,3],[2,2],[3,1],[4,0]],
];

function shuffle(array) {
  return array
    .map(value => ({ sort: Math.random(), value }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
}

const tracker = new Set(['2-2']);
const cells = new Map();

function checkWin() {
  cells.forEach(cell => cell.classList.remove('bingo'));

  const winningKeys = new Set();
  for (const line of LINES) {
    if (line.every(([r, c]) => tracker.has(`${r}-${c}`))) {
      line.forEach(([r, c]) => winningKeys.add(`${r}-${c}`));
    }
  }

  winningKeys.forEach(key => cells.get(key)?.classList.add('bingo'));
  document.getElementById('bingo-banner').hidden = winningKeys.size === 0;
}

function assemble() {
  const shuffled = shuffle(commonSquares);
  shuffled[12] = freeSquares[Math.floor(Math.random() * freeSquares.length)];
  return shuffled;
}

function renderBoard() {
  const board = document.getElementById('board');
  const tiles = assemble();
  board.innerHTML = '';

  for (let r = 0; r < 5; r++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let c = 0; c < 5; c++) {
      const cell = document.createElement('div');
      const key = `${r}-${c}`;
      cell.className = 'cell' + (tracker.has(key) ? ' awarded' : '');
      cell.textContent = tiles[r * 5 + c];
      cells.set(key, cell);
      cell.addEventListener('click', () => {
        if (key === '2-2') return;
        if (tracker.has(key)) {
          tracker.delete(key);
          cell.classList.remove('awarded');
        } else {
          tracker.add(key);
          cell.classList.add('awarded');
        }
        checkWin();
      });
      row.appendChild(cell);
    }

    board.appendChild(row);
  }
}

function win() {
  alert("Pay-to-win office bingo? Really? 🤦‍♂️");
}

renderBoard();
