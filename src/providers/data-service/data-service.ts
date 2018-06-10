//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../../models/formation';
import { Matiere } from '../../models/Matiere';
import { ThrowStmt } from '@angular/compiler';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  formations: Formation[] = [
    { id: '1', name: 'Réseau informatique', icon: 'appname-customicon1' },
    { id: '2', name: 'Réseau télécommunication', icon: 'appname-customicon4' },
    { id: '3', name: 'Génie logiciel ', icon: 'appname-customicon2' },
    { id: '4', name: 'Informatique de gestion', icon: 'appname-customicon3' }
  ];
  Matiere: Matiere[] = 
  [
    { idM: '1', libelle: 'Admin Reseaux', idF: '1' },
    { idM: '2', libelle: 'Admin Linux', idF: '1' },
    { idM: '3', libelle: 'Archi', idF: '1' },

    { idM: '4', libelle: 'RT matiere 1', idF: '2' },
    { idM: '5', libelle: 'RT matiere 2', idF: '2' },
    { idM: '6', libelle: 'RT matiere 3', idF: '2' },

    { idM: '7', libelle: 'JAVA', idF: '3' },
    { idM: '8', libelle: 'ASP', idF: '3' },
    
    { idM: '9', libelle: 'Droit', idF: '4' },
    { idM: '10', libelle: 'Compta', idF: '4' },
  ]


  constructor() {
    console.log('Hello DataServiceProvider Provider');
  }

  getAllFormation() {
    return this.formations;
  }

  Recherche(var_formation: string) {
    return this.formations.filter(form => form.name.toLocaleLowerCase().includes(var_formation));
  }

  getMatieresByFormation(idf: string) {
    var mesMatieres = "";
    this.Matiere.forEach(element => {
      if(element.idF==idf)
      {
        mesMatieres+=element.libelle+'\n';
      }
    });
    return mesMatieres;
  }
}
