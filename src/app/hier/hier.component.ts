import { Component, OnInit, ViewChild } from '@angular/core';
import { OnsNavigator,  Params } from 'ngx-onsenui';
import { Globals } from '../globals';
 

@Component({
  selector: 'ons-page[hier]',
  templateUrl: './hier.component.html',
  styleUrls: [ './hier.component.css' ]
})
export class HierComponent implements OnInit {
  displayuser = {}
  selected_role={}
  hier = [];
   hier2 = [];
  hier_array = [];
  max_c = 0;
  @ViewChild('carousel_hier') carousel;
  hier_icons= '[{"level":"Organisation","icon":"building"},{"level":"Country","icon":"globe"},{"level":"Region","icon":"compass"},{"level":"County / Area / Scottish Region / Overseas Branch","icon":"map-marker-alt"},{"level":"District","icon":"map-marked-alt"},{"level":"Group","icon":"users"},{"level":"Section","icon":"user-friends"} ]'

constructor(private navi: OnsNavigator,
             private _params: Params,
              private globals: Globals,) {
  } 

 g2(i) {
  if (i>=0) {
   this.carousel.nativeElement.setActiveIndex(i);
  }
  if (i==-1) {
   this.carousel.nativeElement.prev();
  }
   if (i==-2) {
   this.carousel.nativeElement.next();
  }
  }
is_hier(s,t){
 // debugger;
  if (t!="--- Not Selected ---"&&t!="--- No Items Available ---") { 
  return s.substring(0,31)=='ctl00_workarea_cbo_p1_location_' } else return false
}
  ngOnInit() {
     this.max_c = (window.innerWidth - 75) / 40; 
    this.displayuser=this.globals.compassuser[0];
      if (this._params.data) {this.displayuser=this._params.data.data[0]; this.displayrole=this._params.data.roleid}    
    this.hier=[]
    this.hier_array = JSON.parse(this.hier_icons)
     
document.querySelector('#carousel_hier').addEventListener('postchange', function() {
     if(document.querySelectorAll('.indicators').length>0 ){
     for (var k=0;k<event.carousel.itemCount; k++){ 
     document.querySelectorAll('.indicators')[k].innerHTML = '○';
     }
     document.querySelectorAll('.indicators')[event.activeIndex].innerHTML = '●';
     }
     var elmnt = document.querySelectorAll('.training2')[0].scrollTo({
  top: 0,  left: 0,  behavior: 'auto' })
      
    
       
   })

  }
  
}

