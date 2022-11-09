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
      valorPorParcela: 2.99,
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
    { id: 1, value: 99, viewValue: 'Débito' },
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

  public estados: boolean;

  public objectOptions: Object;
  public quantParcelas: Number;

  public viewMarca: string;
  public listaMarca: Object;
  public selectedOption: string;
  public selectedQuantia: Number;


  public listaMarcaDebito: any;

  public radioMaquina: string;
  public radioAlugado: String
  public value: number;

  public options = [
    {value: 1, id:"Vendas com maquininha", estado: false},
    {value: 2, id:"Aluguel", estado: true},
  ]

  constructor(public route: ActivatedRoute) {

  }


  ngOnInit(): void { 
    this.estados = true;
    this.radioAlugado = "";
    this.radioMaquina = "";
    this.radioMaquina =  this.route.snapshot.params['radioMaquina'];
  }

  getOption(selectedOption) {
    return this.objectOptions = this.listaOpc[selectedOption - 1], this.quantParcelas = this.listaOpc[selectedOption - 1].value;
  }

  getMarca(selectedMarca) {
    this.listaMarca = this.listaTaxa[selectedMarca - 1];
    if (this.listaTaxa[selectedMarca - 1].aluguel) {
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




  calcularTaxa() {
    
    // console.log('this.value', this.options[this.value - 1]);
    // console.log(this.radioMaquina);

    /* Quando tem o ngModel, ele ignora o checked e n fica inputado */

    /* Como colocar outro ngmodel aonde tem um [disable] para ativar e ativar o botao, sendo q n deixa */
    
    // this.listaMarca['debit'][0].vista /* Pegando a taxa do valor em debito */
    //this.listaMarca['debit'][0].obsVista /* Pegando a obs do valor em debito, caso tenha */
    
    //this.listaMarca['creditTime'][0].vista /* Pegando a taxa do valor em credito na hora a vista*/
    //this.listaMarca['creditTime'][0].parcelado /* Pegando a taxa do valor em credito na hora parcelado*/

    //this.listaMarca['valorPorParcela'] /* Valor por parcela da Cielo*/

    /* Option Alugado */
   // this.listaMarca['aluguel'] /* Verifica se tem a opc de aluguel */
    //this.listaMarca['credialuguelOptionstTime'][0].vista /* Pegando a taxa do valor em debito*/
    //this.listaMarca['credialuguelOptionstTime'][0].creditoVista /* Pegando a taxa do valor em credito na hora a vista*/
    //this.listaMarca['credialuguelOptionstTime'][0].creditoParcelado /* Pegando a taxa do valor em credito na hora parcelado*/

  }

  getDinheiro(selectedQuantia) {
    if (selectedQuantia.target.value > 0 && selectedQuantia.target.value !== "") {
    }
  }
}
