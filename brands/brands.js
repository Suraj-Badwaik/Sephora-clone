var scaleArr=["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"];
    var allResult=["#a","#b","#c","#d","#e","#f","#g","#h","#i","#j","#k","#l","#m","#n","#o","#p","#q","#r","#s","#t","#u","#v","#w","#x","#y","#z",];
    scaleArr.map(function (elem, index){
        var div=document.createElement("div");
        div.innerText=elem;
        div.addEventListener("click", function(){
            scrollTarget(elem, index);
        });

        div.className="alpha";
        document.querySelector("#scale").append(div);
    });
    
    function scrollTarget(elem, index){
        console.log(elem);
        if(elem=="All"){
            var nextlink=document.querySelector("#a");
            nextlink.scrollIntoView();
        }else if(elem=="#"){
            var nextlink=document.querySelector("#ab");
            nextlink.scrollIntoView();
        }else{
            // console.log(index);
            var nextlink=document.querySelector(allResult[index-1]);
            // console.log(nextlink);
            nextlink.scrollIntoView();
        }
    }

    
    var productArr=["Acqua di Parma","Adwoa beauty","AERIN","Algenist","Alpha-H","alpyn beauty","ALTERNA Haircare","amika","AMOREPACIFIC","Anastasia Beverly Hills","Antonym","Aquis","Armani Beauty","Artis","Artist Couture","Atelier Cologne","Athr Beauty","Augustinus Bader","AXIOLOGY","bareMinerals","The Beauty Chef","BeautyBio","beautyblender","belif","Benefit Cosmetics","BERDOUES","Better Not Younger","Bio Ionic","Biossance","Bite Beauty","Black Up","blendSMART","Blinc","Bobbi Brown","boscia","BREAD BEAUTY SUPPLY","Briogeo","Bumble and bumble","BURBERRY","Buxom","By Rosie Jane","caliray","Calvin Klein","CANOPY","Capri Blue","Carolina Herrera","Caudalie","CAY SKIN","CHANEL","Charlotte Tilbury","Chloé","Christian Louboutin","Christophe Robin","Ciaté London","Cinema Secrets","Clarins","CLEAN RESERVE","CLINIQUE","COACH","COLOR WOW","COOLA","Crown Affair","dae","DAMDAM","Dame Products","Danessa Myricks Beauty","Deborah Lippmann","DEREK LAM 10 CROSBY","DERMAFLASH","Dermalogica","DevaCurl","Dior","DOLCE&GABBANA","DOMINIQUE COSMETICS","Donna Karan","dpHUE","Dr. Barbara Sturm","Dr. Brandt Skincare","Dr. Dennis Gross Skincare","Dr. Jart+","Dr. Lara Devgan Scientific Beauty","Dr. Zenovia Skincare","Drunk Elephant","Drybar","DUO","Dyson","EADEM","Edible Beauty","Eight & Bob","Elie Saab","Ellis Brooklyn","Erno Laszlo","Estée Lauder","Evian","Fable & Mane","FaceGym","Farmacy","Fashion Fair","Fenty Beauty by Rihanna","Fenty Skin","First Aid Beauty","Flora + Bast","Floral Street","FOREO","FORVR Mood","Four Sigmatic","Freck Beauty","fresh","ghd","Gisou","Givenchy","GLAMGLOW","Glamnetic","GLO Science","Glow Recipe","Good Dye Young","Google","goop","Grace Eleyae","Grande Cosmetics","Gucci","GUERLAIN","GXVE BY GWEN STEFANI","Herbivore","HERETIC","HERMÈS","Hourglass","HUDA BEAUTY","HUM Nutrition","Hyper Skin","Iconic London","IGK","Iles Formula","ILIA","iluminage","INC.redible","Indie Lee","The INKEY List","iNNBEAUTY PROJECT","innisfree","invisibobble","Isle of Paradise","IT Cosmetics","ITEM Beauty By Addison Rae","Jack Black","Jillian Dempsey","JIMMY CHOO","JLo Beauty","Jo Malone London","John Varvatos","Josie Maran","Jouer Cosmetics","Juicy Couture","Juliette Has a Gun","JVN","K18 Biomimetic Hairscience","Kaja","Kate Somerville","KAYALI","Kérastase","Kiehl's Since 1851","KILIAN Paris","Kitsch","KNC Beauty","Koh Gen Do","Kopari","KORA Organics","KORRES","Kosas","KVD Beauty","L'Occitane","L'Oreal Professionnel","La Mer","Lancôme","LANEIGE","LASHFOOD","Laura Mercier","LAWLESS","LightStim","lilah b.","Lilly Lashes","Living Proof","Lord Jones","LXMI","LYS Beauty","Madison Reed","Maison Louis Marie","Maison Margiela","MAKE UP FOR EVER","MAKEUP BY MARIO","Marc Jacobs Beauty","Marc Jacobs Fragrances","Mario Badescu","maude","Melanin Haircare","Melt Cosmetics","MERIT","Milk Makeup","Mizani","Montblanc","Moon Juice","Moroccanoil","Mount Lai","Mugler","Murad","NAILS INC.","Narciso Rodriguez","NARS","Natasha Denona","Naturally Serious","Nécessaire","NEST New York","NUDESTIX","The Nue Co.","NuFACE","Nurse Jamie","O&M","Olaplex","OLEHENRIKSEN","Omorovicza","ONE/SIZE by Patrick Starrr","The Ordinary","Oribe","The Original MakeUp Eraser","Origins","OTHERLAND","OTZI","OUAI","Overose","Paco Rabanne","PAT McGRATH LABS","PATRICK TA","PATTERN by Tracee Ellis Ross","Paula's Choice","Peace Out","Perricone MD","Peter Thomas Roth","philosophy","The Phluid Project","PHLUR","Playa","PMD","Prada","Pretty Vulgar","Prima","Pureology","Qhemet Biologics","Rahua","Ralph Lauren","RANAVAT","Rare Beauty by Selena Gomez","REFY","REN Clean Skincare","Reverie","rms beauty","ROSE INC","ROSE Ingleton MD","Rosebud Perfume Co.","Rossano Ferretti Parma","Saie","Saint Jane","Sakara Life","Selfless by Hyram","SEPHORA COLLECTION","Sephora Favorites","Shani Darden Skin Care","Shiseido","shu uemura","SK-II","Skin Laundry","Skinfix","Skinny & Co.","Skylar","Slip","Smashbox","SOBEL SKIN Rx","Sol de Janeiro","St. Tropez","stackedskincare","stila","StriVectin","Sulwhasoo","Summer Fridays","SUNDAY II SUNDAY","Sunday Riley","Supergoop!","surratt beauty","Susteau","T3","TAN-LUXE","tarte","Taste Beauty","Tata Harper","Tatcha","This Works","TOCCA","TOM FORD","Too Faced","Topicals","Tory Burch","Touchland","Tower 28 Beauty","TULA Skincare","Tweezerman","Urban Decay","Valentino","Vegamour","Velour Lashes","Verb","Versace","Viktor&Rolf","Violet Voss","Virtue","Viseart","Vital Proteins","Vitruvi","Volition Beauty","Voluspa","Wander Beauty","Westman Atelier","Wishful","World of Chris Collins","Youth To The People","Yves Saint Laurent",];


    var allResult1=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // var allProductsFunction=["https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"]

    for(i=0; i<allResult.length; i++){
        var result = productArr.filter(function (elem){
            return elem[0]==allResult1[i]; 
        });
        //  console.log(result.length)
            result.map(function (elem, index){
                var div1=document.createElement("div");
                div1.innerText=elem;
                // div1.style.border="1px solid blue";
                div1.style.cursor="pointer";
                div1.addEventListener("click", function (){
                    if(index==1 && elem=="Adwoa beauty"){
                        window.location.href="../adwoa/adwoa.html";
                        // D:\Masai school\Project sophera\adwoa\adwoa.html
                    }
                })
                document.querySelector(allResult[i]).append(div1);
            });

    }
    var result26=["19-69", "54 Thrones", "The 7 Virtues","8 Greens"];
    result26.map(function (elem){
        var div1=document.createElement("div");
        div1.innerText=elem;
        document.querySelector("#ab").append(div1);
    });