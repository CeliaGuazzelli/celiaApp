import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos';

  listaVideos: IFilme[] = [
    {
      nome: 'Soul',
      lancamento: '25/12/2020',
      duracao:'1h 40m',
      classificacao:83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2NNebYVf8XAbJzVZTM3razRaZKA.jpg',
      generos: ['Comédia, Música, Fantasia'],
      pagina:'/soul'
    },
    {
      nome: 'Selena: A Série',
      lancamento: '20/10/2020',
      duracao:'40m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j4e3yAAc2sCtK9liKmHNsXVsgoF.jpg',
      generos: ['Drama'],
      pagina:'/selena'
    },
    {
      nome: 'Legados',
      lancamento: '20/10/2018',
      duracao:'43m',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/roFJeeBbcFYCaTfmKaCQ7wtCT5l.jpg',
      generos: ['Drama', 'Fantasia'],
      pagina:'/legados'
    }
  ];

  constructor(public alertController: AlertController,public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
