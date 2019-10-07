import { ConsServiceService } from './../../../services/cons-service.service';
import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  closeResult: string;
  condition: boolean;

  constructor(
    private modalService: NgbModal,
    private consService: ConsServiceService
  ) { }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  contactMe() {
    this.consService.enviarCorreo('activado desde navbar');
  }
}
