import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  currentImage: any;
  public photos: any = [];
  constructor(private photoService:PhotoService) {}

  ngOnInit(){
    this.photoService.loadSaved();
  }

  takePicture(){
    this.photoService.takePicture();
  }

}
