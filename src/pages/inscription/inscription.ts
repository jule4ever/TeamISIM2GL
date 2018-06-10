import { Component,OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/Authentification/auth.service';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage  implements OnInit {
  @ViewChild('firstname') firstname;
  @ViewChild('lastname')  lastname;
  @ViewChild('level') level;
  @ViewChild('bachelor')  bachelor;
  @ViewChild('master') master;

  signupForm: FormGroup;
  errorMessage: string;
    constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,
              private authService: AuthService,
              ) { }
  /*

  inscriptionEtu() {
    console.log(this.firstname.value);
    console.log(this.lastname.value);
    console.log(this.level.value);
    console.log(this.bachelor.value);
    console.log(this.master.value)
    this.navCtrl.push(MenuPage, {firstName: this.firstname.value,lastName: this.lastname.value});

  }*/
    ngOnInit() {
    this.initForm();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }
  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    
    this.authService.createNewUser(email, password).then(
      () => {
       //redirection route
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}

