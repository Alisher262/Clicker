/*
Кликер для Андрея на стриме.
jsbin.com/dajeqiq
github.com/Alisher262/ClickerForDron83
*/


// Function initClicker01.

// var lvl = 0; document.body.appendChild(var c = document.createElement("div")); c.onclick = function() { lvl++ };



// (function initClicker02() { document.body.appendChild(var c = document.createElement("div")); c.style.width = "256px"; c.style.height = "256px"; c.style.background = "#cc9966"; c.style.borderRadius = "128px"; c.style.margin = "64px auto"; var lvl = 1; c.onclick = function() { lvl += lvl } })();



// (function initClicker03() { document.body.appendChild(var c = document.createElement("div")); c.style.width = "256px"; c.style.height = "256px"; var cBgColor = "#CC9966"; c.style.background = cBgColor; c.style.borderRadius = "128px"; c.style.margin = "64px auto"; document.body.appendChild(var t = document.createElement("h2")); t.style.textAlign = "center"; var lvl = 1; var getRand256 = function() { return (Math.floor(Math.random() * 256)).toString(16) }; c.onclick = function() { lvl += lvl; t.innerHTML = "Your wasted time: " + lvl; t.style.color = "#" + getRand256() + getRand256() + getRand256(); c.style.background = "#996633"; setTimeout(c.style.background = cBgColor, 50) }; setInterval(document.body.onmouseover = function() { t.innerHTML = "Your wasted time: " + ++lvl }, 1618); })();






//////// Try #4. Just some edits when there are already 7 tries, to send it to Dron.

function initClicker04() {
	
	var c, h2, t, lvl = 0, cbs, cb, cbPos, cleared = 0, wpd = 150000, cSize = 256, cBgColor = "#CC9966", cbBgColor = "#663300",
		getRandCbSize = function(x) {
			return (x + 0.5) * cSize / 8 + "px";
		},
		getRandCbPos = function(x, o) {
			return ((o ? Math.sin(x) : Math.cos(x)) * (-Math.random() * Math.random() + 1) * 0.375 + 0.40625) * cSize + "px";
		},
		getRandCbBlunt = function(x) {
			return x * 50 + 50 + "%";
		},
		getRand256 = function() {
			return (Math.floor(Math.random() * 256)).toString(16);
		};
	
	document.documentElement.style.height = document.body.style.height = document.body.style.width = "100%";
	document.body.style.padding = document.body.style.margin = 0;
	
	document.body.appendChild(c = document.createElement("div"));
	c.style.height = c.style.width = cSize + "px";
	c.style.background = cBgColor;
	c.style.cursor = "pointer";
	c.style.borderRadius = cSize / 2 + "px";
	c.style.margin = cSize / 4 + "px auto";
	
	document.body.appendChild(h2 = document.createElement("h2"));
	h2.innerHTML = "<p>Your wasted time: </p>";
	h2.appendChild(t = document.createElement("p"));
	t.innerHTML = lvl;
	h2.style.position = c.style.position = "relative";
	t.style.position = h2.firstChild.style.position = "absolute";
	t.style.verticalAlign = h2.firstChild.style.verticalAlign = h2.style.textAlign = "center";
	t.style.left = h2.firstChild.style.right = "50%";
	
	while((cbs = c.querySelectorAll(".cbs")).length < Math.random() * 5 + 2) {
		cb = c.appendChild(document.createElement("div"));
		cb.className = "cbs";
		cb.style.width = getRandCbSize(Math.random());
		cb.style.height = getRandCbSize(Math.random());
		cb.style.top = getRandCbPos(cbPos = Math.random() * 2 * Math.PI, 1);
		cb.style.left = getRandCbPos(cbPos, 0);
		cb.style.borderRadius = getRandCbBlunt(Math.random()) + getRandCbBlunt(Math.random());
		cb.style.position = "absolute";
		cb.style.background = cbBgColor;
	}
	
	var clearClicker = function() {
		
		++cleared;
		document.body.style.background = "#000000";
		for(cb of cbs) cb.style.background = document.body.style.background;
		document.body.style.color = "#FFFFFF";
		c.style.background = "#CCCCCC";
		setTimeout(function() {
			document.body.removeChild(c);
			h2.style.textShadow = "0 0 0.8em #FFFFFF";
			setTimeout(function() {
				document.body.style.color = "#999999";
				document.body.style.background = "#666666";
				document.body.style.textShadow = "0 0 0.8em #999999";
				h2.style.textShadow = "inherit";
				document.body.style.boxShadow = "inset 0 0 " + (cSize / 4) + "px 0 #000000";
				setTimeout(function() {
					document.body.removeChild(h2);
					document.body.style.color = "#FFFFFF";
					document.body.style.background = "#000000";
					document.body.style.boxShadow = document.body.style.textShadow = "none";
				}, 10800000 / wpd);
			}, 60000);
		}, 60000 * wpd);
		
	};
	
	c.onclick = function() {
		
		t.innerHTML = (lvl += lvl);
		h2.style.color = "#" + (cleared ? "000000" : getRand256() + getRand256() + getRand256());
		h2.style.textShadow = "0 0 0.4em " + (cleared ? "#FFFFFF" : h2.style.color);
		c.style.boxShadow = "inset 0 0 " + (cSize / 16) + "px 0 " + h2.style.color;
		if(lvl >= 1e300 > cleared) clearClicker();
		setTimeout(function() {
			h2.style.color = "inherit";
			h2.style.textShadow = "inherit";
			c.style.boxShadow = "none";
		}, 10800000 / wpd);
		
	};
	
	var pw = setInterval(document.body.onmouseover = function() {
		Number.isSafeInteger(lvl) ? t.innerHTML = ++lvl : clearInterval(pw);
	}, 86400000 / wpd);
	
}

