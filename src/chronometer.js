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
      console.log(this.currentTime)

    }, 1000);
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiseconds() {
    return 0;
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
