(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3maEf",description:"Profile_description__22Myw",avatar:"Profile_avatar__1BCB-",name:"Profile_name__TDsol",tag:"Profile_tag__9R49d",location:"Profile_location__2uVGl",stats:"Profile_stats__1SbSA",label:"Profile_label__1Dute",quantity:"Profile_quantity__38Ehr"}},function(e,a,t){e.exports={transactionHistory:"Transaction_transactionHistory__2EKrU",titleLink:"Transaction_titleLink__2yl9O",subTitleLink:"Transaction_subTitleLink__2iSdf"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(e,a,t){e.exports={statistics:"Statistic_statistics__2pmKX",title:"Statistic_title__3WLWY",statList:"Statistic_statList__10MLP",item:"Statistic_item__9ups2",label:"Statistic_label__17bm8",percentage:"Statistic_percentage__1j1nJ"}},function(e,a,t){e.exports={friendList:"FriendsList_friendList__LeQLS",item:"FriendsList_item__1Jmcj",statusFalse:"FriendsList_statusFalse__XMBgb",statusTrue:"FriendsList_statusTrue__2QYMI",avatar:"FriendsList_avatar__32vD-",name:"FriendsList_name__13GNX"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(19)},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(8),c=t.n(i),r=t(3),l=t(1),m=t.n(l),o=t(4),u=t.n(o),d=r.name,p=r.tag,f=r.location,b=r.avatar,_=r.stats,y=_.followers,E=_.views,N=_.likes;r.propTypes={name:u.a.string.isRequired,tag:u.a.string.isRequired,location:u.a.string.isRequired,avatar:u.a.string.isRequired,stats:{followers:u.a.number.isRequired,views:u.a.number.isRequired,likes:u.a.number.isRequired}};var w=function(e){e.user;return s.a.createElement("div",{className:m.a.profile},s.a.createElement("div",{className:m.a.description},s.a.createElement("img",{src:b,alt:"user avatar",className:m.a.avatar}),s.a.createElement("p",{className:m.a.name},d),s.a.createElement("p",{className:m.a.tag},p),s.a.createElement("p",{className:m.a.location},f)),s.a.createElement("ul",{className:m.a.stats},s.a.createElement("li",null,s.a.createElement("span",{className:m.a.label},"Followers"),s.a.createElement("span",{className:m.a.quantity},y)),s.a.createElement("li",null,s.a.createElement("span",{className:m.a.label},"Views"),s.a.createElement("span",{className:m.a.quantity},E)),s.a.createElement("li",null,s.a.createElement("span",{className:m.a.label},"Likes"),s.a.createElement("span",{className:m.a.quantity},N))))},g=t(5),v=t.n(g),L=function(e){var a=e.statist;return s.a.createElement("section",{className:v.a.statistics},s.a.createElement("h2",{className:v.a.title},"Upload stats"),s.a.createElement("ul",{className:v.a.statList},a.map((function(e){return s.a.createElement("li",{className:v.a.item,key:e.id},s.a.createElement("span",{className:v.a.label},e.label),s.a.createElement("span",{className:v.a.percentage},e.percentage,"%"))}))))},h=t(9),k=t(6),T=t.n(k),S=function(e){var a=e.items;return s.a.createElement("ul",{className:T.a.friendList},a.map((function(e){return s.a.createElement("li",{className:T.a.item,key:e.id},s.a.createElement("span",{className:e.isOnline?T.a.statusTrue:T.a.statusFalse}),s.a.createElement("img",{className:T.a.avatar,src:e.avatar,alt:"",width:"48"}),s.a.createElement("p",{className:T.a.name},e.name))})))},O=t(10),P=t(2),q=t.n(P),j=function(e){var a=e.transHistory;return s.a.createElement("table",{className:q.a.transactionHistory},s.a.createElement("thead",{className:q.a.titleMain},s.a.createElement("tr",{className:q.a.titleItem},s.a.createElement("th",{className:q.a.titleLink},"Type"),s.a.createElement("th",{className:q.a.titleLink},"Amount"),s.a.createElement("th",{className:q.a.titleLink},"Currency"))),a.map((function(e){return s.a.createElement("tbody",{className:q.a.mainInfo,key:e.id},s.a.createElement("tr",{className:q.a.subTitleItem},s.a.createElement("td",{className:q.a.subTitleLink},e.type),s.a.createElement("td",{className:q.a.subTitleLink},e.amount),s.a.createElement("td",{className:q.a.subTitleLink},e.currency)))})))},R=t(11),x=function(){return s.a.createElement("div",null,s.a.createElement(w,{user:r}),s.a.createElement(L,{statist:h}),s.a.createElement(S,{items:O}),s.a.createElement(j,{transHistory:R}))};c.a.render(s.a.createElement(x,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.5075100e.chunk.js.map