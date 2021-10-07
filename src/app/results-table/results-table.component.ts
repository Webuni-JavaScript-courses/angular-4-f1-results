import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results: Result[] = [];
  @Input() selectedResultIndex: number | undefined;
  @Output() selectedResultIndexChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selected(index: number) {
    this.selectedResultIndexChange.emit(index);
  }

}
