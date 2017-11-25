import { Component } from '@stencil/core';


@Component({
  tag: 'submission-status-button',
  styleUrl: 'submission-status-button.scss'
})
export class MyName {

  dOne = `M 60,100
  L 50,100
  C 33.4357078,100 20,113.427814 20,130
  L 20,130
  C 20,146.568541 33.4331197,160  50,160
  L190,160
  C206.570288,160 220,146.572314 220,130
  L220,100
  C220,-60 180, 80 160,100
  C140,120 100,160 100,160`;
  dTwo = `M180,160
  L190,160
  C206.564295,160 220,146.572186 220,130
  L220,130
  C220,113.431458 206.56688,100 190,100
  L 50,100
  C33.4297125,100 20,113.435296 20,130
  C20,130 20,120 20,140
  C20,220 180,200 120,140
  C100,120 80,100 80,100`;

  click() {
    const classes = document.getElementById('idd').classList;
    
    if ((classes.contains("loading-start") || classes.contains("loading-progress"))
        && !classes.contains("loading-end")) {
      console.log('jumpy much?')
    } else if (classes.contains("loading-end")) {
      classes.remove("loading-start");
      classes.remove("loading-progress");
      classes.remove("loading-end");
    } else {
          classes.add("loading-start");
          setTimeout(() => {
            classes.add("loading-progress");
          }, 500);
          setTimeout(() => {
            classes.add("loading-end")
          }, 1500);
          
        }
  }

  render() {
    return (
      <div id="idd" onClick={() => this.click()}>
      <a>submit</a>
      <a class="loading" href="#">loading</a>
      <svg viewBox="0 0 240 220">
        <rect id="middle" x="20" y="100" width="200" height="60" rx="30"></rect>
        <path id="top" d={this.dOne}></path>
        <path id="bottom" d={this.dTwo}></path>
      </svg>
      <a class="feedback" href="#"></a>
      </div>
    );
  }
}
