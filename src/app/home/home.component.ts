import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]
  
})
export class HomeComponent implements OnInit {

  public listaMaquininhas: any[] = [
    {id: 1, marca: 'PagSeguro'}
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
		config.keyboard = false;
  }
  open(content) {
		this.modalService.open(content);
	}
  ngOnInit(): void {
  }

}
