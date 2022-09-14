import { Component, OnInit } from '@angular/core';

import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.css']
})
export class AssetsTableComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = environment.service;
  // readonly apiService = 'https://po-sample-api.herokuapp.com/v1/people';

  readonly actions: PoPageDynamicTableActions = {
    new: '/new',
    edit: '/edit/:id',
    remove: true,
  };

  
  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', label: 'Asset ID', key: true },
    { property: 'name', label: 'Asset Name' },
    { property: 'price', label: 'Asset Price' , type: 'currency'},
  ]
  /*
  readonly fields: Array<PoPageDynamicTableField> = [
    { property: "id", label: "Id", key: true },
    { property: "nome", label: "Nome" },
    { property: "raca", label: "Raça" },
    { property: "dono", label: "Dono" },
  ];
  */

  constructor() { }

  ngOnInit() { }

}
