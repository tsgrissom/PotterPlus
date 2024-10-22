PotterPlus' economy has a couple things to take note of.

[Shops](https://github.com/tsgrissom/PotterPlus/wiki/Shops)

## Currency

There are two ways to give Magic currency. The first method is used to directly deposit the currency into the player's balance. The second method is used to give the player an item they can manually deposit by right clicking.

`/mgive <player> <currency> <amount>`
`/mgive <player> <currency>|<amount>`

### Galleons

Galleons are the primary currency used for buying material things in the world. These can be spent at book shops, potion shops, broom shops, etc. Give this currency out as a reward for doing things like completing quests and fighting creatures.

#### Examples

* `/mgive Notch galleon 10` - Direct deposit 10 Galleons into Notch's account.
* `/mgive Notch galleon|10` - Give Notch a Galleon item valued at 10 Galleons that they can deposit by right-clicking.

### Academic Credits `ac`

Academic Credits are the currency you obtain from doing classes, completing questlines, etc. as determined by the server. AC can be spent at a `spellshop` to purchase new spells for your current year. Once the player has obtained all of the spells for their [year](https://github.com/tsgrissom/PotterPlus/wiki/Paths), they need to obtain the [final spell](https://github.com/tsgrissom/PotterPlus/wiki/Final-Spells).

#### Examples

* `/mgive Notch ac 10` - Direct deposit 10 Academic Credits into Notch's account.
* `/mgive Notch ac|10` - Give Notch an Academic Credit item they can deposit by right-clicking.

### Completion Credits `cc`

Completion Credits are a currency you can give sparingly at the end of a questline for the player's academic year, for example. Give the player a single CC and they can use it at a `finalspellshop` to gain the final spell book for their year which they can read to learn the spell. Once they've learned that final spell they can return to the `spellshop` to learn more.

#### Examples

* `/mgive Notch cc 10` - Direct deposit 10 Completion Credits into Notch's account.
* `/mgive Notch cc|10` - Give Notch a Completion Credit item valued at 10 CC they can deposit by right-clicking.

### Mob XP `mobxp`

Mob XP is a currency dropped by creatures when you defeat them. This is usually based on the mob's health divided by ten. You can trade this at an `xpshop` for stuff.

#### Examples

* `/mgive Notch mobxp 10` - Direct deposit 10 Mob XP into Notch's account.
* `/mgive Notch mobxp|10` - Give Notch a Mob XP item they can deposit by right-clicking.
