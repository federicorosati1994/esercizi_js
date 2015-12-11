//COMMENTS IN PSEUDO-CODE

function listArray(){
	var nameFromUser = prompt("Scrivi un nome da aggiungere alla lista."); //insert a name
	var name = nameFromUser.toLowerCase();
	var list = [
		"federico", 
		"riccardo", 
		"francesco", 
		"flaminia", 
		"luigi", 
		"pierluigi", 
		"ludovico"
	]; //names already in the list

	var search = list.indexOf(name,0) //check if your new name is in the list
	if (search == -1){ //if name isn't in the list
	   	list.push(name); //insert new name in the list
    }
    console.log(list); //show the result
}