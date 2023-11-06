import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img:string="";
  @Output() loaded = new EventEmitter<string>();
  onError(){
    console.log("mala cargar");
    this.img = "./assets/ric.png";
  }

  onLoad(){
    console.log("hijo");
    this.loaded.emit(this.img);
  }
}
