# Sanitize branch name action

This action sanitize branch name with RFC1123 standard
https://tools.ietf.org/html/rfc1123

It will also truncate the string to the desired length and remove any ending '-' characters

## Inputs

### `branch-name`

**Required** The branch name.

### `max-length`

Maximum length to truncate the desired string

## Outputs

### `sanitized-branch-name`

The sanitized branch name.

## Example usage

```
uses: snappycommerce/sanitize-branch-name-action@v1
with:
  branch-name: 'mona the octocat'
  max-length: '30'
```
