const core = require('@actions/core')
const github = require('@actions/github')
const mingine = require('mingine')

async function action () {
  try {
    const path = core.getInput('path')
    const engines = await mingine(path)

    const node = engines.node ? engines.node.minimum : undefined

    core.setOutput('node', node)

    //logging!
    const payload = JSON.stringify(github.context.payload, null, 2)
    console.log(`The event payload: ${payload}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

action()