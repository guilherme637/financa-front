import {Injectable} from "@angular/core";
import {SalvarClient} from "../../../Infrastructure/Client/Conta/SalvarClient";
import {ContaDirector} from "../../Builder/Conta/ContaDirector";
import {ContaDtoBuilder} from "../../Builder/Conta/ContaDtoBuilder";

@Injectable({providedIn: 'root'})
export class SalvarContaPostService
{
  constructor(
    private _salvarClient: SalvarClient
  ) {
  }

  public save(data: object, parcela: boolean) {
    let builder: ContaDtoBuilder = parcela ? ContaDirector.builderWithParcela(data) : ContaDirector.builder(data);

    this._salvarClient
      .post(
        builder.build()
      ).subscribe({
      error: error => {
        if (error.status == 500) {
          console.error('ocorreu um erro')
        }
      }
    });
  }
}
