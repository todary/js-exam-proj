/*****************************ask user if he realy want to leave or refresh******************************************/
        window.onbeforeunload = function (e) {
        e = e || window.event;

        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = '******* warning ******';
        }

        // For Safari
        return '******* warning ******';
        };
/****************************************************************************************************/
        var JsonStrEng= '{"Exam":{"Questions":[{"QuestionBody":"The major language of World Wide Web is HTML.","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"1"},{"QuestionBody":"HTML is an abbreviation for...HiTech Markup Language","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"2"},{"QuestionBody":"Transmitter is a device from where the information is sent.","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"1"},{"QuestionBody":"LAN is an abbreviation for?.","QuestionDegree":"10","QuestionType":"1","Answers":[" Large Access Network"," Local Access Network"," Large Area Network"," Local Area Network"],"CorrectAnswer":"4"},{"QuestionBody":"URL is an abbreviation for?.","QuestionDegree":"10","QuestionType":"1","Answers":[" Universal Resource Locator"," Uniform Resource Locator"," Universal Resource Location"," Uniform Resource Location"],"CorrectAnswer":"4"},{"QuestionBody":"FTP is an abbreviation for?.","QuestionDegree":"10","QuestionType":"1","Answers":[" File Transfer Position"," File Transfer Protection"," File Transfer Protocol"," File Transfer Possibility"],"CorrectAnswer":"3"},{"QuestionBody":"IDE stands for?","QuestionDegree":"10","QuestionType":"1","Answers":[" Integrated Dual Environment"," Inter Development Environment"," Integrated Development Environment"," Inter Dual Environment"],"CorrectAnswer":"3"},{"QuestionBody":"Dairy farming is at leading agricultural activity in the United States","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"2"},{"QuestionBody":"The dawn redwood appears to have flourished some 100 million years ago in northern forests around the world.","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"1"},{"QuestionBody":" Two species of large mammals once dominated the North American Prairies: the American bison and the pronghorn antelope..","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"1"},{"QuestionBody":"Tom has me English lesson on Thursdays.","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"2"},{"QuestionBody":"This film is better than his last one.","QuestionDegree":"5","QuestionType":"2","Answers":[" true "," false"],"CorrectAnswer":"2"},{"QuestionBody":"I am a teacher. ____________ do you do? - Nice to meet you!","QuestionDegree":"10","QuestionType":"1","Answers":["a-How","b-What","c-who","d-where"],"CorrectAnswer":"1"},{"QuestionBody":"I am fair ____________ my sister is dark.","QuestionDegree":"10","QuestionType":"1","Answers":["a-but","b-because","c-that","d-so"],"CorrectAnswer":"1"},{"QuestionBody":"I am hungry! Is there ____________ fruit in the cupboard?","QuestionDegree":"10","QuestionType":"1","Answers":["a-some","b-alot","c-any","d-much"],"CorrectAnswer":"3"},{"QuestionBody":"I ____________ go to the seaside at the weekend.","QuestionDegree":"10","QuestionType":"1","Answers":["a-often","b-like much","c-many","d-more"],"CorrectAnswer":"1"},{"QuestionBody":"Amanda can ____________ all night long!","QuestionDegree":"10","QuestionType":"1","Answers":["a-dancing","b-to dance","c-dance","d-is dance"],"CorrectAnswer":"3"},{"QuestionBody":"It is the telephone box _________ the market.","QuestionDegree":"10","QuestionType":"1","Answers":["a-in front of","b-in front","c-on the front","d-front"],"CorrectAnswer":"1"},{"QuestionBody":"________ girls over there are English.","QuestionDegree":"10","QuestionType":"1","Answers":["a-that","b-these","c-those","d-this"],"CorrectAnswer":"3"},{"QuestionBody":"He sleeps during the day and works ___ night.","QuestionDegree":"10","QuestionType":"1","Answers":["a-at","b-at the","c-on the","d-in the"],"CorrectAnswer":"1"},{"QuestionBody":"_______ painting over there is beautiful.","QuestionDegree":"10","QuestionType":"1","Answers":["a-that","b-these","c-those","d-this"],"CorrectAnswer":"1"},{"QuestionBody":"She works hard during the day and sleeps well ______ night.","QuestionDegree":"10","QuestionType":"1","Answers":["a-at","b-at the","c-in the","d-the"],"CorrectAnswer":"1"},{"QuestionBody":"The cheese is ____________ the eggs in the fridge.","QuestionDegree":"10","QuestionType":"1","Answers":["a-behind","b-in front","c-in","d-above"],"CorrectAnswer":"1"},{"QuestionBody":"They can ____________ chess very well.","QuestionDegree":"10","QuestionType":"1","Answers":["a-play","b-to play","c-playing","d-is play"],"CorrectAnswer":"1"},{"QuestionBody":"I ____________ go jogging on the beach at the weekend.","QuestionDegree":"10","QuestionType":"1","Answers":["a-a lot of","b-much","c-sometimes","d-many"],"CorrectAnswer":"3"},{"QuestionBody":" I would like ____________ fruit, please.","QuestionDegree":"10","QuestionType":"1","Answers":["a-a lot","b-any","c-some","d-many"],"CorrectAnswer":"3"},{"QuestionBody":"I am fat ____________ Tim is thin.","QuestionDegree":"10","QuestionType":"1","Answers":["a-and","b-or","c-but","d-so"],"CorrectAnswer":"1"},{"QuestionBody":"She is fine. And ____________ is your wife?","QuestionDegree":"10","QuestionType":"1","Answers":["a-who","b-what","c-how","d-where"],"CorrectAnswer":"3"},{"QuestionBody":"Tom is a ____________ football player than Peter.","QuestionDegree":"10","QuestionType":"1","Answers":["a-bad","b-worse","c-worst","d-badder"],"CorrectAnswer":"2"},{"QuestionBody":"I play games on ____________ computer in the evenings.","QuestionDegree":"10","QuestionType":"1","Answers":["a-you","b-hers","c-my","d-your"],"CorrectAnswer":"3"}]}}';
        var JsonStrIQ='{"Exam":{"Questions":[{"QuestionBody":"Look at this series: 2, 4, 6, 8, 10, ...What numbershould come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 11"," 12"," 13"," 14"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 58, 52, 46, 40, 34,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 26"," 28"," 30","28"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 40, 40, 47, 47, 54,...Whatnumber should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 40"," 44"," 54"," 61"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: 544, 509, 474, 439,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":["404"," 414","420","445"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: 201, 202, 204, 207,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 205"," 208"," 210"," 211"],"CorrectAnswer":"4"},{"QuestionBody":"Look at this series: 8, 22, 8, 28, 8, ...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 9"," 29"," 32"," 34"],"CorrectAnswer":"4"},{"QuestionBody":"Look at this series: 80, 10, 70, 15, 60,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 20"," 25"," 30"," 50"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: 36, 34, 30, 28, 24,...Whatnumber should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 20","22"," 23"," 26"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 22, 21, 23, 22, 24, 23 What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 22"," 24"," 25"," 26"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: 3, 4, 7, 8, 11, 12,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 7"," 10"," 14"," 15"],"CorrectAnswer":"4"},{"QuestionBody":"Look at this series: 31, 29, 24, 22, 17, ...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 15","14","13","12"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: 21, 9, 21, 11, 21, 13,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 14"," 15"," 21"," 23"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: 7, 10, 8, 11, 9, 12, ...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 7","10"," 12"," 13"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 14, 28, 20, 40, 32, 64,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 52"," 56"," 96"," 128"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 1,000, 200, 40,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 8"," 10"," 15"," 20"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: 1.5, 2.3, 3.1, 3.9,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 4.2"," 4.4"," 4.7"," 5.1"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: 5.2, 4.8, 4.4, 4,...What number should come next?","QuestionDegree":"10","QuestionType":"1","Answers":[" 3"," 3.3"," 3.5"," 3.6"],"CorrectAnswer":"4"},{"QuestionBody":"84 78 72 66 60 54 48","QuestionDegree":"10","QuestionType":"1","Answers":["44 34"," 42 36"," 42 32"," 40 34"],"CorrectAnswer":"2"},{"QuestionBody":"3 8 13 18 23 28 33","QuestionDegree":"10","QuestionType":"1","Answers":[" 39 44"," 38 44"," 38 43"," 37 42"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: 8, 43, 11, 41, __, 39, 17,...What number should ?ll in the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 8"," 14"," 43"," 44"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 15, __, 27, 27, 39, 39,...What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 51"," 39"," 23"," 15"],"CorrectAnswer":"4"},{"QuestionBody":"Look at this series: 83, 73, 93, 63, __, 93, 43, . . What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 33"," 53"," 73"," 93"],"CorrectAnswer":"2"},{"QuestionBody":"Look at this series: 4, 7, 25, 10, __, 20, 16, 19,...What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 13"," 15"," 20"," 28"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: 72, 76, 73, 77, 74, __, 75,...What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 70"," 71","75"," 78"],"CorrectAnswer":"4"},{"QuestionBody":"Look at this series: 70, 71, 76, __, 81, 86, 70, 91,...What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 70"," 71"," 80"," 96"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: 664, 332, 340, 170, __, 89,...What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 85"," 97"," 109"," 178"],"CorrectAnswer":"4"},{"QuestionBody":"Look at this series: 0.15, 0.3, __, 1.2, 2.4, . . .What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" 4.8"," 0.006"," 0.6"," 0.9"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: U32, V29, __, X23, Y20, . . .What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" W26"," W17"," Z17"," Z26"],"CorrectAnswer":"1"},{"QuestionBody":"Look at this series: F2, __, D8, C16, B32, . . .What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" A16"," G4"," E4"," E3"],"CorrectAnswer":"3"},{"QuestionBody":"Look at this series: J14, L16, __, P20, R22, . . .What number should ?ll the blank?","QuestionDegree":"10","QuestionType":"1","Answers":[" S24"," N18"," M18"," T24"],"CorrectAnswer":"2"},{"QuestionBody":" Which one of the five is least like the other four?","QuestionDegree":"5","QuestionType":"1","Answers":["a-Dog","b-Mouse","c-Lion","d-Snake"],"correctanswer":"1"},{"QuestionBody":" Which number should come next in the series? 1 - 1 - 2 - 3 - 5 - 8 - 13","QuestionDegree":"5","QuestionType":"1","Answers":["a-8","b-13","c-21","d-26"],"correctanswer":"3"},{"QuestionBody":" Which one of the five choices makes the best comparison? PEACH is to HCAEP as 46251 is to:","QuestionDegree":"5","QuestionType":"1","Answers":["a-15264","b-23456","c-56323","d-12345"],"correctanswer":"1"},{"QuestionBody":" Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?","QuestionDegree":"5","QuestionType":"1","Answers":["a-20","b-24","c-25","d-22"],"correctanswer":"2"},{"QuestionBody":" Which one of the numbers does not belong in the following series?2 - 3 - 6 - 7 - 8 - 14 - 15 - 30","Answers":["a-3","b-8","c-15","d-14"],"correctanswer":"2"},{"QuestionBody":" Which one of the five choices makes the best comparison? Finger is to Hand as Leaf is to:","QuestionDegree":"5","QuestionType":"1","Answers":["a-Twig","b-Tree","c-Branch","d-Bark"],"correctanswer":"1"},{"QuestionBody":" Choose the number that is 1/4 of 1/2 of 1/5 of 200:","QuestionDegree":"5","QuestionType":"1","Answers":["a-5","b-20","c-4","d-15"],"correctanswer":"1"},{"QuestionBody":" If you rearrange the letters ( CIFAIPC ) you would have the name of a(n):","QuestionDegree":"5","QuestionType":"1","Answers":["a-River","b-Animal","c-Ocean","d-City"],"correctanswer":"3"},{"QuestionBody":" John needs 13 bottles of water from the store. John can only carry 3 at a time. What is the minimum number of trips John needs to make to the store?","QuestionDegree":"5","QuestionType":"1","Answers":["a-3","b-5","c-4","d-2"],"correctanswer":"2"},{"QuestionBody":" choose the word most similar to Trustworthy:","QuestionDegree":"5","QuestionType":"1","Answers":["a-Reliable","b-Relevant","c-Resolute","d-Insolent"],"correctanswer":"1"},{"QuestionBody":" If you rearrange the letters ( LNGEDNA ) you have the name of a(n):","QuestionDegree":"5","QuestionType":"1","Answers":["a-Country","b-state","c-City","d-Ocean"],"correctanswer":"1"},{"QuestionBody":" Which one of the numbers does not belong in the following series? 1 - 2 - 5 - 10 - 13 - 26 - 29 - 48","QuestionDegree":"5","QuestionType":"1","Answers":["a-1","b-5","c-48","d-40"],"correctanswer":"3"},{"QuestionBody":" Ralph likes 25 but not 24; he likes 400 but not 300; he likes 144 but not 145. Which does he like:","QuestionDegree":"5","QuestionType":"1","Answers":["a-10","b-50","c-1600","d-40"],"correctanswer":"3"},{"QuestionBody":" What is the missing number in the sequence shown below?  1 - 8 - 27 - ? - 125 - 216","QuestionDegree":"5","QuestionType":"1","Answers":["a-64","b-10","c-100","d-4"],"correctanswer":"1"},{"QuestionBody":" Which one of the following things is the least like the others?","QuestionDegree":"5","QuestionType":"1","Answers":["a-Flower","b-Novel","c-State","d-paint"],"correctanswer":"1"},{"QuestionBody":" What number should replace the question mark( 0, 4, 2, 6, 3, 7, 3.5, ? )","QuestionDegree":"5","QuestionType":"1","Answers":["a-7.5","b-4","c-7","d-9"],"correctanswer":"1"},{"QuestionBody":" Please enter the missing number:( 4, 8, 14, 22, ?)","QuestionDegree":"5","QuestionType":"1","Answers":["a-28","b-32","c-11","d-10"],"correctanswer":"4"},{"QuestionBody":" One word in this list does not belong to the same group: Pound, Franc, Penny, Mark.","QuestionDegree":"5","QuestionType":"1","Answers":["a-Mark","b-Pound","c-Franc","d-Penny"],"correctanswer":"2"},{"QuestionBody":" There are 12 pens on the table, you took 3, how many do you have?","QuestionDegree":"5","QuestionType":"1","Answers":["a-7","b-6","c-0","d-3"],"correctanswer":"1"},{"QuestionBody":" What is the number that is one half of one quarter of one tenth of 480?","QuestionDegree":"5","QuestionType":"1","Answers":["a-24","b-16","c-6","d-12"],"correctanswer":"4"},{"QuestionBody":" Which number should come next in this series(25,24,22,19,15) ? ","QuestionDegree":"5","QuestionType":"1","Answers":["a-20","b-10","c-60","d-12"],"correctanswer":"2"},{"QuestionBody":" At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred? ","QuestionDegree":"5","QuestionType":"1","Answers":["a-132","b-100","c-212","d-124"],"correctanswer":"1"},{"QuestionBody":" The day after the day after tomorrow is four days before Monday. What day is it today? ","QuestionDegree":"5","QuestionType":"1","Answers":["a-Monday","b-Friday","c-Wednesday","d-Tuesday"],"correctanswer":"1"},{"QuestionBody":" 6121135 is to flame as 21215120 is to ?","QuestionDegree":"5","QuestionType":"1","Answers":["a-castle","b-bald","c-voice","d-bloat"],"correctanswer":"4"},{"QuestionBody":" Forest is to tree as tree is to ?","QuestionDegree":"5","QuestionType":"1","Answers":["a-plant","b-mangrove","c-leaf","d-branch"],"correctanswer":"3"},{"QuestionBody":" Rearrange the following letters to make a word and choose the category in which it fits (RAPETEKA) ?","QuestionDegree":"5","QuestionType":"1","Answers":["a-city","b-bird","c-fruit","d-vegetable"],"correctanswer":"2"},{"QuestionBody":"  Which number should come next in this series 10, 17, 26, 37, ? ","QuestionDegree":"5","QuestionType":"1","Answers":["a-56","b-50","c-52","d-48"],"correctanswer":"2"},{"QuestionBody":" Rearrange the following letters to make a word and choose the category in which it fits (FADLOFDI) ","QuestionDegree":"5","QuestionType":"1","Answers":["a-city","b-bird","c-flower","d-vegetable"],"correctanswer":"3"},{"QuestionBody":" Find the answer that best completes the analogy ( FRUGAL : MISERLY :: RASH :  ? )","QuestionDegree":"5","QuestionType":"1","Answers":["a-arrogant","b-profligate","c-spendthrift","d-foolhardy"],"correctanswer":"4"},{"QuestionBody":" Which one of the sets of letters below can be arranged into a five letter English word.","QuestionDegree":"5","QuestionType":"1","Answers":["a-a t r u n","b-p o d e b","c-t e c a r","d-m o h a t"],"correctanswer":"3"}]}}';
        var loadNum = 1;
        var min = 15;
        var sec = 00;
        var IQMin = 0;
		var IQSec = 0;
        var arrLength = 30;
        var loadNum =1;
        var obj;
        var obj = JSON.parse(JsonStrIQ);
        var exam = obj.Exam;
        var first , prev , next , last, maindiv,timeDiv;
        var startTimer;
        var getId=0;
        var setId=0;
        var setmMarkId=0;
        var obj_exam1;
        var obj_exam2;
        var arrSkippQue=new Array(30);
        var arrflageQue=new Array(30);
