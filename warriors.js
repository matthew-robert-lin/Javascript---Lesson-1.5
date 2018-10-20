const champion = {
	class:"Berseker",
	equipment:["Diablos Shatterer II", "Nergigante Armor Set", "Rocksteady Mantle", "Affinity Booster"],
	age:27,
	stamina:100,
	attackBoost:4,
	attackBoostLevel:function(){
		this.attackBoostLevel++;
	},
	location: {
		x:0,
		y:0,
	},
	walk:function(xCoordinate, yCoordinate){
		console.log(xCoordinate, yCoordinate);
		this.location.x = xCoordinate;
		this.location.y = yCoordinate;
	},
	strike:function(strikeCost){
		this.stamina = this.stamina - strikeCost;
	}
}
console.log(champion);
champion.walk(6,4);
