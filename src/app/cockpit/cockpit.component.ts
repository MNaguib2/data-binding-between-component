import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ServerName: string, ServerContent:string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{ServerName: string, ServerContent:string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({
      ServerName: this.newServerName,
      ServerContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      ServerName: this.newServerName,
      ServerContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
