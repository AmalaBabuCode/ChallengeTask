import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  baseUrl = 'http://localhost:3000';

  public apiEndPoint = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  getAllGraphs() {
    return this.http.get(`${this.baseUrl}/getAllGraphs`);
  }

  deleteGraph(id) {
    return this.http.delete(`${this.baseUrl}/deleteGraph/${id}`);
  }

  getGraph(id) {
    return this.http.get(`${this.baseUrl}/getGraph/${id}`);
  }

  createGraph(name) {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': this.baseUrl,
      'Access-Control-Allow-Headers':
        'X-Requested-With, Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
    });
    return this.http.post(`${this.baseUrl}/createGraph/${name}`, { name },
      { headers: httpHeaders });
  }

}
