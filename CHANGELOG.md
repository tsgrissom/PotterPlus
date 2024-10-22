# Changelog

Changes are organized here for record-keeping purposes. Changes are organized from top to bottom by order of most to least recent.

There is a relatively up-to-date and accurate roadmap and list of upcoming changes in the document [here](https://github.com/grisstyl/PotterPlus/blob/master/ROADMAP.md).

There is a list of current, known issues [here](https://github.com/grisstyl/PotterPlus/issues).

This is not an absolute record of *every* change that happens, just ones that are user-facing or significant under the hood. Click [here](https://github.com/grisstyl/PotterPlus/commits/master) for the absolute list.

### 6/21/21

* Arania Exumai buff
* Economy config fixes
* Acromantula spell changes

### 6/6/21

* All items are now under the `ability_` prefix
* Peruvian Powder small cooldown
* Monster Book of Monsters to be finished

### 3/9/21

* More economy messaging overhauls

### 3/8/21

* Fixed Madam Pomfrey's Charm's category
* Fixed Ollivader/ticket issue
* Touched up a bunch of economy and currency messaging
* Added path instructions to base wand
* New spell Madam Pomfrey's Charm
* Minor Ferula rework, better healing with a warmup

### 2/12/21

* Added `example.yml` to root

### 1/31/21

* Adjusted help menu
* Fixed crup and kneazle ability text
* Moved all shops to the `shop_X` namespace
* Moved all menus to the `menu_X` namespace
* Updated LICENSE
* Refreshed README
* Added `config/_examples.yml` to gitignore to prevent survival from loading

### 1/11/21

So this was a big one, sorry. Gonna break this down into pieces.

1. **Skript Changes** 2 new Skripts, refactoring
* force_pack - Forces the user to do `/getrp` on join
* op_wand_command - Do `/createopwand` while holding a wand to max its cooldown and cost reduction
* shift_right_click_character_menu - Renamed Skript
2. **Initial Game Flow Changes** Simplified game flow for admins
* Completely moved away from the idea of a `randomizedpotterwand`. All player wands are obtained through the following:

   1) Obtain a `wandbox` from a `wandshop`. You will trade your `wandticket` for it, which is your welcome wand.

   2) Right-click to open the wand box and receive your `playerwand`, the new template for player's wands in PotterPlus.

3. **New Items** Three new food items!
* Added some food items which don't do a whole lot at the moment but could be an opportunity to use a model. Butterbeer, pumpkin juice, and house elf stew items added.
4. **Trick Wand Rework**
* Trick wands have been completely reworked to function like a real wand.
* It has one row of 8 spells.
5. **Menu Changes** Made it clearer what is a menu spell
* Every menu spell is prefixed with `menu_`

### 11/19/20

* New FX Demo spell.
* New Sound Demo spell.

### 11/18/20

* Fixed loading errors by relegating examples to a new folder.
* Added version file.

### 11/17/20

* Re-branded as PotterPlus.

### 11/12/20

* Adjusted all first year spells.

### 11/11/20

* Adjusted required spell language.
* Adjusted Arania Exumai and gave it new upgrade messages.
* Rebalanced Stupefy.
* New format of upgrade messages started on Stupefy.
* Fixes and messages for Magic 8.

### 10/21/20

* Message and icon fixes for year path upgrades.

### 10/20/20

* Rictusempra changes.
* Everte Statum balance changes and new SFX.
* Arrow SFX changes.

### 10/3/20

* Fixed duplicate drops and cooldown parameters.
* Fixed linter checks.
* Adjusted Locomotor Mortis speed and SFX.
* Fixed Flagrate to be in line with new spell idea.
* Adjusted Lumos SFX.
* Appearance menu.
* Full progress menu with spells, upgrades, and wand appearances.
* Added back most particles.
* Added Skripts folder with some useful Skripts I write to work with BP.
* `actrader` NPC.
* Trade Mob XP for Galleons at `xptrader` NPCs.
* New currency Mob XP dropped by creatures on death.
* Symbols moved to iron axe namespace.
* New RP symbols.

### 9/30/20

* Economy enhancements, better messages.
* Gave Flagrate a bunch of levels across four years.
* Adjusted Lumos SFX.
* Added some symbols to RP.
* Cleared a bunch of cast and cast self messages. Probably a bunch left, fix as we go.
* Added black and grey wand appearance.
* Adjusted how Ron and Bellatrix's wands viewed.
* Fixed grey wand appearance.
* Various icon fixes.

### 9/29/20

* Added invisibility potion tiers.
* Re-worked Essence of Dittany.
* Progress Menu with advanced appearances selection.
* Light brown and grey wand appearances.
* Enhanced messages and cooldown/cost messages return.
* Enhanced Legendary Potion Shop.
* Wit-sharpening potion tiers.
* Ice potion tiers.
* Slight potion nerf with global mage cooldown of two seconds.
* Buffed Death Potion. Can now insta-kill one target with a direct hit and applies damage and wither to those in the AOE.
* Gave potion spells the correct color icon.
* Reverted particles.
* A bunch of new dialogue messages for shopkeeper spells.

### 9/28/20

* Adjustments to the starter flow and mastery spells.
* A bunch of message changes to meet the new style better.

### 9/27/20

* Gave Scribblifors and Flintifors sound effects when the item is conjured.
* Re-worked Locomotor Mortis to be a custom projectile spell.
* Adjusted Arania Exumai's SFX for the new RP.
* Gave Brackium Emendo new weights and an additional level.
* Adjusted Flagrate's overall SFX.
* Added Mastery Credit spell shop system for getting the final spell of each year.
* Adjusted how the starting flow for players works with wand shops.
* Merged John Smith Legacy into the pack.

### 9/8/20

* Cleaned up some parameter definitions (thanks MagicScan!)
* Re-worked Levicorpus with more levels as a projectile spell

### 9/7/20

* Gave Alohomora 14 levels of progression.
* Re-worked Flintifors and Scribblifors to be in line with my vision for transfiguration spells.
* Adjusted Babbling Curse SFX.
* Re-worked Vermillious and Verdimillious SFX to be in line with my vision for dueling spells.

### 8/20/20

* Adjusted Herbifors SFX.
* Added 14 levels to Flipendo, two for each year.
* Re-worked Cheering Charm as a self cast with new SFX and 7 levels.
* Re-worked max level Arania Exumai to be a lingering AOE.

### 8/19/20

* Gave Arania Exumai a rework with levels for every grade.

### 8/18/20

* Finished restoring all spell icons.

### 8/15/20

* Restored some of the icons.
* Most spell icons temporarily broken until I go through with the new icons.
* Complete overhaul of resource pack with RP now included in source.

### 5/5/20

* Made Nox actually cancel Lumos and Lumos Maxima
* Adjusted Lumos FX
* Fixed Avis/Lapifors category
* Re-worked Periculum

### 5/4/20

* Overall spell description review

### 5/3/20

* Adjusted Reducio effects
* Added some comments and moved around some spells that will be changed soon
* Re-worked Reducio and added upgrade description messages
* Added `fiendfyre|2` upgrade description message
* Removed Spongify Maxima
* Removed Periculux
* Removed Tripudio
* Gave Obliviate a cooldown
* Fixed Verdimillious parameters

### 5/2/20

* Fixed the last of specialty spells not having a category
* Removed Limus Exumai
* Gave Imperio a cooldown
* Fixed `skeleton_key_ability` category
* Re-worked Imperio with leveling

### 5/1/20

* Fixed a couple of MagicScan violations
* Added correct `confundo` spell with leveling based on `confundus`

### 4/24/20

* Gave Portus a cooldown
* Gave Volo a cooldown
* Disabled Silencio Maxima and Silencio Totalus
* Gave Flight a cooldown

### 4/5/20

* Added Bedazzling Hex

### 1/30/20

* Added Bellatrix and Ron Weasley wands

### 1/28/20

* Gave brooms some nicer lore
* Added Nimbus 2001
* Moved everything except for spell icons over to custom model data

### 1/26/20

* Added Sorting Hat model and changed numbering system for custom models
* Added custom 3D wand models. They're a little rough but there's an Elder Wand, Harry Potter wand, three basic wands, and a wand box modelled so far. More plans for the future
* Cleaned out a bunch of unnecessary stuff in the data pack

### 11/3/19

* Added `specialty` category to inherited mob spells

### 10/28/19

* Converted Flintifors and Scribblifors to use Magic item serialization
* Added `bewitchedsnowball` alias to `snowball`
* Fixed Magical Creatures category text
* Fixed Bewitched Snowball file paths
* Re-worked Bewitched Snowball
* Moved to Magic 7.7.6

### 10/19/19

* Adjusted Potion Shop UI
* Re-worked Colorvaria
* Simplified material sets
* Fixed color of Spell Shop GUI title
* Added Bundimun spawners
* Adjusted Bowtruckle spawners
* Removed "disabled" effects since it doesn't do anything significant
* Modified items.yml text to be consistent

### 10/4/19

* Adjusted costs to be more readable
* Adjusted category names to be more readable

### 9/30/19

* Overhauled wand messages to be much more readable and pretty
* Adjusted Homenum Revelio SFX
* Overhauled spell descriptions
* Fixed Vermillious not having a category
* Re-worked lore for wands and spells

### 9/29/19

* Fixed Bubblehead
* Fixed Herbifors
* Made sure every spell had an `icon_disabled` property
* Changed Erumpent type from Polar Bear to Ravager

### 9/28/19

* Added a ton of new sound effects. Check the wiki for info.
* Removed references to obsolete `icon_url`
* Added leveling to Crucio
* Cleaned up Avada Kedavra
* Re-worked Lumos Solem. Requires LightAPI.
* Tweaked Lumos and Lumos Maxima SFX to be a tad better

### 9/25/19

* Adjusted `broom` spell to levitate the player since brooms are having issues.
* Adjusted Glisseo and Finestra
* Re-formatted material files
* Moved glass types over to 1.14.4
* Fixed some spell file name formats
* Split up disabled mobs for future reference
* Added Felifors -> The cats to cauldron spell for Third Years
* Adjusted the Elder Wand again
* Fixed a bug with Potion Shops

### 9/24/19

* Adjusted and added pieces to the wand lore

### 9/23/19

* Re-worked Potion Shop (`potionshop`)
* Added Love Potion crafting
* Ashwinder mob re-worked

### 9/20/19

* Added Draught of Living Death
* Converted all offensive potions to be throwable
* Added potion type descriptor to all potion names
* Added sound FX to throwable potions
* Added Death Potions
* Added tracking radiuses to aggro mobs
* Adjusted Incendio
* Adjusted Impedimenta
* Adjusted Immobulus
* Adjusted Homenum Revelio
* Added disabled icon to Glisseo
* Changed Crup and Kneazle SFX and messages
* Re-named TO_DO.md to ROADMAP.md
* Added Oculus Potions

### 9/19/19

* Added disabled icon to Herbifors
* Balanced and fixed Glisseo
* Added disabled icon to Furnunculus
* Re-worked Fumos
* Added disabled icon to Flintifors
* Adjusted Flagrate
* Added mana costs to Firestorm
* Re-balanced Finestra
* Added Garroting Gas potions
* Added Essence of Dittany potions
* Fixed Pompion Potion and Invisiblity Potion mana costs
* Added Pompion Potions
* Added Invisibility Potions

### 9/18/19

* Moved common effects and disabled effects over to /effects/
* Added some barebones documentation to some files

### 9/17/19

* Re-worked Aguamenti SFX
* Added Flying Carpets
* Tagged a bunch of spells with nojail
* PVP restricted a bunch of spells

### 9/16/19

* Removed non-existent path references from classes

### 9/15/19

* Removed attributes
* Tailored the Elder Wand
* Re-worked Incarcerous leveling
* Re-worked Brachiabindo leveling
* Re-worked Arresto Momentum leveling
* Re-worked Aqua Eructo leveling
* Re-worked leveling for Alohomora
* Re-worked leveling for Alarte Ascendare
* Added leveling to Aberto
* Fixed fizzle and backfire messages

### 9/14/19

* Re-structured and updated to do file
* Re-structured spell files
* Updated spell messages to fit format
* Changed the format of a bunch of message files
* Re-structured /messages/ folder
* Added Wit-Sharpening Potions

### 9/13/19

* Linted and cleaned up /messages/ folder
* Linted and cleaned up /wands/ folder
* Linted and cleaned up /spells/ folder
* Added .yamllint file

### 9/12/19

* Fixed Ferula disabled icon
* Balanced Extinguishing Charm
* Balanced Expulso
* Balanced Expelliarmus
* Balanced Everte Statum
* Balanced Erecto
* Fixed Epoximise disabled icon
* Balanced Emancipare
* Optimized Disillusionment Charm
* Balanced Defodio
* Balanced Colloshoo
* Balanced Cheering Charm
* Balanced Cascading Jinx
* Fixed Carpe Retractum disabled icon
* Adjusted Bubblehead Charm
* Fixed Brackium Emendo disabled icon
* Balanced Bombarda
* Balanced Baubillious
* Balanced Babbling Curse
* Balanced Avis
* Balanced Arresto Momentum
* Balanced Arania Exumai
* Balanced Apparate
* Balanced Aparecium
* Balanced Alohomora
* Balanced Aguamenti
* Balanced Accio
* Fixed Furnunculus
* Fixed Flight spell
* Added Confusing Concoctions
* Added Blood-Replenishing Potions
* Added Ice Potions
* Added Beguiling Bubbles
* Added Befuddlement Draughts
* Added Baruffio's Brain Elixirs
* Added Babbling Beverages
* Added Antidote to Uncommon Poisons
* Added Antidote to Common Poisons
* Patched up a weird lore bug in `potionshop`
* Added Anti-Paralysis Potions
* Added Amortentia
* Added Burping Potions
* Added a Potion Shop (`potionshop`)
* Added Love Potions

### 9/11/19

* Fixed some `choosepath` messages
* Fixed Sword of Gryffindor ability categories
* Fixed `baubillious` category
* Split up `config.yml` under `/config/`
* First draft of post-grad progression. Visit a `choosepath` NPC.
* Upgraded visuals of Flame-Freezing Charm
* Made fun wand flags consistent

### 9/10/19

* Re-arranged wands folder
* Fixed Melofors material reference
* Fixed weird implementation of Trick Wand
* Added new ability to Sword of Godric Gryffindor
* Fixed weird implementation of Portable Swamp
* Added burp sound to Gillyweed
* Overhauled SFX for `peruvianpowder`
* Fixed weird implementation of Peruvian Instant Darkness Powder
* Fixed weird implementation of Conductor's Wand and Music Box
* Fixed weird implementation of Basic Blaze Boxes and Deflagration Deluxes
* Fixed weird implementation of Keys and Skeleton Keys
* Fixed weird wand implementation of Gillyweed
* Fixed a bug where `trickwand` did nothing
* Overhauled visuals of the `basicblazebox` and `deflagrationdeluxe`

### 9/9/19

* Added more paths to flesh out how post-grad pathing will work
* Removed unnecessary comments from mob files
* Split up Kneazle and Crup mob types into separate files
* Removed AC drops from mobs

### 9/8/19

* Fixed a grammatical error in two wand descriptions
* Re-worked Pulvifors effects and added leveling
* Re-balanced Bewitched Snowball costs and effects
* Removed Bombarda `warmup` effects and placed them under `cast`
* Re-worked how `bubblehead` works
* Normalized Lumos potion effect level

### 9/7/19

* Removed path reference that was causing a warning

### 9/4/19

* Re-named `ollivander` to `wandshop`
* Adjusted Conductor's Wand and Music Box wand keys to match style
* Adjusted effects when purchasing and opening a Wand Box

### 8/29/19

* Added NPC category, split up `shops.yml`, fixed `bookshop`
* Skinned text for `choosepath` to match the UI
* Added `dark` path
* Split up years into a folder
* Fully implemented `choosepath` spell with UI
* Added a `choosepath` spell
* Cleaned up some unnecessary files

### 8/28/19

* Moved base classes script from `classes.yml` to `/classes/base.yml`
* Un-ignored classes folder. Beginning of branching paths starts here.
* Re-named "special.yml" materials to "stairs.yml"
* Made all attributes have a min value  of 1
* Cleaned up shop spells, disabled a few, added Galleons
* Changed shop messages to match UI
* Sweeping changes to clean up wands, disable a ton, etc.
* Disabled unnecessary automata
* Disabled unnecessary effects `butterfly` and `fountain`
* Updated `default` spell text to fit the new UI

### 8/27/19

* Adjusted spell upgrade text to match new UI
* Added official data pack. See more on wiki
* Turned down `araniaexumai` sound fx
* Adjusted `lumosmaxima` effects and re-balanced
* Adjusted `lumos` effects
* Adjusted starting events
* Disabled `wandbox` template
* Tinkered with `godricssword` to a more balanced place

### 8/8/19

* Changed `basic_blaze_box_ability` icon to resolve console warning
* Tweaked and sorted various message files
* Adjusted and sorted spell categories
* Sorted some spell YAML files
* Adjusted cooldown for `finiteincantatem`

### 8/6/19

* Adjusted mana costs for `ferula`
* Re-worked and fixed `brackiumemendo`
* Adjusted mana costs and added sound fx for `brachiabindo`
* Fixed grammatical error in `colloshoo` description
* Adjusted `araniaexumai` cooldown
* Adjusted `incendio` cooldown
* Added sound fx and adjusted cooldown for `flipendo`
* Re-worked spell `nox`

### 8/5/19

* Balanced `locomotormortis` and added sound fx
* Fixed example spell being unfaithful to lore `locomotomortus` to `locomotormortis`

### 8/4/19

* Fixed error creating item fish in console

### 8/2/19

* Changed `percutios` to `lightningcurse`
* Changed `bruchumaculeatos` to `stinginghex`
* Changed `cantis` to `singingcharm`
* Changed `multabasiorum` to `cascadingjinx`
* Changed `flagellos` to `whippinghex`
* Changed `frigusignatus` to `flamefreezingcharm`
* Changed `felixleporemos` to `cheeringcharm`
* Changed `ignisdisceditus` to `extinguishingcharm`
* Changed `despello` to `babblingcurse`
* Updated and re-arranged all of the MD files

### 8/1/19

* Added mana cost to Scribblifors along with spell charge time text
* Increased cooldown, undo time, and added sound fx to Lumos Solem
* Converted Immobulus to a CustomProjectile
* Converted Rictusempra to a CustomProjectile

### 7/31/19

* Balanced timings of Arresto Momentum and Pulvifors, respectively
* Added chance of fizzling to Alohomora
* Increased cooldown and added sound fx to Immobulus
* Increased cooldown and mana cost on Everte Statum
* Increased cooldown on Wingardium Leviosa
* Increased cooldown on Flagrate
* Increased cooldown on Pulvifors
* Increased cooldown on Despello (Babbling Curse)

### 7/30/19

* Added sound fx to Arresto Momentum
* Changed Herbifors sound fx to be less irritating
* Adjusted warm-up time and added warm-up time description to Bombarda
* Increased cooldown, warm-up time, and added warm-up time description to Carpe Retractum

### 7/29/19

* Adjusted sound fx for Erecto
* Added visual and sound fx to Impervius
* Adjusted visual fx for fourpoint, added sound

### 8/28/18

* Adjusted Emancipare effects and audio
* Added sound fx to Volo
* Fixed Verdimillious lore
* Fixed Patronus cast audio
* Fixed Avada Kedavra warmup lore
* Fixed Arrow Maxima delay issues
* Changed Lacarnum Inflamari sound fx
* Added Alarte Ascendare sound fx
* Added Pulsus sound fx
* Changed Glisseo to use packed ice instead of transparent ice for build security
* Adjusted Aparecium fx with added sound
* Made Obliviate cause confusion
* Added sound fx to Obliviate
* Fixed Obliviate Maxima issues

### 8/27/18

* Added Carpe Retractum sound fx
* Overhauled Patronus Charm
* Improved Disillusionment Charm fx

### 8/26/18

* Buffed Disillusionment Charm and added levels
* Added levels to Liberacorpus
* Fixed a hidden spells issue
* Sound fx changes to Colloshoo, Brackium Emendo, Vermillious, and Verdimillious
* Icon fixes for various spells
* Improved Portable Swamp

### 7/23/18

* Re-worked Ferula
* Re-worked Tarantallegra

### 7/18/18

* Re-worked Volo
* Re-worked leveling for Accio with slight nerf
* Added sound effects to Arania Exumai and Limus Exumai
* Re-worked Impedimenta with new effects and a stat nerf

### 7/17/18

* Re-wrote Expelliarmus from scratch
* Re-worked Brackium Emendo
* Re-worked Obliviate particle effects
* Buffed Verdimillious and followed Vermillious
* Buffed Vermillious
* Buffed Multa Basorium

### 7/16/18

* Nerfed Everte Statum
* Re-worked Furnunculus with new icon, effects, levels
* Re-balanced Incendio with new levels
* Fixed slowness on a bunch of spells
* Added slowness to Scribblifors
* Added slowness to Flintifors
* Added more depth to the leveling of Homenum Revelio

### 5/16/18

* Added Basic Blaze Box and Deflagration Deluxe

### 5/13/18

* Overhauled Salvio Hexia with new levels and stats.
* Nerfed Expulso and spread it out across more levels.

### 5/12/18

* Buffed Homenum Revelio across multiple levels
* Buffed Percutios and split it into more levels
* Updated Carpe Retractum with new level and balance
* Re-worked Immobulus leveling
* Re-worked Rictusempra leveling
* Re-worked Herbifors leveling
* Re-worked Waddiwasi leveling
* Re-worked Epoximise leveling
* Re-worked Lumos Maxima leveling
* Fixed progression on Flagrate
* Re-worked Vermillious leveling
* Re-worked Ascendio
* Overhauled spell and wand looks
* Fixed broken potion effects
* Added Godric Gryffindor's Sword
* Added more levels to Aguamenti
* Added Peruvian Instant Darkness Powder

### 5/11/18

* Added back Firebolt and Nimbus brooms
* Buffed and added leveling to Scribblifors and Flintifors
* Converted all upgrade messages to new multi-line format
* Re-worked Bubblehead Charm with leveling and nerf
* Added Ignis Disceditus leveling
* Added Bewitched Snowball leveling
* Fixed Lumos leveling

### 5/10/18

* Nerfed Arania Exumai
* Changed `flagrate|2` to be more visible
* PVP restricted spells that should be PVP restricted
* Fix Conductor's Wand inheritance
* Added Trick Wands
* Added Overgrown Bowtruckle

### 5/9/18

* Added Key and Skeleton Key items
* Added spawners for Erklings, Bowtruckles, and Centaurs
* Added AC drops to some Magic Mobs
* Re-worked Flagellos
* Re-worked Alohomora and Aberto
* Added Portable Swamps
* Converted to use custom currency system
* Removed all custom messages in preparation for overhaul
* Revamped Aparecium
* Added Ashwinder spawners
* Restructured spawner automata
* Added Erumpent spawners
* Buffed Erumpent

### 5/6/18

* Converted all spells spells that used long-form class references to use short-hands. (ex. `AtomEffect` -> `Atom` or `CustomProjectileAction` -> `CustomProjectile`)

### 5/5/18

* Converted all `PotionEffectAction` spells to not use aggregate format
* Re-balanced and nerfed Protego
* Overhauled `frigusignatus`, the Flame-Freezing Charm particles and buffed it
* Fixed Crucio particles from Magic update
* Nerfed and overhauled Avada Kedavra
* Buffed and fixed Gillyweed messages
* Fixed Expelliarmus colors
* Fixed passthrough for Expelliarmus and made `hit_entity` apply on hitting anything
* Changed Atmos and Meteolojinx Recanto messages to be less verbose
* Re-worked Lumos, Lumos Maxima, and Lumos Solem
* Added spawner automata

### 5/4/18

* Removed `not_canon` folder
* Moved Avis and Lapifors to action system and used new `undo_entity` effects
* Updated Periculum colors to be lore-accurate, added EffectRing to periculum|3
* Fixed base wands starting with Vermillious due to classes

### 5/3/18

* Added license.md
* Shifted material lists from `materials.yml` to use `/materials/`
* Re-organized the `/wands/` folder to negate the need for a `wands.yml` file
* Disabled a bunch of wands that are unnecessary for this configuration and created a list of those to overhaul (`/wands/to_redo.yml`)
