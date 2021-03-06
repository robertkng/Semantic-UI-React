/**
 * Tasks live in the tasks directory.
 * This file just loads all the gulp tasks.
 */
const { task, parallel } = require('gulp')
const requireDir = require('require-dir')

requireDir('./gulp/tasks')

// do not use tasks/default
// the default task must be loaded after all other tasks
// requireDir above loads all our tasks in alphabetical order
task('default', parallel('umd', 'docs'))
