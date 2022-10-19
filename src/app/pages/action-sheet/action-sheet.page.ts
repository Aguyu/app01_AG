import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: string;
  titulo:string;
  
  constructor(private actionSheetCtrl : ActionSheetController){}
  
 
  ngOnInit() {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Aqui van los archvos',
      subHeader: 'Escoge sabiamente',
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
    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2); 
  } 

  
}
