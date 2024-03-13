import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album!: {id: number, title: string };
  title: string = "";
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.albumService.getDetail(postId).subscribe((album) => {
          this.album = album;
        });
      }
    });
  }

  rename() {
    this.albumService.updateAlbum(this.album.id, `{"title":"${this.title}"}`).subscribe(() => {
      this.album.title = this.title;
    })
  }
}