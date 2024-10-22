[File structure](https://github.com/tsgrissom/PotterPlus/wiki/File-Structure-and-Configuration)

File structure in PotterPlus is designed in such a way so that it can be clear what is your configuration and what is added by PotterPlus. For viewing, editing, and managing YAML files, PotterPlus recommends using the program [Atom](https://atom.io/).

## Some useful Atom tips

> Keybindings should roughly be the same on Mac, replacing a Ctrl key press with Cmd. Refer to the [Atom flight manual](https://flight-manual.atom.io/) for more help.

* **Ctrl-Shift-F** can be used to search for text in any files.
* **Ctrl-T** can be used to search for any specific file.

## Customizing your PotterPlus setup

To customize your PotterPlus setup, I recommend following the [getting started instructions](https://github.com/tsgrissom/PotterPlus/wiki/Getting-Started) to install via loading it as an example. This will allow you to write your own configuration on top of PotterPlus without needing to navigate the complex file structure.

For example, if you wanted to turn Stupefy from red to blue as it has appeared in some video game portrayals, you could do the following in your `spells.yml`:

```
stupefy:
  icon: diamond_axe{CustomModelData:20}
  icon_disabled: diamond_hoe{CustomModelData:20}
  effects:
    cast:
      - class: EffectSingle
        sound: magic.zap
        location: origin
        effectlib:
          class: Cone
          iterations: 10
          particle: redstone
          color: 349beb
          lengthGrow: 0.3
          radiusGrow: 0.005
          updateLocations: false
          updateDirections: false
    tick:
      - location: target
        effectlib:
          class: Sphere
          particle: spell_mob
          color: 349beb
          duration: 50
          radius: 0.1
    hit:
      - class: EffectSingle
        location: target
        sound: magic.hit
        firework: burst
        color: 349beb
```