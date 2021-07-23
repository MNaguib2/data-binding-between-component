import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'Just a test'}] as any;

  title = 'data-binding-between-component';

  onServerAdd(serverData: {ServerName: string, ServerContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.ServerName,
      content: serverData.ServerContent
    });
  }

  onBlueprintAdd(bluprintData: {ServerName: string, ServerContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluprintData.ServerName,
      content: bluprintData.ServerContent
    });
  }
 
}
