import { Component, OnInit , Input, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  
  @Input() selectedUser:any;
  @Output() updateList = new EventEmitter<any>();
  constructor() {
   
  } 
    ngOnInit(): void {
      
     
  }

  public data: any = {}
ngOnChanges(changes: SimpleChanges) {
  console.log('OnChanges',changes);
  console.log(JSON.stringify(changes));

  for (let propName in changes) {
       let change = changes[propName];
       this.data[propName] = change.currentValue
  }

  console.log('my data', this.data)
}

  update(fname,lname,emailname){
    this.selectedUser.first_name=fname.value;
    this.selectedUser.last_name=lname.value;
    this.selectedUser.email=emailname.value;
  }
  
}


