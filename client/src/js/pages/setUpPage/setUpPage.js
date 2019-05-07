const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class SetUpPage extends BasePage {
  template = require('./setUpPage.hbs');


  pageWillLoad() {
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ])

    StorageHub.setData('loanSummary', [
      { key: 'Status', value: 'Grace Period' },
      { key: 'Next Payment Due Date', value: '07/12/2019' },
      { key: 'Balance', value: '1000' },
      { key: 'Remaining Time', value: '12' },
    ])

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
  }

  // getDateTime() {
  //   const dateTime = new Date(Date.now()).toLocaleString('en-AU').split(",");
  //   return {
  //     date: dateTime[0],
  //     time: dateTime[1],
  //   };
  // }

  // updateTimeEverySecond() {
  //   setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  // }

  // updateTimeDisplay(getTime) {
  //   const clockTime = document.getElementById("clock-time");
  //   if (clockTime) {
  //     clockTime.textContent = getTime().time;
  //   }
  // }

  // rightButtonEvent() {
  //   this.navigate('contacts');
  // }

  // leftButtonEvent() {

  //   this.navigate('confirmation');
  //   //  AudioHub.playSound(plop);
  // }


  leftButtonEvent() {
    this.navigate('contacts');
  }

  bottomButtonEvent() {
    this.navigate('loanSummary');
  }
}

module.exports = SetUpPage;
