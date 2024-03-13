import { Component } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  constructor(private albumsService: AlbumsService){
  }
  albums!: {id:number, title:string}[];
  ngOnInit():void {
    this.albumsService.getAlbum().subscribe((albums) => {
      this.albums = albums;
    });
  }
  delete(id: number) {
    this.albums = this.albums.filter(a => a.id !== id)
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log("Album deleted successfully!")
    })
  }
}
