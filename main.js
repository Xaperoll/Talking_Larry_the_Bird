const air = "img/interface/Default-568h@2x.png",
	blink = "img/blink.gif",
	blowup = "img/blowup.gif",
	blowup_dandelion = "img/blowup_dandelion.gif",
	bow = "img/bow.gif",
	eat = "img/eat.gif",
	fly = "img/fly.gif",
	lightning_new = "img/lightning_new.gif",
	flyback = "img/flyback.gif",
	veletoc = "img/veletoc.gif";



window.onload = function() {
	setTimeout(function() {
		document.querySelector('.preloader').remove();
		document.querySelector('.game > img').src = flyback;
		document.querySelector('.game > audio').play();
	}, 2000);
	document.querySelector('.game > .interface').style.opacity = "1";
}

function lightning() {
	document.querySelector('.game > .interface').style.display = "none";
	document.querySelector('.game > img').src = lightning_new;
	document.querySelector('.game > audio').src = "audio/p_strela_1.m4a";
	document.querySelector('.game > audio').play();
	setTimeout(function() {
		document.querySelector('.game > img').src = flyback;
		document.querySelector('.game > audio').src = "audio/p_krila_1.m4a";
		document.querySelector('.game > audio').play();
		document.querySelector('.game > .interface').style.display = "";
	}, 2500);
}

function eatt() {
	document.querySelector('.game > .interface').style.display = "none";
	document.querySelector('.game > img').src = eat;
	document.querySelector('.game > audio').src = "audio/p_hrana_4.m4a";
	document.querySelector('.game > audio').play();
	setTimeout(function() {
		document.querySelector('.game > img').src = blink;
		document.querySelector('.game > .interface').style.display = "";
	}, 5000);
}