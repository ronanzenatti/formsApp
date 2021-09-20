import { CpfValidator } from './../validators/cpf-validator';
import { Component } from '@angular/core';

//Importação para utilizar formulários do Angular
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparaValidator } from '../validators/compara-validator';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é Obrigatório!' },
      { tipo: 'minlength', mensagem: 'O Nome precisa ter pelo menos 3 caracteres!' }
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    dataNascimento: [
      { tipo: 'required', mensagem: 'O campo Data de Nascimento é obrigatório.' }
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' }
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' }
    ]
  };

  constructor(public formBuilder: FormBuilder) {
    // Montar a estrutura do Formulário
    this.formCadastro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      dataNascimento: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
    }, {
      validator: comparaValidator('senha', 'confirmaSenha')
    });
  }

  salvarCadastro() {
    console.log('Situação: ', this.formCadastro.valid);
  }

}
