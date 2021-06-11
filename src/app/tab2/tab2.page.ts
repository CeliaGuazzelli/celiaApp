import { DadosService } from './../services/dados.service';
import { ISerie } from './../models/ISerie.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

titulo = 'Séries';

listaSeries: ISerie[] = [
  {
    snome: 'Game of Trones',
    slancamento: '2011',
    sduracao: '1h',
    sclass: 86,
    scartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg',
    sgeneros: ['Fantasy', 'Drama', 'Adventure'],
    spagina: '/game-of-trones'
  },
  {
    snome: 'Friends',
    slancamento: '1994',
    sduracao: '25m',
    sclass: 84,
    scartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
    sgeneros: ['Comedy', 'Drama'],
    spagina: '/friends'
  },
  {
    snome: 'O mentalista',
    slancamento: '2008',
    sduracao: '43m',
    sclass: 87,
    scartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1ZcT5tHzUeQ7zgYecOVoWxH9FL.jpg',
    sgeneros: ['Crime', 'Drama', 'Mistery'],
    spagina: '/omentalista'
  },
  {
    snome: 'Sou Luna',
    slancamento: '2016',
    sduracao: '45m',
    sclass: 80,
    scartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9mENBXLVIvGimTnU5rHL39q9ETR.jpg',
    sgeneros: ['Kids', 'Soup'],
    spagina: '/sou-luna'
  },
  {
    snome: 'Lista Negra',
    slancamento: '2013',
    sduracao: '43m',
    sclass: 74,
    scartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ziy2LUOZOA3Ob5hGZAvKXCmvwe9.jpg',
    sgeneros: ['Crime', 'Drama', 'Mistery'],
    spagina: '/lista-negra'
  },
  {
    snome: 'The Flash',
    slancamento: '2014',
    sduracao: '44m',
    sclass: 77,
    scartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
    sgeneros: ['Drama', 'Fantasy'],
    spagina: '/the-flash'
  }
];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

    exibirSerie(serie: ISerie){
      this.dadosService.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada às favoritas.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }
}
