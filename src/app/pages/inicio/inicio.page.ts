import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'battery-full-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}
