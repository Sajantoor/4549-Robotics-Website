(window["webpackJsonprobotics-website"]=window["webpackJsonprobotics-website"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/VexLogo.5e8322bf.png"},23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),r=a.n(c),s=(a(28),a(1)),u=a(2),l=a(4),o=a(3),m=a(5);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=i.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),g=i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),b=function(e){var t=e.svgRef,a=e.title,n=d(e,["svgRef","title"]);return i.a.createElement("svg",p({width:50,height:50,id:"navDown",fill:"#525252",viewBox:"0 0 24 24",ref:t},n),i.a.createElement("title",null,a),h,g)},v=i.a.forwardRef((function(e,t){return i.a.createElement(b,p({svgRef:t},e))})),f=(a.p,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).props.subtitle?a.subtitle=a.props.subtitle:a.subtitle=!1,a.intervalX=!1,a.intervalY=!1,a.state={index:0,subtitle:a.subtitle[0]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"frontPage",id:"frontPage",ref:"frontPage"},i.a.createElement("h1",null," ",this.props.title," "),i.a.createElement("h2",null," ",this.props.title2," "),this.state.subtitle&&i.a.createElement("h2",{ref:"subtitle",id:"subtitle"}," ",this.state.subtitle," "),this.props.children,!this.props.noNavDown&&i.a.createElement(v,{onClick:function(){return window.scrollTo({top:e.refs.frontPage.clientHeight,behavior:"smooth"})}}),i.a.createElement("div",{ref:"bg",id:"bg"}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({subtitle:e.subtitle[this.state.index]}),e.intervalX=setInterval((function(){return e.moveBackground(e)}),5e3),e.intervalY=setInterval((function(){return e.changeSubtitle(e)}),e.props.time)}},{key:"moveBackground",value:function(e){var t=e.refs.bg,a=e.random(200,-200),n=e.random(200,-200);t.style.backgroundPosition="".concat(a,"px ").concat(n,"px")}},{key:"changeSubtitle",value:function(e){var t=e.state.index;t===e.subtitle.length-1?t=0:t++,e.setState({index:t,subtitle:e.subtitle[t]})}},{key:"random",value:function(e,t){return Math.floor(Math.random()*(e-t)+t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalX),clearInterval(this.intervalY)}}]),t}(i.a.Component)),E=a(7),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={scroll:!1,page:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{ref:"header",className:this.state.scroll?"header headerScroll":"header"},i.a.createElement(E.b,{to:"/vex"},i.a.createElement("h1",{id:"vex"===this.state.page?"selected":null}," Vex ")),i.a.createElement("h1",{className:"teams",id:"teams"===this.state.page?"selected":null}," Teams",i.a.createElement("div",{className:"absolute"},i.a.createElement("div",{className:"teamsDropDown"},i.a.createElement(E.b,{to:"/teams/4549A"}," 4549A ")))),i.a.createElement(E.b,{to:"/"},i.a.createElement("h1",{id:"home"===this.state.page?"selected":null}," Home ")))}},{key:"componentDidMount",value:function(){var e=window.location.href.split("#")[1].split("/")[1];console.log(e),"teams"==e?this.setState({page:"teams"}):"vex"==e?this.setState({page:"vex"}):this.setState({page:"home"})}}]),t}(i.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.right?"text right":"text";return i.a.createElement("div",{className:e,style:{backgroundColor:this.props.color}},i.a.createElement("h1",null," ",this.props.title," "),i.a.createElement("p",null," ",this.props.body," "),i.a.createElement("div",{className:"img-contain"},i.a.createElement("img",{src:this.props.img,alt:""})),this.props.right&&i.a.createElement("div",{style:{clear:"both"}}),this.props.children)}}]),t}(i.a.Component);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var k=i.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:#EC262B;}\n\t.cougar {\n\t\tfill: #767676;\n\t}\n\n"),M=i.a.createElement("g",null,i.a.createElement("linearGradient",{id:"gradient",x2:1,y2:1},i.a.createElement("stop",{offset:"0%",stopColor:"#767676"}),i.a.createElement("stop",{offset:"100%",stopColor:"#112266"})),i.a.createElement("path",{className:"cougar",d:"M1106.17,1130.92c-2.82-57.1-6.11-104.97-6.63-152.87c-0.09-7.98,10.68-17.59,18.49-23.91 c52.24-42.34,105.04-83.99,155.31-132.67c-72.66,15.8-145.32,31.6-223.85,48.68c39.61,69.22,37.85,143.28,42.07,216.7 c1.5,26.1-1.08,40.31-31.91,38.96c-53.23-2.33-106.6-1.28-159.86-3.23c-25.29-0.93-36.65-15.67-29.92-41.28 c12.06-45.87,25.81-91.36,35.67-137.69c2.14-10.03-5.97-28.12-14.85-33.61c-38.05-23.5-77.27-45.55-117.7-64.68 c-79.6-37.64-102.08-107.45-57.22-184.72c23.04-39.69,22.98-39.58-16.5-62.85c-34.05-20.07-67.64-40.97-102.11-60.28 c-8.69-4.87-20.34-7.97-30.04-6.84c-27.44,3.21-32.79,16.94-15.22,38.49c13.5,16.55,28.51,31.99,43.89,46.84 c21.29,20.56,39.82,41.5,36.83,74.45c-0.61,6.75,5.63,19.15,10.95,20.57c28.6,7.63,21.49,24.84,16.59,44.96 c-13.91,57.04-25.45,114.65-38.83,171.83c-8.11,34.67,2.64,61.75,26.07,87.65c22.79,25.19,42.85,53.11,61.68,81.44 c5.18,7.78,1.67,21.34,2.15,32.25c-10.06-3.55-23.24-4.21-29.66-11.13c-31.95-34.5-65.3-68.49-91.48-107.18 c-12.03-17.78-15.01-47.01-11.13-69.12c7.9-44.96,21.78-89.1,36.1-132.61c8.1-24.62,2.93-41.75-13.35-60.94 c-14.6-17.21-23.24-39.38-35.41-58.79c-18.65-29.74-37.34-59.51-57.42-88.29c-14.63-20.97-21.44-42.26-9-65.84 c12.64-23.97,35.53-27.62,60.16-29.08c44.55-2.64,82.19,15.72,115.75,40.61c44.8,33.22,84.74,37.65,136.39,9.21 c35.61-19.61,81.86-26.08,123.61-27.01c85.3-1.89,170.77,3.91,256.17,6.54c0.49,4.34,0.98,8.67,1.47,13.01 c-18.28,3.71-36.52,10.36-54.85,10.61c-72.42,1.01-145.26-4.71-217.2,1.15c-66.36,5.4-127.7,31.85-166.4,90.47 c-15.4,23.33-22.5,52.48-31.17,79.68c-2.44,7.65,0.13,21.67,5.6,25.69c5.32,3.9,17.89,0.31,26.27-2.75 c32.32-11.79,64.25-24.68,98.65-31.05c-14.92,11.78-30.82,22.54-44.55,35.57c-24.9,23.65-23.43,45.51,5.67,61.96 c46.77,26.44,94.81,50.62,146.5,77.97c-3.26-44.47-7.36-89.62-9.66-134.85c-2.34-45.91-4.11-91.92-3.85-137.88 c0.21-36.3,13.86-51.53,50.05-52.29c35.99-0.75,72.11,4.14,110.88,13.36c-18.36,10.54-37.68,19.73-54.79,32.01 c-15.31,10.99-42.37,11.18-43.42,43.75c41.25-21.09,78.69-40.24,121.47-62.12c-7.31,31.82-13.3,57.87-20.06,87.3 c65.1-8.92,125.91-17.25,186.72-25.58c0.95,2.77,1.9,5.53,2.85,8.3c-7.38,3.51-14.45,8.88-22.2,10.21 c-43.17,7.37-86.33,15.71-129.86,19.85c-32.39,3.08-48.85,15.71-45.06,52.77c62.63-8.74,125.23-17.48,187.83-26.21 c1.05,2.79,2.09,5.57,3.14,8.36c-6.07,3.66-11.71,8.92-18.29,10.66c-18.57,4.92-37.39,11.1-56.33,11.97 c-77.53,3.54-136.12,45.05-191.9,92.72c-5.53,4.72-8.93,11.93-9.67,23.46c78.33-81.91,181.31-102.98,284.8-120.19 c1.47-9.82,2.69-16.06,3.25-22.37c0.45-5.06,0.09-10.18,0.09-19.2c-62.77,8.23-123.49,16.2-184.2,24.16 c-0.87-3.94-1.73-7.88-2.6-11.82c57.93-23.89,123.26-19.62,184.68-39.44c0.72-10.34,1.49-21.53,2.51-36.3 c-58.65,6.79-114.44,13.24-174.51,20.19c11.11-40.21,6.41-84.22,55.86-99.64c3.81-1.19,8.33-4.22,9.96-7.62 c38.86-80.82,129.56-98.12,188.05-156.8c-12.05,62.73,3.27,128.28-34.66,187.61c25.85,28.46,6.83,63.88,4.42,97.59 c-4.04,56.46-12.02,112.66-19.18,168.87c-1.29,10.15-3.98,22.13-10.43,29.3C1257.03,966.57,1185.33,1044.43,1106.17,1130.92z  M1345.4,546.87c2.93-27.71,5.51-52.07,8.98-84.93c-34.74,25.22-62.03,45.03-94.59,68.68 C1292.28,536.78,1316.18,541.32,1345.4,546.87z"}),i.a.createElement("path",{className:"cougar",d:"M790.89,1719.62c36.93-34.94,72.41-68.52,107.9-102.1c-0.68-2.77-1.35-5.54-2.03-8.3c-101.94,48.75-205.25,85-323.47,41.48 c59.54-48.31,121.53-80.13,193.96-81.59c51.9-1.05,103.93,8.29,156.01,11.12c27.14,1.47,54.77,1.07,81.72-2.25 c109.95-13.52,216.1-11.35,306.61,65.32c5.4,4.57,10.34,9.69,17.5,16.44c-114.58,40.96-214.66,2.24-313.03-48.96 c-0.99,2.6-1.98,5.21-2.97,7.81c35.29,33.02,70.58,66.05,105.82,99.03c-17.01,28.64-33.95,30.28-50.03,13.03 c-23.99-25.74-45.1-54.14-68.11-80.82c-38.19-44.3-55.13-43.87-94.59-0.08c-24.28,26.93-48.79,53.72-74.45,79.32 C816.82,1743.94,801.81,1743.89,790.89,1719.62z"}),i.a.createElement("path",{className:"cougar",d:"M801.73,1246.71c127.5,40.35,254.25,37.65,381.38-6.95c-12.49,102.19-57.95,150.02-153.99,148.52 c-29.9-0.46-59.81,0.32-89.72,0.67c-59.95,0.71-104.01-28.85-124.59-83.95c-5.9-15.8-11.31-31.78-16.94-47.67 C799.16,1253.79,800.44,1250.25,801.73,1246.71z"}),i.a.createElement("path",{className:"cougar",d:"M416.3,1144.07c111.05,76.08,171.78,177.85,185.04,310.83C492.68,1416.35,395.36,1231.85,416.3,1144.07z"}),i.a.createElement("path",{className:"cougar",d:"M747.51,1533.17c-85.25,70.49-293.17,83.48-362.08,26.53C456.08,1490.92,674.91,1483.86,747.51,1533.17z"}),i.a.createElement("path",{className:"cougar",d:"M1524.08,1577.99c-89.12,51.73-299.33,29.38-357.52-38.01C1236.65,1485.9,1455.62,1509.18,1524.08,1577.99z"}),i.a.createElement("path",{className:"cougar",d:"M1298.73,1365.49c-22.39,92.5-201.7,206.24-298,192.94C1029.56,1467.11,1188.97,1363.9,1298.73,1365.49z"}),i.a.createElement("path",{className:"cougar",d:"M1315.96,1464.76c-1.77-116.38,107-270.19,194.09-302.62C1513.91,1275.53,1415.06,1428.2,1315.96,1464.76z"}),i.a.createElement("path",{className:"cougar",d:"M1352.77,1480.14c76.67-69.91,285.81-93.55,362.72-43.02C1628.63,1510.82,1478.32,1527.4,1352.77,1480.14z"}),i.a.createElement("path",{className:"cougar",d:"M200.55,1412.76c98.27-37.73,281.75-23.73,354.89,51.79C479.43,1513.11,275.27,1491.18,200.55,1412.76z"}),i.a.createElement("path",{className:"cougar",d:"M619.87,1358.8c122.82,7.98,256.01,98.85,288.71,199.36C816.02,1566.63,643.36,1448.65,619.87,1358.8z"}),i.a.createElement("path",{className:"cougar",d:"M539.71,155.05c13.67,121.75-74.8,262.86-181.29,292.48C351.49,369.02,455.67,199.35,539.71,155.05z"}),i.a.createElement("path",{className:"cougar",d:"M1582.46,468.19c-112.71-44.66-196.82-192.89-169.72-294.46C1489.99,207.09,1584.52,372.93,1582.46,468.19z"}),i.a.createElement("path",{className:"cougar",d:"M1737.46,1212.11c-26.86,92.98-188.07,194.49-282.84,180.14C1478.2,1307.27,1621.24,1215.38,1737.46,1212.11z"}),i.a.createElement("path",{className:"cougar",d:"M183.8,1190.9c107.54-3.48,262.88,104.05,273.77,187.69C340.9,1371.87,215.08,1286.39,183.8,1190.9z"}),i.a.createElement("path",{className:"cougar",d:"M1652.01,659.09c-86.43-1.98-222.47-141.81-230.47-236.9C1518.32,435.87,1653.37,574.69,1652.01,659.09z"}),i.a.createElement("path",{className:"cougar",d:"M522.2,406.59c-18.15,101.07-131.76,212.09-238.09,235.06C274.74,564.52,413.58,426.21,522.2,406.59z"}),i.a.createElement("path",{className:"cougar",d:"M174.74,383.67c78.13,77.04,105.81,222.64,61.73,316.26C179.07,664.96,121.16,500.13,174.74,383.67z"}),i.a.createElement("path",{className:"cougar",d:"M1626.02,918.84c42.49,93.47,17.93,235.28-65.71,317.99C1516.01,1154.39,1549.7,987.02,1626.02,918.84z"}),i.a.createElement("path",{className:"cougar",d:"M1877,591.59c25.63,89.34-60.37,236.92-155.84,277.26C1701.53,780.63,1784.63,632.78,1877,591.59z"}),i.a.createElement("path",{className:"cougar",d:"M359.43,1218.64c-76.29-74.61-103.25-240.14-58.4-317.87C381.55,970.92,404.63,1145.9,359.43,1218.64z"}),i.a.createElement("path",{className:"cougar",d:"M1698.09,724.05c-42.64-74.58-10.53-245.29,69.09-312.27C1818.51,499.24,1771.56,652.37,1698.09,724.05z"}),i.a.createElement("path",{className:"cougar",d:"M1682.24,1066.4c-2-115.18,116.97-241.34,193.3-260.61C1890.46,874.37,1792.6,1028.14,1682.24,1066.4z"}),i.a.createElement("path",{className:"cougar",d:"M1621.99,1199.1c25.44-91.76,174.72-199.09,260.09-189.15C1858.52,1100.79,1727.95,1203.24,1621.99,1199.1z"}),i.a.createElement("path",{className:"cougar",d:"M313.38,208.61c55.85,83.38,45.69,243.07-19.07,321.73C247.77,489.59,238.4,282.11,313.38,208.61z"}),i.a.createElement("path",{className:"cougar",d:"M56.32,776.82c94.92,31.29,194.6,173.13,186.1,262.04C155.49,1025.74,57.94,889.54,56.32,776.82z"}),i.a.createElement("path",{className:"cougar",d:"M212.76,844.66C110.75,793.82,40.49,666.57,56.41,563.09C139.54,591.53,220.66,736.04,212.76,844.66z"}),i.a.createElement("path",{className:"cougar",d:"M1645.93,548.07c-64.63-72.58-70.04-239.03-11.73-316.06C1698.88,294.85,1704.98,459.38,1645.93,548.07z"}),i.a.createElement("path",{className:"cougar",d:"M43.17,982.29c97.65-0.53,230.42,98.46,255.26,195.3C213.28,1186.88,68.66,1076.24,43.17,982.29z"}),i.a.createElement("path",{className:"cougar",d:"M370.28,632.04c23.43,86.28-43.32,234.8-124.7,277.47C205.5,837.73,289.75,650.27,370.28,632.04z"}),i.a.createElement("path",{className:"cougar",d:"M1685.19,931.48c-87.24-48.37-139.88-175.84-118.53-282.28C1642.34,671.83,1704.5,818.22,1685.19,931.48z"}),i.a.createElement("path",{className:"cougar",d:"M1174.42,1199.31c21.38,1.25,34.91,2.04,59.94,3.5c-14.62,13.89-22.63,28.2-31.25,28.57 c-49.59,2.18-99.33,1.06-154.52,1.06c35.35-40.06,67.43-77.92,101.61-113.8c6.52-6.84,21.21-7.55,32.27-8.08 c24.02-1.15,48.13-0.35,73.41-0.35c-4.25,36.63-37.6,16.61-56.62,33.69c22.47,0,40.63,0,58.74,0 C1263.41,1209.9,1207.41,1178.09,1174.42,1199.31z"}),i.a.createElement("path",{className:"cougar",d:"M933.63,1239.18c-48.86,0-97.82,1.88-146.55-0.69c-30.61-1.61-60.18-37.45-57.1-63.92c0.5-4.26,7.74-10.15,12.61-10.99 c9.94-1.72,20.39-0.51,26.89-0.51c-10.01-7.9-20.93-16.51-31.86-25.13c14.97-4.33,31.51-14.89,44.55-11.6 c22.79,5.76,44.17,18.81,64.78,31.08c21.84,13,42.57,28.03,62.86,43.38c10.92,8.26,19.93,19.06,29.8,28.72 C937.63,1232.73,935.63,1235.96,933.63,1239.18z"}),i.a.createElement("path",{className:"cougar",d:"M778.49,695.9c30.85-61.49,94.09-102.44,146.14-95.53c0,74.28,0,149.33,0,229.46c-30.11-13.81-59.08-27.09-95.19-43.65 c22.35-16.36,39.62-25.44,51.82-39.06c9.98-11.15,22.56-31.72,18.33-40.88c-5.26-11.39-26.48-20.86-41.07-21.26 C833.63,684.31,808.52,691.34,778.49,695.9z"}),i.a.createElement("path",{className:"cougar",d:"M735.02,917.74c9.96,30.71,35.13,34.42,61.75,33.44c26.61-0.98,46.68,8.26,54.28,34.4c2.58,8.85,0.01,22.09-5.48,29.32 c-3.35,4.41-17.36,3.29-25.55,0.99c-37.74-10.59-75.96-20.37-112.22-34.9c-14.74-5.91-34.8-22.68-35.39-35.31 c-1.99-42.1,3.75-84.56,6.53-126.88c5.78-0.77,11.56-1.54,17.34-2.31c10.93,29.86,21.86,59.71,32.79,89.57 C731.05,909.95,733.03,913.85,735.02,917.74z"}),i.a.createElement("path",{className:"cougar",d:"M687.12,990.8c33.84,7.91,61.17,13.49,88,20.89c15.32,4.23,29.38,13.78,44.81,16.72c21.41,4.08,29.35,14.96,25.24,35.33 c-3.66,18.13-6.52,50.79-12.73,51.52c-25.42,2.98-52-3.73-78.12-7.14c-1.76-0.23-3.79-2.34-4.77-4.09 C730.28,1069.29,711.15,1034.46,687.12,990.8z"}),i.a.createElement("path",{className:"cougar",d:"M1343.72,908.04c-18.46,54.14-36.45,108.45-55.96,162.21c-2.45,6.74-12.63,14.59-19.67,15.04 c-27.36,1.75-54.89,0.71-90.21,0.71c56.24-63.97,108.27-123.14,160.29-182.32C1340.02,905.14,1341.87,906.59,1343.72,908.04z"}),i.a.createElement("path",{className:"st0",d:"M1097.13,954.33c-10.09-26.92-18.51-49.38-28.24-75.36c52.38-11.34,101.41-21.96,150.44-32.58 c1.22,2.53,2.44,5.06,3.67,7.58C1182.62,886.16,1142.24,918.36,1097.13,954.33z"}),i.a.createElement("path",{className:"cougar",d:"M901.47,1140.73c62.47,0,123.74,0,195.37,0c-26.36,28.99-46.02,50.61-69.28,76.18c-3.24-18.04-5.68-31.69-8.5-47.4 C977.58,1167.68,934.24,1174.93,901.47,1140.73z"}),i.a.createElement("path",{className:"cougar",d:"M735.02,917.74c-1.99-3.89-3.97-7.79-5.96-11.68c0.57-12.68-0.39-25.71,2.39-37.88c1.26-5.49,9.91-12.71,15.3-12.79 c4.53-0.07,11.54,8.34,13.42,14.28c13.4,42.29,27.63,46.85,68.68,14.59c2.96,12.7,9.47,24.16,6.43,31.83 c-3.61,9.09-14.4,18.86-23.93,21.42C783.09,945.08,756.81,938.48,735.02,917.74z"})),C=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return i.a.createElement("svg",y({height:600,width:600,id:"logo",x:"0px",y:"0px",viewBox:"0 0 1920 1920",style:{enableBackground:"new 0 0 1920 1920"},xmlSpace:"preserve",ref:t},n),i.a.createElement("title",null,a),k,M)},j=i.a.forwardRef((function(e,t){return i.a.createElement(C,y({svgRef:t},e))})),x=(a.p,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(f,{title:"4549",title2:"Envertronics",subtitle:["Perseverance","Respect","Integrity","Determination","Excellence","P.R.I.D.E"],time:1e3},i.a.createElement("button",{"aria-label":"Learn More",className:"button",onClick:function(){return window.scrollTo({top:document.getElementById("frontPage").clientHeight,behavior:"smooth"})}},"LEARN MORE"),i.a.createElement(j,null)),i.a.createElement(w,{color:"#1c1c1c",title:"About Envertronics",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc.",img:"https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"},i.a.createElement(E.b,{to:"/teams"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"LEARN MORE"))),i.a.createElement(w,{title:"About Enver Creek",body:"Enver Creek is a public secondary school located in Surrey, British Columbia, Canada. It opened in 1997 and has adapted the Cougar as its mascot as well as the school colours of Burgundy and Teal. There are currently over 1,400 students attending Enver Creek with about 125 staff members throughout the school. There are many different course branches that students have the choice of going into. On top of the standard Mathematics, Science fields, Social Studies courses and English classes. We have multiple Language courses offered, Physical & Health Education and Career Life Education to provide students a variety of course types. Art, Band, Dance and Drama covering the Fine Arts. Our Applied Skills courses range from Business and Home Economics, Information & Communication Technology and Technology Education. The District has Online and Summer courses available to students at no extra charge. Sports teams such as Soccer, Basketball, Volleyball, Badminton and Ultimate are run throughout the school year. However, there are many more clubs hosted within Enver Creek such as Green Team. Charities, Student Council, Chess Club, Multicultural Club, Life Drawing and last but certainly not least, Robotics.",img:"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"},i.a.createElement("a",{href:"https://www.surreyschools.ca/schools/envercreek/Pages/default.aspx",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"ENVER CREEK'S WEBSITE"))))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(i.a.Component)),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={members:a.props.members},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"members"},i.a.createElement("h1",null," Team Members "),this.state.members.name.map((function(t,a){return i.a.createElement("div",{className:"memberContain"},i.a.createElement("img",{className:"avatar",src:e.state.members.img[a],alt:"",key:a+"img"}),i.a.createElement("div",{className:"textContain"},i.a.createElement("h2",{key:a+"h2"}," ",t," "),i.a.createElement("h3",{key:a+"h3"}," ",e.state.members.roles[a]," "),i.a.createElement("p",{key:a+"p"}," ",e.state.members.description[a]," ")))})),i.a.createElement("div",{style:{clear:"both"}}))}}]),t}(i.a.Component),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={username:a.props.username,bio:!1,pfp:!1,imgData:{img:[!1],captions:[],link:[]},size:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"instagram"},i.a.createElement("div",{className:"container"},i.a.createElement("img",{className:"pfp",src:this.state.pfp,alt:""}),i.a.createElement("a",{className:"follow button",href:"https://www.instagram.com/".concat(this.state.username),target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h2",null," Follow ")),i.a.createElement("h1",{ref:"title"}," ",this.state.username," "),i.a.createElement("p",null," ",this.state.bio," ")),i.a.createElement("div",{className:"feed"},this.state.imgData.img.length?this.state.imgData.img.map((function(t,a){return i.a.createElement("a",{href:"https://www.instagram.com/p/".concat(e.state.imgData.link[a]),target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{className:"instaContain",key:a+"contain",style:{width:e.state.size,height:"calc(".concat(e.state.size," + (1.2em * 3))")}},i.a.createElement("img",{src:t,key:a,style:{width:e.state.size,height:e.state.size},className:"images",alt:""}),i.a.createElement("p",null," ",e.state.imgData.captions[a]," ")))})):i.a.createElement("h2",null," There are no images... yet. ")))}},{key:"componentDidMount",value:function(){this.getPost(this.state.username)}},{key:"getPost",value:function(e){var t=this,a="https://www.instagram.com/".concat(e,"/?__a=1");fetch(a).then((function(e){e.json().then((function(e){console.log(e);var a,n,i={img:[],captions:[],link:[]},c=e.graphql.user.edge_owner_to_timeline_media.edges;a=c.length>9?9:c.length;for(var r=0;r<a;r++)try{i.img.push(e.graphql.user.edge_owner_to_timeline_media.edges[r].node.display_url),i.captions.push(e.graphql.user.edge_owner_to_timeline_media.edges[r].node.edge_media_to_caption.edges[0].node.text),i.link.push(e.graphql.user.edge_owner_to_timeline_media.edges[r].node.shortcode)}catch(s){console.log(s)}2>=a&&(n="100%"),t.setState({username:e.graphql.user.username,bio:e.graphql.user.biography,pfp:e.graphql.user.profile_pic_url_hd,imgData:i,size:n})}))})).catch((function(t){console.log("Fetch Error :-S",t),this.getPost(e)}))}}]),t}(i.a.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={name:["Satvik Garg","Jackie Le","Sajan Toor","Huy Ngo","Owen Gill"],img:["/4549a/Satvik.jpg","/4549a/Jackie.jpg","/4549a/Sajan.jpg","/4549a/Huy.jpg","/4549a/Owen.jpg"],roles:["Programmer / Builder","Builder / Designer","Lead Programmer / Website Designer and Programmer","Builder / Designer","Documenter / Programmer"],description:["When nothing goes right, go left.","Just wait and see.","Grind Never Quit \ud83d\udd25","I'm a simple dude and I do complex things.","You must fail to succeed, experience is key."]};return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(f,{title:"4549A",title2:"Envertronics",subtitle:e.name,time:2e3},i.a.createElement(E.b,{to:"/about"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"LEARN MORE"))),i.a.createElement(w,{color:"#1c1c1c",title:"The Robot",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc.",img:"https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"},i.a.createElement(E.b,{to:"/teams"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"LEARN MORE"))),i.a.createElement(S,{members:e}),i.a.createElement(q,{username:"4549alpha"}))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(i.a.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(f,{title:"4549B",title2:"Envertronics",subtitle:["Satvik Garg","Jackie Le","Owen Gill","Huy Ngo","Sajan Toor"],time:2e3},i.a.createElement(E.b,{to:"/about"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"LEARN MORE"))),i.a.createElement(w,{color:"#1c1c1c",title:"The Robot",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc.",img:"https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/600px-R.O.B._%28JPN%29_SSBU.png"},i.a.createElement(E.b,{to:"/teams"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"LEARN MORE"))),i.a.createElement(S,{members:{name:["PewDiePie","Elon Musk"],img:["https://s3.dexerto.com/thumbnails/_thumbnailLarge/pewdiepie-iron-cross-responds-youtube-video-donation-adl.jpg","https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/Elon_Musk_2-770x433.jpeg?6sX4KX8FoInpgQGTfgzXkXtTpZk7K0NF"],roles:["Builder","Lead Programmer, Builder"],description:["Wow this is a description","Another one!"]}}),i.a.createElement(q,{username:"mkbhd"}))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(i.a.Component),_=a(22),I=a.n(_),D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(f,{title:"VEX",title2:"Robotics Competition",subtitle:["Tower Takeover (2020)","Turning Point (2019)","In The Zone (2018)","Starstruck (2017)","Nothing But Net (2016)"],time:1e3},i.a.createElement("a",{href:"https://www.vexrobotics.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"VEX's Offical Website"))),i.a.createElement(w,{color:"#1c1c1c",title:"About Vex",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet porttitor mi, sit amet volutpat metus dapibus varius. Vestibulum eu quam ut nulla eleifend pretium eu non arcu. In vitae lorem tempus, molestie ex in, porttitor est. Nam in ipsum nec nisl aliquam porta et non lectus. Donec ornare suscipit nibh non suscipit. Nulla rutrum euismod eleifend. Praesent nulla lacus, faucibus at augue nec, luctus iaculis ante. Curabitur in efficitur magna. Quisque dictum dui turpis, nec tincidunt libero hendrerit nec. Nam non vulputate augue, id accumsan nunc.",img:I.a},i.a.createElement("a",{href:"https://www.vexrobotics.com/vexedr",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"About The Competition"))),i.a.createElement(w,{title:"About the Competition",body:"Wow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet.",img:"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"},i.a.createElement("a",{href:"https://www.surreyschools.ca/schools/envercreek/Pages/default.aspx",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",{"aria-label":"Learn More",className:"button"},"ENVER CREEK'S WEBSITE"))),i.a.createElement(w,{title:"Tower Takeover",body:"Wow! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mattis ex. Nam ligula turpis, cursus eu nunc et, interdum cursus augue. Donec luctus ac leo lobortis eleifend. Vestibulum dignissim nec nunc nec aliquam. In hac habitasse platea dictumst. Nam laoreet vel lectus sed egestas. Nunc cursus vestibulum lacus, vitae tempor nunc volutpat nec. Integer sit amet iaculis odio. Proin a accumsan enim. Sed ac porta libero. Mauris nec egestas ipsum. Etiam tortor mauris, iaculis eget ultricies at, sodales quis orci. Sed enim diam, viverra id quam eu, tempus auctor magna. In et enim dictum, finibus eros ac, suscipit nibh. Aliquam erat volutpat. Aliquam id rhoncus urna. Aliquam elementum est et mi vestibulum, et egestas augue eleifend. Duis fringilla nunc nec maximus posuere. Etiam vestibulum congue convallis. Morbi volutpat, est et eleifend ultricies, magna enim finibus erat, ultrices volutpat velit leo et sapien. Nam sit amet mollis ipsum. Praesent laoreet.",img:"http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdb6.png"},i.a.createElement("iframe",{title:"towerTakeover",width:"560",height:"315",src:"https://www.youtube.com/embed/_JVQOiw_OUU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),i.a.createElement(q,{username:"vexrobotics"}))}},{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}}]),t}(i.a.Component),B=a(11);var A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={time:10,complete:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.complete&&i.a.createElement(B.a,{to:"/"}),i.a.createElement(f,{title:"404",title2:"Let's fix that!",noNavDown:!0},i.a.createElement("p",null," Redirecting you in ",this.state.time," or ",i.a.createElement(E.b,{to:"/"},"click here ")," ")))}},{key:"componentDidMount",value:function(){!function(e){var t=e,a=t.state.time;setInterval((function(){a--,t.setState({time:a}),0===a&&t.callBack()}),1e3)}(this)}},{key:"callBack",value:function(){this.setState({complete:!0})}}]),t}(i.a.Component);a(34),a(35);var R=function(){return i.a.createElement(E.a,null,i.a.createElement("div",{id:"App"},i.a.createElement(B.d,null,i.a.createElement(B.b,{path:["/","/home"],exact:!0,component:x}),i.a.createElement(B.b,{path:"/teams/4549A",component:z}),i.a.createElement(B.b,{path:"/teams/4549B",component:P}),i.a.createElement(B.b,{path:"/vex",component:D}),i.a.createElement(B.b,{component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bd5864fb.chunk.js.map