import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input() appHighlighter: String;
  @Input() cColor: String;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'black';
   }
ngOnInit() {
  this.el.nativeElement.style.backgroundColor = this.appHighlighter;
  this.el.nativeElement.style.color = this.cColor;
}

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = this.appHighlighter;
    this.el.nativeElement.style.color = '';
  }

}
