{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["prettier"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": [
			"error",
			"unix"
		],
		"semi": [
			"error",
			"always"
		],
        "no-console": "warn"
    }
}
