PotterPlus lays out a seven-year education path for servers to build upon. Each year the player will gradually purchase a set of new spells until they are ready to graduate to the next year.

In addition to the spells they have purchased, there is one more required spell that the player must unlock before graduating to the next year. It is at the server's discretion how they want the player obtaining this spell. Personally, I'd recommend a questline that grants them the spell at the end. 

> TIP: To give a player a spell, use the /wandp <player> add <spell-key> command.

Alternatively, you could remove the hidden required spell requirement by going through each year file and removing the `required_spells` block and placing the required spell into the `spells` list.

[Click here to view path setup](https://github.com/tsgrissom/PotterPlus/tree/master/paths)

## Post-Graduation Pathing

As of right now there is a post-graduation pathing system in place. From a `choosepath` NPC, graduates can select from one of three post-grad careers which are designed through Magic classes (`auror`, `professor`, `darkwizard`). These classes provide a number of benefits including superior mana regeneration, more spells, and passive buffs while holding your wand.