import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';  /*PARA EL ALERT ACTION SHEET*/

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private alertController: AlertController) {}  /*PARA EL ALERT ACTION SHEET*/
/*constructor(private actionSheetCtrl : ActionSheetController){}*/
 
  ngOnInit() {}
  /* async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',

      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon:'trash',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon:'share-social-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    
  } */
  /*PARA EL ALERT ACTION SHEET*/
   async presentsection() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'memememe em ememem emem emem ememe memeemem emem  mem em e',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  } 
}