/*****************************************designed by salama **************************************************/

function reloadExam()
{
    loadNum =2;
    min = 10;
    sec = 00;
    startTimer =setInterval('timeCount()',1000);
    var arrLength = 20;
    loadNum = 2;
     index = arr[0];
     i=0;
    maindiv = document.getElementById("divExam");
    swal("Be Ready!","English Exam will start.","success");
    obj = JSON.parse(JsonStrEng);
    exam = obj.Exam; 
    logo.innerHTML = "English Exam";
    drawQuset(index,i+1);
    timeDiv = document.getElementById("timer");
    var end = arr[arrLength-1];
        $("#fbtn").addClass('btn-disable');
        $("#nbtn").removeClass('btn-disable');
        $("#pbtn").addClass('btn-disable');
        $("#lbtn").removeClass('btn-disable');
        $("#flag").removeClass('btn-disable');
        $("#finish").removeClass('btn-disable');
        $("td input[name='answer']").removeClass('btn-disable');

                
}
//*********************************************************///the two type Question*****************************************************
        // ***************************** update by " Abanoub "  please Don't remove commit   **********************

        function drawQuset(idx,num)
        {
            if (loadNum==2)

            {
                 arrLength = 20;
                  logo.innerHTML = "English Exam";
            }
            Q = exam.Questions[idx];
            if (Q.QuestionType==1)
            {

                var HTMLtxt = '<table width="90%">'
                HTMLtxt +='<tr><td><h2>Question No.<span style="color:#dd31ae">'+ (num)+' </span> / <span style="color:#dd31ae">'+arrLength+'</span></h2>';
                HTMLtxt +='<td> Degree: <span style="color:#dd31ae">'+Q.QuestionDegree+'</span></td><input type="checkbox" id="flag">';
                HTMLtxt +='<div id="massage">press flage to skip this question and we will remind you with it , you can also check for all your skipped Ques on the Queue Sector</input></div></td></tr>'
                HTMLtxt +='<tr><td colspan="2"><h3>'+Q.QuestionBody+'</h3></td></tr>'
                HTMLtxt +='<tr><td><input type="radio" name="answer"  id="1"<span>'+Q.Answers[0]+'</span></td>'
                HTMLtxt +='<td><input type="radio" name="answer" id="2"<span>'+Q.Answers[1]+'</span></td></tr>'
                HTMLtxt +='<tr><td><input type="radio" name="answer" id="3"<span>'+Q.Answers[2]+'</span></td>'
                HTMLtxt +='<td><input type="radio" name="answer" id="4"<span>'+Q.Answers[3]+'</span></td></tr>'
                HTMLtxt+='</table><hr/>'
                maindiv.innerHTML = HTMLtxt;
            }

            else
            {
                var HTMLtxt = '<table width="90%">'
                HTMLtxt +='<tr><td><h2>Question No.<span style="color:#dd31ae">'+ (num)+' </span> / <span style="color:#dd31ae">'+arrLength+'</span></h2>';
                HTMLtxt +='<td> Degree: <span style="color:#dd31ae">'+Q.QuestionDegree+'</span></td><input type="checkbox" id="flag">';
                HTMLtxt +='<div id="massage">press flage to skip this question and we will remind you with it , you can also check for all your skipped Ques on the Queue Sector</input></div></td></tr>'
                HTMLtxt +='<tr><td colspan="2"><h3>'+Q.QuestionBody+'</h3></td></tr>'
                HTMLtxt +='<tr><td><input type="radio" name="answer" id="1"<span>'+Q.Answers[0]+'</span></td>'
                HTMLtxt +='<td><input type="radio" name="answer" id="2"<span>'+Q.Answers[1]+'</span></td></tr>'
                HTMLtxt+='</table><hr/>'
                maindiv.innerHTML = HTMLtxt;
            }
        }

