import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tiles } from '../tiles';

@Component({
  selector: 'app-board',
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  grid: string[][] = [];
  tracker: string[] = ["2-2"];

  constructor(private tiles: Tiles) {}

  ngOnInit(): void {
    this.grid = this.tiles.assemble();
  }

  toggle = (row: number, cell: number): void => {
    const key = `${row}-${cell}`;
    if (this.tracker.includes(key) && key !== "2-2") {
      this.tracker = this.tracker.filter(e => e !== key);
    } else {
      this.tracker.push(key);
    }
  };

  awarded = (row: number, cell: number): boolean => 
    this.tracker.includes(`${row}-${cell}`);
}
