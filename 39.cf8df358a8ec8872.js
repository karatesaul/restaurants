"use strict";(self.webpackChunkrestaurants=self.webpackChunkrestaurants||[]).push([[39],{39:(N,f,n)=>{n.r(f),n.d(f,{default:()=>A});var g=n(177),u=n(5351),v=n(8359),C=n(5558),j=n(983),t=n(1808),i=n(9417),d=n(4518),R=n(8834),m=n(6471),h=n(882),F=n(1801),T=n(9631),D=n(5416),y=n(8141),E=n(1719),S=n(6600);const b=["tagsInput"];function G(o,l){if(1&o){const r=t.RV6();t.j41(0,"mat-chip-row",13),t.bIt("removed",function(){const a=t.eBV(r).$implicit,s=t.XpG();return t.Njj(s.remove(a))}),t.EFF(1),t.j41(2,"button",14)(3,"mat-icon"),t.EFF(4,"cancel"),t.k0s()()()}if(2&o){const r=l.$implicit;t.R7$(),t.SpI(" ",r.value," ")}}function $(o,l){if(1&o&&(t.j41(0,"mat-option",15),t.EFF(1),t.k0s()),2&o){const r=l.$implicit;t.Y8G("value",r.id),t.R7$(),t.SpI(" ",r.value," ")}}let U=(()=>{var o;class l{constructor(e,a){this.matSnackBar=e,this.tagsService=a,this.sub=new v.yU,this.existingTags=(0,t.vPA)([]),this.filteredTags=(0,t.EWP)(()=>this.filterTags()),this.filterValue=(0,t.vPA)(""),this.name=new i.MJ,this.tags=[],this.tagsCtrl=new i.MJ,this.form=new i.gE({name:this.name,tags:this.tagsCtrl})}ngOnInit(){this.sub.add(this.tagsService.list().subscribe(e=>this.existingTags.set(e))),this.sub.add(this.tagsCtrl.valueChanges.subscribe(e=>this.filterValue.set(e)))}ngOnDestroy(){this.sub.unsubscribe()}add(e){const a=(e.value||"").trim();a&&this.sub.add(this.tagsService.create({value:a}).pipe((0,y.M)(()=>{this.matSnackBar.open(`Created new tag with name "${a}"`,void 0,{duration:3e3})}),(0,C.n)(s=>this.tagsService.read(s))).subscribe(s=>{if(!s)throw new Error("Error reading new tag");this.tags.push(s)})),e.chipInput.clear(),this.tagsCtrl.setValue(null)}filterTags(){return this.existingTags().filter(e=>e.value.includes(this.filterValue()))}getRestaurantPayload(){return{...this.form.value,tags:this.tags.map(e=>e.id)}}remove(e){const a=this.tags.indexOf(e);a>=0&&this.tags.splice(a,1)}selected(e){const a=this.existingTags().find(s=>s.id===e.option.value);if(!a)throw new Error("Tag not found");this.tags.push(a),this.tagsInput.nativeElement.value="",this.tagsCtrl.setValue(null)}}return(o=l).\u0275fac=function(e){return new(e||o)(t.rXU(D.UG),t.rXU(E.A))},o.\u0275cmp=t.VBU({type:o,selectors:[["create-restaurant-dialog"]],viewQuery:function(e,a){if(1&e&&t.GBs(b,5),2&e){let s;t.mGM(s=t.lsd())&&(a.tagsInput=s.first)}},standalone:!0,features:[t.aNF],decls:22,vars:8,consts:[["chipGrid",""],["tagsInput",""],["auto","matAutocomplete"],[3,"formGroup"],["mat-dialog-title",""],[1,"form-layout-field"],["matInput","",3,"formControl"],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New Tags...",3,"matChipInputTokenEnd","formControl","matChipInputFor","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-flat-button","","color","primary","type","submit",3,"mat-dialog-close"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(e,a){if(1&e){const s=t.RV6();t.j41(0,"form",3)(1,"h1",4),t.EFF(2,"Add Restaurant"),t.k0s(),t.j41(3,"mat-dialog-content")(4,"mat-form-field",5)(5,"mat-label"),t.EFF(6,"Name"),t.k0s(),t.nrm(7,"input",6),t.k0s(),t.j41(8,"mat-form-field",5)(9,"mat-label"),t.EFF(10,"Tags"),t.k0s(),t.j41(11,"mat-chip-grid",null,0),t.DNE(13,G,5,1,"mat-chip-row",7),t.k0s(),t.j41(14,"input",8,1),t.bIt("matChipInputTokenEnd",function(p){return t.eBV(s),t.Njj(a.add(p))}),t.k0s(),t.j41(16,"mat-autocomplete",9,2),t.bIt("optionSelected",function(p){return t.eBV(s),t.Njj(a.selected(p))}),t.DNE(18,$,2,2,"mat-option",10),t.k0s()()(),t.j41(19,"mat-dialog-actions",11)(20,"button",12),t.EFF(21," Add "),t.k0s()()()}if(2&e){const s=t.sdS(12),c=t.sdS(17);t.Y8G("formGroup",a.form),t.R7$(7),t.Y8G("formControl",a.name),t.R7$(6),t.Y8G("ngForOf",a.tags),t.R7$(),t.Y8G("formControl",a.tagsCtrl)("matChipInputFor",s)("matAutocomplete",c),t.R7$(4),t.Y8G("ngForOf",a.filteredTags()),t.R7$(2),t.Y8G("mat-dialog-close",a.getRestaurantPayload())}},dependencies:[g.MD,g.Sq,d.jL,d.$3,S.wT,d.pN,R.Hl,R.$z,m.YN,m.HW,m.D7,m.Zv,m.jH,u.hM,u.tx,u.BI,u.E7,u.Yi,h.RG,h.rl,h.nJ,F.m_,F.An,T.fS,T.fg,D._T,i.X1,i.qT,i.me,i.BC,i.cb,i.l_,i.j4],styles:[".form-layout-field[_ngcontent-%COMP%]{display:flex}"]}),l})();var V=n(6777),I=n(7062);let A=(()=>{var o;class l{constructor(e,a,s,c,p){this.matDialog=e,this.restaurantService=a,this.route=s,this.router=c,this.zone=p,this.sub=new v.yU}ngOnInit(){this.sub.add(this.matDialog.open(U,{minWidth:500}).afterClosed().pipe((0,C.n)(e=>e?this.restaurantService.create(e):j.w)).subscribe({complete:()=>this.zone.run(()=>this.router.navigate([".."],{relativeTo:this.route}))}))}ngOnDestroy(){this.sub.unsubscribe()}}return(o=l).\u0275fac=function(e){return new(e||o)(t.rXU(u.bZ),t.rXU(V.A),t.rXU(I.nX),t.rXU(I.Ix),t.rXU(t.SKi))},o.\u0275cmp=t.VBU({type:o,selectors:[["create-restaurant"]],standalone:!0,features:[t.aNF],decls:0,vars:0,template:function(e,a){},dependencies:[g.MD,u.hM],encapsulation:2}),l})()}}]);