let Logs = { // NEWEST LOG SHOULD BE ON TOP || MAKE SURE TO EDIT THE CURRENT VAR

	// bug / change / add / remove / misc / optimize

	"Tuesday, July 13th 2021": {
		version: "pre-alpha-1.9.0",
		current: true,
		"logs": {
			1: { type: "add", desc: "Added icons to the notifications" },
			2: { type: "bug", desc: "Fixed Fingerprint IDs not being generated or pulled when logging in" },
			3: { type: "add", desc: "Added ability to craft Aluminum Oxide and Iron Oxide" },
			4: { type: "change", desc: "Made Armor items unique (can only hold 1 per slot)" },
			5: { type: "bug", desc: "Added start of Weapon Crafting" },
			6: { type: "change", desc: "Made Inked Duffle Bags unique items" },
			7: { type: "bug", desc: "Fixed Crowbar using placeholder image" },
			8: { type: "bug", desc: "Fixed bug hacking minigame misspelling of `level`" },
			9: { type: "bug", desc: "Fixed one of the 24/7 Store safes not being robbable" },
			10: { type: "add", desc: "Added ability to search Fleeca Banks for a vault code" },
			11: { type: "add", desc: "Added item notification when receiving a inked duffle bag" },
			12: { type: "bug", desc: "Relocked the grove street house robbery house" },
			13: { type: "add", desc: "Added Meth Production and use" },
			14: { type: "change", desc: "Decreased draw distance of Drill Text" },
			15: { type: "change", desc: "Moved the initial police alert in PSB heist to the 1st door" },
			16: { type: "bug", desc: "Fixed Keycard and Vault Code not being removed when you use them" },
			17: { type: "add", desc: "Added ability for police to reset the Pacific Standard Bank after a heist" },
			18: { type: "add", desc: "Added NPC selling drugs script" },
			19: { type: "bug", desc: "Fixed misspelling of genders for weed plants" },
			20: { type: "add", desc: "Added ability to gather seeds at the public farm" },
			21: { type: "bug", desc: "Fixed translation error when harvesting a weed plant" },
			22: { type: "bug", desc: "Fixed empty weed bags only ever removing 1 even though you receive multiple" },
			23: { type: "add", desc: "Added Casino Interior" },
			24: { type: "add", desc: "Added Casino Chips currency" },
			25: { type: "add", desc: "Added 3 Card Poker" },
			26: { type: "add", desc: "Added Blackjack" },
			27: { type: "add", desc: "Added Horse Race Betting" },
			28: { type: "add", desc: "Added Roulette" },
			29: { type: "add", desc: "Added Slots" },
			30: { type: "change", desc: "Changed Arcade Script to use eye interact (AKA heavily optimized)" },
			31: { type: "change", desc: "Increased the timeout for the fortune tellers fortune text" },
			32: { type: "change", desc: "Changed clothing chat messages to use the new chat script" },
			33: { type: "change", desc: "Slightly modified the style of the clothing menu" },
			34: { type: "bug", desc: "Possibly fixed garage vehicles not giving you keys sometimes?" },
			35: { type: "add", desc: "Added ability to set the Stash Location, Closet Location and Logout Location in your house via the Radial Menu" },
			36: { type: "change", desc: "Police and EMS now receive less stress for certain actions" },
			37: { type: "add", desc: "Added removing stress while doing yoga animation" },
			38: { type: "add", desc: "Added ability to easily add/remove eye interactions" },
			39: { type: "add", desc: "Added ability to split items in half by holding control" },
			40: { type: "add", desc: "Added ability to quick-use and item by double right clicking on an item in your inventory" },
			41: { type: "bug", desc: "Fixed mining helmet not being removed when you drop the item" },
			42: { type: "bug", desc: "Fixed a translation error in phone" },
			43: { type: "bug", desc: "Fixed police app sending the wrong location" },
			44: { type: "add", desc: "Added ability to open the Police MDT from your radial menu" },
			45: { type: "add", desc: "Added mechanic towing and untowing to the radial menu" },
			46: { type: "bug", desc: "Fixed Jail shop not opening" },
			47: { type: "add", desc: "Added missing Wire Cutters and Weed Nutrition to hardware store" },
			48: { type: "bug", desc: "Possibly fixed tattoos not saving when you back out of the tattooshop menu" },
			49: { type: "bug", desc: "Fixed weapons being put away when you empty the magazine" },
			50: { type: "bug", desc: "Fixed sniper ammo loading 30 instead of 5" },
			51: { type: "bug", desc: "Possibly fixed a few hospital errors" },
			52: { type: "add", desc: "Added Boss Menus for EMS and Police to Hire/Fire/Promote/Demote other players" },
			53: { type: "add", desc: "Added new fishing minigame" },
			54: { type: "change", desc: "When you throw trash into a garbage truck, it now opens the trunk" },
			55: { type: "add", desc: "Marked Tire Nutz on the map" },
			56: { type: "bug", desc: "Fixed Police Fining spitting an error" },
			57: { type: "add", desc: "Added Interact Slide In when at the drop off point for the transport job" },
			58: { type: "change", desc: "When you return your Transport Truck it now closes the dialogue menu" },
			59: { type: "bug", desc: "Fixed vehicle searching in MDT erroring out and completely breaking your MDT" },
			60: { type: "change", desc: "Change the bug report system to send it directly to a Github Repo for better tracking", link: "https://github.com/TheHiveRP/HiveIssues/issues" },
			61: { type: "bug", desc: "Fixed Sandwich item not working" },
			62: { type: "add", desc: "Added ability to craft Joints" },
			63: { type: "add", desc: "Added ability to use joints with added effects" },
			64: { type: "bug", desc: "Readded lost lux_vehcontrol script" },
			65: { type: "bug", desc: "Fixed double doors locks not working" },
			66: { type: "add", desc: "Added lock to Chow hall at prison" },
			67: { type: "add", desc: "Added a few missing maps" },
			68: { type: "change", desc: "Changed the style of the Chat" },
		}
	},

	"Sunday, July 4th 2021": {
		version: "pre-alpha-1.8.0",
		current: false,
		"logs": {
			1: { type: "bug", desc: "Fix Pool Notifications not showing" },
			2: { type: "add", desc: "Added new 'alert' notification type" },
			3: { type: "change", desc: "Changed most (if not all) core commands chat events to use the new chat system" },
			4: { type: "remove", desc: "Removed Nationality from the character information" },
			5: { type: "add", desc: "Added a Stress system" },
			6: { type: "add", desc: "Added New HUD Design" },
			7: { type: "add", desc: "Added a small loading animation on the loading screen" },
			8: { type: "bug", desc: "Fix Fleeca Bank back gate not hiding the required items UI when you leave the area" },
			9: { type: "optimize", desc: "Optimized the Fleeca Bank Robbery Script" },
			10: { type: "bug", desc: "Fixed Alta Fleeca Bank vault door having incorrect heading" },
			11: { type: "bug", desc: "Fixed house robberies giving items that didn't exist" },
			12: { type: "bug", desc: "Fixed house robberies saying you found nothing when you really did" },
			13: { type: "bug", desc: "Fixed house robberies causing the recieved item UI to show and never hide" },
			14: { type: "add", desc: "Added dropping fingerprints in Pacific Standard Bank Heist" },
			15: { type: "bug", desc: "Fixed some issues with the Money Truck Robbery. Theres still a few bugs with this though" },
			16: { type: "add", desc: "Added better notifications to Pool Script" },
			17: { type: "change", desc: "Completely redid Crafting to use a Tier system" },
			18: { type: "add", desc: "Added Crafting Bench to house decoration shop" },
			19: { type: "optimize", desc: "Optimized the Eye-Interact Script" },
			20: { type: "add", desc: "Added shops to Hotdog Stands, Snack Machines, & Drink Machines. All can be accessed by using your eye Interact" },
			21: { type: "bug", desc: "Fixed ID translations" },
			22: { type: "add", desc: "Added xa21 to the back-engines list" },
			23: { type: "add", desc: "Added a bunch of new food and drink items" },
			24: { type: "add", desc: "Added polaroids (WIP)" },
			25: { type: "bug", desc: "Fixed bug where you remain on a radio channel even when your radio has been removed from your inventory" },
			26: { type: "add", desc: "Added saving/loading tweets" },
			27: { type: "add", desc: "Added police app to allow people to send a message to police" },
			28: { type: "change", desc: "Changed Twitter App to be Dark Mode instead of Light Mode" },
			29: { type: "remove", desc: "Removed default Grove Street house that shows in the Housing App if you don't own a house" },
			30: { type: "bug", desc: "Fixed Twitter TimeAgo logic" },
			31: { type: "add", desc: "Added Up -n- atom store (NPC for now, looking to make it player ran at a later date)" },
			32: { type: "add", desc: "Added Tattoo shops" },
			33: { type: "change", desc: "When getting into a trunk of a vehicle, it now checks if the vehicle has a frunk or trunk and places you in the correct position" },
			34: { type: "optimize", desc: "Optimized Vehicle Key system" },
			35: { type: "bug", desc: "Fixed EMS Reviving and Treating Wounds mechanics not working" },
			36: { type: "change", desc: "Decreased the trip chance when you have a leg injury from (Running = 50 > Running = 25) and (Walking = 15 > Walking = 10)" },
			37: { type: "bug", desc: "Fixed not being able to sell animal carcasses to Butcher" },
			38: { type: "change", desc: "Reenabled the dynamite requirement for blast mining" },
			39: { type: "bug", desc: "Fixed blast mining cooldowns being broken" },
			40: { type: "bug", desc: "Fixed interact popup still showing the option to place explosives even when the vein is empty" },
			41: { type: "add", desc: "Added a /evidence <id> command to open a specific stash" },
			42: { type: "change", desc: "Switched Dialogue script to use the interact key instead of checking for the E key" },
			43: { type: "optimize", desc: "Optimized the binoculars script" },
			44: { type: "add", desc: "Added animations to eating and drinking" },
			45: { type: "remove", desc: "Removed the Crouching and Proning script (for now)" },
			46: { type: "optimize", desc: "Optimized the weapon draw script" },
			47: { type: "add", desc: "Added ability to eat cooked fish" },
			48: { type: "change", desc: "Tweaked all hunger/thirst values for foods and drinks" },
			49: { type: "add", desc: "Added vector3 support to doorlock script" },
			50: { type: "add", desc: "Added locks to all cell doors at the prison" },
			51: { type: "add", desc: "Added ability to change radio volume" },
			52: { type: "bug", desc: "Fixed being able to input a channel on the radio while the radio is off" },
			53: { type: "add", desc: "Added disply to show the player when the radio is off" },
		}
	},
}

