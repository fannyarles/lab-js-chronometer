class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {

      if ( !printTimeCallback ) {
        this.currentTime++;
      } else {
        this.currentTime++;
        printTimeCallback();
      } 

    }, 10);
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return parseInt(`${this.currentTime}`.slice(-2));
  }

  computeTwoDigitNumber(value) {
    return `0${value}`.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
