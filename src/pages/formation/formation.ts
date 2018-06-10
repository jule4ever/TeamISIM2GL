import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Formation } from '../../models/formation';
import { AlertController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';

/**
 * Auteur: Elman, Grace
 * contact: elmanmiss@gmail.com
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formation',
  templateUrl: 'formation.html',
})
export class FormationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataServiceProvider,private alertCtrl: AlertController) {
  }

  MesFormation: Formation[];

  ionViewWillLoad() {
    this.MesFormation = this.dataService.getAllFormation();
  }

  searchFormation(event){
    this.MesFormation = this.dataService.Recherche(event.target.value.trim());
  }
  infoFormationModal(item)
  {
    var lesMatieres  = this.dataService.getMatieresByFormation(item.id);
    this.presentConfirm(lesMatieres);
  }
  
  
  
  presentConfirm(msg:string)
  {
    let alert = this.alertCtrl.create({
      title: 'Details',
      message: msg,
      buttons: [
        {
          text: 'Quitter',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Inscription',
          handler: () => {
            this.navCtrl.push(InscriptionPage);
            console.log('Inscription clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
