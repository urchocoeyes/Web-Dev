import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) {  }
  getAlbum() : Observable<{ id: number, title: string }[]>
  {
    return this.client.get<{id: number, title: string }[]>('https://jsonplaceholder.typicode.com/albums');
  }
  
  getDetail(id: number) : Observable<{id: number, title: string}>
  {
    return this.client.get<{id: number, title: string}>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbum(id: number, newTitle: string) {
    return this.client.patch(`https://jsonplaceholder.typicode.com/albums/${id}`, `{"title":"${newTitle}"}`);
  }

  getPhotos(id: number): Observable<{id: number, title: string, url: string, thumbnailUrl: string}[]> {
    return this.client.get<{id: number, title: string, url: string, thumbnailUrl: string}[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
