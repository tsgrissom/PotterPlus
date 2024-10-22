# PotterPlus Resource Pack

This is the resource pack for the [PotterPlus](https://github.com/PotterPlus/PotterPlus)

[Credits](https://github.com/grisstyl/PotterPlus/wiki/Credits)

PotterPlus' resource pack is included in the default PotterPlus setup. This resource pack's primary look is using the [John Smith Legacy pack](https://www.johnsmithlegacy.co.uk/) with combined aspects of NathanWolf's Magic plugin's resource pack along with custom assets. View the credits link above for specific credits to the artists.

## Custom models

This resource pack adds new models and textures for you to utilize.

### Wands

| Name | Id |
|------|----|
| Black wand | wooden_hoe{CustomModelData:1} |
| Brown wand | wooden_hoe{CustomModelData:2} |
| White wand | wooden_hoe{CustomModelData:3} |
| Light brown wand | wooden_hoe{CustomModelData:4} |
| Grey wand | wooden_hoe{CustomModelData:5} |
| Harry Potter wand | wooden_hoe{CustomModelData:10} |
| Elder wand | wooden_hoe{CustomModelData:11} |
| Narcissa Malfoy wand | wooden_hoe{CustomModelData:12} |
| Ron Weasley first wand | wooden_hoe{CustomModelData:13} |
| Bellatrix Lestrange first wand | wooden_hoe{CustomModelData:14} |
| Draco Malfoy wand | wooden_hoe{CustomModelData:15} |

### Brooms

> Broom models and textures provided by Droobledore for sole use with the Magic plugin.

| Name | Id |
|------|----|
| Firebolt | wooden_hoe{CustomModelData:200} |
| Nimbus 2000 | wooden_hoe{CustomModelData:201} |
| Nimbus 2001 | wooden_hoe{CustomModelData:202} |

### Hats

| Name | Id |
|------|----|
| Gryffindor scarf | iron_ingot{CustomModelData:1} |
| Slytherin scarf | iron_ingot{CustomModelData:2} |
| Sorting hat | iron_ingot{CustomModelData:3} |

### Misc. Items

| Name | Id |
|------|----|
| Wand box | wooden_hoe{CustomModelData:100} |
| Marauder's Map | wooden_hoe{CustomModelData:101} |

## Symbols

There are some symbols included in the resource pack for use with GUIs.

| Name | Id |
|------|----|
| Arrow down | iron_axe{CustomModelData:1} |
| Arrow left | iron_axe{CustomModelData:2} |
| Arrow right | iron_axe{CustomModelData:3} |
| Arrow up | iron_axe{CustomModelData:4} |
| AC | iron_axe{CustomModelData:5} |
| CC | iron_axe{CustomModelData:6} |
| Ellipses | iron_axe{CustomModelData:7} |
| Exclamation gold | iron_axe{CustomModelData:8} |
| Exclamation white | iron_axe{CustomModelData:9} |
| No | iron_axe{CustomModelData:10} |
| Yes | iron_axe{CustomModelData:11} |
| Mxp | iron_axe{CustomModelData:12} |
| Question gold | iron_axe{CustomModelData:13} |
| Question white| iron_axe{CustomModelData:14} |

## Custom sounds

This resource pack adds custom sounds on top of the ones already introduced by the Magic resource packs. These sounds are:

* `potterplus.block`
* `potterplus.cast_blast`
* `potterplus.cast_break`
* `potterplus.cast_fire`
* `potterplus.cast_fire_unique`
* `potterplus.cast_quiet`
* `potterplus.cast_sharp`
* `potterplus.cast_sharp_alt`
* `potterplus.glass`
* `potterplus.impact`
* `potterplus.potion_brew`
* `potterplus.quick_cast`
* `potterplus.teleport`
* `potterplus.whip`
* `potterplus.whoosh_loud`
* `potterplus.zap`
* `potterplus.dark_whoosh`
* `potterplus.evil_whoosh`
* `potterplus.ignite`
* `potterplus.whoosh`
* `potterplus.swish`

[Magic RP sounds](https://github.com/elBukkit/MagicPlugin/wiki/Sound) (Some have been removed from the PotterPlus pack)

## Disabling PotterPlus resource pack

> Something to note: PotterPlus has completely done away with the old icon mappings for spell icons, wands, etc. Disabling the PotterPlus resource pack entirely will result in broken spell icons, wands, etc.

If you wish to disable the PotterPlus resource pack in favor of the Potter RP provided by Magic, simply remove the `resource_pack` line from the `config.yml`.

Alternatively, if you don't want the datapack or use another plugin to manage resource packs, you can disable all Magic-managed RPs by replacing the `resource_pack` line from the `config.yml` with the following:

`resource_pack: ""`
