//______________________________________________________//CienamFun\\_______________________________________________________________
//function to create the object of the movie...
function create(id,src,name,dAr,dEn,link){
  return {
    id:id,
    src:src,
    name:name,
    dAr:dAr,
    dEn:dEn,
    link:link
  };
}
  //__________________________________________________________________________________________________________________________
 //the data that we used...
  var df1=create(1,"d1.png","Hacksaw Ridge","تدور أحداث الفيلم حول (ديزموند ت. دوس)، المُسعف في الجيش الأمريكي خلال الحرب العالمية الثانية، والذي خدم في معرك (أوكيناوا) رافضًا قتل البشر تحت أي مسمى حتى خلال الحرب، كما أصبح أول مستنكف سلمي في تاريخ العسكرية الأمريكية يتسلم ميدالية الكونجرس الشرفية.","The film revolves around (Desmond v. Dos), the medic in the US Army during World War II, and who served in the Battle of (Okinawa) refusing to kill human beings under any name, even during the war, also became the first peaceful objector in American military history Receives Medal Congress honorary .","vd1.mp4");
  var df5=create(5,"d5.png","Snowden","(إدوارد سنودن) موظف سابق في وكالة المخابرات المركزية الأمريكية، يقوم بتسريب آلاف من الوثائق والمستندات الرسمية من وكالة الأمن القومي الأمريكية إلى الصحافة والإنترنت في عام 2013 ، وهو الأمر الذي يحدث جدلًا في وسائل الإعلام، ويغير ثوابت ومبادئ مجال المراقبة والأمان بشكل كبير من بعده.","(Edward Snowden), a former employee of the CIA, the leaking of thousands of documents and official documents from the US Agency for National Security to the press and the Internet in 2013, which arguably is happening in the media, and changing the fundamentals and principles of surveillance and safety dramatically after him .","http://moshahda.net/veh26rgykof3");
  var df4=create(4,"d4.jpg","Swallows And Amazons ","تدور احداث قصة فيلم المغامرة العائلي الرائع Swallows and Amazons 2016 “السوالوز والأمازونيين” 4 أطفال في إجازة في منطقة البحيرة يبحرون بمفردهم إلى جزيرة ويبدأون حربا مع أطفال بدائيين. في هذه الاثناء يتهمهم رجل غامض في يخت منزلي بجريمة لم يرتكبوه","The story revolves family adventure film wonderful Swallows and Amazons 2016 'Alsowazz and Alomazin'four children on vacation at the lake area to sail on their own island and start a war with primitive children. In the meantime, accused by a mysterious man in a yacht home a crime they did not commit.","http://moshahda.net/jar8nxngt3nq");
  var df3=create(3,"d3.jpg","Crossfire"," عندما حارس الأمن الوطني يعود من الخطوط الحربية في العراق تدرك بأن لا شيء من تدريبها يساعدها في مواجهة إضطراب ما بعد الصدمة","When national security guard comes back from war lines in Iraq realize that none of her training help them cope with post traumatic stress disorder","http://moshahda.net/u772m5w7apgt");
  var df2=create(2,"d2.png","The Dust Storm","شاب يلتقي بصديقته المنفصل عنها بعد 10 أعوام ليسترجع الذكريات الجميلة ويتسائل ماذا كان سبب كل هذه الكراهية والغياب","A young man meets his girlfriend estranged after 10 years to retrieve memories and wondering what was the cause of all this hatred and absenteeism.","http://moshahda.net/6a5dd2ohuw4p");
  var df6=create(6,"d6.png","A Kind Of Murder","في نيويورك 1960، (والتر ستاكهاوس) مهندس معماري ناجح يتزوج من الجميلة (كلارا)، والتي تجعل حياتهما مثالية، لكن والتر يصيبه الافتتان بجريمة قتل لم تُحَل بعد، وينخرط في دوامة من الفوضى نتيجة لعبة الفأر والقط التي يخوضها مع القاتل الماكر ومحقق المباحث الطموح، بينما في ذات الوقت يُغرم والتر بامرأة أخرى ","In New York in 1960, (Walter Stackhouse) Architect successful marry a beautiful (Clara), which make perfect lives, but Walter He got enamored of murder has not yet been solved, and engage in a spiral of chaos as a result of the game Mouse and Cat waged with deadly feline investigator detective ambition while at the same time be fined Walter another woman.","http://moshahda.net/mpqm6rtursuh");
  var dArr=[df1,df2,df3,df4,df5,df6];
  var af1=create(1,"a1.png","Inferno","يستيقظ (روبرت لانجدون) بغرفة مستشفي في (فلورنسا) بـ(إيطاليا)، ليكتشف أنه قد فقد ذاكرته ولا يتذكر أيًا مما حدث، حتي في الأيام الأخيرة الماضية. لا يتوقف الأمر عند هذا الحد، بل فجأة يجد نفسه هدفًا لمجرم يطارده ويسعى للنيل منه.. بمعاونة الطبيبة (سينا بروكس) وبقدرة لانجدون على التعامل مع الرموز، يحاول الهرب، كما يحاول حل هذا اللغز، والذي يُعد أعقد الألغاز التي واجهته في حياته على الإطلاق.","Wake up (Robert Langdon) room hospital in Florence (b) (Italy), only to discover that he had lost his memory does not remember none of what happened, even in the last few days. It does not stop at this point, but suddenly finds himself the target of a criminal haunt him and is trying to get back at him .. with the help of a doctor (Sina Brooks) and the ability to Langdon to deal with symbols, trying to escape, and trying to solve this puzzle, which is the most complex puzzles that faced in his life all","av.mp4");
  var af2=create(2,"a2.jpg","Now You See Me","في عالم السحر والخداع البصري وأعمال الخفة، يواجه الفرسان الأربعة هذه المرة قطب كبير من أقطاب التكنولوجيا والذي يحاول استغلالهم من أجل تحقيق مصالحه، وعليهم تبرئة أنفسهم أمام المجتمع من الشائعات","In a world of magic and visual deception and acts of lightness, the four horsemen facing this great magnate technology time and who is trying to exploit in order to further its own interests, and they have acquitted themselves in front of the community of rumors, lies and clarify the facts of things and responsible for it through the final show.","");
  var af3=create(3,"a3.png","Kill Ratio ","هجوم على الرئيس الجديد لأوروبا الشرقية الديموقراطية الحديثة، تم نصبه من أجل التمهيد لعملية أمريكية خفية ضد قائد عسكري عديم الرحمة سعيًا للسيطرة على حكومة البلاد.","An attack on the new president for Eastern Europe and modern democracy, has been erected in order to boot a US operation against hidden ruthless military commander in an effort to control the country's government.","http://moshahda.net/yb8ddfe50gyk");
  var af4=create(4,"a4.png","Allied","تدور أحداث الفيلم في عام 1942، بعد وقوعه في الحب مع عميلة المقاومة الفرنسية ماريان بوسجور (ماريون كوتيارد) خلال مهمته الخطيرة في (كازابلانكا)، يلاحظ الحليف الكندي الفرنسي ومكافح التجسس ماكس فاتان (براد بيت) أن المرأة التي تزوجها وأنجب منها طفله أشبه بجاسوسة نازية؛ فيبدأ تحقيقاته الخاصة واستقصائه عنها.","The film revolves in 1942, after the fact in love with the puppet French Resistance Marian Bosgeor (Marion coutyard) during the dangerous mission in the (Casablanca), notes the Canadian ally, French and anti-spyware Max Vatan (Brad Pitt) that a woman who married her and fathered her child like Bjasush Nazi; begins its own investigation, investigated and reported.","http://moshahda.net/2vufq7oy98nz");
  var af5=create(5,"a5.png","The Fight Within ","القتال النفسي” “لوغان تشاندلر” وهو مصارع شاب يحاول التغلب على ماضيه المضطرب وبناء خياة جديدة مبنية على الإيمان وحب جديد ولكنه يجبر على العودة إلى القتال على يد “هايدن دريسلر” مصارع محترف محلي.","'Psychological fighting', 'Logan Chandler ', 'a young wrestler trying to overcome the troubled past and build a new Khiah based on faith and love again but is forced to return to fighting by' Hayden Dressler 'Local professional wrestler.","http://moshahda.net/ewla2hqkhzb0");
  var af6=create(6,"a6.png","Underworld Blood Wars ","يتمكن مصاصو الدماء من استعادة القوات الأصلية لخلق أنواع جديدة من الكائنات النصف مخلًّقة بواسطة (اليكساندر كورفينوس)، أما عن (مايكل)، فهو يستعيد ذكرياته باحثًا عن (سيلين) وابنته في محاولة لخلق من التعايش بين البشر والمخلوقات الجديدة في سلام من جديد.","Enable vampires to restore the original forces to create new types of half organisms synthesized by (Alexander Corvinus), while for (Michael), he regains his memories, looking for (Celine) and his daughter in an attempt to create the co-existence between humans and new creatures in peace again","http://moshahda.net/h66ivaiaw9uw");
  var aArr=[af1,af2,af3,af4,af5,af6];
  var An1=create(1,"an0.png","Moana","تدور احداث فيلم الانيماشين “موانا” حول (موانا وايالكي) البحارة شديدة الحماس والابنة الوحيدة لقائد مجموعة من الملاحين، حينما تصبح عائلتها في حاجة إلى مساعدتها، تقرر موانا الخروج في رحلة ملحمية تواجه من خلالها الأرواح العالقة والآلهة.","The film takes place Alanamachin 'Moana' on (Moana and Ayalki) sailors intense enthusiasm and the only daughter of the leader of a group of navigators, when they become a family in need of help, Moana decide to go out on an epic journey which faces lingering spirits and gods","anv.mp4");
  var An2=create(2,"an2.jpg","Ice Age:Collision Course","في سعيه للحفاظ على حبة البندق التي يحتفظ بها، يتسبب السنجاب (سكرات) دون قصد في إحداث سلسلة من الأحداث التي تؤثر على مسار الكون، ويتسبب في تساقط نيازك ملتهبة، ثم وعن طريق الخطأ يتسبب في تجميع هذه النيازك في كتلة كبيرة، ويجعلها تتوجه إلى كوكب الأرض، فيتوجب هنا على كل من (سيد)، (ماني)، (دييجو)، وبقية القطيع أن يتركوا المكان الذي استوطنوه من أجل البحث عن مكان أكثر أمانًا، ومحاولة إبعاد النيزك الملتهب عن موطنهم.","In his quest to keep the grain hazelnut maintained by, causing the squirrel (throes) inadvertently bring about a series of events that affect the course of the universe, and cause the falling meteors inflamed, then and accidentally cause the aggregation of these meteorites in a large block, and makes them go to planet Earth, MUST here on each of the (master), (Manny), (Diego), and the rest of the herd to leave the place where Astotnoh to look for a safer place, and try to keep the flaming meteor from home.","");
  var An3=create(3,"an3.png","The Princess And The Frog","قصة الفيلم : الامير 'نافين'' يتحول لضفدع من قبل ساحر شرير ,وبمساعدة التمساح وسيدة عجوز تعيش بجوار البحيرة وتلك الاميرة الرائعة , يتعلم الفارق بين حياته المتعجرفة السابقة والحياة التى يجب ان يحياها , حتى يتمكنوا جميعا من فك السحر.","DVD Story: Prince Navin becomes a frog by the evil sorcerer, and with the help of the crocodile and an elderly lady living next to the lake and those wonderful princess, learn the difference between life and arrogant previous life that should be experienced by, so they are all from the jaws of magic.","");
  var An4=create(4,"an4.png","Trolls","تدورأحداثالفيلمحولمجموعةمنالدُمىالمحبوبةالودودةوالتياعتادتاللعبفيالمناطقالمحيطةبها،وذاتيومتظهرمجموعةالبيرجنالتيتقومباحتلالالتلةالتييعيشونبها،ممايدخلبوبيالتيأسعدمن","The film revolves around a group of friendly and beloved dolls that used to play in the surrounding areas, and one day show Albrzin group that occupied the hill where they live, which Bobby started happiest enters","");
  var An5=create(5,"an5.png","Sausage Party","فيلمرسوميفيإطاركوميديمشوق،تدورأحداثهحولواحدةمنالنقانقالتييُحيّرهفكيرهاحولمسألةوجودهاوكيفوُجدَت،فتشرعفيالبحثعنالإجابةلتكتشفحقيقةوجودها","Movie graphical insipid comedy revolves around one of the sausages that Iherha thinking on the issue of existence and how I found, embarks on a search for the answer to discover the fact of its existence","");
  var An6=create(6,"an6.png","Kubo-and-the-Two-Strings","قصة الفيلم : في العصور العتيقة التي مرت بها اليابان، يحيا كوبو حياة هادئة حالمة في قريته حتى يقترب من روح قديمة تتسبب في تغير حياته للأبد، ينفتح مع هذه الروح عصر قديم من الحروب والمعارك كما تجلب غضب الآلهة والوحوش جميعًا على كوبو، وعليه الهروب من كل هذه التحديات والبحث عن بدلة سحرية عتيقة كان يرتديها والده الراحل كي تنقذه.","The story: In ancient times experienced by Japan, Kubo surely live quiet dreamy in his village so close to the old spirit of the cause change his life forever, opens with this spirit Old era of wars and battles also bring the wrath of the gods and monsters are all on Kobo, and therefore escape from all of these challenges and the search for a magic vintage suit was worn by his late father in order to save him.","");
  var anArr=[An1,An2,An3,An4,An5,An6];

  var ho1=create(1,"h1.png","Don't Breathe","روكيفتاةشابةتحاولأنتبدأحياةجديدةمعشقيقتها،وتخططمعحبيبهاوصديقآخرلهملاقتحاموسرقةمنزلرجلضريرثري،وقدراودهمالظنبأنهمسيقترفواالجريمةالكاملةالتيلاتشوبهاشائبةبماأنالرجلضرير،ولكنهميكتشفواخطأهمويحاولواأنينجوابأرواحهممنهبعداكتشافهمبأنهقاتلمتسلسل.","Rocky young girl trying to start a new life with her sister, and plans with her boyfriend and another friend for them to break into and steal home blind wealthy man, has Raadeh think they Siqtervoa perfect crime are impeccable as the man blind, but they discover their mistake and try to escape with their lives from him after their discovery as a serial killer","");
  var ho2=create(2,"h2.png","Incarnate","تدورأحداثالفيلمحولطاردأرواحشريرةقعيدعلىكرسيمتحرك،لديهالقدرةعلىاختراقلاوعيعقولالأشخاصالمُستحوّذعليهممِنقِبَلالأرواح.","The film revolves around the evil spirits Qaid repellent to a wheelchair, has the ability to penetrate the minds of the people are not aware of them acquired by spirits.","");
  var ho3=create(3,"h3.jpg","The Disappointments Room","تدورأحداثالفيلمفيإطارتشويقي،حولانتقالأموابنهاالشابإلىبيتجديدفيالريف،والذييعتبراهبيتأحلامهما،لكنسرعانمايكتشفانفظائعلايمكنتخيلهافيسقيفةهذاالبيتالساحر.","The film revolves in the framework of a teaser, over the transfer of the young mother and son into a new house in the countryside, which Iatbrah the house of their dreams, but soon discover horrors unimaginable in the attic of this house magician.","");
  var ho4=create(4,"h4.png","Hotel Of The Damned","عقبحادثسيارةمروّع،وبعدأنحوصروافيقلبالعدم،مجموعةمنالمسافرينيجدونأنفسهمفيفندقمهجوربجبالالكاربات،ثميُزيدحظهمالعاثرالوضعسوءًاحينيكتشفونأنالفندقتسكنهمخلوقاتعجيبةوآكلةلحومبشر","After a horrific car accident, and having been trapped in the heart of nowhere, a group of travelers find themselves in an abandoned hotel Carpathian Mountains, then unfortunate enough over the situation worse when they discover that the hotel inhabited by strange creatures and carnivorous humans","");
  var ho5=create(5,"h5.jpg","The Conjuring","بعدتحقيقهمامؤخراًفيأحداثأميتيفيل،مرةأخرىيعودالزوجانالمتخصصانفيالتحقيقفيالظواهرالخارقةلورينوادوارينبالسفرإلىشمالالعاصمةالبريطانيةلندنلمساعدةعائلةهادجسونالمكونةمنأموأبنائهااﻷربعةبعدمعاناتهمداخلالمنزلالملئبالأرواحالشريرةالذييعيشونبه.","After recently achieved in the events of Amityville, again couple Almt_khasassan back in investigating superstar Lauren Wade Warren to travel to north London to help Hadgson family consisting of a mother and her children four phenomena after suffering inside the house are filled with evil spirits which they live by","hv.mp4");
  var ho6=create(6,"h6.png","The Autopsy Of Jane Doe","تدور أحداث الفيلم حول (كوكس) و(هيرش)، الأب والابن اللذان يتلقيان جثة مُشرّدة غامضة دون سبب واضح للموت، وبينما يحاولان التعرف على الشابة الجميلة (جاين دو) يكتشفان بالتدريج أدلة غريبة تمنحهما المفتاح لأسرارها المرعبة","The film revolves around (Cox) and (Hirsch), father and son, who are receiving the body of a homeless mysterious without a clear cause of death, and while trying to identify the beautiful young woman (Jane Doe) gradually discover a strange evidence gives them the key to the terrifying secrets")
  var hoArr=[ho1,ho2,ho3,ho4,ho5,ho6];

  var c1=create(1,"c1.png","Beetlejuice","تدورأحداثالفيلمحولزوجينسعيدينيتعرضانلحادثسيارةقاتلوينجوانمنهويعودانإلىمنزلهما،ويكتشفانأنهماشبحان،وبعدفترةيُباعمنزلهماويقررانإخافةالملاكالجددمندونجدوى،فيقرراناستقدامشبحأقوىيعملكطاردللبشر،إلاأنهذاالشبحيكونلهأهدافأخرىغيرالتياستقدملها.","The film revolves around a happy couple are being subjected to the fatal accident car Wenjuan him and they return to their home, they discover that they Hbhan, after a period sold their house and decide to scare the new owners in vain, Viorteuran bring the ghost of the strongest works repellent for humans, but this ghost have goals other than that brought her","cv.mp4");
  var c2=create(2,"c2.png","The Matchbreaker","تدورأحداثالفيلمحولزوجينسعيدينيتعرضانلحادثسيارةقاتلوينجوانمنهويعودانإلىمنزلهما،ويكتشفانأنهماشبحان،وبعدفترةيُباعمنزلهماويقررانإخافةالملاكالجددمندونجدوى،فيقرراناستقدامشبحأقوىيعملكطاردللبشر،إلاأنهذاالشبحيكونلهأهدافأخرىغيرالتياستقدملها.","The film revolves around a happy couple are being subjected to the fatal accident car Wenjuan him and they return to their home, they discover that they Hbhan, after a period sold their house and decide to scare the new owners in vain, Viorteuran bring the ghost of the strongest works repellent for humans, but this ghost have goals other than that brought her.","");
  var c3=create(3,"c3.png","طالبثانوييهوىاﻹطلاععلىالقصصالخاصةبالمعاركالحربيةالخاصةبطلائعالجيش،يقابلفتاةتكبرهفيالسن،تُدعىجولياتحمسهعلىتصميمألعابخيالية،يعجببأفكارهمنسقأحدالمواقعالإلكترونية،ويهتمبإبداعتهويدعوهلابتكالألعابخياليةجديدة","Secondary student loves looking at their own battles of war Btalaia own army stories, meets a girl older than him in age, Julia called his enthusiasm to design fantasy games, Wonder thoughts coordinator of a websites, and cares Babdaath and calls for a new fictional Apetkal Games","");
  var c4=create(4,"c4.png","Girl Asleep ","فتاةعلىمشارفالمراهقة،فينتابهاالحزنلمفارقتهاطفولتها","Girl on the outskirts of adolescence,Ventabha heartbroken to leave her childhood","");
  var c5=create(5,"c5.png","Ghostmates","رجل محظوظ يسقط عليه شبح ذاتي الإستيعاب لتحقيق امنيته الاخيره من اجل الصعود الى السماء","Lucky man drops by the ghost of a self-absorption of the recent achievement of his wish for Stairway to Heaven","") 
  var c6=create(6,"c6.jpg","Middle School The Worst Years Of My Life","تدور أحداث الفيلم حول فنان هادئ في سن المراهقة يُدعى (راف كاتشادوريان)، والذي يتمتع بخيال خصب فترهقه المدرسة المتوسطة بروتينها وقواعدها التي تضعها أمامه، وبذلك يضع راف مع صديقه المفضل (ليو) خطة بأن يكسروا كل قاعدة تضعها لهم المدرسة ومناهجها، وبالتالي كان لتنفيذ خطتهم توابع ومشكلات","The film revolves around a quiet artist teen named (RAV Kachadorian), which has the imagination fertile Fterhgah middle school Brocanha and rules laid down in front of him, and thus puts Ruff with his best friend (Leo) plan to break every rule laid down by their school curricula, and therefore had to implement Their plan aftershocks and problems","")
  var cArr=[c1,c2,c3,c4,c5,c6];
  var home=[dArr[0],aArr[0],cArr[0],hoArr[4],anArr[0],dArr[1]];
  var movies=[dArr,aArr,anArr,hoArr,cArr];
