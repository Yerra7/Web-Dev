import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  isLoading = true;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load albums.';
        this.isLoading = false;
      },
    });
  }

  deleteAlbum(albumId: number, event: MouseEvent): void {
    // IMPORTANT: don't trigger navigation when clicking Delete
    event.preventDefault();
    event.stopPropagation();

    this.albumService.deleteAlbum(albumId).subscribe({
      next: () => {
        // JSONPlaceholder doesn't really delete, so we update UI ourselves:
        this.albums = this.albums.filter((a) => a.id !== albumId);
      },
      error: () => {
        alert('Delete failed (API error).');
      },
    });
  }
}