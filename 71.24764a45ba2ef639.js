"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[71],{8071:(O,l,a)=>{a.r(l),a.d(l,{default:()=>p});var o=a(4755),t=a(2223),r=a(6012),i=a(6996),g=a(8505),c=a(3900),d=a(561),m=a(4660);function E(n,u){if(1&n&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&n){const s=u.$implicit;t.xp6(1),t.hij(" ",s.value," ")}}let p=(()=>{class n{constructor(s,_){this.route=s,this.tagsService=_,this.restaurant=(0,t.tdS)(null),this.tags=(0,t.tdS)([]),this.route.data.pipe((0,g.b)(e=>this.restaurant.set(e.restaurant)),(0,c.w)(e=>this.tagsService.searchIds(e.restaurant.tags))).subscribe(e=>{this.tags.set(e)})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(m.gz),t.Y36(d.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["restaurant"]],standalone:!0,features:[t.jDz],decls:11,vars:2,consts:[[1,"restaurant-page"],[1,"restaurant-tiles"],[1,"restaurant-tile"],[4,"ngFor","ngForOf"]],template:function(s,_){if(1&s&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"div",1)(4,"mat-card",2)(5,"mat-card-header")(6,"mat-card-title"),t._uU(7,"Tags"),t.qZA()(),t.TgZ(8,"mat-card-content")(9,"mat-chip-set"),t.YNc(10,E,2,1,"mat-chip",3),t.qZA()()()()()),2&s){let e;t.xp6(2),t.Oqu(null==(e=_.restaurant())?null:e.name),t.xp6(8),t.Q6J("ngForOf",_.tags())}},dependencies:[o.ez,o.sg,r.QW,r.a8,r.dn,r.dk,r.n5,i.Hi,i.HS,i.J4],styles:[".restaurant-page[_ngcontent-%COMP%]{padding:2rem;box-sizing:border-box}.restaurant-tiles[_ngcontent-%COMP%]{display:flex;gap:2rem}.restaurant-tile[_ngcontent-%COMP%]{width:33%}"]}),n})()}}]);