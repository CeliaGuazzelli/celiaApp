import { IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IListaFilmes } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

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
    },
    {
      nome: 'Monster Hunter',
      lancamento: '25/02/2021',
      duracao:'1h 43m',
      classificacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Am1ipOQiOMrH55tCCT2ObNiF1rW.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia'],
      pagina:'/monster-hunter'
    },
    {
      nome: 'Eu Acredito',
      lancamento: '07/11/2017',
      duracao:'1h 29m',
      classificacao: 68,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xtqkht2u7SkrZPd6zyMRymE4nt.jpg',
      generos: ['Família'],
      pagina:'/eu-acredito'
    }
  ];

  listaFilmes: IListaFilmes;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public route: Router) { }

    buscarFilmes(evento: any) {
      console.log(evento.target.value);
      const busca = evento.target.value;
      if (busca && busca.trim() !== '') {
        this.filmeService.buscarFilmes(busca).subscribe(dados => {
          console.log(dados);
          this.listaFilmes = dados;
        });
      }
    }

    exibirFilme(filme: IFilmeApi) {
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

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
