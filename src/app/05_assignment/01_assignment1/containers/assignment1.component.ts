import { Component } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
 //feilds
  @ViewChild('inputText') text:ElementRef; 
  value:String;

//method
onKeydown(event:any):void{
  this.value = this.text.nativeElement.value;
}

}
