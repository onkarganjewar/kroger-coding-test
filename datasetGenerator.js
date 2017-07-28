
var produce = ["Apples", "Celery", "Strawberries", "Peaches", "Spinach", "Nectarines", "Grapes", "Sweet-bell-peppers", "Potatoes", "Blueberries", "Lettuce"];
var beverage = ["Redbull", "Pepsi", "Coke", "Gatorade", "Budweiser", "Mountain_Dew", "Bud_Light", "Monster_Energy"];
var pharmacy = ["Buprenorphine","CoughSyrups", "Alprazolam", "Diazepam", "Synthroid", "Crestor", "Nexium"];
var vaccines = ["Flu", "Hepatitis-A-and-B", "Meningitis", "Pneumococcal", "Shingles", "Tetanus/Diphtheria-(Td)","Tetanus/Diphtheria/Pertussis-(Tdap)"];
var beauty = ["Men's-Rogaine-Hair-Loss-&-Hair-Thinning", "Dead-Sea-Mud-Mask", "Waterpik-Aquarius-Water-Flosser", "Bio-Oil-Liquid-Purcellin-Oil", "TruSkin-Naturals-Vitamin-C-Serum", "Neutrogena-Makeup-Remover-Cleansing"];
var rentals = ["The-Godfather", "Citizen-Kane", "The-Third-Man", "All-About-Eve", "Max:-Fury-Road", "The-Cabinet-of-Dr.-Caligari"];
var bakery = ["Pretzels", "Banana-Bread", "Red-Velvet-Cake", "Whoopie-Pie", "BlueberryMuffins", "Cornbread", "Chocolate_Chip_Cookies", "Apple_Pie"];
var dates = ["12/11/2019", "10/22/2017", "06/24/2024", "03/17/2021", "05/15/2025"];
var category = [produce, vaccines, beverage, pharmacy, beauty, rentals, bakery];

var categoryNames = ["produce", "vaccines", "beverage", "pharmacy", "beauty", "rentals", "bakery"];

var fs = require('fs');
//var temp = category[Math.floor((Math.random() * 5) + 1)];
for(i = 0; i < 25; i++){
	var dt = randomDate(new Date(2017, 0, 1), new Date(2022, 0, 1));
    var ex = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
	var num = Math.floor((Math.random() * 7));
	// console.log(num);
	var cat = category[num];
	var name = cat[Math.floor((Math.random() * 4) + 1)];
	data =  i + ' ' +  name +' ' + categoryNames[num] + ' ' + ex +'\n';
	fs.appendFile('test1.txt', data, (err) => {
	  if (err) console.log(err);
	  // console.log('The "data to append" was appended to file!');
	});
}


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
