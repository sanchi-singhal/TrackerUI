import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiMessage: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  callApi() {
    this.loading = true;
    this.http.get<any>('/api/values').subscribe({
      next: (data) => {
        this.apiMessage = JSON.stringify(data, null, 2);
        this.loading = false;
      },
      error: (error) => {
        this.apiMessage = `Error: ${error.message}`;
        this.loading = false;
      }
    });
  }
}

