import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Categoria} from "../../Domain/Service/Categoria/Categoria";
import {map, Observable} from "rxjs";
import {AllCategorias} from "../../Domain/Service/Categoria/AllCategorias";

@Injectable({providedIn: 'root'})

export class CategoriaClient {
  constructor(private http: HttpClient) {
  }

  public getCategorias(): Observable<AllCategorias> {
    return this.http.get<AllCategorias>(
      'http://www.financa-service.com.br:3030/v1/categorias',
      // {
      //   headers: {
      //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aC1zZXJ2aWNlLmNvbS5icjozMDMwIiwiZXhwIjoxNzE5OTUxNjg3LCJhdWQiOiJhcGk6ZmluYW5jYXMiLCJzdWIiOnsiaWQiOjEsInVzZXJuYW1lIjoiZ3VpbGhlcm1lIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJzY29wZSI6IlJPTEVfVVNFUiJ9LCJjbGllbnRfaWQiOiJlMjliZDE4M2Y3ZDVmMTlhM2U3NGFjN2FiYWY4NTUzMjM5MjZjY2IzZjNmYzVlMDIzMzZhZDVlZDU5YWE3NzRmNWYzOTdmMTNhNDk4ZGI0ZDUxZjFjYjRlZDYyYzJkYzQ2ZTBlYmM4MjE2MmQ2NDgwMWFkOGVkYjY4MWQ0NzEwZiIsImlhdCI6MTcxOTk0ODA4N30.RyUgp2593lSZxs10bVfiqfGTmjTqQLcx_b3q9FSu7VhOG5nVNmqcZ3GCaeDNcNLS_zK6-nCaAziuOb6QxAT4O9Yr16j0501hZu150DNzKHg12ML1bzMWzbjFp43wMzQsLgbOzp-xp01lOLYzgg_0-4vM9Smhy6x8mAMm1eM1hBlPnM-ag-qUwTbRrFcOuwFz5kFqKmqFVtxcsOmc7PSiWFgH6D8cVw3Wk69AxPrbWNby_fSluve5fnmhkZKEQ8uKwo6_L2YsLSetfeCtFfQsqbMvGTO7qctXXGooY4sNHG3hwJynRFLCgYnfvZGLjCV9cYxnVKa90RkXbRzpkEm1RHYGqIs7ejzWJ36C03g9IPRg-UaSuZSU7EU6FOKuDrUXXf8ZJr2OnBwiDF2wOiUBJcD5sC9_7YZWJ3IUOxt2P9Hn-kLR0RGopuY5bAfJDnx4rFe4CLu-J6f6_uJbsyG0CNvwWalifh9THp3oPbDPJbgmxvUnwxZHnTzbHKTuvWvv84WopV8RX8N6fE099Rr8A58n53TQWjC64nJr1DdkX7LUEhfhlbiEVExY70DvXKHAvW_1HfHMP51v1xscoDvZFUUAMMkSXAFi1GIeG3-uXll3_u3rNCUx1BLN5K1y83iWiUbJRofH-6DjkX5fT4jTqH0oiC0nfulTYQH7aB4oyZ8'
      //   }
      // }
    )
  }
}
