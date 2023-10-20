import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  vip: boolean = false;
  news = [
    {
      id: 1,
      type: "noticias",
      title: "La Frontier de Starfield cobra vida de la mano de Tested",
      imgUrl: "https://images.ctfassets.net/rporu91m20dc/3Rr89T0dlhiLSSTAmAcTL1/30d6954b1b428be02ff54a39721afda0/Starfield_LargeHero_TestedFrontierModel.png?h=695&w=770&fit=fill&fm=webp",
      boolLogo: true
    },
    {
      id: 2,
      type: "noticias",
      title: "Actualización de Starfield 1.7.32 – 25 de septiembre de 2023 ",
      imgUrl: "https://images.ctfassets.net/rporu91m20dc/4y2nJn5kvb0Nc2nQpXqxQM/0a31095176c17c8156db385920048679/Starfield_StarfieldMedDash_Sept25Update.png?h=695&w=770&fit=fill&fm=webp",
      boolLogo: false
    },
    {
      id: 3,
      type: "xbox wire",
      title: "Starfield Starters: 10 Things to Know as You Begin Your Journey",
      imgUrl: "https://images.ctfassets.net/rporu91m20dc/4B6ezHsrzDL8TMLSNNfvvJ/4013dca0b674f0a3b3db600d793a2e7a/StarfieldStarters10Things_StarfieldCard.png?h=695&w=770&fit=fill&fm=webp",
      boolLogo: true
    },
    {
      id: 4,
      type: "xbox wire",
      title: "Starfield Starters: Customizing Your Perfect Captain",
      imgUrl: "https://images.ctfassets.net/rporu91m20dc/70DVgNWgj5VkrcANEtUJ41/6f26bad5b4a4080e940a5f0faa2ae8fd/wp-starfield-image.jpg?h=695&w=770&fit=fill&fm=webp",
      boolLogo: true
    },
    {
      id: 5,
      type: "xbox wire",
      title: "Starfield Starters: An Explorer's Guide to Planet Hopping",
      imgUrl: "https://images.ctfassets.net/rporu91m20dc/l3LhjtMiajRiCkWLHiFgv/bbebcbe6f446794d3723ed322f47f4a3/StarfieldStartersPlanetHopping_Starfield-Card.png?h=695&w=770&fit=fill&fm=webp",
      boolLogo: true
    },
    {
      id: 6,
      type: "noticias",
      title: "Estreno del tráiler de acción real de Starfield",
      imgUrl: "https://images.ctfassets.net/rporu91m20dc/3P9pV9OrAtphMW8AmR6TsY/d9ef977dcabc1c1576b392c804b4640a/Starfield_LargeHero_LiveActionTrailer.png?h=695&w=770&fit=fill&fm=webp",
      boolLogo: true
    }
  ]

  hoverCard: boolean = false;
  fontLarge: boolean = false;

  verDatoImg(refImg : any){
    console.log(refImg);
  }

}
