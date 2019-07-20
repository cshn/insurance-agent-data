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
    {headerName: 'RankingBasedonTotalFYC', field: 'RankingBasedonTotalFYC' },
    {headerName: 'UnitCode', field: 'UnitCode' },
    {headerName: 'AgentCode', field: 'AgentCode'},
    {headerName: 'AgentName', field: 'AgentName'},
    {headerName: 'AgencyName', field: 'AgencyName'},
    {headerName: 'Location', field: 'Location'},
    {headerName: 'Cluster', field: 'Cluster'},
    {headerName: 'Rank', field: 'Rank'},
    {headerName: 'Life', field: 'Life'},
    {headerName: 'PAVitality', field: 'PAVitality'},
    {headerName: 'CS', field: 'CS'},
    {headerName: 'OwnandImmediateFamilyCasesWithCap', field: 'OwnandImmediateFamilyCasesWithCap'},
    {headerName: 'TotalFYC', field: 'TotalFYC'},
    {headerName: 'TwentyFourMthPremPersistency', field: 'TwentyFourMthPremPersistency'}
  ];

  rowData = [];

  getGridData(): void {
    this.rowData = this.newFscData;
  }
  
}
