import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService, ResponsePayload } from './auth.service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  ngOnInit() {
    this.store.select('auth').subscribe((authState) => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        alert(this.error);
      }
    });
  }
  onSwithcMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<ResponsePayload>;
    this.isLoading = true;
    if (!this.isLoginMode) {
      //authObs = this.authService.singUp(email, password);
      this.store.dispatch(
        new AuthActions.LoginStart({ email: email, password: password })
      );
    } else {
      authObs = this.authService.login(email, password);
    }

    // authObs.subscribe(
    //   (response) => {
    //     this.isLoading = false;
    //     this.router.navigate(['/recipes']);
    //   },
    //   (errorMessage) => {
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );
    form.reset();
  }
}
