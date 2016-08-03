import {expect} from 'chai'
import {reportJson, reportJsonFromHttp} from '../src/reporter'

describe('z-index', function() {
  describe('reportJson', function() {
    it('should get json objects from css string, simple css', function() {
      let css = '.myClass {z-index: 1}'

      let result = reportJson(css)

      let expectedResult = {
        1: ['.myClass']
      }
      expect(result).to.deep.equal(expectedResult)
    })

    it('should report 2 levels of z-index', function() {
      let css = '.myClass {z-index: 1} .myClass2 {z-index: 2}'

      let result = reportJson(css)

      let expectedResult = {
        1: ['.myClass'],
        2: ['.myClass2']
      }
      expect(result).to.deep.equal(expectedResult)
    })
  })
})