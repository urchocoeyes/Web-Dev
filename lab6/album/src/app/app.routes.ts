import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'album/:id', component: AlbumDetailComponent}, 
    { path: 'album/:id/photos', component: AlbumPhotosComponent},
];
