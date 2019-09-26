import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  parent: { id: number };
  ngOnInit() {
    this.parent = {
      // tslint:disable-next-line: no-string-literal
      id: this.route.snapshot.params['id'],
    };
  }
}
