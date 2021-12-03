import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'derectives';

  public infoArr: any[] = [
    {
      name: 'iphone',
      model: 'x',
      img: '../assets/4142.jpg',
      display: false,
      additionalText: 'iphone'
    },
    {
      name: 'samsung',
      model: 'a10',
      img: '../assets/samsung.jfif',
      display: false,
      additionalText: 'samsung'
    },
    {
      name: 'tesla',
      model: 's',
      img: '../assets/telsa.jfif',
      display: false,
      additionalText: 'black electro-car'
    },
    {
      name: 'apple',
      model: 'x',
      img: '../assets/apple.jfif',
      display: false,
      additionalText: 'just apple. very sweet'
    },
    {
      name: 'electro guitar',
      model: 'yamaha Pacifica12',
      img: '../assets/electroGuitar.jfif',
      display: false,
      additionalText: 'cool black heavy Metal!!!'
    },
    {
      name: 'acoustic guitar',
      model: 'yamaha standard series',
      img: '../assets/guitar.jfif',
      display: false,
      additionalText: 'fur elise.......'
    },
    {
      name: 'piano',
      model: 'piano',
      img: '../assets/piano.jfif',
      display: false,
      additionalText: 'black'
    },
    {
      name: 'air',
      model: 'from kazahstan',
      img: '../assets/air.png',
      display: false,
      additionalText: 'air from astana'
    },
    {
      name: 'banana',
      model: 'x',
      img: '../assets/banna.jfif',
      display: false,
      additionalText: 'banana of Elon mask model x'
    },
    {
      name: 'Tony',
      model: 'Soprano',
      img: '../assets/Tony.jfif',
      display: false,
      additionalText: 'just a Tony Soprano'
    }
  ];
}
