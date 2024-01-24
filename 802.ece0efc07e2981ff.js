"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[802],{3802:(J,f,i)=>{i.r(f),i.d(f,{default:()=>x});var d=i(6814),l=i(7700),v=i(7394),m=i(4664),T=i(2072),t=i(5879),r=i(6223),c=i(6381),C=i(2296),g=i(2557),p=i(9157),Z=i(1175),E=i(2939),I=i(9397),b=i(3680);const A=["tagsInput"];function F(o,h){if(1&o){const s=t.EpF();t.TgZ(0,"mat-chip-row",12),t.NdJ("removed",function(){const n=t.CHM(s).$implicit,u=t.oxw();return t.KtG(u.remove(n))}),t._uU(1),t.TgZ(2,"button",13)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&o){const s=h.$implicit;t.xp6(1),t.hij(" ",s.value," ")}}function S(o,h){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&o){const s=h.$implicit;t.Q6J("value",s.id),t.xp6(1),t.hij(" ",s.value," ")}}let D=(()=>{class o{constructor(s,a,e){this.data=s,this.matSnackbar=a,this.tagsService=e,this.sub=new v.w0,this.existingTags=(0,t.tdS)([]),this.filteredTags=(0,t.Flj)(()=>this.filterTags()),this.filterValue=(0,t.tdS)(""),this.tags=this.data.tags,this.tagsCtrl=new r.NI,this.form=new r.cw([this.tagsCtrl])}ngOnInit(){this.sub.add(this.tagsService.list().subscribe(s=>this.existingTags.set(s))),this.sub.add(this.tagsCtrl.valueChanges.subscribe(s=>this.filterValue.set(s)))}ngOnDestroy(){this.sub.unsubscribe()}add(s){const a=(s.value||"").trim();a&&this.sub.add(this.tagsService.create({value:a}).pipe((0,I.b)(()=>{this.matSnackbar.open(`Created new tag with name "${a}"`,void 0,{duration:3e3})}),(0,m.w)(e=>this.tagsService.read(e))).subscribe(e=>{if(!e)throw new Error("Error reading new tag");this.tags.push(e)})),s.chipInput.clear(),this.tagsCtrl.setValue(null)}filterTags(){return this.existingTags().filter(s=>s.value.includes(this.filterValue()))}remove(s){const a=this.tags.indexOf(s);a>=0&&this.tags.splice(a,1)}selected(s){const a=this.existingTags().find(e=>e.id===s.option.value);if(!a)throw new Error("Tag not found");this.tags.push(a),this.tagsInput.nativeElement.value="",this.tagsCtrl.setValue(null)}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(l.WI),t.Y36(E.ux),t.Y36(T.Z))};static#s=this.\u0275cmp=t.Xpm({type:o,selectors:[["edit-tags-dialog"]],viewQuery:function(a,e){if(1&a&&t.Gf(A,5),2&a){let n;t.iGM(n=t.CRH())&&(e.tagsInput=n.first)}},standalone:!0,features:[t.jDz],decls:18,vars:7,consts:[[3,"formGroup"],["mat-dialog-title",""],[1,"form-layout-field"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","Tags...",3,"formControl","matChipInputFor","matAutocomplete","matChipInputTokenEnd"],["tagsInput",""],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-flat-button","","color","primary","type","submit",3,"mat-dialog-close"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(a,e){if(1&a&&(t.TgZ(0,"form",0)(1,"h1",1),t._uU(2,"Edit Tags"),t.qZA(),t.TgZ(3,"mat-dialog-content")(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"Tags"),t.qZA(),t.TgZ(7,"mat-chip-grid",null,3),t.YNc(9,F,5,1,"mat-chip-row",4),t.qZA(),t.TgZ(10,"input",5,6),t.NdJ("matChipInputTokenEnd",function(u){return e.add(u)}),t.qZA(),t.TgZ(12,"mat-autocomplete",7,8),t.NdJ("optionSelected",function(u){return e.selected(u)}),t.YNc(14,S,2,2,"mat-option",9),t.qZA()()(),t.TgZ(15,"mat-dialog-actions",10)(16,"button",11),t._uU(17," Save "),t.qZA()()()),2&a){const n=t.MAs(8),u=t.MAs(13);t.Q6J("formGroup",e.form),t.xp6(9),t.Q6J("ngForOf",e.tags),t.xp6(1),t.Q6J("formControl",e.tagsCtrl)("matChipInputFor",n)("matAutocomplete",u),t.xp6(4),t.Q6J("ngForOf",e.filteredTags()),t.xp6(2),t.Q6J("mat-dialog-close",e.tags)}},dependencies:[d.ez,d.sg,c.Bb,c.XC,b.ey,c.ZL,C.ot,C.lW,g.Hi,g.RA,g.oH,g.qH,g.z3,l.Is,l.ZT,l.uh,l.xY,l.H8,p.lN,p.KE,p.hX,Z.Ps,Z.Hw,E.ZX,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg],styles:[".form-layout-field[_ngcontent-%COMP%]{display:flex}"]})}return o})();var w=i(7841),y=i(3403);let x=(()=>{class o{constructor(s,a,e,n){this.matDialog=s,this.route=a,this.router=e,this.tagsService=n,this.sub=new v.w0}ngOnInit(){this.sub.add(this.route.data.pipe((0,m.w)(s=>this.tagsService.searchIds(s.restaurant?.tags)),(0,m.w)(s=>this.matDialog.open(D,{data:{tags:s}}).afterClosed())).subscribe(s=>{this.router.navigate([".."],{relativeTo:this.route,state:{type:w.L.EditTags,tags:s}})}))}ngOnDestroy(){this.sub.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||o)(t.Y36(l.uw),t.Y36(y.gz),t.Y36(y.F0),t.Y36(T.Z))};static#s=this.\u0275cmp=t.Xpm({type:o,selectors:[["edit-tags"]],standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(a,e){},dependencies:[d.ez,l.Is],encapsulation:2})}return o})()}}]);