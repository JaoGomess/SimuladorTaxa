export interface lista {
    id: Number,
    value: Number,
    viewValue: String
}

export interface listaPagamentos {
    id: Number,
    viewValue: String,
    estado: Boolean
}

export interface listaTaxaDias {
    id: Number,
    viewValue: String
}

/* Cielo 2,99 por parcela - n tem info de afters... */

/* PagSeguro  
* 
* Debito 1,99 - Apos 1 ano = 2,99
* 
* Credito na hora 4,99 a vista ou 5,59 parcelado
* '' after14 3,99 a vista ou 4,59 parcelado
* '' after30 3,19 a vista ou 3,9 parcelado
*
*/

export interface MaquinasTaxas {
    id: Number,
    marca: String,
    aluguel?: Boolean,
    valorPorParcela?: Number,
    aluguelOptions?: {
        vista: Number,
        creditoVista: Number,
        creditoParcelado: Number
    }[],
    infoGeral?: {
        vista?: Number
        obsVista?: String,
        creditoVista?: Number,
        creditoParcelado?: Number
    }[],
    after14?: {
        vista: Number,
        parcelado?: Number 
    }[],
    after30?: {
        vista: Number, 
        parcelado?: Number 
    }[]
}


/* Mercado Pago
* Maquina Point - debido 1,99
* 
* Credito na hora 4,74 a vista 
* '' after14 3,79 a vista 
* '' after30 3,03 a vista 
*
*  QRCode
*
* Saldo mercado pago - free na hora
* Pix - free na hora
* Credito na hora 1,99 a vista
* Credito after30 1,69
*
* Link
* 
* Pix - 0,99 na hora
* boleto 3,49 reias em até 3 dias
* Cartao de debito virtual caixa 3,99 na hora
* Credito,saldo mp 4,99 after14
*
* na hora  5,31
* after14 4,36
* after30 3,60
*
* Parcelamentos
*
* Vendedor assume os custos
*
*
*
*
*
*
*
*
*
*
*
* Cliente assume os custos
*
*
*
*
*
*
*
*
*/
export interface MercadoPagoTaxa {
    id: Number;
}