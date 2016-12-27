function babbler(order,useWords){
	var STOP="<STOP>";

	var dict=[STOP];
	var map={};
	var continuations={};
	var keydict=[];
	var starters=[];
	var keymap={};
//	var splitter=useWords?/ +/:/(?:)/;
	var joiner=useWords?"":"";
	var inputs={};

	map[STOP]=0;

	return {
		learn: function(text,object){
			if(! text) return;
			inputs[text]=1;

			var tokens=useWords?
				text.match(/([-:<\/>'\d\w]+|[^-:<\/>'\d\w]+)/g):
				text.split(/(?:)/);
			if(tokens.length<order) return;
			tokens.push(STOP);

			var indices=tokens.map(function(token){
				var index=map[token];

				if(typeof index === "undefined"){
					index=map[token]=dict.length;
					dict.push(token);
				}

				return index;
			});

			var list=[];
			for(var i=0;i<order-1 && i<indices.length;i++)
				list.push(indices[i]);

			var keyindex=-1;
			for(var i=order-1;i<indices.length;i++) {
				list.push(indices[i]);

				var key=list.join("|");
				var nextkeyindex=keymap[key];

				if(typeof nextkeyindex === "undefined"){
					keymap[key]=nextkeyindex=keydict.length;
					keydict.push(list.slice());
				}

				if(keyindex==-1) {
					starters.push([nextkeyindex,object]);
				} else{
					continuations[keyindex]=continuations[keyindex]||[];
					continuations[keyindex].push([nextkeyindex,object]);
				}

				keyindex=nextkeyindex;

				list.shift();
			}
		},
		babble: function(){
			var result;
			var objects;

			for(var retry=0;retry<20;retry++) {

				var group = starters[Math.floor((Math.random() * starters.length))];
				if (!group){
					return "oops!";
				}

				objects=[group[1]];
				var keyindex=group[0];
				var list=keydict[keyindex].slice();

				while(1){
					var cont=continuations[keyindex];
					if(! cont) break;

					var group=cont[Math.floor((Math.random()*cont.length))];
					var nextkeyindex=group[0];
					var object=group[1];

					var additionIndex=keydict[nextkeyindex][order-1];
					if(additionIndex==0) break;

					objects.push(object);

					list.push(additionIndex);
					keyindex=nextkeyindex;
				}

				result=list.map(function(v){ return dict[v]; }).join(joiner);
				if(inputs[result]) continue;

				break;
			}

			return {
				objects: objects,
				text: result
			};
		},
	};
}

var callAfterGenerations={};
function callAfter(group,seconds,func){
    callAfterGenerations[group]=callAfterGenerations[group] || 0;
    var generation=++callAfterGenerations[group];

    window.setTimeout(function(){
        if(generation!=callAfterGenerations[group]) return;

        func();
    },seconds*1000);
}

function grams(order,ss){
	if(! ss) return [];

    var res=[];
    var s=ss.toLowerCase().replace(/[^a-z]/g,"");

    for(var i=0;i<s.length-order+1;i++){
        res.push(s.substr(i,order));
    }

    return res;
}

var matchmap={};
var matchmapMinor={};
var artlist=[];
art.forEach(function(v,i){
    var name=v[0];
    var file=v[1];

	var object={
		id: i,
		name: name,
		filename: file,
    };

	artlist.push(object);

	grams(4,name).forEach(function(v){
		matchmap[v] = matchmap[v] || [];

		matchmap[v].push(i);
	});
	grams(3,name).forEach(function(v){
		matchmapMinor[v] = matchmapMinor[v] || [];

		matchmapMinor[v].push(i);
	});
});

function doMatch(text){
	var scoremap={};

	grams(4,text).forEach(function(v){
		if(! matchmap[v]) return;

		matchmap[v].forEach(function(id){
			scoremap[id] = scoremap[id] || 0;
			scoremap[id]+=1;
		});
	});

	grams(3,text).forEach(function(v){
		if(! matchmapMinor[v]) return;

		matchmapMinor[v].forEach(function(id){
			scoremap[id] = scoremap[id] || 0;
			scoremap[id]+=0.1;
		});
	});

	var keys=Object.keys(scoremap).sort(function(a,b){ return scoremap[b]-scoremap[a]; });
	if(keys.length==0) return;

	var max=scoremap[keys[0]];

	/*	$('#matches').empty();
	keys.filter(function(k){ return scoremap[k]>max-1; }).forEach(function(k){
		var art=artlist[k];

		$('#matches')
			.append($('<span>').text(scoremap[k]+" - "+art.name))
			.append($('<img>').attr('src',art.filename));
	});*/

	return keys.filter(function(k){ return scoremap[k]>max-1; }).map(function(k){ return artlist[k]; });
}

