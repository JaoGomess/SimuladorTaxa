import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { lista, MaquinasTaxas } from 'src/app/interfaces/listas';



@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public listaTaxa: MaquinasTaxas[] = [
    {
      id: 1,
      marca: "PagSeguro",
      debit: [{ vista: 1.99, obsVista: "Após um ano a taxa passará a ser de 2.39%" }],
      creditTime: [{ vista: 4.99, parcelado: 5.59 }],
      after14: [{ vista: 4.99, parcelado: 5.59 }],
      after30: [{ vista: 4.99, parcelado: 5.59 }]
    },
    {
      id: 2,
      marca: "Cielo",
      aluguel: true,
      valorPorParcela: 0.029,
      aluguelOptions: [{ vista: 1.99, creditoVista: 4.49, creditoParcelado: 4.49 }],
      debit: [{ vista: 2.39 }],
      creditTime: [{ vista: 4.99, parcelado: 5.59 }],
      after14: [{ vista: 0.0, parcelado: 0.0 }],
      after30: [{ vista: 0.0, parcelado: 0.0 }]
    },
    {
      id: 3,
      marca: "MercadoPago",
      debit: [{ vista: 1.99 }],
      creditTime: [{ vista: 4.74 }],
      after14: [{ vista: 3.79 }],
      after30: [{ vista: 3.03 }]
    },
  ];

  public listaOpc: lista[] = [
    { id: 1, value: 99, viewValue: 'Débito', functionName: 'debito' },
    { id: 2, value: 100, viewValue: 'Crédito a vista' },
    { id: 3, value: 2, viewValue: '2 Parcelas' },
    { id: 4, value: 3, viewValue: '3 Parcelas' },
    { id: 5, value: 4, viewValue: '4 Parcelas' },
    { id: 6, value: 5, viewValue: '5 Parcelas' },
    { id: 7, value: 6, viewValue: '6 Parcelas' },
    { id: 8, value: 7, viewValue: '7 Parcelas' },
    { id: 9, value: 8, viewValue: '8 Parcelas' },
    { id: 10, value: 9, viewValue: '9 Parcelas' },
    { id: 11, value: 10, viewValue: '10 Parcelas' },
    { id: 12, value: 11, viewValue: '11 Parcelas' },
    { id: 13, value: 12, viewValue: '12 Parcelas' },
    { id: 14, value: 13, viewValue: '13 Parcelas' },
    { id: 15, value: 14, viewValue: '14 Parcelas' },
    { id: 16, value: 15, viewValue: '15 Parcelas' },
    { id: 17, value: 16, viewValue: '16 Parcelas' },
    { id: 18, value: 17, viewValue: '17 Parcelas' },
    { id: 19, value: 18, viewValue: '18 Parcelas' }
  ];

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor selecionado do input numa public, mostrando tudo do objeto da lista de opções;
   * @type Object;
  */

  public optionObject: Object;

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor selecionado do input numa public, mostrando apenas o ID da opção;
   * @type Number;
  */

  public optionID: Number;

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor selecionado do input numa public, mostrando apenas o nome visual;
   * @type String;
  */

  public optionView: string;

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor selecionado do input numa public, mostrando apenas o nome visual;
   * @type String;
  */

  public marcaView: string;

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor selecionado do input numa public, mostrando tudo do objeto da lista de opções;
   * @type Object;
  */

  public marcaLista: Object;

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor inserido do input
   * @type Number;
  */

  public valor: Number;

  /**
   * @author João Gomes
   * @description Usa-se para atribuir o valor selecionado do input numa public, mostrando apenas o nome visual;
   * @name value;
   * @type any;
  */

  public value: any;

  // Usado para afins de teste de mostrar o resultado na tela
  public mostrar: Number;

  /**
   * @author João Gomes
   * @description Um array de objetos, utilizado para a geração dos tipos dos inputs no html
   * @type Array<Object>;
  */

  public options = [
    {value: 1, id:"Vendas com maquininha", estado: false},
    {value: 2, id:"Aluguel", estado: true},
  ]

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void { }

  /**
   * @author João Gomes
   * @method getOption()
   * @description Metodo usado para pegar a opção de forma de pagamento escolhida;
   * @returns this.objectOptions<Object> , this.quantParcelas<Number>;
  */

  getOption(optionValue) {
    return this.optionObject = this.listaOpc[optionValue - 1], this.optionID = this.listaOpc[optionValue - 1].value;
  }

  /**
   * @author João Gomes
   * @method getValor()
   * @description Metodo usado para pegar o valor inputado do campo de input de valores;
   * @returns this.valor<Number>;
  */

  getValor(getValue) {
    if (getValue.target.value > 0 && getValue.target.value !== "") return this.valor = getValue.target.value;
  }

  /**
   * @author João Gomes
   * @method updateInputs()
   * @description Metodo usado para verificar se a marca seleciona, tem a opção de alguel. Caso tenha
   * Ativa-se o input de "aluguel" para ser marcado;
  */

  updateInputs(getMarca) {
    this.marcaLista = this.listaTaxa[getMarca - 1];
    if (this.listaTaxa[getMarca - 1].aluguel) {
      this.options = [
        {value: 1, id:"Vendas com maquininha", estado: false},
        {value: 2, id:"Aluguel", estado: false},
      ]
    } else {
      this.options = [
        {value: 1, id:"Vendas com maquininha", estado: false},
        {value: 2, id:"Aluguel", estado: true},
      ]
    }
  }

  /**
   * @author João Gomes
   * @method calcularTaxa()
   * @description Metodo usado para efetuar o calculo das taxas e mostrar ao usuário;
   * @returns ;
  */

  calcularTaxa() {
    if (!this.value) return alert('Selecione algumas das opções de seleção');
    if (!this.marcaLista) return alert('Selecione alguma marca');
    if (!this.optionObject) return alert('Selecione alguma forma de pagamento');
    if (!this.valor) return alert('Insira algum valor');

    // this.value = 2 "Input de Aluguel"
    if (this.value == 2) {
      
      this.calcular(this.optionID, this.valor, this.marcaLista['aluguelOptions'][0], this.marcaLista['valorPorParcela']);
    } else {

    }
    if (this.marcaLista['aluguel']) {
      console.log(this.value)
      
      // this.calcular(this.optionID, this.);
      // this.calcular(this.quantParcelas, this.listaTaxa[1].valorPorParcela, this.selectedQuantia);
      // console.log(this.objectOptions);
      // console.log(this.quantParcelas);
      // console.log(this.listaMarca['credialuguelOptionstTime'][0].vista);
      // console.log(this.listaMarca['credialuguelOptionstTime'][0].creditoVista);
      // console.log(this.listaMarca['credialuguelOptionstTime'][0].creditoParcelado);
      
    /* Option Alugado */
    // this.listaMarca['aluguel'] /* Verifica se tem a opc de aluguel */
    // this.listaMarca['credialuguelOptionstTime'][0].vista /* Pegando a taxa do valor em debito*/
    // this.listaMarca['credialuguelOptionstTime'][0].creditoVista /* Pegando a taxa do valor em credito na hora a vista*/
    // this.listaMarca['credialuguelOptionstTime'][0].creditoParcelado /* Pegando a taxa do valor em credito na hora parcelado*/
    } else {

    }


    
    // this.listaMarca['debit'][0].vista /* Pegando a taxa do valor em debito */
    //this.listaMarca['debit'][0].obsVista /* Pegando a obs do valor em debito, caso tenha */
    
    //this.listaMarca['creditTime'][0].vista /* Pegando a taxa do valor em credito na hora a vista*/
    //this.listaMarca['creditTime'][0].parcelado /* Pegando a taxa do valor em credito na hora parcelado*/

    //this.listaMarca['valorPorParcela'] /* Valor por parcela da Cielo*/

  }
  

  calcular(type, money, parcela: Object, porParcela?: Number) {
    switch(type) {
      case 99:
        return this.mostrar = money * parcela['vista'];
      case 100:
        return this.mostrar = money * parcela['creditoVista'];
      case 2:
        return this.mostrar = money * parcela['creditoParcelado'];
      case 3:
        if (porParcela > 0) return this.mostrar = money * (parcela['creditoParcelado'] + porParcela);
        else return this.mostrar = money * parcela['creditoParcelado'];
    }
  }
}
