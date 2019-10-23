import { AbstractControl } from '@angular/forms'

export class Validacoes {
    
    static MaiorQue18Anos(controle:AbstractControl) {
        const nascimento = controle.value,
        [ano, mes, dia] = nascimento.split('-'),
        hoje = new Date(),
        dataNascimento = new Date(ano, mes, dia, 0, 0, 0),
        // milisegundos - segundos - minutos - horas - dias - anos 
        tempoTeste = 1000 * 60 * 60 * 24 * 365 * 18;

        if (hoje.getTime() - dataNascimento.getTime() >= tempoTeste) {
            return null;
        } else {
            return { menorDeIdade: true}
        }
    }

    static SenhasCombinam(controle:AbstractControl) {
        let senha = controle.get('senha').value;
        let confirmarSenha = controle.get('confirmarSenha').value;

        if (senha === confirmarSenha) {
            return null;
        } else {
            controle.get('confirmarSenha').setErrors({senhasNaoCoincidem:true})
        }
    }

}