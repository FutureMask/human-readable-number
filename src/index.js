module.exports = function toReadable (num) {
    var ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    var tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    var hundred = ' hundred ';
    var output = '';
    var numString = num.toString();

    if (num == 0) {
        return 'zero';
    }
    // 100 and more
if ( numString.length == 3 ) 
{
  output  = ones[ parseInt( numString.charAt(0) ) ] + hundred ;
  num = num % 100 ;
  numString = num.toString() ;
}

if ( num < 20 )  
{
  output += ones[num] ;
}
else 
{ // 20-99 
  output += '' + tens[ parseInt( numString.charAt(0) ) ] + ' ';
  output += ones[ parseInt( numString.charAt(1) ) ] ; 
}

return output;
    }