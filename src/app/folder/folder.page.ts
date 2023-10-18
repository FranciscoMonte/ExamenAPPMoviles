import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  nombreUsuario = localStorage.getItem('nombreUsuario');
  showContent: boolean = false;
  lectura: string | undefined;

  constructor(private httpClient : HttpClient) {}



  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async startScan() {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    this.toggleVisibility();
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.lectura = result.content;
    }
    this.toggleVisibility(); 
  }

  toggleVisibility() {
    this.showContent  = !this.showContent ;
  }

  async vibrar() {
    try {
      await Haptics.vibrate();
    } catch (error) {
      console.error('Error al vibrar el dispositivo: ', error);
    }
  }

}