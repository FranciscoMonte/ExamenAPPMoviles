import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-recup-pass',
  templateUrl: './recup-pass.page.html',
  styleUrls: ['./recup-pass.page.scss'],
})
export class RecupPassPage implements OnInit {

  constructor(private animCtrl:AnimationController) { }

  ngOnInit() {
    var boton = document.getElementById('btn') as HTMLElement;
    
    boton.addEventListener('click', ()=> {
      this.animButton();
    });
  }

  public animButton(){
    var boton = document.getElementById('btn') as HTMLElement;

    this.animCtrl.create()
    .addElement(boton)
    .duration(200)
    .fromTo('scale', 1.10, 1)
    .play()

  }
}
