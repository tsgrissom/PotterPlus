# Contributing to BetterPotter

I recommend reading this guide in its entirety before submitting a pull request or contributing to BetterPotter.

## Q&A

#### What is the exact goal of this project?

> The goal of BetterPotter is to create a set of extensible and flexible configurations for NathanWolf's Magic plugin. I am constantly striving to keep these configurations up-to-date with the latest Harry Potter canon while still being well-balanced for Harry Potter servers to use and build upon.

#### What sort of pull requests are you looking for?

> Anything! If you can make even the slightest contribution to BetterPotter it's pretty awesome on you. That said, I especially like marking off some of the items on the to do list or resolving issues from the [issue tracker](https://github.com/grisstyl/BetterPotter/issues) as soon as possible.

#### I don't know how to configure the Magic plugin. How can I still help?

> Magic is a fun plugin to work with! I'd be glad to give you some pointers on learning, though I understand if you are unwilling to commit the time. Besides written contributions, I appreciate reviewing the configuration for balance issues or bugs which can be added to the issue tracker.

#### I'm interested in obtaining write access. How would I do this?

> I'm willing to bring in contributors with write access to the repository who can prove that they have a good idea of what they are doing with little to no guidance on my part. Contact me on Discord _T0xicTyler#6978_ or open an issue [here](https://github.com/grisstyl/BetterPotter/issues).

## Pull Requests

Before submitting a pull request to BetterPotter, please check the following:

1. The directories are correct. BetterPotter has a specific organization which evolves over time as new features of Magic are utilized. As a general rule, I utilize the recursive loading feature of Magic wherein configuration is split up into separate, categorized files under each respective directory. To understand this, check out the `/spells/` or `/wands/` and observe the file structure.
2. The file formatting is correct. All files are named in all lowercased snake case (with underscores between each individual word) and end in `.yml`.
3. All top-level nodes of configuration are formatted in all lowercase with no spacing between words.
