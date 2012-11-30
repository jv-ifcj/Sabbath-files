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
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'question',
            display:'none',
            type:'rect',
            rect:['116px','60px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"True or False? For Jews, the Sabbath is seen as the preparation point for the beginning of the week.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbar',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheader',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'questionCopy',
            display:'none',
            type:'rect',
            rect:['116px','60px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"Question text",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(11,0,52,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheaderCopy',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0px','auto','670px','100px','auto','0px'],
            clip:['rect(19px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'q20_false_submit_button',
            display:'none',
            type:'rect',
            rect:['232px','506px','211px','42px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q20_true_submit_button',
            display:'none',
            type:'rect',
            rect:['225px','504px','222px','42px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'next_play',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['91px','289px','82px','51px','auto','auto'],
            text:"True",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'correct',
            display:'none',
            type:'image',
            rect:['121px','355','89px','41px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"correct.png",'0px','0px']
         },
         {
            id:'Text7',
            display:'none',
            type:'text',
            rect:['33px','313px','601px','164px','auto','auto'],
            text:"Correct, the answer is False. Rabbi Eckstein said that in Judaism, the Sabbath is the seventh day of the week, the culmination of the week. \"We work hard all week so that we can enjoy the Sabbath and the spiritual replenishment that it provides.\"",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['91px','355px','82px','51px','auto','auto'],
            text:"False<br>",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text6',
            display:'none',
            type:'text',
            rect:['50px','324px','576px','128px','auto','auto'],
            text:"Sorry, the correct answer is False. Rabbi Eckstein said that in Judaism, the Sabbath is the seventh day of the week, the culmination of the week. \"We work hard all week so that we can enjoy the Sabbath and the spiritual replenishment that it provides.\"",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',23,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text3',
            display:'none',
            type:'text',
            rect:['64px','221px','542px','51px','auto','auto'],
            text:"Reflection Questions",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',40,"rgba(255,255,255,1)","normal","none","italic"]
         },
         {
            id:'Text4',
            display:'none',
            type:'text',
            rect:['62px','103px','541px','265px','auto','auto'],
            text:"While Christianity often relegates the Sabbath to the status of an optional discipline, like an extra credit assignment meant only for overachieving students, for Jews the Sabbath is central. So much so, the Rabbi tells us, that Jews refer to the days of the week in reference to their proximity to the Sabbath: \"first day toward the Sabbath,\" \"second day towards the Sabbath,\" and so on—like an eager child counting down the days until a birthday or a vacation.",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text5',
            display:'none',
            type:'text',
            rect:['38px','425px','593px','51px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'select',
            display:'none',
            type:'image',
            rect:['116','287','102px','42px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"select.png",'0px','0px']
         },
         {
            id:'wrong',
            display:'none',
            type:'image',
            rect:['116','287','101px','42px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrong.png",'0px','0px']
         },
         {
            id:'RoundRect',
            display:'none',
            type:'rect',
            rect:['121px','287px','82px','39px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_button',
            display:'none',
            type:'ellipse',
            rect:['540px','492px','47px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','491px','49px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['82px','498px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['82px','497px','47px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect2',
            display:'none',
            type:'rect',
            rect:['121px','355px','82px','39px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text8',
            display:'none',
            type:'text',
            rect:['108','252px','634px','167px','undefined','undefined'],
            text:"Please take a moment to reflect and answer the following questions based on the material we've covered up to this point.  Please click the Submit button after completing each question to save your response.  You may skip a question by clicking the forward arrow.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
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
         "${_bb1}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbarCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(11,0,52,1.00)'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text8}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "font-size", '20px'],
            ["style", "top", '252px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '167px'],
            ["style", "width", '634px'],
            ["style", "display", 'none']
         ],
         "${_bb_08}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_bb_07}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_questionheader}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text4}": [
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '64px'],
            ["style", "font-size", '22px'],
            ["style", "top", '245px'],
            ["transform", "scaleY", '0.72'],
            ["style", "font-style", 'normal'],
            ["style", "display", 'none'],
            ["style", "text-align", 'left']
         ],
         "${_questionbody}": [
            ["style", "top", '56px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_06}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_topbar}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-102px'],
            ["style", "opacity", '0'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7}": [
            ["transform", "scaleX", '0.56'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "font-size", '24px'],
            ["style", "top", '358.92px'],
            ["transform", "scaleY", '0.56'],
            ["style", "height", '164px'],
            ["style", "display", 'none'],
            ["style", "width", '601px']
         ],
         "${_question}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '571px'],
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0'],
            ["style", "left", '64px'],
            ["style", "font-size", '40px'],
            ["style", "top", '302px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.56999'],
            ["style", "height", '51px']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_Text5}": [
            ["style", "top", '425px'],
            ["style", "height", '51px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '38px'],
            ["style", "font-size", '18px']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionCopy}": [
            ["color", "background-color", 'rgba(150,118,194,1.00)'],
            ["style", "display", 'none']
         ],
         "${_bb_05}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_buttons_sans}": [
            ["style", "top", '562px'],
            ["style", "opacity", '0']
         ],
         "${_bb_04}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '355px'],
            ["transform", "scaleY", '0.87'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.87'],
            ["style", "opacity", '0'],
            ["style", "left", '629px'],
            ["style", "width", '82px']
         ],
         "${_Text6}": [
            ["style", "top", '396px'],
            ["transform", "scaleY", '0.75'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '47px'],
            ["style", "font-size", '23px']
         ],
         "${_bb_02}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_buttons}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_bb_03}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_q20_false_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_01}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_correct}": [
            ["style", "display", 'none'],
            ["style", "height", '41px'],
            ["style", "opacity", '0'],
            ["style", "left", '121px'],
            ["style", "width", '89px']
         ],
         "${_select}": [
            ["style", "top", '287px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "height", '42px'],
            ["style", "width", '102px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '629px'],
            ["style", "font-size", '32px'],
            ["style", "top", '287px'],
            ["transform", "scaleY", '0.87'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0.87'],
            ["style", "width", '82px']
         ],
         "${_bb_09}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_questionheaderCopy}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_wrong}": [
            ["style", "height", '42px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '101px']
         ],
         "${_q20_true_submit_button}": [
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
         duration: 19000,
         autoPlay: false,
         labels: {
            "origin_back": 7500,
            "1_skip_check": 10000,
            "true_select": 10250,
            "true_submit": 10500,
            "false_select": 13750,
            "false_submit": 14000,
            "skip_go": 17000,
            "q20_end": 18500
         },
         timeline: [
            { id: "eid232", tween: [ "transform", "${_Text7}", "scaleX", '1', { fromValue: '0.56'}], position: 15500, duration: 455, easing: "easeInQuad" },
            { id: "eid250", tween: [ "transform", "${_Text7}", "scaleX", '0.86', { fromValue: '1'}], position: 16155, duration: 595, easing: "easeInQuad" },
            { id: "eid44", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid4", tween: [ "style", "${_question}", "left", '116px', { fromValue: '571px'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid150", tween: [ "style", "${_question}", "left", '-189px', { fromValue: '116px'}], position: 12601, duration: 435, easing: "easeInQuad" },
            { id: "eid179", tween: [ "style", "${_question}", "left", '116px', { fromValue: '-189px'}], position: 13750, duration: 0, easing: "easeInQuad" },
            { id: "eid241", tween: [ "style", "${_question}", "left", '-377px', { fromValue: '116px'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_question}", "left", '-138px', { fromValue: '116px'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid2", tween: [ "style", "${_questionCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 6203, duration: 0 },
            { id: "eid300", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 6298, duration: 0 },
            { id: "eid338", tween: [ "style", "${_bb_05}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid272", tween: [ "style", "${_skip_button}", "display", 'block', { fromValue: 'none'}], position: 9704, duration: 0, easing: "easeInQuad" },
            { id: "eid273", tween: [ "style", "${_skip_button}", "display", 'none', { fromValue: 'block'}], position: 9813, duration: 0, easing: "easeInQuad" },
            { id: "eid288", tween: [ "style", "${_skip_button}", "display", 'block', { fromValue: 'none'}], position: 10194, duration: 0, easing: "easeInQuad" },
            { id: "eid289", tween: [ "style", "${_skip_button}", "display", 'none', { fromValue: 'block'}], position: 10329, duration: 0, easing: "easeInQuad" },
            { id: "eid290", tween: [ "style", "${_skip_button}", "display", 'block', { fromValue: 'none'}], position: 13697, duration: 0, easing: "easeInQuad" },
            { id: "eid291", tween: [ "style", "${_skip_button}", "display", 'none', { fromValue: 'block'}], position: 13887, duration: 0, easing: "easeInQuad" },
            { id: "eid46", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0, easing: "easeInQuad" },
            { id: "eid76", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid216", tween: [ "style", "${_correct}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 250, easing: "easeInQuad" },
            { id: "eid219", tween: [ "style", "${_correct}", "opacity", '0', { fromValue: '1'}], position: 14500, duration: 250, easing: "easeInQuad" },
            { id: "eid220", tween: [ "style", "${_correct}", "opacity", '1', { fromValue: '0'}], position: 14750, duration: 250, easing: "easeInQuad" },
            { id: "eid221", tween: [ "style", "${_correct}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 250, easing: "easeInQuad" },
            { id: "eid339", tween: [ "style", "${_bb_04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "style", "${_bb_04}", "display", 'block', { fromValue: 'none'}], position: 12392, duration: 0 },
            { id: "eid351", tween: [ "style", "${_bb_04}", "display", 'none', { fromValue: 'block'}], position: 12564, duration: 0 },
            { id: "eid352", tween: [ "style", "${_bb_04}", "display", 'block', { fromValue: 'none'}], position: 15857, duration: 0 },
            { id: "eid353", tween: [ "style", "${_bb_04}", "display", 'none', { fromValue: 'block'}], position: 16107, duration: 0 },
            { id: "eid40", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 0, duration: 750 },
            { id: "eid321", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0.25'}], position: 8000, duration: 0 },
            { id: "eid322", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 9000, duration: 750 },
            { id: "eid327", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 9813, duration: 0 },
            { id: "eid331", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 9946, duration: 0 },
            { id: "eid324", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 10196, duration: 0 },
            { id: "eid281", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10500, duration: 250 },
            { id: "eid284", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 13666, duration: 0, easing: "easeInQuad" },
            { id: "eid285", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 14000, duration: 250 },
            { id: "eid68", tween: [ "transform", "${_Text4}", "scaleY", '1', { fromValue: '0.72'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_Text4}", "scaleY", '0.7', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "eid301", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 9704, duration: 0 },
            { id: "eid302", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 10304, duration: 0 },
            { id: "eid303", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 12392, duration: 0 },
            { id: "eid304", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 12501, duration: 0 },
            { id: "eid305", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 13693, duration: 0 },
            { id: "eid306", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 13803, duration: 0 },
            { id: "eid307", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 15900, duration: 0 },
            { id: "eid308", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 16015, duration: 0 },
            { id: "eid36", tween: [ "style", "${_buttons_sans}", "top", '460px', { fromValue: '562px'}], position: 0, duration: 750 },
            { id: "eid21", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.87'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid211", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '1'}], position: 13709, duration: 0, easing: "easeInQuad" },
            { id: "eid264", tween: [ "style", "${_RoundRect2}", "display", 'block', { fromValue: 'none'}], position: 9704, duration: 0, easing: "easeInQuad" },
            { id: "eid265", tween: [ "style", "${_RoundRect2}", "display", 'none', { fromValue: 'block'}], position: 10079, duration: 0, easing: "easeInQuad" },
            { id: "eid266", tween: [ "style", "${_RoundRect2}", "display", 'block', { fromValue: 'none'}], position: 10196, duration: 0, easing: "easeInQuad" },
            { id: "eid267", tween: [ "style", "${_RoundRect2}", "display", 'none', { fromValue: 'block'}], position: 10304, duration: 0, easing: "easeInQuad" },
            { id: "eid124", tween: [ "style", "${_wrong}", "display", 'block', { fromValue: 'none'}], position: 10750, duration: 0 },
            { id: "eid128", tween: [ "style", "${_wrong}", "display", 'none', { fromValue: 'block'}], position: 11793, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 8750, duration: 0, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 18250, duration: 0, easing: "easeInQuad" },
            { id: "eid143", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.75'}], position: 12000, duration: 455, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "transform", "${_Text6}", "scaleX", '0.8', { fromValue: '1'}], position: 12815, duration: 435, easing: "easeInQuad" },
            { id: "eid310", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid311", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid315", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutQuad" },
            { id: "eid314", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeOutQuad" },
            { id: "eid337", tween: [ "style", "${_bb_06}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '0.87'}], position: 8750, duration: 750, easing: "easeOutQuad" },
            { id: "eid160", tween: [ "transform", "${_Text2}", "scaleY", '0.8', { fromValue: '1'}], position: 12701, duration: 435, easing: "easeInQuad" },
            { id: "eid187", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '1'}], position: 13666, duration: 0, easing: "easeInQuad" },
            { id: "eid256", tween: [ "transform", "${_Text2}", "scaleY", '0.86', { fromValue: '1'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid260", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '1'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid13", tween: [ "style", "${_Text2}", "left", '127px', { fromValue: '629px'}], position: 8750, duration: 750, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_Text2}", "left", '-178px', { fromValue: '127px'}], position: 12701, duration: 435, easing: "easeInQuad" },
            { id: "eid185", tween: [ "style", "${_Text2}", "left", '127px', { fromValue: '127px'}], position: 13666, duration: 0, easing: "easeInQuad" },
            { id: "eid243", tween: [ "style", "${_Text2}", "left", '-366px', { fromValue: '127px'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid258", tween: [ "style", "${_Text2}", "left", '127px', { fromValue: '127px'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid85", tween: [ "style", "${_Text2}", "left", '-127px', { fromValue: '127px'}], position: 17500, duration: 750, easing: "easeInQuad" },
            { id: "eid239", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 15500, duration: 0, easing: "easeInQuad" },
            { id: "eid147", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 455, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 12815, duration: 435, easing: "easeInQuad" },
            { id: "eid23", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.87'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid212", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '1'}], position: 13709, duration: 0, easing: "easeInQuad" },
            { id: "eid316", tween: [ "style", "${_buttons}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid320", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Text6}", "top", '324px', { fromValue: '396px'}], position: 12000, duration: 455, easing: "easeOutQuad" },
            { id: "eid336", tween: [ "style", "${_bb_07}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid136", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 705, easing: "easeInQuad" },
            { id: "eid213", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 13709, duration: 0, easing: "easeInQuad" },
            { id: "eid98", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 15250, duration: 705, easing: "easeInQuad" },
            { id: "eid109", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid86", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid333", tween: [ "style", "${_bb_01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid342", tween: [ "style", "${_bb_01}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid343", tween: [ "style", "${_bb_01}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0 },
            { id: "eid334", tween: [ "style", "${_bb_09}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 9946, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 10121, duration: 0 },
            { id: "eid341", tween: [ "style", "${_bb_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${_bb_02}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid345", tween: [ "style", "${_bb_02}", "display", 'none', { fromValue: 'block'}], position: 9813, duration: 0 },
            { id: "eid114", tween: [ "style", "${_select}", "display", 'block', { fromValue: 'none'}], position: 10196, duration: 0 },
            { id: "eid116", tween: [ "style", "${_select}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
            { id: "eid117", tween: [ "style", "${_select}", "display", 'block', { fromValue: 'none'}], position: 13666, duration: 0 },
            { id: "eid121", tween: [ "style", "${_select}", "display", 'none', { fromValue: 'block'}], position: 14330, duration: 0 },
            { id: "eid50", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '0.56999'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "transform", "${_Text3}", "scaleX", '0.75', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid38", tween: [ "style", "${_sabbath_bar}", "bottom", '0px', { fromValue: '-102px'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid234", tween: [ "transform", "${_Text7}", "scaleY", '1', { fromValue: '0.56'}], position: 15500, duration: 455, easing: "easeInQuad" },
            { id: "eid251", tween: [ "transform", "${_Text7}", "scaleY", '0.86', { fromValue: '1'}], position: 16155, duration: 595, easing: "easeInQuad" },
            { id: "eid282", tween: [ "style", "${_q20_true_submit_button}", "display", 'block', { fromValue: 'none'}], position: 10196, duration: 0, easing: "easeInQuad" },
            { id: "eid283", tween: [ "style", "${_q20_true_submit_button}", "display", 'none', { fromValue: 'block'}], position: 10304, duration: 0, easing: "easeInQuad" },
            { id: "eid48", tween: [ "style", "${_Text3}", "top", '183px', { fromValue: '302px'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_Text3}", "top", '152px', { fromValue: '183px'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid15", tween: [ "style", "${_Text}", "left", '127px', { fromValue: '629px'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid137", tween: [ "style", "${_Text}", "left", '-82px', { fromValue: '127px'}], position: 11750, duration: 705, easing: "easeInQuad" },
            { id: "eid210", tween: [ "style", "${_Text}", "left", '127px', { fromValue: '-82px'}], position: 13709, duration: 0, easing: "easeInQuad" },
            { id: "eid96", tween: [ "style", "${_Text}", "left", '-82px', { fromValue: '127px'}], position: 15250, duration: 705, easing: "easeInQuad" },
            { id: "eid108", tween: [ "style", "${_Text}", "left", '127px', { fromValue: '-82px'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid83", tween: [ "style", "${_Text}", "left", '-127px', { fromValue: '127px'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid313", tween: [ "transform", "${_Text8}", "scaleY", '0.57999', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "transform", "${_Text4}", "scaleX", '1', { fromValue: '0.72'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "transform", "${_Text4}", "scaleX", '0.7', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "eid25", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 750, easing: "easeOutQuad" },
            { id: "eid165", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 12701, duration: 435, easing: "easeInQuad" },
            { id: "eid188", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 13666, duration: 0, easing: "easeInQuad" },
            { id: "eid248", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid261", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid88", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 750, easing: "easeInQuad" },
            { id: "eid34", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '562px'}], position: 0, duration: 750 },
            { id: "eid115", tween: [ "style", "${_select}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 250 },
            { id: "eid119", tween: [ "style", "${_select}", "opacity", '1', { fromValue: '0'}], position: 13666, duration: 0 },
            { id: "eid120", tween: [ "style", "${_select}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 250 },
            { id: "eid238", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 455, easing: "easeInQuad" },
            { id: "eid245", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 16155, duration: 595, easing: "easeInQuad" },
            { id: "eid240", tween: [ "style", "${_Text7}", "left", '-460px', { fromValue: '33px'}], position: 16155, duration: 595, easing: "easeInQuad" },
            { id: "eid42", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0'}], position: 0, duration: 750 },
            { id: "eid317", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 2500, duration: 500 },
            { id: "eid318", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid319", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.25'}], position: 5750, duration: 0 },
            { id: "eid79", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 5750, duration: 500 },
            { id: "eid80", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 6250, duration: 500 },
            { id: "eid82", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 9250, duration: 500 },
            { id: "eid326", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 9813, duration: 0 },
            { id: "eid332", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0'}], position: 9946, duration: 0 },
            { id: "eid330", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 10194, duration: 0 },
            { id: "eid328", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '0'}], position: 10500, duration: 0 },
            { id: "eid329", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '0'}], position: 10750, duration: 0 },
            { id: "eid293", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 205 },
            { id: "eid294", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 12455, duration: 295 },
            { id: "eid295", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 15649, duration: 306 },
            { id: "eid296", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 15955, duration: 295 },
            { id: "eid298", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 17000, duration: 250 },
            { id: "eid134", tween: [ "style", "${_Text2}", "top", '262px', { fromValue: '355px'}], position: 11750, duration: 705, easing: "easeInQuad" },
            { id: "eid214", tween: [ "style", "${_Text2}", "top", '355px', { fromValue: '262px'}], position: 13666, duration: 0, easing: "easeInQuad" },
            { id: "eid101", tween: [ "style", "${_Text2}", "top", '262px', { fromValue: '355px'}], position: 15250, duration: 705, easing: "easeInQuad" },
            { id: "eid104", tween: [ "style", "${_Text2}", "top", '355px', { fromValue: '262px'}], position: 16896, duration: 0 },
            { id: "eid268", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 9704, duration: 0, easing: "easeInQuad" },
            { id: "eid269", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 10079, duration: 0, easing: "easeInQuad" },
            { id: "eid270", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 13709, duration: 0, easing: "easeInQuad" },
            { id: "eid271", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 13793, duration: 0, easing: "easeInQuad" },
            { id: "eid6", tween: [ "transform", "${_question}", "scaleX", '1', { fromValue: '0.75'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid156", tween: [ "transform", "${_question}", "scaleX", '0.8', { fromValue: '1'}], position: 12601, duration: 435, easing: "easeInQuad" },
            { id: "eid177", tween: [ "transform", "${_question}", "scaleX", '1', { fromValue: '1'}], position: 13750, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "transform", "${_question}", "scaleX", '0.86', { fromValue: '1'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid262", tween: [ "transform", "${_question}", "scaleX", '1', { fromValue: '0.86'}], position: 17000, duration: 0, easing: "easeInQuad" },
            { id: "eid123", tween: [ "style", "${_wrong}", "opacity", '1', { fromValue: '0'}], position: 10750, duration: 250 },
            { id: "eid125", tween: [ "style", "${_wrong}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 250 },
            { id: "eid126", tween: [ "style", "${_wrong}", "opacity", '1', { fromValue: '0'}], position: 11250, duration: 250 },
            { id: "eid127", tween: [ "style", "${_wrong}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 250 },
            { id: "eid148", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeInQuad" },
            { id: "eid217", tween: [ "style", "${_correct}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0, easing: "easeInQuad" },
            { id: "eid222", tween: [ "style", "${_correct}", "display", 'none', { fromValue: 'block'}], position: 15294, duration: 0, easing: "easeInQuad" },
            { id: "eid335", tween: [ "style", "${_bb_08}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid340", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid346", tween: [ "style", "${_bb_03}", "display", 'block', { fromValue: 'none'}], position: 9946, duration: 0 },
            { id: "eid347", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'block'}], position: 10377, duration: 0 },
            { id: "eid348", tween: [ "style", "${_bb_03}", "display", 'block', { fromValue: 'none'}], position: 13666, duration: 0 },
            { id: "eid349", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'block'}], position: 13946, duration: 0 },
            { id: "eid77", tween: [ "style", "${_next_play}", "display", 'block', { fromValue: 'none'}], position: 2945, duration: 0, easing: "easeInQuad" },
            { id: "eid78", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0, easing: "easeInQuad" },
            { id: "eid276", tween: [ "style", "${_next_play}", "display", 'block', { fromValue: 'none'}], position: 12392, duration: 0, easing: "easeInQuad" },
            { id: "eid277", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 12507, duration: 0, easing: "easeInQuad" },
            { id: "eid278", tween: [ "style", "${_next_play}", "display", 'block', { fromValue: 'none'}], position: 15865, duration: 0, easing: "easeInQuad" },
            { id: "eid279", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 16030, duration: 0, easing: "easeInQuad" },
            { id: "eid236", tween: [ "style", "${_Text7}", "top", '313px', { fromValue: '358.92px'}], position: 15500, duration: 455, easing: "easeInQuad" },
            { id: "eid10", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid163", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 12601, duration: 435, easing: "easeInQuad" },
            { id: "eid178", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 13750, duration: 0, easing: "easeInQuad" },
            { id: "eid246", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid87", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid8", tween: [ "transform", "${_question}", "scaleY", '1', { fromValue: '0.75'}], position: 8000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid157", tween: [ "transform", "${_question}", "scaleY", '0.8', { fromValue: '1'}], position: 12601, duration: 435, easing: "easeInQuad" },
            { id: "eid180", tween: [ "transform", "${_question}", "scaleY", '1', { fromValue: '1'}], position: 13750, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "transform", "${_question}", "scaleY", '0.86', { fromValue: '1'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid263", tween: [ "transform", "${_question}", "scaleY", '1', { fromValue: '0.86'}], position: 17000, duration: 0, easing: "easeInQuad" },
            { id: "eid11", tween: [ "style", "${_question}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_question}", "display", 'none', { fromValue: 'block'}], position: 17750, duration: 0, easing: "easeInQuad" },
            { id: "eid55", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutQuad" },
            { id: "eid60", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "easeOutQuad" },
            { id: "eid286", tween: [ "style", "${_q20_false_submit_button}", "display", 'block', { fromValue: 'none'}], position: 13709, duration: 0, easing: "easeInQuad" },
            { id: "eid287", tween: [ "style", "${_q20_false_submit_button}", "display", 'none', { fromValue: 'block'}], position: 13793, duration: 0, easing: "easeInQuad" },
            { id: "eid274", tween: [ "style", "${_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 9893, duration: 0, easing: "easeInQuad" },
            { id: "eid275", tween: [ "style", "${_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 10079, duration: 0, easing: "easeInQuad" },
            { id: "eid29", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 15955, duration: 0, easing: "easeInQuad" },
            { id: "eid102", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid90", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeInQuad" },
            { id: "eid312", tween: [ "transform", "${_Text8}", "scaleX", '0.57999', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid17", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '0.87'}], position: 8750, duration: 750, easing: "easeOutQuad" },
            { id: "eid158", tween: [ "transform", "${_Text2}", "scaleX", '0.8', { fromValue: '1'}], position: 12701, duration: 435, easing: "easeInQuad" },
            { id: "eid186", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '1'}], position: 13666, duration: 0, easing: "easeInQuad" },
            { id: "eid254", tween: [ "transform", "${_Text2}", "scaleX", '0.86', { fromValue: '1'}], position: 16064, duration: 595, easing: "easeInQuad" },
            { id: "eid259", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '1'}], position: 16896, duration: 0, easing: "easeInQuad" },
            { id: "eid54", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeInQuad" },
            { id: "eid129", tween: [ "style", "${_select}", "top", '287px', { fromValue: '287px'}], position: 10196, duration: 0 },
            { id: "eid118", tween: [ "style", "${_select}", "top", '355px', { fromValue: '287px'}], position: 13666, duration: 0 },
            { id: "eid145", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.75'}], position: 12000, duration: 455, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "transform", "${_Text6}", "scaleY", '0.8', { fromValue: '1'}], position: 12815, duration: 435, easing: "easeInQuad" },
            { id: "eid52", tween: [ "transform", "${_Text3}", "scaleY", '1', { fromValue: '0.56999'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "transform", "${_Text3}", "scaleY", '0.75', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid141", tween: [ "style", "${_Text6}", "left", '50px', { fromValue: '47px'}], position: 12000, duration: 455, easing: "easeOutQuad" },
            { id: "eid149", tween: [ "style", "${_Text6}", "left", '-255px', { fromValue: '50px'}], position: 12815, duration: 435, easing: "easeInQuad" },
            { id: "eid62", tween: [ "style", "${_Text4}", "top", '103px', { fromValue: '245px'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "style", "${_Text4}", "top", '1px', { fromValue: '103px'}], position: 6500, duration: 750, easing: "easeInQuad" }         ]
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
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson Two?',
         type: 'text',
         rect: ['18px','26px','512px','65px','auto','auto']
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
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson Two',
            align: 'left',
            rect: ['6px','11px','498px','34px','auto','auto']
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
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
            type: 'text',
            id: 'Text10',
            text: 'No, I want to continue working on the page I\'m on',
            align: 'left',
            rect: ['6px','11px','498px','34px','auto','auto']
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
})(jQuery, AdobeEdge, "EDGE-4723648");
