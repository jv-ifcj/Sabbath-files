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
            id:'q12_skip_text',
            display:'none',
            type:'text',
            rect:['8px','442px','654px','51px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question, or complete the chart and click Submit.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0px','auto','670px','100px','0px','auto'],
            clip:['rect(19px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'sb24',
            display:'none',
            type:'ellipse',
            rect:['78px','497px','55px','56px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sb25',
            display:'none',
            type:'ellipse',
            rect:['79px','495px','53px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
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
            id:'grid5',
            display:'none',
            type:'rect',
            rect:['16px','277px','630px','5px','auto','auto'],
            fill:["rgba(11,0,52,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'grid6',
            display:'none',
            type:'rect',
            rect:['16px','359px','630px','5px','auto','auto'],
            fill:["rgba(11,0,52,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'grid4',
            display:'none',
            type:'rect',
            rect:['16px','196px','630px','5px','auto','auto'],
            fill:["rgba(11,0,52,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'grid3',
            display:'none',
            type:'rect',
            rect:['433px','165px','5px','260px','auto','auto'],
            fill:["rgba(11,0,52,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'grid2',
            display:'none',
            type:'rect',
            rect:['215px','165px','5px','260px','auto','auto'],
            fill:["rgba(11,0,52,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'label8',
            display:'none',
            type:'text',
            rect:['21px','215px','189px','51px','auto','auto'],
            text:"How Jesus observed the Sabbath",
            align:"right",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'label9',
            display:'none',
            type:'text',
            rect:['21px','295px','189px','41px','auto','auto'],
            text:"Others' responses",
            align:"right",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'label10',
            display:'none',
            type:'text',
            rect:['30px','375px','181px','29px','auto','auto'],
            text:"Jesus' response",
            align:"right",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'label6',
            display:'none',
            type:'text',
            rect:['221px','166px','209px','22px','auto','auto'],
            cursor:['pointer'],
            text:"Matthew 12:1-14",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',23,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'label7',
            display:'none',
            type:'text',
            rect:['439px','166px','209px','22px','auto','auto'],
            cursor:['pointer'],
            text:"Luke 13:10-17",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',23,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'question12_div',
            display:'none',
            type:'rect',
            rect:['120px','18px','429px','132px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[],
            c:[
            {
               id:'questionCopy',
               type:'rect',
               rect:['0px','0px','429px','132px','auto','auto'],
               clip:['rect(0px 429px 41px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[]
            },
            {
               id:'Text',
               type:'text',
               rect:['5px','5px','344px','32px','auto','auto'],
               text:"Reflection Question",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","italic"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['6px','43px','418px','54px','auto','auto'],
               text:"Read Matthew 12:1-14 and Luke 13:10-17 and then fill in the chart below:",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'Text3',
               display:'none',
               type:'text',
               rect:['6px','99px','418px','29px','auto','auto'],
               text:"(Click the passage reference below to read it)",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            }]
         },
         {
            id:'chart_submit_button',
            display:'none',
            type:'rect',
            rect:['230px','510px','209px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'chart_skip_button',
            display:'none',
            type:'ellipse',
            rect:['543px','497px','46px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'chart_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['538px','493px','50px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'question13_div',
            display:'none',
            type:'rect',
            rect:['84px','35px','502px','191px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'RoundRect2Copy',
               type:'rect',
               rect:['0px','0px','502px','191px','auto','auto'],
               clip:['rect(0px 502px 37px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text4',
               type:'text',
               rect:['10px','6px','460px','26px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            },
            {
               id:'Text5',
               type:'text',
               rect:['15px','58px','472px','128px','auto','auto'],
               text:"How did Jesus' activities change his followers' attitudes about the Sabbath? How about your attitude?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'q13_skip_check_text',
            display:'none',
            type:'text',
            rect:['29px','427px','618px','40px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'q13_submit_button',
            display:'none',
            type:'rect',
            rect:['227px','507px','215px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q13_skip_button',
            display:'none',
            type:'ellipse',
            rect:['543px','498px','47px','48px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q13_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['539px','497px','51px','51px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['133px','278px','427px','26px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'restart',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'biblebox',
            display:'none',
            type:'rect',
            rect:['31px','35px','607px','499px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["",9,9,26,13,"rgba(0,0,0,0.65)"],
            c:[
            {
               id:'matthew_part1',
               display:'none',
               type:'text',
               rect:['16px','53px','573px','392px','auto','auto'],
               text:"<sup>1</sup>At that time Jesus went through the grainfields on the Sabbath. His disciples were hungry and began to pick some heads of grain and eat them. <sup>2</sup>When the Pharisees saw this, they said to him, “Look! Your disciples are doing what is unlawful on the Sabbath.”<br><sup>3</sup>He answered, “Haven’t you read what David did when he and his companions were hungry? <sup>4</sup>He entered the house of God, and he and his companions ate the consecrated bread—which was not lawful for them to do, but only for the priests. <sup>5</sup>Or haven’t you read in the Law that the priests on Sabbath duty in the temple desecrate the Sabbath and yet are innocent? <sup>6</sup>I tell you that something greater than the temple is here. <sup>7</sup>If you had known what these words mean, ‘I desire mercy, not sacrifice,’ you would not have condemned the innocent. <sup>8</sup>For the Son of Man is Lord of the Sabbath.” (continued)",
               align:"left",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'luke_part1',
               display:'none',
               type:'text',
               rect:['16px','100px','573px','276px','auto','auto'],
               text:"<sup>10</sup>On a Sabbath Jesus was teaching in one of the synagogues, <sup>11</sup>and a woman was there who had been crippled by a spirit for eighteen years. She was bent over and could not straighten up at all. <sup>12</sup>When Jesus saw her, he called her forward and said to her, “Woman, you are set free from your infirmity.” <sup>13</sup>Then he put his hands on her, and immediately she straightened up and praised God. (Continued)",
               align:"left",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'luke_part2',
               display:'none',
               type:'text',
               rect:['16px','53px','573px','392px','auto','auto'],
               text:"<sup>14</sup>Indignant because Jesus had healed on the Sabbath, the synagogue leader said to the people, “There are six days for work. So come and be healed on those days, not on the Sabbath.”<br><sup>15</sup>The Lord answered him, “You hypocrites! Doesn’t each of you on the Sabbath untie your ox or donkey from the stall and lead it out to give it water? <sup>16</sup>Then should not this woman, a daughter of Abraham, whom Satan has kept bound for eighteen long years, be set free on the Sabbath day from what bound her?”<br><sup>17</sup>When he said this, all his opponents were humiliated, but the people were delighted with all the wonderful things he was doing.",
               align:"left",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'luke_finished_text',
               display:'none',
               type:'text',
               rect:['17px','412px','573px','34px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this box and return to the question.",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","italic"]
            },
            {
               id:'matthew_part2',
               display:'none',
               type:'text',
               rect:['16px','55px','573px','318px','auto','auto'],
               text:"<sup>9</sup>Going on from that place, he went into their synagogue, <sup>10</sup>and a man with a shriveled hand was there. Looking for a reason to bring charges against Jesus, they asked him, “Is it lawful to heal on the Sabbath?”<br><sup>11</sup>He said to them, “If any of you has a sheep and it falls into a pit on the Sabbath, will you not take hold of it and lift it out? <sup>12</sup>How much more valuable is a person than a sheep! Therefore it is lawful to do good on the Sabbath.”<br><sup>13</sup>Then he said to the man, “Stretch out your hand.” So he stretched it out and it was completely restored, just as sound as the other. <sup>14</sup>But the Pharisees went out and plotted how they might kill Jesus.",
               align:"left",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text6',
               display:'none',
               type:'text',
               rect:['18px','411px','570px','38px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this box and return to the question.",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","italic"]
            },
            {
               id:'biblebox_next_button',
               type:'text',
               rect:['502px','455px','87px','28px','auto','auto'],
               cursor:['pointer'],
               text:"Next&gt;&gt;&gt;",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","italic"]
            },
            {
               id:'biblebox_back_button',
               display:'none',
               type:'text',
               rect:['41px','455px','109px','28px','auto','auto'],
               cursor:['pointer'],
               text:"&lt;&lt;&lt;Previous",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","italic"]
            },
            {
               id:'bibleboxheader',
               display:'none',
               type:'rect',
               rect:['0px','0px','607px','499px','auto','auto'],
               clip:['rect(0px 607px 49px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'biblebox_escape',
               type:'text',
               rect:['566px','5px','29px','29px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"right",
               font:['Arial, Helvetica, sans-serif',26,"rgba(255,255,255,1.00)","700","none","normal"]
            },
            {
               id:'matthew_header',
               type:'text',
               rect:['100px','6px','406px','51px','auto','auto'],
               text:"Matthew 12:1–14",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1.00)","normal","none","italic"]
            },
            {
               id:'luke_header',
               display:'none',
               type:'text',
               rect:['100px','6px','406px','51px','auto','auto'],
               text:"Luke 13:10–17",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
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
         "${_chart_submit}": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '84px']
         ],
         "${_matthew_3}": [
            ["transform", "translateX", '1px'],
            ["transform", "translateY", '0px']
         ],
         "${_biblebox}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["transform", "scaleX", '0.21'],
            ["style", "opacity", '0'],
            ["style", "left", '31.24px'],
            ["style", "width", '607px'],
            ["style", "top", '-100.9px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.21'],
            ["subproperty", "boxShadow.spread", '13px'],
            ["style", "height", '499px'],
            ["subproperty", "boxShadow.offsetV", '9px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.blur", '26px']
         ],
         "${_Text2}": [
            ["style", "top", '43px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '54px'],
            ["style", "left", '6px'],
            ["style", "font-size", '22px']
         ],
         "${_matthew_header}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '100px'],
            ["style", "font-size", '32px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '1'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_luke_2}": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '0px']
         ],
         "${_matthew_2}": [
            ["transform", "translateX", '2px'],
            ["transform", "translateY", '0px']
         ],
         "${_label9}": [
            ["style", "top", '290.27px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleY", '0.56999'],
            ["style", "height", '41px'],
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0'],
            ["style", "left", '358.36px'],
            ["style", "display", 'none']
         ],
         "${_luke_1}": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '0px']
         ],
         "${_grid3}": [
            ["style", "top", '160.27px'],
            ["transform", "scaleY", '0.56999'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '770.36px'],
            ["transform", "scaleX", '0.56999']
         ],
         "${_matthew_part1}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '16px'],
            ["style", "font-size", '20px'],
            ["style", "top", '53px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "height", '392px']
         ],
         "${_luke_header}": [
            ["transform", "scaleX", '0.78'],
            ["style", "opacity", '0'],
            ["style", "left", '302px'],
            ["style", "font-size", '32px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.78'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_q13_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_chart_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_label10}": [
            ["style", "top", '370.27px'],
            ["style", "height", '29px'],
            ["transform", "scaleY", '0.56999'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0'],
            ["style", "left", '367.36px'],
            ["style", "display", 'none']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,502,37,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_q13_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_sb24}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_label8}": [
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0'],
            ["style", "left", '358.36px'],
            ["style", "top", '210.27px'],
            ["transform", "scaleY", '0.56999'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-align", 'right']
         ],
         "${_Text4}": [
            ["style", "top", '6px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '10px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_biblebox_escape}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '26px'],
            ["style", "top", '5px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '566px']
         ],
         "${_matthew_part2}": [
            ["transform", "scaleX", '0.45'],
            ["style", "opacity", '0'],
            ["style", "left", '190px'],
            ["style", "font-size", '20px'],
            ["style", "top", '55px'],
            ["transform", "scaleY", '0.45'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "height", '318px'],
            ["style", "display", 'none']
         ],
         "${_grid5}": [
            ["style", "top", '272.27px'],
            ["transform", "scaleY", '0.56999'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '353.36px'],
            ["transform", "scaleX", '0.56999']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "opacity", '1'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_biblebox_back_button}": [
            ["style", "top", '455px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '28px'],
            ["style", "opacity", '0'],
            ["style", "left", '41px'],
            ["style", "width", '109px']
         ],
         "${_label7}": [
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0'],
            ["style", "left", '776.36px'],
            ["style", "top", '161.27px'],
            ["transform", "scaleY", '0.56999'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '22px']
         ],
         "${_label6}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '558.36px'],
            ["style", "font-size", '23px'],
            ["style", "top", '161.27px'],
            ["transform", "scaleY", '0.56999'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0.56999'],
            ["style", "height", '22px']
         ],
         "${_sabbathchart2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '150px']
         ],
         "${_grid6}": [
            ["style", "top", '354.27px'],
            ["transform", "scaleY", '0.56999'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '353.36px'],
            ["transform", "scaleX", '0.56999']
         ],
         "${_chart_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_matthew_1}": [
            ["transform", "translateX", '2px']
         ],
         "${_Text5}": [
            ["style", "top", '58px'],
            ["style", "font-style", 'normal'],
            ["style", "left", '15px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_q13_submit_html}": [
            ["transform", "translateX", '-295px'],
            ["transform", "translateY", '149px']
         ],
         "${_chart_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_luke_finished_text}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'center']
         ],
         "${_bibleboxheader}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["transform", "scaleX", '0.21'],
            ["style", "opacity", '0'],
            ["style", "left", '0.24px'],
            ["style", "width", '607px'],
            ["style", "top", '-135.9px'],
            ["transform", "scaleY", '0.21'],
            ["style", "display", 'none'],
            ["style", "clip", [0,607,49,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '499px']
         ],
         "${_q13_skip_check_text}": [
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_sabbathchart}": [
            ["transform", "scaleY", '0.95'],
            ["transform", "translateX", '221px'],
            ["transform", "scaleX", '0.95'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '198px'],
            ["style", "width", '429px']
         ],
         "${_questionCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "height", '132px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,41,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "top", '0px']
         ],
         "${_question12_div}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "top", '-36px'],
            ["transform", "scaleY", '0.85'],
            ["style", "height", '132px'],
            ["transform", "scaleX", '0.85'],
            ["style", "opacity", '0'],
            ["style", "left", '511px'],
            ["style", "display", 'none']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_sb25}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_luke_part2}": [
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '198px'],
            ["style", "font-size", '20px'],
            ["style", "top", '53px'],
            ["transform", "scaleY", '0.4'],
            ["style", "height", '348px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${_q13_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question13_div}": [
            ["style", "top", '35px'],
            ["transform", "scaleY", '0.8'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '541px'],
            ["transform", "scaleX", '0.8']
         ],
         "${_grid4}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.56999'],
            ["style", "opacity", '0'],
            ["style", "left", '353.36px'],
            ["style", "width", '630px'],
            ["style", "top", '191.27px'],
            ["transform", "scaleY", '0.56999'],
            ["style", "height", '5px'],
            ["style", "display", 'none']
         ],
         "${_grid2}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.56999'],
            ["style", "top", '160.27px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '552.36px'],
            ["transform", "scaleX", '0.56999']
         ],
         "${_Text3}": [
            ["transform", "scaleX", '0.88'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '418px'],
            ["style", "top", '99px'],
            ["style", "font-size", '20px'],
            ["transform", "scaleY", '0.88'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "display", 'none'],
            ["style", "height", '29px'],
            ["style", "cursor", 'auto']
         ],
         "${_luke_3}": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '0px']
         ],
         "${_q12_skip_text}": [
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '654px'],
            ["style", "top", '442px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "font-size", '18px'],
            ["style", "display", 'none']
         ],
         "${_sabbathchart} > form:nth-child(1)": [
            ["style", "height", '359px']
         ],
         "${_restart}": [
            ["style", "display", 'block']
         ],
         "${_Text6}": [
            ["style", "top", '411px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question13}": [
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '266px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '327px'],
            ["transform", "translateX", '592px']
         ],
         "${_Text}": [
            ["style", "left", '5px'],
            ["style", "top", '5px']
         ],
         "${_luke_part1}": [
            ["transform", "scaleX", '0.54'],
            ["style", "opacity", '0'],
            ["style", "left", '161px'],
            ["style", "font-size", '20px'],
            ["style", "top", '100px'],
            ["transform", "scaleY", '0.54'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "height", '276px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_biblebox_next_button}": [
            ["style", "top", '455px'],
            ["style", "display", 'block'],
            ["style", "left", '502px'],
            ["style", "height", '28px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '87px']
         ],
         "${_type_text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '617px'],
            ["style", "font-size", '17px'],
            ["style", "top", '301px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '1']
         ],
         "${_question13} > form:nth-child(1)": [
            ["transform", "translateY", '-24px'],
            ["transform", "translateX", '-4px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: true,
         labels: {
            "q12_home": 5000,
            "q12_skip_check": 5250,
            "readbegin": 5500,
            "page1": 6000,
            "page2": 6500,
            "luke_begin": 6787,
            "page3": 7000,
            "page4": 7500,
            "readclosed": 8500,
            "q12_next_go": 8750,
            "q13_begin": 11000,
            "q13_home": 12000,
            "q13_skip_check": 12500,
            "q13_next_go": 13000
         },
         timeline: [
            { id: "eid252", tween: [ "style", "${_luke_part2}", "left", '16px', { fromValue: '198px'}], position: 7143, duration: 357, easing: "easeOutQuad" },
            { id: "eid197", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 11038, duration: 962, easing: "easeOutQuad" },
            { id: "eid199", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 957, easing: "easeInQuad" },
            { id: "eid263", tween: [ "transform", "${_matthew_header}", "scaleX", '0.7', { fromValue: '1'}], position: 6500, duration: 405, easing: "easeInQuad" },
            { id: "eid208", tween: [ "style", "${_biblebox}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 500, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "style", "${_biblebox}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 250 },
            { id: "eid93", tween: [ "style", "${_biblebox}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 250 },
            { id: "eid178", tween: [ "style", "${_biblebox}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 1000, easing: "easeInQuad" },
            { id: "eid271", tween: [ "transform", "${_sabbathchart}", "translateX", '-227px', { fromValue: '221px'}], position: 9000, duration: 829, easing: "easeInQuad" },
            { id: "eid282", tween: [ "style", "${_chart_skip_button}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid283", tween: [ "style", "${_chart_skip_button}", "display", 'none', { fromValue: 'block'}], position: 5082, duration: 0 },
            { id: "eid284", tween: [ "style", "${_chart_skip_button}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid285", tween: [ "style", "${_chart_skip_button}", "display", 'none', { fromValue: 'block'}], position: 8621, duration: 0 },
            { id: "eid171", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid294", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 0, duration: 0 },
            { id: "eid320", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 15000, duration: 1250, easing: "easeInQuad" },
            { id: "eid3", tween: [ "color", "${_grid2}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5295, duration: 0 },
            { id: "eid52", tween: [ "transform", "${_grid2}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "style", "${_grid4}", "left", '16px', { fromValue: '353.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid8", tween: [ "style", "${_grid4}", "left", '16px', { fromValue: '16px'}], position: 5295, duration: 0 },
            { id: "eid125", tween: [ "style", "${_grid4}", "left", '-393px', { fromValue: '16px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid17", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0.25'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 4500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 8750, duration: 500 },
            { id: "eid35", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 11500, duration: 500 },
            { id: "eid41", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 13000, duration: 500 },
            { id: "eid322", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0.25'}], position: 14381, duration: 619, easing: "easeInQuad" },
            { id: "eid308", tween: [ "style", "${_question13_div}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
            { id: "eid319", tween: [ "style", "${_question13_div}", "display", 'none', { fromValue: 'block'}], position: 14000, duration: 0, easing: "easeInQuad" },
            { id: "eid80", tween: [ "transform", "${_question13} > form:nth-child(1)", "translateX", '-4px', { fromValue: '-4px'}], position: 12000, duration: 0, easing: "easeInQuad" },
            { id: "eid163", tween: [ "style", "${_question12_div}", "top", '18px', { fromValue: '-36px'}], position: 3750, duration: 824, easing: "easeOutQuad" },
            { id: "eid248", tween: [ "transform", "${_luke_part2}", "scaleX", '1', { fromValue: '0.4'}], position: 7143, duration: 357, easing: "easeOutQuad" },
            { id: "eid240", tween: [ "style", "${_luke_part1}", "left", '16px', { fromValue: '161px'}], position: 6630, duration: 370, easing: "easeOutQuad" },
            { id: "eid245", tween: [ "style", "${_luke_part1}", "left", '-182px', { fromValue: '16px'}], position: 7000, duration: 405, easing: "easeInOutQuad" },
            { id: "eid228", tween: [ "style", "${_matthew_part2}", "left", '16px', { fromValue: '190px'}], position: 6147, duration: 353, easing: "easeOutQuad" },
            { id: "eid233", tween: [ "style", "${_matthew_part2}", "left", '-167px', { fromValue: '16px'}], position: 6500, duration: 405 },
            { id: "eid265", tween: [ "style", "${_matthew_header}", "left", '-102px', { fromValue: '100px'}], position: 6500, duration: 405, easing: "easeInQuad" },
            { id: "eid242", tween: [ "style", "${_luke_part1}", "opacity", '1', { fromValue: '0'}], position: 6630, duration: 370, easing: "easeInOutQuad" },
            { id: "eid246", tween: [ "style", "${_luke_part1}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 405, easing: "easeInOutQuad" },
            { id: "eid92", tween: [ "style", "${_label7}", "top", '166px', { fromValue: '161.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid307", tween: [ "style", "${_question13}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid318", tween: [ "style", "${_question13}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid13", tween: [ "color", "${_label6}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 5295, duration: 0 },
            { id: "eid160", tween: [ "style", "${_biblebox_next_button}", "display", 'none', { fromValue: 'block'}], position: 6312, duration: 0 },
            { id: "eid162", tween: [ "style", "${_biblebox_next_button}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid105", tween: [ "style", "${_biblebox_next_button}", "display", 'none', { fromValue: 'block'}], position: 7297, duration: 0 },
            { id: "eid291", tween: [ "style", "${_question13}", "height", '266px', { fromValue: '266px'}], position: 11000, duration: 0 },
            { id: "eid327", tween: [ "style", "${_q13_skip_button}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeInQuad" },
            { id: "eid328", tween: [ "style", "${_q13_skip_button}", "display", 'none', { fromValue: 'block'}], position: 12250, duration: 0, easing: "easeInQuad" },
            { id: "eid86", tween: [ "style", "${_grid2}", "left", '215px', { fromValue: '552.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid131", tween: [ "style", "${_grid2}", "left", '-194px', { fromValue: '215px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid119", tween: [ "style", "${_grid3}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid149", tween: [ "style", "${_grid3}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid305", tween: [ "style", "${_question13_div}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid317", tween: [ "style", "${_question13_div}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid209", tween: [ "style", "${_matthew_part1}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid210", tween: [ "style", "${_matthew_part1}", "display", 'none', { fromValue: 'block'}], position: 6456, duration: 0, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "style", "${_grid6}", "top", '359px', { fromValue: '354.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid303", tween: [ "transform", "${_question13}", "scaleY", '1', { fromValue: '0.8'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid316", tween: [ "transform", "${_question13}", "scaleY", '0.77', { fromValue: '1'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid168", tween: [ "style", "${_luke_part2}", "height", '348px', { fromValue: '348px'}], position: 7500, duration: 0 },
            { id: "eid73", tween: [ "style", "${_sabbathchart2}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "style", "${_sabbathchart2}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInQuad" },
            { id: "eid254", tween: [ "style", "${_luke_part2}", "opacity", '1', { fromValue: '0'}], position: 7143, duration: 357, easing: "easeOutQuad" },
            { id: "eid24", tween: [ "transform", "${_label9}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_label9}", "left", '21px', { fromValue: '358.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "style", "${_label9}", "left", '-388px', { fromValue: '21px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid205", tween: [ "transform", "${_biblebox}", "scaleY", '1', { fromValue: '0.21'}], position: 5500, duration: 500, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "transform", "${_biblebox}", "scaleY", '0.35', { fromValue: '1'}], position: 6500, duration: 250 },
            { id: "eid89", tween: [ "transform", "${_biblebox}", "scaleY", '1', { fromValue: '0.35'}], position: 6750, duration: 250 },
            { id: "eid177", tween: [ "transform", "${_biblebox}", "scaleY", '0.3', { fromValue: '1'}], position: 7500, duration: 1000, easing: "easeInQuad" },
            { id: "eid258", tween: [ "transform", "${_luke_header}", "scaleY", '1', { fromValue: '0.78'}], position: 6750, duration: 250, easing: "easeOutQuad" },
            { id: "eid207", tween: [ "style", "${_biblebox}", "left", '31px', { fromValue: '31.24px'}], position: 5500, duration: 500, easing: "easeOutQuad" },
            { id: "eid293", tween: [ "style", "${_question13_div}", "left", '84px', { fromValue: '541px'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid311", tween: [ "style", "${_question13_div}", "left", '-350px', { fromValue: '84px'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid96", tween: [ "style", "${_label9}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid134", tween: [ "style", "${_label9}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid44", tween: [ "transform", "${_grid3}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid213", tween: [ "style", "${_luke_part1}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_luke_part1}", "display", 'none', { fromValue: 'block'}], position: 7405, duration: 0, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_grid6}", "left", '16px', { fromValue: '353.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_grid6}", "left", '16px', { fromValue: '16px'}], position: 5295, duration: 0 },
            { id: "eid123", tween: [ "style", "${_grid6}", "left", '-393px', { fromValue: '16px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid190", tween: [ "style", "${_sabbathchart}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid272", tween: [ "style", "${_sabbathchart}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 598, easing: "easeInQuad" },
            { id: "eid104", tween: [ "style", "${_label6}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid138", tween: [ "style", "${_label6}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid288", tween: [ "style", "${_question13}", "display", 'block', { fromValue: 'none'}], position: 11000, duration: 0 },
            { id: "eid16", tween: [ "color", "${_label10}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 5295, duration: 0 },
            { id: "eid120", tween: [ "style", "${_grid4}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid150", tween: [ "style", "${_grid4}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid192", tween: [ "style", "${_type_text}", "left", '133px', { fromValue: '617px'}], position: 11038, duration: 962, easing: "easeOutQuad" },
            { id: "eid202", tween: [ "style", "${_type_text}", "left", '-232px', { fromValue: '133px'}], position: 13000, duration: 957, easing: "easeInQuad" },
            { id: "eid306", tween: [ "style", "${_bibleboxheader}", "display", 'block', { fromValue: 'none'}], position: 5420, duration: 0, easing: "easeOutQuad" },
            { id: "eid184", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 6147, duration: 0, easing: "easeInQuad" },
            { id: "eid189", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6712, duration: 0, easing: "easeInQuad" },
            { id: "eid15", tween: [ "color", "${_label8}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 5295, duration: 0 },
            { id: "eid222", tween: [ "style", "${_matthew_part1}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 432 },
            { id: "eid5", tween: [ "color", "${_grid6}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5295, duration: 0 },
            { id: "eid108", tween: [ "style", "${_grid5}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid140", tween: [ "style", "${_grid5}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid158", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 4745, duration: 255, easing: "easeInQuad" },
            { id: "eid48", tween: [ "transform", "${_grid5}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid402", tween: [ "style", "${_bibleboxheader}", "left", '0px', { fromValue: '0.24px'}], position: 5345, duration: 0, easing: "easeOutQuad" },
            { id: "eid14", tween: [ "color", "${_label9}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 5295, duration: 0 },
            { id: "eid32", tween: [ "transform", "${_label10}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "style", "${_grid3}", "top", '165px', { fromValue: '160.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid211", tween: [ "style", "${_matthew_part2}", "display", 'block', { fromValue: 'none'}], position: 6147, duration: 0, easing: "easeOutQuad" },
            { id: "eid212", tween: [ "style", "${_matthew_part2}", "display", 'none', { fromValue: 'block'}], position: 6905, duration: 0, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_grid2}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid148", tween: [ "style", "${_grid2}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid297", tween: [ "transform", "${_question13_div}", "scaleX", '0.89', { fromValue: '0.8'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid313", tween: [ "transform", "${_question13_div}", "scaleX", '0.77', { fromValue: '0.89'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid268", tween: [ "style", "${_biblebox_back_button}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid107", tween: [ "style", "${_biblebox_back_button}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 130 },
            { id: "eid153", tween: [ "style", "${_biblebox_back_button}", "opacity", '1', { fromValue: '0'}], position: 7143, duration: 357 },
            { id: "eid122", tween: [ "style", "${_grid5}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid152", tween: [ "style", "${_grid5}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid270", tween: [ "style", "${_chart_submit_button}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid279", tween: [ "style", "${_chart_submit_button}", "display", 'none', { fromValue: 'block'}], position: 5420, duration: 0 },
            { id: "eid280", tween: [ "style", "${_chart_submit_button}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid281", tween: [ "style", "${_chart_submit_button}", "display", 'none', { fromValue: 'block'}], position: 8621, duration: 0 },
            { id: "eid121", tween: [ "style", "${_grid6}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid151", tween: [ "style", "${_grid6}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid196", tween: [ "style", "${_biblebox}", "display", 'block', { fromValue: 'none'}], position: 5420, duration: 0, easing: "easeOutQuad" },
            { id: "eid164", tween: [ "style", "${_biblebox}", "display", 'none', { fromValue: 'block'}], position: 6712, duration: 0 },
            { id: "eid166", tween: [ "style", "${_biblebox}", "display", 'block', { fromValue: 'none'}], position: 6787, duration: 0 },
            { id: "eid203", tween: [ "style", "${_biblebox}", "display", 'none', { fromValue: 'block'}], position: 8460, duration: 0, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "style", "${_label6}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid144", tween: [ "style", "${_label6}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid206", tween: [ "style", "${_biblebox}", "top", '35px', { fromValue: '-100.9px'}], position: 5500, duration: 500, easing: "easeOutQuad" },
            { id: "eid18", tween: [ "transform", "${_grid6}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid188", tween: [ "transform", "${_sabbathchart}", "scaleY", '1', { fromValue: '0.95'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid186", tween: [ "transform", "${_sabbathchart}", "scaleX", '1', { fromValue: '0.95'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "color", "${_label7}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 5295, duration: 0 },
            { id: "eid194", tween: [ "style", "${_type_text}", "top", '278px', { fromValue: '301px'}], position: 11038, duration: 962, easing: "easeOutQuad" },
            { id: "eid223", tween: [ "style", "${_type_text}", "top", '312px', { fromValue: '278px'}], position: 13000, duration: 957, easing: "easeInQuad" },
            { id: "eid329", tween: [ "style", "${_q13_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0, easing: "easeInQuad" },
            { id: "eid330", tween: [ "style", "${_q13_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0, easing: "easeInQuad" },
            { id: "eid198", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 11038, duration: 0, easing: "easeOutQuad" },
            { id: "eid225", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 13957, duration: 0, easing: "easeInQuad" },
            { id: "eid201", tween: [ "transform", "${_type_text}", "scaleY", '0.86', { fromValue: '1'}], position: 13000, duration: 957, easing: "easeInQuad" },
            { id: "eid76", tween: [ "style", "${_label6}", "left", '221px', { fromValue: '558.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid128", tween: [ "style", "${_label6}", "left", '-188px', { fromValue: '221px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid204", tween: [ "transform", "${_biblebox}", "scaleX", '1', { fromValue: '0.21'}], position: 5500, duration: 500, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "transform", "${_biblebox}", "scaleX", '0.35', { fromValue: '1'}], position: 6500, duration: 250 },
            { id: "eid85", tween: [ "transform", "${_biblebox}", "scaleX", '1', { fromValue: '0.35'}], position: 6750, duration: 250 },
            { id: "eid176", tween: [ "transform", "${_biblebox}", "scaleX", '0.3', { fromValue: '1'}], position: 7500, duration: 1000, easing: "easeInQuad" },
            { id: "eid36", tween: [ "transform", "${_label8}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid218", tween: [ "style", "${_matthew_header}", "display", 'none', { fromValue: 'block'}], position: 6905, duration: 0 },
            { id: "eid98", tween: [ "style", "${_grid4}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid135", tween: [ "style", "${_grid4}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid169", tween: [ "style", "${_question12_div}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 824, easing: "easeOutQuad" },
            { id: "eid277", tween: [ "style", "${_question12_div}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 1500 },
            { id: "eid69", tween: [ "transform", "${_sabbathchart2}", "translateX", '0px', { fromValue: '150px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "transform", "${_sabbathchart2}", "translateX", '-180px', { fromValue: '0px'}], position: 9000, duration: 500, easing: "easeInQuad" },
            { id: "eid309", tween: [ "style", "${_q13_skip_check_text}", "display", 'block', { fromValue: 'none'}], position: 12500, duration: 0, easing: "easeOutQuad" },
            { id: "eid310", tween: [ "style", "${_q13_skip_check_text}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0, easing: "easeOutQuad" },
            { id: "eid221", tween: [ "style", "${_matthew_part1}", "left", '-184px', { fromValue: '16px'}], position: 6000, duration: 432 },
            { id: "eid90", tween: [ "style", "${_label7}", "left", '439px', { fromValue: '776.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid132", tween: [ "style", "${_label7}", "left", '30px', { fromValue: '439px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid102", tween: [ "style", "${_label8}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid137", tween: [ "style", "${_label8}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid28", tween: [ "transform", "${_grid4}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid295", tween: [ "transform", "${_question13}", "translateX", '135px', { fromValue: '592px'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid312", tween: [ "transform", "${_question13}", "translateX", '-299px', { fromValue: '135px'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid30", tween: [ "transform", "${_label10}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid159", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4745, duration: 0, easing: "easeInQuad" },
            { id: "eid53", tween: [ "style", "${_sb25}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_sb25}", "display", 'none', { fromValue: 'block'}], position: 12868, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_grid3}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "style", "${_sb24}", "display", 'block', { fromValue: 'none'}], position: 4745, duration: 0 },
            { id: "eid47", tween: [ "style", "${_sb24}", "display", 'none', { fromValue: 'block'}], position: 5462, duration: 0 },
            { id: "eid49", tween: [ "style", "${_sb24}", "display", 'block', { fromValue: 'none'}], position: 8052, duration: 0 },
            { id: "eid51", tween: [ "style", "${_sb24}", "display", 'none', { fromValue: 'block'}], position: 8621, duration: 0 },
            { id: "eid290", tween: [ "transform", "${_question13}", "translateY", '327px', { fromValue: '327px'}], position: 11000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_grid2}", "top", '165px', { fromValue: '160.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_label6}", "top", '166px', { fromValue: '161.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 250, easing: "easeInQuad" },
            { id: "eid257", tween: [ "color", "${_question12_div}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5250, duration: 0 },
            { id: "eid106", tween: [ "style", "${_grid3}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid139", tween: [ "style", "${_grid3}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid325", tween: [ "style", "${_q13_submit_button}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeInQuad" },
            { id: "eid326", tween: [ "style", "${_q13_submit_button}", "display", 'none', { fromValue: 'block'}], position: 12750, duration: 0, easing: "easeInQuad" },
            { id: "eid405", tween: [ "transform", "${_bibleboxheader}", "scaleY", '1', { fromValue: '0.21'}], position: 5345, duration: 0, easing: "easeOutQuad" },
            { id: "eid264", tween: [ "transform", "${_matthew_header}", "scaleY", '0.7', { fromValue: '1'}], position: 6500, duration: 405, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_label10}", "top", '375px', { fromValue: '370.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid167", tween: [ "transform", "${_question12_div}", "scaleY", '1', { fromValue: '0.85'}], position: 3750, duration: 824, easing: "easeOutQuad" },
            { id: "eid276", tween: [ "transform", "${_question12_div}", "scaleY", '0.62', { fromValue: '1'}], position: 9250, duration: 1500 },
            { id: "eid117", tween: [ "style", "${_label8}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid147", tween: [ "style", "${_label8}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid230", tween: [ "style", "${_matthew_part2}", "opacity", '1', { fromValue: '0'}], position: 6147, duration: 353, easing: "easeInOutQuad" },
            { id: "eid234", tween: [ "style", "${_matthew_part2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 405 },
            { id: "eid34", tween: [ "transform", "${_label8}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid4", tween: [ "color", "${_grid4}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5295, duration: 0 },
            { id: "eid286", tween: [ "style", "${_chart_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
            { id: "eid287", tween: [ "style", "${_chart_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 5420, duration: 0 },
            { id: "eid155", tween: [ "style", "${_biblebox_next_button}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 312 },
            { id: "eid157", tween: [ "style", "${_biblebox_next_button}", "opacity", '1', { fromValue: '0'}], position: 6312, duration: 688 },
            { id: "eid103", tween: [ "style", "${_biblebox_next_button}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 297 },
            { id: "eid226", tween: [ "transform", "${_matthew_part2}", "scaleY", '1', { fromValue: '0.45'}], position: 6147, duration: 353, easing: "easeOutQuad" },
            { id: "eid232", tween: [ "transform", "${_matthew_part2}", "scaleY", '0.41', { fromValue: '1'}], position: 6500, duration: 405 },
            { id: "eid115", tween: [ "style", "${_label10}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid145", tween: [ "style", "${_label10}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid403", tween: [ "style", "${_bibleboxheader}", "top", '0px', { fromValue: '-135.9px'}], position: 5345, duration: 0, easing: "easeOutQuad" },
            { id: "eid6", tween: [ "color", "${_grid5}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5295, duration: 0 },
            { id: "eid40", tween: [ "transform", "${_label6}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "style", "${_label8}", "left", '21px', { fromValue: '358.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid127", tween: [ "style", "${_label8}", "left", '-388px', { fromValue: '21px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid170", tween: [ "style", "${_question12_div}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0, easing: "easeOutQuad" },
            { id: "eid278", tween: [ "style", "${_question12_div}", "display", 'none', { fromValue: 'block'}], position: 10750, duration: 0 },
            { id: "eid217", tween: [ "style", "${_luke_header}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid84", tween: [ "style", "${_grid5}", "top", '277px', { fromValue: '272.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "transform", "${_label7}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "transform", "${_grid4}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid269", tween: [ "style", "${_biblebox_back_button}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "eid109", tween: [ "style", "${_biblebox_back_button}", "display", 'none', { fromValue: 'block'}], position: 6630, duration: 0 },
            { id: "eid111", tween: [ "style", "${_biblebox_back_button}", "display", 'block', { fromValue: 'none'}], position: 7143, duration: 0 },
            { id: "eid113", tween: [ "style", "${_label7}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid143", tween: [ "style", "${_label7}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid220", tween: [ "transform", "${_matthew_part1}", "scaleY", '0.35', { fromValue: '1'}], position: 6000, duration: 432 },
            { id: "eid172", tween: [ "style", "${_sabbathchart}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid273", tween: [ "style", "${_sabbathchart}", "display", 'none', { fromValue: 'block'}], position: 9829, duration: 0 },
            { id: "eid224", tween: [ "transform", "${_matthew_part2}", "scaleX", '1', { fromValue: '0.45'}], position: 6147, duration: 353, easing: "easeOutQuad" },
            { id: "eid231", tween: [ "transform", "${_matthew_part2}", "scaleX", '0.41', { fromValue: '1'}], position: 6500, duration: 405 },
            { id: "eid38", tween: [ "transform", "${_label6}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '0.88'}], position: 4745, duration: 255, easing: "easeInQuad" },
            { id: "eid66", tween: [ "style", "${_grid4}", "top", '196px', { fromValue: '191.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid219", tween: [ "transform", "${_matthew_part1}", "scaleX", '0.35', { fromValue: '1'}], position: 6000, duration: 432 },
            { id: "eid324", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid165", tween: [ "transform", "${_question12_div}", "scaleX", '1', { fromValue: '0.85'}], position: 3750, duration: 824, easing: "easeOutQuad" },
            { id: "eid275", tween: [ "transform", "${_question12_div}", "scaleX", '0.62', { fromValue: '1'}], position: 9250, duration: 1500 },
            { id: "eid7", tween: [ "color", "${_grid3}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5295, duration: 0 },
            { id: "eid63", tween: [ "style", "${_label9}", "top", '295px', { fromValue: '290.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_grid5}", "left", '16px', { fromValue: '353.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid10", tween: [ "style", "${_grid5}", "left", '16px', { fromValue: '16px'}], position: 5295, duration: 0 },
            { id: "eid130", tween: [ "style", "${_grid5}", "left", '-393px', { fromValue: '16px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid406", tween: [ "style", "${_bibleboxheader}", "opacity", '1', { fromValue: '0'}], position: 5345, duration: 0, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "transform", "${_grid2}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid299", tween: [ "transform", "${_question13_div}", "scaleY", '0.89', { fromValue: '0.8'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid314", tween: [ "transform", "${_question13_div}", "scaleY", '0.77', { fromValue: '0.89'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid249", tween: [ "color", "${_q12_skip_text}", "color", 'rgba(255,227,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,227,0,1.00)'}], position: 5250, duration: 0 },
            { id: "eid116", tween: [ "style", "${_label9}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid146", tween: [ "style", "${_label9}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid404", tween: [ "transform", "${_bibleboxheader}", "scaleX", '1', { fromValue: '0.21'}], position: 5345, duration: 0, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_grid2}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_grid2}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_label10}", "left", '30px', { fromValue: '367.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid126", tween: [ "style", "${_label10}", "left", '-379px', { fromValue: '30px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid215", tween: [ "style", "${_luke_part2}", "display", 'block', { fromValue: 'none'}], position: 7143, duration: 0, easing: "easeOutQuad" },
            { id: "eid216", tween: [ "style", "${_luke_part2}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid161", tween: [ "style", "${_question12_div}", "left", '120px', { fromValue: '511px'}], position: 3750, duration: 824, easing: "easeOutQuad" },
            { id: "eid274", tween: [ "style", "${_question12_div}", "left", '-235px', { fromValue: '120px'}], position: 9250, duration: 1500 },
            { id: "eid260", tween: [ "style", "${_luke_header}", "left", '100px', { fromValue: '302px'}], position: 6750, duration: 250, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "transform", "${_label7}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid175", tween: [ "style", "${_luke_finished_text}", "opacity", '1', { fromValue: '0'}], position: 7250, duration: 250 },
            { id: "eid22", tween: [ "transform", "${_label9}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_label10}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid136", tween: [ "style", "${_label10}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid323", tween: [ "style", "${_sabbath_bar}", "bottom", '-78px', { fromValue: '0px'}], position: 15000, duration: 750, easing: "easeInQuad" },
            { id: "eid266", tween: [ "style", "${_matthew_header}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 405, easing: "easeInQuad" },
            { id: "eid20", tween: [ "transform", "${_grid6}", "scaleY", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid79", tween: [ "style", "${_grid3}", "left", '433px', { fromValue: '770.36px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid11", tween: [ "style", "${_grid3}", "left", '433px', { fromValue: '433px'}], position: 5295, duration: 0 },
            { id: "eid129", tween: [ "style", "${_grid3}", "left", '24px', { fromValue: '433px'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_sabbathchart2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid74", tween: [ "style", "${_label8}", "top", '215px', { fromValue: '210.27px'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid173", tween: [ "style", "${_luke_finished_text}", "display", 'block', { fromValue: 'none'}], position: 7102, duration: 0 },
            { id: "eid238", tween: [ "transform", "${_luke_part1}", "scaleY", '1', { fromValue: '0.54'}], position: 6630, duration: 370, easing: "easeOutQuad" },
            { id: "eid244", tween: [ "transform", "${_luke_part1}", "scaleY", '0.35', { fromValue: '1'}], position: 7000, duration: 405, easing: "easeInOutQuad" },
            { id: "eid250", tween: [ "transform", "${_luke_part2}", "scaleY", '1', { fromValue: '0.4'}], position: 7143, duration: 357, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "transform", "${_grid5}", "scaleX", '1', { fromValue: '0.56999'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid1", tween: [ "style", "${_q12_skip_text}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
            { id: "eid2", tween: [ "style", "${_q12_skip_text}", "display", 'none', { fromValue: 'block'}], position: 5295, duration: 0 },
            { id: "eid236", tween: [ "transform", "${_luke_part1}", "scaleX", '1', { fromValue: '0.54'}], position: 6630, duration: 370, easing: "easeOutQuad" },
            { id: "eid243", tween: [ "transform", "${_luke_part1}", "scaleX", '0.35', { fromValue: '1'}], position: 7000, duration: 405, easing: "easeInOutQuad" },
            { id: "eid112", tween: [ "style", "${_label7}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "style", "${_label7}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid256", tween: [ "transform", "${_luke_header}", "scaleX", '1', { fromValue: '0.78'}], position: 6750, duration: 250, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "style", "${_grid6}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 755, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "style", "${_grid6}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid200", tween: [ "transform", "${_type_text}", "scaleX", '0.86', { fromValue: '1'}], position: 13000, duration: 957, easing: "easeInQuad" },
            { id: "eid156", tween: [ "transform", "${_Text3}", "scaleY", '1', { fromValue: '0.88'}], position: 4745, duration: 255, easing: "easeInQuad" },
            { id: "eid301", tween: [ "transform", "${_question13}", "scaleX", '1', { fromValue: '0.8'}], position: 11000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid315", tween: [ "transform", "${_question13}", "scaleX", '0.77', { fromValue: '1'}], position: 13000, duration: 1000, easing: "easeInQuad" },
            { id: "eid262", tween: [ "style", "${_luke_header}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 250, easing: "easeInQuad" }         ]
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
      opacity: 0.5,
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
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
      fill: ['rgba(0,51,102,1.00)']
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
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.14'],
            ["style", "height", '292px'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-253px'],
            ["style", "top", '-132.44px']
         ],
         "${_restart_no_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '530px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '29px']
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
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Text9}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '6px'],
            ["style", "font-size", '19px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
         ],
         "${_Text5}": [
            ["style", "height", '65px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "top", '26px']
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
            { id: "eid148", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '0'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid237", tween: [ "style", "${_restart_prompt}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid243", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
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
            { id: "eid248", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid256", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInQuad" },
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
