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
            id:'NextButton',
            type:'rect',
            rect:['711','473','197','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[],
            c:[
            {
               id:'Text5',
               type:'text',
               rect:['18','-5','114','58','undefined','undefined'],
               text:"Next",
               align:"auto",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',52,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'Question1',
            type:'rect',
            rect:['-216','234','512','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
            c:[
            {
               id:'RoundRectCopy',
               type:'rect',
               rect:['0','0','512','266','undefined','undefined'],
               clip:['rect(0px 512px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Think About It",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text',
               type:'text',
               rect:['17','101','481','151','undefined','undefined'],
               text:"How does preparing for Sabbath form us as people of faith and prepare us for other spiritual truths and practices?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question2',
            type:'rect',
            rect:['-395','337','512','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.4','0.4']],
            c:[
            {
               id:'RoundRectCopy3',
               type:'rect',
               rect:['0','0','512','266','undefined','undefined'],
               clip:['rect(0px 512px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(11,0,52,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Think About It",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'TextCopy',
               type:'text',
               rect:['15','85','481','151','undefined','undefined'],
               text:"If you don't currently observe the Sabbath or would like to change your approach to this sacred day, what one thing could you start doing - or not doing - to honor the Sabbath and keep it holy?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',23,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question3',
            type:'rect',
            rect:['534','244','481','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.4','0.4']],
            c:[
            {
               id:'RoundRect3Copy',
               type:'rect',
               rect:['0','0','481','266','undefined','undefined'],
               clip:['rect(0px 481px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy2',
                  type:'text',
                  rect:['32','12','249','45','undefined','undefined'],
                  text:"Apply It",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text3',
               type:'text',
               rect:['18','83','445','160','undefined','undefined'],
               text:"As a family, discuss what you can do to prepare for a meaningful Sabbath. Develop a checklist for each family member and commit to following it for one Sunday. Afterward, discuss together how having this list affected your experience.",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'Text7',
            type:'text',
            rect:['34','190','601','70','undefined','undefined'],
            text:"Think About It",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',53,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'Text8',
            type:'text',
            rect:['108','285','454','79','undefined','undefined'],
            text:"Please take a moment to reflect and answer the following question...",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'Text6',
            display:'none',
            type:'text',
            rect:['79px','146px','512px','192px','auto','auto'],
            text:"Thank you for joining us for this lesson about the Sabbath.<br><br>This concludes Lesson Two.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'NextButtonCopy',
            display:'none',
            type:'rect',
            rect:['535px','391','64px','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'q39_submit_button',
            display:'none',
            type:'rect',
            rect:['229px','510px','205px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['48px','440px','574px','40px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'q18_submit_button',
            display:'none',
            type:'rect',
            rect:['231px','510px','205px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q18_skip_button',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','53px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q18_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','494px','51px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Ellipse4',
            display:'none',
            type:'ellipse',
            rect:['83px','495px','47px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q17_skip_button',
            display:'none',
            type:'ellipse',
            rect:['542px','494px','47px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q17_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['542px','494px','49px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb35',
            display:'none',
            type:'ellipse',
            rect:['79px','494px','50px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'play_button_13',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','53px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb33',
            display:'none',
            type:'ellipse',
            rect:['81px','501px','51px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sb34',
            display:'none',
            type:'ellipse',
            rect:['79px','494px','54px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['116px','291px','427px','29px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'bb1',
            type:'ellipse',
            rect:['85px','494px','45px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:0,
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['83px','501px','51px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb3',
            display:'none',
            type:'ellipse',
            rect:['83px','498px','49px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Continue}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '-185px'],
            ["transform", "translateY", '96px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '145px']
         ],
         "${_bb1}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(11,0,52,1)']
         ],
         "${_bb3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text8}": [
            ["style", "top", '285px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '79px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '108px'],
            ["style", "font-size", '20px']
         ],
         "${_NextButton}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["style", "top", '470px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '687px'],
            ["style", "width", '145px']
         ],
         "${_question18}": [
            ["transform", "translateX", '127px'],
            ["style", "height", '249px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '497px'],
            ["style", "display", 'none']
         ],
         "${_Text5Copy}": [
            ["style", "font-style", 'italic'],
            ["transform", "translateX", '-413px'],
            ["style", "height", '58px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-472px'],
            ["style", "width", '114px']
         ],
         "${_q17_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '460px'],
            ["style", "opacity", '1']
         ],
         "${_question17}": [
            ["transform", "translateX", '308px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '321px'],
            ["style", "height", '202px']
         ],
         "${_TextCopy}": [
            ["style", "top", '85px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '23px']
         ],
         "${_q18_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Question1}": [
            ["style", "top", '79.2px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '486.4px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_q18_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7}": [
            ["style", "top", '64px'],
            ["style", "text-align", 'center'],
            ["style", "height", '70px'],
            ["style", "opacity", '0'],
            ["style", "left", '34px'],
            ["style", "font-size", '53px']
         ],
         "${_sb33}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["style", "top", '83px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '18px'],
            ["style", "font-size", '20px']
         ],
         "${_play_button_13}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text5}": [
            ["style", "top", '-5px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '58px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "width", '114px']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '12px'],
            ["style", "font-size", '27px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '32px'],
            ["style", "width", '249px']
         ],
         "${_sb34}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_NextButtonCopy}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '64px'],
            ["style", "top", '492px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "left", '535px']
         ],
         "${_Ellipse4}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Question3}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '534.7px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_buttons_sans}": [
            ["style", "opacity", '0.25']
         ],
         "${_Text6}": [
            ["transform", "scaleX", '0.89'],
            ["style", "opacity", '0'],
            ["style", "left", '79px'],
            ["style", "font-size", '37px'],
            ["style", "top", '225px'],
            ["transform", "scaleY", '0.89'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_question17} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-298px'],
            ["transform", "translateY", '134px']
         ],
         "${_Text2}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_q39_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect3Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,481,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Question2}": [
            ["style", "top", '337.19px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '-395.6px'],
            ["style", "display", 'block']
         ],
         "${_Text2Copy}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_skip_text}": [
            ["style", "width", '574px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '48px'],
            ["style", "font-size", '18px']
         ],
         "${_buttons}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q17_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '101px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '26px']
         ],
         "${_question18} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-310px'],
            ["transform", "translateY", '151px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_sb35}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_type_text}": [
            ["style", "top", '292px'],
            ["style", "height", '29px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '315px'],
            ["style", "font-size", '17px']
         ],
         "${_q18_skip_go_button}": [
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
         duration: 23500,
         autoPlay: true,
         labels: {
            "q17_home": 13250,
            "q17_skip_check": 14000,
            "q17_next_go": 14500,
            "q18_skip_check": 17750,
            "q18_next_go": 18000
         },
         timeline: [
            { id: "eid295", tween: [ "style", "${_NextButtonCopy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid296", tween: [ "style", "${_NextButtonCopy}", "display", 'none', { fromValue: 'block'}], position: 7370, duration: 0, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "style", "${_Question2}", "left", '79px', { fromValue: '-395.6px'}], position: 15250, duration: 1500, easing: "easeInQuad" },
            { id: "eid109", tween: [ "style", "${_Question2}", "left", '-395.6px', { fromValue: '79px'}], position: 18000, duration: 1500, easing: "easeInQuad" },
            { id: "eid343", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 21500, duration: 1000 },
            { id: "eid42", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 5137, duration: 0 },
            { id: "eid7", tween: [ "style", "${_NextButtonCopy}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_NextButtonCopy}", "opacity", '0', { fromValue: '0'}], position: 7250, duration: 0 },
            { id: "eid57", tween: [ "style", "${_bb3}", "display", 'block', { fromValue: 'none'}], position: 19710, duration: 0 },
            { id: "eid61", tween: [ "style", "${_bb3}", "display", 'none', { fromValue: 'block'}], position: 21355, duration: 0 },
            { id: "eid11", tween: [ "style", "${_sb35}", "display", 'block', { fromValue: 'none'}], position: 17445, duration: 0 },
            { id: "eid12", tween: [ "style", "${_sb35}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid342", tween: [ "style", "${_sabbath_bar}", "top", '511px', { fromValue: '460px'}], position: 21500, duration: 1000 },
            { id: "eid118", tween: [ "transform", "${_Question3}", "scaleX", '1', { fromValue: '0.4'}], position: 18750, duration: 1250, easing: "easeInQuad" },
            { id: "eid207", tween: [ "transform", "${_Question3}", "scaleX", '0.75', { fromValue: '1'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid327", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid328", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 14108, duration: 0 },
            { id: "eid333", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0 },
            { id: "eid334", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid320", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 14504, duration: 496 },
            { id: "eid17", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 500 },
            { id: "eid20", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 500 },
            { id: "eid22", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0.25'}], position: 19000, duration: 0 },
            { id: "eid298", tween: [ "style", "${_question17}", "height", '202px', { fromValue: '202px'}], position: 12250, duration: 0 },
            { id: "eid97", tween: [ "transform", "${_Question2}", "scaleY", '1', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeInQuad" },
            { id: "eid112", tween: [ "transform", "${_Question2}", "scaleY", '0.4', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid47", tween: [ "style", "${_Text8}", "top", '338px', { fromValue: '285px'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid217", tween: [ "style", "${_Text8}", "top", '338px', { fromValue: '338px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid219", tween: [ "style", "${_Text8}", "top", '613.99px', { fromValue: '338px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid324", tween: [ "style", "${_q17_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid325", tween: [ "style", "${_q17_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Question3}", "left", '101.7px', { fromValue: '534.7px'}], position: 18500, duration: 1500, easing: "easeInQuad" },
            { id: "eid209", tween: [ "style", "${_Question3}", "left", '-357px', { fromValue: '101.7px'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_Question1}", "left", '79px', { fromValue: '486.4px'}], position: 11000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "style", "${_Question1}", "left", '-402.58px', { fromValue: '79px'}], position: 15000, duration: 1750, easing: "easeInQuad" },
            { id: "eid349", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.89'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "transform", "${_Question3}", "scaleY", '1', { fromValue: '0.4'}], position: 18750, duration: 1250, easing: "easeInQuad" },
            { id: "eid208", tween: [ "transform", "${_Question3}", "scaleY", '0.75', { fromValue: '1'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid302", tween: [ "transform", "${_question17}", "translateX", '114px', { fromValue: '308px'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid305", tween: [ "transform", "${_question17}", "translateX", '-301px', { fromValue: '114px'}], position: 14750, duration: 750, easing: "easeInQuad" },
            { id: "eid54", tween: [ "style", "${_bb2}", "opacity", '0', { fromValue: '0'}], position: 13010, duration: 0 },
            { id: "eid347", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "transform", "${_Text8}", "scaleX", '0.8', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid318", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "eid339", tween: [ "style", "${_buttons}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Question3}", "top", '132.2px', { fromValue: '13px'}], position: 18500, duration: 1500, easing: "easeInQuad" },
            { id: "eid210", tween: [ "style", "${_Question3}", "top", '112px', { fromValue: '132.2px'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid332", tween: [ "style", "${_q18_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0 },
            { id: "eid335", tween: [ "style", "${_q18_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid64", tween: [ "transform", "${_Question1}", "scaleY", '0.81', { fromValue: '0.4'}], position: 11350, duration: 1400, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "transform", "${_Question1}", "scaleY", '0.4', { fromValue: '0.81'}], position: 15000, duration: 1400, easing: "easeInQuad" },
            { id: "eid310", tween: [ "transform", "${_question18}", "translateY", '325px', { fromValue: '497px'}], position: 16463, duration: 787 },
            { id: "eid314", tween: [ "transform", "${_question18}", "translateY", '510px', { fromValue: '325px'}], position: 18093, duration: 907 },
            { id: "eid62", tween: [ "style", "${_Question1}", "opacity", '1', { fromValue: '0'}], position: 11700, duration: 1050, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_Question1}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 1050, easing: "easeInQuad" },
            { id: "eid93", tween: [ "style", "${_Question2}", "opacity", '1', { fromValue: '0'}], position: 15750, duration: 1000, easing: "easeInQuad" },
            { id: "eid113", tween: [ "style", "${_Question2}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_bb3}", "opacity", '0', { fromValue: '0'}], position: 19710, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_NextButtonCopy}", "scaleX", '1', { fromValue: '1'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid308", tween: [ "style", "${_question18}", "display", 'block', { fromValue: 'none'}], position: 16463, duration: 0 },
            { id: "eid316", tween: [ "style", "${_question18}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_Text8}", "scaleY", '0.8', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid51", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 13010, duration: 0 },
            { id: "eid55", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 14669, duration: 0 },
            { id: "eid300", tween: [ "transform", "${_question17}", "translateY", '321px', { fromValue: '321px'}], position: 12250, duration: 0 },
            { id: "eid1", tween: [ "style", "${_sb33}", "display", 'block', { fromValue: 'none'}], position: 7130, duration: 0 },
            { id: "eid2", tween: [ "style", "${_sb33}", "display", 'none', { fromValue: 'block'}], position: 7405, duration: 0 },
            { id: "eid45", tween: [ "transform", "${_NextButtonCopy}", "scaleY", '1', { fromValue: '1'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 750, easing: "easeInQuad" },
            { id: "eid329", tween: [ "style", "${_q18_submit_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid336", tween: [ "style", "${_q18_submit_button}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid32", tween: [ "style", "${_type_text}", "left", '116px', { fromValue: '315px'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_type_text}", "left", '-304px', { fromValue: '116px'}], position: 14750, duration: 750, easing: "easeInQuad" },
            { id: "eid29", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1540, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 750, easing: "easeInQuad" },
            { id: "eid345", tween: [ "style", "${_Text6}", "top", '146px', { fromValue: '225px'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_sb34}", "display", 'block', { fromValue: 'none'}], position: 13171, duration: 0 },
            { id: "eid10", tween: [ "style", "${_sb34}", "display", 'none', { fromValue: 'block'}], position: 14108, duration: 0 },
            { id: "eid312", tween: [ "style", "${_question18}", "opacity", '1', { fromValue: '0'}], position: 16463, duration: 787 },
            { id: "eid315", tween: [ "style", "${_question18}", "opacity", '0', { fromValue: '1'}], position: 18093, duration: 907 },
            { id: "eid24", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 22120, duration: 0 },
            { id: "eid304", tween: [ "style", "${_question17}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid306", tween: [ "style", "${_question17}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 750, easing: "easeInQuad" },
            { id: "eid297", tween: [ "style", "${_question17}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "eid307", tween: [ "style", "${_question17}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Question2}", "display", 'none', { fromValue: 'block'}], position: 15604, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Ellipse4}", "display", 'block', { fromValue: 'none'}], position: 20685, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Ellipse4}", "display", 'none', { fromValue: 'block'}], position: 20841, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text7}", "top", '190px', { fromValue: '64px'}], position: 2000, duration: 1540, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "style", "${_Text7}", "top", '245px', { fromValue: '190px'}], position: 7750, duration: 750, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_Text7}", "top", '245px', { fromValue: '245px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid215", tween: [ "style", "${_Text7}", "top", '-63px', { fromValue: '245px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid117", tween: [ "style", "${_Question3}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000, easing: "easeInQuad" },
            { id: "eid211", tween: [ "style", "${_Question3}", "opacity", '0', { fromValue: '1'}], position: 21335, duration: 785, easing: "easeInQuad" },
            { id: "eid322", tween: [ "style", "${_q17_skip_button}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
            { id: "eid323", tween: [ "style", "${_q17_skip_button}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
            { id: "eid95", tween: [ "style", "${_Question2}", "top", '31px', { fromValue: '337.19px'}], position: 15250, duration: 1500, easing: "easeInQuad" },
            { id: "eid110", tween: [ "style", "${_Question2}", "top", '337.19px', { fromValue: '31px'}], position: 18000, duration: 1500, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_play_button_13}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0 },
            { id: "eid337", tween: [ "style", "${_play_button_13}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid63", tween: [ "transform", "${_Question1}", "scaleX", '0.81', { fromValue: '0.4'}], position: 11350, duration: 1400, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "transform", "${_Question1}", "scaleX", '0.4', { fromValue: '0.81'}], position: 15000, duration: 1400, easing: "easeInQuad" },
            { id: "eid43", tween: [ "style", "${_NextButtonCopy}", "top", '492px', { fromValue: '492px'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid330", tween: [ "style", "${_q18_skip_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid331", tween: [ "style", "${_q18_skip_button}", "display", 'none', { fromValue: 'block'}], position: 17588, duration: 0 },
            { id: "eid321", tween: [ "style", "${_q39_submit_button}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
            { id: "eid326", tween: [ "style", "${_q39_submit_button}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_type_text}", "top", '291px', { fromValue: '292px'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_type_text}", "top", '291px', { fromValue: '291px'}], position: 14750, duration: 0, easing: "easeInQuad" },
            { id: "eid313", tween: [ "transform", "${_question18}", "translateX", '-42px', { fromValue: '127px'}], position: 18093, duration: 907 },
            { id: "eid3", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.250000'}], position: 6750, duration: 500 },
            { id: "eid5", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.970588'}], position: 7250, duration: 500 },
            { id: "eid340", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 20000, duration: 750 },
            { id: "eid341", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 20750, duration: 750 },
            { id: "eid35", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0, easing: "easeInQuad" },
            { id: "eid59", tween: [ "style", "${_Question1}", "top", '25.18px', { fromValue: '79.2px'}], position: 11000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_Question1}", "top", '79.2px', { fromValue: '25.18px'}], position: 15000, duration: 1750, easing: "easeInQuad" },
            { id: "eid216", tween: [ "style", "${_Text8}", "left", '108px', { fromValue: '108px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid218", tween: [ "style", "${_Text8}", "left", '108px', { fromValue: '108px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid351", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.89'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid96", tween: [ "transform", "${_Question2}", "scaleX", '1', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeInQuad" },
            { id: "eid111", tween: [ "transform", "${_Question2}", "scaleX", '0.4', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeInQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-1999079");
