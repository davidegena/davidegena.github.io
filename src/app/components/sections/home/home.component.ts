import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';

declare let require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterContentInit {
  public displayText = '';

  private readonly phrases: string[] = [
    "I'm a developer and cybersecurity enthusiast.",
    "I'm a lover of cinema, vfx and photography.",
    "I'm a passionate about video games and electronic music."
  ];
  private readonly typeSpeedMin = 18;
  private readonly typeSpeedMax = 48;
  private readonly wordPauseMin = 60;
  private readonly wordPauseMax = 160;
  private readonly deleteSpeedMin = 12;
  private readonly deleteSpeedMax = 30;
  private readonly holdTime = 4500;
  private readonly gapTime = 500;

  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimeout: any;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimeout);
  }

  ngAfterContentInit() {
    setTimeout(() => {
      const Parallax = require('parallax-js');
      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, {
        relativeInput: false
      }, );

      this.setupMotionPermission();
    }, 2000);
  }

  private setupMotionPermission(): void {
    const DeviceOrientationEventTyped: any = (window as any).DeviceOrientationEvent;

    // iOS 13+ requires an explicit permission grant, triggered by a user gesture,
    // before deviceorientation events are dispatched. parallax-js already attaches
    // its own listener on init; once permission is granted those events start
    // flowing to it automatically, no re-registration needed. Android needs none of this.
    if (!DeviceOrientationEventTyped || typeof DeviceOrientationEventTyped.requestPermission !== 'function') {
      return;
    }

    const requestMotionPermission = () => {
      document.removeEventListener('touchend', requestMotionPermission);
      document.removeEventListener('click', requestMotionPermission);
      DeviceOrientationEventTyped.requestPermission().catch(() => {});
    };

    document.addEventListener('touchend', requestMotionPermission, { once: true });
    document.addEventListener('click', requestMotionPermission, { once: true });
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  get typedText(): string {
    return this.displayText.replace(/ $/, ' ');
  }

  private randomBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  private typeLoop(): void {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (!this.isDeleting) {
      this.charIndex++;
      this.displayText = currentPhrase.substring(0, this.charIndex);

      if (this.charIndex === currentPhrase.length) {
        this.isDeleting = true;
        this.typeTimeout = setTimeout(() => this.typeLoop(), this.holdTime);
        return;
      }
      const lastChar = currentPhrase.charAt(this.charIndex - 1);
      let delay = this.randomBetween(this.typeSpeedMin, this.typeSpeedMax);
      if (lastChar === ' ') {
        delay += this.randomBetween(this.wordPauseMin, this.wordPauseMax);
      }
      this.typeTimeout = setTimeout(() => this.typeLoop(), delay);
    } else {
      this.charIndex--;
      this.displayText = currentPhrase.substring(0, this.charIndex);

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        this.typeTimeout = setTimeout(() => this.typeLoop(), this.gapTime);
        return;
      }
      this.typeTimeout = setTimeout(() => this.typeLoop(), this.randomBetween(this.deleteSpeedMin, this.deleteSpeedMax));
    }
  }

}
