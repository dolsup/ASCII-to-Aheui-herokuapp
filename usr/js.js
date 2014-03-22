// 2014.03.22 ASCII Character To Aheui Code Converter
// made by choijiwon
// 1890mah@gmail.com


var setvalue = false; //한 번에 출력 설정 
var count = 0;
var dic={
	' ' : '84*', //32
	'!' : '65+3*', //33
	'"' : '48*2+', //34
	'#' : '75*', //35
	'$' : '49*', //36
	'%' : '57*2+', //37
	'&' : '94*2+', //38
	"'" : '94*3+', //39
	'(' : '85*', //40
	')' : '57*6+', //41
	'*' : '67*', //42
	'+' : '58*3+', //43
	',' : '38+4*', //44
	'-' : '95*', //45
	'.' : '85*6+', //46
	'/' : '59*2+', //47
	'0' : '68*', //48
	'1' : '77*', //49
	'2' : '86*2+', //50
	'3' : '77*2+', //51
	'4' : '95*7+', //52
	'5' : '77*4+', //53
	'6' : '69*', //54
	'7' : '29+5*', //55
	'8' : '87*', //56
	'9' : '96*3+', //57
	':' : '78*2+', //58
	';' : '69*5+', //59
	'<' : '87*4+', //60
	'=' : '96*7+', //61
	'>' : '88*2-', //62
	'?' : '79*', //63
	'@' : '88*', //64
	'A' : '97*2+', //65
	'B' : '88*2+', //66
	'C' : '88*3+', //67
	'D' : '88*4+', //68
	'E' : '88*5+', //69
	'F' : '88*6+', //70
	'G' : '88*7+', //71
	'H' : '89*',   //72
	'I' : '88*9+', //73
	'J' : '89*2+', //74
	'K' : '89*3+', //75
	'L' : '89*4+', //76
	'M' : '89*5+', //77
	'N' : '89*6+', //78
	'O' : '89*7+', //79
	'P' : '89*8+', //80
	'Q' : '99*',    //81
	'R' : '98*4+6+',  //82
	'S' : '99*2+',  //83
	'T' : '67*2*',  //84
	'U' : '99*4+',  //85
	'V' : '99*5+',  //86
	'W' : '99*6+',  //87
	'X' : '99*7+',  //88
	'Y' : '99*8+',  //89
	'Z' : '99*9+', //90
	'[' : '99*2+8+', //91
	'\\' : '99*4+6+', //92
	']' : '99*5+7+', //93
	'^' : '99*6+7+', //94
	'_' : '99*8+6+', //95
	'`' : '44*6*', //96
	'a' : '45*5*3-', //97
	'b' : '77*2*',   //98
	'c' : '44*6*3+',  //99
	'd' : '55*4*',  //100
	'e' : '44*6*5+', //101
	'f' : '44*6*6+', //102
	'g' : '44*6*7+', //103
	'h' : '94+8*', //104
	'i' : '35*7*', //105
	'j' : '69*2*2-', //106
	'k' : '35*7*2+', //107
	'l' : '69*2*', //108
	'm' : '35*7*4+', //109
	'n' : '35*7*5+', //110
	'o' : '35*7*6+', //111
	'p' : '44*7*', //112
	'q' : '35*7*8+', //113
	'r' : '35*7*9+', //114
	's' : '45*3+5*', //115
	't' : '55*4+4*', //116
	'u' : '76+9*', //117
	'v' : '44*7*7+', //118
	'w' : '98+7*', //119
	'x' : '83*5*', //120
	'y' : '98+7*2+', //121
	'z' : '98+7*3+', //122
	'{' : '58*3*3+', //123
	'|' : '47*3+4*', //124
	'}' : '55*5*', //125
	'~' : '63*7*' //126
}



function aheuiro(insu) {
	var rand;
	if(insu == '2') {
		rand = Math.floor(Math.random()*2);
		if (rand == 0) return '박';
		if (rand == 1) return '반';
	}
	else if(insu == '3') {
		rand = Math.floor(Math.random()*3);
		if (rand == 0) return '받';
		if (rand == 1) return '밪';
		if (rand == 2) return '밬';
	}
	else if(insu == '4') {
		rand = Math.floor(Math.random()*8);
		if (rand == 0) return '밤';
		if (rand == 1) return '밥';
		if (rand == 2) return '밫';
		if (rand == 3) return '밭';
		if (rand == 4) return '밮';
		if (rand == 5) return '밖';
		if (rand == 6) return '밗';
		if (rand == 7) return '밨';
	}
	else if(insu == '5') {
		rand = Math.floor(Math.random()*3);
		if (rand == 0) return '발';
		if (rand == 1) return '밙';
		if (rand == 2) return '밚';
	}
	else if(insu == '6') {
		return '밦';
	}
	else if(insu == '7') {
		rand = Math.floor(Math.random()*2);
		if (rand == 0) return '밝';
		if (rand == 1) return '밠';
	}
	else if(insu == '8') {
		return '밣';
	}
	else if(insu == '9') {
		rand = Math.floor(Math.random()*4);
		if (rand == 0) return '밞';
		if (rand == 1) return '밟';
		if (rand == 2) return '밡';
		if (rand == 3) return '밢';
	}
	else if(insu == '+') return '다';
	else if(insu == '*') return '따';
 	else if(insu == '-') return '타';
}

function gyesan(insu) {
	for(var j=0; j<dic[insu].length; j++) {
		$('#txtaheui').append( aheuiro(dic[insu].charAt(j)) );
		count++;
	}
	if(!setvalue) $('#txtaheui').append('맣');
}


function chogi() {
}
function chulryeok() {
	if(setvalue) {
		setvalue = false;
		$('#setbutton').attr('value', '한번에 출력');
	}
	else {
		setvalue = true;
		$('#setbutton').attr('value', '한 자씩 출력');
	}
}

function byeonhwan() {
	$('#txtaheui').html('');
	count = 0;
	for(var i=0; i<$('#txtascii').val().length; i++) {
		gyesan($('#txtascii').val().charAt(i));
	}
	if(setvalue) {
		for(var i=0; i<count; i++) {
			$('#txtaheui').append('맣');	
		}
	}
	$('#txtaheui').append('하');
}