//**************************************************************************************************************

/*************************************** timer and finish function  designed by Salama *********************************************************/
        function timeCount()
        {
            if(sec ==00)
            {
                min--;
                sec = 59;
            }
            else
            {
                sec--;
            }
            if(min<=9&&sec>9) //in case of one digite write 0 before number
            {
                document.title = ("0"+min+":"+sec);
                timeDiv.innerHTML="<b>Time: </b>0"+min+":"+sec;
            }
            else if(min<=9&&sec<=9) //in case of one digite write 0 before number
            {
                document.title = ("0"+min+":0"+sec);
                timeDiv.innerHTML="<b>Time: </b>0"+min+":0"+sec;
            }
            else if(min>9&&sec<=9) //in case of one digite write 0 before number
            {
                document.title = (min+":0"+sec);
                timeDiv.innerHTML="<b>Time: </b>"+min+":0"+sec;
            }
            else  //in case of two digite
            {
                document.title = (+min+":"+sec);
                timeDiv.innerHTML="<b>Time: </b>"+min+":"+sec;
            }
            if(min == 0 && sec == 0)
            {
                clearInterval(startTimer);
                $("#fbtn").addClass('btn-disable');
                $("#nbtn").addClass('btn-disable');
                $("#pbtn").addClass('btn-disable');
                $("#lbtn").addClass('btn-disable');
                $("#finish").addClass('btn-disable');
                $("td input[name='answer']").addClass('btn-disable');
                if(loadNum == 1) /*if first exam finished */
                {
                     var skip=$("#divQues").children();
                    skip.remove();
                    var flag=$("#divMark").children();
                    flag.remove();
                    loadNum=2;
                    swal
                        (
                            {
                                  title: "Oops...",
                                  text: "Time Is Out!...",
                                  type: "error",
                                  showCancelButton: false,
                                  confirmButtonColor: "#DD6B55",
                                  confirmButtonText: "OK!",
                                  closeOnConfirm: false,
                                  html: false
                            }, function()
                            {

                              swal("Done!",
                              "you will be redirect to english exam in about 10 sec.",
                              "success");
                            }
                        );
                    IQSec = sec;
					IQMin = min;
                    setTimeout('reloadExam()', 5000);
                }
                else /*if second exam finished*/
                {
                    swal
                        (
                            {
                                  title: "Oops...",
                                  text: "Time Is Out! ... ",
                                  type: "error",
                                  showCancelButton: false,
                                  confirmButtonColor: "#DD6B55",
                                  confirmButtonText: "OK!",
                                  closeOnConfirm: false,
                                  html: false
                            }, function()
                            {

                              swal("Done!",
                              "Please wait for your result in about 5 sec.",
                              "success");
                            }
                        );
                    result_exam();
                }

            }
        }
