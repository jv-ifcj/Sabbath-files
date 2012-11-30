/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['189','47','291','61','undefined','undefined'],
            opacity:1,
            text:"The Sabbath",
            font:['Georgia, Times New Roman, Times, serif',52,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Text4',
            type:'text',
            rect:['41','40','587','124','undefined','undefined'],
            text:"Which song best describes your typical Sunday?",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',46,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'Text6',
            type:'text',
            rect:['123','164','423','61','undefined','undefined'],
            text:"(Roll-over with your mouse and click to explore)",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',23,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'music_box_a',
            display:'none',
            type:'rect',
            rect:['700px','185px','0','0','undefined','undefined']
         },
         {
            id:'music_box_c',
            display:'none',
            type:'rect',
            rect:['988','185','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'RoundRect4Copy3',
            type:'rect',
            rect:['490','286','99','101','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[8,"rgb(0, 0, 0)","solid"],
            transform:[]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['41','157','411','214','undefined','undefined'],
            borderRadius:["17px 17px","17px 17px","17px 17px","17px 17px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'RoundRectCopy',
               type:'rect',
               rect:['0','0','411','214','undefined','undefined'],
               clip:['rect(0px 411px 55px 0px)'],
               borderRadius:["17px 17px","17px 17px","17px 17px","17px 17px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[]
            },
            {
               id:'Text2',
               type:'text',
               rect:['18','12','388','34','undefined','undefined'],
               text:"Main Teaching Point",
               align:"auto",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"],
               transform:[]
            },
            {
               id:'Text3',
               type:'text',
               rect:['12','68','388','124','undefined','undefined'],
               text:"Observing the Sabbath is central to our faith &mdash; both Christian and Jewish &mdash; and is the cornerstone of Jewish survival and identity.",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(0,0,0,1.00)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'music_box_b',
            display:'none',
            type:'rect',
            rect:['843','185','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'music_box_d',
            display:'none',
            type:'rect',
            rect:['1126','185','0','0','undefined','undefined'],
            transform:[]
         },
         {
            id:'woman_sabbath2',
            type:'image',
            rect:['-276','-274','1673','1148','undefined','undefined'],
            fill:["rgba(0,0,0,0)",im+"woman_sabbath.png"],
            transform:[[],[],[],['0.283','0.283']]
         },
         {
            id:'Text7',
            display:'none',
            type:'text',
            rect:['72px','120px','535px','88px','auto','auto'],
            text:"Welcome!",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',69,"rgba(255,255,255,1.00)","500","none","italic"]
         },
         {
            id:'Text8',
            display:'none',
            type:'text',
            rect:['38px','201px','598px','239px','auto','auto'],
            text:"Our course is designed so you can proceed through each lesson at your own speed.  Use the arrows at the bottom of each page to move forward or revisit portions of the lesson. Our hope is that Rabbi Eckstein's teaching on the Sabbath will enrich your own observance of the Lord's Day and deepen your relationship with God.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","500","none","italic"]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'nudge',
            display:'none',
            type:'ellipse',
            rect:['531px','487px','66px','69px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(176,150,4,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'buttons',
            type:'image',
            rect:['0px','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'Group',
            type:'group',
            rect:['0px','-2px','0','0','auto','auto'],
            c:[
            {
               id:'sb01',
               display:'none',
               type:'ellipse',
               rect:['81px','501px','52px','58px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(150,118,194,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'sb02',
               display:'none',
               type:'ellipse',
               rect:['80px','493px','52px','58px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(150,118,194,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'sb03',
               display:'none',
               type:'ellipse',
               rect:['79px','495px','51px','54px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(150,118,194,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'sb04',
               display:'none',
               type:'ellipse',
               rect:['82px','501px','47px','46px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(150,118,194,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         },
         {
            id:'next1',
            type:'rect',
            rect:['436','466','197','61','undefined','undefined'],
            clip:['rect(0px 108px 61px 41px)'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'next2',
            display:'none',
            type:'rect',
            rect:['436','466','197','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'RoundRectCopy2',
            display:'none',
            type:'rect',
            rect:['41','157','546px','214','undefined','undefined'],
            borderRadius:["17px 17px","17px 17px","17px 17px","17px 17px"],
            opacity:1,
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['1.06','1.06']],
            c:[
            {
               id:'RoundRectCopy3',
               type:'rect',
               rect:['68px','0','411','214','undefined','undefined'],
               clip:['rect(0px 411px 46px 0px)'],
               borderRadius:["17px 17px","17px 17px","17px 17px","17px 17px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['1.33']]
            },
            {
               id:'Text2Copy',
               type:'text',
               rect:['18','3','388','34','undefined','undefined'],
               text:"Key Verses",
               align:"auto",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"],
               transform:[]
            },
            {
               id:'Text3Copy',
               type:'text',
               rect:['31px','71','484px','287','undefined','undefined'],
               text:"\"Remember the Sabbath day by keeping it holy.  Six days you shall labor and do all your work, but the seventh day is a Sabbath to the LORD your God.  On it you shall not do any work, neither you, nor your son or daughter, nor your male or female servant, nor your animals, nor any foreigner residing in your towns.  For in six days the LORD made the heavens and the earth, the sea, and all that is in them, but he rested on the seventh day.  Therefore the LORD blessed the Sabbath day and made it holy.\"",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            },
            {
               id:'Text3Copy2',
               type:'text',
               rect:['125px','296px','388','37','undefined','undefined'],
               text:"Exodus 20:8-11",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1.00)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'restart',
            display:'none',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         }],
         symbolInstances: [
         {
            id:'music_box_a',
            symbolName:'music_box'
         },
         {
            id:'restart',
            symbolName:'restart'
         },
         {
            id:'music_box_c',
            symbolName:'music_box'
         },
         {
            id:'music_box_d',
            symbolName:'music_box'
         },
         {
            id:'music_box_b',
            symbolName:'music_box'
         }
         ]
      },
   states: {
      "Base State": {
         "${_woman_sabbath2}": [
            ["style", "top", '-269.98px'],
            ["transform", "scaleY", '0.23'],
            ["transform", "scaleX", '0.23'],
            ["style", "opacity", '0'],
            ["style", "left", '-220px'],
            ["style", "display", 'block']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.16'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '157px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.16'],
            ["style", "-webkit-transform-origin", [20,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '41px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '3px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "font-size", '32px']
         ],
         "${_sb03}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["style", "top", '68px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '12px'],
            ["style", "font-size", '25px']
         ],
         "${_Text6}": [
            ["style", "top", '164px'],
            ["transform", "scaleX", '0.62'],
            ["transform", "scaleY", '0.62'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '123px'],
            ["style", "font-size", '23px']
         ],
         "${_RoundRect4Copy3}": [
            ["style", "top", '173px'],
            ["transform", "scaleY", '0.75'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "left", '1114px'],
            ["style", "border-width", '8px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.32961'],
            ["style", "left", '67.73px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,411,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_next1}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '145px'],
            ["style", "top", '487px'],
            ["transform", "scaleY", '0.8'],
            ["style", "display", 'block'],
            ["style", "clip", [0,108,61,41], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '491px']
         ],
         "${_music_box_c}": [
            ["style", "top", '185px'],
            ["style", "opacity", '1'],
            ["style", "left", '988px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '189px'],
            ["style", "width", '291px'],
            ["style", "top", '47px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Georgia, \'Times New Roman\', Times, serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '52px']
         ],
         "${_Text7}": [
            ["style", "top", '120px'],
            ["transform", "scaleY", '0.67'],
            ["transform", "scaleX", '0.67'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,411,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Text4}": [
            ["transform", "scaleX", '0.56'],
            ["style", "opacity", '0'],
            ["style", "left", '41px'],
            ["style", "width", '587px'],
            ["style", "top", '40px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '0.56'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '46px']
         ],
         "${_sb01}": [
            ["style", "top", '501px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '81px'],
            ["style", "cursor", 'pointer']
         ],
         "${_music_box_b}": [
            ["style", "top", '185px'],
            ["style", "opacity", '1'],
            ["style", "left", '843px'],
            ["style", "display", 'none']
         ],
         "${_music_box_d}": [
            ["style", "top", '185px'],
            ["style", "opacity", '1'],
            ["style", "left", '1126px'],
            ["style", "display", 'none']
         ],
         "${_next2}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '62.333335876465px'],
            ["style", "top", '493px'],
            ["transform", "scaleY", '0.8'],
            ["style", "display", 'none'],
            ["style", "left", '531.32px']
         ],
         "${_sb04}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_nudge}": [
            ["color", "background-color", 'rgba(176,150,4,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["style", "top", '487px']
         ],
         "${_buttons}": [
            ["style", "top", '500px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '295.83px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-style", 'normal'],
            ["style", "height", '37px'],
            ["style", "left", '124.77px'],
            ["style", "width", '388px']
         ],
         "${_music_box_a}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_Group}": [
            ["style", "top", '-2px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_sb02}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '500px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '70.22px'],
            ["style", "width", '483.52580520342px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "height", '287px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '30.68px'],
            ["style", "font-size", '18px']
         ],
         "${_Stage}": [
            ["style", "height", '560px'],
            ["style", "width", '670px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text2}": [
            ["style", "top", '12px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "font-size", '32px']
         ],
         "${_Text8}": [
            ["style", "top", '201px'],
            ["style", "width", '598px'],
            ["transform", "scaleY", '0.56'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.56'],
            ["style", "opacity", '0'],
            ["style", "left", '38px'],
            ["style", "font-size", '24px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "-webkit-transform-origin", [20,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.39'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '546.46099738355px'],
            ["style", "top", '74.83px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.39'],
            ["style", "height", '374px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "left", '429.85px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23000,
         autoPlay: false,
         labels: {
            "songs_begin": 13000
         },
         timeline: [
            { id: "eid201", tween: [ "transform", "${_next2}", "scaleY", '1', { fromValue: '0.8'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "eid202", tween: [ "transform", "${_next2}", "scaleY", '0.68', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid203", tween: [ "transform", "${_next2}", "scaleY", '0.74', { fromValue: '0.68'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid204", tween: [ "transform", "${_next2}", "scaleY", '1', { fromValue: '0.74'}], position: 10750, duration: 250 },
            { id: "eid205", tween: [ "transform", "${_next2}", "scaleY", '0.68', { fromValue: '0.74'}], position: 11000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid206", tween: [ "transform", "${_next2}", "scaleY", '0.75', { fromValue: '0.68'}], position: 16500, duration: 1250 },
            { id: "eid12", tween: [ "transform", "${_Text7}", "scaleX", '1', { fromValue: '0.67'}], position: 865, duration: 750 },
            { id: "eid41", tween: [ "transform", "${_Text7}", "scaleX", '0.75', { fromValue: '1'}], position: 2210, duration: 470 },
            { id: "eid29", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 540 },
            { id: "eid59", tween: [ "style", "${_sabbath_bar}", "opacity", '0.4', { fromValue: '1'}], position: 22000, duration: 750 },
            { id: "eid219", tween: [ "style", "${_woman_sabbath2}", "left", '-276px', { fromValue: '-220px'}], position: 4000, duration: 1750 },
            { id: "eid224", tween: [ "style", "${_woman_sabbath2}", "left", '-177px', { fromValue: '-276px'}], position: 6750, duration: 1065 },
            { id: "eid84", tween: [ "style", "${_RoundRectCopy2}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 1177, easing: "easeOutQuad" },
            { id: "eid96", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0', { fromValue: '1'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "eid27", tween: [ "style", "${_sabbath_bar}", "top", '460px', { fromValue: '500px'}], position: 1250, duration: 540 },
            { id: "eid60", tween: [ "style", "${_sabbath_bar}", "top", '542px', { fromValue: '460px'}], position: 22000, duration: 750 },
            { id: "eid3", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 500 },
            { id: "eid179", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 21500, duration: 1500 },
            { id: "eid76", tween: [ "transform", "${_RoundRectCopy2}", "scaleX", '1.06', { fromValue: '0.39'}], position: 8750, duration: 1177, easing: "easeOutQuad" },
            { id: "eid97", tween: [ "transform", "${_RoundRectCopy2}", "scaleX", '0.78', { fromValue: '1.06'}], position: 11000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 1265, duration: 540 },
            { id: "eid2", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "eid6", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0.25'}], position: 2750, duration: 0 },
            { id: "eid118", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 5500, duration: 500 },
            { id: "eid18", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 6000, duration: 500, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 10250, duration: 500, easing: "easeOutQuad" },
            { id: "eid116", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10750, duration: 500, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 17000, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '1'}], position: 17750, duration: 0 },
            { id: "eid67", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 20500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid217", tween: [ "transform", "${_woman_sabbath2}", "scaleY", '0.28392', { fromValue: '0.23'}], position: 4000, duration: 1750 },
            { id: "eid226", tween: [ "transform", "${_woman_sabbath2}", "scaleY", '0.21', { fromValue: '0.28392'}], position: 6750, duration: 1065 },
            { id: "eid71", tween: [ "style", "${_sb02}", "display", 'block', { fromValue: 'none'}], position: 2395, duration: 0 },
            { id: "eid72", tween: [ "style", "${_sb02}", "display", 'none', { fromValue: 'block'}], position: 6435, duration: 0 },
            { id: "eid104", tween: [ "transform", "${_Text4}", "scaleY", '1', { fromValue: '0.56'}], position: 13000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "style", "${_sb01}", "display", 'block', { fromValue: 'none'}], position: 2210, duration: 0 },
            { id: "eid70", tween: [ "style", "${_sb01}", "display", 'none', { fromValue: 'block'}], position: 2395, duration: 0 },
            { id: "eid1", tween: [ "style", "${_woman_sabbath2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid211", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 2170, duration: 0 },
            { id: "eid258", tween: [ "style", "${_restart}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_RoundRectCopy2}", "top", '51px', { fromValue: '74.83px'}], position: 8750, duration: 1177, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "style", "${_RoundRectCopy2}", "top", '113.84px', { fromValue: '51px'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 865, duration: 750 },
            { id: "eid48", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "eid175", tween: [ "style", "${_music_box_a}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 1500 },
            { id: "eid24", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 2680, duration: 70 },
            { id: "eid34", tween: [ "style", "${_nudge}", "display", 'block', { fromValue: 'none'}], position: 1685, duration: 0 },
            { id: "eid53", tween: [ "style", "${_nudge}", "display", 'none', { fromValue: 'block'}], position: 2395, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_RoundRect}", "scaleX", '1', { fromValue: '0.16'}], position: 4000, duration: 1500 },
            { id: "eid50", tween: [ "transform", "${_RoundRect}", "scaleX", '0.25', { fromValue: '1'}], position: 6830, duration: 1245, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_music_box_b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_music_box_b}", "display", 'block', { fromValue: 'none'}], position: 15875, duration: 0 },
            { id: "eid101", tween: [ "style", "${_music_box_b}", "display", 'none', { fromValue: 'block'}], position: 22047, duration: 0 },
            { id: "eid209", tween: [ "style", "${_next2}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid57", tween: [ "style", "${_next2}", "display", 'none', { fromValue: 'block'}], position: 21500, duration: 0 },
            { id: "eid21", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid22", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid178", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 1500 },
            { id: "eid4", tween: [ "transform", "${_Text8}", "scaleX", '1', { fromValue: '0.56'}], position: 865, duration: 750 },
            { id: "eid43", tween: [ "transform", "${_Text8}", "scaleX", '0.75', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "eid5", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1500 },
            { id: "eid52", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 6830, duration: 1245, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_sb04}", "display", 'block', { fromValue: 'none'}], position: 17727, duration: 0 },
            { id: "eid77", tween: [ "style", "${_sb04}", "display", 'none', { fromValue: 'block'}], position: 21454, duration: 0 },
            { id: "eid17", tween: [ "transform", "${_next1}", "scaleX", '0.74', { fromValue: '0.8'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "transform", "${_next1}", "scaleX", '0.68', { fromValue: '0.74'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "transform", "${_next1}", "scaleX", '0.74', { fromValue: '0.68'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid212", tween: [ "transform", "${_next1}", "scaleX", '0.68', { fromValue: '0.74'}], position: 10856, duration: 1894 },
            { id: "eid171", tween: [ "transform", "${_next1}", "scaleX", '0.75', { fromValue: '0.68'}], position: 16500, duration: 1250 },
            { id: "eid63", tween: [ "style", "${_next1}", "width", '145px', { fromValue: '145px'}], position: 6435, duration: 0, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "transform", "${_RoundRectCopy2}", "scaleY", '1.06', { fromValue: '0.39'}], position: 8750, duration: 1177, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "transform", "${_RoundRectCopy2}", "scaleY", '0.78', { fromValue: '1.06'}], position: 11000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 10856, duration: 1518, easing: "easeOutQuad" },
            { id: "eid189", tween: [ "transform", "${_next2}", "scaleX", '1', { fromValue: '0.8'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "eid190", tween: [ "transform", "${_next2}", "scaleX", '0.68', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid191", tween: [ "transform", "${_next2}", "scaleX", '0.74', { fromValue: '0.68'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid192", tween: [ "transform", "${_next2}", "scaleX", '1', { fromValue: '0.74'}], position: 10750, duration: 250 },
            { id: "eid193", tween: [ "transform", "${_next2}", "scaleX", '0.68', { fromValue: '0.74'}], position: 11000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid194", tween: [ "transform", "${_next2}", "scaleX", '0.75', { fromValue: '0.68'}], position: 16500, duration: 1250 },
            { id: "eid173", tween: [ "style", "${_music_box_d}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 1500 },
            { id: "eid79", tween: [ "style", "${_music_box_a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_music_box_a}", "display", 'block', { fromValue: 'none'}], position: 15645, duration: 0 },
            { id: "eid92", tween: [ "style", "${_music_box_a}", "display", 'none', { fromValue: 'block'}], position: 22047, duration: 0 },
            { id: "eid176", tween: [ "style", "${_music_box_b}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 1500 },
            { id: "eid99", tween: [ "style", "${_Text}", "left", '614px', { fromValue: '189px'}], position: 10856, duration: 1518, easing: "easeOutQuad" },
            { id: "eid7", tween: [ "transform", "${_Text8}", "scaleY", '1', { fromValue: '0.56'}], position: 865, duration: 750 },
            { id: "eid46", tween: [ "transform", "${_Text8}", "scaleY", '0.75', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "eid181", tween: [ "style", "${_next1}", "left", '135px', { fromValue: '491px'}], position: 21750, duration: 750 },
            { id: "eid102", tween: [ "transform", "${_Text4}", "scaleX", '1', { fromValue: '0.56'}], position: 13000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid182", tween: [ "style", "${_next1}", "top", '462px', { fromValue: '487px'}], position: 21750, duration: 750 },
            { id: "eid20", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 865, duration: 750 },
            { id: "eid47", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 2210, duration: 470 },
            { id: "eid186", tween: [ "style", "${_next2}", "width", '62.333335876465px', { fromValue: '62.333335876465px'}], position: 6435, duration: 0, easing: "easeOutQuad" },
            { id: "eid80", tween: [ "style", "${_RoundRectCopy2}", "left", '44.31px', { fromValue: '429.85px'}], position: 8750, duration: 1177, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "style", "${_RoundRectCopy2}", "left", '-361.31px', { fromValue: '44.31px'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "style", "${_next2}", "left", '531.32px', { fromValue: '531.32px'}], position: 6435, duration: 0, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "style", "${_next2}", "left", '135px', { fromValue: '531.32px'}], position: 21750, duration: 750 },
            { id: "eid73", tween: [ "style", "${_sb03}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
            { id: "eid74", tween: [ "style", "${_sb03}", "display", 'none', { fromValue: 'block'}], position: 10808, duration: 0 },
            { id: "eid215", tween: [ "transform", "${_woman_sabbath2}", "scaleX", '0.28392', { fromValue: '0.23'}], position: 4000, duration: 1750 },
            { id: "eid225", tween: [ "transform", "${_woman_sabbath2}", "scaleX", '0.21', { fromValue: '0.28392'}], position: 6750, duration: 1065 },
            { id: "eid207", tween: [ "style", "${_next2}", "top", '493px', { fromValue: '493px'}], position: 6435, duration: 0, easing: "easeOutQuad" },
            { id: "eid208", tween: [ "style", "${_next2}", "top", '462px', { fromValue: '493px'}], position: 21750, duration: 750 },
            { id: "eid121", tween: [ "style", "${_RoundRectCopy2}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid123", tween: [ "style", "${_RoundRectCopy2}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "transform", "${_next1}", "scaleY", '0.74', { fromValue: '0.8'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "transform", "${_next1}", "scaleY", '0.68', { fromValue: '0.74'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "transform", "${_next1}", "scaleY", '0.74', { fromValue: '0.68'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid213", tween: [ "transform", "${_next1}", "scaleY", '0.68', { fromValue: '0.74'}], position: 10856, duration: 1894 },
            { id: "eid172", tween: [ "transform", "${_next1}", "scaleY", '0.75', { fromValue: '0.68'}], position: 16500, duration: 1250 },
            { id: "eid38", tween: [ "style", "${_Text7}", "top", '156px', { fromValue: '120px'}], position: 2210, duration: 470 },
            { id: "eid16", tween: [ "transform", "${_Text7}", "scaleY", '1', { fromValue: '0.67'}], position: 865, duration: 750 },
            { id: "eid42", tween: [ "transform", "${_Text7}", "scaleY", '0.75', { fromValue: '1'}], position: 2210, duration: 470 },
            { id: "eid10", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 6250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 10750, duration: 0, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 10856, duration: 0, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 12499, duration: 0, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '1'}], position: 21750, duration: 750 },
            { id: "eid35", tween: [ "style", "${_nudge}", "opacity", '0.9', { fromValue: '0'}], position: 1750, duration: 130 },
            { id: "eid36", tween: [ "style", "${_nudge}", "opacity", '0', { fromValue: '0.8999999761581421'}], position: 1880, duration: 180 },
            { id: "eid37", tween: [ "style", "${_nudge}", "opacity", '0.9', { fromValue: '0'}], position: 2060, duration: 150 },
            { id: "eid49", tween: [ "style", "${_nudge}", "opacity", '0', { fromValue: '0.8999999761581421'}], position: 2210, duration: 185 },
            { id: "eid221", tween: [ "style", "${_woman_sabbath2}", "top", '-274.02px', { fromValue: '-269.98px'}], position: 4000, duration: 1750 },
            { id: "eid13", tween: [ "transform", "${_RoundRect}", "scaleY", '1', { fromValue: '0.16'}], position: 4000, duration: 1500 },
            { id: "eid51", tween: [ "transform", "${_RoundRect}", "scaleY", '0.25', { fromValue: '1'}], position: 6830, duration: 1245, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.62'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_Text8}", "top", '237px', { fromValue: '201px'}], position: 2210, duration: 540 },
            { id: "eid223", tween: [ "style", "${_woman_sabbath2}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1750 },
            { id: "eid227", tween: [ "style", "${_woman_sabbath2}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 1065 },
            { id: "eid210", tween: [ "style", "${_next1}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
            { id: "eid81", tween: [ "style", "${_music_box_c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_music_box_c}", "display", 'block', { fromValue: 'none'}], position: 16150, duration: 0 },
            { id: "eid93", tween: [ "style", "${_music_box_c}", "display", 'none', { fromValue: 'block'}], position: 22047, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 2000, easing: "easeOutQuad" },
            { id: "eid177", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 1500 },
            { id: "eid85", tween: [ "style", "${_music_box_d}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_music_box_d}", "display", 'block', { fromValue: 'none'}], position: 16370, duration: 0 },
            { id: "eid103", tween: [ "style", "${_music_box_d}", "display", 'none', { fromValue: 'block'}], position: 22047, duration: 0 },
            { id: "eid31", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '500px'}], position: 1265, duration: 540 },
            { id: "eid68", tween: [ "style", "${_buttons}", "top", '588px', { fromValue: '460px'}], position: 21750, duration: 750 },
            { id: "eid195", tween: [ "style", "${_next2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "eid196", tween: [ "style", "${_next2}", "opacity", '0.4', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid197", tween: [ "style", "${_next2}", "opacity", '1', { fromValue: '0.4'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid198", tween: [ "style", "${_next2}", "opacity", '0.4', { fromValue: '1'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "eid199", tween: [ "style", "${_next2}", "opacity", '0', { fromValue: '0.4000000059604645'}], position: 16500, duration: 1250 },
            { id: "eid65", tween: [ "style", "${_next2}", "opacity", '0', { fromValue: '0'}], position: 21750, duration: 0, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "style", "${_next2}", "opacity", '0', { fromValue: '0'}], position: 22500, duration: 0, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.62'}], position: 14500, duration: 1500, easing: "easeOutQuad" },
            { id: "eid174", tween: [ "style", "${_music_box_c}", "opacity", '0', { fromValue: '1'}], position: 20500, duration: 1500 },
            { id: "eid166", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_music_box_a}', ['box_start'] ], ""], position: 15750 },
            { id: "eid167", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_music_box_b}', ['box_start'] ], ""], position: 16000 },
            { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_music_box_c}', ['box_start'] ], ""], position: 16250 },
            { id: "eid169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_music_box_d}', ['box_start'] ], ""], position: 16500 }         ]
      }
   }
},
"music_box": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: {},
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['-636','100','99','101','undefined','undefined'],
      id: 'RoundRect4',
      stroke: [8,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(158,174,224,1.00)'],
      c: [
      {
         rect: ['12px','12px','76px','68px','auto','auto'],
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',69,'rgba(0,0,0,1)','500','none','italic'],
         id: 'Text11',
         text: '?',
         align: 'center',
         type: 'text'
      }]
   },
   {
      type: 'rect',
      rect: ['-626px','110px','95px','98px','auto','auto'],
      display: 'none',
      id: 'trigger',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect4}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '-12px'],
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'auto'],
            ["style", "border-width", '8px']
         ],
         "${_trigger}": [
            ["style", "top", '110px'],
            ["style", "display", 'none'],
            ["style", "left", '-626px'],
            ["style", "height", '98px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '95px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87.75px'],
            ["style", "width", '86.25px']
         ],
         "${_Text11}": [
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: false,
         labels: {
            "box_start": 0,
            "grow": 2250,
            "shrink": 2750
         },
         timeline: [
            { id: "eid133", tween: [ "style", "${_RoundRect4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "transform", "${_RoundRect4}", "scaleX", '1', { fromValue: '0.75'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "eid156", tween: [ "transform", "${_RoundRect4}", "scaleX", '1.3', { fromValue: '1'}], position: 2250, duration: 483, easing: "easeOutQuad" },
            { id: "eid165", tween: [ "transform", "${_RoundRect4}", "scaleX", '1', { fromValue: '1.3'}], position: 2733, duration: 517, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_trigger}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid117", tween: [ "style", "${_RoundRect4}", "left", '-636px', { fromValue: '-12px'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "style", "${_RoundRect4}", "top", '100px', { fromValue: '-13px'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "transform", "${_RoundRect4}", "scaleY", '1', { fromValue: '0.75'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "eid157", tween: [ "transform", "${_RoundRect4}", "scaleY", '1.3', { fromValue: '1'}], position: 2250, duration: 483, easing: "easeOutQuad" },
            { id: "eid164", tween: [ "transform", "${_RoundRect4}", "scaleY", '1', { fromValue: '1.3'}], position: 2733, duration: 517, easing: "easeOutQuad" }         ]
      }
   }
},
"woman_sabbath": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],{},{},[0.316,0.316]],
      id: 'woman_sabbath',
      type: 'image',
      rect: [-610,-419,1673,1148],
      fill: ['rgba(0,0,0,0)','images/woman_sabbath2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_woman_sabbath}": [
            ["style", "top", '-419.16px'],
            ["transform", "scaleY", '0.27'],
            ["transform", "scaleX", '0.27'],
            ["style", "opacity", '0'],
            ["style", "left", '-610.5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '309.96px'],
            ["style", "width", '451.71px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6250,
         autoPlay: true,
         timeline: [
            { id: "eid120", tween: [ "transform", "${_woman_sabbath}", "scaleX", '0.31679', { fromValue: '0.27'}], position: 4000, duration: 814 },
            { id: "eid128", tween: [ "transform", "${_woman_sabbath}", "scaleX", '0.23', { fromValue: '0.31679'}], position: 5250, duration: 1000 },
            { id: "eid126", tween: [ "style", "${_woman_sabbath}", "top", '-410.15px', { fromValue: '-419.16px'}], position: 5250, duration: 1000 },
            { id: "eid124", tween: [ "style", "${_woman_sabbath}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 814 },
            { id: "eid130", tween: [ "style", "${_woman_sabbath}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 1000 },
            { id: "eid125", tween: [ "style", "${_woman_sabbath}", "left", '-496.5px', { fromValue: '-610.5px'}], position: 5250, duration: 1000 },
            { id: "eid122", tween: [ "transform", "${_woman_sabbath}", "scaleY", '0.31679', { fromValue: '0.27'}], position: 4000, duration: 814 },
            { id: "eid129", tween: [ "transform", "${_woman_sabbath}", "scaleY", '0.23', { fromValue: '0.31679'}], position: 5250, duration: 1000 }         ]
      }
   }
},
"restart": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      rect: ['-27px','-521px','690px','581px','auto','auto'],
      display: 'none',
      id: 'Rectangle',
      opacity: 0.5,
      stroke: [0,'rgb(0, 0, 0)','none'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      rect: ['0px','0px','37px','34px','auto','auto'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['42px','-385px','559px','292px','auto','auto'],
      id: 'restart_prompt',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(158,174,224,1.00)'],
      c: [
      {
         rect: ['18px','26px','512px','65px','auto','auto'],
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson One?',
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
      },
      {
         rect: ['18px','128px','512px','49px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'yes_restart',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,51,102,1.00)'],
         c: [
         {
            rect: ['6px','11px','498px','34px','auto','auto'],
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson One',
            align: 'left',
            type: 'text'
         }]
      },
      {
         rect: ['18px','205px','512px','49px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'no_continue',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,51,102,1.00)'],
         c: [
         {
            rect: ['6px','11px','498px','34px','auto','auto'],
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
            id: 'Text10',
            text: 'No, I want to continue working on the page I\'m on',
            align: 'left',
            type: 'text'
         }]
      },
      {
         type: 'rect',
         rect: ['-87px','-144px','745px','625px','auto','auto'],
         id: 'curtain',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(11,0,52,1)']
      },
      {
         type: 'text',
         rect: ['530px','0px','25px','34px','auto','auto'],
         align: 'left',
         id: 'escape',
         display: 'none',
         text: 'X',
         cursor: ['pointer'],
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',29,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['60px','-257px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'restart_yes_button',
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   },
   {
      rect: ['60px','-180px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'restart_no_button',
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_yes_restart}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["style", "top", '128px']
         ],
         "${_restart_prompt}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "top", '-132.44px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "height", '292px'],
            ["style", "opacity", '0'],
            ["style", "left", '-253px'],
            ["style", "display", 'none']
         ],
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '530px'],
            ["style", "font-size", '29px']
         ],
         "${_Text5}": [
            ["style", "height", '65px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "top", '26px']
         ],
         "${_Text10}": [
            ["style", "top", '11px'],
            ["style", "left", '6px']
         ],
         "${_curtain}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_Text9}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '6px'],
            ["style", "font-size", '19px']
         ],
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_restart_no_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         labels: {
            "base_state": 0,
            "moment_of_truth": 750,
            "no_go": 1250,
            "yes_go": 4000
         },
         timeline: [
            { id: "eid250", tween: [ "style", "${_escape}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeInQuad" },
            { id: "eid251", tween: [ "style", "${_escape}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250, easing: "easeInQuad" },
            { id: "eid254", tween: [ "style", "${_escape}", "opacity", '1', { fromValue: '0'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid255", tween: [ "style", "${_escape}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250, easing: "easeInQuad" },
            { id: "eid149", tween: [ "style", "${_restart_prompt}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0, easing: "easeOutQuad" },
            { id: "eid244", tween: [ "style", "${_restart_prompt}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_restart_prompt}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0 },
            { id: "eid160", tween: [ "style", "${_curtain}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 1000 },
            { id: "eid248", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid256", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInQuad" },
            { id: "eid150", tween: [ "style", "${_restart_no_button}", "display", 'block', { fromValue: 'none'}], position: 710, duration: 0, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_restart_no_button}", "display", 'none', { fromValue: 'block'}], position: 795, duration: 0, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "style", "${_curtain}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "eid144", tween: [ "style", "${_restart_prompt}", "left", '42px', { fromValue: '-253px'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid233", tween: [ "style", "${_restart_prompt}", "left", '-268px', { fromValue: '42px'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid239", tween: [ "style", "${_restart_prompt}", "left", '42px', { fromValue: '42px'}], position: 3945, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_restart_prompt}", "scaleY", '1', { fromValue: '0.14'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid231", tween: [ "transform", "${_restart_prompt}", "scaleY", '0.21', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid242", tween: [ "transform", "${_restart_prompt}", "scaleY", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid220", tween: [ "style", "${_yes_restart}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 750 },
            { id: "eid228", tween: [ "style", "${_yes_restart}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid151", tween: [ "style", "${_restart_yes_button}", "display", 'block', { fromValue: 'none'}], position: 710, duration: 0, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_restart_yes_button}", "display", 'none', { fromValue: 'block'}], position: 795, duration: 0, easing: "easeOutQuad" },
            { id: "eid148", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '0'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid237", tween: [ "style", "${_restart_prompt}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid243", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid136", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 85, duration: 0 },
            { id: "eid200", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 3945, duration: 0 },
            { id: "eid127", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 85, duration: 0 },
            { id: "eid247", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid216", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0 },
            { id: "eid138", tween: [ "transform", "${_restart_prompt}", "scaleX", '1', { fromValue: '0.14'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid229", tween: [ "transform", "${_restart_prompt}", "scaleX", '0.21', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid241", tween: [ "transform", "${_restart_prompt}", "scaleX", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid185", tween: [ "style", "${_no_continue}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid154", tween: [ "style", "${_no_continue}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid146", tween: [ "style", "${_restart_prompt}", "top", '-385px', { fromValue: '-132.44px'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid235", tween: [ "style", "${_restart_prompt}", "top", '-134px', { fromValue: '-385px'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid240", tween: [ "style", "${_restart_prompt}", "top", '-385px', { fromValue: '-385px'}], position: 3945, duration: 0 },
            { id: "eid158", tween: [ "color", "${_curtain}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 6250, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Rectangle}", "opacity", '0.5', { fromValue: '0'}], position: 85, duration: 415 },
            { id: "eid245", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeInQuad" },
            { id: "eid246", tween: [ "style", "${_Rectangle}", "opacity", '0.5', { fromValue: '0'}], position: 3000, duration: 945, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11976501");