var nonnames={
	Destroy: 1,
	Charge: 1,
	Freeze: 1,
	Frog: 1,
	Murloc: 1,
	Sheep: 1,
	Windfury: 1,
	Enrage: 1,
	Bananas: 1,
	Imp: 1,
	Silence: 1,
	Defender: 1,
	Squire: 1,
	Treant: 1,
	Panther: 1,
	Squirrel: 1,
	Discard: 1,
};

var acceptedTypes={
	Minion: 1,
	Spell: 1,
	Weapon: 1,
	HeroPower: 1,
}

var cardnames={};
var minionnames=[];
var cards=[];
Object.keys(hearthstoneDb).forEach(function(key){
	var hearthstoneGroup=hearthstoneDb[key];

	for(var i = 0, l = hearthstoneGroup.length; i < l; ++i){
		var card=hearthstoneGroup[i];

		cards.push(card);
		if(! card.cost) card.cost=0;
		card.type=card.type.replace(/ /g,"");
		if(card.type=="Minion") minionnames.push(card.name);
		if(! nonnames[card.name]) cardnames[card.name]=card;
		
	}
});

cards.forEach(function(card){
	if(! card.text) return;

	var items=card.text.split(/(?=[^a-zA-Z]+)/).map(function(item){
		var match=item.match(/(.*?)([a-zA-Z]+)/);
		if(! match) return item;

		var name=match[2];
		if(cardnames[name]){
			if(name==card.name) name="{{self}}";
			else name="{{other}}";

			item=match[1]+name;
		}

		return item;
	});

	var text=items.join("");
	if(text!=card.text){
		card.text=text;
	}
});

var namegen,effectgen;
function remakeBabblers(){
	var sane=$('#radiosane').is(":checked");
//	console.log(sane);

	namegen=babbler(sane?5:3,false);
	cards.forEach(function(card){
		if(!card.name || card.name.match(/AI/)) return;
		namegen.learn(card.name,card);
	});


	effectgen=babbler(sane?5:3,true);
	cards.forEach(function(card){
		if(!card.text || card.text.match(/(JOKE| hug|stars)/) || card.name.match(/Brood Affliction/)) return;
		effectgen.learn(card.text,card);
	});
}

