const core = require('@actions/core')
const mingine = require('mingine')
const readpkg = require('read-pkg')
const semver = require('semver')

async function action () {
  try {
    const path = core.getInput('path')
    const engines = await mingine(path)
    const package = await readpkg(path)

    console.log(package)

    const node = engines.node ? engines.node.minimum : undefined

    core.setOutput('node', node)
  } catch (error) {
    core.setFailed(error.message)
  }
}

action()