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
            transform:[[],[],[],['0.74','0.74']],
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
            id:'Question10',
            type:'rect',
            rect:['-395','337','512','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.4','0.4']],
            c:[
            {
               id:'RoundRectCopy3',
               type:'rect',
               rect:['0','0','512','266','undefined','undefined'],
               clip:['rect(0px 512px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Reflection Question",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'TextCopy',
               type:'text',
               rect:['15','85','481','61px','undefined','undefined'],
               text:"In your opinion, what is it about this day that both draws and repels people of faith?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',23,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question3',
            type:'rect',
            rect:['534','244','481','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.4','0.4']],
            c:[
            {
               id:'RoundRect3Copy',
               type:'rect',
               rect:['0','0','481','266','undefined','undefined'],
               clip:['rect(0px 481px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(11,0,52,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy2',
                  type:'text',
                  rect:['32','12','249','45','undefined','undefined'],
                  text:"Reflection Question",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text3',
               type:'text',
               rect:['18','83','445','160','undefined','undefined'],
               text:"According to this teaching segment, what does observing the Sabbath do for an individual?  What descriptive language does the Rabbi use to explain the role of Sabbath to a person of faith?",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'Question6',
            display:'none',
            type:'rect',
            rect:['57','85','562','354','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'RoundRect2Copy',
               type:'rect',
               rect:['0','0','562','354','undefined','undefined'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(11,0,52,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'Text12',
               type:'text',
               rect:['11','7','542','36','undefined','undefined'],
               text:"Reflection Question",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1)","normal","none","italic"]
            },
            {
               id:'Text16',
               type:'text',
               rect:['18','78','521','182','undefined','undefined'],
               text:"According to Matthew 12:1-14 and Luke 13:10-17, what kinds of things did Jesus do on the Sabbath?  How did others respond to this?  How did he respond to them?",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',27,"rgba(0,0,0,1.00)","normal","none","italic"]
            },
            {
               id:'Text17',
               type:'text',
               rect:['33','296','496','36','undefined','undefined'],
               cursor:['pointer'],
               text:"(Click here to read the passages)",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',27,"rgba(0,0,0,1)","normal","none","italic"]
            }]
         },
         {
            id:'Question7',
            display:'none',
            type:'rect',
            rect:['104','131','466','284','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'RoundRect4Copy',
               type:'rect',
               rect:['0','0','466','284','undefined','undefined'],
               clip:['rect(0px 466px 52px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(11,0,52,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'Text24',
               type:'text',
               rect:['18','12','436','34','undefined','undefined'],
               text:"Reflection Question",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            },
            {
               id:'Text25',
               type:'text',
               rect:['28','119','419','155','undefined','undefined'],
               text:"How did Jesus' saving work change his followers' attitudes and actions about the Sabbath?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'Question4',
            type:'rect',
            rect:['129','168','411','223','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
            c:[
            {
               id:'RoundRect5Copy',
               type:'rect',
               rect:['0','0','411','223','undefined','undefined'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text9',
                  type:'text',
                  rect:['18','5','377','36','undefined','undefined'],
                  text:"Reflection Question",
                  align:"auto",
                  font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text10',
               type:'text',
               rect:['17','81','377','73','undefined','undefined'],
               text:"Read Exodus 31:13. The Sabbath is a sign of what for God's people?",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"],
               transform:[]
            },
            {
               id:'Text11',
               type:'text',
               rect:['25','164','363','36','undefined','undefined'],
               cursor:['pointer'],
               text:"(Click here to read passage)",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","italic"]
            }]
         },
         {
            id:'Question5',
            type:'rect',
            rect:['89','122','481','202px','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'RoundRectCopy2',
               type:'rect',
               rect:['0','0','481','300','undefined','undefined'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'Text4',
               type:'text',
               rect:['26','12','294','30','undefined','undefined'],
               text:"Reflection Question",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"],
               transform:[]
            },
            {
               id:'Text6',
               type:'text',
               rect:['13','97px','456','83','undefined','undefined'],
               text:"What role do you think the Sabbath plays in the lives of most Christians?",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1.00)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'MatthewLuke',
            display:'none',
            type:'rect',
            rect:['28','6','614','546','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
            c:[
            {
               id:'MatthewLukeCopy',
               type:'rect',
               rect:['0','0','614','489','undefined','undefined'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'Text18',
               type:'text',
               rect:['24','10','583','28','undefined','undefined'],
               text:"Matthew 12:1-14",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',30,"rgba(255,255,255,1)","normal","none","italic"],
               transform:[]
            },
            {
               id:'Text21',
               type:'text',
               rect:['9','6','596','36','undefined','undefined'],
               text:"Luke 13:10-17",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',30,"rgba(255,255,255,1)","normal","none","italic"],
               transform:[]
            },
            {
               id:'Text22',
               type:'text',
               rect:['11','66','557','454','undefined','undefined'],
               text:"On a Sabbath Jesus was teaching in one of the synagogues, and a woman was there who had been crippled by a spirit for eighteen years. She was bent over and could not straighten up at all. When Jesus saw her, he called her forward and said to her, \"Woman, \"you are set free from your infirmity.\" Then he put his hands on her, and immediately she straightened up and praised God. Indignant because Jesus had healed on the Sabbath, the synagogue ruler said to the people, \"There are six days for work. So come and be healed on those days, not on the Sabbath.\" The Lord answered him, \"You hypocrites! Doesn't each of you on the Sabbath untie his ox or donkey from the stall and lead it out to give it water? Then should not this woman a daughter of Abraham, whom Satan has kept bound for eighteen long years, be set free on the Sabbath day from what bound her?\" When he said this, all his opponents were humiliated, but the people were delighted with all the wonderful things he was doing.",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,"rgba(255,255,255,1)","normal","none","italic"]
            },
            {
               id:'Text23',
               display:'none',
               type:'text',
               rect:['38','499','542','30','undefined','undefined'],
               cursor:['pointer'],
               text:"(Click here when done reading)",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,"rgba(0,0,0,1)","normal","none","italic"],
               transform:[]
            },
            {
               id:'Text20',
               type:'text',
               rect:['385','521','228','19','undefined','undefined'],
               cursor:['pointer'],
               text:"(Click to continue reading)",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","normal","underline","italic"],
               transform:[]
            },
            {
               id:'Text19',
               type:'text',
               rect:['3','55','609','457','undefined','undefined'],
               text:"At that time Jesus went through the grainfields on the Sabbath.  His disciples were hungry and began to pick some heads of grain and eat them. When the Pharisees saw this, they said to him, \"Look! Your disciples are doing what is unlawful on the Sabbath.\" He answered, \"Haven't you read what David did when he and his companions were hungry? He entered the house of God, and he and his companions ate the consecrated bread - which was not lawful for them to do, but only for the priests. Or haven't you read in the Law that on the Sabbath the priests in the temple desecrate the day and yet are innocent? I tell you that one greater than the temple is here. If you had known what these words mean, 'I desire mercy, not sacrifice,' you would not have condemned the innocent. For the Son of Man is Lord of the Sabbath.\" Going on from that place, he went into their synagogue, and a man with a shriveled hand was there. Looking for a reason to accuse Jesus, they asked him, \"Is it lawful to heal on the Sabbath?\" He said to them, \"If any of you has a sheep and it falls into a pit on the Sabbath, will you not take hold of it and lift it out? How much more valuable is a man than a sheep! Therefore it is lawful to do good on the Sabbath.\" Then he said to the man, \"Stretch out your hand.\" So he stretche dit out and it was completely restored, just as sound as the other. But the Pharisees went out and plotted how they might kill Jesus.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'hebrews1',
            display:'none',
            type:'text',
            rect:['24px','44px','618px','381px','auto','auto'],
            text:"There are many references to Sabbath-keeping in the New Testament. For example, Hebrews 4:9–10 instructs,<i> \"There remains, then, a Sabbath-rest for the people of God; for anyone who enters God's rest also rests from his own work, just as God did from his.\" </i><br><br>As Christians seek to abide by these biblical teachings, they can turn to Jewish sources—such as Rabbi Eckstein's teachings—to help them reconnect with these time-honored biblical practices.",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'sabbath_bar2',
            type:'image',
            rect:['1','665','670px','100px','auto','auto'],
            clip:['rect(17px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'q10_skip_text',
            display:'none',
            type:'text',
            rect:['21px','424px','628px','67px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question, or type an answer and click Submit to save it.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',22,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0','560','670px','100px','auto','auto'],
            clip:['rect(14px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'q12_skip_button',
            display:'none',
            type:'ellipse',
            rect:['541px','490px','49px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q12_submit_button',
            display:'none',
            type:'rect',
            rect:['232px','508px','204px','41px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q12_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['542px','496px','48px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'buttons_sans',
            display:'none',
            type:'image',
            rect:['0','460px','670px','100px','auto','auto'],
            clip:['rect(18px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'next_hebrews',
            display:'none',
            type:'ellipse',
            rect:['544px','494px','44px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'hebrews2',
            display:'none',
            type:'text',
            rect:['23px','144px','619px','257px','auto','auto'],
            text:"While the intent and meaning behind Sabbath observances might be different for the Jew and the Christian, there are things we can learn from each other—and most certainly lessons Christians can learn about keeping the Sabbath from their more observant Jewish brothers and sisters.",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'question9c',
            display:'none',
            type:'rect',
            rect:['74px','24px','521px','139px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'question9c_header',
               type:'rect',
               rect:['0px','0px','521px','139px','auto','auto'],
               clip:['rect(0px 521px 40px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               userClass:"header_bar"
            },
            {
               id:'Text',
               type:'text',
               rect:['6px','5px','445px','30px','auto','auto'],
               text:"Reflection Question",
               align:"left",
               userClass:"question_header",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1.00)","normal","none","italic"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['6px','59px','496px','60px','auto','auto'],
               text:"True or False? The Sabbath is one of the main reasons people return to their Jewish roots.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'q9c_wrong_highlight',
            display:'none',
            type:'image',
            rect:['96','292','131px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrong.png",'0px','0px']
         },
         {
            id:'true',
            display:'none',
            type:'text',
            rect:['106px','208px','422px','44px','auto','auto'],
            text:"A. True",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',31,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'false',
            display:'none',
            type:'text',
            rect:['106px','301px','429px','61px','auto','auto'],
            text:"B. False",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',31,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'q9c_false_explanation',
            display:'none',
            type:'text',
            rect:['70px','277px','512px','167px','auto','auto'],
            text:"Sorry, the correct answer is True. Rabbi Eckstein said, \"The Sabbath is a point of departure for those leaving Judaism and a point of entry for those returning to their Jewish roots.\"",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'q9c_true_submit_button',
            display:'none',
            type:'rect',
            rect:['233px','505px','205px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9c_true_next_button',
            display:'none',
            type:'ellipse',
            rect:['541px','496px','46px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9c_false_next_button',
            display:'none',
            type:'ellipse',
            rect:['544px','496px','44px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb19',
            display:'none',
            type:'ellipse',
            rect:['78px','494px','54px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9c_false_submit_button',
            display:'none',
            type:'rect',
            rect:['237px','506px','192px','44px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9c_correct_highlight',
            display:'none',
            type:'image',
            rect:['98px','204px','119px','47px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"correct.png",'0px','0px']
         },
         {
            id:'q9c_true_explanation',
            display:'none',
            type:'text',
            rect:['75px','266px','521px','118px','auto','auto'],
            text:"Correct!  Rabbi Eckstein said, \"The Sabbath is a point of departure for those leaving Judaism and a point of entry for those returning to their Jewish roots.\"",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'q9c_select',
            display:'none',
            type:'image',
            rect:['95','201','137px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"select.png",'0px','0px']
         },
         {
            id:'q9c_true_select_button',
            display:'none',
            type:'rect',
            rect:['105px','213px','107px','30px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'q9c_false_select_button',
            display:'none',
            type:'rect',
            rect:['106px','303px','107px','30px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9c_skip_text',
            display:'none',
            type:'text',
            rect:['33px','415px','603px','47px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or select an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',17,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'q9c_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['542px','499px','45px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9c_skip_arrow_button',
            display:'none',
            type:'ellipse',
            rect:['541px','499px','48px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q10_submit_button',
            display:'none',
            type:'rect',
            rect:['233px','505px','200px','43px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q10_skip_button',
            display:'none',
            type:'ellipse',
            rect:['541px','494px','46px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q10_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['541px','496px','48px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb20',
            display:'none',
            type:'ellipse',
            rect:['80px','495px','55px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb21',
            display:'none',
            type:'ellipse',
            rect:['81px','494px','49px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb22',
            display:'none',
            type:'ellipse',
            rect:['81px','493px','52px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb23',
            display:'none',
            type:'ellipse',
            rect:['83px','499px','48px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'exodus_submit_button',
            display:'none',
            type:'rect',
            rect:['234px','507px','210px','39px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'exodus_skip_button',
            display:'none',
            type:'ellipse',
            rect:['541px','493px','47px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'exodus_skip_message',
            display:'none',
            type:'text',
            rect:['29px','436px','614px','58px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',19,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['136px','283px','423px','24px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'exodus_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['545px','500px','47px','46px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text7',
            display:'none',
            type:'text',
            rect:['42px','427px','599px','67px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',20,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'sb18',
            display:'none',
            type:'ellipse',
            rect:['82px','494px','50px','55px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'restart',
            display:'none',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'exodus',
            type:'rect',
            rect:['25','30','614','504','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            boxShadow:["",12,28,34,15,"rgba(0,0,0,0.65)"],
            transform:[],
            c:[
            {
               id:'exodusCopy',
               type:'rect',
               rect:['0','0','614','504','undefined','undefined'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[]
            },
            {
               id:'Text13',
               type:'text',
               rect:['148px','13px','317px','36','undefined','undefined'],
               text:"Exodus 31:13",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","italic"]
            },
            {
               id:'exodus_escape_x',
               type:'text',
               rect:['555px','12px','49px','32px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',26,"rgba(255,255,255,1)","700","none","normal"]
            },
            {
               id:'Text15',
               type:'text',
               rect:['79','457','456','36','undefined','undefined'],
               cursor:['pointer'],
               text:"(Click here when finished reading)",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',23,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            },
            {
               id:'Text14',
               type:'text',
               rect:['26','166','562','164','undefined','undefined'],
               text:"“Say to the Israelites, ‘You must observe my Sabbath. This will be a sign between me and you for the generations to come, so you may know that I am the L<small>ORD</small>, who makes you holy.' \"",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(0,0,0,1.00)","normal","none","normal"],
               transform:[]
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
         "${_question10}": [
            ["transform", "translateX", '718px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '320px'],
            ["style", "height", '235px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_question9c_header}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,521,40,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q10_skip_text}": [
            ["style", "top", '424px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '21px'],
            ["style", "font-size", '18px']
         ],
         "${_Text22}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["style", "height", '420px'],
            ["style", "opacity", '0'],
            ["style", "left", '28px'],
            ["style", "font-size", '19px']
         ],
         "${_NextButton}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["style", "top", '473px'],
            ["transform", "scaleY", '0.74'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '711px'],
            ["style", "width", '145px']
         ],
         "${_sb20}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_exodus}": [
            ["style", "-webkit-transform-origin", [50,65], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,65],{valueTemplate:'@@0@@% @@1@@%'}],
            ["subproperty", "boxShadow.blur", '34px'],
            ["transform", "scaleX", '0.05'],
            ["style", "opacity", '0'],
            ["style", "left", '-246.99px'],
            ["style", "top", '-357px'],
            ["transform", "scaleY", '0.05'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.offsetV", '28px'],
            ["subproperty", "boxShadow.spread", '15px'],
            ["subproperty", "boxShadow.offsetH", '12px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Text21}": [
            ["style", "top", '6px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '9px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(11,0,52,1.00)'],
            ["style", "clip", [0,562,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_Text10}": [
            ["style", "top", '81px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '73px'],
            ["style", "left", '17px'],
            ["style", "font-style", 'normal']
         ],
         "${_sb23}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sb22}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_hebrews1}": [
            ["style", "top", '290px'],
            ["style", "height", '381px'],
            ["transform", "scaleY", '0.65'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleX", '0.65']
         ],
         "${_q9c_false_select_button}": [
            ["style", "top", '303px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_question12}": [
            ["transform", "translateX", '391px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '312px'],
            ["style", "height", '258px']
         ],
         "${_q9c_skip_arrow_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '499px']
         ],
         "${_sb21}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["style", "top", '83px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '18px'],
            ["style", "font-size", '24px']
         ],
         "${_Question10}": [
            ["style", "top", '34.17px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.4'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '601.4px'],
            ["style", "height", '207.51162790698px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '12px'],
            ["style", "width", '249px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '32px'],
            ["style", "font-size", '27px']
         ],
         "${_question12} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-289px'],
            ["transform", "translateY", '172px']
         ],
         "${_q10_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons_sans}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0'],
            ["style", "clip", [18,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'none']
         ],
         "${_MatthewLukeCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,614,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_true}": [
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "height", '44px'],
            ["style", "opacity", '0'],
            ["style", "left", '596px'],
            ["style", "font-size", '31px']
         ],
         "${_q9c_correct_highlight}": [
            ["style", "top", '204px'],
            ["style", "display", 'none'],
            ["style", "height", '47px'],
            ["style", "opacity", '0'],
            ["style", "left", '98px'],
            ["style", "width", '119px']
         ],
         "${_Text24}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '24px']
         ],
         "${_Text25}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '119px']
         ],
         "${_Text6}": [
            ["style", "top", '97.08px'],
            ["style", "height", '83px'],
            ["style", "font-style", 'normal'],
            ["style", "left", '13px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '25px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_type_text}": [
            ["style", "top", '299px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '664px'],
            ["style", "width", '423px']
         ],
         "${_exodus_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_hebrews2}": [
            ["style", "top", '280px'],
            ["transform", "scaleY", '0.6'],
            ["style", "height", '257px'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '0.6'],
            ["style", "display", 'none']
         ],
         "${_question11}": [
            ["transform", "translateX", '717px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '365px'],
            ["style", "height", '204px']
         ],
         "${_exodus_escape_x}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '700'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '26px']
         ],
         "${_q12_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,481,49,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_sb19}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_next_hebrews}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q10_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_exodusCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,614,61,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '85px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '61px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '23px']
         ],
         "${_q12_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '26px'],
            ["style", "width", '294px']
         ],
         "${_sb18}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect4Copy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(11,0,52,1.00)'],
            ["style", "clip", [0,466,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_exodus_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q10_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q9c_false_explanation}": [
            ["style", "top", '331px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '70px'],
            ["style", "font-size", '25px']
         ],
         "${_Text19}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '3px'],
            ["style", "font-size", '18px'],
            ["style", "top", '55px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "width", '609px'],
            ["style", "height", '457px']
         ],
         "${_sabbath_bar2}": [
            ["style", "top", '665px'],
            ["style", "opacity", '1'],
            ["style", "left", '1px'],
            ["style", "clip", [17,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_MatthewLuke}": [
            ["style", "-webkit-transform-origin", [50,75], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.09'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.09'],
            ["style", "opacity", '0'],
            ["style", "height", '546px'],
            ["style", "top", '6px']
         ],
         "${_q9c_true_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text20}": [
            ["style", "top", '521px'],
            ["style", "left", '385px'],
            ["style", "text-decoration", 'underline'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '228px']
         ],
         "${_q9c_skip_go_button}": [
            ["style", "top", '499px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '542px']
         ],
         "${_RoundRect5Copy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,411,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_q9c_false_next_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text9}": [
            ["style", "top", '5px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '18px'],
            ["style", "font-size", '27px']
         ],
         "${_q9c_true_select_button}": [
            ["style", "top", '213px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '105px']
         ],
         "${_q9c_true_explanation}": [
            ["style", "top", '392px'],
            ["style", "height", '118px'],
            ["transform", "scaleY", '0.67'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.67'],
            ["style", "opacity", '0'],
            ["style", "left", '75px'],
            ["style", "font-size", '24px']
         ],
         "${_question11} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-289px'],
            ["transform", "translateY", '135px']
         ],
         "${_q9c_wrong_highlight}": [
            ["style", "height", '56px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '131px']
         ],
         "${_Text7}": [
            ["style", "top", '427px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '42px'],
            ["style", "font-size", '18px']
         ],
         "${_Text11}": [
            ["style", "cursor", 'pointer']
         ],
         "${_false}": [
            ["style", "top", '301px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '596px'],
            ["style", "display", 'none']
         ],
         "${_Text2Copy}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_Question6}": [
            ["style", "top", '-170.25px'],
            ["transform", "scaleY", '0.75'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '55.75px'],
            ["transform", "scaleX", '0.75']
         ],
         "${_Question7}": [
            ["style", "top", '120px'],
            ["transform", "scaleY", '0.37'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '404px'],
            ["transform", "scaleX", '0.37']
         ],
         "${_Text23}": [
            ["style", "top", '499px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_Text18}": [
            ["style", "top", '10px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_Question3}": [
            ["style", "top", '244.8px'],
            ["transform", "scaleY", '0.4'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '534.7px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_Question4}": [
            ["style", "top", '-4.12px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '683px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_Text2}": [
            ["style", "top", '59px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "height", '60px'],
            ["style", "font-size", '22px']
         ],
         "${_exodus_skip_message}": [
            ["style", "top", '436px'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["style", "font-size", '18px']
         ],
         "${_question10} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-295px'],
            ["transform", "translateY", '161px']
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
         "${_q12_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q9c_skip_text}": [
            ["style", "top", '415px'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '33px'],
            ["style", "font-size", '18px']
         ],
         "${_Text15}": [
            ["style", "top", '457px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '79px'],
            ["style", "font-size", '23px']
         ],
         "${_RoundRect3Copy}": [
            ["color", "background-color", 'rgba(11,0,52,1.00)'],
            ["style", "clip", [0,481,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_buttons}": [
            ["style", "top", '560px'],
            ["style", "opacity", '0'],
            ["style", "clip", [14,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'none']
         ],
         "${_Text17}": [
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'center']
         ],
         "${_Text16}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '182px']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_Question5}": [
            ["style", "top", '22.5px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.75'],
            ["style", "height", '202px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '465px'],
            ["transform", "scaleX", '0.75']
         ],
         "${_q9c_true_next_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question9c}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '440px'],
            ["style", "display", 'none']
         ],
         "${_Text14}": [
            ["style", "top", '166px'],
            ["style", "text-align", 'left'],
            ["style", "height", '164px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '26px'],
            ["style", "font-size", '25px']
         ],
         "${_q9c_false_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_exodus_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text13}": [
            ["style", "top", '13px'],
            ["style", "width", '317px'],
            ["style", "left", '148px'],
            ["style", "font-size", '32px']
         ],
         "${_q9c_select}": [
            ["style", "top", '197px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "height", '56px'],
            ["style", "width", '137px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 43250,
         autoPlay: true,
         labels: {
            "q9c_begin": 3000,
            "q9c_skip_check": 5500,
            "q9c_skip_go": 5750,
            "q9c_true_select": 7500,
            "q9c_true_submit": 7750,
            "q9c_true_next": 10645,
            "q9c_false_select": 11497,
            "q9c_false_submit": 11750,
            "q9c_false_next": 14000,
            "q10_begin": 15750,
            "q10_skip_check": 17750,
            "q10_next_go": 18000,
            "exodus_begin": 22000,
            "exodus_home": 23500,
            "exodus_skip_check": 23626,
            "readtext": 23750,
            "textmaximized": 24250,
            "textdone": 24750,
            "nextslide": 25000,
            "q12_begin": 26208,
            "q12_skip_check": 27618,
            "q12_next_go": 27750,
            "readmatthewclick": 30000,
            "readmatthewmax": 30500,
            "minimize": 31640,
            "commentary_begin": 38000,
            "fin": 42750
         },
         timeline: [
            { id: "eid856", tween: [ "style", "${_question12}", "opacity", '1', { fromValue: '0'}], position: 26750, duration: 750, easing: "easeOutSine" },
            { id: "eid861", tween: [ "style", "${_question12}", "opacity", '0', { fromValue: '1'}], position: 28250, duration: 750, easing: "easeInQuad" },
            { id: "eid93", tween: [ "style", "${_Question10}", "opacity", '1', { fromValue: '0'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "style", "${_Question10}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid62", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 739, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 18750, duration: 500, easing: "easeInQuad" },
            { id: "eid73", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '0'}], position: 19250, duration: 0, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 22866, duration: 634, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 668, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 26823, duration: 677, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 28250, duration: 622, easing: "easeInQuad" },
            { id: "eid338", tween: [ "style", "${_Text21}", "opacity", '1', { fromValue: '0'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid364", tween: [ "style", "${_MatthewLuke}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid365", tween: [ "style", "${_MatthewLuke}", "display", 'block', { fromValue: 'none'}], position: 29849, duration: 0, easing: "easeOutQuad" },
            { id: "eid355", tween: [ "style", "${_MatthewLuke}", "display", 'none', { fromValue: 'block'}], position: 32201, duration: 0, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "style", "${_Text7}", "font-size", '18px', { fromValue: '18px'}], position: 27636, duration: 0 },
            { id: "eid318", tween: [ "transform", "${_Question6}", "scaleY", '1', { fromValue: '0.75'}], position: 28398, duration: 851, easing: "easeInQuad" },
            { id: "eid378", tween: [ "transform", "${_Question6}", "scaleY", '0.5', { fromValue: '1'}], position: 32316, duration: 683, easing: "easeInQuad" },
            { id: "eid529", tween: [ "style", "${_question9c}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid557", tween: [ "style", "${_question9c}", "display", 'block', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid639", tween: [ "style", "${_question9c}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
            { id: "eid552", tween: [ "style", "${_question9c}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid707", tween: [ "style", "${_question9c}", "display", 'block', { fromValue: 'block'}], position: 11250, duration: 0 },
            { id: "eid547", tween: [ "style", "${_question9c}", "display", 'block', { fromValue: 'block'}], position: 11497, duration: 0, easing: "easeOutQuad" },
            { id: "eid755", tween: [ "style", "${_question9c}", "display", 'none', { fromValue: 'block'}], position: 14750, duration: 0 },
            { id: "eid385", tween: [ "style", "${_Question7}", "top", '131px', { fromValue: '120px'}], position: 32750, duration: 750, easing: "easeInQuad" },
            { id: "eid395", tween: [ "style", "${_Question7}", "top", '248.99px', { fromValue: '131px'}], position: 34250, duration: 1250, easing: "easeInQuad" },
            { id: "eid350", tween: [ "style", "${_Text22}", "height", '420px', { fromValue: '420px'}], position: 31500, duration: 0, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 340, duration: 1160 },
            { id: "eid684", tween: [ "transform", "${_q9c_true_explanation}", "scaleY", '1', { fromValue: '0.67'}], position: 9500, duration: 750, easing: "easeOutQuad" },
            { id: "eid701", tween: [ "transform", "${_q9c_true_explanation}", "scaleY", '0.68', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid241", tween: [ "style", "${_NextButton}", "left", '494px', { fromValue: '711px'}], position: 32945, duration: 805, easing: "easeInQuad" },
            { id: "eid245", tween: [ "style", "${_NextButton}", "left", '153px', { fromValue: '494px'}], position: 33750, duration: 1250, easing: "easeInQuad" },
            { id: "eid251", tween: [ "style", "${_exodusCopy}", "clip", [0,614,61,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,614,61,0]}], position: 24250, duration: 0, easing: "easeInQuad" },
            { id: "eid609", tween: [ "style", "${_q9c_skip_arrow_button}", "display", 'block', { fromValue: 'none'}], position: 5178, duration: 0 },
            { id: "eid610", tween: [ "style", "${_q9c_skip_arrow_button}", "display", 'none', { fromValue: 'block'}], position: 5353, duration: 0 },
            { id: "eid611", tween: [ "style", "${_q9c_skip_arrow_button}", "display", 'block', { fromValue: 'none'}], position: 7383, duration: 0 },
            { id: "eid612", tween: [ "style", "${_q9c_skip_arrow_button}", "display", 'none', { fromValue: 'block'}], position: 7618, duration: 0 },
            { id: "eid613", tween: [ "style", "${_q9c_skip_arrow_button}", "display", 'block', { fromValue: 'none'}], position: 11373, duration: 0 },
            { id: "eid614", tween: [ "style", "${_q9c_skip_arrow_button}", "display", 'none', { fromValue: 'block'}], position: 11623, duration: 0 },
            { id: "eid506", tween: [ "style", "${_question10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid764", tween: [ "style", "${_question10}", "display", 'block', { fromValue: 'none'}], position: 16425, duration: 0, easing: "easeInQuad" },
            { id: "eid774", tween: [ "style", "${_question10}", "display", 'none', { fromValue: 'block'}], position: 19250, duration: 0, easing: "easeInQuad" },
            { id: "eid519", tween: [ "style", "${_buttons}", "opacity", '0.4', { fromValue: '0'}], position: 2415, duration: 335, easing: "easeInQuad" },
            { id: "eid546", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.4000000059604645'}], position: 4750, duration: 500, easing: "easeOutQuad" },
            { id: "eid23", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 5750, duration: 500, easing: "easeInQuad" },
            { id: "eid26", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 7383, duration: 0, easing: "easeInQuad" },
            { id: "eid27", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 7750, duration: 500, easing: "easeInQuad" },
            { id: "eid34", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 11497, duration: 0, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 11750, duration: 500, easing: "easeInQuad" },
            { id: "eid42", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 17000, duration: 500, easing: "easeInQuad" },
            { id: "eid44", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 18000, duration: 500, easing: "easeInQuad" },
            { id: "eid46", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 23000, duration: 500, easing: "easeInQuad" },
            { id: "eid48", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 25000, duration: 500, easing: "easeInQuad" },
            { id: "eid871", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0.25'}], position: 25750, duration: 369, easing: "easeInQuad" },
            { id: "eid106", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0'}], position: 26136, duration: 0, easing: "easeInQuad" },
            { id: "eid50", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 26208, duration: 0, easing: "easeInQuad" },
            { id: "eid849", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 26999, duration: 501, easing: "easeInQuad" },
            { id: "eid850", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 27750, duration: 500, easing: "easeInQuad" },
            { id: "eid847", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 40873, duration: 1627 },
            { id: "eid671", tween: [ "style", "${_q9c_select}", "top", '197px', { fromValue: '197px'}], position: 7500, duration: 0 },
            { id: "eid667", tween: [ "style", "${_q9c_select}", "top", '297px', { fromValue: '197px'}], position: 11497, duration: 0 },
            { id: "eid96", tween: [ "transform", "${_Question10}", "scaleX", '0.86', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "transform", "${_Question10}", "scaleX", '0.4', { fromValue: '0.86'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid567", tween: [ "style", "${_true}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
            { id: "eid566", tween: [ "style", "${_true}", "display", 'block', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid640", tween: [ "style", "${_true}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0 },
            { id: "eid579", tween: [ "style", "${_true}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid708", tween: [ "style", "${_true}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
            { id: "eid589", tween: [ "style", "${_true}", "display", 'block', { fromValue: 'none'}], position: 11497, duration: 0, easing: "easeOutQuad" },
            { id: "eid754", tween: [ "style", "${_true}", "display", 'none', { fromValue: 'block'}], position: 14890, duration: 0 },
            { id: "eid664", tween: [ "style", "${_q9c_select}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
            { id: "eid668", tween: [ "style", "${_q9c_select}", "opacity", '1', { fromValue: '0'}], position: 11497, duration: 0 },
            { id: "eid669", tween: [ "style", "${_q9c_select}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 250 },
            { id: "eid765", tween: [ "style", "${_question10}", "height", '235px', { fromValue: '235px'}], position: 15750, duration: 0, easing: "easeInQuad" },
            { id: "eid357", tween: [ "transform", "${_Text23}", "scaleX", '1', { fromValue: '0.2'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid539", tween: [ "transform", "${_false}", "scaleX", '1', { fromValue: '0.8'}], position: 4000, duration: 750, easing: "easeOutQuad" },
            { id: "eid570", tween: [ "transform", "${_false}", "scaleX", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid629", tween: [ "transform", "${_false}", "scaleX", '0.73', { fromValue: '1'}], position: 5750, duration: 750 },
            { id: "eid642", tween: [ "transform", "${_false}", "scaleX", '1', { fromValue: '0.73'}], position: 7500, duration: 0 },
            { id: "eid585", tween: [ "transform", "${_false}", "scaleX", '1', { fromValue: '1'}], position: 11497, duration: 0, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 2819, duration: 0 },
            { id: "eid335", tween: [ "style", "${_Text19}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0, easing: "easeOutQuad" },
            { id: "eid123", tween: [ "style", "${_exodus_skip_message}", "font-size", '18px', { fromValue: '18px'}], position: 23626, duration: 0 },
            { id: "eid243", tween: [ "style", "${_NextButton}", "opacity", '1', { fromValue: '0'}], position: 33000, duration: 750, easing: "easeInQuad" },
            { id: "eid244", tween: [ "style", "${_NextButton}", "opacity", '0', { fromValue: '1'}], position: 33750, duration: 1000, easing: "easeInQuad" },
            { id: "eid331", tween: [ "style", "${_Text18}", "opacity", '0', { fromValue: '1'}], position: 30500, duration: 351, easing: "easeOutQuad" },
            { id: "eid332", tween: [ "style", "${_Text19}", "opacity", '0', { fromValue: '1'}], position: 30500, duration: 351, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "style", "${_Question10}", "top", '59.75px', { fromValue: '34.17px'}], position: 15250, duration: 1500, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_Question10}", "top", '77px', { fromValue: '59.75px'}], position: 18000, duration: 1500, easing: "easeInQuad" },
            { id: "eid867", tween: [ "style", "${_q12_submit_button}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0, easing: "easeInQuad" },
            { id: "eid868", tween: [ "style", "${_q12_submit_button}", "display", 'none', { fromValue: 'block'}], position: 27707, duration: 0, easing: "easeInQuad" },
            { id: "eid762", tween: [ "style", "${_q9c_false_next_button}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
            { id: "eid763", tween: [ "style", "${_q9c_false_next_button}", "display", 'none', { fromValue: 'block'}], position: 13900, duration: 0, easing: "easeInQuad" },
            { id: "eid1", tween: [ "style", "${_sb18}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid2", tween: [ "style", "${_sb18}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0 },
            { id: "eid3", tween: [ "style", "${_sb18}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
            { id: "eid4", tween: [ "style", "${_sb18}", "display", 'none', { fromValue: 'block'}], position: 10577, duration: 0 },
            { id: "eid5", tween: [ "style", "${_sb18}", "display", 'block', { fromValue: 'none'}], position: 11497, duration: 0 },
            { id: "eid6", tween: [ "style", "${_sb18}", "display", 'none', { fromValue: 'block'}], position: 13838, duration: 0 },
            { id: "eid836", tween: [ "style", "${_hebrews2}", "display", 'block', { fromValue: 'none'}], position: 39750, duration: 0, easing: "easeInQuad" },
            { id: "eid841", tween: [ "style", "${_hebrews2}", "display", 'none', { fromValue: 'block'}], position: 41750, duration: 0, easing: "easeInQuad" },
            { id: "eid801", tween: [ "style", "${_question11}", "opacity", '1', { fromValue: '0'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid803", tween: [ "style", "${_question11}", "opacity", '0.0086206896551724', { fromValue: '1'}], position: 25000, duration: 750, easing: "easeInQuad" },
            { id: "eid520", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInQuad" },
            { id: "eid809", tween: [ "style", "${_buttons}", "display", 'none', { fromValue: 'block'}], position: 38000, duration: 0, easing: "easeInQuad" },
            { id: "eid845", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 40873, duration: 0, easing: "easeInQuad" },
            { id: "eid863", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'block'}], position: 43250, duration: 0, easing: "easeInQuad" },
            { id: "eid115", tween: [ "style", "${_Question3}", "top", '132.2px', { fromValue: '244.8px'}], position: 18500, duration: 1500, easing: "easeInQuad" },
            { id: "eid210", tween: [ "style", "${_Question3}", "top", '226.74px', { fromValue: '132.2px'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid786", tween: [ "style", "${_exodus_skip_button}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0, easing: "easeInQuad" },
            { id: "eid787", tween: [ "style", "${_exodus_skip_button}", "display", 'none', { fromValue: 'block'}], position: 23571, duration: 0, easing: "easeInQuad" },
            { id: "eid788", tween: [ "style", "${_exodus_skip_button}", "display", 'block', { fromValue: 'none'}], position: 24711, duration: 0, easing: "easeInQuad" },
            { id: "eid789", tween: [ "style", "${_exodus_skip_button}", "display", 'none', { fromValue: 'block'}], position: 24848, duration: 0, easing: "easeInQuad" },
            { id: "eid851", tween: [ "style", "${_q12_skip_button}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0, easing: "easeInQuad" },
            { id: "eid866", tween: [ "style", "${_q12_skip_button}", "display", 'none', { fromValue: 'block'}], position: 27547, duration: 0, easing: "easeInQuad" },
            { id: "eid784", tween: [ "style", "${_exodus_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 23626, duration: 0, easing: "easeInQuad" },
            { id: "eid785", tween: [ "style", "${_exodus_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 23701, duration: 0, easing: "easeInQuad" },
            { id: "eid305", tween: [ "style", "${_Question5}", "display", 'none', { fromValue: 'block'}], position: 28500, duration: 0, easing: "easeInQuad" },
            { id: "eid528", tween: [ "style", "${_question9c}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid560", tween: [ "style", "${_question9c}", "opacity", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid633", tween: [ "style", "${_question9c}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 750 },
            { id: "eid652", tween: [ "style", "${_question9c}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 0 },
            { id: "eid702", tween: [ "style", "${_question9c}", "opacity", '0', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid716", tween: [ "style", "${_question9c}", "opacity", '1', { fromValue: '0'}], position: 11497, duration: 0 },
            { id: "eid750", tween: [ "style", "${_question9c}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 750, easing: "easeInQuad" },
            { id: "eid806", tween: [ "style", "${_Question3}", "display", 'none', { fromValue: 'block'}], position: 18452, duration: 0, easing: "easeInQuad" },
            { id: "eid309", tween: [ "style", "${_Question3}", "display", 'none', { fromValue: 'none'}], position: 21804, duration: 0, easing: "easeInQuad" },
            { id: "eid290", tween: [ "style", "${_Question5}", "opacity", '1', { fromValue: '0'}], position: 26208, duration: 791, easing: "easeOutQuad" },
            { id: "eid304", tween: [ "style", "${_Question5}", "opacity", '0', { fromValue: '1'}], position: 27750, duration: 713, easing: "easeInQuad" },
            { id: "eid814", tween: [ "style", "${_hebrews1}", "opacity", '1', { fromValue: '0'}], position: 38250, duration: 750, easing: "easeOutQuad" },
            { id: "eid826", tween: [ "style", "${_hebrews1}", "opacity", '0', { fromValue: '1'}], position: 39250, duration: 750, easing: "easeInQuad" },
            { id: "eid782", tween: [ "style", "${_exodus_submit_button}", "display", 'block', { fromValue: 'none'}], position: 23500, duration: 0, easing: "easeInQuad" },
            { id: "eid807", tween: [ "style", "${_exodus_submit_button}", "display", 'none', { fromValue: 'block'}], position: 23750, duration: 0, easing: "easeInQuad" },
            { id: "eid808", tween: [ "style", "${_exodus_submit_button}", "display", 'block', { fromValue: 'none'}], position: 24750, duration: 0, easing: "easeInQuad" },
            { id: "eid783", tween: [ "style", "${_exodus_submit_button}", "display", 'none', { fromValue: 'block'}], position: 24848, duration: 0, easing: "easeInQuad" },
            { id: "eid601", tween: [ "style", "${_q9c_false_select_button}", "display", 'block', { fromValue: 'none'}], position: 5178, duration: 0 },
            { id: "eid602", tween: [ "style", "${_q9c_false_select_button}", "display", 'none', { fromValue: 'block'}], position: 5588, duration: 0 },
            { id: "eid603", tween: [ "style", "${_q9c_false_select_button}", "display", 'block', { fromValue: 'none'}], position: 7433, duration: 0 },
            { id: "eid604", tween: [ "style", "${_q9c_false_select_button}", "display", 'none', { fromValue: 'block'}], position: 7653, duration: 0 },
            { id: "eid308", tween: [ "style", "${_Question10}", "display", 'none', { fromValue: 'block'}], position: 19669, duration: 0, easing: "easeInQuad" },
            { id: "eid320", tween: [ "style", "${_Question6}", "left", '57px', { fromValue: '55.75px'}], position: 28398, duration: 851, easing: "easeInQuad" },
            { id: "eid379", tween: [ "style", "${_Question6}", "left", '-206px', { fromValue: '57px'}], position: 32316, duration: 683, easing: "easeInQuad" },
            { id: "eid322", tween: [ "style", "${_Question6}", "top", '85px', { fromValue: '-170.25px'}], position: 28398, duration: 851, easing: "easeInQuad" },
            { id: "eid680", tween: [ "style", "${_q9c_true_explanation}", "top", '266px', { fromValue: '392px'}], position: 9500, duration: 750, easing: "easeOutQuad" },
            { id: "eid816", tween: [ "style", "${_hebrews1}", "top", '29px', { fromValue: '290px'}], position: 38250, duration: 750, easing: "easeOutQuad" },
            { id: "eid823", tween: [ "style", "${_hebrews1}", "top", '-140px', { fromValue: '29px'}], position: 39250, duration: 750, easing: "easeInQuad" },
            { id: "eid831", tween: [ "transform", "${_hebrews2}", "scaleX", '1', { fromValue: '0.6'}], position: 39750, duration: 750, easing: "easeOutQuad" },
            { id: "eid838", tween: [ "transform", "${_hebrews2}", "scaleX", '0.7', { fromValue: '1'}], position: 40750, duration: 1000, easing: "easeInQuad" },
            { id: "eid691", tween: [ "style", "${_q9c_true_explanation}", "left", '-99px', { fromValue: '75px'}], position: 10645, duration: 605 },
            { id: "eid340", tween: [ "transform", "${_Text21}", "scaleX", '1', { fromValue: '0.75'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid598", tween: [ "style", "${_q9c_true_select_button}", "display", 'block', { fromValue: 'none'}], position: 5178, duration: 0 },
            { id: "eid600", tween: [ "style", "${_q9c_true_select_button}", "display", 'none', { fromValue: 'block'}], position: 5588, duration: 0 },
            { id: "eid594", tween: [ "style", "${_q9c_true_select_button}", "display", 'block', { fromValue: 'none'}], position: 7303, duration: 0 },
            { id: "eid595", tween: [ "style", "${_q9c_true_select_button}", "display", 'none', { fromValue: 'block'}], position: 7433, duration: 0 },
            { id: "eid596", tween: [ "style", "${_q9c_true_select_button}", "display", 'block', { fromValue: 'none'}], position: 11373, duration: 0 },
            { id: "eid597", tween: [ "style", "${_q9c_true_select_button}", "display", 'none', { fromValue: 'block'}], position: 11573, duration: 0 },
            { id: "eid14", tween: [ "style", "${_next_hebrews}", "opacity", '0', { fromValue: '0'}], position: 39209, duration: 0 },
            { id: "eid259", tween: [ "transform", "${_exodus}", "scaleY", '1', { fromValue: '0.05'}], position: 23750, duration: 500, easing: "easeOutQuad" },
            { id: "eid266", tween: [ "transform", "${_exodus}", "scaleY", '0.06', { fromValue: '1'}], position: 24250, duration: 500, easing: "easeInQuad" },
            { id: "eid756", tween: [ "style", "${_q9c_true_submit_button}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
            { id: "eid757", tween: [ "style", "${_q9c_true_submit_button}", "display", 'none', { fromValue: 'block'}], position: 7552, duration: 0 },
            { id: "eid58", tween: [ "style", "${_type_text}", "left", '136px', { fromValue: '664px'}], position: 16500, duration: 739, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "style", "${_type_text}", "left", '-507px', { fromValue: '136px'}], position: 18750, duration: 500, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_type_text}", "left", '132px', { fromValue: '552px'}], position: 22866, duration: 634, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_type_text}", "left", '-197px', { fromValue: '132px'}], position: 25000, duration: 668, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_type_text}", "left", '132px', { fromValue: '354px'}], position: 26823, duration: 677, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "style", "${_type_text}", "left", '-453px', { fromValue: '132px'}], position: 28250, duration: 622, easing: "easeInQuad" },
            { id: "eid516", tween: [ "style", "${_sabbath_bar2}", "left", '0px', { fromValue: '1px'}], position: 500, duration: 1500, easing: "easeInQuad" },
            { id: "eid829", tween: [ "style", "${_hebrews2}", "top", '144px', { fromValue: '280px'}], position: 39750, duration: 750, easing: "easeOutQuad" },
            { id: "eid837", tween: [ "style", "${_hebrews2}", "top", '14px', { fromValue: '144px'}], position: 40750, duration: 1000, easing: "easeInQuad" },
            { id: "eid349", tween: [ "style", "${_Text22}", "left", '28px', { fromValue: '28px'}], position: 31500, duration: 0, easing: "easeOutQuad" },
            { id: "eid509", tween: [ "style", "${_Question10}", "height", '207.51162790698px', { fromValue: '207.51162790698px'}], position: 17239, duration: 0, easing: "easeInQuad" },
            { id: "eid661", tween: [ "style", "${_q9c_true_explanation}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0 },
            { id: "eid709", tween: [ "style", "${_q9c_true_explanation}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0 },
            { id: "eid221", tween: [ "style", "${_Question4}", "opacity", '1', { fromValue: '0'}], position: 21750, duration: 945, easing: "easeOutQuad" },
            { id: "eid246", tween: [ "style", "${_Question4}", "opacity", '0', { fromValue: '1'}], position: 25500, duration: 650, easing: "easeInQuad" },
            { id: "eid366", tween: [ "transform", "${_MatthewLuke}", "scaleX", '1', { fromValue: '0.09'}], position: 30000, duration: 500, easing: "easeOutQuad" },
            { id: "eid353", tween: [ "transform", "${_MatthewLuke}", "scaleX", '0.1', { fromValue: '1'}], position: 31640, duration: 561, easing: "easeOutQuad" },
            { id: "eid735", tween: [ "transform", "${_q9c_false_explanation}", "scaleX", '1', { fromValue: '0.8'}], position: 13214, duration: 536 },
            { id: "eid746", tween: [ "transform", "${_q9c_false_explanation}", "scaleX", '0.72', { fromValue: '1'}], position: 14250, duration: 750, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_type_text}", "top", '283px', { fromValue: '299px'}], position: 16500, duration: 739, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "style", "${_type_text}", "top", '295px', { fromValue: '283px'}], position: 18750, duration: 500, easing: "easeInQuad" },
            { id: "eid72", tween: [ "style", "${_type_text}", "top", '321px', { fromValue: '332px'}], position: 22866, duration: 634, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_type_text}", "top", '287px', { fromValue: '287px'}], position: 26823, duration: 0, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "style", "${_type_text}", "top", '290px', { fromValue: '287px'}], position: 28250, duration: 622, easing: "easeInQuad" },
            { id: "eid97", tween: [ "transform", "${_Question10}", "scaleY", '0.86', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "transform", "${_Question10}", "scaleY", '0.4', { fromValue: '0.86'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid30", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 500, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 634, easing: "easeInQuad" },
            { id: "eid38", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0'}], position: 13214, duration: 536, easing: "easeInQuad" },
            { id: "eid39", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 750, easing: "easeInQuad" },
            { id: "eid105", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0'}], position: 24848, duration: 0, easing: "easeInQuad" },
            { id: "eid40", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.25'}], position: 38000, duration: 0, easing: "easeInQuad" },
            { id: "eid811", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0'}], position: 38500, duration: 0, easing: "easeInQuad" },
            { id: "eid821", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 38854, duration: 396, easing: "easeInQuad" },
            { id: "eid107", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 39250, duration: 380, easing: "easeInQuad" },
            { id: "eid108", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.25'}], position: 39630, duration: 0, easing: "easeInQuad" },
            { id: "eid116", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 40500, duration: 250, easing: "easeInQuad" },
            { id: "eid91", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 40750, duration: 1250, easing: "easeInQuad" },
            { id: "eid383", tween: [ "style", "${_Question7}", "left", '104px', { fromValue: '404px'}], position: 32750, duration: 750, easing: "easeInQuad" },
            { id: "eid742", tween: [ "style", "${_q9c_false_explanation}", "left", '-292px', { fromValue: '70px'}], position: 14250, duration: 750, easing: "easeInQuad" },
            { id: "eid361", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid324", tween: [ "style", "${_Question6}", "opacity", '1', { fromValue: '0'}], position: 28398, duration: 851, easing: "easeInQuad" },
            { id: "eid380", tween: [ "style", "${_Question6}", "opacity", '0', { fromValue: '1'}], position: 32316, duration: 683, easing: "easeInQuad" },
            { id: "eid348", tween: [ "transform", "${_Text22}", "scaleY", '1', { fromValue: '0.75'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "transform", "${_Question3}", "scaleX", '1', { fromValue: '0.4'}], position: 18750, duration: 1250, easing: "easeInQuad" },
            { id: "eid207", tween: [ "transform", "${_Question3}", "scaleX", '0.75', { fromValue: '1'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid122", tween: [ "style", "${_q10_skip_text}", "font-size", '18px', { fromValue: '18px'}], position: 17750, duration: 0 },
            { id: "eid336", tween: [ "style", "${_Text18}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0, easing: "easeOutQuad" },
            { id: "eid288", tween: [ "style", "${_Question5}", "top", '42px', { fromValue: '22.5px'}], position: 26208, duration: 791, easing: "easeOutQuad" },
            { id: "eid301", tween: [ "style", "${_Question5}", "top", '14px', { fromValue: '42px'}], position: 27750, duration: 713, easing: "easeInQuad" },
            { id: "eid790", tween: [ "style", "${_exodus_skip_message}", "display", 'block', { fromValue: 'none'}], position: 23626, duration: 0, easing: "easeInQuad" },
            { id: "eid791", tween: [ "style", "${_exodus_skip_message}", "display", 'none', { fromValue: 'block'}], position: 23663, duration: 0, easing: "easeInQuad" },
            { id: "eid770", tween: [ "style", "${_q10_skip_text}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0, easing: "easeInQuad" },
            { id: "eid771", tween: [ "style", "${_q10_skip_text}", "display", 'none', { fromValue: 'block'}], position: 17827, duration: 0, easing: "easeInQuad" },
            { id: "eid13", tween: [ "style", "${_sb21}", "display", 'block', { fromValue: 'none'}], position: 39000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_sb21}", "display", 'none', { fromValue: 'block'}], position: 39297, duration: 0 },
            { id: "eid368", tween: [ "transform", "${_MatthewLuke}", "scaleY", '1', { fromValue: '0.09'}], position: 30000, duration: 500, easing: "easeOutQuad" },
            { id: "eid354", tween: [ "transform", "${_MatthewLuke}", "scaleY", '0.1', { fromValue: '1'}], position: 31640, duration: 561, easing: "easeOutQuad" },
            { id: "eid718", tween: [ "style", "${_q9c_wrong_highlight}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_q9c_wrong_highlight}", "display", 'none', { fromValue: 'block'}], position: 13000, duration: 0 },
            { id: "eid524", tween: [ "transform", "${_question9c}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid558", tween: [ "transform", "${_question9c}", "scaleX", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid621", tween: [ "transform", "${_question9c}", "scaleX", '0.73', { fromValue: '1'}], position: 6250, duration: 750 },
            { id: "eid650", tween: [ "transform", "${_question9c}", "scaleX", '1', { fromValue: '0.73'}], position: 7500, duration: 0 },
            { id: "eid692", tween: [ "transform", "${_question9c}", "scaleX", '0.68', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid714", tween: [ "transform", "${_question9c}", "scaleX", '1', { fromValue: '0.68'}], position: 11497, duration: 0 },
            { id: "eid744", tween: [ "transform", "${_question9c}", "scaleX", '0.72', { fromValue: '1'}], position: 14000, duration: 750, easing: "easeInQuad" },
            { id: "eid852", tween: [ "style", "${_question12}", "display", 'block', { fromValue: 'none'}], position: 26750, duration: 0 },
            { id: "eid862", tween: [ "style", "${_question12}", "display", 'none', { fromValue: 'block'}], position: 29000, duration: 0, easing: "easeOutSine" },
            { id: "eid119", tween: [ "transform", "${_Question3}", "scaleY", '1', { fromValue: '0.4'}], position: 18750, duration: 1250, easing: "easeInQuad" },
            { id: "eid208", tween: [ "transform", "${_Question3}", "scaleY", '0.75', { fromValue: '1'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid865", tween: [ "style", "${_sabbath_bar2}", "opacity", '1', { fromValue: '1'}], position: 42750, duration: 0, easing: "easeInQuad" },
            { id: "eid121", tween: [ "style", "${_q9c_skip_text}", "font-size", '18px', { fromValue: '18px'}], position: 5500, duration: 0 },
            { id: "eid316", tween: [ "transform", "${_Question6}", "scaleX", '1', { fromValue: '0.75'}], position: 28398, duration: 851, easing: "easeInQuad" },
            { id: "eid377", tween: [ "transform", "${_Question6}", "scaleX", '0.5', { fromValue: '1'}], position: 32316, duration: 683, easing: "easeInQuad" },
            { id: "eid55", tween: [ "transform", "${_question11}", "translateX", '129px', { fromValue: '717px'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid802", tween: [ "transform", "${_question11}", "translateX", '-283px', { fromValue: '129px'}], position: 25000, duration: 750, easing: "easeInQuad" },
            { id: "eid663", tween: [ "style", "${_q9c_select}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0 },
            { id: "eid665", tween: [ "style", "${_q9c_select}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0 },
            { id: "eid666", tween: [ "style", "${_q9c_select}", "display", 'block', { fromValue: 'none'}], position: 11497, duration: 0 },
            { id: "eid670", tween: [ "style", "${_q9c_select}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
            { id: "eid869", tween: [ "style", "${_q12_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 27618, duration: 0, easing: "easeInQuad" },
            { id: "eid870", tween: [ "style", "${_q12_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 27707, duration: 0, easing: "easeInQuad" },
            { id: "eid805", tween: [ "style", "${_Question6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid381", tween: [ "style", "${_Question6}", "display", 'none', { fromValue: 'none'}], position: 33071, duration: 0, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 19250, duration: 0, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 22866, duration: 0, easing: "easeInQuad" },
            { id: "eid77", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 25668, duration: 0, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 26823, duration: 0, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 28872, duration: 0, easing: "easeOutQuad" },
            { id: "eid775", tween: [ "style", "${_q10_submit_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeInQuad" },
            { id: "eid776", tween: [ "style", "${_q10_submit_button}", "display", 'none', { fromValue: 'block'}], position: 17827, duration: 0, easing: "easeInQuad" },
            { id: "eid793", tween: [ "style", "${_question11}", "height", '204px', { fromValue: '204px'}], position: 22750, duration: 0, easing: "easeInQuad" },
            { id: "eid779", tween: [ "style", "${_q10_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0, easing: "easeInQuad" },
            { id: "eid780", tween: [ "style", "${_q10_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 17882, duration: 0, easing: "easeInQuad" },
            { id: "eid370", tween: [ "style", "${_MatthewLuke}", "opacity", '1', { fromValue: '0'}], position: 30000, duration: 500, easing: "easeOutQuad" },
            { id: "eid352", tween: [ "style", "${_MatthewLuke}", "opacity", '0', { fromValue: '1'}], position: 31640, duration: 500, easing: "easeOutQuad" },
            { id: "eid857", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 27618, duration: 0, easing: "easeOutSine" },
            { id: "eid858", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 27663, duration: 0, easing: "easeOutSine" },
            { id: "eid392", tween: [ "style", "${_Question7}", "display", 'block', { fromValue: 'none'}], position: 32750, duration: 0, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_Question10}", "left", '81.4px', { fromValue: '601.4px'}], position: 15250, duration: 1500, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "style", "${_Question10}", "left", '-395.6px', { fromValue: '81.4px'}], position: 18000, duration: 1500, easing: "easeInQuad" },
            { id: "eid739", tween: [ "style", "${_q9c_false_explanation}", "opacity", '1', { fromValue: '0'}], position: 13214, duration: 536 },
            { id: "eid751", tween: [ "style", "${_q9c_false_explanation}", "opacity", '0', { fromValue: '1'}], position: 14250, duration: 750, easing: "easeInQuad" },
            { id: "eid351", tween: [ "color", "${_Text22}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 31500, duration: 0, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_sb20}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_sb20}", "display", 'none', { fromValue: 'block'}], position: 23701, duration: 0 },
            { id: "eid11", tween: [ "style", "${_sb20}", "display", 'block', { fromValue: 'none'}], position: 24750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_sb20}", "display", 'none', { fromValue: 'block'}], position: 24848, duration: 0 },
            { id: "eid334", tween: [ "style", "${_Text20}", "display", 'none', { fromValue: 'block'}], position: 31000, duration: 0, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "transform", "${_question11}", "translateY", '346px', { fromValue: '365px'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid607", tween: [ "style", "${_q9c_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid608", tween: [ "style", "${_q9c_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 5588, duration: 0 },
            { id: "eid833", tween: [ "transform", "${_hebrews2}", "scaleY", '1', { fromValue: '0.6'}], position: 39750, duration: 750, easing: "easeOutQuad" },
            { id: "eid839", tween: [ "transform", "${_hebrews2}", "scaleY", '0.7', { fromValue: '1'}], position: 40750, duration: 1000, easing: "easeInQuad" },
            { id: "eid605", tween: [ "style", "${_q9c_skip_text}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid606", tween: [ "style", "${_q9c_skip_text}", "display", 'none', { fromValue: 'block'}], position: 5588, duration: 0 },
            { id: "eid777", tween: [ "style", "${_q10_skip_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0, easing: "easeInQuad" },
            { id: "eid778", tween: [ "style", "${_q10_skip_button}", "display", 'none', { fromValue: 'block'}], position: 17577, duration: 0, easing: "easeInQuad" },
            { id: "eid274", tween: [ "style", "${_exodus}", "top", '30px', { fromValue: '-357px'}], position: 23571, duration: 55, easing: "easeInQuad" },
            { id: "eid510", tween: [ "style", "${_exodus}", "top", '-78px', { fromValue: '30px'}], position: 23701, duration: 49, easing: "easeInQuad" },
            { id: "eid511", tween: [ "style", "${_exodus}", "top", '30px', { fromValue: '-78px'}], position: 23750, duration: 500 },
            { id: "eid512", tween: [ "style", "${_exodus}", "top", '-70px', { fromValue: '30px'}], position: 24250, duration: 461 },
            { id: "eid514", tween: [ "style", "${_exodus}", "top", '277px', { fromValue: '-70px'}], position: 24750, duration: 0 },
            { id: "eid342", tween: [ "transform", "${_Text21}", "scaleY", '1', { fromValue: '0.75'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid737", tween: [ "transform", "${_q9c_false_explanation}", "scaleY", '1', { fromValue: '0.8'}], position: 13214, duration: 536 },
            { id: "eid747", tween: [ "transform", "${_q9c_false_explanation}", "scaleY", '0.72', { fromValue: '1'}], position: 14250, duration: 750, easing: "easeInQuad" },
            { id: "eid812", tween: [ "style", "${_hebrews1}", "display", 'block', { fromValue: 'none'}], position: 38250, duration: 0, easing: "easeInQuad" },
            { id: "eid827", tween: [ "style", "${_hebrews1}", "display", 'none', { fromValue: 'block'}], position: 40000, duration: 0, easing: "easeInQuad" },
            { id: "eid344", tween: [ "style", "${_Text22}", "opacity", '1', { fromValue: '0'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid391", tween: [ "style", "${_Question7}", "opacity", '1', { fromValue: '0'}], position: 32750, duration: 750, easing: "easeInQuad" },
            { id: "eid396", tween: [ "style", "${_Question7}", "opacity", '0', { fromValue: '1'}], position: 34250, duration: 1250, easing: "easeInQuad" },
            { id: "eid758", tween: [ "style", "${_q9c_false_submit_button}", "display", 'block', { fromValue: 'none'}], position: 11497, duration: 0 },
            { id: "eid759", tween: [ "style", "${_q9c_false_submit_button}", "display", 'none', { fromValue: 'block'}], position: 11573, duration: 0 },
            { id: "eid284", tween: [ "transform", "${_Question5}", "scaleY", '0.89', { fromValue: '0.75'}], position: 26208, duration: 791, easing: "easeOutQuad" },
            { id: "eid303", tween: [ "transform", "${_Question5}", "scaleY", '0.75', { fromValue: '0.89'}], position: 27750, duration: 713, easing: "easeInQuad" },
            { id: "eid822", tween: [ "style", "${_next_hebrews}", "display", 'block', { fromValue: 'none'}], position: 39209, duration: 0, easing: "easeInQuad" },
            { id: "eid848", tween: [ "style", "${_next_hebrews}", "display", 'none', { fromValue: 'block'}], position: 40873, duration: 0, easing: "easeInQuad" },
            { id: "eid223", tween: [ "transform", "${_Question4}", "scaleX", '1', { fromValue: '0.75'}], position: 21750, duration: 945, easing: "easeOutQuad" },
            { id: "eid247", tween: [ "transform", "${_Question4}", "scaleX", '0.8', { fromValue: '1'}], position: 25500, duration: 650, easing: "easeInQuad" },
            { id: "eid820", tween: [ "transform", "${_hebrews1}", "scaleY", '1', { fromValue: '0.65'}], position: 38250, duration: 750, easing: "easeOutQuad" },
            { id: "eid825", tween: [ "transform", "${_hebrews1}", "scaleY", '0.4', { fromValue: '1'}], position: 39250, duration: 750, easing: "easeInQuad" },
            { id: "eid346", tween: [ "transform", "${_Text22}", "scaleX", '1', { fromValue: '0.75'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid387", tween: [ "transform", "${_Question7}", "scaleX", '1', { fromValue: '0.37'}], position: 32750, duration: 750, easing: "easeInQuad" },
            { id: "eid393", tween: [ "transform", "${_Question7}", "scaleX", '0.6', { fromValue: '1'}], position: 34250, duration: 1250, easing: "easeInQuad" },
            { id: "eid537", tween: [ "transform", "${_true}", "scaleY", '1', { fromValue: '0.8'}], position: 3750, duration: 750, easing: "easeOutQuad" },
            { id: "eid563", tween: [ "transform", "${_true}", "scaleY", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid627", tween: [ "transform", "${_true}", "scaleY", '0.73', { fromValue: '1'}], position: 6000, duration: 750 },
            { id: "eid647", tween: [ "transform", "${_true}", "scaleY", '1', { fromValue: '0.73'}], position: 7500, duration: 0 },
            { id: "eid698", tween: [ "transform", "${_true}", "scaleY", '0.68', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid711", tween: [ "transform", "${_true}", "scaleY", '1', { fromValue: '0.68'}], position: 11497, duration: 0 },
            { id: "eid749", tween: [ "transform", "${_true}", "scaleY", '0.72', { fromValue: '1'}], position: 14140, duration: 750, easing: "easeInQuad" },
            { id: "eid740", tween: [ "style", "${_q9c_false_explanation}", "display", 'block', { fromValue: 'none'}], position: 13214, duration: 0 },
            { id: "eid753", tween: [ "style", "${_q9c_false_explanation}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid257", tween: [ "transform", "${_exodus}", "scaleX", '1', { fromValue: '0.05'}], position: 23750, duration: 500, easing: "easeOutQuad" },
            { id: "eid265", tween: [ "transform", "${_exodus}", "scaleX", '0.06', { fromValue: '1'}], position: 24250, duration: 500, easing: "easeInQuad" },
            { id: "eid114", tween: [ "style", "${_Question3}", "left", '101.7px', { fromValue: '534.7px'}], position: 18500, duration: 1500, easing: "easeInQuad" },
            { id: "eid209", tween: [ "style", "${_Question3}", "left", '637.7px', { fromValue: '101.7px'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid52", tween: [ "transform", "${_question10}", "translateX", '133px', { fromValue: '718px'}], position: 16500, duration: 739, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "transform", "${_question10}", "translateX", '-708px', { fromValue: '133px'}], position: 18750, duration: 500, easing: "easeInQuad" },
            { id: "eid333", tween: [ "style", "${_Text20}", "opacity", '0', { fromValue: '1'}], position: 30500, duration: 351, easing: "easeOutQuad" },
            { id: "eid682", tween: [ "transform", "${_q9c_true_explanation}", "scaleX", '1', { fromValue: '0.67'}], position: 9500, duration: 750, easing: "easeOutQuad" },
            { id: "eid700", tween: [ "transform", "${_q9c_true_explanation}", "scaleX", '0.68', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid535", tween: [ "transform", "${_true}", "scaleX", '1', { fromValue: '0.8'}], position: 3750, duration: 750, easing: "easeOutQuad" },
            { id: "eid562", tween: [ "transform", "${_true}", "scaleX", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid625", tween: [ "transform", "${_true}", "scaleX", '0.73', { fromValue: '1'}], position: 6000, duration: 750 },
            { id: "eid646", tween: [ "transform", "${_true}", "scaleX", '1', { fromValue: '0.73'}], position: 7500, duration: 0 },
            { id: "eid696", tween: [ "transform", "${_true}", "scaleX", '0.68', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid710", tween: [ "transform", "${_true}", "scaleX", '1', { fromValue: '0.68'}], position: 11497, duration: 0 },
            { id: "eid748", tween: [ "transform", "${_true}", "scaleX", '0.72', { fromValue: '1'}], position: 14140, duration: 750, easing: "easeInQuad" },
            { id: "eid359", tween: [ "transform", "${_Text23}", "scaleY", '1', { fromValue: '0.2'}], position: 31000, duration: 500, easing: "easeOutQuad" },
            { id: "eid720", tween: [ "style", "${_q9c_wrong_highlight}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 250 },
            { id: "eid721", tween: [ "style", "${_q9c_wrong_highlight}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 250 },
            { id: "eid722", tween: [ "style", "${_q9c_wrong_highlight}", "opacity", '1', { fromValue: '0'}], position: 12500, duration: 250 },
            { id: "eid723", tween: [ "style", "${_q9c_wrong_highlight}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 250 },
            { id: "eid280", tween: [ "style", "${_RoundRectCopy2}", "clip", [0,481,49,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,481,49,0]}], position: 27000, duration: 0, easing: "easeInQuad" },
            { id: "eid818", tween: [ "transform", "${_hebrews1}", "scaleX", '1', { fromValue: '0.65'}], position: 38250, duration: 750, easing: "easeOutQuad" },
            { id: "eid824", tween: [ "transform", "${_hebrews1}", "scaleX", '0.4', { fromValue: '1'}], position: 39250, duration: 750, easing: "easeInQuad" },
            { id: "eid389", tween: [ "transform", "${_Question7}", "scaleY", '1', { fromValue: '0.37'}], position: 32750, duration: 750, easing: "easeInQuad" },
            { id: "eid394", tween: [ "transform", "${_Question7}", "scaleY", '0.6', { fromValue: '1'}], position: 34250, duration: 1250, easing: "easeInQuad" },
            { id: "eid362", tween: [ "style", "${_Text23}", "display", 'block', { fromValue: 'none'}], position: 31000, duration: 0, easing: "easeOutQuad" },
            { id: "eid531", tween: [ "style", "${_true}", "left", '106px', { fromValue: '596px'}], position: 3750, duration: 750, easing: "easeOutQuad" },
            { id: "eid565", tween: [ "style", "${_true}", "left", '106px', { fromValue: '106px'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid617", tween: [ "style", "${_true}", "left", '-146px', { fromValue: '106px'}], position: 6000, duration: 750 },
            { id: "eid649", tween: [ "style", "${_true}", "left", '106px', { fromValue: '-146px'}], position: 7500, duration: 0 },
            { id: "eid689", tween: [ "style", "${_true}", "left", '-68px', { fromValue: '106px'}], position: 10645, duration: 605 },
            { id: "eid713", tween: [ "style", "${_true}", "left", '106px', { fromValue: '-68px'}], position: 11497, duration: 0 },
            { id: "eid743", tween: [ "style", "${_true}", "left", '-256px', { fromValue: '106px'}], position: 14140, duration: 750, easing: "easeInQuad" },
            { id: "eid282", tween: [ "transform", "${_Question5}", "scaleX", '0.89', { fromValue: '0.75'}], position: 26208, duration: 791, easing: "easeOutQuad" },
            { id: "eid302", tween: [ "transform", "${_Question5}", "scaleX", '0.75', { fromValue: '0.89'}], position: 27750, duration: 713, easing: "easeInQuad" },
            { id: "eid672", tween: [ "style", "${_q9c_correct_highlight}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid678", tween: [ "style", "${_q9c_correct_highlight}", "display", 'none', { fromValue: 'block'}], position: 9000, duration: 0 },
            { id: "eid225", tween: [ "transform", "${_Question4}", "scaleY", '1', { fromValue: '0.75'}], position: 21750, duration: 945, easing: "easeOutQuad" },
            { id: "eid248", tween: [ "transform", "${_Question4}", "scaleY", '0.8', { fromValue: '1'}], position: 25500, duration: 650, easing: "easeInQuad" },
            { id: "eid517", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '560px'}], position: 2000, duration: 750, easing: "easeInQuad" },
            { id: "eid533", tween: [ "style", "${_false}", "left", '106px', { fromValue: '596px'}], position: 4000, duration: 750, easing: "easeOutQuad" },
            { id: "eid573", tween: [ "style", "${_false}", "left", '106px', { fromValue: '106px'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid619", tween: [ "style", "${_false}", "left", '-146px', { fromValue: '106px'}], position: 5750, duration: 750 },
            { id: "eid645", tween: [ "style", "${_false}", "left", '106px', { fromValue: '-146px'}], position: 7500, duration: 0 },
            { id: "eid654", tween: [ "style", "${_false}", "left", '-134px', { fromValue: '106px'}], position: 9250, duration: 750 },
            { id: "eid660", tween: [ "style", "${_false}", "left", '106px', { fromValue: '-134px'}], position: 11497, duration: 0 },
            { id: "eid729", tween: [ "style", "${_false}", "left", '-140px', { fromValue: '106px'}], position: 13000, duration: 500 },
            { id: "eid18", tween: [ "style", "${_sb23}", "display", 'block', { fromValue: 'none'}], position: 27250, duration: 0 },
            { id: "eid20", tween: [ "style", "${_sb23}", "display", 'none', { fromValue: 'block'}], position: 27707, duration: 0 },
            { id: "eid767", tween: [ "style", "${_question10}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 739, easing: "easeOutQuad" },
            { id: "eid773", tween: [ "style", "${_question10}", "opacity", '0', { fromValue: '1'}], position: 18750, duration: 500, easing: "easeInQuad" },
            { id: "eid760", tween: [ "style", "${_q9c_true_next_button}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
            { id: "eid761", tween: [ "style", "${_q9c_true_next_button}", "display", 'none', { fromValue: 'block'}], position: 10577, duration: 0 },
            { id: "eid769", tween: [ "transform", "${_question10}", "translateY", '310px', { fromValue: '320px'}], position: 16500, duration: 739, easing: "easeOutQuad" },
            { id: "eid541", tween: [ "transform", "${_false}", "scaleY", '1', { fromValue: '0.8'}], position: 4000, duration: 750, easing: "easeOutQuad" },
            { id: "eid571", tween: [ "transform", "${_false}", "scaleY", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid631", tween: [ "transform", "${_false}", "scaleY", '0.73', { fromValue: '1'}], position: 5750, duration: 750 },
            { id: "eid643", tween: [ "transform", "${_false}", "scaleY", '1', { fromValue: '0.73'}], position: 7500, duration: 0 },
            { id: "eid586", tween: [ "transform", "${_false}", "scaleY", '1', { fromValue: '1'}], position: 11497, duration: 0, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeInQuad" },
            { id: "eid33", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'block'}], position: 11134, duration: 0, easing: "easeInQuad" },
            { id: "eid37", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'none'}], position: 13214, duration: 0, easing: "easeInQuad" },
            { id: "eid41", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0, easing: "easeInQuad" },
            { id: "eid104", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'none'}], position: 24848, duration: 0, easing: "easeInQuad" },
            { id: "eid120", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'block'}], position: 26180, duration: 0, easing: "easeInQuad" },
            { id: "eid810", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "easeInQuad" },
            { id: "eid844", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'block'}], position: 42000, duration: 0, easing: "easeInQuad" },
            { id: "eid568", tween: [ "style", "${_false}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
            { id: "eid569", tween: [ "style", "${_false}", "display", 'block', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid641", tween: [ "style", "${_false}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
            { id: "eid574", tween: [ "style", "${_false}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid658", tween: [ "style", "${_false}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid584", tween: [ "style", "${_false}", "display", 'block', { fromValue: 'none'}], position: 11497, duration: 0, easing: "easeOutQuad" },
            { id: "eid730", tween: [ "style", "${_false}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
            { id: "eid526", tween: [ "transform", "${_question9c}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid559", tween: [ "transform", "${_question9c}", "scaleY", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid623", tween: [ "transform", "${_question9c}", "scaleY", '0.73', { fromValue: '1'}], position: 6250, duration: 750 },
            { id: "eid651", tween: [ "transform", "${_question9c}", "scaleY", '1', { fromValue: '0.73'}], position: 7500, duration: 0 },
            { id: "eid694", tween: [ "transform", "${_question9c}", "scaleY", '0.68', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid715", tween: [ "transform", "${_question9c}", "scaleY", '1', { fromValue: '0.68'}], position: 11497, duration: 0 },
            { id: "eid745", tween: [ "transform", "${_question9c}", "scaleY", '0.72', { fromValue: '1'}], position: 14000, duration: 750, easing: "easeInQuad" },
            { id: "eid686", tween: [ "style", "${_q9c_true_explanation}", "opacity", '1', { fromValue: '0'}], position: 9500, duration: 750, easing: "easeOutQuad" },
            { id: "eid706", tween: [ "style", "${_q9c_true_explanation}", "opacity", '0', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid330", tween: [ "style", "${_MatthewLukeCopy}", "clip", [0,614,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,614,50,0]}], position: 30500, duration: 0, easing: "easeOutQuad" },
            { id: "eid16", tween: [ "style", "${_sb22}", "display", 'block', { fromValue: 'none'}], position: 39297, duration: 0 },
            { id: "eid17", tween: [ "style", "${_sb22}", "display", 'none', { fromValue: 'block'}], position: 40873, duration: 0 },
            { id: "eid522", tween: [ "style", "${_question9c}", "left", '74px', { fromValue: '440px'}], position: 3000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid561", tween: [ "style", "${_question9c}", "left", '74px', { fromValue: '74px'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid615", tween: [ "style", "${_question9c}", "left", '-178px', { fromValue: '74px'}], position: 6250, duration: 750 },
            { id: "eid653", tween: [ "style", "${_question9c}", "left", '74px', { fromValue: '-178px'}], position: 7500, duration: 0 },
            { id: "eid687", tween: [ "style", "${_question9c}", "left", '-100px', { fromValue: '74px'}], position: 10645, duration: 605 },
            { id: "eid717", tween: [ "style", "${_question9c}", "left", '74px', { fromValue: '-100px'}], position: 11497, duration: 0 },
            { id: "eid741", tween: [ "style", "${_question9c}", "left", '-288px', { fromValue: '74px'}], position: 14000, duration: 750, easing: "easeInQuad" },
            { id: "eid545", tween: [ "style", "${_false}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 750, easing: "easeOutQuad" },
            { id: "eid572", tween: [ "style", "${_false}", "opacity", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid637", tween: [ "style", "${_false}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
            { id: "eid644", tween: [ "style", "${_false}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 0 },
            { id: "eid656", tween: [ "style", "${_false}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 750 },
            { id: "eid659", tween: [ "style", "${_false}", "opacity", '1', { fromValue: '0'}], position: 11497, duration: 0 },
            { id: "eid731", tween: [ "style", "${_false}", "opacity", '0.19827586206897', { fromValue: '1'}], position: 13000, duration: 459 },
            { id: "eid117", tween: [ "style", "${_Question3}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000, easing: "easeInQuad" },
            { id: "eid211", tween: [ "style", "${_Question3}", "opacity", '0', { fromValue: '1'}], position: 21335, duration: 785, easing: "easeInQuad" },
            { id: "eid7", tween: [ "style", "${_sb19}", "display", 'block', { fromValue: 'none'}], position: 16750, duration: 0 },
            { id: "eid8", tween: [ "style", "${_sb19}", "display", 'none', { fromValue: 'block'}], position: 17882, duration: 0 },
            { id: "eid263", tween: [ "style", "${_exodus}", "opacity", '1', { fromValue: '0'}], position: 23750, duration: 66, easing: "easeOutQuad" },
            { id: "eid264", tween: [ "style", "${_exodus}", "opacity", '0', { fromValue: '1'}], position: 24250, duration: 461, easing: "easeInQuad" },
            { id: "eid860", tween: [ "transform", "${_question12}", "translateY", '319px', { fromValue: '312px'}], position: 28250, duration: 750, easing: "easeInQuad" },
            { id: "eid229", tween: [ "style", "${_Question4}", "top", '70px', { fromValue: '-4.12px'}], position: 21750, duration: 945, easing: "easeOutQuad" },
            { id: "eid279", tween: [ "style", "${_Question4}", "top", '153.7px', { fromValue: '70px'}], position: 26558, duration: 0, easing: "easeInQuad" },
            { id: "eid854", tween: [ "transform", "${_question12}", "translateX", '129px', { fromValue: '391px'}], position: 26750, duration: 750, easing: "easeOutSine" },
            { id: "eid859", tween: [ "transform", "${_question12}", "translateX", '-721px', { fromValue: '129px'}], position: 28250, duration: 750, easing: "easeInQuad" },
            { id: "eid733", tween: [ "style", "${_q9c_false_explanation}", "top", '277px', { fromValue: '331px'}], position: 13214, duration: 536 },
            { id: "eid286", tween: [ "style", "${_Question5}", "left", '89px', { fromValue: '465px'}], position: 26208, duration: 791, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "style", "${_Question5}", "left", '-582px', { fromValue: '89px'}], position: 27750, duration: 713, easing: "easeInQuad" },
            { id: "eid273", tween: [ "style", "${_exodus}", "left", '25px', { fromValue: '-246.99px'}], position: 23571, duration: 55, easing: "easeInQuad" },
            { id: "eid267", tween: [ "style", "${_exodus}", "left", '25px', { fromValue: '25px'}], position: 23701, duration: 0, easing: "easeInQuad" },
            { id: "eid275", tween: [ "style", "${_exodus}", "left", '28.42px', { fromValue: '25px'}], position: 24750, duration: 0 },
            { id: "eid835", tween: [ "style", "${_hebrews2}", "opacity", '1', { fromValue: '0'}], position: 39750, duration: 750, easing: "easeOutQuad" },
            { id: "eid840", tween: [ "style", "${_hebrews2}", "opacity", '0', { fromValue: '1'}], position: 40750, duration: 1000, easing: "easeInQuad" },
            { id: "eid674", tween: [ "style", "${_q9c_correct_highlight}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 250 },
            { id: "eid675", tween: [ "style", "${_q9c_correct_highlight}", "opacity", '0', { fromValue: '1'}], position: 8250, duration: 250 },
            { id: "eid676", tween: [ "style", "${_q9c_correct_highlight}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 250 },
            { id: "eid677", tween: [ "style", "${_q9c_correct_highlight}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 250 },
            { id: "eid515", tween: [ "style", "${_sabbath_bar2}", "top", '460px', { fromValue: '665px'}], position: 500, duration: 1500, easing: "easeInQuad" },
            { id: "eid864", tween: [ "style", "${_sabbath_bar2}", "top", '460px', { fromValue: '460px'}], position: 42750, duration: 0, easing: "easeInQuad" },
            { id: "eid507", tween: [ "style", "${_question11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid792", tween: [ "style", "${_question11}", "display", 'block', { fromValue: 'none'}], position: 22750, duration: 0, easing: "easeInQuad" },
            { id: "eid804", tween: [ "style", "${_question11}", "display", 'none', { fromValue: 'block'}], position: 25750, duration: 0, easing: "easeInQuad" },
            { id: "eid227", tween: [ "style", "${_Question4}", "left", '129px', { fromValue: '683px'}], position: 21750, duration: 945, easing: "easeOutQuad" },
            { id: "eid249", tween: [ "style", "${_Question4}", "left", '-27.99px', { fromValue: '129px'}], position: 25500, duration: 650, easing: "easeInQuad" },
            { id: "eid278", tween: [ "style", "${_Question4}", "left", '-441.1px', { fromValue: '-27.99px'}], position: 26558, duration: 0, easing: "easeInQuad" },
            { id: "eid310", tween: [ "style", "${_RoundRect2Copy}", "clip", [0,562,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,562,52,0]}], position: 28713, duration: 0, easing: "easeInQuad" },
            { id: "eid543", tween: [ "style", "${_true}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 750, easing: "easeOutQuad" },
            { id: "eid564", tween: [ "style", "${_true}", "opacity", '1', { fromValue: '1'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid635", tween: [ "style", "${_true}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 750 },
            { id: "eid648", tween: [ "style", "${_true}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 0 },
            { id: "eid704", tween: [ "style", "${_true}", "opacity", '0', { fromValue: '1'}], position: 10645, duration: 605 },
            { id: "eid712", tween: [ "style", "${_true}", "opacity", '1', { fromValue: '0'}], position: 11497, duration: 0 },
            { id: "eid752", tween: [ "style", "${_true}", "opacity", '0', { fromValue: '1'}], position: 14140, duration: 750, easing: "easeInQuad" }         ]
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
         text: 'Are you sure you want to return to the beginning of Lesson One?',
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
            text: 'Yes, I want to return to the beginning of Lesson One',
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
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.14'],
            ["style", "height", '292px'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-253px'],
            ["style", "top", '-132.44px']
         ],
         "${_curtain}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
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
         "${_restart_no_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
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
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '530px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '29px']
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
})(jQuery, AdobeEdge, "EDGE-1999079");
