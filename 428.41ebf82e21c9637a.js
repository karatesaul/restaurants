"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[428],{8428:(J,h,e)=>{e.r(h),e.d(h,{default:()=>w});var d=e(4755),g=e(5580),f=e(727),m=e(3900),v=e(561),t=e(2223),r=e(9401),c=e(9544),T=e(1728),u=e(6996),p=e(9114),C=e(9560),E=e(2342),y=e(8505),I=e(1217);const b=["tagsInput"];function D(o,n){if(1&o){const s=t.EpF();t.TgZ(0,"mat-chip-row",12),t.NdJ("removed",function(){const l=t.CHM(s).$implicit,x=t.oxw();return t.KtG(x.remove(l))}),t._uU(1),t.TgZ(2,"button",13)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&o){const s=n.$implicit;t.xp6(1),t.hij(" ",s.value," ")}}function A(o,n){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&o){const s=n.$implicit;t.Q6J("value",s.id),t.xp6(1),t.hij(" ",s.value," ")}}let F=(()=>{class o{constructor(s,a,i){this.data=s,this.matSnackbar=a,this.tagsService=i,this.sub=new f.w0,this.existingTags=(0,t.tdS)([]),this.filteredTags=(0,t.Flj)(()=>this.filterTags()),this.filterValue=(0,t.tdS)(""),this.tags=this.data.tags,this.tagsCtrl=new r.NI,this.form=new r.cw([this.tagsCtrl])}ngOnInit(){this.sub.add(this.tagsService.list().subscribe(s=>this.existingTags.set(s))),this.sub.add(this.tagsCtrl.valueChanges.subscribe(s=>this.filterValue.set(s)))}ngOnDestroy(){this.sub.unsubscribe()}add(s){const a=(s.value||"").trim();a&&this.sub.add(this.tagsService.create({value:a}).pipe((0,y.b)(()=>{this.matSnackbar.open(`Created new tag with name "${a}"`,void 0,{duration:3e3})}),(0,m.w)(i=>this.tagsService.read(i))).subscribe(i=>{if(!i)throw new Error("Error reading new tag");this.tags.push(i)})),s.chipInput.clear(),this.tagsCtrl.setValue(null)}filterTags(){return this.existingTags().filter(s=>s.value.includes(this.filterValue()))}remove(s){const a=this.tags.indexOf(s);a>=0&&this.tags.splice(a,1)}selected(s){const a=this.existingTags().find(i=>i.id===s.option.value);if(!a)throw new Error("Tag not found");this.tags.push(a),this.tagsInput.nativeElement.value="",this.tagsCtrl.setValue(null)}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(g.WI),t.Y36(E.ux),t.Y36(v.Z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["edit-tags-dialog"]],viewQuery:function(s,a){if(1&s&&t.Gf(b,5),2&s){let i;t.iGM(i=t.CRH())&&(a.tagsInput=i.first)}},standalone:!0,features:[t.jDz],decls:18,vars:7,consts:[[3,"formGroup"],["mat-dialog-title",""],[1,"form-layout-field"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","Tags...",3,"formControl","matChipInputFor","matAutocomplete","matChipInputTokenEnd"],["tagsInput",""],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-flat-button","","color","primary","type","submit",3,"mat-dialog-close"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(s,a){if(1&s&&(t.TgZ(0,"form",0)(1,"h1",1),t._uU(2,"Edit Tags"),t.qZA(),t.TgZ(3,"mat-dialog-content")(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"Tags"),t.qZA(),t.TgZ(7,"mat-chip-grid",null,3),t.YNc(9,D,5,1,"mat-chip-row",4),t.qZA(),t.TgZ(10,"input",5,6),t.NdJ("matChipInputTokenEnd",function(l){return a.add(l)}),t.qZA(),t.TgZ(12,"mat-autocomplete",7,8),t.NdJ("optionSelected",function(l){return a.selected(l)}),t.YNc(14,A,2,2,"mat-option",9),t.qZA()()(),t.TgZ(15,"mat-dialog-actions",10)(16,"button",11),t._uU(17," Save "),t.qZA()()()),2&s){const i=t.MAs(8),l=t.MAs(13);t.Q6J("formGroup",a.form),t.xp6(9),t.Q6J("ngForOf",a.tags),t.xp6(1),t.Q6J("formControl",a.tagsCtrl)("matChipInputFor",i)("matAutocomplete",l),t.xp6(4),t.Q6J("ngForOf",a.filteredTags()),t.xp6(2),t.Q6J("mat-dialog-close",a.tags)}},dependencies:[d.ez,d.sg,c.Bb,c.XC,I.ey,c.ZL,T.ot,T.lW,u.Hi,u.RA,u.oH,u.qH,u.z3,g.Is,g.ZT,g.uh,g.xY,g.H8,p.lN,p.KE,p.hX,C.Ps,C.Hw,E.ZX,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg],styles:[".form-layout-field[_ngcontent-%COMP%]{display:flex}"]}),o})();var S=e(5043),Z=e(4660);let w=(()=>{class o{constructor(s,a,i,l){this.matDialog=s,this.route=a,this.router=i,this.tagsService=l,this.sub=new f.w0}ngOnInit(){this.sub.add(this.route.data.pipe((0,m.w)(s=>this.tagsService.searchIds(s.restaurant?.tags)),(0,m.w)(s=>this.matDialog.open(F,{data:{tags:s}}).afterClosed())).subscribe(s=>{this.router.navigate([".."],{relativeTo:this.route,state:{type:S.L.EditTags,tags:s}})}))}ngOnDestroy(){this.sub.unsubscribe()}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(g.uw),t.Y36(Z.gz),t.Y36(Z.F0),t.Y36(v.Z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["edit-tags"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(s,a){},dependencies:[d.ez,g.Is],encapsulation:2}),o})()}}]);