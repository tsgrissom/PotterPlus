# Roadmap

## General

* TODO Review default files
* TODO Re-balance how the year upgrades work and what they change

## Data Pack

* TODO Look through data pack features and plot out more of what to do
* TODO Finish cleaning out the pack

**Models**

* Re-do Harry Potter wand with better proportions
* Re-do the black base wand to be consistent with the others
* Voldemort's wand
* Draco Malfoy's wand
* Lucius Malfoy's wand
* Hermione Granger's wand
* Snape's wand
* Sirius Black's wand
* Luna Lovegood's wand

* Wand ticket
* House scarfs
* House hats
* Wizard chess
* Cauldrons
* Rowena Ravenclaw's diadem
* Helga Hufflepuff's cup
* Salazar Slytherin's locket
* Sword of Godric Gryffindor
* Moody's magical eye
* Beaded handbag
* Deluminator
* Peruvian Instant Darkness Powder
* Portable Swamp
* Deflagration Deluxe & Basic Blaze Box
* Gillyweed (on a food item?)

**Features to look into**

* Can fire be customized in some way with the custom model data feature? Different colored flames would be useful.
* Customizing the UI
* Moving over to a new icon set/converting existing icon set to use custom model data
* 3D model potions

## Spells

* TODO Make sure all spells have sounds
* TODO Clean up spell files (order their sections consistently and remove unnecessary flags)
* TODO Check Fantastic Beasts for new spells and review online spell lists
* TODO Since particle performance has gone down, go through with F3 enabled and review which SFX cause performance drops
* Is there a way to implement side-along apparition?
* Re-implement short vs. long distance apparition
* Look into wandless magic
* Animagus

**Upcoming Spells**

* SPELL Riddikulus
* SPELL Reducto -> Fiery ash effects on a projectile that does damage with a burst of sulphur drops
* SPELL Diffindo -> Damages armor? Cuts through wool?
* SPELL Relashio -> Stronger Diffindo
* SPELL Knee-Reversal Hex -> Causes target to walk in some weird way (look into reversed movement implemented as a custom action)
* SPELL Appare Vestigium -> In a swirl of gold nearby players are tracked
* SPELL Protego Diabolica -> Some sort of damage reversal/absorption version of protego with flames
* SPELL Nebulus -> Creates a swirl of descending fog
* SPELL Sonorus  -> Makes the person speak in all caps
* SPELL Quietus -> Makes the person speak in all lowercase
* SPELL Silencio -> Silences the target and renders them unable to cast spells
* SPELL Anti-Apparition Charm -> Makes it so the afflicted cannot apparate
* SPELL Armor-Bewitching Charm -> Causes suits of armor (iron golems) to sing (particles and perhaps some sort of sound?)
* SPELL Bat-Bogey Hex -> Spawns some sort of mob with gross particles that attacks the target
* SPELL Circumrota -> Causes the target to rotate
* SPELL Geminio -> Duplicates items with a push of velocity
* SPELL Anti-Gravity Mist Charm -> Creates a golden mist AOE that applies the levitation effect

## Items

**Upcoming Magical Objects**

* ITEM Remembrall -> Flashes pink and red glass and tells you if you have any lost wands
* ITEM Quidditch balls -> Based on flashbang spell, bounces around with more speed
* ITEM Skiving snackboxes -> A box of snacks which cause illness
* ITEM Decoy detonators -> Sends a hopper projectile which explodes to create a distraction
* ITEM Invisibility cloak -> Creates a shield particle effect, and vanishes the caster, stashing the wand and applying a slight slowness debuff
* ITEM Philosopher's stone -> Maybe just a cosmetic item with high value, but could also bring up a selector to convert metal to gold
* ITEM Wizard Crackers -> Short range throwable crackers that pop and create small fireworks
* ITEM Dissimulator -> A musical instrument that plays music and sounds with puffs of multi-colored smoke
* ITEM Exploding Snap Cards -> Pieces of (paper?) that explode when thrown
* ITEM Beaded Handbag -> Access to your enderchest (perhaps serialize to the BP plugin for bigger inventory)
* ITEM Deluminator -> Clears any light effects nearby (Potion effects in an AOE, light blocks, LightAPI lights)
* ITEM Mokeskin Pouch -> A small furry pouch worn around the neck that carries items
* ITEM Ravenclaw Diadem -> Bestows intelligence upon the wearer
* ITEM Hufflepuff's Cup -> Gives random potions from a list
* ITEM Slytherin Locket -> Bestows enhanced dueling skills upon the wearer

**Upcoming Potions**

* POTION Dizziness Draught - Gives confusion and different types of weakness
* POTION Drink of Despair - Gives extreme wither effect
* POTION Elixir of Life - Gives absorption
* POTION Elixir to Induce Euphoria - Casts a modified cheering charm
* POTION Fatiguing Infusion - Saps hunger from target until they cannot run and applies slight slowness
* POTION Felix Felicis - Definitely give luck, perhaps speed and jump boost along with temporarily reducing spell costs and decreasing spell cooldown
* POTION Forgetfulness Potion - Apply global cooldown to spells
* POTION Girding Potion - Gives saturation, fills hunger, and gives absorption
* POTION Invigoration Draught - Gives speed
* POTION Mandrake Restorative Draught - Cures slowness and petrification
* POTION Manegro Potion - Equip player’s own skull temporarily
* POTION Memory Potion - Reduces spell costs and cooldowns
* POTION Muffling Draught - Silences spell casts temporarily
* POTION Murtlap Essence - Heals
* POTION Pepperup Potion - Cures poison, gives speed, cancels curse of bogies
* POTION Polyjuice - Temporarily disguise as another random username
* POTION Revive Potion - Casts rennervate on self
* POTION Scintillation Solution - Restores a portion of mana
* POTION Skele-Gro - Fake damages the player (through effectlib?) but gives regeneration
* POTION Sleeping Draught - Applies confusion and at the peak of it makes them blind, unable to move or jump
* POTION Strengthening Potion - Gives strength
* POTION Wiggenweld Potion - Cures minor damage, cure sleep effects

## Mobs

**Upcoming features**

* TODO Make mobs more aggressive as they get damaged with `min_damage` flags, etc.

**Upcoming creatures**

* MOB Flobberworms -> Endermite or Silverfish with no AI that drops Flobberworm Mucus (slime balls) when killed
* MOB Chizpurfles -> Cave spiders with low health and no interesting attributes
* MOB Diricawls -> Some type of flightless bird (maybe no AI) that casts a modified apparate when attacked
* MOB Fairies -> Take a look at how Magic did fairies by default
* MOB Grindylows -> Squids with short-distance offensive spells
* MOB Jobberknolls -> Bird that makes no sounds and then dies and releases a long, loud scream
* MOB Puffskeins -> Pufferfish with no AI?
* MOB Doxys - Vexes that have short-ranged offensive attacks and float around. Doxy Queen variants.
* MOB Jarveys -> Foxes that call the player rude names and can short-range offensive attack similar to Wampuses
* MOB Leprechauns -> Baby villagers that drop small amounts of galleons upon death
* MOB Pixies - Vexes that spawn in swarms with low health, float around and debuff the player slightly but strong in groups
* MOB Snatcher -> A less-powerful deatheather
* MOB Deatheater -> Geared-out zombie with slowness that can cast a number of spells
* MOB Dementor -> A wither who can drain you, slowing you down with a wither effect
* MOB Thestral -> Skeletal horse
* MOB Owl -> Bats, maybe drops random things like papers?
* MOB House-Elf -> Baby villagers with light magic
* MOB Goblin -> Another baby villager
