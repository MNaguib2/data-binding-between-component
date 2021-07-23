import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,
 OnChanges ,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {  
  @Input('srvElement') element!: {type: string, name: string, content: string};
  @Input('name') name!: string;
  @ViewChild('heading') header!: ElementRef;
  @ContentChild('Paragraph') paragraph!: ElementRef;
  constructor() { 
    console.log('costructor call !');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call !');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit call !');
    console.log('the content is : ' +this.header.nativeElement.textContent);
    console.log('the content Paragraph is : ' +this.paragraph.nativeElement.textContent);
  }
ngDoCheck(){
  console.log('ngDoCheck call !');
}
ngAfterContentInit() {
  console.log('AfterContentInit call !');
  console.log('the content Paragraph is : ' +this.paragraph.nativeElement.textContent);
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked call !');

}
ngAfterViewInit(){
  console.log('ngAfterViewInit call !');
  console.log('the content is : ' + this.header.nativeElement.textContent);
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked call !');
}
ngOnDestroy(){
  console.log('ngOnDestroy call !');
}
}
