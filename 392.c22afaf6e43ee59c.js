"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[392],{6392:(P,o,n)=>{n.r(o),n.d(o,{default:()=>D});var c=n(4755),t=n(2223),u=n(1728),_=n(6012),l=n(6996),i=n(727),m=n(8505),h=n(3900),d=n(515),E=n(9755),g=n(561);function O(s,r){if(1&s&&(t.TgZ(0,"mat-chip"),t._uU(1),t.qZA()),2&s){const a=r.$implicit;t.xp6(1),t.hij(" ",a.value," ")}}function M(s,r){if(1&s&&(t.TgZ(0,"mat-card",3)(1,"mat-card-header")(2,"h2"),t._uU(3),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"mat-chip-set"),t.YNc(6,O,2,1,"mat-chip",4),t.qZA()()()),2&s){const a=t.oxw();let e;t.xp6(3),t.Oqu(null==(e=a.result())?null:e.name),t.xp6(3),t.Q6J("ngForOf",a.resultTags())}}let D=(()=>{class s{constructor(a,e){this.restaurant=a,this.tags=e,this.sub=new i.w0,this.result=(0,t.tdS)(void 0),this.resultTags=(0,t.tdS)([])}ngOnDestroy(){this.sub.unsubscribe()}randomSearch(){this.sub.add(this.restaurant.randomSearch().pipe((0,m.b)(a=>this.result.set(a)),(0,h.w)(a=>a?this.tags.searchIds(a.tags):d.E)).subscribe(a=>this.resultTags.set(a)))}}return s.\u0275fac=function(a){return new(a||s)(t.Y36(E.Z),t.Y36(g.Z))},s.\u0275cmp=t.Xpm({type:s,selectors:[["search"]],standalone:!0,features:[t.jDz],decls:6,vars:1,consts:[[1,"search"],["color","primary","mat-flat-button","",3,"click"],["class","search-result",4,"ngIf"],[1,"search-result"],[4,"ngFor","ngForOf"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Where should I eat?"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return e.randomSearch()}),t._uU(4," Give Me a Suggestion "),t.qZA(),t.YNc(5,M,7,2,"mat-card",2),t.qZA()),2&a&&(t.xp6(5),t.Q6J("ngIf",e.result()))},dependencies:[c.ez,c.sg,c.O5,u.ot,u.lW,_.QW,_.a8,_.dn,_.dk,l.Hi,l.HS,l.J4],styles:[".search[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:2rem}.search-result[_ngcontent-%COMP%]{margin-top:1.5rem}"]}),s})()}}]);