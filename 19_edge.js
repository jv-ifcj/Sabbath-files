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
            id:'question21',
            type:'rect',
            rect:['116px','31px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"How would you best describe your attitude toward Sunday? Choose as many as apply.",
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
            id:'question23',
            display:'none',
            type:'rect',
            rect:['116px','31px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy2',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"What might you do that will help enhance or change your experience on Sunday?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy2',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheaderCopy2',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question24',
            display:'none',
            type:'rect',
            rect:['116px','31px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy3',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"How do you think the Jews' view of Sabbath as the \"apex of their week\" affects their experience of the day?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy3',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheaderCopy3',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question22',
            display:'none',
            type:'rect',
            rect:['116px','34px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['11px','77px','413px','120px','auto','auto'],
               text:"What do you currently do to anticipate or prepare for Sunday worship?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
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
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'buttons',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'q22_submit_button',
            display:'none',
            type:'rect',
            rect:['221px','503px','225px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q22_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['539px','490px','52px','60px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q22_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['542px','494px','47px','56px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q21_submit_button_revised',
            display:'none',
            type:'rect',
            rect:['224px','505px','222px','43px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'next_play',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q21_skip_button',
            display:'none',
            type:'ellipse',
            rect:['537px','495px','53px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q21_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['537px','497px','54px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q23_submit_button',
            display:'none',
            type:'rect',
            rect:['225px','505px','218px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q23_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['543px','497px','45px','48px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q23_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','52px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q24_submit_button',
            display:'none',
            type:'rect',
            rect:['226px','506px','218px','44px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q24_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['541px','497px','48px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q24_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['543px','494px','44px','56px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['25px','424px','620px','43px','auto','auto'],
            text:"No answer has been saved. Enter a response and click submit to answer this question, or click the arrow to skip it.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['83px','497px','48px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['83px','495px','51px','52px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb3',
            display:'none',
            type:'ellipse',
            rect:['83px','497px','49px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb4',
            display:'none',
            type:'ellipse',
            rect:['84px','499px','46px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'answer_text',
            display:'none',
            type:'text',
            rect:['101px','247px','465px','14px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
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
         "${_skip_text}": [
            ["style", "top", '424px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '25px'],
            ["style", "font-size", '18px']
         ],
         "${_topbarCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_question24}": [
            ["style", "top", '31px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '544px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
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
         "${_questionheaderCopy2}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_answer_text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '621px'],
            ["style", "font-size", '17px'],
            ["style", "top", '247px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '14px'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none']
         ],
         "${_question21}": [
            ["style", "top", '31px'],
            ["transform", "scaleY", '0.95'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0.95'],
            ["style", "opacity", '0'],
            ["style", "left", '608px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_questionbody}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_q24_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q21_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbodyCopy3}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_bb_06}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_topbar}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_q23_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_04}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_q24_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question22_div} > form:nth-child(1) > textarea:nth-child(1)": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '0px']
         ],
         "${_topbarCopy3}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '77px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_bb_03}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_q24_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question23_div}": [
            ["transform", "translateX", '428px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0.83'],
            ["transform", "scaleY", '0.83']
         ],
         "${_questionheader}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_question22}": [
            ["style", "top", '34px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '578px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["style", "display", 'block'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_bb3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbarCopy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_question21_div} > form:nth-child(1)": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '402px']
         ],
         "${_q23_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question24_div}": [
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '428px'],
            ["style", "display", 'none']
         ],
         "${_q21_submit_button_revised}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_05}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_buttons_sans}": [
            ["style", "opacity", '0']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q22_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q22_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question22_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '520px']
         ],
         "${_q23_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_bb_02}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_bb4}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q22_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q21_skip_button}": [
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
         "${_question23}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.83'],
            ["style", "top", '31px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '544px'],
            ["transform", "scaleX", '0.83']
         ],
         "${_questionbodyCopy2}": [
            ["style", "top", '56px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_bb_09}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_questionheaderCopy}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_question21_div}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '0px']
         ],
         "${_questionheaderCopy3}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 25250,
         autoPlay: false,
         labels: {
            "q21_skip_check": 1750,
            "q21_submit": 2000,
            "q21_go": 4000,
            "q22_skip_check": 8250,
            "q22_submit": 8500,
            "q22_go": 10500,
            "q22_end": 11500,
            "q23_begin": 13000,
            "q23_skip_check": 14750,
            "q23_submit": 15000,
            "q23_go": 17000,
            "q23_end": 18000,
            "q24_begin": 19500,
            "origin_back": 19752,
            "q24_skip_check": 21250,
            "q24_submit": 21500,
            "q24_go": 23252,
            "q24_end": 24500
         },
         timeline: [
            { id: "eid109", tween: [ "style", "${_q22_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 8197, duration: 0 },
            { id: "eid110", tween: [ "style", "${_q22_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 8342, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_question21}", "scaleY", '1', { fromValue: '0.95'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid140", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 1430, duration: 0 },
            { id: "eid141", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 1810, duration: 0 },
            { id: "eid186", tween: [ "style", "${_bb_05}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_q22_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 7952, duration: 0 },
            { id: "eid108", tween: [ "style", "${_q22_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 8047, duration: 0 },
            { id: "eid144", tween: [ "style", "${_bb3}", "display", 'block', { fromValue: 'none'}], position: 14441, duration: 0 },
            { id: "eid145", tween: [ "style", "${_bb3}", "display", 'none', { fromValue: 'block'}], position: 14799, duration: 0 },
            { id: "eid1", tween: [ "style", "${_question23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_question23}", "display", 'block', { fromValue: 'none'}], position: 12998, duration: 0, easing: "easeInQuad" },
            { id: "eid69", tween: [ "style", "${_question23}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeInQuad" },
            { id: "eid95", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 1430, duration: 0 },
            { id: "eid117", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 24500, duration: 750 },
            { id: "eid130", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 1710, duration: 0 },
            { id: "eid132", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 1810, duration: 0 },
            { id: "eid133", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 8171, duration: 0 },
            { id: "eid134", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 8326, duration: 0 },
            { id: "eid135", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 14678, duration: 0 },
            { id: "eid136", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 14823, duration: 0 },
            { id: "eid137", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 21176, duration: 0 },
            { id: "eid138", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 21351, duration: 0 },
            { id: "eid14", tween: [ "style", "${_question22_div}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "style", "${_question22_div}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInQuad" },
            { id: "eid52", tween: [ "style", "${_question23}", "opacity", '1', { fromValue: '0'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "style", "${_question23}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid187", tween: [ "style", "${_bb_04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "style", "${_bb_04}", "display", 'block', { fromValue: 'none'}], position: 18751, duration: 0 },
            { id: "eid198", tween: [ "style", "${_bb_04}", "display", 'none', { fromValue: 'block'}], position: 21775, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_question23_div}", "scaleY", '1', { fromValue: '0.83'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "transform", "${_question23_div}", "scaleY", '0.89', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid92", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 1000, duration: 500 },
            { id: "eid103", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid104", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 7500, duration: 500 },
            { id: "eid111", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10500, duration: 500 },
            { id: "eid112", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 14000, duration: 500 },
            { id: "eid113", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 17000, duration: 500 },
            { id: "eid114", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 20502, duration: 498 },
            { id: "eid115", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 23500, duration: 502 },
            { id: "eid75", tween: [ "style", "${_question24}", "opacity", '1', { fromValue: '0'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "style", "${_question24}", "opacity", '0', { fromValue: '1'}], position: 23752, duration: 750, easing: "easeInQuad" },
            { id: "eid142", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 7952, duration: 0 },
            { id: "eid143", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 8279, duration: 0 },
            { id: "eid126", tween: [ "style", "${_q24_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 20951, duration: 0 },
            { id: "eid127", tween: [ "style", "${_q24_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 21076, duration: 0 },
            { id: "eid182", tween: [ "style", "${_bb_08}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_question24_div}", "opacity", '1', { fromValue: '0'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "style", "${_question24_div}", "opacity", '0', { fromValue: '1'}], position: 23252, duration: 750, easing: "easeInQuad" },
            { id: "eid148", tween: [ "style", "${_answer_text}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeInQuad" },
            { id: "eid151", tween: [ "style", "${_answer_text}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
            { id: "eid154", tween: [ "style", "${_answer_text}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "style", "${_answer_text}", "display", 'none', { fromValue: 'block'}], position: 24002, duration: 0, easing: "easeInQuad" },
            { id: "eid46", tween: [ "transform", "${_question23_div}", "translateX", '0px', { fromValue: '428px'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "transform", "${_question23_div}", "translateX", '-328px', { fromValue: '0px'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid128", tween: [ "style", "${_q24_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 21201, duration: 0 },
            { id: "eid129", tween: [ "style", "${_q24_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 21316, duration: 0 },
            { id: "eid122", tween: [ "style", "${_q23_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 14709, duration: 0 },
            { id: "eid123", tween: [ "style", "${_q23_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 14844, duration: 0 },
            { id: "eid116", tween: [ "style", "${_sabbath_bar}", "bottom", '-86px', { fromValue: '0px'}], position: 24002, duration: 748 },
            { id: "eid58", tween: [ "transform", "${_question23}", "scaleX", '1', { fromValue: '0.83'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "transform", "${_question23}", "scaleX", '0.89', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid184", tween: [ "style", "${_bb_06}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_q21_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 1710, duration: 0 },
            { id: "eid100", tween: [ "style", "${_q21_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 1815, duration: 0 },
            { id: "eid105", tween: [ "style", "${_q22_submit_button}", "display", 'block', { fromValue: 'none'}], position: 7952, duration: 0 },
            { id: "eid106", tween: [ "style", "${_q22_submit_button}", "display", 'none', { fromValue: 'block'}], position: 8467, duration: 0 },
            { id: "eid5", tween: [ "style", "${_question21}", "left", '120px', { fromValue: '608px'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid21", tween: [ "style", "${_question21}", "left", '-225px', { fromValue: '120px'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid50", tween: [ "style", "${_question23_div}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "style", "${_question23_div}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid99", tween: [ "style", "${_q21_skip_go_button}", "opacity", '0', { fromValue: '0'}], position: 1710, duration: 0 },
            { id: "eid82", tween: [ "style", "${_question24_div}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0, easing: "easeInQuad" },
            { id: "eid91", tween: [ "style", "${_question24_div}", "display", 'none', { fromValue: 'block'}], position: 24250, duration: 0, easing: "easeInQuad" },
            { id: "eid40", tween: [ "style", "${_question22_div} > form:nth-child(1) > textarea:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid149", tween: [ "style", "${_answer_text}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_answer_text}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid162", tween: [ "style", "${_answer_text}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid169", tween: [ "style", "${_answer_text}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid173", tween: [ "style", "${_answer_text}", "opacity", '1', { fromValue: '0'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid178", tween: [ "style", "${_answer_text}", "opacity", '0', { fromValue: '1'}], position: 23252, duration: 750, easing: "easeInQuad" },
            { id: "eid48", tween: [ "style", "${_question23}", "left", '116px', { fromValue: '544px'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "style", "${_question23}", "left", '-212px', { fromValue: '116px'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid190", tween: [ "style", "${_bb_01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "style", "${_bb_01}", "display", 'block', { fromValue: 'none'}], position: 1415, duration: 0 },
            { id: "eid192", tween: [ "style", "${_bb_01}", "display", 'none', { fromValue: 'block'}], position: 6556, duration: 0 },
            { id: "eid73", tween: [ "transform", "${_question24}", "scaleX", '1', { fromValue: '0.83'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_question24}", "scaleX", '0.89', { fromValue: '1'}], position: 23752, duration: 750, easing: "easeInQuad" },
            { id: "eid71", tween: [ "transform", "${_question24}", "scaleY", '1', { fromValue: '0.83'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "transform", "${_question24}", "scaleY", '0.89', { fromValue: '1'}], position: 23752, duration: 750, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_question22}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 750, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_question22}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 750, easing: "easeInQuad" },
            { id: "eid84", tween: [ "transform", "${_question24_div}", "scaleX", '1', { fromValue: '0.83'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "transform", "${_question24_div}", "scaleX", '0.89', { fromValue: '1'}], position: 23252, duration: 750, easing: "easeInQuad" },
            { id: "eid118", tween: [ "style", "${_q23_submit_button}", "display", 'block', { fromValue: 'none'}], position: 14439, duration: 0 },
            { id: "eid119", tween: [ "style", "${_q23_submit_button}", "display", 'none', { fromValue: 'block'}], position: 14799, duration: 0 },
            { id: "eid19", tween: [ "style", "${_question21_div} > form:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutQuad" },
            { id: "eid183", tween: [ "style", "${_bb_07}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "transform", "${_question23_div}", "scaleX", '1', { fromValue: '0.83'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "transform", "${_question23_div}", "scaleX", '0.89', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid20", tween: [ "style", "${_question21_div} > form:nth-child(1)", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid9", tween: [ "transform", "${_question21}", "scaleX", '1', { fromValue: '0.95'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_bb4}", "display", 'block', { fromValue: 'none'}], position: 20948, duration: 0 },
            { id: "eid147", tween: [ "style", "${_bb4}", "display", 'none', { fromValue: 'block'}], position: 21316, duration: 0 },
            { id: "eid42", tween: [ "style", "${_question22_div} > form:nth-child(1) > textarea:nth-child(1)", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
            { id: "eid181", tween: [ "style", "${_bb_09}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "transform", "${_question24_div}", "scaleY", '1', { fromValue: '0.83'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "transform", "${_question24_div}", "scaleY", '0.89', { fromValue: '1'}], position: 23252, duration: 750, easing: "easeInQuad" },
            { id: "eid101", tween: [ "style", "${_q21_submit_button_revised}", "display", 'block', { fromValue: 'none'}], position: 1415, duration: 0 },
            { id: "eid102", tween: [ "style", "${_q21_submit_button_revised}", "display", 'none', { fromValue: 'block'}], position: 1945, duration: 0 },
            { id: "eid38", tween: [ "transform", "${_question22_div} > form:nth-child(1) > textarea:nth-child(1)", "translateX", '-426px', { fromValue: '0px'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid77", tween: [ "style", "${_question24}", "left", '116px', { fromValue: '544px'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_question24}", "left", '-212px', { fromValue: '116px'}], position: 23752, duration: 750, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${_question23}", "scaleY", '1', { fromValue: '0.83'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid68", tween: [ "transform", "${_question23}", "scaleY", '0.89', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid188", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "style", "${_bb_03}", "display", 'block', { fromValue: 'none'}], position: 13652, duration: 0 },
            { id: "eid196", tween: [ "style", "${_bb_03}", "display", 'none', { fromValue: 'block'}], position: 14988, duration: 0 },
            { id: "eid189", tween: [ "style", "${_bb_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_bb_02}", "display", 'block', { fromValue: 'none'}], position: 7851, duration: 0 },
            { id: "eid194", tween: [ "style", "${_bb_02}", "display", 'none', { fromValue: 'block'}], position: 10186, duration: 0 },
            { id: "eid7", tween: [ "style", "${_question21}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid23", tween: [ "style", "${_question21}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid120", tween: [ "style", "${_q23_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 14439, duration: 0 },
            { id: "eid121", tween: [ "style", "${_q23_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 14549, duration: 0 },
            { id: "eid96", tween: [ "style", "${_q21_skip_button}", "display", 'block', { fromValue: 'none'}], position: 1430, duration: 0 },
            { id: "eid97", tween: [ "style", "${_q21_skip_button}", "display", 'none', { fromValue: 'block'}], position: 1545, duration: 0 },
            { id: "eid29", tween: [ "style", "${_question22}", "left", '116px', { fromValue: '578px'}], position: 6750, duration: 750, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_question22}", "left", '-310px', { fromValue: '116px'}], position: 10500, duration: 750, easing: "easeInQuad" },
            { id: "eid150", tween: [ "style", "${_answer_text}", "left", '101px', { fromValue: '621px'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_answer_text}", "left", '-325px', { fromValue: '101px'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid161", tween: [ "style", "${_answer_text}", "left", '101px', { fromValue: '621px'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "style", "${_answer_text}", "left", '-325px', { fromValue: '101px'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid171", tween: [ "style", "${_answer_text}", "left", '101px', { fromValue: '621px'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid179", tween: [ "style", "${_answer_text}", "left", '-325px', { fromValue: '101px'}], position: 23252, duration: 750, easing: "easeInQuad" },
            { id: "eid44", tween: [ "style", "${_question23_div}", "display", 'block', { fromValue: 'none'}], position: 12998, duration: 0 },
            { id: "eid70", tween: [ "style", "${_question23_div}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeInQuad" },
            { id: "eid17", tween: [ "transform", "${_question21_div} > form:nth-child(1)", "translateX", '0px', { fromValue: '402px'}], position: 500, duration: 750, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "transform", "${_question22_div}", "translateX", '0px', { fromValue: '520px'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid3", tween: [ "style", "${_question21}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_question21}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid79", tween: [ "style", "${_question24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_question24}", "display", 'block', { fromValue: 'none'}], position: 19500, duration: 0, easing: "easeInQuad" },
            { id: "eid81", tween: [ "style", "${_question24}", "display", 'none', { fromValue: 'block'}], position: 24502, duration: 0, easing: "easeInQuad" },
            { id: "eid124", tween: [ "style", "${_q24_submit_button}", "display", 'block', { fromValue: 'none'}], position: 20951, duration: 0 },
            { id: "eid125", tween: [ "style", "${_q24_submit_button}", "display", 'none', { fromValue: 'block'}], position: 21316, duration: 0 },
            { id: "eid12", tween: [ "style", "${_question21_div}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_question21_div}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_question21_div}", "translateX", '-345px', { fromValue: '0px'}], position: 4250, duration: 750, easing: "easeInQuad" },
            { id: "eid15", tween: [ "style", "${_question22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_question22}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeInQuad" },
            { id: "eid41", tween: [ "style", "${_question22}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
            { id: "eid24", tween: [ "style", "${_question21_div}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 750, easing: "easeInQuad" },
            { id: "eid88", tween: [ "transform", "${_question24_div}", "translateX", '0px', { fromValue: '428px'}], position: 19752, duration: 750, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "transform", "${_question24_div}", "translateX", '-328px', { fromValue: '0px'}], position: 23252, duration: 750, easing: "easeInQuad" },
            { id: "eid36", tween: [ "style", "${_question22_div}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 750, easing: "easeOutQuad" }         ]
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
