import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['./video-widget.component.css'],
})
export class VideoWidgetComponent implements OnInit, AfterViewInit {
  video;
  videoContainer;
  btn;
  largeBtn;
  progressStatus;
  progressLoaded;
  videoLogo;
  playBtn;
  shareBtn;
  mainVideoContainer;
  time;
  videoTimeSm;
  @Input()
  id: number;
  @Input()
  size: string;
  @Input()
  videoLogoName: string;
  @Input()
  source: string;
  @Input()
  poster: string;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.initVideoVariables();
  }

  initVideoDurationSpan() {
    this.time.innerHTML = this.toHHMMSS(0) + ' / ' + this.toHHMMSS(this.video.duration);
    if (this.size === 'sm') {
      this.videoTimeSm.innerHTML = this.toHHMMSS(this.video.duration);
    }
  }

  togglePlayPause() {
    if (this.size === 'sm') {
      this.videoLogo.style.bottom = '-48px';
      if (this.size === 'sm') {
        this.videoTimeSm.style.bottom = '-48px';
      }
    }
    if (this.video.paused) {
      this.btn.classList.remove('play');
      this.btn.classList.add('pause');
      this.largeBtn.classList.remove('play');
      this.largeBtn.classList.add('pause');
      if (document.documentElement.offsetWidth < 768) {
        this.hidePlayBtn();
      }
      this.video.play();
    } else {
      this.btn.classList.remove('pause');
      this.btn.classList.add('play');
      this.videoLogo.style.bottom = '0';
      if (this.size === 'sm') {
        this.videoTimeSm.style.bottom = '17px';
      }
      this.largeBtn.classList.remove('pause');
      this.largeBtn.classList.add('play');
      this.playBtn.style.opacity = '100';
      this.shareBtn.style.opacity = '100';
      this.shareBtn.style.top = '0';
      this.video.pause();
      this.showButtonsOnPause();
    }
  }

  hidePlayBtn() {
    setTimeout(() => {
      this.playBtn.style.opacity = '0';
    }, 1000);
  }

  initVideoVariables() {
    this.time = document.getElementById(`controlsTimeSpan${this.id}`) as HTMLSpanElement;
    this.video = document.getElementById(`mainVideo${this.id}`) as HTMLVideoElement;
    this.btn = document.getElementById(`playPauseBtn${this.id}`) as HTMLElement;
    this.largeBtn = document.getElementById(`playPauseLargeBtn${this.id}`) as HTMLElement;
    this.progressStatus = document.getElementById(`progressStatus${this.id}`) as HTMLElement;
    this.progressLoaded = document.getElementById(`progressLoaded${this.id}`) as HTMLElement;
    this.playBtn = document.getElementById(`playPauseLargeBtn${this.id}`) as HTMLElement;
    this.shareBtn = document.getElementById(`shareBtn${this.id}`) as HTMLElement;
    this.mainVideoContainer = document.getElementById(
      `mainVideoContainer${this.id}`
    ) as HTMLElement;
    this.videoLogo = document.getElementById(`videoLogo${this.id}`) as HTMLElement;
    this.videoContainer = document.getElementById(`videoContainer${this.id}`);
    this.videoTimeSm = document.getElementById(`videoTimeSm${this.id}`);
    this.initVideoDurationSpan();
  }

  resizeStatusBar(event) {
    const progress = event.target.currentTime / event.target.duration;
    this.progressStatus.style.width = progress * 100 + '%';
    this.time.innerHTML =
      this.toHHMMSS(this.video.currentTime) + ' / ' + this.toHHMMSS(this.video.duration);
  }

  /*resizeDownloadedBar() {
    this.progressLoaded.style.width = this.video.buffered.end(0) / this.video.duration * 100 + '%';
  }*/

  fullScreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen(); // Firefox
    } else if (this.video.webkitRequestFullscreen) {
      this.video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  rewindVideo(event) {
    const progressBarWidth = document.getElementById(`progressBlock${this.id}`).clientWidth;
    const clickPosition = event.clientX - Math.floor(event.target.getBoundingClientRect().left);
    this.video.currentTime = this.video.duration * (clickPosition / progressBarWidth);
  }

  toHHMMSS(sec): string {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    let seconds = Math.floor(sec - hours * 3600 - minutes * 60);

    // if (seconds < 10) {seconds = '0' + seconds;}
    return hours.toString() === '0'
      ? minutes + ':' + seconds
      : hours + ':' + minutes + ':' + Math.floor(seconds);
  }

  hideButtonsOnMouseLeave() {
    if (this.mainVideoContainer.classList.contains('sm') && !this.video.paused) {
      setTimeout(() => {
        this.shareBtn.style.opacity = '0';
        this.playBtn.style.opacity = '0';
        setTimeout(() => {
          this.shareBtn.style.top = '-48px';
        }, 200);
      }, 1500);
    } else if (this.mainVideoContainer.classList.contains('sm') && this.video.paused) {
      this.shareBtn.style.opacity = '0';
      setTimeout(() => {
        this.shareBtn.style.top = '0';
      }, 200);
    } else if (!this.video.paused) {
      setTimeout(() => {
        this.playBtn.style.opacity = '0';
        if (document.documentElement.offsetWidth >= 768) {
          this.videoLogo.style.opacity = '0';
        }
        this.shareBtn.style.opacity = '0';
        setTimeout(() => {
          this.shareBtn.style.top = '-48px';
        }, 200);
      }, 1500);
    }
  }

  showButtonsOnPause() {
    this.videoLogo.style.opacity = '100';
  }

  showShareBtnOnHover() {
    this.shareBtn.style.opacity = '100';
    this.shareBtn.style.top = '0';
  }
}
