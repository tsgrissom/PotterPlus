PotterPlus is a set of configuration files for NathanWolf's [MagicPlugin](https://github.com/elBukkit/MagicPlugin). The files are structured in a particular way so that it's easy for you to install, update, and add your own changes on top of thanks to the flexibility of Magic's configuration system.

[Customization](https://github.com/tsgrissom/PotterPlus/wiki/Customization)

## File Structure

[Root](https://github.com/tsgrissom/PotterPlus)

A bit about the top level files and folders:

* MD files are information files. The [README](https://github.com/tsgrissom/PotterPlus/blob/master/README.md) and [CHANGELOG](https://github.com/tsgrissom/PotterPlus/blob/master/CHANGELOG.md) are two important ones.
* A `/defaults/` folder containing the combined configs describing the settings Magic uses by gathering from all the other folders plus their corresponding YAML file.
* A folder for each type. Each one has a corresponding YAML file (ending in `.yml`) which is empty. This is because PotterPlus occupies the folders for containing its configuration of the Magic plugin and leaves the YAML files in the root directory open so that additional configuration can easily be put there and PotterPlus can be updated.
* A file for each type ending in `.yml`. Each one has a corresponding folder where PotterPlus contains its settings for that particular feature.