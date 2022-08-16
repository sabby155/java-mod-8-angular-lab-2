import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab-2';

  disabledNewMessage = false;

  athletes = [
    {
      name: "Bill Russell",
      sport: "NBA Basketball",
      active: false
    },
    {
      name: "Gabriela Sabatini",
      sport: "WTA Tennis",
      active: false
    },
    {
      name: "Simone Biles",
      sport: "Olympic Gymnast",
      active: true
    }
  ];

  messages = [
    {
      sender: "Ludovic",
      message: "Latest message from Ludovic"
    },
    {
      sender: "Jessica",
      message: "Latest message from Jessica"
    }
  ];

  constructor() {
    console.log("Initiating angular AppComponent Class");
    setTimeout(() => {
      this.disabledNewMessage = !this.disabledNewMessage;
    }, 2000);
  }

  onSendMessage() {
    let message = {
      sender: "Michael",
      message: "New message from Michael"
    }
    this.messages.push(message);
  }

  

}
