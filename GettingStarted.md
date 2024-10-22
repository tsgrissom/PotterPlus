# Getting Started

## Installing Magic

* Grab your copy of [Magic](https://www.spigotmc.org/resources/magic.1056/).
* Place the JAR into your `/plugins/` folder and restart your server.
* Verify you have installed the latest version of Magic by performing `/magic` in-game.

## Automatic installation

In Magic 8.0+ there is a mechanism for loading examples from GitHub, allowing you to install PotterPlus with commands and begin to configure it yourself.

> Use the "potterplus" namespace argument to properly load instructions on startup.

1. `/mconfig example fetch potterplus https://github.com/tsgrissom/PotterPlus/archive/master.zip`
2. `/mconfig example set potterplus`

Every time you want to update PotterPlus, simply re-fetch and set the example.

## Manual installation

If you would rather manually install PotterPlus, you can do so by following these steps. Note that it will be more difficult to tailor PotterPlus to your specific needs.

1. Download the latest PotterPlus zip from [here](https://github.com/tsgrissom/PotterPlus/archive/master.zip)
2. Extract the zip's contents to your `/plugins/Magic/` folder
3. Restart your server

## Requirements

PotterPlus now features a re-worked Lumos Solem which throws an actual light source that will stick anywhere to be more faithful to the lore. Requires [LightAPI](https://www.spigotmc.org/resources/lightapi-fork.48247/). Magic recognizes that there is *potential* for light sources to not be properly undone.

## Setup

Progression in PotterPlus is, by default, made to work through NPCs. Magic features built-in NPCs which you can learn about [here](https://github.com/elBukkit/MagicPlugin/wiki/NPC).

This is generally how the server should flow for new players:

1. Player joins server. They obtain a Wand Ticket (`ticket`)
2. Player takes their Wand Ticket to an NPC which casts the `wandshop` spell on them.
3. Player trades their Wand Ticket (`ticket`) for a Wand Box (`wandbox`)
4. Player opens the Wand Box and gets their wand.
5. Player attends a class, beats a quest, etc. and obtains Academic Credits.
6. Player spends their Academic Credits at an NPC which casts `spellshop` on them.
7. Player can purchase spells from this Spell Shop.
8. Once the player has obtained all the spells for their class year, they need just one more spell before graduation to the next year. This spell is not obtainable in the `spellshop`. It is up to the server to decide how the player gets this spell to graduate. See the [Final Spells](https://github.com/tsgrissom/PotterPlus/wiki/Final-Spells) section.

### Essential Spells

> TIP: Test spells with `/cast <spell-key>` command

`wandshop` is the spell for the player to trade the Wand Ticket they receive when they first join the server.

`spellshop` is the spell for the player to spend Academic Credits on new spells and progressing their knowledge.

[`shop_spells_required`](RequiredSpells.md) opens the Required Spell Shop for the player, allowing them to spend Completion Credits on required spell books to finish their year.

`upgrades` is the spell for the player to view their progression. The more they cast a spell, the stronger that spell becomes.

### Essential items

> TIP: Items can be given with the /mgive command.

`ticket` is the wand ticket players will receive when they first join the server.

`wandbox` is the wand box that players will receive when they trade their `ticket` at an `wandshop` NPC. This wand box will open and give them their wand when they select it in their inventory.

`randomizedpotterwand` is the actual wand the players will receive and keep when they open their wand box.

#### Currency

Currency is special in the way that it can be given directly to the player's balance or as an item they have to deposit by right-clicking.

As item: `/mgive <player> <currency>|<amount>`
As direct deposit: `/mgive <player> <currency> <amount>`

`ac` is Academic Credits which are the currency the player will obtain through whatever you choose (slaying monsters, attending classes, completing quests, etc.) The player will trade Academic Credits at a `spellshop` NPC for new spells.

`cc` is Completion Credits. More on those in the [Required Spells](RequiredSpells) section.
