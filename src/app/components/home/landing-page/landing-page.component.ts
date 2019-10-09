import { MensajeModel } from './../../../models/mensajes.model';
import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsServiceService } from 'src/app/services/cons-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-template',
  template: `
  <div class="modal-header bg-primary-2 animated fadeIn">
    <h4 class="modal-title color-white" id="modal-basic-title">¡Manda un saludo! 😬</h4>
    <button type="button" class="close color-white" aria-label="Close" (click)="modal.dismiss()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body animated fadeIn">
    <form (ngSubmit)="contactMe(f)" #f="ngForm">
      <div class="form-group">
        <label>Correo de contacto</label>
        <input type="email" class="form-control" placeholder="name@example.com" [(ngModel)]="mensaje.correo"
          name="correo" required>
      </div>
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" class="form-control" placeholder="Nombre" [(ngModel)]="mensaje.nombre" name="nombre"
          required>
      </div>
      <div class="form-group">
        <label for="subjectInput">Asunto</label>
        <input type="text" class="form-control" placeholder="Asunto" [(ngModel)]="mensaje.asunto" name="asunto"
          required>
      </div>
      <div class="form-group">
        <label for="messageImput">Mensaje</label>
        <textarea required [(ngModel)]="mensaje.cuerpo" name="cuerpo" class="form-control" id="messageImput" rows="2"
          placeholder="¡Aquí deposita tus comentarios, quejas, sugerencias o saludos!"></textarea>
      </div>
      <div class="modal-footer form-group animated fadeIn">
        <button type="button" class="btn btn-outline-danger" (click)="modal.close()">
          <i class="fas fa-ban"></i>
          <p>Cancelar</p>
        </button>
        <button type="submit" class="btn btn-alt">
          <i class="fas fa-paper-plane"></i>
          <p>Enviar</p>
        </button>
      </div>
    </form>
  </div>
  `
})
export class ModalTemplateComponent {
  mensaje = new MensajeModel();

  constructor(
    public modal: NgbActiveModal,
    private consService: ConsServiceService,
    private modalService: NgbModal) { }


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

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private modalService: NgbModal) { }

  openModal() {

    this.modalService.open(ModalTemplateComponent, { centered: true });

  }

}