//______________________________________________________________________

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
     f(coll[i], i);
   }
 } else {
  for (var key in coll) {
   f(coll[key], key);
  }
 }
}
//_________________________________________________________________________ 
//display function to display the movies as imgas in the page...
function display(arr){
  var td=document.getElementsByTagName("td");
  each(td,function(val,i) {
    $(val).empty();
    var x=arr[i]['name'];
    console.log(arr[i])
    var img=$("<img height='360px' width='280px'>");
    img.attr("src", arr[i]["src"]);
    img.click(function(){change(arr[i])});
    $(val).append(img);
  })
}
display(dArr);
//_________________________________________________________________________
//function to change the contain of the div in every click event...
function change(obj){
  $('#table1').hide();
  var div1=$('<div></div>')
  var title=$("<h3></h3>");
  title.text(obj['name']);
  title.css('color','white')
  var btn=$("<button>back</button>").click(function (){$('#table1').show();$(div1).hide();});
  btn.addClass("back")
  var img=$("<img height='460px' width='380px'>");
  img.attr("src", obj["src"]);
  img.attr('vertical-align','middle')
  var p1= $("<p></p>");
  p1.text(obj['dAr']);
  p1.css('color','white')
  var p2=$("<p></p>");
  p2.text(obj['dEn']);
  p2.css('color','white')
  var video=$('<video />',{
    type:'video/mp4',
    controls:true
  });
  video.attr('align','center')
  video.attr("src", obj["link"]);
  video.attr('width','650px')
  video.attr('height','600px')
  $(div1).append(btn,title,img,p1,p2,video);
  $(div1).attr('align','center')
  $('#list').append(div1).show();
}
//_____________________________________________________________________________
//function to search the movies...
function search(){
  var x=$('#sahar').val();
  $('#sahar').val('');
  var f=false;
    each(movies,function(arr,i){
      each(arr,function(obj,k){
        if(obj['name'].toLowerCase().indexOf(x.toLowerCase())>-1){
          f=true;
          return change(obj);
        }
      })
    })
  if(!f){
    alert("your movie is not found :(");
  }
}
//_________________________________________________________________________________
//some functions to display the containes of every catogrey...
function action(){
  return display(aArr);
}
function drama(){
  return display(dArr);
}
function an(){
  return display(anArr);
}
function ho(){
  return display(hoArr);
}
function comdy(){
  return display(cArr);
}
function homef(){
  return display(home);
}
//_____________________________________________________________________________________
//finished....
//thanks :)
