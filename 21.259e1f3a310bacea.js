"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[21],{3214:(p,o,a)=>{a.r(o),a.d(o,{RestaurantsComponent:()=>C});var l=a(4755),t=a(2223),u=a(1728),s=a(4660),_=a(3172),c=a(3950),m=a(9755);let C=(()=>{class n{constructor(e){this.restaurantService=e,this.columnDefs=[{field:"name"}],this.restaurants=(0,t.tdS)([])}ngOnInit(){this.restaurantService.list().subscribe(e=>this.restaurants.set(e))}onDeactivate(){this.restaurantService.list().subscribe(e=>this.restaurants.set(e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["restaurants"]],standalone:!0,features:[t.jDz],decls:9,vars:5,consts:[[1,"list-page"],[1,"list-page-header"],["mat-flat-button","","color","primary","routerLink","add"],[1,"list-table",3,"ngClass","columnDefs","rowData","gridReady","gridSizeChanged"],[3,"deactivate"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Restaurants"),t.qZA(),t.TgZ(4,"a",2),t._uU(5," Add Restaurant "),t.qZA()(),t.TgZ(6,"ag-grid-angular",3),t.NdJ("gridReady",function(i){return i.api.sizeColumnsToFit()})("gridSizeChanged",function(i){return i.api.sizeColumnsToFit()}),t.ALo(7,"darkTheme"),t.qZA()(),t.TgZ(8,"router-outlet",4),t.NdJ("deactivate",function(){return r.onDeactivate()}),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngClass",t.lcZ(7,3,"ag-theme-alpine"))("columnDefs",r.columnDefs)("rowData",r.restaurants()))},dependencies:[_.sF,_.N8,l.ez,l.mk,c.X,u.ot,u.zs,s.Bz,s.lC,s.rH],styles:[".list-page[_ngcontent-%COMP%]{height:100%;padding:2rem;box-sizing:border-box;display:flex;flex-direction:column}.list-page-header[_ngcontent-%COMP%]{display:flex}.list-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .list-table[_ngcontent-%COMP%]{flex:1}"]}),n})()}}]);