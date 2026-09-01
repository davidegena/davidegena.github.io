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

      // parallax-js's own gyroscope handling relies on outdated user-agent
      // sniffing and doesn't know about iOS 13+'s permission gate, so it's
      // unreliable on iOS. Hand iOS off to our own dedicated handler instead
      // and leave parallax-js untouched for desktop (mouse) and Android,
      // where its built-in device-orientation support already works.
      if (this.isIosMotionPermissionRequired()) {
        parallaxInstance1.disable();
        this.setupIosTilt(scene);
      }
    }, 2000);
  }

  private isIosMotionPermissionRequired(): boolean {
    const DeviceOrientationEventTyped: any = (window as any).DeviceOrientationEvent;
    return !!DeviceOrientationEventTyped && typeof DeviceOrientationEventTyped.requestPermission === 'function';
  }

  private setupIosTilt(scene: HTMLElement): void {
    const DeviceOrientationEventTyped: any = (window as any).DeviceOrientationEvent;
    const layers: HTMLElement[] = Array.prototype.slice.call(scene.children);
    if (!layers.length) {
      return;
    }

    let calibrationBeta: number | null = null;
    let calibrationGamma: number | null = null;
    const maxTiltDeg = 20;
    const pixelsPerDepth = 60;

    const onDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta === null || event.gamma === null) {
        return;
      }
      if (calibrationBeta === null || calibrationGamma === null) {
        calibrationBeta = event.beta;
        calibrationGamma = event.gamma;
      }

      const tiltX = Math.max(-maxTiltDeg, Math.min(maxTiltDeg, event.gamma - calibrationGamma)) / maxTiltDeg;
      const tiltY = Math.max(-maxTiltDeg, Math.min(maxTiltDeg, event.beta - calibrationBeta)) / maxTiltDeg;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute('data-depth') || '0');
        const moveX = tiltX * depth * pixelsPerDepth;
        const moveY = tiltY * depth * pixelsPerDepth;
        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    // iOS requires the permission prompt to be triggered directly by a user
    // gesture, so we wait for the first tap anywhere on the page.
    const requestAndBind = () => {
      document.removeEventListener('touchend', requestAndBind);
      document.removeEventListener('click', requestAndBind);
      DeviceOrientationEventTyped.requestPermission()
        .then((state: string) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', onDeviceOrientation);
          }
        })
        .catch(() => {});
    };

    document.addEventListener('touchend', requestAndBind, { once: true });
    document.addEventListener('click', requestAndBind, { once: true });
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