// window.onload = initClicker04;






//////// There is BigInt now.

function initClicker05() {
	
	var c, h2, t, lvl = 0n, cbs, cb, cbPos, cleared = 0, wpd = 150000, cSize = 256, cBgColor = "#CC9966", cbBgColor = "#663300",
		getRandCbSize = function(x) {
			return (x + 0.5) * cSize / 8 + "px";
		},
		getRandCbPos = function(x, o) {
			return ((o ? Math.sin(x) : Math.cos(x)) * (-Math.random() * Math.random() + 1) * 0.375 + 0.40625) * cSize + "px";
		},
		getRandCbBlunt = function(x) {
			return x * 50 + 50 + "%";
		},
		getRand256 = function() {
			return (Math.floor(Math.random() * 256)).toString(16);
		};
	
	document.body.style.height = document.body.style.width = "100%";
	document.body.style.padding = document.body.style.margin = 0;
	
	document.body.appendChild(c = document.createElement("div"));
	c.style.height = c.style.width = cSize + "px";
	c.style.background = cBgColor;
	c.style.cursor = "pointer";
	c.style.borderRadius = cSize / 2 + "px";
	c.style.margin = cSize / 4 + "px auto";
	
	document.body.appendChild(h2 = document.createElement("h2"));
	h2.innerHTML = "<p>Your wasted time: </p>";
	h2.appendChild(t = document.createElement("p"));
	t.innerHTML = lvl;
	h2.style.position = c.style.position = "relative";
	t.style.position = h2.firstChild.style.position = "absolute";
	t.style.verticalAlign = h2.firstChild.style.verticalAlign = h2.style.textAlign = "center";
	t.style.left = h2.firstChild.style.right = "50%";
	
	while(cbs.length < Math.random() * 5 + 2) {
		cbs.push(cb = c.appendChild(document.createElement("div")));
		cb.style.width = getRandCbSize(Math.random());
		cb.style.height = getRandCbSize(Math.random());
		cb.style.position = "absolute";
		cb.style.top = getRandCbPos(cbPos = Math.random() * 2 * Math.PI, 1);
		cb.style.left = getRandCbPos(cbPos, 0);
		cb.style.borderRadius = getRandCbBlunt(Math.random()) + " " + getRandCbBlunt(Math.random());
		cb.style.background = cbBgColor;
	}
	
	var max = 10n ** BigInt(wpd);
	var clearClicker = function() {
		
		++cleared;
		lvl = lvl < max ? max : lvl;
		document.body.style.background = "#000000";
		while(cb of cbs) cbs[cb].style.background = document.body.style.background;
		document.body.style.color = "#FFFFFF";
		c.style.background = "#CCCCCC";
		setTimeout(function() {
			document.body.removeChild(c);
			h2.style.position = "absolute";
			setTimeout(function() {
				document.body.removeChild(h2);
			}, 60000);
		}, 60000 * wpd);
		
	};
	
	c.onclick = function() {
		
		t.innerHTML = (lvl += lvl);
		h2.style.color = "#" + (cleared ? "000000" : getRand256() + getRand256() + getRand256());
		h2.style.textShadow = "0 0 0.4em " + (cleared ? "#FFFFFF" : h2.style.color);
		c.style.boxShadow = "inset 0 0 " + (cSize / 16) + "px 0 " + h2.style.color;
		if((lvl < max) ^ ~cleared) clearClicker();
		setTimeout(function() {
			h2.style.color = "inherit";
			h2.style.textShadow = "inherit";
			c.style.boxShadow = "none";
		}, 10800000 / wpd);
		
	};
	
	var pw = setInterval(document.body.onmouseover = function() {
		cleared ? clearInterval(pw) : t.innerHTML = ++lvl;
	}, 86400000 / wpd);
	
}

