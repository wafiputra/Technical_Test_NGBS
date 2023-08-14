import { Component, OnInit } from '@angular/core';
import { Carousel, CarouselItem, CarouselOptions, CarouselInterface } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Technical_Test_NGBS';

  ngOnInit(): void {
    this.initCarousel();
  }

  initCarousel(): void {
    const items: CarouselItem[] = [
      {
        position: 0,
        el: document.getElementById('carousel-item-1')!
      },
      {
        position: 1,
        el: document.getElementById('carousel-item-2')!
      },
      {
        position: 2,
        el: document.getElementById('carousel-item-3')!
      },
      {
        position: 3,
        el: document.getElementById('carousel-item-4')!
      },
      {
        position: 4,
        el: document.getElementById('carousel-item-5')!
      },
      {
        position: 5,
        el: document.getElementById('carousel-item-6')!
      },
      {
        position: 6,
        el: document.getElementById('carousel-item-7')!
      },
      {
        position: 7,
        el: document.getElementById('carousel-item-8')!
      },
    ];

    const options: CarouselOptions = {
      defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')!
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')!
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')!
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')!
            },
            {
                position: 4,
                el: document.getElementById('carousel-indicator-5')!
            },
            {
                position: 5,
                el: document.getElementById('carousel-indicator-6')!
            },
            {
                position: 6,
                el: document.getElementById('carousel-indicator-7')!
            },
            {
                position: 7,
                el: document.getElementById('carousel-indicator-8')!
            },
        ]
    },

    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: ( ) => {
        console.log('previous slider item is shown');
    },
    onChange: ( ) => {
        console.log('new slider item has been shown');
    }
    };

    const carousel: CarouselInterface = new Carousel(items, options);

    carousel.cycle();

    const $prevButton = document.getElementById('data-carousel-prev');
    const $nextButton = document.getElementById('data-carousel-next');

    $prevButton?.addEventListener('click', () => {
      carousel.prev();
    });

    $nextButton?.addEventListener('click', () => {
      carousel.next();
    });
  }
}
