import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lista, listaPagamentos, listaTaxaDias, MaquinasTaxas } from 'src/app/interfaces/listas';

@Component({ selector: 'app-calculadora', templateUrl: './calculadora.component.html',
styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {



  public listaTaxa: MaquinasTaxas[] = [
    {
      id: 1,
      marca: "PagSeguro",
      infoGeral: [
        { vista: 0.019, obsVista: "Após um ano a taxa passará a ser de 2.39%", creditoVista: 0.049, creditoParcelado: 0.059 }
      ],
      after14: [{ vista: 4.99, parcelado: 5.59 }],
      after30: [{ vista: 4.99, parcelado: 5.59 }]
    },
    {
      id: 2,
      marca: "Cielo",
      aluguel: true,
      valorPorParcela: 0.029,
      aluguelOptions: [{ vista: 0.019, creditoVista: 0.049, creditoParcelado: 0.049 }],
      infoGeral: [
        { vista: 0.023, creditoVista: 0.049, creditoParcelado: 0.059 }
      ],
      after14: [{ vista: 0.0, parcelado: 0.0 }],
      after30: [{ vista: 0.0, parcelado: 0.0 }]
    },
    {
      id: 3,
      marca: "MercadoPago",
      infoGeral: [
        { vista: 0.019, creditoVista: 0.0474}
      ],
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

  /**
   * @author João Gomes
   * @description 
   * @type String;
  */

  public viewPagamento: String;
  public viewMarca: any;
  public viewDias: any;
  public aVista: Number;
  public Parcelado: Number;
  public Obs: String;

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
  public desconto: Number;

  /**
   * @author João Gomes
   * @description Um array de objetos, utilizado para a geração dos tipos dos inputs no html
   * @type Array<Object>;
  */

  public options = [
    {value: 1, id:"Vendas com Maquininha", estado: false},
    {value: 2, id:"Maquininha Alugavel⠀⠀⠀", estado: true},
  ]

  public estado: boolean;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.estado = false;
  }


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
        {value: 1, id:"Vendas com Maquininha", estado: false},
        {value: 2, id:"Maquininha Alugavel⠀⠀⠀", estado: false},
      ]
    } else {
      this.options = [
        {value: 1, id:"Vendas com Maquininha", estado: false},
        {value: 2, id:"Maquininha Alugavel⠀⠀⠀", estado: true},
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
    } else if (this.marcaLista == this.listaTaxa[2]) {
      // Marca: Mercado Pago
      this.calcularMercadoPago(this.optionID, this.valor, this.marcaLista['infoGeral'][0]);

    } else {
      // Marcas: Cielo ou PagSeguro
      this.calcular(this.optionID, this.valor, this.marcaLista['infoGeral'][0])
    }
  }


  calcularMercadoPago(type, money, parcela?: Object) {
    var subtrair;
    switch(type) {
      case 99:
        subtrair = money * parcela['vista']
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 100:
        subtrair = money * parcela['creditoVista'];
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 2:
        subtrair = money * 0.0459;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 3:
        subtrair = money * 0.0597;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 4:
        subtrair = money * 0.0733;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 5:
        subtrair = money * 0.0866;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 6:
        subtrair = money * 0.0996;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 7:
        subtrair = money * 0.1124;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 8:
        subtrair = money * 0.1250;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 9:
        subtrair = money * 0.1373;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 10:
        subtrair = money * 0.1493;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 11:
        subtrair = money * 0.1612;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 12:
        subtrair = money * 0.1728;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      default:
        subtrair = money * 0.1728;
        return this.mostrar = money - subtrair, this.desconto = subtrair;
    }
  }
  

  calcular(type, money, parcela: Object, porParcela?: number) {
    var subtrair;
    switch(type) {
      case 99:
        subtrair = money * parcela['vista']
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 100:
        subtrair = money * parcela['creditoVista'];
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      case 2:
        subtrair = money * parcela['creditoParcelado'];
        return this.mostrar = money - subtrair, this.desconto = subtrair;
      default:
        if (porParcela > 0) {
          subtrair = money * (parcela['creditoParcelado'] + (porParcela)*type);
          return this.mostrar = money - subtrair, this.desconto = subtrair;
        } else {
          subtrair =  money * parcela['creditoParcelado'];
          return this.mostrar = money - subtrair, this.desconto = subtrair;
        }
    }
  }

  /* Confira as taxas de cada empresa */

  public listaT: MaquinasTaxas[] = [
    {
      id: 1,
      marca: "PagSeguro",
      infoGeral: [
        { vista: 1.99, obsVista: "Após um ano a taxa passará a ser de 2.39%", creditoVista: 4.48, creditoParcelado: 5.59 }
      ],
      after14: [{ vista: 4.99, parcelado: 5.59 }],
      after30: [{ vista: 4.99, parcelado: 5.59 }]
    },
    {
      id: 2,
      marca: "Cielo",
      aluguel: true,
      valorPorParcela: 0.029,
      aluguelOptions: [{ vista: 0.019, creditoVista: 0.049, creditoParcelado: 0.049 }],
      infoGeral: [
        { vista: 2.39, creditoVista: 5.59, creditoParcelado: 5.59 }
      ],
      after14: [{ vista: 0.0, parcelado: 0.0 }],
      after30: [{ vista: 0.0, parcelado: 0.0 }]
    },
    {
      id: 3,
      marca: "MercadoPago",
      infoGeral: [
        { vista: 1.99, creditoVista: 4.74}
      ],
      after14: [{ vista: 3.79 }],
      after30: [{ vista: 3.03 }]
    },
  ];

  getMarca(get) {
    if (get -1 == 1) 
      this.ultimoDias = true;
    else 
      this.ultimoDias = false;
  }

  public formaPag: Object;

  getFormaPagamento(opc) {
    this.formaPag = this.meiosPagamento[opc - 1];
  }

  getOptions(optionValue) {
    return this.optionObject = this.listaOpc[optionValue - 1], this.optionID = this.listaOpc[optionValue - 1].value;
  }

  public meiosPagamento: listaPagamentos[] = [
    {id: 1, viewValue: 'Débito', estado: false},
    {id: 2, viewValue: 'Credito', estado: false}
  ];

  public listaDias: listaTaxaDias[] = [
    {id: 4, viewValue: 'Cair na Hora:'},
    {id: 5, viewValue: 'Após 14 dias:'},
    {id: 6, viewValue: 'Após 30 dias:'},
  ];

  public ultimoDias: boolean = false;

  verificarTaxas() {
    if (!this.viewMarca) return alert("Selecione alguma marca");
    if (!this.formaPag) return alert("Selecione alguma forma de pagamento");
    if (!this.viewDias) return alert("Selecione alguma opção das taxas");
    
    switch(this.viewDias) {
      case 3: /* na hora */
        if (this.listaT[this.viewMarca - 1].infoGeral[0].obsVista !== undefined) {
          if (this.formaPag['id'] == 1) {
            this.Obs = this.listaT[this.viewMarca - 1].infoGeral[0].obsVista;
            this.aVista = this.listaT[this.viewMarca - 1].infoGeral[0].vista;
            this.Parcelado = 0;
          } else { this.Obs = ""; this.aVista = 0;this.Parcelado = this.listaT[this.viewMarca - 1].infoGeral[0].creditoParcelado; }
        } else {
          this.Obs = "";
          this.aVista = 0;
          this.Parcelado = 0;
          if (this.listaT[this.viewMarca - 1].id === 2) {
            if (this.formaPag['id'] == 1) { /* Debito */
              this.aVista = this.listaT[this.viewMarca - 1].infoGeral[0].vista;
              this.Obs = "Na cielo, não existe as taxas em 14 ou 30 dias."
              this.Parcelado = 0;
            } else { this.aVista = 0;
              this.Obs = "Na cielo, não existe as taxas em 14 ou 30 dias."
              this.Parcelado = this.Parcelado = this.listaT[this.viewMarca - 1].infoGeral[0].creditoParcelado
            }
          } else {
            if (this.formaPag['id'] == 1) {
              this.Obs = "";
              this.Parcelado = 0;
              this.aVista = this.listaT[this.viewMarca - 1].infoGeral[0].vista;
            } else {
              this.Obs = "";
              this.aVista = 0;
              this.Parcelado = this.listaT[this.viewMarca - 1].infoGeral[0].creditoVista;
            }
          }
        }
      break;
      case 4: /* 14 */
        this.Obs = "";
        if (this.listaT[this.viewMarca - 1].infoGeral[0].obsVista !== undefined) {
          if (this.formaPag['id'] == 1) {
            this.aVista = this.listaT[this.viewMarca - 1].after14[0].vista;
            this.Parcelado = 0;
          } else { this.Obs = ""; this.aVista = 0; this.Parcelado = this.listaT[this.viewMarca - 1].after14[0].parcelado; }
        } else {
          if (this.formaPag['id'] == 1) {
            this.Obs = "";
            this.Parcelado = 0;
            this.aVista = this.listaT[this.viewMarca - 1].after14[0].vista;
          } else {
            this.Obs = "Não foi possível encontrar o valor do parcelado";
            this.aVista = 0;
            this.Parcelado = 0;
          }
        }
      break;
      case 5: /* 30 */
        this.Obs = "";
        if (this.listaT[this.viewMarca - 1].infoGeral[0].obsVista !== undefined) {
          if (this.formaPag['id'] == 1) {
            this.aVista = this.listaT[this.viewMarca - 1].after30[0].vista;
            this.Parcelado = 0;
          } else { this.Obs = ""; this.aVista = 0; this.Parcelado = this.listaT[this.viewMarca - 1].after30[0].parcelado; }
        } else {
          if (this.formaPag['id'] == 1) {
            this.Obs = "";
            this.Parcelado = 0;
            this.aVista = this.listaT[this.viewMarca - 1].after14[0].vista;
          } else {
            this.Obs = "Não foi possível encontrar o valor do parcelado";
            this.aVista = 0;
            this.Parcelado = 0;
          }
        }
      break;
    }
  } 
}
