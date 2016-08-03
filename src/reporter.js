import cssom from 'cssom'
import request from 'request-promise'

export function reportJson(cssString) {
  let report = {}
  let parsed = cssom.parse(cssString)

  for(let cssRule of parsed.cssRules) {
    if(cssRule.style) {
      var zIndex = cssRule.style['z-index']

      if (zIndex !== undefined) {
        if (!report[zIndex])
          report[zIndex] = []
        report[zIndex].push(cssRule.selectorText)
      }
    }
  }

  return report
}

export function reportJsonFromHttp(url) {
  return request(url)
    .then(cssString => reportJson(cssString))
}
