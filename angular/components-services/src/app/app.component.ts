import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-services';

  imgParent='';
  onLoad(event:string){
    console.log("soy el padre",event);
  }
}
