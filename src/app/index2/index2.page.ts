import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.page.html',
  styleUrls: ['./index2.page.scss'],
})
export class Index2Page implements OnInit {

  constructor(private animCtrl:AnimationController) { }

  nombreUsuario = localStorage.getItem('nombreUsuario');

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
