import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, AnimationController, NavController } from '@ionic/angular';
import { ConvertidorService } from '../convertidor.service';
import { HttpClient } from '@angular/common/http';
import { Haptics } from '@capacitor/haptics';

const API_KEY = '3e1e4098755dcee08f543e0a360da8c1';
const API_URL = 'https://api.openweathermap.org/data/2.5';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  indicatorData: any;
  DOLAR_VALUE: Number;
  formularioLogin: FormGroup;
  weatherTemp: any;

  constructor(
    public httpClient:HttpClient,
    private animCtrl:AnimationController,
    private alertController: AlertController,
    private convertidor: ConvertidorService,
    private router: Router,
    public fb: FormBuilder,
    public navCtrl: NavController) {
      this.DOLAR_VALUE = 0;
      this.formularioLogin = this.fb.group({
        'usuario': new FormControl("", Validators.required),
        'contrasena': new FormControl("", Validators.required)
        }),
      this.loadData()
     }

  ngOnInit() {
    this.convertidor.getIndicador('dolar').subscribe(data => {
      this.indicatorData = data;
      this.DOLAR_VALUE = this.indicatorData.serie[0].valor;
    });

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

  async ingresar() {
    var f = this.formularioLogin.value;
    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    } else if (nombreUsuario == f.usuario && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado','true'),
      this.navCtrl.navigateForward('/folder/folder');
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos Incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }

  loadData(){
    interface WeatherResponse {
      main: {
        temp: number;
      };
    }
    this.httpClient.get(`${API_URL}/weather?lat=${-33.68909}&lon=${-71.21528}&appid=${API_KEY}`).subscribe(results => {
      console.log(results)
      const weatherResponse = results as WeatherResponse;
      this.weatherTemp = weatherResponse.main.temp;
    });
  }
}
