#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import path from 'node:path'
import fs from 'fs-extra'

spawnSync('npx', ['react-router', 'typegen'], {
	cwd: process.env.EPICSHOP_PLAYGROUND_DEST_DIR,
})
