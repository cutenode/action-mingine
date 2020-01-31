# @cutenode/action-mingine

This action checks your minimum Node.js engines as defined by your modules' `engines`.

## Inputs

- `path` string - the path to check for `node_modules`. Default: `./`

## Outputs

- `node` string - the minimum usable version of Node.js as defined by your dependencies.

## Example usage

```yaml
uses: cutenode/action-mingine
with:
  path: './'
```
