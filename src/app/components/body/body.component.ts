
import { Component } from '@angular/core';


@Component ({ 
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{ 

  mostrar = true;

  frase: any = {
    mensaje: 'El mejor futbolista es Leonel Messi',
    autor: 'Futbol'
  };
  personajes: string[] = ['Leo Messi', 'Poul Pogba', ' Marcos Reus']
  i = 1; 
}