(window.webpackJsonpEnvertronics=window.webpackJsonpEnvertronics||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/navDown.472abf0f.svg"},23:function(e,t,a){e.exports=a.p+"static/media/logo.aaaf1dee.svg"},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),s=(a(29),a(1)),l=a(2),c=a(4),h=a(3),m=a(5),u=a(20),d=a.n(u),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).props.subtitle?a.subtitle=a.props.subtitle:a.subtitle=!1,a.intervalX=!1,a.intervalY=!1,a.state={index:0,subtitle:a.subtitle[0]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"frontPage",id:"frontPage",ref:"frontPage"},o.a.createElement("h1",null," ",this.props.title," "),o.a.createElement("h2",null," ",this.props.title2," "),this.state.subtitle&&o.a.createElement("h2",{ref:"subtitle",id:"subtitle"}," ",this.state.subtitle," "),this.props.children,!this.props.noNavDown&&o.a.createElement("img",{src:d.a,alt:"Navigation Down",id:"navDown",onClick:function(){return window.scrollTo({top:e.refs.frontPage.clientHeight,behavior:"smooth"})}}),o.a.createElement("div",{ref:"bg",id:"bg"}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({subtitle:e.subtitle[this.state.index]}),e.intervalX=setInterval((function(){return e.moveBackground(e)}),5e3),e.intervalY=setInterval((function(){return e.changeSubtitle(e)}),e.props.time)}},{key:"moveBackground",value:function(e){var t=e.refs.bg,a=e.random(200,-200),n=e.random(200,-200);t.style.backgroundPosition="".concat(a,"px ").concat(n,"px")}},{key:"changeSubtitle",value:function(e){var t=e.state.index;t===e.subtitle.length-1?t=0:t++,e.setState({index:t,subtitle:e.subtitle[t]})}},{key:"random",value:function(e,t){return Math.floor(Math.random()*(e-t)+t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalX),clearInterval(this.intervalY)}}]),t}(o.a.Component),g=a(10),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={scroll:!1,page:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{ref:"header",className:this.state.scroll?"header headerScroll":"header"},o.a.createElement(g.b,{to:"/vex"},o.a.createElement("h1",{id:"vex"===this.state.page?"selected":null}," Vex ")),o.a.createElement("h1",{className:"teams",id:"teams"===this.state.page?"selected":null}," Teams",o.a.createElement("div",{className:"absolute"},o.a.createElement("div",{className:"teamsDropDown"},o.a.createElement(g.b,{to:"/teams/4549A"}," 4549A ")))),o.a.createElement(g.b,{to:"/"},o.a.createElement("h1",{id:"home"===this.state.page?"selected":null}," Home ")))}},{key:"componentDidMount",value:function(){var e=window.location.href.split("#")[1].split("/")[1];"teams"===e?this.setState({page:"teams"}):"vex"===e?this.setState({page:"vex"}):this.setState({page:"home"})}}]),t}(o.a.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={noImage:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.right?"text right":"text";return o.a.createElement("div",{className:e,style:{backgroundColor:this.props.color}},o.a.createElement("h1",null," ",this.props.title," "),o.a.createElement("p",{style:this.props.fullWidth?{width:"80%"}:null}," ",this.props.body," "),this.props.children,this.props.img&&o.a.createElement("div",{className:"img-contain"},o.a.createElement("img",{src:this.props.img,alt:""})),this.props.right&&o.a.createElement("div",{style:{clear:"both"}}))}}]),t}(o.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.team?"awardContainer awardContain":"awardContain"},o.a.createElement("img",{src:this.props.content.img,alt:this.props.content.name}),o.a.createElement("h2",null," ",this.props.content.name," "),o.a.createElement("p",null," ",this.props.content.body," "),this.props.content.date&&o.a.createElement("p",null," ",this.props.content.date," "),this.props.content.link&&o.a.createElement("a",{className:"button",style:{maxWidth:"55%",padding:"1vmin 2.5vmin 1vmin 2.5vmin"},href:this.props.content.link}," ",this.props.content.linkContent," "))}}]),t}(o.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"awards",style:{backgroundColor:this.props.color}},this.props.children,this.props.content.map((function(t,a){return o.a.createElement(f,{key:a,content:e.props.content[a],team:e.props.team})})))}}]),t}(o.a.Component),y=a(23),E=a.n(y),k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(p,{title:"4549",title2:"Envertronics",subtitle:["Perseverance","Respect","Integrity","Determination","Excellence","P.R.I.D.E"],time:1e3},o.a.createElement("button",{"aria-label":"Learn More",className:"button",onClick:function(){return window.scrollTo({top:document.getElementById("frontPage").clientHeight,behavior:"smooth"})}},"LEARN MORE"),o.a.createElement("img",{id:"logo",src:E.a,alt:"4549 Logo"})),o.a.createElement(w,{color:"#1c1c1c",title:"About Envertronics",body:"Our first season competing in the Vex Robotics Competition was the 2012-2013 game, Sack Attack. Envertronics is now entering its 8th year competing in the competition. Throughout our last 7 seasons, we have won a combined 48 awards. During last season alone, we totaled 19 awards. Thats means 40% of all of our accomplishments are from last year. The VRC Competition, Turning Point was not only the test year for V5, but also our new format. Enver Creek Robotics is now offered as a course within the standard timetable. This allows students to spend more time working on their robot and generally allows for more to get done over less time, as everyone is provided 80 minutes of daily work time from September to January.",fullWidth:!0}),o.a.createElement(w,{title:"About Enver Creek",body:"Enver Creek is a public secondary school located in Surrey, British Columbia, Canada. It opened in 1997 and has adapted the Cougar as its mascot as well as the school colours of Burgundy and Teal. There are currently over 1,400 students attending Enver Creek with about 125 staff members throughout the school. There are many different course branches that students have the choice of going into. On top of the standard Mathematics, Science fields, Social Studies courses and English classes. We have multiple Language courses offered, Physical & Health Education and Career Life Education to provide students a variety of course types. Art, Band, Dance and Drama covering the Fine Arts. Our Applied Skills courses range from Business and Home Economics, Information & Communication Technology and Technology Education. The District has Online and Summer courses available to students at no extra charge. Sports teams such as Soccer, Basketball, Volleyball, Badminton and Ultimate are run throughout the school year. However, there are many more clubs hosted within Enver Creek such as Green Team. Charities, Student Council, Chess Club, Multicultural Club, Life Drawing and last but certainly not least, Robotics.",img:"assets/Enver Creek Logo.png"},o.a.createElement("button",{"aria-label":"Learn More",className:"button"},o.a.createElement("a",{href:"https://www.surreyschools.ca/schools/envercreek/Pages/default.aspx",target:"_blank",rel:"noopener noreferrer"},"ENVER CREEK'S WEBSITE"))),o.a.createElement(v,{content:[{name:"Judges Award",body:"This award was won by 4549A at West Vancouver Secondary.",date:"December 14, 2019",img:"awards/Judges.png"},{name:"Create Award",body:"This award was won by 4549A at Collingwood.",date:"November 16, 2019",img:"awards/Create.png"},{name:"Sportsmanship Award",body:"This award was won by 4549E at Enver Creek Secondary.",date:"October 19, 2019",img:"awards/Sportsmanship.png"},{name:"Inspire Award",body:"This award was won by the former 4549B at Heritage Woods.",date:"Feburary 2, 2019",img:"awards/Inspire.png"},{name:"Top Skills Award",body:"This award was won by the former 4549B at Heritage Woods.",date:"Feburary 2, 2019",img:"awards/Skills.png"},{name:"Excellence Award",body:"This award was won by the former 4549B at BCIT.",date:"Novemeber 3, 2018",img:"awards/Excellence.png"}]},o.a.createElement("h1",{className:"heading",style:{marginLeft:"10%"}}," Awards ")),o.a.createElement(w,{title:"Our Values"},o.a.createElement("h2",null," Perseverance "),o.a.createElement("h2",null," Respect "),o.a.createElement("h2",null," Integrity "),o.a.createElement("h2",null," Determination "),o.a.createElement("h2",null," Excellence ")))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(o.a.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={members:a.props.members,scrollCheck:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"members"},o.a.createElement("div",null,o.a.createElement("h1",{className:"heading"}," Team Members ")),this.state.members.name.map((function(t,a){return o.a.createElement("div",{className:"memberContain"},o.a.createElement("img",{className:"avatar",src:e.state.members.img[a],alt:"",key:a+"img"}),o.a.createElement("div",{className:"textContain"},o.a.createElement("h2",{key:a+"h2"}," ",t," "),o.a.createElement("h3",{key:a+"h3"}," ",e.state.members.roles[a]," "),o.a.createElement("p",{key:a+"p"}," ",e.state.members.description[a]," ")))})),o.a.createElement("div",{style:{clear:"both"}}))}}]),t}(o.a.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={username:a.props.username,bio:!1,pfp:!1,imgData:{img:[!1],captions:[],link:[]},size:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"instagram"},o.a.createElement("div",{className:"container"},o.a.createElement("img",{className:"pfp",src:this.state.pfp,alt:""}),o.a.createElement("a",{className:"follow button",href:"https://www.instagram.com/".concat(this.state.username),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("h2",null," Follow ")),o.a.createElement("h1",{ref:"title"}," ",this.state.username," "),o.a.createElement("p",null," ",this.state.bio," ")),o.a.createElement("div",{className:"feed"},this.state.imgData.img.length?this.state.imgData.img.map((function(t,a){return o.a.createElement("a",{href:"https://www.instagram.com/p/".concat(e.state.imgData.link[a]),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"instaContain",key:a+"contain",style:{width:e.state.size,height:"calc(".concat(e.state.size," + (1.2em * 3))")}},o.a.createElement("img",{src:t,key:a,style:{width:e.state.size,height:e.state.size},className:"images",alt:""}),o.a.createElement("p",null," ",e.state.imgData.captions[a]," ")))})):o.a.createElement("h2",null," There are no images... yet. ")))}},{key:"componentDidMount",value:function(){this.getPost(this.state.username)}},{key:"getPost",value:function(e){var t=this,a="https://www.instagram.com/".concat(e,"/?__a=1");fetch(a).then((function(e){e.json().then((function(e){console.log(e);var a,n,o={img:[],captions:[],link:[]},r=e.graphql.user.edge_owner_to_timeline_media.edges;a=r.length>9?9:r.length;for(var i=0;i<a;i++)try{o.img.push(e.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url),o.captions.push(e.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text),o.link.push(e.graphql.user.edge_owner_to_timeline_media.edges[i].node.shortcode)}catch(s){console.log(s)}2>=a&&(n="100%"),t.setState({username:e.graphql.user.username,bio:e.graphql.user.biography,pfp:e.graphql.user.profile_pic_url_hd,imgData:o,size:n})}))})).catch((function(a){console.log("Fetch Error :-S",a),setTimeout(t.getPost(e),5e3)}))}}]),t}(o.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={name:["Satvik Garg","Jackie Le","Sajan Toor","Huy Ngo","Owen Gill"],img:["4549a/Satvik.jpg","4549a/Jackie.jpg","4549a/Sajan.jpg","4549a/Huy.jpg","4549a/Owen.jpg"],roles:["Programmer / Builder","Builder / Designer","Programmer / Website Designer and Programmer","Builder / Designer","Documenter"],description:["When nothing goes right, go left.","Just wait and see.","Grind, Never Quit.","I'm a simple dude and I do complex things.","You must fail to succeed."]};return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(p,{title:"4549A",title2:"Envertronics",subtitle:e.name,time:2e3},o.a.createElement("button",{"aria-label":"Learn More",className:"button",onClick:function(){return window.scrollTo({top:document.getElementById("frontPage").clientHeight,behavior:"smooth"})}},"LEARN MORE")),o.a.createElement(w,{title:"The Robot",body:"Our Season Goals are to be an independent team, this led us to a Tray-Centered Design. We are prioritizing stacking cubes over placing them in towers based on the philosophy that the towers aren\u2019t actually worth anything, but add to the stacks you have. Despite this, we can stack 9 cubes, and still access 6 out of the 7 towers. Our current project {Project Alpha 2.1}, is broken down into 9 Components and 5 Elements. The Components are the; drive, supports, tray, angler, arms, intakes, anti-tips, tracking wheels, and tech. The 5 Elements are; spacing, release mechanism, rubber banding, materials and resources.The Components make up the robot and complete its functions while the Elements are encompassed throughout the Components and are aspects that need to be considered when creating a design.",img:"4549a/Robot.png"}),o.a.createElement(v,{content:[{name:"Judges Award",body:"This award was won by 4549A at West Vancouver Secondary. We won this award due to our great judges presentation and communicating skills. Judges were impressed by our overall build and programming. They were especially impressed by documentation of code on Github, using version control using Git and commenting the code. We also had a high sportsmanship ranking.",date:"December 14, 2019",img:"awards/Judges.png"},{name:"Create Award",body:"This award was won by 4549A at Collingwood for our overall creativity in all aspects of our bot. The main reason was using tracking wheels which allowed us to use a grid system to quickly make a consistent auto. We also had creative elements in our build and programming aspects such as using torque values from the motors to calculate the number of cubes in the tray.",date:"November 16, 2019",img:"awards/Create.png"}],team:!0},o.a.createElement("h1",{className:"heading",style:{marginLeft:"10%"}}," Awards ")),o.a.createElement(C,{members:e}),o.a.createElement(w,{color:"#1c1c1c",title:"About The Team",body:"4549A is the senior team of the Enver Creek Robotics Program. We are made up of 5 boys from grades 10-12. Sajan is our Web Designer, Programmer, and Documenter; his knowledge of JavaScript, HTML, CSS, and  Python serves as a base for his Vex (C++) programming. Jackie is our Lead Designer, Driver, and Builder; his previous CAD experience led him to his current roles. Huy is our Lead Builder, Designer, and Scout;  he has been building for 4 years originating from the Vex IQ Challenge. Satvik is our Lead Programmer, Builder, and Designer; he has taken multiple engineering-related courses throughout highschool which inspired him to join the program. Owen is our Lead Documenter and Lead Scout; his previous experience with visual arts and interest for drafting led him to take care of the notebook. We have grown together and have become close friends through the Vex Robotics Competition.",fullWidth:!0}),o.a.createElement(T,{username:"4549alpha"}))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(o.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null),o.a.createElement(p,{title:"VEX",title2:"Robotics Competition",subtitle:["Tower Takeover (2020)","Turning Point (2019)","In The Zone (2018)","Starstruck (2017)","Nothing But Net (2016)","Skyrise (2015)","Toss Up (2014)","Sack Attack (2013)","Gateway (2012)","Round Up (2011)","Clean Sweep (2010)","Elevation (2009)","Bridge Battle (2008)"],time:1e3},o.a.createElement("button",{"aria-label":"Learn More",className:"button"},o.a.createElement("a",{href:"https://www.vexrobotics.com/",target:"_blank",rel:"noopener noreferrer"},"VEX's Offical Website"))),o.a.createElement(w,{title:"About Vex",body:"It all began with Tony Norman & Bob Mimlitch from a Greenville, Texas garage. They met when simultaneously mentoring a high school robotics team. Bob & Tony soon discovered that they had similar philosophies on problem solving, they believe that a creative initiative is crucial to success, and that following the past/others is not the way to go. As well as \u201cabove all else, passion will drive quality and bring success.\u201d  They expanded their style of design  into what is now the Vex Robotics Competition as the largest of the three subsidiaries of Innovation First International. Since it\u2019s inaugural season in 2007, there are over 20,000 teams across the three competitions. There\u2019s VexIQ (elementary/middle school level) with over 8,500 teams, Vex Robotics Competition (middle/high school level) with over 11,400 teams and VexU (college/university students level) with over 300 teams. Clearly highschool students take the most liking to Vex and without Tony & Bob, none of this would be possible. Who would\u2019ve thought that an Electrical & Mechanical Engineer would change the lives of thousands of students in over 40 countries.",fullWidth:!0},o.a.createElement("button",{"aria-label":"Learn More",className:"button"},o.a.createElement("a",{href:"https://www.vexrobotics.com/",target:"_blank",rel:"noopener noreferrer"},"About The Competition"))),o.a.createElement(w,{color:"#1c1c1c",title:"Vex Robotics Competition",body:"This is the middle & high school level competition of Vex. Every year there is a new game with new elements to grasp and comprehend in order to come up with the optimal design and associated strategy. Although, there are aspects that remain the same regardless of season some being the field which is always 12ft by 12ft and two teams of two going head to head. Each match begins with a 15second autonomous period, which is when pre-programmed code will run. Secondly, the 1minute and 45second driver control period occurs. This is where the majority of the match takes place, the autonomous is more to give a bonus to the winning team, which, which may push them over the edge and win them a match. Finally, the match is scored after the driver control period is over and the winning alliance is announced shortly. The other way to compete is to participate in the skills challenge. During a skills run, your robot has the entire field to itself and has 1minute to score as many points as possible. Each team can get their robot judged, this provides them an opportunity to get feedback as well as making them eligible for many awards. There is a great base to the Vex Robotics Competition which still leaves room for surprises in each individual game.",img:!1,fullWidth:!0},o.a.createElement("button",{"aria-label":"Learn More",className:"button"},o.a.createElement("a",{href:"https://www.vexrobotics.com/vexedr",target:"_blank",rel:"noopener noreferrer"},"About The Competition"))),o.a.createElement(w,{title:"Tower Takeover",body:"The 2019-2020 Vex Robotics Competition game is Tower Takeover. Each alliance begins the match with 2 pre-loads and must be touching their starting wall. There are 22 cubes of each colour, being green, purple and orange. The alliance that wins the autonomous receives 6 points as well as the 2 purple cubes that can be deployed at any point during the match but have to be deployed touching that alliance\u2019s starting wall. There are 5 neutral towers and 1 tower specific to each alliance for a total of 7 towers. When a cube is in a tower, the point value of that colour cube increases by 1 for all cubes scored in goal zones. Each alliance has 1 large and 1 small goal zone. The large goal zone is encased in the protected zone, this means the opposing alliance cannot descore your cubes. Despite the fluctuating scores throughout the match due to the scoring multipliers, the points are tallied only at the end of the driver control period. Thank you, you are now ready for the greatest 2 minutes in robotics.",img:!1},o.a.createElement("div",{className:"img-contain"},o.a.createElement("iframe",{title:"towerTakeover",width:"800",height:"400",src:"https://www.youtube.com/embed/_JVQOiw_OUU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),o.a.createElement(T,{username:"vexrobotics"}))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(o.a.Component),x=a(11);var S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={time:10,complete:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.complete&&o.a.createElement(x.a,{to:"/"}),o.a.createElement(p,{title:"404",title2:"Let's fix that!",noNavDown:!0},o.a.createElement("p",null," Redirecting you in ",this.state.time," or ",o.a.createElement(g.b,{to:"/"},"click here ")," ")))}},{key:"componentDidMount",value:function(){!function(e){var t=e,a=t.state.time;setInterval((function(){a--,t.setState({time:a}),0===a&&t.callBack()}),1e3)}(this)}},{key:"callBack",value:function(){this.setState({complete:!0})}}]),t}(o.a.Component);a(35),a(36);var N=function(){return o.a.createElement(g.a,null,o.a.createElement("div",{id:"App"},o.a.createElement(x.d,null,o.a.createElement(x.b,{path:["/","/home"],exact:!0,component:k}),o.a.createElement(x.b,{path:"/teams/4549A",component:j}),o.a.createElement(x.b,{path:"/vex",component:O}),o.a.createElement(x.b,{component:S}))))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/4549-Robotics-Website",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/4549-Robotics-Website","/service-worker.js");D?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.b6f3019c.chunk.js.map