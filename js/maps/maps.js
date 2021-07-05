/*
Beginner = 1
Journeyman = 2

Warrior = 7
Barbarian = 8
Squire = 9

Archer = 19
Bowman = 20
Hunter = 21

Mage = 31
Wizard = 32
Shaman = 33
*/
var charSubclassMap = {
    "Journeyman": "Beginner",
    "Barbarian": "Warrior",
    "Squire": "Warrior",
    "Bowman": "Archer",
    "Hunter": "Archer",
    "Shaman": "Mage",
    "Wizard": "Mage"
};
var OLDcharSubclassMap = {
    2: 1,
    8: 7,
    9: 7,
    20: 19,
    21: 19,
    33: 31,
    32: 31
};

var skillIndexMap = {
    0: "character",
    1: "mining",
    2: "smithing",
    3: "chopping",
    4: "fishing",
    5: "alchemy",
    6: "catching",
    7: "trapping",
    8: "construction",
    9: "worship"
};

var obolNameMap = {
    "ObolLocked1": "None",
    "ObolLocked2": "None",
    "ObolLocked3": "None",
    "ObolLocked4": "None",
    "Blank": "None",

    "ObolAmarokA": "Granite Obol of Amarok's Stare",
    "ObolBronze0": "Bronze STR Obol",
    "ObolBronze1": "Bronze AGI Obol",
    "ObolBronze2": "Bronze WIS Obol",
    "ObolBronze3": "Bronze LUK Obol",
    "ObolBronzeCard": "Bronze Obol of Cards",
    "ObolBronzeCatching": "Bronze Obol of Few Flies",
    "ObolBronzeChoppin": "Bronze Obol of Chippin Chops",
    "ObolBronzeCons": "Bronze Obol of Construction",
    "ObolBronzeDamage": "Bronze Obol of Puny Damage",
    "ObolBronzeDef": "Bronze Obol of Defence",
    "ObolBronzeEXP": "Bronze Obol of Experience",
    "ObolBronzeFishing": "Bronze Obol of Finite Fish",
    "ObolBronzeKill": "Bronze Obol of Multikill",
    "ObolBronzeMining": "Bronze Obol of Small Swings",
    "ObolBronzePop": "Bronze Obol of Pop",
    "ObolBronzeTrapping": "Bronze Obol of Trapping",
    "ObolBronzeWorship": "Bronze Obol of Worship",
    "ObolEfauntA": "Skeletal Obol of Efaunt's Gaze",
    "ObolGold0": "Gold STR Obol",
    "ObolGold1": "Gold AGI Obol",
    "ObolGold2": "Gold WIS Obol",
    "ObolGold3": "Gold LUK Obol",
    "ObolGoldCard": "Golden Obol of Cards",
    "ObolGoldCatching": "Golden Obol of Insane Insects",
    "ObolGoldChoppin": "Golden Obol of Huge Hackin",
    "ObolGoldCons": "Golden Obol of Construction",
    "ObolGoldDamage": "Golden Obol of Big Boy Damage",
    "ObolGoldDef": "Golden Obol of Defence",
    "ObolGoldEXP": "Golden Obol of Experience",
    "ObolGoldFishing": "Golden Obol of Crazy Carp",
    "ObolGoldKill": "Golden Obol of Ultrakill",
    "ObolGoldLuck": "Golden Obol of Triple Sixes",
    "ObolGoldMining": "Golden Obol of Diligent Digging",
    "ObolGoldMoney": "Golden Obol of Plentiful Riches",
    "ObolGoldPop": "Golden Obol of Poppity Pop",
    "ObolGoldTrapping": "Golden Obol of Trapping",
    "ObolGoldWorship": "Golden Obol of Worship",
    "ObolPink0": "Dementia STR Obol",
    "ObolPink1": "Dementia AGI Obol",
    "ObolPink2": "Dementia WIS Obol",
    "ObolPink3": "Dementia LUK Obol",
    "ObolPinkCard": "Dementia Obol of Cards",
    "ObolPinkCatching": "Dementia Obol of Idk Yet",
    "ObolPinkChoppin": "Dementia Obol of WOWOWOWWO",
    "ObolPinkCons": "Dementia Obol of Construction",
    "ObolPinkDamage": "Dementia Obol of Infinite Damage",
    "ObolPinkDef": "Dementia Obol of Defence",
    "ObolPinkEXP": "Dementia Obol of Experience",
    "ObolPinkFishing": "Dementia Obol of Monument Marlins",
    "ObolPinkKill": "Dementia Obol of Killionaire",
    "ObolPinkLuck": "Dementia Obol of Infinisixes",
    "ObolPinkMining": "Dementia Obol of Magisterial Metals",
    "ObolPinkPop": "Dementia Obol of Pop Pop Pop Pop",
    "ObolPinkTrapping": "Dementia Obol of Trapping",
    "ObolPinkWorship": "Dementia Obol of Worship",
    "ObolPlatinum0": "Platinum STR Obol",
    "ObolPlatinum1": "Platinum AGI Obol",
    "ObolPlatinum2": "Platinum WIS Obol",
    "ObolPlatinum3": "Platinum LUK Obol",
    "ObolPlatinumCard": "Platinum Obol of Cards",
    "ObolPlatinumCatching": "Platinum Obol of Idk Yet",
    "ObolPlatinumChoppin": "Platinum Obol of Lumby Loggo",
    "ObolPlatinumCons": "Platinum Obol of Construction",
    "ObolPlatinumDamage": "Platinum Obol of Lethal Damage",
    "ObolPlatinumDef": "Platinum Obol of Defense with an S",
    "ObolPlatinumEXP": "Platinum Obol of Experience",
    "ObolPlatinumFishing": "Platinum Obol of Tremendous Trout",
    "ObolPlatinumKill": "Platinum Obol of Killimanjaro",
    "ObolPlatinumLuck": "Platinum Obol of Yahtzee Sixes",
    "ObolPlatinumMining": "Platinum Obol of Dwarven Delving",
    "ObolPlatinumPop": "Platinum Obol of Poppity Poppy",
    "ObolPlatinumSpeed": "Platinum Obol of Blinding Speed",
    "ObolPlatinumTrapping": "Platinum Obol of Trapping",
    "ObolPlatinumWorship": "Platinum Obol of Worship",
    "ObolSilver0": "Silver STR Obol",
    "ObolSilver1": "Silver AGI Obol",
    "ObolSilver2": "Silver WIS Obol",
    "ObolSilver3": "Silver LUK Obol",
    "ObolSilverCard": "Silver Obol of Cards",
    "ObolSilverCatching": "Silver Obol of Big Bugs",
    "ObolSilverChoppin": "Silver Obol of Big Bark",
    "ObolSilverCons": "Silver Obol of Construction",
    "ObolSilverDamage": "Silver Obol of Little Damage",
    "ObolSilverDef": "Silver Obol of Defence",
    "ObolSilverEXP": "Silver Obol of Experience",
    "ObolSilverFishing": "Silver Obol of Puny Pikes",
    "ObolSilverKill": "Silver Obol of Megakill",
    "ObolSilverLuck": "Silver Obol of Double Sixes",
    "ObolSilverMining": "Silver Obol of Moderate Mining",
    "ObolSilverMoney": "Silver Obol of Pocket Change",
    "ObolSilverPop": "Silver Obol of Pop Pop",
    "ObolSilverTrapping": "Silver Obol of Trapping",
    "ObolSilverWorship": "Silver Obol of Worship"

};

