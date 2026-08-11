# ⚠️ Important Configuration

Please complete the following configuration steps before running the project.

Copy composer.json and prp-flowy-core.js in the root of your plugin folder.

---

## 📄 1. Update `composer.json`

Locate the `extra` object in your `composer.json` file and update the `__UNIQUE_ID__` placeholder:

```json
"extra": {
    "strauss": {
        "target_directory": "app/vendor",
        "namespace_prefix": "YOUR_PLUGIN_ID_UPPERCASE\\",
        "classmap_prefix": "YOUR_PLUGIN_ID_UPPERCASE",
        "packages": [
            "edesacee/flowy-core"
        ]
    }
}
```

> 💡 **Note:** Replace `__UNIQUE_ID__` with your plugin's unique ID in **UPPERCASE**. This will properly apply the namespace `__UNIQUE_ID__\Flowy` to the classes.

---

## 📄 2. Update `prep-flowy-core.js`

Locate the `prefix` variable in your `prep-flowy-core.js` file and update the `__unique_id__` placeholder:

```javascript
const prefix = 'your_plugin_id_lowercase';
```

> 💡 **Note:** Replace `__unique_id__` with your plugin's unique ID in **LOWERCASE**.


## 📄 3. Download the package
Open terminal in your plugin folder and run `composer install`.

## 📄 4. Load the classes
```
if ( file_exists( __DIR__ . '/app/vendor/autoload.php' ) ) {
    require_once __DIR__ . '/app/vendor/autoload.php';
}
```