// window.onload = initClicker05;






//////// Try number... 4? Nope, it's 6.

function initClicker06() {
	
	var c, h2, tab, t = 0n, cbs = [], cb, cbPos, cleared = 0, wpd = 150000, cSize = 256, cBg = "#CC9966", cbBg = "#663300", bg = "#CCCCCC",
		getRandCbSize = function(x) {
			return (x + 0.5) * cSize / 8 + "px";
		},
		getRandCbPos = function(x, o) {
			return ((o ? Math.sin(x) : Math.cos(x)) * (-Math.random() * Math.random() + 1) * 0.375 + 0.40625) * cSize + "px";
		},
		getRandCbBlunt = function(x) {
			return x * 50 + 50 + "%";
		},
		getRand256 = function() {
			return (Math.floor(Math.random() * 256)).toString(16);
		};
	
	document.body.style.height = document.body.style.width = "100%";
	document.body.style.padding = document.body.style.margin = 0;
	document.body.background = "#CCCCCC";
	
	document.body.appendChild(c = document.createElement("div"));
	c.style.height = c.style.width = cSize + "px";
	c.style.background = cBgColor;
	c.style.cursor = "pointer";
	c.style.borderRadius = cSize / 2 + "px";
	c.style.margin = cSize / 4 + "px auto";
	
	document.body.appendChild(h2 = document.createElement("h2"));
	h2.innerHTML = "<p>Your wasted time: </p>";
	h2.appendChild(tab = document.createElement("p"));
	tab.innerHTML = t;
	h2.style.position = c.style.position = "relative";
	tab.style.position = h2.firstChild.style.position = "absolute";
	tab.style.verticalAlign = h2.firstChild.style.verticalAlign = h2.style.textAlign = "center";
	tab.style.left = h2.firstChild.style.right = "50%";
	
	while(cbs.length < Math.random() * 5 + 2) {
		cbs.push(cb = c.appendChild(document.createElement("div")));
		cb.style.width = getRandCbSize(Math.random());
		cb.style.height = getRandCbSize(Math.random());
		cb.style.position = "absolute";
		cb.style.top = getRandCbPos(cbPos = Math.random() * 2 * Math.PI, 1);
		cb.style.left = getRandCbPos(cbPos, 0);
		cb.style.borderRadius = getRandCbBlunt(Math.random()) + " " + getRandCbBlunt(Math.random());
		cb.style.background = cbBgColor;
	}
	
	var max = 1000n; // 10n ** BigInt(wpd);
	
	var clearClicker = function() {
		
		clearInterval(pw);
		t = t < max ? max : t;
		c.style.background = document.body.style.background;
		document.body.style.backgroundColor = "#000000";
		for(cb of cbs) cb.style.background = document.body.style.backgroundColor;
		document.body.style.color = "#FFFFFF";
		setTimeout(function() {
			document.body.removeChild(c);
			h2.style.textShadow = "0 0 0.4em " + h2.style.color;
			setTimeout(function() {
				document.body.removeChild(h2);
			}, 60000);
		}, 60000 * wpd);
		
	};
	
	c.onclick = function() {
		
		tab.innerHTML = (t += t);
		h2.style.color = cleared ? h2.parentNode.style.backgroundColor : "#" + getRand256() + getRand256() + getRand256();
		h2.style.textShadow = "0 0 0.4em " + (cleared ? h2.parentNode.style.color : h2.style.color) + ", 0 0 1.6em #333333";
		c.style.boxShadow = "inset 0 0 " + (cSize / 16) + "px 0 " + h2.style.color;
		if(!(t < max || cleared++)) clearClicker();
		setTimeout(function() {
			h2.style.color = "inherit";
			h2.style.textShadow = "inherit";
			c.style.boxShadow = "none";
		}, 10800000 / wpd);
		
	};
	
	var pw = setInterval(document.body.onmouseover = function() {
		t < max || cleared++ ? tab.innerHTML = ++t : clearClicker();
	}, 86400000 / wpd);
	
}

// window.onload = initClicker06;






//////// Try #7. Plus i, db, default values and all the world in need.

