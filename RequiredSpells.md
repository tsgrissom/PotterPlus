# Required Spells

> This page describes the experience with the default PotterPlus configuration. You may have customized it to have a different game flow.

At the end of each path there's a required spell that cannot be unlocked in the regular spell shop.

After purchasing all of their year's spells with Academic Credits, and in order to proceed to the next path, the player needs to obtain a **required spell**.

By default, this required spell can be obtained by spending the Completion Credits currency on a Required Spell Book. It is up to the server admins to determine how these credits are obtained.

## Completion Credits

Completion Credits are the currency used to obtain required spell books and learn the required spells. To give Completion Credits, do `/mgive <player> cc <amount>`. These credits can be spent at a Required Spell Teacher NPC.

## Recommended Approach

1. At the end of each year, in whatever form that takes for your players (like the end of a questline,) award them one Completion Credit (Item: `cc`)
2. The player should take this credit to a Required Spell Teacher NPC (Spell: `shop_spells_required`)
3. There, they can purchase the master spell book for their current path
4. After this spell is learned, and upon interacting with a spell teacher, the player will automatically graduate to the next year

Using this kind of game flow enables you to control the pace of the player's progression as well as when they are ready to proceed to the next year.
