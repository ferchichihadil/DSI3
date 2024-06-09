import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listesemplyes',
  templateUrl: './listesemplyes.component.html',
  styleUrls: ['./listesemplyes.component.css']
})
export class ListesemplyesComponent implements OnInit {
  userCount: number | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUserCount().subscribe(count => this.userCount = count);
  }

}