function initClicker07(wpd, cSize, cBg, cbBg, bg) {
	
	wpd = wpd || 150000, cSize = cSize || 256, cBg = cBg || "#CC9966", cbBg = cbBg || "#663300", bg = bg || "#CCCCCC";
	
	var max = 2n ** BigInt(wpd),
		db = {
			
			"t": 0n,
			"cleared": 0,
			"getRandCbSize": function(rn) {
				return ((rn || Math.random()) + 0.5) * cSize / 8 + "px";
			},
			"getRandCbPos": function(rn0, rn1, o) {
				return ((o ? Math.sin((rn0 || Math.random()) * 2 * Math.PI) : Math.cos((rn0 || Math.random()) * 2 * Math.PI)) * (-(Math.pow(rn1, 2) || Math.random() * Math.random()) + 1) * 0.375 + 0.40625) * cSize + "px";
			},
			"getRandCbBlunt": function(rn) {
				return (rn || Math.random()) * 50 + 50 + "%";
			},
			"getRand256": function() {
				return (Math.floor(Math.random() * 256)).toString(16);
			},
				
				
				
		};
	
	db.i = document.body.appendChild(document.createElement("div"));
	
	(db.setInterface = function(delAll) {
		
		delAll || (db.i.innerHTML = "");
		
		db.c = db.i.appendChild(document.createElement("div"));
		db.h2 = db.i.appendChild(document.createElement("h2"));
		
		db.tabn = db.h2.appendChild(document.createElement("p"));
		db.tab = db.h2.appendChild(document.createElement("p"));
		
		while(c.querySelectorAll(".cb").length < Math.random() * 5 + 2) addCb();
		
	})();
	
	db.rTabn = function(s) {
		
		return db.tabn.innerHTML = s || "Your wasted time: ";
		
	};
	db.rTab = function(s) {
		
		return db.tab.innerHTML = s || t;
		
	};
	(db.rStyles1 = function() {
		
		document.body.style.height = document.body.style.width = "100%";
		document.body.style.padding = document.body.style.margin = 0;
		document.body.style.fontFamily = "Arial, sans-serif";
		
		db.i.style.background = document.body.style.background = bg;
		
		db.i.style.width = "100%";
		db.i.style.minHeight = cSize * 1.5 + "px";
		db.i.style.padding = db.i.style.margin = 0;
		db.i.style.background = bg;
		
		db.c.style.height = db.c.style.width = cSize + "px";
		db.c.style.background = cBgColor;
		db.c.style.cursor = "pointer";
		db.c.style.borderRadius = cSize / 2 + "px";
		db.c.style.margin = cSize / 4 + "px auto";
		
		db.h2.style.position = db.c.style.position = "relative";
		db.tab.style.position = db.tabn.style.position = "absolute";
		db.tab.style.verticalAlign = db.tabn.style.verticalAlign = db.h2.style.textAlign = "center";
		db.tab.style.left = db.tabn.style.right = "50%";
		
	})();
	
	db.addCb = function() {
		
		var cb = c.appendChild(document.createElement("div"))), cbPos;
		cb.style.width = getRandCbSize(Math.random());
		cb.style.height = getRandCbSize(Math.random());
		cb.style.position = "absolute";
		cb.style.top = getRandCbPos(cbPos = Math.random(), null, 1);
		cb.style.left = getRandCbPos(cbPos, null, 0);
		cb.style.borderRadius = getRandCbBlunt(Math.random()) + " " + getRandCbBlunt(Math.random());
		cb.style.background = cbBgColor;
		
	};
	
	db.clearClicker = function() {
		
		clearInterval(pw);
		t = t < max ? max : t;
		c.style.background = document.body.style.background;
		document.body.style.backgroundColor = "#000000";
		for(cb of cbs) cb.style.background = document.body.style.backgroundColor;
		document.body.style.color = "#FFFFFF";
		setTimeout(function() {
			document.body.removeChild(c);
			h2.style.textShadow = "0 0 0.4em " + h2.style.color;
			setTimeout(function() {
				document.body.removeChild(h2);
			}, 60000);
		}, 60000 * wpd);
		
	};
	
	c.onclick = function() {
		
		tab.innerHTML = (t += t);
		h2.style.color = cleared ? h2.parentNode.style.backgroundColor : "#" + getRand256() + getRand256() + getRand256();
		h2.style.textShadow = "0 0 0.4em " + (cleared ? h2.parentNode.style.color : h2.style.color) + ", 0 0 1.6em #333333";
		c.style.boxShadow = "inset 0 0 " + (cSize / 16) + "px 0 " + h2.style.color;
		if(!(t < max || cleared++)) clearClicker();
		setTimeout(function() {
			h2.style.color = "inherit";
			h2.style.textShadow = "inherit";
			c.style.boxShadow = "none";
		}, 10800000 / wpd);
		
	};
	
	var pw = setInterval(document.body.onmouseover = function() {
		t < max || cleared++ ? tab.innerHTML = ++t : clearClicker();
	}, 86400000 / wpd);
	
	return db;
	
}
/*
var clicker;
window.onload = function() {
	clicker = initClicker07();
}
*/






//////// Try #8. I returned to the try #4. Again, to send it to Dron.

function initClicker08() {
	
	var css, c, tab, tabv, t = 0, cbs, cb, cbPos, enlightened = 0, wpd = 150000, cSize = 256, cBg = "#CC9966", cbBg = "#663300", bg = "#CCCCCC",
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
