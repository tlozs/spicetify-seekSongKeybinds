# Seek Song Keybinds

A **[Spicetify](https://github.com/spicetify/cli)** extension for Spotify that enables YouTube-like keybinds to jump in the song that is currently playing.

## How to install

### 1. Copy `seekSongKeybinds.js` to the Spicetify extensions folder of your OS


| **Platform**   | **Path**                                                                             |
|----------------|--------------------------------------------------------------------------------------|
| **Windows**    | `%appdata%\spicetify\Extensions\`                                                    |
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/.config/spicetify/Extensions` or `~/.spicetify/Extensions`                        |


### 2. After putting the extension file into the correct folder, run the following command to install the extension:

```sh
spicetify config extensions seekSongKeybinds.js
```


### Or manually edit the `config-xpui.ini` file. Add `seekSongKeybinds.js` to the extensions key. If there are other files listed there already, use the | character as a separator.
Example:

```ini
[AdditionalOptions]
...
extensions = someExtension.js|someOtherExtension.js|seekSongKeybinds.js
```


### 3. Then apply the changes:

```sh
spicetify apply
```

## How to use

- press keys `0-9` to jump to 0%-90% of the song duration
- press `left arrow` or `right arrow` to jump 5 seconds backward or forward
