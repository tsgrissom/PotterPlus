# Linter Instructions

PotterPlus uses [yamllint](https://yamllint.readthedocs.io/en/stable/) to ensure that all YAML files follow good conventions. You can run this linter on your own variants of Magic configuration to follow the same conventions PotterPlus outlines.

[Linter Config File](https://github.com/tsgrissom/PotterPlus/blob/master/.yamllint)

## Instructions

1. Install [Python](https://www.python.org/) along with its package manager pip.
2. Verify that Python and its scripts folder are added to your system path.
3. Go to your favorite command prompt application (I recommend Git Bash) and enter `pip install --user yamllint`.
4. Restart command prompt.
5. Go to your command prompt again and navigate to your working directory (the Magic folder on your server.)
6. Run the command `yamllint ../Magic`.

This will run through all of the files inside your Magic folder, except a few explicitly excluded in the config file, and let you know what needs to be changed and where.