// maps stored stamp ID to it's display name in game
var stampIdToDisplayMap = {
    0: "Sword Stamp",
    1: "Heart Stamp",
    2: "Mana Stamp",
    3: "Tomahawk Stamp",
    4: "Target Stamp",
    5: "Shield Stamp",
    6: "Longsword Stamp",
    7: "Kapow Stamp",
    8: "Fist Stamp",
    9: "Battleaxe Stamp",
    10: "Agile Stamp",
    11: "Vitality Stamp",
    12: "Book Stamp",
    13: "Manamoar Stamp",
    14: "Clover Stamp",
    15: "Scimitar Stamp",
    16: "Bullseye Stamp",
    17: "Feather Stamp",
    18: "Polearm Stamp",
    19: "Violence Stamp",
    20: "Buckler Stamp",
    21: "FILLER",
    22: "Sukka Foo",
    23: "Arcane Stamp",
    24: "FILLER",
    25: "Steve Sword",
    26: "Blover Stamp",
    27: "Stat Graph Stamp",
    28: "FILLER",
    29: "FILLER",
    30: "FILLER",
    31: "FILLER",
    32: "FILLER",
    33: "FILLER",
    34: "FILLER",
    1000: "Pickaxe Stamp",
    1001: "Hatchet Stamp",
    1002: "Anvil Zoomer|Stamp",
    1003: "Lil' Mining Baggy|Stamp",
    1004: "Twin Ores Stamp",
    1005: "Choppin' Bag|Stamp",
    1006: "Duplogs Stamp",
    1007: "Matty Bag Stamp",
    1008: "Smart Dirt Stamp",
    1009: "Cool Diggy Tool|Stamp",
    1010: "High IQ Lumber|Stamp",
    1011: "Swag Swingy Tool|Stamp",
    1012: "Alch Go Brrr|Stamp",
    1013: "Brainstew Stamps",
    1014: "Drippy Drop Stamp",
    1015: "Droplots Stamp",
    1016: "Fishing Rod Stamp",
    1017: "Fishhead Stamp",
    1018: "Catch Net Stamp",
    1019: "Fly Intel Stamp",
    1020: "Bag o Heads Stamp",
    1021: "Holy Mackerel|Stamp",
    1022: "Bugsack Stamp",
    1023: "Buzz Buzz Stamp",
    2000: "Questin Stamp",
    2001: "Mason Jar Stamp",
    2002: "Crystallin",
    2003: "Blank",
    2004: "Apple Stamp",
    2005: "Potion Stamp",
    2006: "Golden Apple|Stamp",
    2007: "Blank",
    2008: "Card Stamp",
    2009: "Blank",
    2010: "Blank",
    2011: "Blank",
    2012: "Talent I Stamp",
    2013: "Talent II Stamp",
    2014: "Talent III Stamp",
    2015: "Talent IV Stamp",
    2016: "Talent V Stamp",
    2017: "Talent S Stamp"
};

