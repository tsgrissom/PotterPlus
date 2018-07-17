# BetterPotter

Visit the [wiki](https://github.com/grisstyl/BetterPotter/wiki) for more information.

[Changelog](https://github.com/grisstyl/BetterPotter/blob/master/changelog.md)

[Contribution Guide](https://github.com/grisstyl/BetterPotter/blob/master/CONTRIBUTING.md)

[License](https://github.com/grisstyl/BetterPotter/blob/master/license.md)

[Issue Tracker](https://github.com/grisstyl/BetterPotter/issues)

## TODO

### General

* Make sure every spell has sounds
* Modify every spell to have their numbers changed based on attributes defined in `/attributes/`
* Remove unnecessary parameters from spells
* Clean up the order of spell definition files (no section -> `actions` -> `effects` -> `parameters` -> `costs`)
* Add distances to mobs so they are less persistent
* Implement `longapparate` based on recall again
* Add dark upgrade for `flight`
* Fix custom projectile spells mid-flight redirection when turning (Ex. `locomotormortus`)
* Add tags (`noduel`, `nojail`, etc.)
* Make mobs more aggressive as they get damaged with `min_damage` flags, etc.
* Implement Nathan's post-graduation ideas on multiple branching paths
* Add more shops like a joke shop for fun items, book store, etc.
* Make firestorm place fire trail while moving instead of at the end
* Investigate `mode: cast` for fun wands
* Use some sort of template to simplify fun item wand making
* Replace all fake warmup spells with a real warmup
* Add Riddikulus
* Plan for 1.13 material changes
* Fix spells that shouldn't be PVP restricted

### Other ideas

#### Items

* Camera -> Takes pictures via maps
* Remembrall -> Flashes pink and red glass and tells you if you have any lost wands
* Quidditch balls -> Based on flashbang spell, bounces around with more speed
* Skiving snackboxes -> A box of snacks which cause illness
* Decoy detonators -> Sends a hopper projectile which explodes to create a distraction
* Flying carpet -> Casts modified air scooter with random color carpet mount
* Potions? Might want to just handle the effects and let them pick a third-party to cast

#### Mobs

* Snatcher -> A less-powerful deatheather
* Deatheater -> Geared-out zombie with slowness that can cast a number of spells
* Dementor -> A wither who can drain you, slowing you down with a wither effect
* Thestral -> Skeletal horse
* Owl -> Bats, maybe drops random things like papers?
* House-Elf -> Baby villagers with light magic
* Goblin -> Another baby villager
