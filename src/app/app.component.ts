import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validacoes } from './validacoes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nonaAula';
  formularioDeUsuario:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formularioDeUsuario = this.fb.group({
      nome:[
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ],
      email:[
        '',
        Validators.email
      ],
      cpf:[''],
      nascimento:[
        '',
        Validators.compose([
          Validators.required,
          Validacoes.MaiorQue18Anos
        ])
      ],
      senha:[
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(6)
        ])
      ],
      confirmarSenha:[
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    }, {
      validators: Validacoes.SenhasCombinam
    })
  }

  enviaDados() {
    const dadosFormulario = this.formularioDeUsuario.value;
    alert(JSON.stringify(dadosFormulario));
  }

  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

  get nascimento() {
    return this.formularioDeUsuario.get('nascimento');
  }

  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }
}
