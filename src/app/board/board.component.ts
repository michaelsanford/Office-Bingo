import {
  Component,
  OnInit
} from '@angular/core';
import {
  Tiles
} from '../tiles';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  grid: string[][];
  tracker: string[] = ["2-2"]; // 2-2 is the free center

  constructor(private tiles: Tiles) {}

  ngOnInit(): void {
    this.grid = this.tiles.assemble();
  }

  toggle = (row: number, cell: number) =>
    this.tracker.includes(`${row}-${cell}`) && `${row}-${cell}` !== "2-2"
      ? this.tracker = this.tracker.filter(e => e !== `${row}-${cell}`)
      : this.tracker.push(`${row}-${cell}`);

  awarded = (row: number, cell: number) => this.tracker.includes(`${row}-${cell}`);
}
