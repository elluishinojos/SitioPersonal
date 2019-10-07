import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsServiceService } from 'src/app/services/cons-service.service';

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
  <form>
    <div class="form-group">
      <label for="emailInput">Correo de contacto</label>
      <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
    </div>
    <div class="form-group">
      <label for="nameInput">Nombre</label>
      <input type="email" class="form-control" id="nameInput" placeholder="Nombre">
    </div>
    <div class="form-group">
      <label for="subjectInput">Asunto</label>
      <input type="email" class="form-control" id="subjectInput" placeholder="Asunto">
    </div>
    <div class="form-group">
      <label for="messageImput">Mensaje</label>
      <textarea class="form-control" id="messageImput" rows="2" placeholder="Mensaje"></textarea>
    </div>
  </form>
</div>
<div class="modal-footer animated fadeIn">
  <button type="button" class="btn btn-outline-danger" (click)="modal.close()">
    <i class="fas fa-ban"></i>
    <p>Cancelar</p>
  </button>
  <button type="button" class="btn btn-alt" (click)="contactMe(); modal.close()">
    <i class="fas fa-paper-plane"></i>
    <p>Enviar</p>
  </button>
</div>

  `
})
export class ModalTemplateComponent {

  constructor(
    public modal: NgbActiveModal,
    private consService: ConsServiceService
  ) { }

  contactMe() {
    this.consService.enviarCorreo('activado desde landing page');
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
