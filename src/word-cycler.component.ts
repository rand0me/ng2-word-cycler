import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

const defaultAnimationTime = 200;

@Component({
  selector: 'words-cycler',
  template: `
    <span style="display: none;"><ng-content></ng-content></span>
    {{ currentWord }}
  `,
  styles: [],
  animations: [
    trigger('cycle', [
      state('0', style({ opacity: 1, transform: 'scale(1)'})),
      transition('* => *', [
        animate(`${defaultAnimationTime}ms ease-in-out`, style({ opacity: 0, transform: 'scale(0)'})),
        animate(`${defaultAnimationTime}ms ease-in-out`, style({ opacity: 1, transform: 'scale(1)'}))
      ]),
    ])
  ]
})
export class WordCyclerComponent implements OnInit, OnDestroy {

                         private words:       string[] = [];
                         private currentWord: string;
  @Input('interval')     private interval:    number = 1000;
                         private intervalRef: any;
  @Input('delimiter')    private delimiter:   string = ', ';
  @HostBinding('@cycle') private state:       number = 0;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    this.extractWords();
    this.setInterval();
  }

  ngOnDestroy(): void {
    this.unsetInterval();
  }

  private nextState(): void {
    if (this.state >= this.words.length - 1) {
      this.state = 0;
    } else {
      this.state++;
    }
    this.delayWordSwap(defaultAnimationTime);
  }

  private extractWords() {
    this.words = this.element.nativeElement.textContent.split(this.delimiter);
    this.currentWord = this.words[0];
  }

  private delayWordSwap(time: number) {
    setTimeout(() => this.currentWord = this.words[this.state], time);
  }

  private setInterval() {
    this.intervalRef = setInterval(() => this.nextState(), this.interval);
  }

  private unsetInterval() {
    clearInterval(this.intervalRef);
  }
}
