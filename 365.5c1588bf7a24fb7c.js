"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[365],{1365:(f,r,a)=>{a.r(r),a.d(r,{default:()=>d});var u=a(4755),n=a(5580),i=a(1728),t=a(2223);let m=(()=>{class o{constructor(e){this.data=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["delete-dialog"]],standalone:!0,features:[t.jDz],decls:7,vars:4,consts:[["mat-dialog-title",""],["align","end"],["color","primary","mat-flat-button","","type","button",3,"mat-dialog-close"],["color","warn","mat-flat-button","","type","submit",3,"mat-dialog-close"]],template:function(e,l){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"mat-dialog-actions",1)(3,"button",2),t._uU(4," Cancel "),t.qZA(),t.TgZ(5,"button",3),t._uU(6," Delete "),t.qZA()()),2&e&&(t.xp6(1),t.AsE("Are you sure you want to delete ",l.data.type,' "',l.data.name,'"?'),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0))},dependencies:[u.ez,i.ot,i.lW,n.Is,n.ZT,n.uh,n.H8]}),o})();var c=a(4660);let d=(()=>{class o{constructor(e,l,p,g){this.matDialog=e,this.location=l,this.route=p,this.router=g}ngOnInit(){const e=this.location.getState();this.matDialog.open(m,{data:{name:e.name,type:e.type}}).afterClosed().subscribe(l=>{this.router.navigate([".."],{relativeTo:this.route,state:{delete:l}})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.uw),t.Y36(u.Ye),t.Y36(c.gz),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["delete"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,l){},dependencies:[u.ez,n.Is],encapsulation:2}),o})()}}]);