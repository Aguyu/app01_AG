import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  titulo:string;
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'memememe em ememem emem emem ememe memeemem emem  mem em e',
      message: 'This is an alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertinput() {
    const input = await this.alertController.create({
      header: 'Ingresa el nuevo nombre de la pagina',
      inputs: [
        {
          name: 'txtNombre',
          type:'text',
          placeholder:'Renombrar'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
            this.titulo = 'Pendejo';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            this.handlerMessage = 'Alert confirmed',data;
            console.log('Alert confirmed',data);
            this.titulo = data.txtNombre;
          },
        },
      ],
    });
    await input.present();
  } 

}
