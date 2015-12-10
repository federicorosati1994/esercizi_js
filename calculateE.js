function calculateE(a){
	var result = 0;
	for(var i = 0; i < a.length; i++) {
		if(a.charAt(i)=="e"){
			result++;
		}
	}
	return result;
}