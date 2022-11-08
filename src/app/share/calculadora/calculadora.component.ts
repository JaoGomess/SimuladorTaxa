import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lista, MaquinasTaxas, Marcas } from 'src/app/interfaces/listas';



@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public ListaMarcas: MaquinasTaxas[] = [
    { id: 1,
      marca: "PagSeguro",
      debit: [{vista: 1.99, obsVista: "Após um ano a taxa passará a ser de 2.39%"}],
      creditTime: [{vista: 4.99, parcelado: 5.59}],
      after14: [{vista: 4.99, parcelado: 5.59}],
      after30: [{vista: 4.99, parcelado: 5.59}]
    },
    { id: 2,
      marca: "Cielo",
      alguel: true, 
      valorPorParcela: 2.99,
      aluguelOptions: [{vista: 1.99, creditoVista: 4.49, creditoParcelado: 4.49}],
      debit: [{vista: 2.39}],
      creditTime: [{vista: 4.99, parcelado: 5.59}],
      after14: [{vista: 0.0, parcelado: 0.0}],
      after30: [{vista: 0.0, parcelado: 0.0}]
    },
    { id: 3,
      marca: "MercadoPago",
      debit: [{vista: 1.99}],
      creditTime: [{vista: 4.74}],
      after14: [{vista: 3.79}],
      after30: [{vista: 3.03}]
    },
  ];

  public listaMarcas: Marcas[] = [
    {id: 1,
      taxaDebito: 2.39, 
      taxaCreditoAvista: 4.99, 
      taxaCreditoParcelado: 5.59, 
      viewValue: 'Cielo', 
        aluguel: true , aluguelOptions: [
        {taxaDebito: 1.99, taxaCreditoAvista: 4.49, taxaCreditoParcelado: 4.49}
      ]
    },
    {id: 2,
      taxaDebito: 1, 
      taxaCreditoAvista: 1, 
      taxaCreditoParcelado: 1, 
      viewValue: 'Mercado Pago', 
      qrCode: true , qrCodeOptions: [
        {taxaDebito: 1, taxaCreditoAvista: 1, taxaCreditoParcelado: 1}
      ],
      link: true , linkOptions: [
        {taxaDebito: 1, taxaCreditoAvista: 1, taxaCreditoParcelado: 1}
      ],
    },
    {id: 3,
      taxaDebito: 1, 
      taxaCreditoAvista: 1, 
      taxaCreditoParcelado: 1, 
      viewValue: 'PagSeguro'
    }
  ];

  public listaOpc: lista[] = [
    {id: 1, value: 0, viewValue: 'Débito'},
    {id: 2, value: 1, viewValue: 'Crédito a vista'},
    {id: 3, value: 2, viewValue: '2 Parcelas'},
    {id: 4, value: 3, viewValue: '3 Parcelas'},
    {id: 5, value: 4, viewValue: '4 Parcelas'},
    {id: 6, value: 5, viewValue: '5 Parcelas'},
    {id: 7, value: 6, viewValue: '6 Parcelas'},
    {id: 8, value: 7, viewValue: '7 Parcelas'},
    {id: 9, value: 8, viewValue: '8 Parcelas'},
    {id: 10, value: 9, viewValue: '9 Parcelas'},
    {id: 11, value: 10, viewValue: '10 Parcelas'},
    {id: 12, value: 11, viewValue: '11 Parcelas'},
    {id: 13, value: 12, viewValue: '12 Parcelas'},
    {id: 14, value: 13, viewValue: '13 Parcelas'},
    {id: 15, value: 14, viewValue: '14 Parcelas'},
    {id: 16, value: 15, viewValue: '15 Parcelas'},
    {id: 17, value: 16, viewValue: '16 Parcelas'},
    {id: 18, value: 17, viewValue: '17 Parcelas'},
    {id: 19, value: 18, viewValue: '18 Parcelas'}
  ];

  public estado: Boolean = true;
  public selectedMarca: String;
  public selectedOption: String;
  public options: Object;
  public selectedQuantia: Number;
  public money: String;


  isSubmitted = false;
  constructor() {

  }


  ngOnInit(): void {
  }


  getOption(selectedOption) { return this.options = this.listaOpc[selectedOption - 1]; }

  getMarca(selectedMarca) {
    if (this.listaMarcas[selectedMarca - 1].aluguel) {
      this.estado = false;
    } else {
      this.estado = true;
    }
  }

  getDinheiro(selectedQuantia) {
    if (selectedQuantia.target.value > 0 && selectedQuantia.target.value !== "") {
      this.calc();
    }
  }

  async calc() {
    if (this.options === undefined) {
      return alert('selecione um');
    }
      console.log('this.options', this.options);
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
      return alert(JSON.stringify(form.value))
    }
  }

  templateForm(value: any) {
    alert(JSON.stringify(value));
  }


}
