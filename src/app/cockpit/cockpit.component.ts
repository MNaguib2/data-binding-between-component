import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ServerName: string, ServerContent:string}>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{ServerName: string, ServerContent:string}>();
  // newServerName = ''; // this is use when use way number one when use ngModul
  // newServerContent = '';
  // newServerName = ''; // this is use when use way number one when use ngModul
  // newServerContent = '';
  @ViewChild('ServerContentInput') ServerContentInput: any;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(ServerNameInput : HTMLInputElement) {
    this.serverCreated.emit({
      ServerName: ServerNameInput.value,
      ServerContent: this.ServerContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(ServerContentInput : HTMLInputElement, ServerNameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
      ServerName: ServerNameInput.value,
      ServerContent: ServerContentInput.value
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
