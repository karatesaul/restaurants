"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[215],{3215:(O,h,n)=>{n.r(h),n.d(h,{default:()=>N});var g=n(4755),u=n(5580),f=n(727),C=n(3900),y=n(515),t=n(2223),i=n(9401),c=n(9544),v=n(1728),m=n(6996),p=n(9114),T=n(9560),Z=n(8097),R=n(2342),I=n(8505),D=n(561),F=n(1217);const b=["tagsInput"];function S(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"mat-chip-row",13),t.NdJ("removed",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.remove(l))}),t._uU(1),t.TgZ(2,"button",14)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&s){const e=r.$implicit;t.xp6(1),t.hij(" ",e.value," ")}}function x(s,r){if(1&s&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&s){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.value," ")}}let J=(()=>{class s{constructor(e,a){this.matSnackBar=e,this.tagsService=a,this.sub=new f.w0,this.existingTags=(0,t.tdS)([]),this.filteredTags=(0,t.Flj)(()=>this.filterTags()),this.filterValue=(0,t.tdS)(""),this.name=new i.NI,this.tags=[],this.tagsCtrl=new i.NI,this.form=new i.cw({name:this.name,tags:this.tagsCtrl})}ngOnInit(){this.sub.add(this.tagsService.list().subscribe(e=>this.existingTags.set(e))),this.sub.add(this.tagsCtrl.valueChanges.subscribe(e=>this.filterValue.set(e)))}ngOnDestroy(){this.sub.unsubscribe()}add(e){const a=(e.value||"").trim();a&&this.sub.add(this.tagsService.create({value:a}).pipe((0,I.b)(()=>{this.matSnackBar.open(`Created new tag with name "${a}"`,void 0,{duration:3e3})}),(0,C.w)(o=>this.tagsService.read(o))).subscribe(o=>{if(!o)throw new Error("Error reading new tag");this.tags.push(o)})),e.chipInput.clear(),this.tagsCtrl.setValue(null)}filterTags(){return this.existingTags().filter(e=>e.value.includes(this.filterValue()))}getRestaurantPayload(){return{...this.form.value,tags:this.tags.map(e=>e.id)}}remove(e){const a=this.tags.indexOf(e);a>=0&&this.tags.splice(a,1)}selected(e){const a=this.existingTags().find(o=>o.id===e.option.value);if(!a)throw new Error("Tag not found");this.tags.push(a),this.tagsInput.nativeElement.value="",this.tagsCtrl.setValue(null)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(R.ux),t.Y36(D.Z))},s.\u0275cmp=t.Xpm({type:s,selectors:[["create-restaurant-dialog"]],viewQuery:function(e,a){if(1&e&&t.Gf(b,5),2&e){let o;t.iGM(o=t.CRH())&&(a.tagsInput=o.first)}},standalone:!0,features:[t.jDz],decls:22,vars:8,consts:[[3,"formGroup"],["mat-dialog-title",""],[1,"form-layout-field"],["matInput","",3,"formControl"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New Tags...",3,"formControl","matChipInputFor","matAutocomplete","matChipInputTokenEnd"],["tagsInput",""],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-flat-button","","color","primary","type","submit",3,"mat-dialog-close"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(e,a){if(1&e&&(t.TgZ(0,"form",0)(1,"h1",1),t._uU(2,"Add Restaurant"),t.qZA(),t.TgZ(3,"mat-dialog-content")(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field",2)(9,"mat-label"),t._uU(10,"Tags"),t.qZA(),t.TgZ(11,"mat-chip-grid",null,4),t.YNc(13,S,5,1,"mat-chip-row",5),t.qZA(),t.TgZ(14,"input",6,7),t.NdJ("matChipInputTokenEnd",function(l){return a.add(l)}),t.qZA(),t.TgZ(16,"mat-autocomplete",8,9),t.NdJ("optionSelected",function(l){return a.selected(l)}),t.YNc(18,x,2,2,"mat-option",10),t.qZA()()(),t.TgZ(19,"mat-dialog-actions",11)(20,"button",12),t._uU(21," Add "),t.qZA()()()),2&e){const o=t.MAs(12),l=t.MAs(17);t.Q6J("formGroup",a.form),t.xp6(7),t.Q6J("formControl",a.name),t.xp6(6),t.Q6J("ngForOf",a.tags),t.xp6(1),t.Q6J("formControl",a.tagsCtrl)("matChipInputFor",o)("matAutocomplete",l),t.xp6(4),t.Q6J("ngForOf",a.filteredTags()),t.xp6(2),t.Q6J("mat-dialog-close",a.getRestaurantPayload())}},dependencies:[g.ez,g.sg,c.Bb,c.XC,F.ey,c.ZL,v.ot,v.lW,m.Hi,m.RA,m.oH,m.qH,m.z3,u.Is,u.ZT,u.uh,u.xY,u.H8,p.lN,p.KE,p.hX,T.Ps,T.Hw,Z.c,Z.Nt,R.ZX,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.oH,i.sg],styles:[".form-layout-field[_ngcontent-%COMP%]{display:flex}"]}),s})();var w=n(9755),A=n(4660);let N=(()=>{class s{constructor(e,a,o,l,d){this.matDialog=e,this.restaurantService=a,this.route=o,this.router=l,this.zone=d,this.sub=new f.w0}ngOnInit(){this.sub.add(this.matDialog.open(J,{minWidth:500}).afterClosed().pipe((0,C.w)(e=>e?this.restaurantService.create(e):y.E)).subscribe({complete:()=>this.zone.run(()=>this.router.navigate([".."],{relativeTo:this.route}))}))}ngOnDestroy(){this.sub.unsubscribe()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(u.uw),t.Y36(w.Z),t.Y36(A.gz),t.Y36(A.F0),t.Y36(t.R0b))},s.\u0275cmp=t.Xpm({type:s,selectors:[["create-restaurant"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(e,a){},dependencies:[g.ez,u.Is],encapsulation:2}),s})()}}]);