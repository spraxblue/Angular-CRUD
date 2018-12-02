import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { isBoolean } from 'util';



@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef, private templateref: TemplateRef<object>) { }


  ngOnInit() {
  }
  @Input() set appMyNgIf( isBool: boolean ) {
    if ( isBool) {
      this.viewContainerRef.createEmbeddedView(this.templateref);
    } else {
      this.viewContainerRef.clear();
      }

  }
}

