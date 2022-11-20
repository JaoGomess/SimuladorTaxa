import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaMaquininhas: any[] = [
    {id: 1, viewValue: "Moderninha pró", key: 1}, //
    {id: 2, viewValue: "MinizinhaNFC", key: 1},
    {id: 3, viewValue: "Moderninha Smart 2", key: 1},
    {id: 4, viewValue: "Moderninha pró", key: 1},
    {id: 5, viewValue: "Point Mini NFC 1", key: 2}, //
    {id: 6, viewValue: "Point Pro 2", key: 2},
    {id: 7, viewValue: "Point Smart", key: 2},
    {id: 8, viewValue: "CIELO Flash", key: 3},
    {id: 9, viewValue: "CIELO LIO", key: 3},
    {id: 10, viewValue: "CIELO ZIP", key: 3},
  ];

  public opcPrimeiraMaquina: any;
  public opcSegundaMaquina: any;
  public opcTerceiraMaquina: string;

  public email: string;
  public nome: string;

  constructor(public http: ServiceService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(): void { }

  open(content) {
		this.modalService.open(content);
	}

  register() {
    if (!this.opcPrimeiraMaquina || !this.opcSegundaMaquina) return alert(`selecione as maquinas para comparacao`)
    if (!this.email) return alert(`preencha os campos`);
    if (!this.nome) return alert(`preencha os campos`);
    let userObj = {
      nome: this.nome,
      email: this.email, /* KEY MODELO - ID - NOME */
      keys: {primeiraMaquina: this.listaMaquininhas[this.opcPrimeiraMaquina - 1].key, segundaMaquina: this.listaMaquininhas[this.opcSegundaMaquina - 1].key}, /* Pegar a marca pela api */
      modelos: {primeiraMaquina: this.listaMaquininhas[this.opcPrimeiraMaquina - 1].id, segundaMaquina: this.listaMaquininhas[this.opcSegundaMaquina - 1].id}
    }
    console.log(userObj);

    this.http.sendEmail("http://localhost:3000/sendmail", userObj).subscribe(data => {
      let res:any = data;
      console.log(`${userObj.nome} - ${res.messageId}`);
      },
      err => {
        console.log(`err:` , err);
      }, () => {}
    )
  }

}
