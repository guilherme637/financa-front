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
    console.log(parcela);
    let builder: ContaDtoBuilder = parcela ? ContaDirector.builder(data) : ContaDirector.builderWithParcela(data);
    console.log(ContaDirector.builderWithParcela(data).build());
    // this._salvarClient
    //   .post(
    //     builder.build()
    //   ).subscribe({
    //   error: error => {
    //     console.log(error);
    //   }
    // });
  }
}
