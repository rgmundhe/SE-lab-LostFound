import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lost-item',
  templateUrl: './lost-item.component.html',
  styleUrls: ['./lost-item.component.css']
})
export class LostItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemname: String = ""
  description: String = ""
  question: String = ""
  answer: String=""
  type: String = ""
  url: String = ""

  lost_item() {
    fetch("http://localhost:3002/lost", {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify(
        {
          "itemname": this.itemname,
          "description": this.description,
          "question": this.question,
          "answer":this.question,
          "type": this.type,
          "url": this.url
        }

      )
    }).then((res) => res.json())
      .then(data => {
        console.log(data)
        if (data.status == "OK") {
          alert('Information is succesfully saved !')
          this.itemname = ""
          this.description = ""
          this.question = ""
          this.answer=""
          this.type = ""
          this.url = ""
        }
        else{
          alert('Information not inserted !')
        }

      })
  }
}
