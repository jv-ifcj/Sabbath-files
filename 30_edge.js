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
            rect:['76px','15px','518px','114px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['8px','33px','495px','72px','auto','auto'],
               text:"Spiritual preparedness is a virtue upheld in the New Testament as well. Click the verses to read the following scriptures and fill in the chart below.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbar',
               type:'rect',
               rect:['45px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 30px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['1.207']]
            }]
         },
         {
            id:'questionCopy',
            display:'none',
            type:'rect',
            rect:['76px','15px','518px','114px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['8px','33px','495px','72px','auto','auto'],
               text:"Read the following New Testament Scriptures and write down what each has to say about what God has prepared for us. (Click the verse to read the passage)",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy',
               type:'rect',
               rect:['45px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 30px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['1.207']]
            }]
         },
         {
            id:'grid1',
            display:'none',
            type:'group',
            rect:['57px','280px','8px','119','auto','auto'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['-7px','58px','570px','5px','auto','auto'],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy',
               type:'rect',
               rect:['-7px','127px','570px','5px','auto','auto'],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy2',
               type:'rect',
               rect:['-7px','-10px','570px','5px','auto','auto'],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle2',
               type:'rect',
               rect:['111px','-133px','4px','320px','auto','auto'],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle2Copy',
               type:'rect',
               rect:['334px','-133px','4px','320px','auto','auto'],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RectangleCopy3',
               type:'rect',
               rect:['-7px','-79px','570px','5px','auto','auto'],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text',
               type:'text',
               rect:['-19px','-68px','124px','51px','auto','auto'],
               cursor:['pointer'],
               text:"Matthew<br />25:1-13",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'TextCopy',
               type:'text',
               rect:['-19px','1px','124px','51px','auto','auto'],
               cursor:['pointer'],
               text:"2 Timothy<br />2:21",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'TextCopy2',
               type:'text',
               rect:['-7px','70px','112px','51px','auto','auto'],
               cursor:['pointer'],
               text:"2 Timothy<br />4:2",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text12',
               type:'text',
               rect:['122px','-122px','207px','37px','auto','auto'],
               text:"Preparation",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text12Copy3',
               type:'text',
               rect:['-100px','-122px','207px','37px','auto','auto'],
               text:"Scripture",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text12Copy2',
               type:'text',
               rect:['347px','-122px','207px','37px','auto','auto'],
               text:"Goal",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'TextCopy3',
               type:'text',
               rect:['0px','136px','105px','51px','auto','auto'],
               cursor:['pointer'],
               text:"1 Peter<br />3:15",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'grid2',
            display:'none',
            type:'group',
            rect:['45px','164px','582','38px','auto','auto'],
            c:[
            {
               id:'RoundRect3',
               type:'rect',
               rect:['0px','122px','582px','5px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RoundRect3Copy2',
               type:'rect',
               rect:['0px','202px','582px','5px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text9',
               type:'text',
               rect:['-19px','64px','159px','40px','auto','auto'],
               cursor:['pointer'],
               text:"John 14:3",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text10',
               type:'text',
               rect:['-41px','151px','181px','38px','auto','auto'],
               cursor:['pointer'],
               text:"1 Corinthians 2:9-10",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text13',
               type:'text',
               rect:['158px','2px','409px','29px','auto','auto'],
               text:"What God has prepared for us",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text13Copy',
               type:'text',
               rect:['-272px','2px','409px','29px','auto','auto'],
               text:"Scripture",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'Text11',
               type:'text',
               rect:['-16px','221px','156px','38px','auto','auto'],
               cursor:['pointer'],
               text:"Ephesians 2:10",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
            },
            {
               id:'RoundRect3Copy',
               type:'rect',
               rect:['0px','42px','582px','5px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'RoundRect4',
               type:'rect',
               rect:['143px','0px','4px','271px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
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
            id:'buttons',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['3px','459px','661px','24px','auto','auto'],
            text:"Please click Submit to save your answers or the arrow to skip this question",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'skip_text_2',
            display:'none',
            type:'text',
            rect:['26px','432px','617px','53px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'chart1_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'chart1_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'chart2_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'chart2_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'biblebox1',
            display:'none',
            type:'group',
            rect:['38','36','598','424','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'RoundRect',
               type:'rect',
               rect:['0px','0px','598px','424px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",50,12,32,6,"rgba(0,0,0,0.648438)"],
               c:[
               {
                  id:'RoundRectCopy',
                  type:'rect',
                  rect:['0px','0px','598px','424px','auto','auto'],
                  clip:['rect(0px 598px 36px 0px)'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(0,51,102,1.00)"],
                  stroke:[0,"rgb(0, 0, 0)","none"]
               }]
            },
            {
               id:'Text2',
               type:'text',
               rect:['29px','39px','544px','358px','auto','auto'],
               text:"“At that time the kingdom of heaven will be like ten virgins who took their lamps and went out to meet the bridegroom. <sup>2</sup>Five of them were foolish and five were wise. <sup>3</sup>The foolish ones took their lamps but did not take any oil with them. <sup>4</sup>The wise ones, however, took oil in jars along with their lamps. <sup>5</sup>The bridegroom was a long time in coming, and they all became drowsy and fell asleep.<br><sup>6</sup>“At midnight the cry rang out: ‘Here’s the bridegroom! Come out to meet him!’<br><sup>7</sup>“Then all the virgins woke up and trimmed their lamps. <sup>8</sup>The foolish ones said to the wise, ‘Give us some of your oil; our lamps are going out.’<br>",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'Text2Copy',
               type:'text',
               rect:['29px','8px','544px','358px','auto','auto'],
               text:"<br><sup>9</sup>“‘No,’ they replied, ‘there may not be enough for both us and you. Instead, go to those who sell oil and buy some for yourselves.’<br><sup>10</sup>“But while they were on their way to buy the oil, the bridegroom arrived. The virgins who were ready went in with him to the wedding banquet. And the door was shut.<br><sup>11</sup>“Later the others also came. ‘Lord, Lord,’ they said, ‘open the door for us!’<br><sup>12</sup>“But he replied, ‘Truly I tell you, I don’t know you.’<br><sup>13</sup>“Therefore keep watch, because you do not know the day or the hour.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'Text3',
               type:'text',
               rect:['434px','391px','136px','30px','auto','auto'],
               text:"Next &gt;&gt;",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text5',
               display:'none',
               type:'text',
               rect:['151px','352px','292px','28px','auto','auto'],
               text:"Click here to close this window.",
               align:"right",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text3Copy',
               display:'none',
               type:'text',
               rect:['29px','391px','136px','30px','auto','auto'],
               text:"&lt;&lt; Previous<br>",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text4',
               type:'text',
               rect:['68px','4px','459px','51px','auto','auto'],
               text:"Matthew 25:1-13",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'chart1_ex1',
               display:'none',
               type:'text',
               rect:['555px','6px','40px','34px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'biblebox2',
            display:'none',
            type:'group',
            rect:['44','48','580','407','auto','auto'],
            c:[
            {
               id:'RoundRect2',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'RoundRect2Copy7',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               clip:['rect(0px 580px 48px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text6',
               type:'text',
               rect:['74px','8px','443px','38px','auto','auto'],
               text:"2 Timothy 2:21<br>",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text7',
               type:'text',
               rect:['32px','81px','518px','97px','auto','auto'],
               text:"In a large house there are articles not only of gold and silver, but also of wood and clay; some are for special purposes and some for common use. <sup>21</sup>Those who cleanse themselves from the latter will be instruments for special purposes, made holy, useful to the Master and prepared to do any good work.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text8',
               type:'text',
               rect:['73px','359px','430px','32px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this window",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'chart1_ex2',
               display:'none',
               type:'text',
               rect:['539px','9px','40px','34px','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               text:"X",
               align:"center",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","700","none",""]
            }]
         },
         {
            id:'biblebox3',
            display:'none',
            type:'group',
            rect:['44','48','580','407','auto','auto'],
            c:[
            {
               id:'RoundRect2Copy',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'RoundRect2Copy8',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               clip:['rect(0px 580px 50px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text6Copy',
               type:'text',
               rect:['74px','8px','443px','38px','auto','auto'],
               text:"2 Timothy 4:2",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text7Copy',
               type:'text',
               rect:['32px','81px','518px','97px','auto','auto'],
               text:"Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text8Copy',
               type:'text',
               rect:['73px','359px','430px','32px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this window",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'chart1_ex3',
               display:'none',
               type:'text',
               rect:['538px','7px','40px','34px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'biblebox4',
            display:'none',
            type:'group',
            rect:['44','48','580','407','auto','auto'],
            c:[
            {
               id:'RoundRect2Copy2',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'RoundRect2Copy9',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               clip:['rect(0px 580px 52px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text6Copy2',
               type:'text',
               rect:['74px','8px','443px','38px','auto','auto'],
               text:"1 Peter 3:15",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text7Copy2',
               type:'text',
               rect:['32px','81px','518px','97px','auto','auto'],
               text:"But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect...",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text8Copy2',
               type:'text',
               rect:['73px','359px','430px','32px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this window",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'chart1_ex4',
               display:'none',
               type:'text',
               rect:['542px','6px','40px','34px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'biblebox5',
            display:'none',
            type:'group',
            rect:['44','48','580','407','auto','auto'],
            c:[
            {
               id:'RoundRect2Copy3',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'RoundRect2Copy6',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               clip:['rect(0px 580px 61px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'Text6Copy3',
               type:'text',
               rect:['74px','8px','443px','38px','auto','auto'],
               text:"John 14:3",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text7Copy3',
               type:'text',
               rect:['32px','89px','518px','97px','auto','auto'],
               text:"And if I go and prepare a place for you, I will come back and take you to be with me that you also may be where I am.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text8Copy3',
               type:'text',
               rect:['73px','359px','430px','32px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this window",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'escape1',
               type:'text',
               rect:['544px','10px','32px','34px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'chart2_submit_button',
            display:'none',
            type:'rect',
            rect:['224px','502px','222px','48px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'chart1_submit_button',
            display:'none',
            type:'rect',
            rect:['224px','502px','222px','48px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q35_submit_button',
            display:'none',
            type:'rect',
            rect:['226px','509px','217px','39px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q35_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['537px','494px','54px','56px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q36_submit_button',
            display:'none',
            type:'rect',
            rect:['225px','506px','218px','42px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q36_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['542px','497px','46px','46px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q36_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['543px','495px','44px','48px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q35_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['538px','495px','52px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'biblebox6',
            display:'none',
            type:'group',
            rect:['44','48','580','407','auto','auto'],
            c:[
            {
               id:'RoundRect2Copy4',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'RoundRect2Copy10',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               clip:['rect(0px 580px 46px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text6Copy4',
               type:'text',
               rect:['74px','8px','443px','38px','auto','auto'],
               text:"1 Corinthians 2:9–10",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text7Copy4',
               type:'text',
               rect:['32px','47px','518px','97px','auto','auto'],
               text:"However, as it is written:<br><br>“What no eye has seen,<br>    what no ear has heard,<br>and what no human mind has conceived”&mdash;<br>    the things God has prepared for those who love him&mdash;<br><sup>10</sup>these are the things God has revealed to us by his Spirit.<br><br>The Spirit searches all things, even the deep things of God.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text8Copy4',
               type:'text',
               rect:['73px','359px','430px','32px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this window",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'escape2',
               type:'text',
               rect:['543px','7px','32px','34px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'biblebox7',
            display:'none',
            type:'group',
            rect:['44','48','580','407','auto','auto'],
            c:[
            {
               id:'RoundRect2Copy5',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(158,174,224,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               boxShadow:["",9,7,23,10,"rgba(0,0,0,0.65)"]
            },
            {
               id:'RoundRect2Copy11',
               type:'rect',
               rect:['0px','0px','580px','407px','auto','auto'],
               clip:['rect(0px 580px 54px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text6Copy5',
               type:'text',
               rect:['74px','8px','443px','38px','auto','auto'],
               text:"Ephesians 2:10",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","normal"]
            },
            {
               id:'Text7Copy5',
               type:'text',
               rect:['32px','113px','518px','97px','auto','auto'],
               text:"For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text8Copy5',
               type:'text',
               rect:['73px','359px','430px','32px','auto','auto'],
               cursor:['pointer'],
               text:"Click here to close this window",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'escape3',
               type:'text',
               rect:['545px','8px','32px','34px','auto','auto'],
               cursor:['pointer'],
               text:"X",
               align:"center",
               font:['Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'question33',
            display:'none',
            type:'rect',
            rect:['120px','46px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[],
            c:[
            {
               id:'questionbodyCopy2',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"Based on what you just read, what have you learned about the importance of spiritual preparation?",
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
               id:'questionheader',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question33Copy',
            display:'none',
            type:'rect',
            rect:['120px','46px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[],
            c:[
            {
               id:'questionbodyCopy3',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"What one verse has been most helpful to you as an encouragement to spiritually prepare for worshiping God on Sunday?",
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
               id:'questionheaderCopy',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['120px','275px','428px','29px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['80px','496px','56px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['83px','494px','51px','56px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb3',
            display:'none',
            type:'ellipse',
            rect:['83px','499px','52px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb4',
            display:'none',
            type:'ellipse',
            rect:['81px','497px','51px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
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
         "${_Text3Copy}": [
            ["style", "top", '391px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '29px']
         ],
         "${_escape2}": [
            ["style", "top", '7px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '543px'],
            ["style", "cursor", 'pointer']
         ],
         "${_q35_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '23px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetV", '7px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_q36_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question33}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '1'],
            ["style", "top", '46px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '527px'],
            ["style", "display", 'none']
         ],
         "${_Text8Copy2}": [
            ["style", "top", '359px'],
            ["style", "left", '73px'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'center']
         ],
         "${_questionbody}": [
            ["style", "top", '33px'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '495px']
         ],
         "${_RoundRect3}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "top", '122px'],
            ["style", "left", '0.02px'],
            ["style", "height", '5px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '7px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.blur", '23px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '74px'],
            ["style", "font-size", '22px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '-68px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-19px']
         ],
         "${_Text7Copy4}": [
            ["style", "height", '97px'],
            ["style", "top", '47.47px'],
            ["style", "left", '32px'],
            ["style", "text-align", 'left']
         ],
         "${_Text12Copy3}": [
            ["style", "text-align", 'right'],
            ["style", "left", '-100px']
         ],
         "${_Text10}": [
            ["style", "height", '38px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-40.97px'],
            ["style", "width", '181px']
         ],
         "${_chart1_forms}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Text7Copy5}": [
            ["style", "top", '113px'],
            ["style", "text-align", 'left'],
            ["style", "height", '97px'],
            ["style", "left", '32px'],
            ["style", "font-size", '22px']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RoundRect3Copy2}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "top", '202px'],
            ["style", "left", '0.02px'],
            ["style", "height", '5px']
         ],
         "${_Text8Copy5}": [
            ["style", "top", '359px'],
            ["style", "left", '73px'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'center']
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '33px'],
            ["style", "width", '495px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect2Copy7}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,580,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q36_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text8Copy4}": [
            ["style", "top", '359px'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'center'],
            ["style", "left", '73px']
         ],
         "${_Text12Copy2}": [
            ["style", "text-align", 'center'],
            ["style", "left", '347px']
         ],
         "${_question}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.83'],
            ["style", "opacity", '0'],
            ["style", "left", '556px'],
            ["style", "width", '518px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '0.83'],
            ["style", "height", '114px'],
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["style", "top", '391px'],
            ["style", "text-align", 'right'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '434px']
         ],
         "${_chart1_skip_check_button}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_TextCopy}": [
            ["style", "top", '1px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-19px']
         ],
         "${_topbarCopy2}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_RoundRect2Copy8}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,580,50,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_topbar}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1.20746'],
            ["style", "clip", [0,429,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '44.5px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '7px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.blur", '23px']
         ],
         "${_RoundRect2Copy9}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,580,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_RoundRect3Copy}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "top", '42px'],
            ["style", "left", '0.02px'],
            ["style", "height", '5px']
         ],
         "${_Text7Copy3}": [
            ["style", "top", '89px'],
            ["style", "text-align", 'left'],
            ["style", "height", '97px'],
            ["style", "left", '32px'],
            ["style", "font-size", '25px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '23px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.offsetV", '7px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_type_text}": [
            ["style", "top", '275px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '570px'],
            ["style", "font-size", '17px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '136px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '105px']
         ],
         "${_question33Copy}": [
            ["style", "top", '46px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '527px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_bb4}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7Copy2}": [
            ["style", "top", '81px'],
            ["style", "height", '97px'],
            ["style", "text-align", 'left'],
            ["style", "left", '32px']
         ],
         "${_topbarCopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1.20746'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,429,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '44.5px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '-79px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "left", '-7px'],
            ["style", "bottom", 'auto']
         ],
         "${_Rectangle2Copy}": [
            ["style", "left", '334px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_Text13}": [
            ["style", "height", '29px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'left'],
            ["style", "left", '158.02px']
         ],
         "${_Text6}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '74px'],
            ["style", "font-size", '22px']
         ],
         "${_Text2}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '29px'],
            ["style", "text-align", 'left']
         ],
         "${_Text}": [
            ["style", "top", '-68px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-19px']
         ],
         "${_bb3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text6Copy5}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '74px'],
            ["style", "font-size", '22px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-19px']
         ],
         "${_Text6Copy2}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '74px'],
            ["style", "font-size", '22px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '70px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-7px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '112px']
         ],
         "${_Rectangle2}": [
            ["style", "left", '111px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_Text13Copy}": [
            ["style", "top", '2px'],
            ["style", "left", '-272px'],
            ["style", "text-align", 'right'],
            ["style", "height", '29px']
         ],
         "${_Text6Copy3}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '74px'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect2Copy6}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["subproperty", "boxShadow.blur", '23px'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "clip", [0,580,61,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.offsetV", '7px']
         ],
         "${_biblebox3}": [
            ["style", "top", '171.93px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-173.4px'],
            ["style", "display", 'none']
         ],
         "${_RoundRect2Copy10}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,580,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Text6Copy4}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '74px'],
            ["style", "font-size", '22px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '127px'],
            ["style", "left", '-7px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_questionheader}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1)']
         ],
         "${_biblebox2}": [
            ["style", "top", '103.99px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-173.4px'],
            ["style", "display", 'none']
         ],
         "${_chart1_ex2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '539px'],
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "font-weight", '700'],
            ["style", "cursor", 'pointer']
         ],
         "${_grid1}": [
            ["style", "top", '267px'],
            ["transform", "scaleY", '0.8'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '567px'],
            ["style", "width", '8px']
         ],
         "${_chart1_ex4}": [
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '542px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '81px'],
            ["style", "text-align", 'left'],
            ["style", "left", '32px'],
            ["style", "height", '97px']
         ],
         "${_Text4}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-align", 'center'],
            ["style", "left", '68px']
         ],
         "${_chart2_skip_check_button}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '8px'],
            ["transform", "scaleY", '0.71'],
            ["transform", "scaleX", '0.71'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '326px'],
            ["style", "text-align", 'left']
         ],
         "${_TextCopy5}": [
            ["style", "top", '70px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-7px'],
            ["style", "width", '112px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '23px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetV", '7px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_biblebox6}": [
            ["style", "top", '124.97px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-173.4px'],
            ["style", "display", 'none']
         ],
         "${_skip_text_2}": [
            ["style", "top", '432px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_questionbodyCopy3}": [
            ["style", "top", '56px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_Text8Copy3}": [
            ["style", "top", '359px'],
            ["style", "text-align", 'center'],
            ["style", "left", '73px'],
            ["style", "cursor", 'pointer']
         ],
         "${_chart1_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q36_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_grid2}": [
            ["transform", "scaleY", '0.7'],
            ["style", "height", '38px'],
            ["transform", "scaleX", '0.7'],
            ["style", "opacity", '0'],
            ["style", "left", '537.97px'],
            ["style", "display", 'none']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.blur", '23px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetV", '7px'],
            ["subproperty", "boxShadow.offsetH", '9px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Text9}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-18.97px'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'right']
         ],
         "${_Text8Copy}": [
            ["style", "top", '359px'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'center'],
            ["style", "left", '73px']
         ],
         "${_Text7}": [
            ["style", "height", '97px'],
            ["style", "top", '81px'],
            ["style", "left", '32px'],
            ["style", "text-align", 'left']
         ],
         "${_question36_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '406px'],
            ["transform", "translateY", '12px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "boxShadow.blur", '32px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.spread", '6px'],
            ["subproperty", "boxShadow.offsetV", '12px'],
            ["subproperty", "boxShadow.offsetH", '50px'],
            ["style", "top", '0px']
         ],
         "${_biblebox1}": [
            ["style", "top", '25.56px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.13'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.13'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-176.13px']
         ],
         "${_Text11}": [
            ["style", "height", '38px'],
            ["style", "left", '-15.97px'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbarCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["transform", "scaleY", '1'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '136px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "width", '105px']
         ],
         "${_Text5}": [
            ["style", "top", '352px'],
            ["style", "display", 'none'],
            ["style", "height", '28px'],
            ["style", "opacity", '0'],
            ["style", "left", '151px'],
            ["style", "width", '292px']
         ],
         "${_biblebox5}": [
            ["style", "top", '43.97px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-163.38px'],
            ["style", "display", 'none']
         ],
         "${_skip_text}": [
            ["style", "top", '459px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "display", 'none'],
            ["style", "font-size", '19px']
         ],
         "${_chart1_ex3}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '538px']
         ],
         "${_questionCopy}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.71'],
            ["style", "opacity", '0'],
            ["style", "left", '530px'],
            ["style", "width", '518px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '0.71'],
            ["style", "height", '114px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '-10px'],
            ["style", "left", '-7px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_Text8}": [
            ["style", "top", '359px'],
            ["style", "text-align", 'center'],
            ["style", "left", '73px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Rectangle}": [
            ["style", "top", '58px'],
            ["style", "left", '-7px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_chart2_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_biblebox7}": [
            ["style", "top", '201.92px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-173.4px'],
            ["style", "display", 'none']
         ],
         "${_question35_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '482px'],
            ["transform", "translateY", '35px']
         ],
         "${_chart2_forms}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '0px']
         ],
         "${_RoundRect4}": [
            ["style", "top", '0px'],
            ["style", "left", '143.03px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_chart1_skip_go_button}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_chart2_skip_go_button}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_RoundRect2Copy11}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,580,54,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_q35_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_biblebox4}": [
            ["style", "top", '103.99px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-173.4px'],
            ["style", "display", 'none']
         ],
         "${_chart1_ex1}": [
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '555px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,598,36,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_questionbodyCopy2}": [
            ["style", "top", '56px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '1'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_Text12}": [
            ["style", "text-align", 'center']
         ],
         "${_escape3}": [
            ["style", "top", '8px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '545px'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionheaderCopy}": [
            ["style", "top", '10px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["transform", "scaleY", '1'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '1'],
            ["style", "left", '11px'],
            ["transform", "scaleX", '1']
         ],
         "${_escape1}": [
            ["style", "top", '10px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '544px'],
            ["style", "cursor", 'pointer']
         ],
         "${_q35_skip_go_button}": [
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
         duration: 34500,
         autoPlay: false,
         labels: {
            "chart1_home": 2000,
            "verse1_open": 2500,
            "verse1_page1": 3000,
            "verse1_page2": 3500,
            "verse2_open": 4500,
            "verse3_open": 6000,
            "verse4_open copy copy": 7500,
            "verse4_open": 7500,
            "verse4_open copy": 7500,
            "chart1_skip_check": 9000,
            "chart1_submit": 9250,
            "chart1_go": 9500,
            "chart1_exit": 10500,
            "chart2_begin": 11500,
            "chart2_home": 13000,
            "verse5_open": 13500,
            "verse6_open": 15000,
            "verse7_open": 16500,
            "chart2_skip_check": 18000,
            "chart2_submit": 18250,
            "chart2_go": 18500,
            "chart2_exit": 19500,
            "q35_begin": 21000,
            "q35_home": 22500,
            "q35_skip_check": 22750,
            "q35_submit": 23000,
            "q35_go": 25000,
            "q35_end": 26000,
            "q36_begin": 27500,
            "q36_home": 29000,
            "q36_skip_check": 29250,
            "q36_submit": 29500,
            "q36_go": 31500,
            "q36_end": 32500
         },
         timeline: [
            { id: "eid31", tween: [ "style", "${_biblebox1}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeOutQuad" },
            { id: "eid25", tween: [ "style", "${_biblebox1}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_biblebox2}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "style", "${_biblebox2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInQuad" },
            { id: "eid303", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 750, easing: "easeOutQuad" },
            { id: "eid310", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 25250, duration: 750, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '0'}], position: 26000, duration: 0, easing: "easeOutQuad" },
            { id: "eid318", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 750, easing: "easeOutQuad" },
            { id: "eid323", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 31750, duration: 750, easing: "easeInQuad" },
            { id: "eid164", tween: [ "style", "${_question}", "left", '76px', { fromValue: '556px'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid79", tween: [ "style", "${_question}", "left", '-515px', { fromValue: '76px'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid101", tween: [ "transform", "${_biblebox6}", "scaleY", '1', { fromValue: '0.14'}], position: 15000, duration: 500, easing: "easeOutQuad" },
            { id: "eid102", tween: [ "transform", "${_biblebox6}", "scaleY", '0.13', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeInQuad" },
            { id: "eid233", tween: [ "transform", "${_question33}", "scaleX", '0.84', { fromValue: '1'}], position: 25000, duration: 750, easing: "easeInQuad" },
            { id: "eid261", tween: [ "style", "${_skip_text_2}", "display", 'block', { fromValue: 'none'}], position: 22709, duration: 0, easing: "easeInQuad" },
            { id: "eid262", tween: [ "style", "${_skip_text_2}", "display", 'none', { fromValue: 'block'}], position: 22779, duration: 0, easing: "easeInQuad" },
            { id: "eid263", tween: [ "style", "${_skip_text_2}", "display", 'block', { fromValue: 'none'}], position: 29213, duration: 0, easing: "easeInQuad" },
            { id: "eid264", tween: [ "style", "${_skip_text_2}", "display", 'none', { fromValue: 'block'}], position: 29288, duration: 0, easing: "easeInQuad" },
            { id: "eid288", tween: [ "style", "${_q36_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 29199, duration: 0 },
            { id: "eid289", tween: [ "style", "${_q36_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 29324, duration: 0 },
            { id: "eid128", tween: [ "transform", "${_grid2}", "scaleY", '1', { fromValue: '0.7'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid130", tween: [ "style", "${_grid2}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid191", tween: [ "style", "${_grid2}", "opacity", '0', { fromValue: '1'}], position: 18750, duration: 750, easing: "easeInQuad" },
            { id: "eid265", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 1500, duration: 500 },
            { id: "eid266", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 9250, duration: 500 },
            { id: "eid267", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 12500, duration: 500 },
            { id: "eid268", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 18250, duration: 500 },
            { id: "eid269", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 22000, duration: 500 },
            { id: "eid270", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 25000, duration: 500 },
            { id: "eid271", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 28500, duration: 500 },
            { id: "eid272", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 31500, duration: 750 },
            { id: "eid126", tween: [ "transform", "${_grid2}", "scaleX", '1', { fromValue: '0.7'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid121", tween: [ "transform", "${_biblebox7}", "scaleX", '1', { fromValue: '0.14'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "transform", "${_biblebox7}", "scaleX", '0.13', { fromValue: '1'}], position: 17000, duration: 500, easing: "easeInQuad" },
            { id: "eid293", tween: [ "style", "${_chart1_ex4}", "display", 'block', { fromValue: 'none'}], position: 2947, duration: 0 },
            { id: "eid54", tween: [ "style", "${_biblebox3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "style", "${_biblebox3}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid93", tween: [ "style", "${_biblebox5}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "style", "${_biblebox5}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 500, easing: "easeInQuad" },
            { id: "eid173", tween: [ "style", "${_chart2_submit_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid179", tween: [ "style", "${_chart2_submit_button}", "display", 'block', { fromValue: 'none'}], position: 12942, duration: 0, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "style", "${_chart2_submit_button}", "display", 'none', { fromValue: 'block'}], position: 13087, duration: 0, easing: "easeOutQuad" },
            { id: "eid181", tween: [ "style", "${_chart2_submit_button}", "display", 'block', { fromValue: 'none'}], position: 17939, duration: 0, easing: "easeOutQuad" },
            { id: "eid182", tween: [ "style", "${_chart2_submit_button}", "display", 'none', { fromValue: 'block'}], position: 18044, duration: 0, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "transform", "${_Text2}", "scaleY", '0.7', { fromValue: '1'}], position: 3000, duration: 370, easing: "easeInQuad" },
            { id: "eid168", tween: [ "style", "${_question}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutQuad" },
            { id: "eid169", tween: [ "style", "${_question}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0, easing: "easeOutQuad" },
            { id: "eid68", tween: [ "style", "${_biblebox4}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "style", "${_biblebox4}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeInQuad" },
            { id: "eid111", tween: [ "style", "${_biblebox7}", "top", '48px', { fromValue: '201.92px'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "style", "${_biblebox7}", "top", '199.92px', { fromValue: '48px'}], position: 17000, duration: 500, easing: "easeInQuad" },
            { id: "eid64", tween: [ "transform", "${_biblebox4}", "scaleY", '1', { fromValue: '0.14'}], position: 7500, duration: 500, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "transform", "${_biblebox4}", "scaleY", '0.13', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeInQuad" },
            { id: "eid294", tween: [ "style", "${_chart1_ex4}", "opacity", '1', { fromValue: '0'}], position: 2947, duration: 53 },
            { id: "eid29", tween: [ "style", "${_biblebox1}", "left", '38px', { fromValue: '-176.13px'}], position: 2500, duration: 500, easing: "easeOutQuad" },
            { id: "eid23", tween: [ "style", "${_biblebox1}", "left", '-189.18px', { fromValue: '38px'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid115", tween: [ "style", "${_biblebox7}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutQuad" },
            { id: "eid116", tween: [ "style", "${_biblebox7}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_skip_text}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 250 },
            { id: "eid156", tween: [ "style", "${_skip_text}", "opacity", '1', { fromValue: '0'}], position: 17938, duration: 0 },
            { id: "eid157", tween: [ "style", "${_skip_text}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 250 },
            { id: "eid14", tween: [ "style", "${_Text3Copy}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 250, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_biblebox2}", "top", '48px', { fromValue: '103.99px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "style", "${_biblebox2}", "top", '102.96px', { fromValue: '48px'}], position: 5000, duration: 500, easing: "easeInQuad" },
            { id: "eid160", tween: [ "transform", "${_grid1}", "scaleX", '1', { fromValue: '0.8'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "transform", "${_grid1}", "scaleX", '0.75', { fromValue: '1'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid103", tween: [ "style", "${_biblebox6}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0, easing: "easeOutQuad" },
            { id: "eid104", tween: [ "style", "${_biblebox6}", "display", 'none', { fromValue: 'block'}], position: 16000, duration: 0, easing: "easeOutQuad" },
            { id: "eid119", tween: [ "style", "${_biblebox7}", "left", '44px', { fromValue: '-173.4px'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid120", tween: [ "style", "${_biblebox7}", "left", '-180.3px', { fromValue: '44px'}], position: 17000, duration: 500, easing: "easeInQuad" },
            { id: "eid50", tween: [ "style", "${_biblebox3}", "top", '48px', { fromValue: '171.93px'}], position: 6000, duration: 500, easing: "easeOutQuad" },
            { id: "eid51", tween: [ "style", "${_biblebox3}", "top", '38.77px', { fromValue: '48px'}], position: 6500, duration: 59, easing: "easeInQuad" },
            { id: "eid74", tween: [ "style", "${_biblebox3}", "top", '170.93px', { fromValue: '38.77px'}], position: 6559, duration: 441, easing: "easeInQuad" },
            { id: "eid6", tween: [ "transform", "${_Text2Copy}", "scaleX", '1', { fromValue: '0.71'}], position: 3170, duration: 330, easing: "easeOutQuad" },
            { id: "eid232", tween: [ "transform", "${_question33}", "scaleY", '0.84', { fromValue: '1'}], position: 25000, duration: 750, easing: "easeInQuad" },
            { id: "eid2", tween: [ "style", "${_Text2Copy}", "left", '29px', { fromValue: '326px'}], position: 3170, duration: 330, easing: "easeOutQuad" },
            { id: "eid278", tween: [ "style", "${_q35_submit_button}", "display", 'block', { fromValue: 'none'}], position: 22458, duration: 0 },
            { id: "eid279", tween: [ "style", "${_q35_submit_button}", "display", 'none', { fromValue: 'block'}], position: 22823, duration: 0 },
            { id: "eid139", tween: [ "style", "${_chart2_skip_check_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid145", tween: [ "style", "${_chart2_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 12954, duration: 0, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_chart2_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 13104, duration: 0, easing: "easeOutQuad" },
            { id: "eid290", tween: [ "style", "${_chart1_ex1}", "display", 'block', { fromValue: 'none'}], position: 2947, duration: 0 },
            { id: "eid302", tween: [ "style", "${_type_text}", "left", '120px', { fromValue: '570px'}], position: 21500, duration: 750, easing: "easeOutQuad" },
            { id: "eid309", tween: [ "style", "${_type_text}", "left", '-365px', { fromValue: '120px'}], position: 25250, duration: 750, easing: "easeInQuad" },
            { id: "eid316", tween: [ "style", "${_type_text}", "left", '119px', { fromValue: '525px'}], position: 28000, duration: 750, easing: "easeOutQuad" },
            { id: "eid322", tween: [ "style", "${_type_text}", "left", '-321px', { fromValue: '119px'}], position: 31750, duration: 750, easing: "easeInQuad" },
            { id: "eid159", tween: [ "style", "${_grid1}", "left", '57px', { fromValue: '567px'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_grid1}", "left", '-582px', { fromValue: '57px'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid187", tween: [ "style", "${_chart2_forms}", "opacity", '1', { fromValue: '0'}], position: 12750, duration: 250 },
            { id: "eid190", tween: [ "style", "${_chart2_forms}", "opacity", '0', { fromValue: '1'}], position: 18750, duration: 750, easing: "easeInQuad" },
            { id: "eid87", tween: [ "style", "${_biblebox5}", "top", '48px', { fromValue: '43.97px'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_biblebox5}", "top", '45.9px', { fromValue: '48px'}], position: 14000, duration: 500, easing: "easeInQuad" },
            { id: "eid72", tween: [ "transform", "${_biblebox4}", "scaleX", '1', { fromValue: '0.14'}], position: 7500, duration: 500, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "transform", "${_biblebox4}", "scaleX", '0.13', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeInQuad" },
            { id: "eid140", tween: [ "style", "${_chart2_skip_go_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid147", tween: [ "style", "${_chart2_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 17938, duration: 0, easing: "easeOutQuad" },
            { id: "eid148", tween: [ "style", "${_chart2_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 18053, duration: 0, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "style", "${_chart1_ex3}", "opacity", '1', { fromValue: '0'}], position: 2947, duration: 53 },
            { id: "eid257", tween: [ "style", "${_question36_div}", "opacity", '1', { fromValue: '0'}], position: 28000, duration: 750, easing: "easeOutQuad" },
            { id: "eid259", tween: [ "style", "${_question36_div}", "opacity", '0', { fromValue: '1'}], position: 31750, duration: 750, easing: "easeInQuad" },
            { id: "eid304", tween: [ "style", "${_type_text}", "top", '275px', { fromValue: '275px'}], position: 21500, duration: 0, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "style", "${_type_text}", "top", '275px', { fromValue: '275px'}], position: 22250, duration: 0 },
            { id: "eid306", tween: [ "style", "${_type_text}", "top", '275px', { fromValue: '275px'}], position: 25250, duration: 0, easing: "easeInQuad" },
            { id: "eid314", tween: [ "style", "${_type_text}", "top", '255px', { fromValue: '275px'}], position: 28000, duration: 0, easing: "easeInQuad" },
            { id: "eid320", tween: [ "style", "${_type_text}", "top", '255px', { fromValue: '255px'}], position: 31750, duration: 0, easing: "easeInQuad" },
            { id: "eid245", tween: [ "style", "${_question35_div}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_question35_div}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0, easing: "easeInQuad" },
            { id: "eid332", tween: [ "style", "${_bb4}", "display", 'block', { fromValue: 'none'}], position: 28670, duration: 0 },
            { id: "eid333", tween: [ "style", "${_bb4}", "display", 'none', { fromValue: 'block'}], position: 29958, duration: 0 },
            { id: "eid135", tween: [ "transform", "${_questionCopy}", "scaleY", '1', { fromValue: '0.71'}], position: 11750, duration: 750, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "transform", "${_questionCopy}", "scaleY", '0.79', { fromValue: '1'}], position: 18500, duration: 750, easing: "easeInQuad" },
            { id: "eid28", tween: [ "transform", "${_biblebox1}", "scaleY", '1', { fromValue: '0.13'}], position: 2500, duration: 500, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "transform", "${_biblebox1}", "scaleY", '0.18', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid195", tween: [ "style", "${_chart1_forms}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid196", tween: [ "style", "${_chart1_forms}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 250 },
            { id: "eid286", tween: [ "style", "${_q36_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 28934, duration: 0 },
            { id: "eid287", tween: [ "style", "${_q36_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 29049, duration: 0 },
            { id: "eid326", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 1885, duration: 0 },
            { id: "eid327", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 9422, duration: 0 },
            { id: "eid222", tween: [ "style", "${_question33}", "display", 'block', { fromValue: 'none'}], position: 21250, duration: 0, easing: "easeInQuad" },
            { id: "eid236", tween: [ "style", "${_question33}", "display", 'none', { fromValue: 'block'}], position: 25750, duration: 0, easing: "easeInQuad" },
            { id: "eid66", tween: [ "style", "${_biblebox4}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_biblebox4}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "style", "${_questionCopy}", "opacity", '1', { fromValue: '0'}], position: 11750, duration: 750, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_questionCopy}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 750, easing: "easeInQuad" },
            { id: "eid105", tween: [ "style", "${_biblebox6}", "opacity", '1', { fromValue: '0'}], position: 15000, duration: 500, easing: "easeOutQuad" },
            { id: "eid106", tween: [ "style", "${_biblebox6}", "opacity", '0', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeInQuad" },
            { id: "eid174", tween: [ "style", "${_chart1_submit_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid175", tween: [ "style", "${_chart1_submit_button}", "display", 'block', { fromValue: 'none'}], position: 1940, duration: 0, easing: "easeOutQuad" },
            { id: "eid176", tween: [ "style", "${_chart1_submit_button}", "display", 'none', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutQuad" },
            { id: "eid177", tween: [ "style", "${_chart1_submit_button}", "display", 'block', { fromValue: 'none'}], position: 8966, duration: 0, easing: "easeOutQuad" },
            { id: "eid178", tween: [ "style", "${_chart1_submit_button}", "display", 'none', { fromValue: 'block'}], position: 9066, duration: 0, easing: "easeOutQuad" },
            { id: "eid132", tween: [ "style", "${_questionCopy}", "left", '76px', { fromValue: '530px'}], position: 11750, duration: 750, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "style", "${_questionCopy}", "left", '-515px', { fromValue: '76px'}], position: 18500, duration: 750, easing: "easeInQuad" },
            { id: "eid188", tween: [ "transform", "${_chart2_forms}", "translateX", '-572px', { fromValue: '0px'}], position: 18750, duration: 750, easing: "easeInQuad" },
            { id: "eid89", tween: [ "transform", "${_biblebox5}", "scaleY", '1', { fromValue: '0.14'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "transform", "${_biblebox5}", "scaleY", '0.13', { fromValue: '1'}], position: 14000, duration: 500, easing: "easeInQuad" },
            { id: "eid151", tween: [ "style", "${_grid1}", "top", '267px', { fromValue: '267px'}], position: 8953, duration: 0 },
            { id: "eid328", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0 },
            { id: "eid329", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 19847, duration: 0 },
            { id: "eid238", tween: [ "transform", "${_question33Copy}", "scaleX", '0.84', { fromValue: '1'}], position: 31500, duration: 750, easing: "easeInQuad" },
            { id: "eid30", tween: [ "style", "${_biblebox1}", "top", '36px', { fromValue: '25.56px'}], position: 2500, duration: 500, easing: "easeOutQuad" },
            { id: "eid24", tween: [ "style", "${_biblebox1}", "top", '26.12px', { fromValue: '36px'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid226", tween: [ "style", "${_question33}", "opacity", '1', { fromValue: '0'}], position: 21250, duration: 750, easing: "easeOutQuad" },
            { id: "eid234", tween: [ "style", "${_question33}", "opacity", '0', { fromValue: '1'}], position: 25000, duration: 750, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_biblebox4}", "left", '44px', { fromValue: '-173.4px'}], position: 7500, duration: 500, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_biblebox4}", "left", '-180.3px', { fromValue: '44px'}], position: 8000, duration: 500, easing: "easeInQuad" },
            { id: "eid107", tween: [ "style", "${_biblebox6}", "left", '44px', { fromValue: '-173.4px'}], position: 15000, duration: 500, easing: "easeOutQuad" },
            { id: "eid108", tween: [ "style", "${_biblebox6}", "left", '-180.3px', { fromValue: '44px'}], position: 15500, duration: 500, easing: "easeInQuad" },
            { id: "eid237", tween: [ "transform", "${_question33Copy}", "scaleY", '0.84', { fromValue: '1'}], position: 31500, duration: 750, easing: "easeInQuad" },
            { id: "eid109", tween: [ "transform", "${_biblebox6}", "scaleX", '1', { fromValue: '0.14'}], position: 15000, duration: 500, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "transform", "${_biblebox6}", "scaleX", '0.13', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeInQuad" },
            { id: "eid91", tween: [ "transform", "${_biblebox5}", "scaleX", '1', { fromValue: '0.14'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "transform", "${_biblebox5}", "scaleX", '0.13', { fromValue: '1'}], position: 14000, duration: 500, easing: "easeInQuad" },
            { id: "eid185", tween: [ "style", "${_chart2_forms}", "display", 'block', { fromValue: 'none'}], position: 12750, duration: 0 },
            { id: "eid192", tween: [ "style", "${_chart2_forms}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0, easing: "easeInQuad" },
            { id: "eid43", tween: [ "style", "${_biblebox2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "style", "${_biblebox2}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "style", "${_biblebox1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "style", "${_biblebox1}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "transform", "${_biblebox2}", "scaleY", '1', { fromValue: '0.14'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "transform", "${_biblebox2}", "scaleY", '0.13', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInQuad" },
            { id: "eid282", tween: [ "style", "${_q35_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 22709, duration: 0 },
            { id: "eid283", tween: [ "style", "${_q35_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 22823, duration: 0 },
            { id: "eid243", tween: [ "style", "${_question33Copy}", "display", 'block', { fromValue: 'none'}], position: 27750, duration: 0, easing: "easeInQuad" },
            { id: "eid244", tween: [ "style", "${_question33Copy}", "display", 'none', { fromValue: 'block'}], position: 32250, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_question36_div}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0, easing: "easeOutQuad" },
            { id: "eid260", tween: [ "style", "${_question36_div}", "display", 'none', { fromValue: 'block'}], position: 32500, duration: 0, easing: "easeInQuad" },
            { id: "eid225", tween: [ "style", "${_question33}", "left", '120px', { fromValue: '527px'}], position: 21250, duration: 750, easing: "easeOutQuad" },
            { id: "eid235", tween: [ "style", "${_question33}", "left", '-354px', { fromValue: '120px'}], position: 25000, duration: 750, easing: "easeInQuad" },
            { id: "eid183", tween: [ "style", "${_chart1_forms}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid197", tween: [ "style", "${_chart1_forms}", "display", 'none', { fromValue: 'block'}], position: 9500, duration: 0 },
            { id: "eid184", tween: [ "style", "${_chart1_forms}", "display", 'none', { fromValue: 'none'}], position: 10500, duration: 0 },
            { id: "eid56", tween: [ "style", "${_biblebox3}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 500, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_biblebox3}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeInQuad" },
            { id: "eid247", tween: [ "transform", "${_question35_div}", "translateX", '0px', { fromValue: '482px'}], position: 21500, duration: 750, easing: "easeOutQuad" },
            { id: "eid250", tween: [ "transform", "${_question35_div}", "translateX", '-501px', { fromValue: '0px'}], position: 25250, duration: 750, easing: "easeInQuad" },
            { id: "eid8", tween: [ "transform", "${_Text2Copy}", "scaleY", '1', { fromValue: '0.71'}], position: 3170, duration: 330, easing: "easeOutQuad" },
            { id: "eid325", tween: [ "subproperty", "${_RoundRect}", "boxShadow.color", 'rgba(0,0,0,0.648438)', { fromValue: 'rgba(0,0,0,0.648438)'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid60", tween: [ "transform", "${_biblebox3}", "scaleX", '1', { fromValue: '0.14'}], position: 6000, duration: 500, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "transform", "${_biblebox3}", "scaleX", '0.13', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeInQuad" },
            { id: "eid241", tween: [ "style", "${_question33Copy}", "left", '120px', { fromValue: '527px'}], position: 27750, duration: 750, easing: "easeOutQuad" },
            { id: "eid242", tween: [ "style", "${_question33Copy}", "left", '-354px', { fromValue: '120px'}], position: 31500, duration: 750, easing: "easeInQuad" },
            { id: "eid297", tween: [ "style", "${_chart1_ex3}", "display", 'block', { fromValue: 'none'}], position: 2947, duration: 0 },
            { id: "eid20", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0, easing: "easeOutQuad" },
            { id: "eid4", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 3170, duration: 330, easing: "easeOutQuad" },
            { id: "eid275", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 33500, duration: 750 },
            { id: "eid249", tween: [ "style", "${_question35_div}", "opacity", '1', { fromValue: '0'}], position: 21500, duration: 750, easing: "easeOutQuad" },
            { id: "eid251", tween: [ "style", "${_question35_div}", "opacity", '0', { fromValue: '1'}], position: 25250, duration: 750, easing: "easeInQuad" },
            { id: "eid136", tween: [ "style", "${_questionCopy}", "display", 'block', { fromValue: 'none'}], position: 11750, duration: 0, easing: "easeOutQuad" },
            { id: "eid171", tween: [ "style", "${_questionCopy}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0, easing: "easeOutQuad" },
            { id: "eid11", tween: [ "transform", "${_Text2}", "scaleX", '0.7', { fromValue: '1'}], position: 3000, duration: 370, easing: "easeInQuad" },
            { id: "eid292", tween: [ "style", "${_chart1_ex1}", "opacity", '1', { fromValue: '0'}], position: 2947, duration: 53 },
            { id: "eid62", tween: [ "style", "${_biblebox4}", "top", '48px', { fromValue: '103.99px'}], position: 7500, duration: 500, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "style", "${_biblebox4}", "top", '98.23px', { fromValue: '48px'}], position: 8000, duration: 478, easing: "easeInQuad" },
            { id: "eid149", tween: [ "style", "${_biblebox4}", "top", '237.93px', { fromValue: '98.23px'}], position: 8478, duration: 22, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "style", "${_grid1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_grid1}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid330", tween: [ "style", "${_bb3}", "display", 'block', { fromValue: 'none'}], position: 21871, duration: 0 },
            { id: "eid331", tween: [ "style", "${_bb3}", "display", 'none', { fromValue: 'block'}], position: 24255, duration: 0 },
            { id: "eid113", tween: [ "transform", "${_biblebox7}", "scaleY", '1', { fromValue: '0.14'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "transform", "${_biblebox7}", "scaleY", '0.13', { fromValue: '1'}], position: 17000, duration: 500, easing: "easeInQuad" },
            { id: "eid16", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 250, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_biblebox3}", "left", '44px', { fromValue: '-173.4px'}], position: 6000, duration: 500, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "style", "${_biblebox3}", "left", '-180.3px', { fromValue: '44px'}], position: 6500, duration: 500, easing: "easeInQuad" },
            { id: "eid273", tween: [ "style", "${_buttons}", "top", '566px', { fromValue: '460px'}], position: 32750, duration: 750 },
            { id: "eid239", tween: [ "style", "${_question33Copy}", "opacity", '1', { fromValue: '0'}], position: 27750, duration: 750, easing: "easeOutQuad" },
            { id: "eid240", tween: [ "style", "${_question33Copy}", "opacity", '0', { fromValue: '1'}], position: 31500, duration: 750, easing: "easeInQuad" },
            { id: "eid137", tween: [ "style", "${_chart1_skip_go_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_chart1_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 8947, duration: 0, easing: "easeOutQuad" },
            { id: "eid144", tween: [ "style", "${_chart1_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 9107, duration: 0, easing: "easeOutQuad" },
            { id: "eid284", tween: [ "style", "${_q36_submit_button}", "display", 'block', { fromValue: 'none'}], position: 28934, duration: 0 },
            { id: "eid285", tween: [ "style", "${_q36_submit_button}", "display", 'none', { fromValue: 'block'}], position: 29288, duration: 0 },
            { id: "eid152", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 8953, duration: 0 },
            { id: "eid154", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
            { id: "eid155", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 17938, duration: 0 },
            { id: "eid158", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 18250, duration: 0 },
            { id: "eid165", tween: [ "transform", "${_question}", "scaleX", '1', { fromValue: '0.83'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid80", tween: [ "transform", "${_question}", "scaleX", '0.79', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid9", tween: [ "style", "${_Text2}", "left", '-175px', { fromValue: '29px'}], position: 3000, duration: 370, easing: "easeInQuad" },
            { id: "eid52", tween: [ "transform", "${_biblebox3}", "scaleY", '1', { fromValue: '0.14'}], position: 6000, duration: 500, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "transform", "${_biblebox3}", "scaleY", '0.13', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeInQuad" },
            { id: "eid17", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 3250, duration: 0, easing: "easeOutQuad" },
            { id: "eid161", tween: [ "transform", "${_grid1}", "scaleY", '1', { fromValue: '0.8'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "transform", "${_grid1}", "scaleY", '0.75', { fromValue: '1'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid274", tween: [ "style", "${_sabbath_bar}", "bottom", '-106px', { fromValue: '0px'}], position: 32750, duration: 750 },
            { id: "eid97", tween: [ "style", "${_biblebox5}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "style", "${_biblebox5}", "display", 'none', { fromValue: 'block'}], position: 14590, duration: 0, easing: "easeOutQuad" },
            { id: "eid27", tween: [ "transform", "${_biblebox1}", "scaleX", '1', { fromValue: '0.13'}], position: 2500, duration: 500, easing: "easeOutQuad" },
            { id: "eid21", tween: [ "transform", "${_biblebox1}", "scaleX", '0.18', { fromValue: '1'}], position: 3500, duration: 500, easing: "easeOutQuad" },
            { id: "eid134", tween: [ "transform", "${_questionCopy}", "scaleX", '1', { fromValue: '0.71'}], position: 11750, duration: 750, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "transform", "${_questionCopy}", "scaleX", '0.79', { fromValue: '1'}], position: 18500, duration: 750, easing: "easeInQuad" },
            { id: "eid295", tween: [ "style", "${_chart1_ex2}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid124", tween: [ "style", "${_grid2}", "left", '44.97px', { fromValue: '537.97px'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid189", tween: [ "style", "${_grid2}", "left", '-527px', { fromValue: '44.97px'}], position: 18750, duration: 750, easing: "easeInQuad" },
            { id: "eid117", tween: [ "style", "${_biblebox7}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 500, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_biblebox7}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 500, easing: "easeInQuad" },
            { id: "eid166", tween: [ "transform", "${_question}", "scaleY", '1', { fromValue: '0.83'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "transform", "${_question}", "scaleY", '0.79', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid163", tween: [ "style", "${_grid1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
            { id: "eid170", tween: [ "style", "${_grid1}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid255", tween: [ "transform", "${_question36_div}", "translateX", '0px', { fromValue: '406px'}], position: 28000, duration: 750, easing: "easeOutQuad" },
            { id: "eid258", tween: [ "transform", "${_question36_div}", "translateX", '-413px', { fromValue: '0px'}], position: 31750, duration: 750, easing: "easeInQuad" },
            { id: "eid95", tween: [ "style", "${_biblebox5}", "left", '44px', { fromValue: '-163.38px'}], position: 13500, duration: 500, easing: "easeOutQuad" },
            { id: "eid96", tween: [ "style", "${_biblebox5}", "left", '-170.3px', { fromValue: '44px'}], position: 14000, duration: 500, easing: "easeInQuad" },
            { id: "eid34", tween: [ "transform", "${_biblebox2}", "scaleX", '1', { fromValue: '0.14'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "transform", "${_biblebox2}", "scaleX", '0.13', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInQuad" },
            { id: "eid38", tween: [ "style", "${_biblebox2}", "left", '44px', { fromValue: '-173.4px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "style", "${_biblebox2}", "left", '-180.3px', { fromValue: '44px'}], position: 5000, duration: 500, easing: "easeInQuad" },
            { id: "eid280", tween: [ "style", "${_q35_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 22458, duration: 0 },
            { id: "eid281", tween: [ "style", "${_q35_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 22543, duration: 0 },
            { id: "eid99", tween: [ "style", "${_biblebox6}", "top", '48px', { fromValue: '124.97px'}], position: 15000, duration: 500, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_biblebox6}", "top", '123.93px', { fromValue: '48px'}], position: 15500, duration: 500, easing: "easeInQuad" },
            { id: "eid308", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 21500, duration: 0, easing: "easeInQuad" },
            { id: "eid311", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 26000, duration: 0, easing: "easeInQuad" },
            { id: "eid312", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0, easing: "easeInQuad" },
            { id: "eid324", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 32500, duration: 0, easing: "easeInQuad" },
            { id: "eid131", tween: [ "style", "${_grid2}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid193", tween: [ "style", "${_grid2}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0, easing: "easeInQuad" },
            { id: "eid19", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 250, easing: "easeOutQuad" },
            { id: "eid138", tween: [ "style", "${_chart1_skip_check_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_chart1_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 1940, duration: 0, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "style", "${_chart1_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 2085, duration: 0, easing: "easeOutQuad" },
            { id: "eid10", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 370, easing: "easeInQuad" }         ]
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
