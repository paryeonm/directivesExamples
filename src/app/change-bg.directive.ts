import { Directive, ElementRef , Renderer} from '@angular/core';

@Directive({
  selector: '[change_bg]'
})
export class ChangeBgDirective {

  constructor( private e :ElementRef , private r : Renderer) { 

    r.setElementStyle(e.nativeElement , "backgroundColor" , "yellow");
   
  }
   
}