/*******************************************************************************************************************/
/*************************************** // normilization function designed and created by Ahmed salama **********************************************************/

        var arr = new Array(arrLength);
        var count = 0;

            do
            {
                var x =(Math.floor(Math.random()*arrLength));
                    for(j=0 ; j<arr.length ; j++)
                    {
                        if (arr[j] == x)
                        {
                            break;
                        }
                    }
                    if(j==arr.length)
                    {
                        arr[count] = x;
                            count++;
                    }
            }while(count<arrLength)
        var i=0;
        var index = arr[i];
        var result_searchSkippe=0;
        var result_searchFlage=0;
/*******************************************************************************************************************/
/*************************************** // onload function designed and created by Ahmed salama **********************************************************/

        $(function()
        {
            startTimer =setInterval('timeCount()',1000);
            timeDiv = document.getElementById("timer");
            var end = arr[arrLength-1];
                $("#fbtn").addClass('btn-disable');
                $("#nbtn").removeClass('btn-disable');
                $("#pbtn").addClass('btn-disable');
                $("#lbtn").removeClass('btn-disable');
                $("#flag").removeClass('btn-disable');
                $("#fbtn").click(function(event)  // button first
                {
                    getId=$(":radio:checked").prop("id"); //get id of answer whice checked if exsist
                    if(getId == null)
                    {
                        result_searchSkippe=Search_skippeQue(index);
                        if (result_searchSkippe==0)
                            {

                                arrSkippQue[i]=index;
                                drawSkip(index,i+1);

                            }

                    }
                    else
                    {
                        getMarkId=$(":checkbox:checked").prop("id"); //get id of answer whice checked if exsist
                        if(getMarkId )
                        {
                            result_searchFlage=Search_flageQue(index);
                            if (result_searchFlage==0)
                            {
                                arrflageQue[i]=index;
                                drawMark(index,i+1);
                            }

                        }

                    }

                    exam.Questions[index].choice=getId; //add new attribute on array of question
                    // if he choose mark
                    i=0;
                    index = arr[i];
                    drawQuset(index,i+1);
                    setId=exam.Questions[index].choice // get the id of the answer
                    if(exam.Questions[index].choice) // if user choose answer befor
                    {
                        $("#"+setId).prop('checked',true); // show user his perivous answer
                    }
                    $(this).addClass('btn-disable');
                    $("#nbtn").removeClass('btn-disable');
                    $("#pbtn").addClass('btn-disable');
                    $("#lbtn").removeClass('btn-disable');
                })

                $("#nbtn").click(function(event)  // button next
                {
                    getId=$(":radio:checked").prop("id"); //get id of answer whice checked if exsist
                    if(getId == null)
                    {
                        result_searchSkippe=Search_skippeQue(index);
                        if (result_searchSkippe==0)
                            {

                                arrSkippQue[i]=index;
                                drawSkip(index,i+1);
                            }

                    }

                    else
                    {
                        getMarkId=$(":checkbox:checked").prop("id"); //get id of answer whice checked if exsist
                        if(getMarkId )
                        {
                            result_searchFlage=Search_flageQue(index);
                            if (result_searchFlage==0)
                            {
                                arrflageQue[i]=index;
                                drawMark(index,i+1);
                            }
                        }

                    }

                    exam.Questions[index].choice=getId; //add new attribute on array of question
                    console.log(exam.Questions[index]);
                    i++;
                    index=arr[i];
                    drawQuset(index,i+1);
                    setId=exam.Questions[index].choice // get the id of the answer
                    if(exam.Questions[index].choice) // if user choose answer befor
                    {
                        $("#"+setId).prop('checked',true); // show user his perivous answer
                    }
                    if(i == (arrLength-1))
                    {

                        $("#fbtn").removeClass('btn-disable');
                        $(this).addClass('btn-disable');
                        $("#pbtn").removeClass('btn-disable');
                        $("#lbtn").addClass('btn-disable');
                    }
                    else
                    {
                        $("#fbtn").removeClass('btn-disable');
                            $(this).removeClass('btn-disable');
                        $("#pbtn").removeClass('btn-disable');
                        $("#lbtn").removeClass('btn-disable');
                    }
                })

                $("#pbtn").click(function(event)  // button prev
                {
                    getId=$(":radio:checked").prop("id"); //get id of answer whice checked if exsist
                    if(getId == null)
                    {
                        result_searchSkippe=Search_skippeQue(index);
                        if (result_searchSkippe==0)
                            {

                                arrSkippQue[i]=index;
                                drawSkip(index,i+1);
                            }
                    }

                    else
                    {
                        getMarkId=$(":checkbox:checked").prop("id"); //get id of answer whice checked if exsist
                        if(getMarkId )
                        {

                            result_searchFlage=Search_flageQue(index);
                            if (result_searchFlage==0)
                            {
                                arrflageQue[i]=index;
                                drawMark(index,i+1);
                            }
                        }

                    }
                    exam.Questions[index].choice=getId; //add new attribute on array of question
                    i--;
                    index = arr[i];
                    drawQuset(index,i+1);
                    setId=exam.Questions[index].choice // get the id of the answer
                    if(exam.Questions[index].choice) // if user choose answer befor
                    {
                        $("#"+setId).prop('checked',true); // show user his perivous answer
                    }
                    if(i==0)
                    {
                        $("#fbtn").addClass('btn-disable');
                            $("#nbtn").removeClass('btn-disable');
                        $(this).addClass('btn-disable');
                        $("#lbtn").removeClass('btn-disable');

                    }
                    else
                    {
                        $("#fbtn").removeClass('btn-disable');
                            $("#nbtn").removeClass('btn-disable');
                        $("#pbtn").removeClass('btn-disable');
                        $("#lbtn").removeClass('btn-disable');
                    }
                })

                $("#lbtn").click(function(event)  // button last
                {
                    getId=$(":radio:checked").prop("id"); //get id of answer whice checked if exsist
                    if(getId == null)
                    {
                        result_searchSkippe=Search_skippeQue(index);
                        if (result_searchSkippe==0)
                            {
                                arrflageQue[i]=index;
                                drawSkip(index,i+1);
                            }
                    }
                    else
                    {
                        getMarkId=$(":checkbox:checked").prop("id"); //get id of answer whice checked if exsist
                        if(getMarkId )
                        {
                            result_searchFlage=Search_flageQue(index);
                            if (result_searchFlage==0)
                            {
                                arrflageQue[i]=index;
                                drawMark(index,i+1);
                            }
                        }

                    }
                    exam.Questions[index].choice=getId; //add new attribute on array of question
                    i = arrLength-1;
                    index=arr[i];
                    drawQuset(index,i+1);
                    setId=exam.Questions[index].choice // get the id of the answer
                    if(exam.Questions[index].choice) // if user choose answer befor
                    {
                        $("#"+setId).prop('checked',true); // show user his perivous answer
                    }
                    $("#fbtn").removeClass('btn-disable');
                    $("#nbtn").addClass('btn-disable');
                      $("#pbtn").removeClass('btn-disable');
                       $(this).addClass('btn-disable');
                })
                //******************************** count resulte edit by abanoub ******************************************************************************

                    $("#Div_resalut").css('display', 'none');
                    function result_exam()

                        {
                            logo.innerHTML = "Resulte Of English Exam";
                            $("#Div_Body_Exam").css('display', 'none');
                            $("#Div_resalut").css({
                                display: 'block',
                                margin: '0px auto',
                                padding:'10px',
                                color:'red',
                                textAlign:'center'
                            });
                            $("table.parent").addClass('Div_resalut');
                            var Correct_Answer;
                            var User_Answer;
                            var cor="Correct";
                            var fal="Rong";
                            var result_contact;
                            result_contact = document.getElementById("table_result");
    /********************************************print time********************************************/

                            time_result = document.getElementById("resultCount");
							if(loadNum == 1)
							{
								IQMin = 14-IQMin;
                                IQSec = 60-IQSec;
								if(IQMin<=9 && IQSec>9) //in case of one digite write 0 before number
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>0'+ IQMin +':'+IQSec+'</td></tr>'
								}
								else if(IQMin <=9 && IQSec<=9) //in case of one digite write 0 before number
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>0'+ IQMin+':0'+IQSec+'</td></tr>'
								}
								else if(IQMin >9&& IQSec<=9) //in case of one digite write 0 before number
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>'+ IQMin +':0'+IQSec+'</td></tr>'

								}
								else  //in case of two digite 
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>'+ IQMin+':'+IQSec+'</td></tr>'
								}
							}
							else
							{
								if((10-min)<=9&&(60-sec)>9) //in case of one digite write 0 before number
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>0'+ (9-min)+':'+(60-sec)+'</td></tr>'
								}
								else if((10-min)<=9&&(60-sec)<=9) //in case of one digite write 0 before number
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>0'+ (9-min)+':0'+(60-sec)+'</td></tr>'
								}
								else if((10-min)>9&&(60-sec)<=9) //in case of one digite write 0 before number
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>'+ (9-min)+':0'+(60-sec)+'</td></tr>'

								}
								else  //in case of two digite 
								{
									HTMLtxtTime='<tr><th> Time of Exam </th><td>'+ (9-min)+':'+(60-sec)+'</td></tr>'
								}
							}
							time_result.innerHTML = HTMLtxtTime;
    /********************************************print degree********************************************/

                            var answerQuestions = 0;
							var degrees=0;
							var percent=0;
							var skippedQuestion = 0
							HTMLtxt="";
                            HTMLtxt="<tr ><th>No.</th><th>Questions</th><th>Correct Answer</th><th>Your Answer</th><th>T/F</th></tr>";
                            result_contact.innerHTML = HTMLtxt;
                            if (loadNum == 1) 
                            {  
                                object=obj;
                                    for (var i = 0; i < arr.length; i++) 
        							{
        								Correct_Answer=object.Exam.Questions[arr[i]].CorrectAnswer;
        								User_Answer=object.Exam.Questions[arr[i]].choice;
        								if (Correct_Answer == User_Answer) 
        								{
        									degrees+= parseInt(object.Exam.Questions[arr[i]].QuestionDegree);
        								}
        								percent += parseInt(object.Exam.Questions[arr[i]].QuestionDegree);
                                        if (object.Exam.Questions[arr[i]].choice==0) 
        								{
        									skippedQuestion++;
        								}
        							}

        							var HTMLtxtDegree='<tr><th> Degree  </th><td>'+ degrees+'/'+percent+'</td></tr>';
        							time_result.innerHTML += HTMLtxtDegree;
                                    var percent = ((degrees/percent)*100).toFixed(2);
        							if (percent>=60)
        							{
        								$('#time_result').css({
        									backgroundImage: 'url(images/a.png)',
            								backgroundRepeat: 'none'
        								});
        							}
        							else
        							{
        								$('#time_result').css({
        									backgroundImage: 'url(images/b.png)',
            								backgroundRepeat: 'none'
        								});
        							}
        							var HTMLtxtPercent='<tr><th> Percent  </th><td>'+ percent+'%</td></tr>';
        							time_result.innerHTML += HTMLtxtPercent;
        							var HTMLtxtSkipped='<tr><th> No. of Skipped Questions  </th><td>'+ (20-skippedQuestion)+'</td></tr>';
        							HTMLtxtSkipped+='<tr><td>Go to IQ Exam Result</td><td><input type="button" name="Resulte" value="IQ"/></td></td>'

                                    time_result.innerHTML += HTMLtxtSkipped;

        	/********************************************print questions********************************************/

        							for (var i = 0; i < arr.length; i++) 
        							{
        								Correct_Answer=object.Exam.Questions[arr[i]].CorrectAnswer;
        								User_Answer=object.Exam.Questions[arr[i]].choice;
        								var HTMLtxt = '<tr>'
        								HTMLtxt+='<td>'+(i+1)+'</td>'
        								HTMLtxt+='<td>'+ object.Exam.Questions[arr[i]].QuestionBody+'</td>'
        								HTMLtxt+='<td>'+ object.Exam.Questions[arr[i]].CorrectAnswer+'</td>'
        								if (User_Answer)
        								{HTMLtxt+='<td>'+ object.Exam.Questions[arr[i]].choice+'</td>'}
        								else
        								{
        									HTMLtxt+='<td><img src="images/3.png" width="20px" heigt="20px"></td>'
        								}
        								if (Correct_Answer == User_Answer) 
        								{
        									HTMLtxt+='<td><img src="images/2.png" width="20px" heigt="20px"></td>'
        								} 
        								else
        								{
        									HTMLtxt+='<td><img src="images/1.png" width="20px" heigt="20px"></td>'
        								};
        								HTMLtxt+='</tr>'	
        								result_contact.innerHTML += HTMLtxt;

        													
        							};

                             }// end if (loadnum==1)
                            else
                            {   
                            logo.innerHTML = "Resulte Of IQ Exam";
                                object=obj_exam1;
                           
                                    for (var i = 0; i < arr.length; i++) 
                                    {
                                        Correct_Answer=object.Exam.Questions[arr[i]].CorrectAnswer;
                                        User_Answer=object.Exam.Questions[arr[i]].choice;
                                        if (Correct_Answer == User_Answer) 
                                        {
                                            degrees+= parseInt(object.Exam.Questions[arr[i]].QuestionDegree);
                                        }
                                        percent += parseInt(object.Exam.Questions[arr[i]].QuestionDegree);
                                        if (object.Exam.Questions[arr[i]].choice) 
                                        {
                                            skippedQuestion++;
                                        }
                                        
                                    }

                                    var HTMLtxtDegree='<tr><th> Degree  </th><td>'+ degrees+'/'+percent+'</td></tr>';
                                    time_result.innerHTML += HTMLtxtDegree;
                                    var percent = ((degrees/percent)*100).toFixed(2);
                                    if (percent>=60)
                                    {
                                        $('#time_result').css({
                                            backgroundImage: 'url(images/a.png)',
                                            backgroundRepeat: 'none'
                                        });
                                    }
                                    else
                                    {
                                        $('#time_result').css({
                                            backgroundImage: 'url(images/b.png)',
                                            backgroundRepeat: 'none'
                                        });
                                    }
                                    var HTMLtxtPercent='<tr><th> Percent  </th><td>'+ percent+'%</td></tr>';
                                    time_result.innerHTML += HTMLtxtPercent;
                                    var HTMLtxtSkipped='<tr><th> No. of Skipped Questions  </th><td>'+ (30-skippedQuestion)+'</td></tr>';
                                    HTMLtxtSkipped+='<tr><td>Go to English Exam Result</td><td><input type="button" name="Resulte" value="English"/></td></td>'
                                    time_result.innerHTML += HTMLtxtSkipped;
            /********************************************print questions********************************************/

                                    for (var i = 0; i < arr.length; i++) 
                                    {
                                        Correct_Answer=object.Exam.Questions[arr[i]].CorrectAnswer;
                                        User_Answer=object.Exam.Questions[arr[i]].choice;
                                        var HTMLtxt = '<tr>'
                                        HTMLtxt+='<td>'+(i+1)+'</td>'
                                        HTMLtxt+='<td>'+ object.Exam.Questions[arr[i]].QuestionBody+'</td>'
                                        HTMLtxt+='<td>'+ object.Exam.Questions[arr[i]].CorrectAnswer+'</td>'
                                        if (User_Answer)
                                        {HTMLtxt+='<td>'+ object.Exam.Questions[arr[i]].choice+'</td>'}
                                        else
                                        {
                                            HTMLtxt+='<td><img src="images/3.png" width="20px" heigt="20px"></td>'
                                        }
                                        if (Correct_Answer == User_Answer) 
                                        {
                                            HTMLtxt+='<td><img src="images/2.png" width="20px" heigt="20px"></td>'
                                        } 
                                        else
                                        {
                                            HTMLtxt+='<td><img src="images/1.png" width="20px" heigt="20px"></td>'
                                        };
                                        HTMLtxt+='</tr>'    
                                        result_contact.innerHTML += HTMLtxt;

                                                            
                                    };

                             }// end  else

                            $("input[name='Resulte']").click(function(event)
                             {
                                if (loadNum == 1) 
                                        {
                                            swal("Done!","English Exam Result.","success");
                                            loadNum=2;
                                            result_exam();
                                        } 
                                    else 
                                        {    
                                            swal("Done!","IQ Exam Result.","success");
                                            loadNum = 1;
                                            result_exam();
                                        }   

                            });
							$('tr:odd').css({
									backgroundColor: '#f9f9f9',
									padding: '5px',
									color:'#45303f',
									textAlign:'center'

								});
								
								$('tr:even').css({
									backgroundColor: '#ddd',
									padding: '5px',
									color:'#45303f',
									textAlign:'center'

								});
                                $('td input').css({
                                    margin: '5px 0px 5px 130px',

                                });
							
							
						}
        /*******************************************************************************************************************/
                $("#finish").click(function(event)  // button last
                {
                    exam.Questions[index].choice=getId;
                    clearInterval(startTimer);

                    $("#fbtn").addClass('btn-disable');
                       $("#nbtn").addClass('btn-disable');
                       $("#pbtn").addClass('btn-disable');
                       $("#lbtn").addClass('btn-disable');
                       $("#flag").addClass('btn-disable');
                    $("td input[name='answer']").addClass('btn-disable');

                    $(this).addClass('btn-disable');
                    $("td input[name='answer']").removeClass('btn-disable');

                    if(loadNum == 1) /*if first exam finished */
                    {
                        obj_exam1=obj;
                        var skip=$("#divQues").children();
                        skip.remove();
                        var flag=$("#divMark").children();
                        flag.remove();
                        swal
                        (
                            {
                                  title: "Are you sure?",
                                  text: "You will not be able to get back to this exam!?",
                                  type: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#DD6B55",
                                  confirmButtonText: "Yes, go to English Exam!",
                                  closeOnConfirm: false,
                                  html: false
                            }, function()
                            {

                              swal("Done!",
                              "you will be redirect to english exam in about 5 sec.",
                              "success");
                            }
                        );
                        IQSec = sec;
                        IQMin = min;
                        loadNum =2;
                        setTimeout('reloadExam()', 5000);

                    }
                    else /*if second exam finished*/
                    {
                        obj_exam2=obj;
                        swal
                        (
                            {
                                 title: "Are you sure?",
                                  text: "You will not be able to get back to this exam!?",
                                  type: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#DD6B55",
                                  confirmButtonText: "Yes, End it!",
                                  closeOnConfirm: false,
                                  html: false
                            }, function()
                            {
                               swal("Done!",
                              "Your Resulte is counted now please wait.",
                              "success");
                            }
                        );
                        result_exam();
                    }
                })

                logo = document.getElementById("logo");
                logo.innerHTML = "IQ Exam";

                index = arr[0];
                maindiv = document.getElementById("divExam");
                drawQuset(index,i+1);
