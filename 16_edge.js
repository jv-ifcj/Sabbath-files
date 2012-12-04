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
            id:'candles',
            display:'none',
            type:'image',
            rect:['335px','-4px','359px','540px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"candles.png",'0px','0px']
         },
         {
            id:'RoundRect2',
            display:'none',
            type:'rect',
            rect:['51px','26px','568px','186px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text4',
               type:'text',
               rect:['12px','10px','546px','166px','auto','auto'],
               text:"Think through all the steps of preparation you take before walking out the door in the morning, whether it's on your way to work, school, or just your daily routine. Make a checklist below for yourself of all those steps. Evaluate how you might change your morning routine by preparing ahead.",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1)","normal","none",""]
            }]
         },
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
               text:"We need to anticipate and prepare for the Sabbath both physically and spiritually.",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(0,0,0,1.00)","normal","none","normal"],
               transform:[]
            }]
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
            id:'buttons2',
            display:'none',
            type:'image',
            rect:['-1','462','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'RoundRect3',
            display:'none',
            type:'rect',
            rect:['225px','510px','219px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'step4_next_button',
            display:'none',
            type:'ellipse',
            rect:['536px','497px','53px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'step_4_back',
            display:'none',
            type:'ellipse',
            rect:['77px','497px','53px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
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
            id:'skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['538px','491px','47px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['537px','499px','47px','46px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
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
            id:'RoundRectCopy2',
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
               rect:['31px','94px','484px','287','undefined','undefined'],
               text:"Then the LORD said to Moses, \"How long will you refuse to keep my commands and my instructions? Bear in mind that the LORD has given you the Sabbath; that is why on the sixth day he gives you bread for two days.\"",
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
            id:'Text6',
            display:'none',
            type:'text',
            rect:['62px','151px','546px','221px','auto','auto'],
            text:"In this teaching segment, Rabbi Eckstein makes a case for a calmer, more intentional approach to the Sabbath — not guilting us into lavish preparation, but beckoning us to truly appreciate and anticipate all this day has to offer.",
            align:"left",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'Text5',
            display:'none',
            type:'text',
            rect:['8px','447px','635px','40px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'Text9',
            display:'none',
            type:'text',
            rect:['122px','237px','448px','19px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'back_buttons',
            type:'group',
            rect:['81','499','52','49','auto','auto'],
            c:[
            {
               id:'bb_01',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_02',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_03',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_04',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_05',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_06',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_07',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_08',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'bb_09',
               display:'none',
               type:'ellipse',
               rect:['0px','0px','52px','49px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'restart',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         }],
         symbolInstances: [
         {
            id:'restart',
            symbolName:'restart'
         }
         ]
      },
   states: {
      "Base State": {
         "${_sb02}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy}": [
            ["style", "top", '3px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "font-size", '32px']
         ],
         "${_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '12px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "font-size", '32px']
         ],
         "${_bb_08}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_07}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_sb01}": [
            ["style", "top", '501px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '81px']
         ],
         "${_Text4}": [
            ["style", "top", '10px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '12px'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.36'],
            ["transform", "scaleX", '0.36'],
            ["style", "opacity", '0'],
            ["style", "left", '512px'],
            ["style", "display", 'none']
         ],
         "${_bb_06}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Group}": [
            ["style", "top", '-2px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '500px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_candles}": [
            ["style", "top", '-4px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "height", '540px'],
            ["style", "opacity", '0'],
            ["style", "left", '474px'],
            ["style", "width", '359.13031068414px']
         ],
         "${_Text9}": [
            ["style", "top", '237px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '591px'],
            ["style", "font-size", '17px']
         ],
         "${_Text5}": [
            ["style", "top", '447px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_buttons2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_RoundRect}": [
            ["style", "-webkit-transform-origin", [20,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.16'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "top", '157px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.16'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "left", '41px']
         ],
         "${_Text7}": [
            ["style", "top", '120px'],
            ["transform", "scaleY", '0.67'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '72px'],
            ["transform", "scaleX", '0.67']
         ],
         "${_next1}": [
            ["color", "background-color", 'rgba(150,118,194,0.00)'],
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
         "${_Text3}": [
            ["style", "top", '68px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "display", 'block'],
            ["style", "left", '12px'],
            ["style", "font-size", '25px']
         ],
         "${_bb_01}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect4Copy3}": [
            ["style", "top", '173px'],
            ["transform", "scaleY", '0.75'],
            ["style", "border-style", 'solid'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "border-width", '8px'],
            ["style", "left", '1114px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.33'],
            ["style", "left", '67.73px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,411,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ]
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
         "${_Text6}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "top", '264px'],
            ["transform", "scaleY", '0.73'],
            ["style", "height", '221px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.73']
         ],
         "${_bb_05}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_step4_next_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3Copy}": [
            ["style", "top", '94.41px'],
            ["style", "width", '483.53px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "height", '287px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '30.68px'],
            ["style", "font-size", '18px']
         ],
         "${_question19} > form:nth-child(1) > input:nth-child(4)": [
            ["transform", "translateX", '268px'],
            ["transform", "translateY", '93px']
         ],
         "${_question19} > form:nth-child(1) > textarea:nth-child(1)": [
            ["transform", "translateX", '134px']
         ],
         "${_nudge}": [
            ["style", "top", '487px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["color", "background-color", 'rgba(176,150,4,1.00)']
         ],
         "${_sb04}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_bb_02}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '500px']
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
         "${_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_step_4_back}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,411,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_sb03}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "border-top-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '0.39'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '546.46px'],
            ["style", "top", '74.83px'],
            ["style", "border-bottom-left-radius", [17,17], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '0.39'],
            ["style", "height", '374px'],
            ["style", "display", 'block'],
            ["style", "left", '429.85px'],
            ["style", "-webkit-transform-origin", [20,26], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [20,26],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_bb_09}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_03}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_question19}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '31px']
         ],
         "${_bb_04}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_question19} > form:nth-child(1)": [
            ["transform", "translateX", '462px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '232px'],
            ["style", "height", '174px']
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
            "origin_back": 15250,
            "skipcheck": 18000,
            "herewego": 18250
         },
         timeline: [
            { id: "dg13", tween: [ "transform", "${_Text7}", "scaleX", '1', { fromValue: '0.67'}], position: 865, duration: 750 },
            { id: "dg14", tween: [ "transform", "${_Text7}", "scaleX", '0.75', { fromValue: '1'}], position: 2210, duration: 470 },
            { id: "dg142", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 540 },
            { id: "dg73", tween: [ "style", "${_RoundRect2}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 750 },
            { id: "dg74", tween: [ "style", "${_RoundRect2}", "opacity", '0', { fromValue: '1'}], position: 18250, duration: 750 },
            { id: "eid12", tween: [ "style", "${_bb_05}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "transform", "${_candles}", "scaleX", '1', { fromValue: '0.9'}], position: 3750, duration: 2250, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "transform", "${_candles}", "scaleX", '1.19', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "dg57", tween: [ "style", "${_step4_next_button}", "display", 'block', { fromValue: 'none'}], position: 13964, duration: 0 },
            { id: "dg58", tween: [ "style", "${_step4_next_button}", "display", 'none', { fromValue: 'block'}], position: 14054, duration: 0 },
            { id: "dg140", tween: [ "style", "${_sabbath_bar}", "top", '460px', { fromValue: '500px'}], position: 1250, duration: 540 },
            { id: "dg141", tween: [ "style", "${_sabbath_bar}", "top", '563px', { fromValue: '460px'}], position: 18750, duration: 750 },
            { id: "dg132", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 500 },
            { id: "dg133", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { fromValue: 'rgba(45,105,179,1.00)'}], position: 19500, duration: 750 },
            { id: "dg134", tween: [ "color", "${_Stage}", "background-color", 'rgba(30,4,92,1)', { fromValue: 'rgba(0,0,0,1.00)'}], position: 20250, duration: 1250 },
            { id: "dg135", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { fromValue: 'rgba(30,4,92,1)'}], position: 21500, duration: 1500 },
            { id: "dg95", tween: [ "transform", "${_RoundRectCopy2}", "scaleX", '1.06', { fromValue: '0.39'}], position: 8950, duration: 1177, easing: "easeOutQuad" },
            { id: "dg96", tween: [ "transform", "${_RoundRectCopy2}", "scaleX", '0.78', { fromValue: '1.06'}], position: 11000, duration: 1500, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "style", "${_candles}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
            { id: "eid37", tween: [ "style", "${_candles}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0, easing: "easeInQuad" },
            { id: "dg101", tween: [ "style", "${_step_4_back}", "display", 'block', { fromValue: 'none'}], position: 13964, duration: 0 },
            { id: "dg102", tween: [ "style", "${_step_4_back}", "display", 'none', { fromValue: 'block'}], position: 14054, duration: 0 },
            { id: "dg80", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 1265, duration: 540 },
            { id: "dg81", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "dg82", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 2750, duration: 3500 },
            { id: "dg83", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 6250, duration: 500, easing: "easeOutQuad" },
            { id: "dg84", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 10250, duration: 500, easing: "easeOutQuad" },
            { id: "dg85", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10750, duration: 500, easing: "easeOutQuad" },
            { id: "dg86", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 13500, duration: 500 },
            { id: "dg87", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 14000, duration: 500 },
            { id: "dg61", tween: [ "style", "${_sb02}", "display", 'block', { fromValue: 'none'}], position: 2395, duration: 0 },
            { id: "dg62", tween: [ "style", "${_sb02}", "display", 'none', { fromValue: 'block'}], position: 6435, duration: 0 },
            { id: "dg59", tween: [ "style", "${_sb01}", "display", 'block', { fromValue: 'none'}], position: 2210, duration: 0 },
            { id: "dg60", tween: [ "style", "${_sb01}", "display", 'none', { fromValue: 'block'}], position: 2395, duration: 0 },
            { id: "dg42", tween: [ "style", "${_Text8}", "top", '237px', { fromValue: '201px'}], position: 2210, duration: 540 },
            { id: "dg129", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg77", tween: [ "style", "${_RoundRect2}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
            { id: "dg78", tween: [ "style", "${_RoundRect2}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "dg91", tween: [ "style", "${_RoundRectCopy2}", "top", '51px', { fromValue: '74.83px'}], position: 8950, duration: 1177, easing: "easeOutQuad" },
            { id: "dg92", tween: [ "style", "${_RoundRectCopy2}", "top", '113.84px', { fromValue: '51px'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "dg47", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 865, duration: 750 },
            { id: "dg48", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "dg1", tween: [ "style", "${_buttons2}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
            { id: "dg49", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "dg50", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 2680, duration: 70 },
            { id: "eid2", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "dg139", tween: [ "transform", "${_question19}", "translateX", '-420px', { fromValue: '0px'}], position: 18250, duration: 750 },
            { id: "dg4", tween: [ "transform", "${_RoundRect}", "scaleX", '1', { fromValue: '0.16'}], position: 2500, duration: 1500 },
            { id: "dg5", tween: [ "transform", "${_RoundRect}", "scaleX", '0.25', { fromValue: '1'}], position: 6830, duration: 1245, easing: "easeOutQuad" },
            { id: "dg17", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "dg18", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "dg109", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 750 },
            { id: "dg110", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "dg45", tween: [ "transform", "${_Text8}", "scaleX", '1', { fromValue: '0.56'}], position: 865, duration: 750 },
            { id: "dg46", tween: [ "transform", "${_Text8}", "scaleX", '0.75', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "dg54", tween: [ "style", "${_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 17727, duration: 0 },
            { id: "dg55", tween: [ "style", "${_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 17809, duration: 0 },
            { id: "dg79", tween: [ "style", "${_buttons}", "display", 'none', { fromValue: 'block'}], position: 17750, duration: 0 },
            { id: "dg103", tween: [ "style", "${_Text6}", "top", '151px', { fromValue: '264px'}], position: 13000, duration: 750 },
            { id: "dg104", tween: [ "style", "${_Text6}", "top", '38px', { fromValue: '151px'}], position: 14250, duration: 750 },
            { id: "dg89", tween: [ "style", "${_sb04}", "display", 'block', { fromValue: 'none'}], position: 17727, duration: 0 },
            { id: "dg90", tween: [ "style", "${_sb04}", "display", 'none', { fromValue: 'block'}], position: 21454, duration: 0 },
            { id: "dg27", tween: [ "transform", "${_next1}", "scaleX", '0.74', { fromValue: '0.8'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "dg28", tween: [ "transform", "${_next1}", "scaleX", '0.68', { fromValue: '0.74'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "dg29", tween: [ "transform", "${_next1}", "scaleX", '0.74', { fromValue: '0.68'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "dg30", tween: [ "transform", "${_next1}", "scaleX", '0.68', { fromValue: '0.74'}], position: 10856, duration: 1894 },
            { id: "dg31", tween: [ "transform", "${_next1}", "scaleX", '0.75', { fromValue: '0.68'}], position: 16500, duration: 1250 },
            { id: "dg40", tween: [ "style", "${_next1}", "width", '145px', { fromValue: '145px'}], position: 6435, duration: 0 },
            { id: "eid14", tween: [ "style", "${_bb_07}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "color", "${_next1}", "background-color", 'rgba(150,118,194,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(150,118,194,0.00)'}], position: 10605, duration: 0 },
            { id: "dg93", tween: [ "transform", "${_RoundRectCopy2}", "scaleY", '1.06', { fromValue: '0.39'}], position: 8950, duration: 1177, easing: "easeOutQuad" },
            { id: "dg94", tween: [ "transform", "${_RoundRectCopy2}", "scaleY", '0.78', { fromValue: '1.06'}], position: 11000, duration: 1500, easing: "easeOutQuad" },
            { id: "dg113", tween: [ "style", "${_nudge}", "display", 'block', { fromValue: 'none'}], position: 1685, duration: 0 },
            { id: "dg114", tween: [ "style", "${_nudge}", "display", 'none', { fromValue: 'block'}], position: 2395, duration: 0 },
            { id: "dg65", tween: [ "style", "${_RoundRect3}", "display", 'block', { fromValue: 'none'}], position: 17727, duration: 0 },
            { id: "dg66", tween: [ "style", "${_RoundRect3}", "display", 'none', { fromValue: 'block'}], position: 18060, duration: 0 },
            { id: "dg97", tween: [ "style", "${_RoundRectCopy2}", "opacity", '1', { fromValue: '0'}], position: 8950, duration: 1177, easing: "easeOutQuad" },
            { id: "dg98", tween: [ "style", "${_RoundRectCopy2}", "opacity", '0', { fromValue: '1'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_bb_01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_bb_01}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid18", tween: [ "style", "${_bb_01}", "display", 'none', { fromValue: 'block'}], position: 2510, duration: 0 },
            { id: "dg71", tween: [ "transform", "${_RoundRect2}", "scaleX", '1', { fromValue: '0.36'}], position: 15500, duration: 750 },
            { id: "dg72", tween: [ "transform", "${_RoundRect2}", "scaleX", '0.85', { fromValue: '1'}], position: 18250, duration: 750 },
            { id: "eid31", tween: [ "style", "${_candles}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 2250, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_candles}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "dg145", tween: [ "style", "${_question19} > form:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 1000 },
            { id: "dg146", tween: [ "style", "${_question19} > form:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 18250, duration: 750 },
            { id: "dg67", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 17955, duration: 0 },
            { id: "dg68", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 18060, duration: 0 },
            { id: "eid8", tween: [ "style", "${_bb_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_bb_02}", "display", 'block', { fromValue: 'none'}], position: 6185, duration: 0 },
            { id: "eid20", tween: [ "style", "${_bb_02}", "display", 'none', { fromValue: 'block'}], position: 6355, duration: 0 },
            { id: "dg105", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.73'}], position: 13000, duration: 750 },
            { id: "dg106", tween: [ "transform", "${_Text6}", "scaleY", '0.85', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "dg69", tween: [ "transform", "${_RoundRect2}", "scaleY", '1', { fromValue: '0.36'}], position: 15500, duration: 750 },
            { id: "dg70", tween: [ "transform", "${_RoundRect2}", "scaleY", '0.85', { fromValue: '1'}], position: 18250, duration: 750 },
            { id: "dg107", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.73'}], position: 13000, duration: 750 },
            { id: "dg108", tween: [ "transform", "${_Text6}", "scaleX", '0.85', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "dg2", tween: [ "style", "${_buttons2}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 750 },
            { id: "dg3", tween: [ "style", "${_buttons2}", "opacity", '0', { fromValue: '1'}], position: 18250, duration: 500 },
            { id: "dg147", tween: [ "transform", "${_question19} > form:nth-child(1)", "translateX", '-7px', { fromValue: '462px'}], position: 15500, duration: 1000 },
            { id: "dg136", tween: [ "style", "${_question19}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
            { id: "dg137", tween: [ "style", "${_question19}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "dg131", tween: [ "style", "${_Text}", "left", '614px', { fromValue: '189px'}], position: 10856, duration: 1518, easing: "easeOutQuad" },
            { id: "dg43", tween: [ "transform", "${_Text8}", "scaleY", '1', { fromValue: '0.56'}], position: 865, duration: 750 },
            { id: "dg44", tween: [ "transform", "${_Text8}", "scaleY", '0.75', { fromValue: '1'}], position: 2210, duration: 540 },
            { id: "dg143", tween: [ "style", "${_question19} > form:nth-child(1)", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0 },
            { id: "dg144", tween: [ "style", "${_question19} > form:nth-child(1)", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "dg130", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 10856, duration: 1518, easing: "easeOutQuad" },
            { id: "dg88", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '500px'}], position: 1265, duration: 540 },
            { id: "eid15", tween: [ "style", "${_bb_08}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg115", tween: [ "style", "${_nudge}", "opacity", '0.9', { fromValue: '0'}], position: 1750, duration: 130 },
            { id: "dg116", tween: [ "style", "${_nudge}", "opacity", '0', { fromValue: '0.9'}], position: 1880, duration: 180 },
            { id: "dg117", tween: [ "style", "${_nudge}", "opacity", '0.9', { fromValue: '0'}], position: 2060, duration: 150 },
            { id: "dg118", tween: [ "style", "${_nudge}", "opacity", '0', { fromValue: '0.9'}], position: 2210, duration: 185 },
            { id: "dg15", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 865, duration: 750 },
            { id: "dg16", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 2210, duration: 470 },
            { id: "dg6", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 1500 },
            { id: "dg7", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 6830, duration: 1245, easing: "easeOutQuad" },
            { id: "dg63", tween: [ "style", "${_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 17955, duration: 0 },
            { id: "dg64", tween: [ "style", "${_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 18060, duration: 0 },
            { id: "dg111", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "dg112", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "dg52", tween: [ "style", "${_sb03}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
            { id: "dg53", tween: [ "style", "${_sb03}", "display", 'none', { fromValue: 'block'}], position: 10808, duration: 0 },
            { id: "dg10", tween: [ "style", "${_Text7}", "top", '156px', { fromValue: '120px'}], position: 2210, duration: 470 },
            { id: "dg99", tween: [ "style", "${_RoundRectCopy2}", "left", '44.31px', { fromValue: '429.85px'}], position: 8950, duration: 1177, easing: "easeOutQuad" },
            { id: "dg100", tween: [ "style", "${_RoundRectCopy2}", "left", '-361.31px', { fromValue: '44.31px'}], position: 10856, duration: 1643, easing: "easeOutQuad" },
            { id: "eid3", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 1000 },
            { id: "eid6", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 18250, duration: 750 },
            { id: "eid4", tween: [ "style", "${_Text9}", "left", '122px', { fromValue: '591px'}], position: 15500, duration: 1000 },
            { id: "eid7", tween: [ "style", "${_Text9}", "left", '-298px', { fromValue: '122px'}], position: 18250, duration: 750 },
            { id: "eid10", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_bb_03}", "display", 'block', { fromValue: 'none'}], position: 10605, duration: 0 },
            { id: "eid22", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'block'}], position: 18060, duration: 0 },
            { id: "dg56", tween: [ "style", "${_skip_check_button}", "opacity", '0', { fromValue: '0'}], position: 17727, duration: 0 },
            { id: "dg75", tween: [ "style", "${_RoundRect2}", "left", '51px', { fromValue: '512px'}], position: 15500, duration: 750 },
            { id: "dg76", tween: [ "style", "${_RoundRect2}", "left", '-212px', { fromValue: '51px'}], position: 18250, duration: 750 },
            { id: "eid1", tween: [ "style", "${_RoundRectCopy2}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0 },
            { id: "dg33", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 6250, duration: 0 },
            { id: "dg34", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0 },
            { id: "dg38", tween: [ "style", "${_next1}", "opacity", '0', { fromValue: '1'}], position: 21750, duration: 750 },
            { id: "eid29", tween: [ "style", "${_candles}", "left", '335px', { fromValue: '474px'}], position: 3750, duration: 2250, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "style", "${_candles}", "left", '470px', { fromValue: '335px'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "dg41", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 8443, duration: 0 },
            { id: "dg8", tween: [ "transform", "${_RoundRect}", "scaleY", '1', { fromValue: '0.16'}], position: 2500, duration: 1500 },
            { id: "dg9", tween: [ "transform", "${_RoundRect}", "scaleY", '0.25', { fromValue: '1'}], position: 6830, duration: 1245, easing: "easeOutQuad" },
            { id: "dg138", tween: [ "style", "${_question19}", "opacity", '0', { fromValue: '1'}], position: 18250, duration: 750 },
            { id: "eid27", tween: [ "transform", "${_candles}", "scaleY", '1', { fromValue: '0.9'}], position: 3750, duration: 2250, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "transform", "${_candles}", "scaleY", '1.19', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "eid16", tween: [ "style", "${_bb_09}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg25", tween: [ "style", "${_next1}", "display", 'none', { fromValue: 'block'}], position: 10856, duration: 0 },
            { id: "dg26", tween: [ "style", "${_next1}", "display", 'none', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid11", tween: [ "style", "${_bb_04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg39", tween: [ "style", "${_next1}", "left", '135px', { fromValue: '491px'}], position: 21750, duration: 750 },
            { id: "dg20", tween: [ "transform", "${_next1}", "scaleY", '0.74', { fromValue: '0.8'}], position: 5000, duration: 1250, easing: "easeOutQuad" },
            { id: "dg21", tween: [ "transform", "${_next1}", "scaleY", '0.68', { fromValue: '0.74'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "dg22", tween: [ "transform", "${_next1}", "scaleY", '0.74', { fromValue: '0.68'}], position: 9000, duration: 1750, easing: "easeOutQuad" },
            { id: "dg23", tween: [ "transform", "${_next1}", "scaleY", '0.68', { fromValue: '0.74'}], position: 10856, duration: 1894 },
            { id: "dg24", tween: [ "transform", "${_next1}", "scaleY", '0.75', { fromValue: '0.68'}], position: 16500, duration: 1250 },
            { id: "eid13", tween: [ "style", "${_bb_06}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg11", tween: [ "transform", "${_Text7}", "scaleY", '1', { fromValue: '0.67'}], position: 865, duration: 750 },
            { id: "dg12", tween: [ "transform", "${_Text7}", "scaleY", '0.75', { fromValue: '1'}], position: 2210, duration: 470 },
            { id: "dg19", tween: [ "style", "${_next1}", "top", '462px', { fromValue: '487px'}], position: 21750, duration: 750 },
            { id: "dg51", tween: [ "style", "${_Group}", "display", 'none', { fromValue: 'block'}], position: 17329, duration: 0 }         ]
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
      tf: {},
      s: [8,'rgb(0, 0, 0)','solid'],
      r: ['-636','100','99','101','undefined','undefined'],
      id: 'RoundRect4',
      t: 'rect',
      br: ['10px','10px','10px','10px'],
      f: ['rgba(150,118,194,1)'],
      c: [
      {
         t: 'text',
         r: ['12px','12px','76px','68px','auto','auto'],
         id: 'Text11',
         text: '?',
         align: 'center',
         n: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',69,'rgba(0,0,0,1)','500','none','italic']
      }]
   },
   {
      f: ['rgba(150,118,194,1)'],
      s: [0,'rgb(0, 0, 0)','none'],
      r: ['-626px','110px','95px','98px','auto','auto'],
      id: 'trigger',
      t: 'rect',
      cu: ['pointer'],
      v: 'none'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect4}": [
            ["style", "top", '-13px'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.75'],
            ["style", "left", '-12px'],
            ["transform", "scaleX", '0.75'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '8px'],
            ["style", "cursor", 'auto']
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
            "grow": 2250,
            "shrink": 2750
         },
         timeline: [
            { id: "dg156", tween: [ "style", "${_RoundRect4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "dg153", tween: [ "transform", "${_RoundRect4}", "scaleX", '1', { fromValue: '0.75'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "dg154", tween: [ "transform", "${_RoundRect4}", "scaleX", '1.3', { fromValue: '1'}], position: 2250, duration: 483, easing: "easeOutQuad" },
            { id: "dg155", tween: [ "transform", "${_RoundRect4}", "scaleX", '1', { fromValue: '1.3'}], position: 2733, duration: 517, easing: "easeOutQuad" },
            { id: "dg148", tween: [ "style", "${_trigger}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "dg157", tween: [ "style", "${_RoundRect4}", "left", '-636px', { fromValue: '-12px'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "dg149", tween: [ "style", "${_RoundRect4}", "top", '100px', { fromValue: '-13px'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "dg150", tween: [ "transform", "${_RoundRect4}", "scaleY", '1', { fromValue: '0.75'}], position: 0, duration: 1250, easing: "easeOutQuad" },
            { id: "dg151", tween: [ "transform", "${_RoundRect4}", "scaleY", '1.3', { fromValue: '1'}], position: 2250, duration: 483, easing: "easeOutQuad" },
            { id: "dg152", tween: [ "transform", "${_RoundRect4}", "scaleY", '1', { fromValue: '1.3'}], position: 2733, duration: 517, easing: "easeOutQuad" }         ]
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
      tf: [[0,0],{},{},[0.32,0.32]],
      r: [-610,-419,1673,1148],
      id: 'woman_sabbath',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/woman_sabbath2.png']
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
            { id: "dg163", tween: [ "style", "${_woman_sabbath}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 814 },
            { id: "dg164", tween: [ "style", "${_woman_sabbath}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 1000 },
            { id: "dg165", tween: [ "style", "${_woman_sabbath}", "left", '-496.5px', { fromValue: '-610.5px'}], position: 5250, duration: 1000 },
            { id: "dg161", tween: [ "transform", "${_woman_sabbath}", "scaleX", '0.32', { fromValue: '0.27'}], position: 4000, duration: 814 },
            { id: "dg162", tween: [ "transform", "${_woman_sabbath}", "scaleX", '0.23', { fromValue: '0.32'}], position: 5250, duration: 1000 },
            { id: "dg158", tween: [ "style", "${_woman_sabbath}", "top", '-410.15px', { fromValue: '-419.16px'}], position: 5250, duration: 1000 },
            { id: "dg159", tween: [ "transform", "${_woman_sabbath}", "scaleY", '0.32', { fromValue: '0.27'}], position: 4000, duration: 814 },
            { id: "dg160", tween: [ "transform", "${_woman_sabbath}", "scaleY", '0.23', { fromValue: '0.32'}], position: 5250, duration: 1000 }         ]
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
      rect: ['-27px','-521px','690px','581px','auto','auto'],
      type: 'rect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle',
      opacity: 0.5,
      display: 'none',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['0px','0px','37px','34px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['42px','-385px','559px','292px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'restart_prompt',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(158,174,224,1.00)'],
      c: [
      {
         type: 'text',
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson Two?',
         rect: ['18px','26px','512px','65px','auto','auto'],
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
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
            type: 'text',
            rect: ['6px','11px','498px','34px','auto','auto'],
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson Two',
            align: 'left',
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal']
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
            type: 'text',
            rect: ['6px','11px','498px','34px','auto','auto'],
            id: 'Text10',
            text: 'No, I want to continue working on the page I\'m on',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','normal','none','normal']
         }]
      },
      {
         rect: ['-87px','-144px','745px','625px','auto','auto'],
         type: 'rect',
         id: 'curtain',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(11,0,52,1)']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',29,'rgba(0,0,0,1.00)','normal','none','normal'],
         rect: ['530px','0px','25px','34px','auto','auto'],
         align: 'left',
         display: 'none',
         id: 'escape',
         text: 'X',
         cursor: ['pointer'],
         type: 'text'
      }]
   },
   {
      rect: ['60px','-257px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      display: 'none',
      id: 'restart_yes_button',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   },
   {
      rect: ['60px','-180px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      display: 'none',
      id: 'restart_no_button',
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
         "${_Text5}": [
            ["style", "height", '65px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "top", '26px']
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
         "${_Text10}": [
            ["style", "top", '11px'],
            ["style", "left", '6px']
         ],
         "${_restart_no_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
         ],
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
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
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_curtain}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
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
