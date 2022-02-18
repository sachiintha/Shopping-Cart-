function loadData(name){

    if(name=="button1")
    {
        document.getElementById("image1").src="images/XS.jpg";
        document.getElementById("paragraph1").innerHTML= "Apple's iPhone XS and iPhone XS Max feature 5.8 and 6.5-inch display sizes, upgraded cameras, faster A12 Bionic chips, better displays, faster Face ID, and up to 512GB storage.Paragraph , Paragraph, Paragraph, Paragraph, Paragraph";
    }

    else if(name=="button2")
{
    document.getElementById("image1").src="images/XSM.jpg";
    document.getElementById("paragraph1").innerHTML= "Super Retina HD display , 6.5‑inch (diagonal) all‑screen OLED Multi‑Touch display, HDR display,True Tone display , Wide color display , 3D Touch , Rated IP68"
}

    else if(name=="button3")
    {
        document.getElementById("image1").src="images/8P.png"
        document.getElementById("paragraph1").innerHTML=" 5.5-inch LCD display, Faster A11 processor, Glass body, Upgraded camera, Louder speakers, Wireless inductive charging"

    }

    else{
        alert("invalid");
    }
}

function priceLoop(){
	
	var phone=["Iphone XS Max = $1500","Iphone Xs = $1000","Iphone 8 plus = $800"];
	var i;
	var length=phone.length;
	var txt="";
	
	for(i=0; i<length; i++){
		txt+=phone[i]+"<br/>";
	}
	
	document.getElementById("image1").src="images/IP.jpg";
	document.getElementById("paragraph1").innerHTML=txt;
}

function Highprice(){
	var phone=[];
	var txt="";
	phone["Iphone XS Max"]=1500;
	phone["Iphone Xs"] = 999;
	phone["Iphone 8 plus"] = 800;
	
	for(var phn in phone){
		if(phone[phn]>1000){
			txt += phn +" = $"+phone[phn]+"<br/>"; 
		}
	}
    document.getElementById("image1").src="images/IP.jpg";
    document.getElementById("paragraph1").innerHTML=txt;
}

function Lowprice(){
	var phone=[];
	var txt="";
	phone["Iphone XS Max"]=1349;
	phone["Iphone Xs"] = 999;
	phone["Iphone 8 plus"] = 599;

	
	for(var phn in phone){
		if(phone[phn]<=1000){
			txt += phn +" = $"+phone[phn]+"<br/>"; 
		}
	}
	document.getElementById("image1").src="images/IP.jpg";
	document.getElementById("paragraph1").innerHTML=txt;
}
