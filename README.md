# The Randomatics

Drupal version of The Randomatics

## Requirements

- [DDev](https://ddev.com/get-started/)

## Getting started

- `ddev start`
- `ddev composer install`
- `ddev drush si minimal` - to be replaced with a snapshot later.
- `ddev drush config-set "system.site" uuid 3a60452d-f435-49aa-8029-402f096ae8ea` - Updates the site UUID so the config imports without issue.
- `ddev drush cim` - one day this will work out of the box, but the snapshot will replace it anyway
- Site is available at [https://therandomatics-drupal.ddev.site](https://therandomatics-drupal.ddev.site)

## Setting up Storybook

- `cp web/sites/example.settings.local.php web/sites/default/settings.local.php`
- `ddev drush cr`
- `ddev yarn install`
- `ddev yarn storybook`
- Storybook instance is viewable at [https://therandomatics-drupal.ddev.site:6006](https://therandomatics-drupal.ddev.site:6006)

## Updating Storybook

Storybook is based on the [Storybook](https://www.drupal.org/project/storybook) module. All stories are kept in `web/themes/custom/the_randotheme/stories` in a twig file that needs to be recompiled if you update any of the arguments or add new stories.

- `ddev drush storybook:generate-all-stories`

If you want to have `watch` automatically update any changes run

- `watch --color ddev drush storybook:generate-all-stories`