/*******************************************************************************************************************/
/*************************************** // skipped questions function designed and created by abanoub **********************************************************/

                var maindiv2 = document.getElementById("divQues");
                function drawSkip(indx,no)
                {

                    var Q = exam.Questions[indx];
                    var HTMLtxt2 = '<div width="90%" id="_'+(indx+1)+'" name="QuesButtomHover">'
                    HTMLtxt2 +='<h2><input type="button" name="'+indx+'" id="'+no+'" onclick="flig('+indx+')"  value="Question:'+(no)+'">';//
                    HTMLtxt2 +='<div id="massage">this question didn`t answerd ,click on it to go back </div></input></h2></div>'; //2- add massage on hover of question to till user what is this
                    HTMLtxt2 +='</input></h2></div>';
                    maindiv2.innerHTML += HTMLtxt2;

                    var h=$("#divQues input[type='button']")
                    console.log(h);

                }
            /*var QuesButtomHover = document.getElementsByName("QuesButtomHover"); //4- function of mouse hover and out of skipped questionn
            var massage = document.getElementById("massage");
            QuesButtomHover.onmouseover=function() //3- function of mouse hover and out of massages
            {
                massage.style.display="block";
            }
            QuesButtomHover.onmouseout=function()
            {
                massage.style.display="none";
            }
    //8-draw mark
    /*******************************************************************************************************************/
