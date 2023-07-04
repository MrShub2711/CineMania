import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MovieService } from '../movie.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private movieService: MovieService, private title: Title, private meta: Meta) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({ name: 'description', content: 'watch online movies' });

  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  carouselId: string = 'carouselExampleAutoplaying';
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.startCarouselAutoplay();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }


  // bannerdata
  bannerData() {
    this.movieService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult######################');
      this.bannerResult = result.results;
    });
  }
  startCarouselAutoplay() {
    const carouselElement = document.getElementById(this.carouselId);
    if (carouselElement) {
      const interval = 1000;
      new bootstrap.Carousel(carouselElement, { interval });
    }
  }

  trendingData() {
    this.movieService.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }

  previousSlide() {
    console.log('Its pressed previous');
    
    const carouselElement = document.getElementById(this.carouselId);
    if (carouselElement) {
      const carousel = bootstrap.Carousel.getInstance(carouselElement);
      if (carousel) {
        carousel.prev();
      }
    }
  }

  nextSlide() {
    const carouselElement = document.getElementById(this.carouselId);
    if (carouselElement) {
      const carousel = bootstrap.Carousel.getInstance(carouselElement);
      if (carousel) {
        carousel.next();
      }
    }
  }

  // action 
  actionMovie() {
    this.movieService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

}
