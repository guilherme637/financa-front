import {Component, ElementRef, ViewChild} from '@angular/core';
import {CategoriaService} from "../../Domain/Service/Categoria/CategoriaService";
import {NgForOf} from "@angular/common";
import {Categoria} from "../../Domain/Service/Categoria/Categoria";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-conta-modal',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './conta-modal.component.html',
  styleUrl: './conta-modal.component.css'
})
export class ContaModalComponent {
  @ViewChild('modal') modal!: ElementRef

  private _formBuilder: FormBuilder;
  public categorias: Categoria[] = [];
  categoriaSelecionada: any;
  contaForm: any = FormGroup;

    constructor(formBuilder: FormBuilder, http: CategoriaService) {
    this.categorias = http.getAllCategorias();
    this._formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.contaForm = this._formBuilder.group({
      nome: [''],
      valor: [''],
      mesDivida: [''],
      categoria: new FormControl(this.categorias)
    })
  }

  public showModal() {
    this.modal.nativeElement.classList.remove('hidden')
  }

  public clonseModal() {
    this.modal.nativeElement.classList.add('hidden')
  }

  public getCategorias(event: Event) {
    this.categoriaSelecionada = (event.target as HTMLSelectElement).value;
  }

  public onSubmit(): void {
    console.log(this.contaForm.value);
  }
}
