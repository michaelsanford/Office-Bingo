import {
  Component,
  OnInit
} from '@angular/core';
import {
  Tiles
} from '../tiles';
import {
  RouterStateSnapshot,
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  grid: string[][];
  tracker: string[] = ["2-2"]; // 2-2 is the free center
  saveVector: number[];

  constructor(private tiles: Tiles, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // TODO (redo?)
    // this.route.params.subscribe((params: Params) => {
    //   if (params.sg) {
    //     this.saveVector = params.sg.split(",");
    //     if (!this.tiles.validSaveGame(this.saveVector)) {
    //       console.error("Corrupted save game! 😭 I'll just generate you a new board...");
    //       this.grid = this.tiles.assemble();
    //     } else {
    //       this.grid = this.tiles.assemble(this.saveVector);  
    //     }
    //   } else {
    //     this.grid =  this.tiles.assemble();
    //   }
    // });
    this.grid = this.tiles.assemble();
  }

  toggle = (row: number, cell: number) =>
  this.tracker.includes(`${row}-${cell}`) && `${row}-${cell}` !== "2-2" ?
  this.tracker = this.tracker.filter(e => e !== `${row}-${cell}`) :
    this.tracker.push(`${row}-${cell}`);

  awarded = (row: number, cell: number) => this.tracker.includes(`${row}-${cell}`);
}
