import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  titleDescription:string = 'ACERCA DE STARFIELD'
  contentDescription = 'Starfield es el primer universo nuevo en más de 25 años que crea Bethesda Game Studios, los galardonados creadores de The Elder Scrolls V: Skyrim y Fallout 4. En este juego de rol de próxima generación ambientado entre las estrellas, podrás crear el personaje que desees y explorar con una libertad sin precedentes mientras te embarcas en un viaje épico para desentrañar el mayor misterio de la humanidad.'
  imgDescription = 'https://images.ctfassets.net/rporu91m20dc/2iFo7i2a0BUMieawmhz843/cbb1686074096f35993d54a7e0b52321/bethesda-game-studios-logo.png'

}
