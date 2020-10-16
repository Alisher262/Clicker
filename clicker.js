function initClicker08() {
	
	var c, tab, tabv, t = 0, cbs, cb, cbPos, enlightened = 0, wpd = 150000, cSize = 256, cBg = "#CC9966", cbBg = "#663300", bg = "#CCCCCC",
		getRandCbSize = function(rn) {
			return (rn + 0.5) * cSize / 8 + "px";
		},
		getRandCbPos = function(rPi, o) {
			return ((o ? Math.sin(rPi) : Math.cos(rPi)) * (-Math.random() * Math.random() + 1) * 0.375 + 0.40625) * cSize + "px";
		},
		getRandCbBlunt = function(rn) {
			return rn * 50 + 50 + "%";
		},
		getRand256 = function() {
			return (Math.floor(Math.random() * 256)).toString(16);
		};
	
	document.body.appendChild(c = document.createElement("div"));
	document.body.appendChild(tab = document.createElement("h2"));
	tab.innerHTML = "<p>Your wasted time: </p>";
	tab.appendChild(tabv = document.createElement("p"));
	tabv.innerHTML = t;
	
	document.head.appendChild(css = document.createElement("style"));
	
	document.documentElement.style.cssText += " height: 100%; position: relative;";
	document.body.style.cssText += " width: 100%; height: 100%; position: relative; margin: 0; padding: 0; font: " + (cSize / 16) + "px Arial, sans-serif; background: " + bg + ";";
	c.style.height = c.style.width = cSize + "px";
	tab.style.position = c.style.position = "relative";
	tabv.style.position = tab.firstChild.style.position = "absolute";
	c.style.margin = cSize / 4 + "px auto";
	tabv.style.left = tab.firstChild.style.right = "50.67%";
	tabv.style.verticalAlign = tab.firstChild.style.verticalAlign = tab.style.textAlign = "center";
	c.style.cssText += " border-radius: " + (cSize / 2) + "px; cursor: pointer; background: " + cBg + ";";
	
	while((cbs = c.querySelectorAll(".cbs")).length < Math.random() * 5 + 2) {
		cb = c.appendChild(document.createElement("div"));
		cb.className = "cbs";
		cb.style.width = getRandCbSize(Math.random());
		cb.style.height = getRandCbSize(Math.random());
		cb.style.position = "absolute";
		cb.style.top = getRandCbPos(cbPos = Math.random() * 2 * Math.PI, 1);
		cb.style.left = getRandCbPos(cbPos, 0);
		cb.style.borderRadius = getRandCbBlunt(Math.random()) + getRandCbBlunt(Math.random());
		cb.style.background = cbBg;
	}
	
	var enlightClicker = function() {
		
		++enlightened;
		document.body.style.background = "#000000";
		for(cb of cbs) cb.style.background = document.body.style.background;
		document.body.style.color = "#FFFFFF";
		c.style.background = "#CCCCCC";
		setTimeout(function() {
			document.body.removeChild(c);
			tab.style.textShadow = "0 0 0.8em #FFFFFF";
			setTimeout(function() {
				document.body.style.color = "#999999";
				document.body.style.background = "#666666";
				document.body.style.textShadow = "0 0 0.8em #999999";
				tab.style.textShadow = "inherit";
				document.body.style.boxShadow = "inset 0 0 " + (cSize / 4) + "px 0 #000000";
				setTimeout(function() {
					document.body.removeChild(tab);
					document.body.style.color = "#FFFFFF";
					document.body.style.background = "#000000";
					document.body.style.boxShadow = document.body.style.textShadow = "none";
				}, 10800000 / wpd);
			}, 60000);
		}, 60000);
		
	};
	
	c.onclick = function() {
		
		tabv.innerHTML = (t += t);
		c.style.color = tab.style.color = "#" + (enlightened ? "000000" : getRand256() + getRand256() + getRand256());
		tab.style.textShadow = "0 0 0.4em " + (enlightened ? "#FFFFFF" : "currentcolor");
		c.style.boxShadow = "inset 0 0 " + (cSize / 16) + "px 0 currentcolor";
		if(t >= 1e300 > enlightened) enlightClicker();
		setTimeout(function() {
			tab.style.color = "inherit";
			tab.style.textShadow = "inherit";
			c.style.boxShadow = "none";
		}, 10800000 / wpd);
		
	};
	
	var pw = setInterval(document.body.onmouseover = function() {
		Number.isSafeInteger(t) ? tabv.innerHTML = ++t : clearInterval(pw);
	}, 86400000 / wpd);
	
}

window.onload = initClicker08;