function genrate(){
	var info={};
	for(var i=0;i<200;i++) {
		var obj = effectgen.babble();
		var original = obj.objects[0];

		if(! acceptedTypes[original.type]) continue;
		var matches=true;
		if(obj.text.match(/^[^\.\,]+ it[ '\.]/)) matches=false;
		if(obj.text.match(/(When|If|Unless|While|Whenever) [^\.\,]+\./)) matches=false;
		if(obj.text.match(/Choose[^\.]+\.$/)) matches=false;
		if(obj.text.match(/At the (start|end) [^\.\,]+\./)) matches=false;
		if(obj.text.match(/Set/) && ! obj.text.match(/Set[^\.\,]+to/)) matches=false;
		if(obj.text.match(/Choose one:/) && ! obj.text.match(/Choose one:[^\.\,]+; or/)) matches=false;

		if(! matches){
			console.log("Bad text:",obj.text);
			continue;
		}

		info = {type: original.type,};
		var fields = ["attack", "health"];
		var fieldValues = [0, 0];
		var fieldValueCounts = [0, 0];
		var cost=original.cost;
		var costCount=1;

		if(original.durability) original.health=original.durability*2;

		obj.objects.forEach(function (card) {
			if(card.durability) card.health=card.durability*2;
//			console.log(card.text,card.cost,card.attack,card.health);

			cost+=card.cost;
			costCount++;

			fields.forEach(function (field, i) {
				var val=card[field];
				if(! val) return;

				fieldValues[i] += val;
				fieldValueCounts[i]++;
			});
		});

		fields.forEach(function (field, i) {
			if (!fieldValueCounts[i]) return;

			info[field] = fieldValues[i] / fieldValueCounts[i];
		});

		info.cost=cost/costCount;

		var name = "";
		while (!name.match(/ /)) name = namegen.babble().text;

		info.name = name;
		info.text = obj.text;

		break;
	}

//	console.log(info);

	$('.card').hide();
	$('.'+info.type).show();

	var images=doMatch(info.name);
	if(! images) return;
	var image=images[Math.floor((Math.random() * images.length))];
	$(".cardbg").css("background-image","url(\""+image.filename+"\")");

	$('.textsvg textPath').text(info.name);
	$('.card').toggleClass('smalltitle',info.name.length>24);


	var text=info.text;
	text=text.replace(/[$#]/g,'');
	text=text.replace(/\{\{self\}\}/g,info.name);
	text=text.replace(/\{\{other\}\}/g,minionnames[Math.floor(Math.random() * minionnames.length)]);
	text=text.replace(/\n/g,'<br>');


	var maxHeight=142;
	if(info.type=="Spell") maxHeight=113;
	if(info.type=="Weapon") maxHeight=113;
	if(info.type=="HeroPower") maxHeight=90;

	var cardtext=$('.'+info.type+' .cardtext');
	cardtext.html(text);
	for(var fontsize=24;fontsize>8;fontsize--){
		cardtext.css("font-size",fontsize+"px");
		if(cardtext.height()<=maxHeight) break;
	}

	if(info.type=="Minion") info.attack=info.attack || 0;
	if(info.type=="Weapon") info.attack=info.attack || 1;

	$('.card .attack').text(typeof info.attack === "undefined"?'':Math.round(info.attack));
	$('.card .defense').text(Math.round(info.health) || Math.round(info.durability) || '');
	$('.card .cost').text(Math.round(info.cost) || '0');

}

$( document ).ready(function() {
	$('#matchrandom').click(function(){
		genrate();
	});

	$('input:radio').change( remakeBabblers );

	remakeBabblers();
	genrate();
});


/*
function translate(card){
  var text=card.text;
  text=text.replace(RegExp(card.name,"g"),'{{self}}')
  
  text=text.replace(/\b(creature|permanent|token)\b/gi,'minion');
  text=text.replace(/\b(creatures)\b/gi,'minions');
  text=text.replace(/\b(attacking|blocking|nontoken) /gi,'');
  text=text.replace(/\b(player)\b/gi,'hero');
  text=text.replace(/\b(target)\b/gi,'a');
  
  text=text.replace(/At the beginning of your end step/gi,'Atthe end of turn');
  
  
  text=text.replace(/sacrifice a land/gi,'Destroy one of your Mana Crystals');
  
  text=text.replace(/ to a minion or player/gi,'');
  text=text.replace(/ and tap it/gi,'');
  text=text.replace(/(They|It) can't be regenerated./gi,'');

  text=text.replace(/(white|black|red|green|blue) /gi,'');
  

  text=text.replace(/{{self}} can block an additional minion/gi,'Taunt');
  text=text.replace(/Flying( \([^)]*\))?/gi,'Stealth');
  text=text.replace(/Defender( \([^)]*\))?/gi,'Can\'t attack.');
  text=text.replace(/Haste( \([^)]*\))?/gi,'Charge');
  text=text.replace(/Trample( \([^)]*\))?/gi,'Windfury');
  text=text.replace(/As an additional cost to cast {{self}},/gi,'Battlecry:');
  text=text.replace(/When {{self}} enters the battlefield,/gi,'Battlecry:');
 
  return card.name+"\n"+text;
}



Object.keys(mtg)
  .filter(function(k){
    var text=mtg[k].text;
    if(! text) return false;
    if(text.match(/:/)) return false;
    if(text.match(/\bX\b/)) return false;
    if(text.match(/(untap|upkeep)/i)) return false;
    if(text.match(/(Equip|Counter|land|Enchant)/i)) return false;
    if(text.match(/(swamp|mountain|island|plains|forest)/i)) return false;
    
    return true;
  })
  .slice(0,100)
  .map(function(k){ return translate(mtg[k]); })
  .filter(function(text){ return text; })
  .forEach(function(text){ console.log(text) })

*/