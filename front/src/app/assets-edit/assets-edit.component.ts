import { Component, OnInit } from '@angular/core';

import { PoPageDynamicEditField, PoPageDynamicEditActions } from '@po-ui/ng-templates';

import { environment } from "src/environments/environment";

@Component({
  selector: 'app-assets-edit',
  templateUrl: './assets-edit.component.html',
  styleUrls: ['./assets-edit.component.css']
})
export class AssetsEditComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = environment.service;

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', label: 'User ID', key: true, visible: false },
    { property: 'name', label: 'Asset Name' },
    { property: 'price', label: 'Asset Price', type: 'currency' },
  ];

  readonly actions: PoPageDynamicEditActions = {
    save: '/table',
    saveNew: '/new',
  };

  constructor() { }

  ngOnInit() { }

}
