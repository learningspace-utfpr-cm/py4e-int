(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[632],{2568:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(21294);class s{constructor(t){this.component_ready_promise=new Promise((t=>this._component_ready_resolve_fn=t)),this.optional=!1,void 0===window.allComponents&&(window.allComponents=[]),window.allComponents.push(this),t&&(this.sid=t.sid,this.graderactive=t.graderactive,this.showfeedback=!0,t.timed&&(this.isTimed=!0),t.enforceDeadline&&(this.deadline=t.deadline),$(t.orig).data("optional")?this.optional=!0:this.optional=!1,t.selector_id&&(this.selector_id=t.selector_id),void 0!==t.assessmentTaken?this.assessmentTaken=t.assessmentTaken:this.assessmentTaken=!0,void 0!==t.timedWrapper?this.timedWrapper=t.timedWrapper:location.href.indexOf("doAssignment")>=0?this.timedWrapper=$("h1#assignment_name").text():this.timedWrapper=null,$(t.orig).data("question_label")&&(this.question_label=$(t.orig).data("question_label"))),this.jsonHeaders=new Headers({"Content-type":"application/json; charset=utf-8",Accept:"application/json"})}async logBookEvent(t){if(this.graderactive)return;let e;return t.course=eBookConfig.course,t.clientLoginStatus=eBookConfig.isLoggedIn,t.timezoneoffset=(new Date).getTimezoneOffset()/60,this.percent&&(t.percent=this.percent),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0&&(e=this.postLogMessage(t)),this.isTimed&&!eBookConfig.debug||console.log("logging event "+JSON.stringify(t)),this.selector_id&&(t.div_id=this.selector_id.replace("-toggleSelectedQuestion",""),t.event="selectquestion",t.act="interaction",this.postLogMessage(t)),"function"==typeof o.j.updateProgress&&"edit"!=t.act&&0==this.optional&&o.j.updateProgress(t.div_id),e}async postLogMessage(t){var e;let i=new Request(eBookConfig.ajaxURL+"hsblog",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(t)});try{let t=await fetch(i);if(!t.ok)throw new Error("Failed to save the log entry");e=t.json()}catch(t){this.isTimed&&alert(`Error: Your action was not saved! The error was ${t}`),console.log(`Error: ${t}`)}return e}async logRunEvent(t){let e="done";if(!this.graderactive){if(t.course=eBookConfig.course,t.clientLoginStatus=eBookConfig.isLoggedIn,t.timezoneoffset=(new Date).getTimezoneOffset()/60,(this.forceSave||"to_save"in t==0)&&(t.save_code="True"),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0){let i=new Request(eBookConfig.ajaxURL+"runlog.json",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(t)}),o=await fetch(i);if(!o.ok)throw new Error("Failed to log the run");e=await o.json()}return this.isTimed&&!eBookConfig.debug||console.log("running "+JSON.stringify(t)),"function"==typeof o.j.updateProgress&&0==this.optional&&o.j.updateProgress(t.div_id),e}}async checkServer(t,e=!1){let i=this;if(this.checkServerComplete=new Promise((function(t,e){i.csresolver=t})),this.useRunestoneServices||this.graderactive){let e={};if(e.div_id=this.divid,e.course=eBookConfig.course,e.event=t,this.graderactive&&this.deadline&&(e.deadline=this.deadline,e.rawdeadline=this.rawdeadline,e.tzoff=this.tzoff),this.sid&&(e.sid=this.sid),!eBookConfig.practice_mode&&this.assessmentTaken){let t=new Request(eBookConfig.ajaxURL+"getAssessResults",{method:"POST",body:JSON.stringify(e),headers:this.jsonHeaders});try{let i=await fetch(t);e=await i.json(),this.repopulateFromStorage(e),this.csresolver("server")}catch(t){try{this.checkLocalStorage()}catch(t){console.log(t)}}}else this.loadData({}),this.csresolver("not taken")}else this.checkLocalStorage(),this.csresolver("local");e&&this.indicate_component_ready()}indicate_component_ready(){this.containerDiv.classList.add("runestone-component-ready"),this._component_ready_resolve_fn()}loadData(t){return null}repopulateFromStorage(t){null!==t&&this.shouldUseServer(t)?(this.restoreAnswers(t),this.setLocalStorage(t)):this.checkLocalStorage()}shouldUseServer(t){if("T"===t.correct||0===localStorage.length||!0===this.graderactive||this.isTimed)return!0;let e,i=localStorage.getItem(this.localStorageKey());if(null===i)return!0;try{e=JSON.parse(i)}catch(t){return console.log(t.message),localStorage.removeItem(this.localStorageKey()),!0}if(t.answer==e.answer)return!0;let o=new Date(e.timestamp);return new Date(t.timestamp)>=o}localStorageKey(){return eBookConfig.email+":"+eBookConfig.course+":"+this.divid+"-given"}addCaption(t){if(!this.isTimed){var e=document.createElement("p");this.question_label?(this.caption=`Activity: ${this.question_label} ${this.caption}  <span class="runestone_caption_divid">(${this.divid})</span>`,$(e).html(this.caption),$(e).addClass(`${t}_caption`)):($(e).html(this.caption+" ("+this.divid+")"),$(e).addClass(`${t}_caption`),$(e).addClass(`${t}_caption_text`)),this.capDiv=e,this.containerDiv.appendChild(e)}}hasUserActivity(){return this.isAnswered}checkCurrentAnswer(){console.log("Each component should provide an implementation of checkCurrentAnswer")}async logCurrentAnswer(){console.log("Each component should provide an implementation of logCurrentAnswer")}renderFeedback(){console.log("Each component should provide an implementation of renderFeedback")}disableInteraction(){console.log("Each component should provide an implementation of disableInteraction")}toString(){return`${this.constructor.name}: ${this.divid}`}queueMathJax(t){"2"===MathJax.version.substring(0,1)?MathJax.Hub.Queue(["Typeset",MathJax.Hub,t]):MathJax.typesetPromise([t])}}window.RunestoneBase=s},12632:(t,e,i)=>{"use strict";i.r(e);var o=i(2568),s={};class a extends o.Z{constructor(t){super(t);var e=t.orig;this.origElem=e,this.divid=e.id,this.dataModal=!1,$(this.origElem).is("[data-modal]")&&(this.dataModal=!0),$(this.origElem).is("[data-instructoronly]")?this.instructorOnly=!0:this.instructorOnly=!1,this.modalTitle=null,this.showtitle=null,this.hidetitle=null,this.origContent=$(this.origElem).html(),this.children=[],this.adoptChildren(),this.checkForTitle(),this.getButtonTitles(),this.instructorOnly||(this.createShowButton(),this.dataModal||this.createHideButton()),this.indicate_component_ready()}adoptChildren(){for(var t=0;t<this.origElem.childNodes.length;t++)this.children.push(this.origElem.childNodes[t])}getButtonTitles(){this.showtitle=$(this.origElem).data("showtitle"),void 0===this.showtitle&&(this.showtitle="Show"),this.instructorOnly&&(this.showtitle+=" IG"),this.hidetitle=$(this.origElem).data("hidetitle"),void 0===this.hidetitle&&(this.hidetitle="Hide")}checkForTitle(){this.modalTitle=$(this.origElem).data("title"),void 0===this.modalTitle&&(this.modalTitle="Message from the author")}createShowButton(){var t=this;if(this.containerDiv=document.createElement("div"),this.containerDiv.id=this.divid,!this.dataModal){this.revealDiv=document.createElement("div");for(var e=0;e<this.children.length;e++)this.revealDiv.appendChild(this.children[e]);$(this.revealDiv).hide(),this.containerDiv.appendChild(this.revealDiv)}this.instructorOnly&&$(this.revealDiv).addClass("iguide"),this.sbutt=document.createElement("button"),$(this.sbutt).addClass("btn reveal_button"),this.instructorOnly?$(this.sbutt).addClass("btn-info"):$(this.sbutt).addClass("btn-default"),$(this.sbutt).css("margin-bottom","10px"),this.sbutt.textContent=this.showtitle,this.sbutt.id=this.divid+"_show",this.dataModal?(this.createModal(),$(this.sbutt).attr({"data-toggle":"modal","data-target":"#"+this.divid+"_modal"})):this.sbutt.onclick=function(){t.showInline(),$(this).hide()},this.containerDiv.appendChild(this.sbutt),$(this.origElem).replaceWith(this.containerDiv)}createHideButton(){var t=this;this.hbutt=document.createElement("button"),$(this.hbutt).hide(),this.hbutt.textContent=this.hidetitle,this.hbutt.className="btn btn-default reveal_button",$(this.hbutt).css("margin-bottom","10px"),this.hbutt.id=this.divid+"_hide",this.hbutt.onclick=function(){t.hideInline(),$(this).hide()},this.containerDiv.appendChild(this.hbutt)}createInstructorButtons(){this.createShowButton(),this.dataModal||this.createHideButton()}createModal(){this.modalContainerDiv=document.createElement("div"),$(this.modalContainerDiv).addClass("modal fade"),this.modalContainerDiv.id=this.divid+"_modal",$(this.modalContainerDiv).attr("role","dialog"),document.body.appendChild(this.modalContainerDiv),this.modalDialogDiv=document.createElement("div"),$(this.modalDialogDiv).addClass("modal-dialog"),this.modalContainerDiv.appendChild(this.modalDialogDiv),this.modalContentDiv=document.createElement("div"),$(this.modalContentDiv).addClass("modal-content"),this.modalDialogDiv.appendChild(this.modalContentDiv),this.modalHeaderDiv=document.createElement("div"),$(this.modalHeaderDiv).addClass("modal-header"),this.modalContentDiv.appendChild(this.modalHeaderDiv),this.modalButton=document.createElement("button"),this.modalButton.type="button",$(this.modalButton).addClass("close"),$(this.modalButton).attr({"aria-hidden":"true","data-dismiss":"modal"}),this.modalButton.innerHTML="&times",this.modalHeaderDiv.appendChild(this.modalButton),this.modalTitleE=document.createElement("h4"),$(this.modalTitleE).addClass("modal-title"),this.modalTitleE.innerHTML=this.modalTitle,this.modalHeaderDiv.appendChild(this.modalTitleE),this.modalBody=document.createElement("div"),$(this.modalBody).addClass("modal-body");for(var t=0;t<this.children.length;t++)this.modalBody.appendChild(this.children[t]);this.modalContentDiv.appendChild(this.modalBody)}showInline(){$(this.revealDiv).show(),$(this.hbutt).show(),$(this.revealDiv).find(".CodeMirror").each((function(t,e){e.CodeMirror.refresh()}))}hideInline(){$(this.revealDiv).hide(),$(this.sbutt).show()}}$(document).bind("runestone:login-complete",(function(){if($("[data-component=reveal]").each((function(t){try{s[this.id]=new a({orig:this})}catch(t){console.log(`Error rendering Reveal ${this.id}`)}})),eBookConfig.isInstructor)for(const t of Object.keys(s))s[t].instructorOnly&&s[t].createInstructorButtons()}))}}]);
//# sourceMappingURL=632.bundle.js.map?v=22405ecd89dd82b1201f