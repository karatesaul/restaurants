"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[668],{6668:(A,h,e)=>{e.r(h),e.d(h,{default:()=>T});var d=e(6814),t=e(5879),u=e(2296),r=e(5195),g=e(2557),D=e(1175),i=e(3403),m=e(7394),E=e(9397),c=e(4664),P=e(2096),p=e(3546),v=e(2072),O=e(7841);function M(n,C){if(1&n&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&n){const s=C.$implicit;t.xp6(1),t.hij(" ",s.value," ")}}let T=(()=>{class n{constructor(s,a,l,o,f){this.location=s,this.restaurantService=a,this.route=l,this.router=o,this.tagsService=f,this.sub=new m.w0,this.restaurant=(0,t.tdS)(null),this.tags=(0,t.tdS)([]),this.sub.add(this.route.data.pipe((0,E.b)(_=>this.restaurant.set(_.restaurant)),(0,c.w)(_=>this.tagsService.searchIds(_.restaurant.tags))).subscribe(_=>{this.tags.set(_)}))}ngOnDestroy(){this.sub.unsubscribe()}onDeactivate(){const s=this.location.getState();switch(s.type){case O.L.Delete:this.onDelete(s);break;case O.L.EditTags:this.onEditTags(s)}}onDelete(s){if(!s.delete)return;const a=this.restaurant()?.id;a&&(this.sub.add(this.restaurantService.delete(a).subscribe()),this.router.navigate([".."],{relativeTo:this.route}))}onEditTags(s){this.sub.add(this.restaurantService.update(this.restaurant()?.id,{tags:s.tags?.map(a=>a.id).filter(a=>!!a)}).pipe((0,c.w)(a=>{if(!a)throw this.router.navigate(["search"]),new Error("Restaurant not found.");return(0,P.of)(a)}),(0,E.b)(a=>this.restaurant.set(a)),(0,c.w)(a=>this.tagsService.searchIds(a.tags))).subscribe(a=>this.tags.set(a)))}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(d.Ye),t.Y36(p.Z),t.Y36(i.gz),t.Y36(i.F0),t.Y36(v.Z))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["restaurant"]],standalone:!0,features:[t.jDz],decls:17,vars:2,consts:[[1,"detail-page"],[1,"detail-page-header"],["color","warn","mat-flat-button","","routerLink","delete",1,"detail-page-delete"],[1,"detail-page-tiles"],[1,"detail-page-tile"],["mat-button","","routerLink","edit-tags",1,"detail-page-tile-edit"],[4,"ngFor","ngForOf"],[3,"deactivate"]],template:function(a,l){if(1&a&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"button",2),t._uU(5," Delete "),t.qZA()(),t.TgZ(6,"div",3)(7,"mat-card",4)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Tags"),t.qZA(),t.TgZ(11,"a",5),t._uU(12," Edit "),t.qZA()(),t.TgZ(13,"mat-card-content")(14,"mat-chip-set"),t.YNc(15,M,2,1,"mat-chip",6),t.qZA()()()()(),t.TgZ(16,"router-outlet",7),t.NdJ("deactivate",function(){return l.onDeactivate()}),t.qZA()),2&a){let o;t.xp6(3),t.Oqu(null==(o=l.restaurant())?null:o.name),t.xp6(12),t.Q6J("ngForOf",l.tags())}},dependencies:[d.ez,d.sg,u.ot,u.zs,u.lW,r.QW,r.a8,r.dn,r.dk,r.n5,g.Hi,g.HS,g.J4,D.Ps,i.Bz,i.lC,i.rH],styles:[".detail-page[_ngcontent-%COMP%]{padding:2rem;box-sizing:border-box}.detail-page-header[_ngcontent-%COMP%]{display:flex}.detail-page-delete[_ngcontent-%COMP%]{margin-left:auto}.detail-page-tiles[_ngcontent-%COMP%]{display:flex;gap:2rem}.detail-page-tile[_ngcontent-%COMP%]{width:33%}.detail-page-tile-edit[_ngcontent-%COMP%]{margin-left:auto}"]})}return n})()}}]);