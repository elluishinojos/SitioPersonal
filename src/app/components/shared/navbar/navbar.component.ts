import { MensajeModel } from './../../../models/mensajes.model';
import { ConsServiceService } from './../../../services/cons-service.service';
import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mensaje = new MensajeModel();

  constructor(
    private modalService: NgbModal,
    private consService: ConsServiceService
  ) { }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  contactMe(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.consService.enviarCorreo(this.mensaje)
      .subscribe(resp => {
        console.log(resp);
      });
    this.modalService.dismissAll();
  }
}
