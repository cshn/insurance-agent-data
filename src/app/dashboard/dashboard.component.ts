import { Component, OnInit } from '@angular/core';
import { AgentData } from '../model/agentdata';
import { NEW_FSC_STATIC } from '../model/new-fsc-static';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newFscData: AgentData[] = NEW_FSC_STATIC;
  constructor() { }

  ngOnInit() {
    this.getGridData();
  }

  columnDefs = [
    {headerName: 'RankingBasedonTotalFYC', field: 'RankingBasedonTotalFYC',resizable: true,sortable: true, filter: true },
    {headerName: 'UnitCode', field: 'UnitCode',resizable: true,sortable: true, filter: true },
    {headerName: 'AgentCode', field: 'AgentCode',resizable: true,sortable: true, filter: true},
    {headerName: 'AgentName', field: 'AgentName',resizable: true,sortable: true, filter: true},
    {headerName: 'AgencyName', field: 'AgencyName',resizable: true,sortable: true, filter: true},
    {headerName: 'Location', field: 'Location',resizable: true,sortable: true, filter: true},
    {headerName: 'Cluster', field: 'Cluster',resizable: true,sortable: true, filter: true},
    {headerName: 'Rank', field: 'Rank',resizable: true,sortable: true, filter: true},
    {headerName: 'Life', field: 'Life',resizable: true,sortable: true, filter: true},
    {headerName: 'PAVitality', field: 'PAVitality',resizable: true,sortable: true, filter: true},
    {headerName: 'CS', field: 'CS',resizable: true,sortable: true, filter: true},
    {headerName: 'OwnandImmediateFamilyCasesWithCap', field: 'OwnandImmediateFamilyCasesWithCap',resizable: true,sortable: true, filter: true},
    {headerName: 'TotalFYC', field: 'TotalFYC',resizable: true,sortable: true, filter: true},
    {headerName: 'TwentyFourMthPremPersistency', field: 'TwentyFourMthPremPersistency',resizable: true,sortable: true, filter: true}
  ];

  rowData = [];

  getGridData(): void {
    this.rowData = this.newFscData;
  }
  
}
