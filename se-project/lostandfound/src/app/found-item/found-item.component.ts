import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-found-item',
  templateUrl: './found-item.component.html',
  styleUrls: ['./found-item.component.css']
})
export class FoundItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemname: String=""
  property:String="" 
  type: String=""
  url:String="" 

  found_item() {
    fetch("http://localhost:3002/found", {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify(
        {
          "itemname": this.itemname,
          "property": this.property,
          
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
          this.property = ""
          this.type = ""
          this.url = ""
        }
        else{
          alert('Information not inserted !')
        }

      })
  }

}
