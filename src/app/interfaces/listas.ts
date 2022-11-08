export interface lista {
    id: Number,
    value: Number,
    viewValue: String
}


export interface Marcas {
    id: Number,
    taxaDebito: Number,
    taxaCreditoAvista: Number,
    taxaCreditoParcelado: Number,
    viewValue: String,
    aluguel?: Boolean,
    aluguelOptions?: {
        taxaDebito: Number,
        taxaCreditoAvista: Number,
        taxaCreditoParcelado: Number
    }[],
    qrCode?: Boolean,
    qrCodeOptions?: {
        taxaDebito: Number,
        taxaCreditoAvista: Number,
        taxaCreditoParcelado: Number
    }[],
    link?: Boolean,
    linkOptions?: {
        taxaDebito: Number,
        taxaCreditoAvista: Number,
        taxaCreditoParcelado: Number
    }[]  
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
    alguel?: Boolean,
    valorPorParcela?: Number,
    aluguelOptions?: {
        vista: Number,
        creditoVista: Number,
        creditoParcelado: Number
    }[],
    debit?: {
        vista: Number, /* 1,99  */
        obsVista?: String, /* Informar que depois de um ano a taxa passara a ser 2,39 */
    }[],
    creditTime?: { /* Crédito na hora */
        vista: Number, /* 4,99 a vista */
        parcelado?: Number /* 5,59 por parcela */
    }[],
    after14?: {
        vista: Number, /* 3,99 a vista */
        parcelado?: Number /* 4,59 por parcela */
    }[],
    after30?: {
        vista: Number, /* 3,19 a vista */
        parcelado?: Number /* 3,9 por parcela */
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