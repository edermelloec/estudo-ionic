import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Éder Mello Json",
    data: "November 5, 1955",
    descricao: "Estou criandoum app incrivel..",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public lista_filmes = new Array<any>();

  public nomeUsuario: string = "Éder Mello - veio do código";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1+num2) ;
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(5, 10);
    this.movieProvider.getLatesMovies().subscribe(
      data=>{ 
        
        
        const response = (data as any);

        console.log(response.results);
        const objeto_retorno = JSON.parse(JSON.stringify(response.results));
        this.lista_filmes = objeto_retorno;
        
        console.log(objeto_retorno);
      },
      error => { console.log(error);

      }
    )
  }

}
