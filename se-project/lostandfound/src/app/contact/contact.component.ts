import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname: String=""
  lastname:String="" 
  country: String=""
  subject:String=""

  contact_info() {
    fetch("http://localhost:3002/contact", {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify(
        {
          "firstname": this.firstname,
          "lastname": this.lastname,
          
          "country": this.country,
          "subject": this.subject
        }

      )
    }).then((res) => res.json())
      .then(data => {
        console.log(data)
        if (data.status == "OK") {
          alert('Information is succesfully saved !')
          this.firstname = ""
          this.lastname = ""
          this.country = ""
          this.subject = ""
        }
        else{
          alert('Information not inserted !')
        }

      })
  }

}
