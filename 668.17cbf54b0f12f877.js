"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[668],{6668:(T,c,a)=>{a.r(c),a.d(c,{default:()=>P});var d=a(6814),t=a(5879),h=a(2296),i=a(5195),g=a(2557),l=a(3403),m=a(7394),E=a(9397),p=a(4664),O=a(3546),v=a(2072);function D(e,C){if(1&e&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&e){const n=C.$implicit;t.xp6(1),t.hij(" ",n.value," ")}}const M=function(e){return{name:e,type:"restaurant"}};let P=(()=>{class e{constructor(n,s,r,u,o){this.location=n,this.restaurantService=s,this.route=r,this.router=u,this.tagsService=o,this.sub=new m.w0,this.restaurant=(0,t.tdS)(null),this.tags=(0,t.tdS)([]),this.sub.add(this.route.data.pipe((0,E.b)(_=>this.restaurant.set(_.restaurant)),(0,p.w)(_=>this.tagsService.searchIds(_.restaurant.tags))).subscribe(_=>{this.tags.set(_)}))}ngOnDestroy(){this.sub.unsubscribe()}onDeactivate(){if(this.location.getState().delete){const n=this.restaurant()?.id;if(!n)return;this.restaurantService.delete(n),this.router.navigate([".."],{relativeTo:this.route})}}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(d.Ye),t.Y36(O.Z),t.Y36(l.gz),t.Y36(l.F0),t.Y36(v.Z))};static#a=this.\u0275cmp=t.Xpm({type:e,selectors:[["restaurant"]],standalone:!0,features:[t.jDz],decls:15,vars:5,consts:[[1,"detail-page"],[1,"detail-page-header"],["color","warn","mat-flat-button","","routerLink","delete",1,"detail-page-delete",3,"state"],[1,"detail-page-tiles"],[1,"detail-page-tile"],[4,"ngFor","ngForOf"],[3,"deactivate"]],template:function(s,r){if(1&s&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"button",2),t._uU(5," Delete "),t.qZA()(),t.TgZ(6,"div",3)(7,"mat-card",4)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Tags"),t.qZA()(),t.TgZ(11,"mat-card-content")(12,"mat-chip-set"),t.YNc(13,D,2,1,"mat-chip",5),t.qZA()()()()(),t.TgZ(14,"router-outlet",6),t.NdJ("deactivate",function(){return r.onDeactivate()}),t.qZA()),2&s){let u,o;t.xp6(3),t.Oqu(null==(u=r.restaurant())?null:u.name),t.xp6(1),t.Q6J("state",t.VKq(3,M,null==(o=r.restaurant())?null:o.name)),t.xp6(9),t.Q6J("ngForOf",r.tags())}},dependencies:[d.ez,d.sg,h.ot,h.lW,i.QW,i.a8,i.dn,i.dk,i.n5,g.Hi,g.HS,g.J4,l.Bz,l.lC,l.rH],styles:[".detail-page[_ngcontent-%COMP%]{padding:2rem;box-sizing:border-box}.detail-page-header[_ngcontent-%COMP%]{display:flex}.detail-page-delete[_ngcontent-%COMP%]{margin-left:auto}.detail-page-tiles[_ngcontent-%COMP%]{display:flex;gap:2rem}.detail-page-tile[_ngcontent-%COMP%]{width:33%}"]})}return e})()}}]);