let LogTypes = {
	bug: "fa-virus-slash",
	fix: "fa-virus-slash",
	change: "fa-exchange-alt",
	add: "fa-plus",
	remove: "fa-minus",
	misc: "fa-ellipsis-h",
	optimize: "fa-tachometer-alt",
}

window.onload = (event) => {
	for (log in Logs) {
		let logTitle = log
		let LogsList = Logs[log].logs

		let newLog = document.createElement("DIV")
		newLog.id = "changelog-chunk"

		// Create list of the logs
		let theList = ""
		for (list in LogsList) {
			if ( LogsList[list].link ) {
				theList = theList + '<li><i class="fas ' + LogTypes[LogsList[list].type] + ' fa-sm fa-fw" style="color: white;"></i> ' + LogsList[list].desc + ' <a href="' + LogsList[list].link + '" target="_blank"><i id="change-link" class="fa fa-question-circle"></i></a> </li>'
			} else {
				theList = theList + '<li><i class="fas ' + LogTypes[LogsList[list].type] + ' fa-sm fa-fw" style="color: white;"></i> ' + LogsList[list].desc + ' </li>'
			}
		}

		let changeCount = Object.keys(LogsList).length

		if (Logs[log].current == true) {
			newLog.innerHTML = '<div id="chunk-header" onclick="ToggleShow(this)"> <p>' + logTitle + '</p> <i class="fas fa-minus fa-sm fa-fw" id="chunk-head-icon"></i></div> <ul id="chunk-list" style="display: block;"> ' + theList + ' <p id="chunk-foot">' + Logs[log].version + ' | ' + changeCount + ' Changes </p> </ul> '
		} else {
			newLog.innerHTML = '<div id="chunk-header" onclick="ToggleShow(this)"> <p>' + logTitle + '</p> <i class="fas fa-plus fa-sm fa-fw" id="chunk-head-icon"></i></div> <ul id="chunk-list" style="display: none;"> ' + theList + ' <p id="chunk-foot">' + Logs[log].version + ' | ' + changeCount + ' Changes </p> </ul> '
		}

		document.getElementById("changelogs").appendChild(newLog)
	}
};

function ToggleShow(ele) {
	let changeList = ele.parentElement.querySelector("#chunk-list")
	let toggleIcon = ele.querySelector("#chunk-head-icon")

	if ( changeList.style.display == "none" ) {
		changeList.style.display = "block"
		toggleIcon.classList.remove("fa-plus")
		toggleIcon.classList.add("fa-minus")
	} else {
		changeList.style.display = "none"
		toggleIcon.classList.remove("fa-minus")
		toggleIcon.classList.add("fa-plus")
	}
}