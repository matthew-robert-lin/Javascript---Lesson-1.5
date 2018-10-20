const saturn = {
	density:"low",
	visitors: 4,
	temperature:-178,
	visible:function(season){
		if (season === "autumn"){
			return true;
		}
		else {
			return false;
		}
	},
	getTemperatureInFarenheit: function(){
		return this.temperature * 120; //or saturn.temperature (refers to whole method)//
	}
}

console.log(saturn.visible("autumn"));

console.table(saturn);

console.log(saturn.getTemperatureInFarenheit());