/*************************************** // marked questions function designed and created by Salama**********************************************************/

    function drawMark(indxs,nos)
        {
            var Q = exam.Questions[indxs];
            var HTMLtxt3 = '<div width="90%" id="QuesMarkHover">'
            HTMLtxt3 +='<dive id="_2_'+(indxs+1)+'"><h2><input type="button" name="'+indxs+'" id="'+nos+'" onclick="mark('+indxs+')"  value="Question:'+(nos)+'"></div>';//
            HTMLtxt3+='<div id="QuesMarkmassage">this question didn`t answerd ,click on it to go back </div></input></h2></div>'; //2- add massage on hover of question to till user what is this
            divMark.innerHTML += HTMLtxt3;
        }
        var QuesMarkHover = document.getElementById("QuesMarkHover")
        var QuesMarkmassage = document.getElementById("QuesMarkmassage");
            /*QuesMarkHover.onmouseover=function() //3- function of mouse hover and out of massages
            {
                QuesMarkmassage.style.display="block";
            }
            QuesMarkHover.onmouseout=function()
            {
                QuesMarkmassage.style.display="none";
            }*/
        });//end of ONLOAD FUNCTION
    function flig(index)
                {
                    var id_input=$('#_'+(index+1)+' '+'input[name="'+index+'"]').prop("id");
                    $('#_'+(index+1)).remove();
                    Delete_skippeQue(index);
                    drawQuset(index,id_input);
                }

//9- function mark
            function mark(index)
                {
                    var id_input=$('#_2_'+(index+1)+' '+'input[name="'+index+'"]').prop("id");
                    $('#_2_'+(index+1)).remove();
                    Delete_flageQue(index);
                    drawQuset(index,id_input);
                }

                function Search_skippeQue(index)
                {
                    for (var i = 0; i < arrSkippQue.length; i++)
                     {

                             if (arrSkippQue[i]==index)
                                 {
                                     return 1;
                                 }
                     }

                     return 0;
                }

                function Delete_skippeQue(index)
                {
                    for (var i = 0; i < arrSkippQue.length; i++)
                     {

                             if (arrSkippQue[i]==index)
                                 {
                                     arrSkippQue[i]=null;

                                 }
                     }


                 }

                function Search_flageQue(index)
                {
                    for (var i = 0; i < arrflageQue.length; i++)
                     {
                             if (arrflageQue[i]==index)
                                 {
                                     return 1;
                                 }

                     }
                         return 0;
                }


                function Delete_flageQue(index)
                {
                    for (var i = 0; i < arrflageQue.length; i++)
                     {
                             if (arrflageQue[i]==index)
                                 {
                                     arrflageQue[i]=null;
                                 }

                     }

                }