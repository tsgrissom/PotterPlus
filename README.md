# BetterPotter

Visit the [wiki](https://github.com/grisstyl/BetterPotter/wiki) for more information.

[Changelog](https://github.com/grisstyl/BetterPotter/blob/master/changelog.md)

[License](https://github.com/grisstyl/BetterPotter/blob/master/license.md)

## TODO

### General

* Make sure every spell has sounds
* Finish spells in `to_redo.yml`
* Overhaul spells with attributes
* Add brooms again
* Add `.gitattributes`
* Test out multi-line spell upgrade messages
* Remove unnecessary parameters from spells
* Add distances to mobs so they are less crazy persistent
* Implement `longapparate` based on recall again
* Add optional dark upgrade for `flight`
* Fix custom projectile spells mid-flight redirection when turning
* Add tags (`noduel`, stuff like that)
* Add `pvp_restricted` flags
* Check if `enchanting.yml` is even a thing anymore
* Make mobs more aggressive as they get damaged with `min_damage` flags, etc.
* Change upgrade messages.
* Implement Nathan's post-grad ideas
* Convert concatenated names of wands and spells to use underscores
* Add more shops like a joke shop for fun items, book store, etc.
* Make firestorm place fire trail while moving instead of at the end

### Known bugs

#### Spells

* Obliviate Maxima doesn't work, Obliviate does
* `upgrades` is broken for me locally but not for Nathan
* Effects are lost from `avis` -> `lapifors`, `effects/mobs/undo_effects` current workaround

### Other ideas

#### Items

* Portkey -> Teleports to a random warp
* Beaded handbag -> Stash items in enderchest
* Camera -> Takes pictures via maps
* Floopowder
* Dungbombs
* Bombs
* Brooms
* Invisibility cloak -> Armor which casts an Invisibility spell
* Deluminator -> Eliminates lights in the area
* Foe-glass
* Marauder's Map
* Remembrall -> Flashes pink and red glass and tells you if you have any lost wands
* Secrecy sensor
* Quidditch balls -> Based on flashbang spell, bounces around with more speed
* Godric Gryffindor's Sword -> An iron sword imbued with magic such as expelliarmus
* Sorting hate
* Two-way mirrors
* Whiz-bangs -> Crazy fireworks, come in Basic Blaze Box of Deflagration Deluxe
* Skiving snackboxes -> A box of snacks which cause illness
* Decoy detonators -> Sends a hopper projectile which explodes to create a distraction
* Peruvian instant darkness powder -> Covers the surrounding area in darkness powder
* Flying carpet -> Casts modified air scooter with random color carpet mount
* Time turner
* Potions? Might want to just handle the effects and let them pick a third-party to cast

#### Mobs

* Snatcher -> A less-powerful deatheather
* Deatheater -> Geared-out zombie with slowness that can cast a number of spells
* Dementor -> A wither who can drain you, slowing you down with a wither effect
* Thestral -> Skeletal horse,
* Owl -> Bats, maybe drops random things like papers?
* House-Elf -> Baby villagers with light magic
* Goblin -> Another baby villager
