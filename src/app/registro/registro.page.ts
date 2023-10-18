import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    private animCtrl:AnimationController,
    private router: Router, 
    public fb: FormBuilder, 
    private alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'confirmar_contrasena': new FormControl("", Validators.required)
    })
  }

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

  async registrar() {
    var f = this.formularioLogin.value;
    var usuario = f.usuario
    var contrasena = f.contrasena

    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar los datos',
        buttons: ['Aceptar']
      })
      await alert.present();
      this.formularioLogin.reset();
      return;
    }
    const emailValido = f.usuario.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}/);
    if (f.contrasena.length < 8 && f.contrasena.length > 16) {
      const alert = await this.alertController.create({
        header: 'Contraseña inválida',
        message: 'La contraseña debe contener entre 8 y 16 caracteres',
        buttons: ['Aceptar']
      })
      await alert.present();
      this.formularioLogin.reset();
      return;
    } else if (!emailValido) {
      const alert = await this.alertController.create({
        header: 'Correo inválido',
        message: 'El correo debe contener un @ y un .',
        buttons: ['Aceptar']
      })
      await alert.present();
      this.formularioLogin.reset();
      return;
    } else if (f.contrasena != f.confirmar_contrasena) {
      const alert = await this.alertController.create({
        header: 'Contraseña inválida',
        message: 'Las contraseñas no coinciden',
        buttons: ['Aceptar']
      })
      await alert.present();
      this.formularioLogin.reset();
      return;
    } else {
      localStorage.setItem('nombreUsuario', usuario)
      localStorage.setItem('contrasenaUsuario', contrasena)
      this.formularioLogin.reset();
      this.navCtrl.navigateForward('/login')
    }
  }
}