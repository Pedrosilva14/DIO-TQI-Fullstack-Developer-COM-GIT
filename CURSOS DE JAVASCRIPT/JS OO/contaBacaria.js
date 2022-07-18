class ContaBacaria {
        constructor(agencia, numero, tipo) {
                 this.agencia = agencia;
                 this.numero = numero;
                 this.tipo = tipo;
                 this._saldo = 0;
        }

        sacar(valor){
            if (valor > this._saldo) {
                return console.log('saque negado; saldo insuficiente');
            }

            this._saldo = this._saldo - valor;
            return this._saldo;
        }

        depositar(valor) {
                this._saldo = this._saldo + valor;
                return this._saldo;
        }

        set saldo(valor) {
                this._saldo = valor;
        }

        get saldo(){
            return this._saldo;
        }


               
}


class ContaCorrente extends ContaBacaria {
         constructor(agencia, numero, cartaoCredito) {
                 super(agencia,numero);
                 this.tipo = 'corrente';
                 this._cartaoCredito - cartaoCredito;
         }

         set cartaoCredito(valor) {
                   this._cartaoCredito = valor;
                        
         }

         get cartaoCredito() {
                   return this._cartaoCredito;

         }
}


class ContaPoupaca extends ContaBacaria {
        constructor(agencia, numero) {
                super(agencia, numero);
                this.tipo = 'poupaça';
                
        }

 }

 class ContaUniversitaria extends ContaBacaria {
        constructor(agencia, numero){
                super(agencia,numero);
                this.tipo = 'universitária';
        }

        sacar(valor) {
                if (valor>500){
                        return 'Operação Negada'
                }

                this._saldo = this._saldo - valor;
                return this._saldo;
        }


 }


 const minhaConta = new ContaCorrente(1,211, true);
 const contaUni = new ContaUniversitaria(2,333);



