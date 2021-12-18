import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro: Cadastro;

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cadastroService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
      })
  }

  deleteCadastro(): void{
    this.cadastroService.deleteCadastro(this.cadastro.id).subscribe(() =>{
      this.cadastroService.showMessege('Cadastro deletado')
    });
  }

}
