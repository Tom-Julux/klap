#!/usr/bin/env node
const path = require('path')
const { init, klap, read, info, error } = require('./dist')
const { name, version } = require('./package.json')
const command = process.argv[2]

;(async () => {
	switch (command) {
		case 'init':
			info(`${name}@${version} - Initializing your package...`)
			await init(command)
			break
		case 'build':
		case 'watch':
		case 'start':
			info(`${name}@${version} - Working on ${command}`)
			const pkg = JSON.parse(await read(path.join(process.cwd(), 'package.json')))
			await klap(command, pkg)
			break
		default:
			error('No Such Command !!')
	}
})()