(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{419:function(t,e,l){"use strict";l.r(e);var o={name:"PageReservation",data:function(){return{items:["1","2","3","4","4+"],table:["1","2","3","4","4+"],picker:(new Date).toISOString().substr(0,10),date:(new Date).toISOString().substr(0,10),menu1:!1,menu2:!1}}},n=l(29),r=l(34),c=l.n(r),d=l(282),v=l(300),m=l(297),f=l(292),x=l(410),_=l(366),k=l(331),h=l(323),w=l(294),y=l(411),C=l(340),S=l(424),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-parallax",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}},[l("h1",{staticClass:"text-center"},[t._v("Our Reservation")]),t._v(" "),l("p",{staticClass:"text-center"},[l("nuxt-link",{staticStyle:{color:"white"},attrs:{to:"/"}},[t._v("Home")]),t._v("\n      >\n      "),l("nuxt-link",{staticStyle:{color:"white"},attrs:{to:"/pagereservation"}},[t._v("Reservation")])],1)]),t._v(" "),l("v-row",[l("v-col",[l("div",{attrs:{"justify-center":"",align:"center"}},[l("h4",{staticClass:"pt-2 text-center yellow"},[t._v("Book a Table")]),t._v(" "),l("h2",{staticClass:"pb-2 text-center font-weight-bold yellow"},[t._v("Reservation")])])]),t._v(" "),l("v-col",{staticClass:"ma-10"},[l("v-card",{staticClass:"ma-10 mx-auto black",staticStyle:{border:"2px solid #111"},attrs:{width:"500px",height:"auto"}},[l("v-card-title",{staticClass:"pl-10 orange--text",staticStyle:{"border-bottom":"2px solid orange"}},[t._v("Reservation")]),t._v(" "),l("v-form",{staticClass:"pa-10 pt-8"},[l("v-text-field",{attrs:{solo:"",placeholder:"Name",color:"black"}}),t._v(" "),l("v-text-field",{attrs:{solo:"",placeholder:"Email",color:"black"}}),t._v(" "),l("v-text-field",{attrs:{solo:"",placeholder:"Phone Number",color:"black"}}),t._v(" "),l("v-row",{staticClass:"ml-1 mb-5"},[l("v-col",{staticClass:"white py-2 px-2 mr-4",staticStyle:{border:"1px solid #ddd","border-radius":"5px"}},[l("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[l("v-text-field",t._g(t._b({attrs:{label:"Picker without buttons","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",n,!1),o))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),l("v-date-picker",{on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),l("v-col",{staticClass:"white py-2 px-2 mr-4",staticStyle:{border:"1px solid #ddd","border-radius":"5px"}},[l("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[l("v-text-field",t._g(t._b({attrs:{label:"Picker in menu","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",n,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),t.menu2?l("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(e){return t.$refs.menu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}):t._e()],1)],1)],1),t._v(" "),l("v-row",[l("v-col",[l("v-select",{staticClass:"py-3",attrs:{items:t.items,label:"Person",solo:""}})],1),t._v(" "),l("v-col",[l("v-select",{staticClass:"py-3",attrs:{items:t.table,label:"Table",solo:""}})],1)],1),t._v(" "),l("v-btn",{staticClass:"border-orange orange--text font-weight-bold",attrs:{outlined:""}},[t._v("Make a reservation")])],1)],1)],1)],1)],1)}),[],!1,null,"70e35524",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardTitle:m.d,VCol:f.a,VDatePicker:x.a,VForm:_.a,VMenu:k.a,VParallax:h.a,VRow:w.a,VSelect:y.a,VTextField:C.a,VTimePicker:S.a})}}]);