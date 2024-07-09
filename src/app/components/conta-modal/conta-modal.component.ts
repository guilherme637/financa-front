import {Component, ElementRef, ViewChild} from '@angular/core';
import {CategoriaService} from "../../Domain/Service/Categoria/CategoriaService";
import {formatDate, NgForOf} from "@angular/common";
import {Categoria} from "../../Domain/Service/Categoria/Categoria";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SituacaoService} from "../../Domain/Service/Situacao/SituacaoService";
import {SituacaoResponseInterface} from "../../Domain/Service/Situacao/SituacaoResponseInterface";
import {SalvarContaPostService} from "../../Domain/Service/Conta/SalvarContaPostService";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";

@Component({
  selector: 'app-conta-modal',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './conta-modal.component.html',
  styleUrl: './conta-modal.component.css'
})
export class ContaModalComponent {
  @ViewChild('modal') modal!: ElementRef

  default = 'Selecione';
  private _formBuilder: FormBuilder;
  private _salvarContaService: SalvarContaPostService;
  private _contaForm: any = FormGroup;
  public categorias: Array<Categoria>;
  public situacoes: Array<SituacaoResponseInterface>;
  public parcela: boolean = false;
  public formInvalid: boolean = false;

    constructor(
      formBuilder: FormBuilder,
      categoriaService: CategoriaService,
      situacaoService: SituacaoService,
      salvarContaService: SalvarContaPostService
    ) {
      this._salvarContaService = salvarContaService;
      this.categorias = categoriaService.getAllCategorias();
      this.situacoes = situacaoService.getAllSituacoes()
      this._formBuilder = formBuilder;
    }

  ngOnInit(): void {
    this.initForm()
  }

  public getForm(): FormGroup {
      return this._contaForm;
  }

  private initForm(): void {
    this._contaForm  = this._formBuilder.group({
      nome: ['', Validators.required],
      valor: [0, Validators.required],
      mesDivida: [formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'), Validators.required],
      categoria: ['0: 0', Validators.required],
      situacao: ['0: 0', Validators.required],
      parcela: this._formBuilder.group({
        total: [1],
        pago: [0],
        mesesPagos: ['']
      })
    });
  }

  public showModal() {
    this.modal.nativeElement.classList.remove('hidden')
  }

  public clonseModal() {
    this.modal.nativeElement.classList.add('hidden')
  }

  public hasParcela(event: any) {
     this.parcela = event.target.checked;
  }

  public onSubmit(): void {
    if (!this._contaForm.valid) {
      this.formInvalid = true;
      return;
    }

    this.formInvalid = false;

    this._salvarContaService.save(this._contaForm.value, this.parcela);
  }
}