// maps the star signs ID (index) with their in game name
var starSignMap = {
    999: "None",
    0: "The Buff Guy",
    1: "Flexo Bendo",
    2: "The Book Worm",
    3: "The Fuzzy Dice",
    4: "Dwarfo Beardus",
    5: "Hipster Logger",
    6: "Pie Seas",
    7: "Shoe Fly",
    8: "Blue Hedgehog",
    9: "Gum Drop",
    10: "Activelius",
    11: "Pack Mule",
    12: "Ned Kelly",
    13: "Robinhood",
    14: "Pirate Booty",
    15: "Muscle Man",
    16: "Fast Frog",
    17: "Smart Stooge",
    18: "Lucky Larry",
    19: "Silly Snoozer",
    20: "The Big Comatose",
    21: "Miniature Game",
    22: "Mount Eaterest",
    23: "Bob Build Guy",
    24: "The Big Brain",
    25: "The OG Skiller",
    26: "Grim Reaper",
    27: "The Fallen Titan",
    28: "The Forsaken",
    29: "Mr No Sleep",
    30: "Sir Savvy",
    31: "All Rounder",
    32: "Fatty Doodoo",
    33: "Chronus Cosmos"
}

var fishingBaitMap = {
    0: "Fly",
    1: "Wormie",
    2: "Iron Hook",
    3: "Basic Bobber",
    4: "Dualhook Prongs",
    5: "Pound of Steel",
    6: "Pound of Feathers",
    7: "Massless Unit",
    8: "Literal Elephant",
    9: "Valve Circles",
    10: "Dynamite",
    11: "Not Dynamite",
    12: "Triple Threat",
    13: "Crash Box",
    14: "Fat Albert"
}

var fishingLineMap = {
    0: "Fishing Twine",
    1: "Copper Twine",
    2: "Silver Twine",
    3: "Gold Twine",
    4: "Platinum Twine",
    5: "Leafy Vines",
    6: "Fun Flags",
    7: "Electrical Wire",
    8: "Wiener Links",
    9: "Zeus Gon Fishin",
    10: "Needledrop",
    11: "Spoons Lol",
    12: "Its a Boy",
    13: "Its a Girl",
    14: "Its Alright"
}

// this should probably change.. but it works...
var cardSetMap = {
    "None": "None",
    "{%_EXP_if_below_Lv_50" : "Blunder Hills",
    "{%_All_Food_Effect" : "Yum-Yum Desert",
    "{%_Skill_Efficiency" : "Easy Resources",
    "{%_Skill_EXP_Gain" : "Medium Resources",
    "{%_DEF_and_ACC" : "Frostbite Tundra",
    "{%_Skill_AFK_Gain Rate" : "Hard Resources",
    "{%_Dmg,_Drop,_and_EXP" : "Bosses n Nightmares",
    "{%_Drop_Rate" : "Events"
}
