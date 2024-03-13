import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink, RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos!: {id: number, title: string, url: string, thumbnailUrl: string}[]
  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')){
        const id = Number(params.get('id'))
        this.albumService.getPhotos(id).subscribe((photos) => {
          this.photos = photos
        })
      }
    })
  }
}