// Copyright 2013 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Contains the mappings for ChromeVox on Android.
 * @author sorge@google.com (Volker Sorge)
 */

goog.provide('cvox.AndroidMathMap');

goog.require('cvox.MathSimpleStore');
goog.require('cvox.MathStore');
goog.require('cvox.NavDescription');


// TODO (sorge): Combine this code with the one used in Chrome.
/**
 * Create a math android mapping object.
 * @constructor
 */
cvox.AndroidMathMap = function() {

  /**
   * The compund store for symbol and function mappings.
   * @type {cvox.MathCompoundStore}
   * @private
   */
  this.store_ = cvox.MathCompoundStore.getInstance();
  cvox.AndroidMathMap.FUNCTION_MAPPINGS_
      .forEach(goog.bind(this.store_.addFunctionRules, this.store_));
  cvox.AndroidMathMap.SYMBOL_MAPPINGS_
      .forEach(goog.bind(this.store_.addSymbolRules, this.store_));

  var cstrValues = this.store_.getDynamicConstraintValues();
  /**
   * Array of domain names.
   * @type {Array.<string>}
   */
  this.allDomains = cstrValues.domain;

  /**
   * Array of style names.
   * @type {Array.<string>}
   */
  this.allStyles = cstrValues.style;
};


/**
 * Process a math expression into a navigation description.
 * @param {string} text Text representing a math expression.
 * @param {string} domain The mathematical domain.
 * @param {string} style The speech style.
 * @return {cvox.NavDescription} The navigation description for the text.
 */
cvox.AndroidMathMap.prototype.evaluate = function(text, domain, style) {
  var result = '';
  var dynamicCstr = cvox.MathStore.createDynamicConstraint(domain, style);
  result = this.store_.lookupString(text, dynamicCstr);
  return new cvox.NavDescription({text: result ? result : text});
};


/**
 * Symbol mappings.
 * @type{Array.<{category: string,
 *        mappings: Object,
 *        key: string}>}
 * @private
 */
cvox.AndroidMathMap.SYMBOL_MAPPINGS_ = [
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'exclamation mark'
     }
   },
   'key': '0021'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'quotation mark'
     }
   },
   'key': '0022'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'number sign',
       'alternative': 'hash',
       'short': 'number'
     }
   },
   'key': '0023'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'dollar sign',
       'short': 'dollar'
     }
   },
   'key': '0024'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'percent sign',
       'short': 'percent'
     }
   },
   'key': '0025'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'ampersand'
     }
   },
   'key': '0026'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'apostrophe',
       'alternative': 'apostrophe quote'
     }
   },
   'key': '0027'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'asterisk'
     }
   },
   'key': '002A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign',
       'short': 'plus'
     }
   },
   'key': '002B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'comma'
     }
   },
   'key': '002C'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'hyphen minus',
       'short': 'minus'
     }
   },
   'key': '002D'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'full stop',
       'alternative': 'period'
     }
   },
   'key': '002E'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'solidus',
       'alternative': 'slash'
     }
   },
   'key': '002F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'colon'
     }
   },
   'key': '003A'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'semicolon'
     }
   },
   'key': '003B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than sign',
       'short': 'less than'
     }
   },
   'key': '003C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign',
       'short': 'equals'
     }
   },
   'key': '003D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than sign',
       'short': 'greater than'
     }
   },
   'key': '003E'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'question mark'
     }
   },
   'key': '003F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'commercial at',
       'short': 'at'
     }
   },
   'key': '0040'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reverse solidus',
       'alternative': 'backslash'
     }
   },
   'key': '005C'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'circumflex accent',
       'alternative': 'spacing circumflex',
       'short': 'hat'
     }
   },
   'key': '005E'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'low line',
       'alternative': 'spacing underscore'
     }
   },
   'key': '005F'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'grave accent',
       'alternative': 'spacing grave',
       'short': 'grave'
     }
   },
   'key': '0060'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical line',
       'alternative': 'vertical bar'
     }
   },
   'key': '007C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'tilde'
     }
   },
   'key': '007E'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'inverted exclamation mark'
     }
   },
   'key': '00A1'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'cent sign',
       'short': 'cent'
     }
   },
   'key': '00A2'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'pound sign',
       'short': 'pound'
     }
   },
   'key': '00A3'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'currency sign',
       'short': 'currency'
     }
   },
   'key': '00A4'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'yen sign',
       'short': 'yen'
     }
   },
   'key': '00A5'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'broken bar',
       'alternative': 'broken vertical bar'
     }
   },
   'key': '00A6'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'section sign',
       'short': 'section'
     }
   },
   'key': '00A7'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'diaeresis',
       'alternative': 'spacing diaeresis',
       'short': 'double dot'
     }
   },
   'key': '00A8'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'copyright sign',
       'short': 'copyright'
     }
   },
   'key': '00A9'
  },
  {'category': 'Lo',
   'mappings': {
     'default': {
       'default': 'feminine ordinal indicator'
     }
   },
   'key': '00AA'
  },
  {'category': 'Pi',
   'mappings': {
     'default': {
       'default': 'left pointing double angle quotation mark',
       'alternative': 'left pointing guillemet'
     }
   },
   'key': '00AB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not sign',
       'short': 'not'
     }
   },
   'key': '00AC'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'registered sign',
       'alternative': 'registered trade mark sign',
       'short': 'registered'
     }
   },
   'key': '00AE'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'macron',
       'alternative': 'spacing macron'
     }
   },
   'key': '00AF'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'degree sign',
       'short': 'degree'
     }
   },
   'key': '00B0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus minus sign',
       'alternative': 'plus or minus sign',
       'short': 'plus minus'
     }
   },
   'key': '00B1'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'acute accent',
       'alternative': 'spacing acute',
       'short': 'acute'
     }
   },
   'key': '00B4'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'micro sign',
       'short': 'micro'
     }
   },
   'key': '00B5'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'pilcrow sign',
       'alternative': 'paragraph sign',
       'short': 'pilcrow'
     }
   },
   'key': '00B6'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'middle dot'
     }
   },
   'key': '00B7'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'cedilla',
       'alternative': 'spacing cedilla'
     }
   },
   'key': '00B8'
  },
  {'category': 'Lo',
   'mappings': {
     'default': {
       'default': 'masculine ordinal indicator'
     }
   },
   'key': '00BA'
  },
  {'category': 'Pf',
   'mappings': {
     'default': {
       'default': 'right pointing double angle quotation mark',
       'alternative': 'right pointing guillemet'
     }
   },
   'key': '00BB'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'inverted question mark'
     }
   },
   'key': '00BF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign',
       'short': 'multiplication'
     }
   },
   'key': '00D7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'division sign',
       'short': 'division'
     }
   },
   'key': '00F7'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'breve',
       'alternative': 'spacing breve'
     }
   },
   'key': '02D8'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'dot above',
       'alternative': 'spacing dot above'
     }
   },
   'key': '02D9'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'ring above',
       'alternative': 'spacing ring above'
     }
   },
   'key': '02DA'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'ogonek',
       'alternative': 'spacing ogonek'
     }
   },
   'key': '02DB'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'small tilde',
       'alternative': 'spacing tilde'
     }
   },
   'key': '02DC'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'double acute accent',
       'alternative': 'spacing double acute'
     }
   },
   'key': '02DD'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'hyphen'
     }
   },
   'key': '2010'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'non breaking hyphen'
     }
   },
   'key': '2011'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'figure dash'
     }
   },
   'key': '2012'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'en dash'
     }
   },
   'key': '2013'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'em dash'
     }
   },
   'key': '2014'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'horizontal bar',
       'alternative': 'quotation dash'
     }
   },
   'key': '2015'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double vertical line',
       'alternative': 'double vertical bar'
     }
   },
   'key': '2016'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double low line',
       'alternative': 'spacing double underscore'
     }
   },
   'key': '2017'
  },
  {'category': 'Pi',
   'mappings': {
     'default': {
       'default': 'left single quotation mark',
       'alternative': 'single turned comma quotation mark'
     }
   },
   'key': '2018'
  },
  {'category': 'Pf',
   'mappings': {
     'default': {
       'default': 'right single quotation mark',
       'alternative': 'single comma quotation mark'
     }
   },
   'key': '2019'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'single low 9 quotation mark',
       'alternative': 'low single comma quotation mark'
     }
   },
   'key': '201A'
  },
  {'category': 'Pi',
   'mappings': {
     'default': {
       'default': 'single high reversed 9 quotation mark',
       'alternative': 'single reversed comma quotation mark'
     }
   },
   'key': '201B'
  },
  {'category': 'Pi',
   'mappings': {
     'default': {
       'default': 'left double quotation mark',
       'alternative': 'double turned comma quotation mark'
     }
   },
   'key': '201C'
  },
  {'category': 'Pf',
   'mappings': {
     'default': {
       'default': 'right double quotation mark',
       'alternative': 'double comma quotation mark'
     }
   },
   'key': '201D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'double low 9 quotation mark',
       'alternative': 'low double comma quotation mark'
     }
   },
   'key': '201E'
  },
  {'category': 'Pi',
   'mappings': {
     'default': {
       'default': 'double high reversed 9 quotation mark',
       'alternative': 'double reversed comma quotation mark'
     }
   },
   'key': '201F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'dagger'
     }
   },
   'key': '2020'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double dagger'
     }
   },
   'key': '2021'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'bullet'
     }
   },
   'key': '2022'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'triangular bullet'
     }
   },
   'key': '2023'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'one dot leader'
     }
   },
   'key': '2024'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'two dot leader'
     }
   },
   'key': '2025'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'horizontal ellipsis'
     }
   },
   'key': '2026'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'hyphenation point'
     }
   },
   'key': '2027'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'per mille sign',
       'short': 'per mille'
     }
   },
   'key': '2030'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'per ten thousand sign',
       'short': 'per ten thousand'
     }
   },
   'key': '2031'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'prime'
     }
   },
   'key': '2032'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double prime'
     }
   },
   'key': '2033'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'triple prime'
     }
   },
   'key': '2034'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reversed prime'
     }
   },
   'key': '2035'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reversed double prime'
     }
   },
   'key': '2036'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reversed triple prime'
     }
   },
   'key': '2037'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'caret'
     }
   },
   'key': '2038'
  },
  {'category': 'Pi',
   'mappings': {
     'default': {
       'default': 'single left pointing angle quotation mark',
       'alternative': 'left pointing single guillemet'
     }
   },
   'key': '2039'
  },
  {'category': 'Pf',
   'mappings': {
     'default': {
       'default': 'single right pointing angle quotation mark',
       'alternative': 'right pointing single guillemet'
     }
   },
   'key': '203A'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reference mark'
     }
   },
   'key': '203B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double exclamation mark'
     }
   },
   'key': '203C'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'interrobang'
     }
   },
   'key': '203D'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'overline',
       'alternative': 'spacing overscore'
     }
   },
   'key': '203E'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'undertie'
     }
   },
   'key': '203F'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'character tie'
     }
   },
   'key': '2040'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'caret insertion point'
     }
   },
   'key': '2041'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'asterism'
     }
   },
   'key': '2042'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'hyphen bullet'
     }
   },
   'key': '2043'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fraction slash'
     }
   },
   'key': '2044'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double question mark'
     }
   },
   'key': '2047'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'question exclamation mark'
     }
   },
   'key': '2048'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'exclamation question mark'
     }
   },
   'key': '2049'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reversed pilcrow sign',
       'short': 'reversed pilcrow'
     }
   },
   'key': '204B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'black leftwards bullet'
     }
   },
   'key': '204C'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'black rightwards bullet'
     }
   },
   'key': '204D'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'low asterisk'
     }
   },
   'key': '204E'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'reversed semicolon'
     }
   },
   'key': '204F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'close up'
     }
   },
   'key': '2050'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'two asterisks aligned vertically'
     }
   },
   'key': '2051'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'commercial minus sign',
       'short': 'commercial minus'
     }
   },
   'key': '2052'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'swung dash'
     }
   },
   'key': '2053'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'inverted undertie'
     }
   },
   'key': '2054'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'flower punctuation mark'
     }
   },
   'key': '2055'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'three dot punctuation'
     }
   },
   'key': '2056'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'quadruple prime'
     }
   },
   'key': '2057'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'four dot punctuation'
     }
   },
   'key': '2058'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'five dot punctuation'
     }
   },
   'key': '2059'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'two dot punctuation'
     }
   },
   'key': '205A'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'four dot mark'
     }
   },
   'key': '205B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'dotted cross'
     }
   },
   'key': '205C'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'tricolon'
     }
   },
   'key': '205D'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'vertical four dots'
     }
   },
   'key': '205E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superscript plus sign',
       'short': 'superscript plus'
     }
   },
   'key': '207A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superscript minus',
       'alternative': 'superscript hyphen minus'
     }
   },
   'key': '207B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superscript equals sign',
       'short': 'superscript equals'
     }
   },
   'key': '207C'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'superscript left parenthesis',
       'alternative': 'superscript opening parenthesis'
     }
   },
   'key': '207D'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'superscript right parenthesis',
       'alternative': 'superscript closing parenthesis'
     }
   },
   'key': '207E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subscript plus sign',
       'short': 'subscript plus'
     }
   },
   'key': '208A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subscript minus',
       'alternative': 'subscript hyphen minus'
     }
   },
   'key': '208B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subscript equals sign',
       'short': 'subscript equals'
     }
   },
   'key': '208C'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'subscript left parenthesis',
       'alternative': 'subscript opening parenthesis'
     }
   },
   'key': '208D'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'subscript right parenthesis',
       'alternative': 'subscript closing parenthesis'
     }
   },
   'key': '208E'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'property line'
     }
   },
   'key': '214A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'turned ampersand'
     }
   },
   'key': '214B'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'per sign',
       'short': 'per'
     }
   },
   'key': '214C'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'aktieselskab'
     }
   },
   'key': '214D'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'turned small f'
     }
   },
   'key': '214E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'for all'
     }
   },
   'key': '2200'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'complement'
     }
   },
   'key': '2201'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'partial differential'
     }
   },
   'key': '2202'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'there exists'
     }
   },
   'key': '2203'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'there does not exist'
     }
   },
   'key': '2204'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'empty set'
     }
   },
   'key': '2205'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'increment'
     }
   },
   'key': '2206'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'nabla'
     }
   },
   'key': '2207'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of'
     }
   },
   'key': '2208'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not an element of'
     }
   },
   'key': '2209'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small element of'
     }
   },
   'key': '220A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contains as member'
     }
   },
   'key': '220B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not contain as member'
     }
   },
   'key': '220C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small contains as member'
     }
   },
   'key': '220D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'end of proof'
     }
   },
   'key': '220E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary product'
     }
   },
   'key': '220F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary coproduct'
     }
   },
   'key': '2210'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary summation'
     }
   },
   'key': '2211'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus sign',
       'short': 'minus'
     }
   },
   'key': '2212'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus or plus sign',
       'short': 'minus or plus'
     }
   },
   'key': '2213'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'dot plus'
     }
   },
   'key': '2214'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'division slash'
     }
   },
   'key': '2215'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'set minus'
     }
   },
   'key': '2216'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'asterisk operator'
     }
   },
   'key': '2217'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'ring operator'
     }
   },
   'key': '2218'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bullet operator'
     }
   },
   'key': '2219'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square root'
     }
   },
   'key': '221A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'cube root'
     }
   },
   'key': '221B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fourth root'
     }
   },
   'key': '221C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'proportional to'
     }
   },
   'key': '221D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'infinity'
     }
   },
   'key': '221E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right angle'
     }
   },
   'key': '221F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'angle'
     }
   },
   'key': '2220'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'measured angle'
     }
   },
   'key': '2221'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'spherical angle'
     }
   },
   'key': '2222'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'divides',
       'short': 'bar'
     }
   },
   'key': '2223'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not divide'
     }
   },
   'key': '2224'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'parallel to'
     }
   },
   'key': '2225'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not parallel to'
     }
   },
   'key': '2226'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and'
     }
   },
   'key': '2227'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or'
     }
   },
   'key': '2228'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection'
     }
   },
   'key': '2229'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union'
     }
   },
   'key': '222A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral'
     }
   },
   'key': '222B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double integral'
     }
   },
   'key': '222C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple integral'
     }
   },
   'key': '222D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contour integral'
     }
   },
   'key': '222E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'surface integral'
     }
   },
   'key': '222F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'volume integral'
     }
   },
   'key': '2230'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'clockwise integral'
     }
   },
   'key': '2231'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'clockwise contour integral'
     }
   },
   'key': '2232'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'anticlockwise contour integral'
     }
   },
   'key': '2233'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'therefore'
     }
   },
   'key': '2234'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'because'
     }
   },
   'key': '2235'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'ratio'
     }
   },
   'key': '2236'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'proportion'
     }
   },
   'key': '2237'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'dot minus'
     }
   },
   'key': '2238'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'excess'
     }
   },
   'key': '2239'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'geometric proportion'
     }
   },
   'key': '223A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'homothetic'
     }
   },
   'key': '223B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'tilde operator'
     }
   },
   'key': '223C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reversed tilde'
     }
   },
   'key': '223D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'inverted lazy s'
     }
   },
   'key': '223E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'sine wave'
     }
   },
   'key': '223F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'wreath product'
     }
   },
   'key': '2240'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not tilde'
     }
   },
   'key': '2241'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus tilde'
     }
   },
   'key': '2242'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'asymptotically equal to'
     }
   },
   'key': '2243'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not asymptotically equal to'
     }
   },
   'key': '2244'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'approximately equal to'
     }
   },
   'key': '2245'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'approximately but not actually equal to'
     }
   },
   'key': '2246'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither approximately nor actually equal to'
     }
   },
   'key': '2247'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'almost equal to'
     }
   },
   'key': '2248'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not almost equal to'
     }
   },
   'key': '2249'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'almost equal or equal to'
     }
   },
   'key': '224A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple tilde'
     }
   },
   'key': '224B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'all equal to'
     }
   },
   'key': '224C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equivalent to'
     }
   },
   'key': '224D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'geometrically equivalent to'
     }
   },
   'key': '224E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'difference between'
     }
   },
   'key': '224F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'approaches the limit'
     }
   },
   'key': '2250'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'geometrically equal to'
     }
   },
   'key': '2251'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'approximately equal to or the image of'
     }
   },
   'key': '2252'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'image of or approximately equal to'
     }
   },
   'key': '2253'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'colon equals',
       'alternative': 'colon equal'
     }
   },
   'key': '2254'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals colon',
       'alternative': 'equal colon'
     }
   },
   'key': '2255'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'ring in equal to'
     }
   },
   'key': '2256'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'ring equal to'
     }
   },
   'key': '2257'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'corresponds to'
     }
   },
   'key': '2258'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'estimates'
     }
   },
   'key': '2259'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equiangular to'
     }
   },
   'key': '225A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'star equals'
     }
   },
   'key': '225B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'delta equal to'
     }
   },
   'key': '225C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equal to by definition'
     }
   },
   'key': '225D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'measured by'
     }
   },
   'key': '225E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'questioned equal to'
     }
   },
   'key': '225F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not equal to'
     }
   },
   'key': '2260'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'identical to'
     }
   },
   'key': '2261'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not identical to'
     }
   },
   'key': '2262'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'strictly equivalent to'
     }
   },
   'key': '2263'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or equal to',
       'alternative': 'less than or equal to'
     }
   },
   'key': '2264'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or equal to',
       'alternative': 'greater than or equal to'
     }
   },
   'key': '2265'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than over equal to',
       'alternative': 'less than over equal to'
     }
   },
   'key': '2266'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than over equal to',
       'alternative': 'greater than over equal to'
     }
   },
   'key': '2267'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than but not equal to',
       'alternative': 'less than but not equal to'
     }
   },
   'key': '2268'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than but not equal to',
       'alternative': 'greater than but not equal to'
     }
   },
   'key': '2269'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'much less than',
       'alternative': 'much less than'
     }
   },
   'key': '226A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'much greater than',
       'alternative': 'much greater than'
     }
   },
   'key': '226B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'between'
     }
   },
   'key': '226C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not equivalent to'
     }
   },
   'key': '226D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not less than',
       'alternative': 'not less than'
     }
   },
   'key': '226E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not greater than',
       'alternative': 'not greater than'
     }
   },
   'key': '226F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither less than nor equal to',
       'alternative': 'neither less than nor equal to'
     }
   },
   'key': '2270'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither greater than nor equal to',
       'alternative': 'neither greater than nor equal to'
     }
   },
   'key': '2271'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or equivalent to',
       'alternative': 'less than or equivalent to'
     }
   },
   'key': '2272'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or equivalent to',
       'alternative': 'greater than or equivalent to'
     }
   },
   'key': '2273'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither less than nor equivalent to',
       'alternative': 'neither less than nor equivalent to'
     }
   },
   'key': '2274'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither greater than nor equivalent to',
       'alternative': 'neither greater than nor equivalent to'
     }
   },
   'key': '2275'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or greater than',
       'alternative': 'less than or greater than'
     }
   },
   'key': '2276'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or less than',
       'alternative': 'greater than or less than'
     }
   },
   'key': '2277'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither less than nor greater than',
       'alternative': 'neither less than nor greater than'
     }
   },
   'key': '2278'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither greater than nor less than',
       'alternative': 'neither greater than nor less than'
     }
   },
   'key': '2279'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes'
     }
   },
   'key': '227A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds'
     }
   },
   'key': '227B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes or equal to'
     }
   },
   'key': '227C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds or equal to'
     }
   },
   'key': '227D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes or equivalent to'
     }
   },
   'key': '227E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds or equivalent to'
     }
   },
   'key': '227F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not precede'
     }
   },
   'key': '2280'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not succeed'
     }
   },
   'key': '2281'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of'
     }
   },
   'key': '2282'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of'
     }
   },
   'key': '2283'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not a subset of'
     }
   },
   'key': '2284'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not a superset of'
     }
   },
   'key': '2285'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of or equal to'
     }
   },
   'key': '2286'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of or equal to'
     }
   },
   'key': '2287'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither a subset of nor equal to'
     }
   },
   'key': '2288'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'neither a superset of nor equal to'
     }
   },
   'key': '2289'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of with not equal to',
       'alternative': 'subset of or not equal to',
       'short': 'subset of or not equal to'
     }
   },
   'key': '228A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of with not equal to',
       'alternative': 'superset of or not equal to',
       'short': 'superset of or not equal to'
     }
   },
   'key': '228B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiset'
     }
   },
   'key': '228C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiset multiplication'
     }
   },
   'key': '228D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiset union'
     }
   },
   'key': '228E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square image of'
     }
   },
   'key': '228F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square original of'
     }
   },
   'key': '2290'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square image of or equal to'
     }
   },
   'key': '2291'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square original of or equal to'
     }
   },
   'key': '2292'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square cap'
     }
   },
   'key': '2293'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square cup'
     }
   },
   'key': '2294'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled plus'
     }
   },
   'key': '2295'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled minus'
     }
   },
   'key': '2296'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled times'
     }
   },
   'key': '2297'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled division slash'
     }
   },
   'key': '2298'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled dot operator'
     }
   },
   'key': '2299'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled ring operator'
     }
   },
   'key': '229A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled asterisk operator'
     }
   },
   'key': '229B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled equals'
     }
   },
   'key': '229C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled dash'
     }
   },
   'key': '229D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared plus'
     }
   },
   'key': '229E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared minus'
     }
   },
   'key': '229F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared times'
     }
   },
   'key': '22A0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared dot operator'
     }
   },
   'key': '22A1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right tack'
     }
   },
   'key': '22A2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left tack'
     }
   },
   'key': '22A3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'down tack'
     }
   },
   'key': '22A4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'up tack'
     }
   },
   'key': '22A5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'assertion'
     }
   },
   'key': '22A6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'models'
     }
   },
   'key': '22A7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'true'
     }
   },
   'key': '22A8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'forces'
     }
   },
   'key': '22A9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple vertical bar right turnstile'
     }
   },
   'key': '22AA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double vertical bar double right turnstile'
     }
   },
   'key': '22AB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not prove'
     }
   },
   'key': '22AC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not true'
     }
   },
   'key': '22AD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not force'
     }
   },
   'key': '22AE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'negated double vertical bar double right turnstile'
     }
   },
   'key': '22AF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes under relation'
     }
   },
   'key': '22B0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds under relation'
     }
   },
   'key': '22B1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'normal subgroup of'
     }
   },
   'key': '22B2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contains as normal subgroup'
     }
   },
   'key': '22B3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'normal subgroup of or equal to'
     }
   },
   'key': '22B4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contains as normal subgroup or equal to'
     }
   },
   'key': '22B5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'original of'
     }
   },
   'key': '22B6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'image of'
     }
   },
   'key': '22B7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multimap'
     }
   },
   'key': '22B8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'hermitian conjugate matrix'
     }
   },
   'key': '22B9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intercalate'
     }
   },
   'key': '22BA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'xor'
     }
   },
   'key': '22BB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'nand'
     }
   },
   'key': '22BC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'nor'
     }
   },
   'key': '22BD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right triangle'
     }
   },
   'key': '22BF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary logical and'
     }
   },
   'key': '22C0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary logical or'
     }
   },
   'key': '22C1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary intersection'
     }
   },
   'key': '22C2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary union'
     }
   },
   'key': '22C3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'diamond operator'
     }
   },
   'key': '22C4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'dot operator'
     }
   },
   'key': '22C5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'star operator'
     }
   },
   'key': '22C6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'division times'
     }
   },
   'key': '22C7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bowtie'
     }
   },
   'key': '22C8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left normal factor semidirect product'
     }
   },
   'key': '22C9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right normal factor semidirect product'
     }
   },
   'key': '22CA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left semidirect product'
     }
   },
   'key': '22CB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right semidirect product'
     }
   },
   'key': '22CC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reversed tilde equals'
     }
   },
   'key': '22CD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'curly logical or'
     }
   },
   'key': '22CE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'curly logical and'
     }
   },
   'key': '22CF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double subset'
     }
   },
   'key': '22D0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double superset'
     }
   },
   'key': '22D1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double intersection'
     }
   },
   'key': '22D2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double union'
     }
   },
   'key': '22D3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'pitchfork'
     }
   },
   'key': '22D4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equal and parallel to'
     }
   },
   'key': '22D5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than with dot',
       'alternative': 'less than with dot',
       'short': 'less than dot'
     }
   },
   'key': '22D6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than with dot',
       'alternative': 'greater than with dot',
       'short': 'greater than dot'
     }
   },
   'key': '22D7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'very much less than',
       'alternative': 'very much less than'
     }
   },
   'key': '22D8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'very much greater than',
       'alternative': 'very much greater than'
     }
   },
   'key': '22D9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than equal to or greater than',
       'alternative': 'less than equal to or greater than'
     }
   },
   'key': '22DA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than equal to or less than',
       'alternative': 'greater than equal to or less than'
     }
   },
   'key': '22DB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equal to or less than',
       'alternative': 'equal to or less than'
     }
   },
   'key': '22DC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equal to or greater than',
       'alternative': 'equal to or greater than'
     }
   },
   'key': '22DD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equal to or precedes'
     }
   },
   'key': '22DE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equal to or succeeds'
     }
   },
   'key': '22DF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not precede or equal'
     }
   },
   'key': '22E0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not succeed or equal'
     }
   },
   'key': '22E1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not square image of or equal to'
     }
   },
   'key': '22E2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not square original of or equal to'
     }
   },
   'key': '22E3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square image of or not equal to'
     }
   },
   'key': '22E4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square original of or not equal to'
     }
   },
   'key': '22E5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than but not equivalent to',
       'alternative': 'less than but not equivalent to'
     }
   },
   'key': '22E6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than but not equivalent to',
       'alternative': 'greater than but not equivalent to'
     }
   },
   'key': '22E7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes but not equivalent to'
     }
   },
   'key': '22E8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds but not equivalent to'
     }
   },
   'key': '22E9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not normal subgroup of'
     }
   },
   'key': '22EA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not contain as normal subgroup'
     }
   },
   'key': '22EB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'not normal subgroup of or equal to'
     }
   },
   'key': '22EC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not contain as normal subgroup or equal'
     }
   },
   'key': '22ED'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical ellipsis',
       'short': 'dot dot dot'
     }
   },
   'key': '22EE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'midline horizontal ellipsis',
       'short': 'dot dot dot'
     }
   },
   'key': '22EF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'up right diagonal ellipsis',
       'short': 'diagonal dot dot dot'
     }
   },
   'key': '22F0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'down right diagonal ellipsis',
       'short': 'diagonal dot dot dot'
     }
   },
   'key': '22F1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of with long horizontal stroke'
     }
   },
   'key': '22F2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of with vertical bar at end of horizontal stroke'
     }
   },
   'key': '22F3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small element of with vertical bar at end of horizontal' +
         ' stroke'
     }
   },
   'key': '22F4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of with dot above'
     }
   },
   'key': '22F5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of with overbar'
     }
   },
   'key': '22F6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small element of with overbar'
     }
   },
   'key': '22F7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of with underbar'
     }
   },
   'key': '22F8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of with two horizontal strokes'
     }
   },
   'key': '22F9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contains with long horizontal stroke'
     }
   },
   'key': '22FA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contains with vertical bar at end of horizontal stroke'
     }
   },
   'key': '22FB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small contains with vertical bar at end of horizontal stroke'
     }
   },
   'key': '22FC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'contains with overbar'
     }
   },
   'key': '22FD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small contains with overbar'
     }
   },
   'key': '22FE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation bag membership'
     }
   },
   'key': '22FF'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'diameter sign',
       'short': 'diameter'
     }
   },
   'key': '2300'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'house'
     }
   },
   'key': '2302'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'projective'
     }
   },
   'key': '2305'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'perspective'
     }
   },
   'key': '2306'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'wavy line'
     }
   },
   'key': '2307'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'reversed not sign',
       'short': 'reversed not'
     }
   },
   'key': '2310'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'square lozenge'
     }
   },
   'key': '2311'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'arc'
     }
   },
   'key': '2312'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'segment'
     }
   },
   'key': '2313'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'sector'
     }
   },
   'key': '2314'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'heavy plus sign',
       'alternative': 'heavy plus',
       'short': 'bold plus'
     }
   },
   'key': '2795'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'heavy minus sign',
       'alternative': 'heavy minus',
       'short': 'bold minus'
     }
   },
   'key': '2796'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'heavy division sign',
       'alternative': 'heavy division',
       'short': 'bold division'
     }
   },
   'key': '2797'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'curly loop'
     }
   },
   'key': '27B0'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'double curly loop'
     }
   },
   'key': '27BF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white triangle containing small white triangle'
     }
   },
   'key': '27C1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'perpendicular'
     }
   },
   'key': '27C2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'open subset'
     }
   },
   'key': '27C3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'open superset'
     }
   },
   'key': '27C4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'or with dot inside'
     }
   },
   'key': '27C7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reverse solidus preceding subset'
     }
   },
   'key': '27C8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset preceding solidus'
     }
   },
   'key': '27C9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical bar with horizontal stroke'
     }
   },
   'key': '27CA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'mathematical rising diagonal'
     }
   },
   'key': '27CB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'long division'
     }
   },
   'key': '27CC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'mathematical falling diagonal'
     }
   },
   'key': '27CD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared logical and'
     }
   },
   'key': '27CE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared logical or'
     }
   },
   'key': '27CF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white diamond with centered dot'
     }
   },
   'key': '27D0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'and with dot'
     }
   },
   'key': '27D1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of opening upwards'
     }
   },
   'key': '27D2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'lower right corner with dot'
     }
   },
   'key': '27D3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'upper left corner with dot'
     }
   },
   'key': '27D4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left outer join'
     }
   },
   'key': '27D5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right outer join'
     }
   },
   'key': '27D6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'full outer join'
     }
   },
   'key': '27D7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'large up tack'
     }
   },
   'key': '27D8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'large down tack'
     }
   },
   'key': '27D9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left and right double turnstile'
     }
   },
   'key': '27DA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left and right tack'
     }
   },
   'key': '27DB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left multimap'
     }
   },
   'key': '27DC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'long right tack'
     }
   },
   'key': '27DD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'long left tack'
     }
   },
   'key': '27DE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'up tack with circle above'
     }
   },
   'key': '27DF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'lozenge divided by horizontal rule'
     }
   },
   'key': '27E0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white concave sided diamond'
     }
   },
   'key': '27E1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white concave sided diamond with leftwards tick'
     }
   },
   'key': '27E2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white concave sided diamond with rightwards tick'
     }
   },
   'key': '27E3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white square with leftwards tick'
     }
   },
   'key': '27E4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white square with rightwards tick'
     }
   },
   'key': '27E5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'rising diagonal crossing falling diagonal'
     }
   },
   'key': '292B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'falling diagonal crossing rising diagonal'
     }
   },
   'key': '292C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple vertical bar delimiter'
     }
   },
   'key': '2980'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation spot'
     }
   },
   'key': '2981'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation type colon'
     }
   },
   'key': '2982'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'dotted fence'
     }
   },
   'key': '2999'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical zigzag line'
     }
   },
   'key': '299A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reversed empty set'
     }
   },
   'key': '29B0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'empty set with overbar'
     }
   },
   'key': '29B1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'empty set with small circle above'
     }
   },
   'key': '29B2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circle with horizontal bar'
     }
   },
   'key': '29B5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled vertical bar'
     }
   },
   'key': '29B6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled parallel'
     }
   },
   'key': '29B7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled reverse solidus'
     }
   },
   'key': '29B8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled perpendicular'
     }
   },
   'key': '29B9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circle divided by horizontal bar and top' +
         ' half divided by vertical bar'
     }
   },
   'key': '29BA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circle with superimposed x'
     }
   },
   'key': '29BB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled anticlockwise rotated division sign',
       'short': 'circled anticlockwise rotated division'
     }
   },
   'key': '29BC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled white bullet'
     }
   },
   'key': '29BE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled bullet'
     }
   },
   'key': '29BF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled less than'
     }
   },
   'key': '29C0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled greater than'
     }
   },
   'key': '29C1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circle with small circle to the right'
     }
   },
   'key': '29C2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circle with two horizontal strokes to the right'
     }
   },
   'key': '29C3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared rising diagonal slash'
     }
   },
   'key': '29C4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared falling diagonal slash'
     }
   },
   'key': '29C5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared asterisk'
     }
   },
   'key': '29C6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared small circle'
     }
   },
   'key': '29C7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'squared square'
     }
   },
   'key': '29C8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'two joined squares'
     }
   },
   'key': '29C9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triangle with dot above'
     }
   },
   'key': '29CA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triangle with underbar'
     }
   },
   'key': '29CB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 's in triangle'
     }
   },
   'key': '29CC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triangle with serifs at bottom'
     }
   },
   'key': '29CD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right triangle above left triangle'
     }
   },
   'key': '29CE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left triangle beside vertical bar'
     }
   },
   'key': '29CF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical bar beside right triangle'
     }
   },
   'key': '29D0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bowtie with left half black'
     }
   },
   'key': '29D1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bowtie with right half black'
     }
   },
   'key': '29D2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'black bowtie'
     }
   },
   'key': '29D3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'times with left half black'
     }
   },
   'key': '29D4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'times with right half black'
     }
   },
   'key': '29D5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white hourglass'
     }
   },
   'key': '29D6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'black hourglass'
     }
   },
   'key': '29D7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'incomplete infinity'
     }
   },
   'key': '29DC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'tie over infinity'
     }
   },
   'key': '29DD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'infinity negated with vertical bar'
     }
   },
   'key': '29DE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double ended multimap'
     }
   },
   'key': '29DF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square with contoured outline'
     }
   },
   'key': '29E0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'increases as'
     }
   },
   'key': '29E1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'shuffle product'
     }
   },
   'key': '29E2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign and slanted parallel'
     }
   },
   'key': '29E3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign and slanted parallel with tilde above'
     }
   },
   'key': '29E4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'identical to and slanted parallel'
     }
   },
   'key': '29E5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'gleich stark'
     }
   },
   'key': '29E6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'thermodynamic'
     }
   },
   'key': '29E7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'down pointing triangle with left half black'
     }
   },
   'key': '29E8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'down pointing triangle with right half black'
     }
   },
   'key': '29E9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'black lozenge'
     }
   },
   'key': '29EB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'error barred white square'
     }
   },
   'key': '29EE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'error barred black square'
     }
   },
   'key': '29EF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'error barred white diamond'
     }
   },
   'key': '29F0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'error barred black diamond'
     }
   },
   'key': '29F1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'error barred white circle'
     }
   },
   'key': '29F2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'error barred black circle'
     }
   },
   'key': '29F3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'rule delayed'
     }
   },
   'key': '29F4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reverse solidus operator'
     }
   },
   'key': '29F5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'solidus with overbar'
     }
   },
   'key': '29F6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reverse solidus with horizontal stroke'
     }
   },
   'key': '29F7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'big solidus'
     }
   },
   'key': '29F8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'big reverse solidus'
     }
   },
   'key': '29F9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double plus'
     }
   },
   'key': '29FA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple plus'
     }
   },
   'key': '29FB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'tiny'
     }
   },
   'key': '29FE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'miny'
     }
   },
   'key': '29FF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary circled dot operator'
     }
   },
   'key': '2A00'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary circled plus operator'
     }
   },
   'key': '2A01'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary circled times operator'
     }
   },
   'key': '2A02'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary union operator with dot'
     }
   },
   'key': '2A03'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary union operator with plus'
     }
   },
   'key': '2A04'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary square intersection operator'
     }
   },
   'key': '2A05'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary square union operator'
     }
   },
   'key': '2A06'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'two logical and operator'
     }
   },
   'key': '2A07'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'two logical or operator'
     }
   },
   'key': '2A08'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary times operator'
     }
   },
   'key': '2A09'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'modulo two sum'
     }
   },
   'key': '2A0A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'summation with integral'
     }
   },
   'key': '2A0B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'quadruple integral operator'
     }
   },
   'key': '2A0C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'finite part integral'
     }
   },
   'key': '2A0D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral with double stroke'
     }
   },
   'key': '2A0E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral average with slash'
     }
   },
   'key': '2A0F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circulation function'
     }
   },
   'key': '2A10'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'anticlockwise integration'
     }
   },
   'key': '2A11'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'line integration with rectangular path around pole'
     }
   },
   'key': '2A12'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'line integration with semicircular path around pole'
     }
   },
   'key': '2A13'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'line integration not including the pole'
     }
   },
   'key': '2A14'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral around a point operator'
     }
   },
   'key': '2A15'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'quaternion integral operator'
     }
   },
   'key': '2A16'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral with times sign',
       'short': 'integral with times'
     }
   },
   'key': '2A18'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral with intersection'
     }
   },
   'key': '2A19'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral with union'
     }
   },
   'key': '2A1A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral with overbar'
     }
   },
   'key': '2A1B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral with underbar'
     }
   },
   'key': '2A1C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'join'
     }
   },
   'key': '2A1D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'large left triangle operator'
     }
   },
   'key': '2A1E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation schema composition'
     }
   },
   'key': '2A1F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation schema piping'
     }
   },
   'key': '2A20'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation schema projection'
     }
   },
   'key': '2A21'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with small circle above',
       'short': 'plus with circle above'
     }
   },
   'key': '2A22'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with circumflex accent above',
       'short': 'plus hat'
     }
   },
   'key': '2A23'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with tilde above',
       'short': 'plus tilde'
     }
   },
   'key': '2A24'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with dot below',
       'short': 'plus underdot'
     }
   },
   'key': '2A25'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with tilde below'
     }
   },
   'key': '2A26'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with subscript two'
     }
   },
   'key': '2A27'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign with black triangle'
     }
   },
   'key': '2A28'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus sign with comma above'
     }
   },
   'key': '2A29'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus sign with dot below'
     }
   },
   'key': '2A2A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus sign with falling dots'
     }
   },
   'key': '2A2B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus sign with rising dots'
     }
   },
   'key': '2A2C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign in left half circle'
     }
   },
   'key': '2A2D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign in right half circle'
     }
   },
   'key': '2A2E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vector or cross product'
     }
   },
   'key': '2A2F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign with dot above'
     }
   },
   'key': '2A30'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign with underbar'
     }
   },
   'key': '2A31'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'semidirect product with bottom closed'
     }
   },
   'key': '2A32'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'smash product'
     }
   },
   'key': '2A33'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign in left half circle'
     }
   },
   'key': '2A34'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign in right half circle'
     }
   },
   'key': '2A35'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled multiplication sign with circumflex accent'
     }
   },
   'key': '2A36'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign in double circle'
     }
   },
   'key': '2A37'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'circled division sign',
       'short': 'circled division'
     }
   },
   'key': '2A38'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign in triangle'
     }
   },
   'key': '2A39'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'minus sign in triangle'
     }
   },
   'key': '2A3A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'multiplication sign in triangle'
     }
   },
   'key': '2A3B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'interior product'
     }
   },
   'key': '2A3C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'righthand interior product'
     }
   },
   'key': '2A3D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation relational composition'
     }
   },
   'key': '2A3E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'amalgamation or coproduct'
     }
   },
   'key': '2A3F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection with dot'
     }
   },
   'key': '2A40'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union with minus sign',
       'short': 'union with minus'
     }
   },
   'key': '2A41'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union with overbar'
     }
   },
   'key': '2A42'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection with overbar'
     }
   },
   'key': '2A43'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection with logical and'
     }
   },
   'key': '2A44'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union with logical or'
     }
   },
   'key': '2A45'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union above intersection'
     }
   },
   'key': '2A46'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection above union'
     }
   },
   'key': '2A47'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union above bar above intersection'
     }
   },
   'key': '2A48'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection above bar above union'
     }
   },
   'key': '2A49'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'union beside and joined with union'
     }
   },
   'key': '2A4A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'intersection beside and joined with intersection'
     }
   },
   'key': '2A4B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed union with serifs'
     }
   },
   'key': '2A4C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed intersection with serifs'
     }
   },
   'key': '2A4D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double square intersection'
     }
   },
   'key': '2A4E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double square union'
     }
   },
   'key': '2A4F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed union with serifs and smash product'
     }
   },
   'key': '2A50'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and with dot above'
     }
   },
   'key': '2A51'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or with dot above'
     }
   },
   'key': '2A52'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double logical and'
     }
   },
   'key': '2A53'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double logical or'
     }
   },
   'key': '2A54'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'two intersecting logical and'
     }
   },
   'key': '2A55'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'two intersecting logical or'
     }
   },
   'key': '2A56'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'sloping large or'
     }
   },
   'key': '2A57'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'sloping large and'
     }
   },
   'key': '2A58'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or overlapping logical and'
     }
   },
   'key': '2A59'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and with middle stem'
     }
   },
   'key': '2A5A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or with middle stem'
     }
   },
   'key': '2A5B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and with horizontal dash'
     }
   },
   'key': '2A5C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or with horizontal dash'
     }
   },
   'key': '2A5D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and with double overbar'
     }
   },
   'key': '2A5E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and with underbar'
     }
   },
   'key': '2A5F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical and with double underbar'
     }
   },
   'key': '2A60'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small vee with underbar'
     }
   },
   'key': '2A61'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or with double overbar'
     }
   },
   'key': '2A62'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'logical or with double underbar'
     }
   },
   'key': '2A63'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation domain antirestriction'
     }
   },
   'key': '2A64'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'z notation range antirestriction'
     }
   },
   'key': '2A65'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign with dot below'
     }
   },
   'key': '2A66'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'identical with dot above'
     }
   },
   'key': '2A67'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple horizontal bar with double vertical stroke'
     }
   },
   'key': '2A68'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple horizontal bar with triple vertical stroke'
     }
   },
   'key': '2A69'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'tilde operator with dot above'
     }
   },
   'key': '2A6A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'tilde operator with rising dots'
     }
   },
   'key': '2A6B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'similar minus similar'
     }
   },
   'key': '2A6C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'congruent with dot above'
     }
   },
   'key': '2A6D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals with asterisk'
     }
   },
   'key': '2A6E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'almost equal to with circumflex accent',
       'short': 'almost equal hat'
     }
   },
   'key': '2A6F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'approximately equal or equal to'
     }
   },
   'key': '2A70'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign above plus sign',
       'short': 'equals above plus'
     }
   },
   'key': '2A71'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'plus sign above equals sign',
       'short': 'plus above equals'
     }
   },
   'key': '2A72'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign above tilde operator',
       'short': 'equals above tilde operator'
     }
   },
   'key': '2A73'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double colon equal'
     }
   },
   'key': '2A74'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'two consecutive equals signs',
       'short': 'two consecutive equals'
     }
   },
   'key': '2A75'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'three consecutive equals signs',
       'short': 'three consecutive equals'
     }
   },
   'key': '2A76'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign with two dots above and two dots below'
     }
   },
   'key': '2A77'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equivalent with four dots above'
     }
   },
   'key': '2A78'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than with circle inside'
     }
   },
   'key': '2A79'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than with circle inside'
     }
   },
   'key': '2A7A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than with question mark above'
     }
   },
   'key': '2A7B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than with question mark above'
     }
   },
   'key': '2A7C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or slanted equal to'
     }
   },
   'key': '2A7D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or slanted equal to'
     }
   },
   'key': '2A7E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or slanted equal to with dot inside'
     }
   },
   'key': '2A7F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or slanted equal to with dot inside'
     }
   },
   'key': '2A80'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or slanted equal to with dot above'
     }
   },
   'key': '2A81'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or slanted equal to with dot above'
     }
   },
   'key': '2A82'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or slanted equal to with dot above right'
     }
   },
   'key': '2A83'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or slanted equal to with dot above left'
     }
   },
   'key': '2A84'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than or approximate'
     }
   },
   'key': '2A85'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than or approximate'
     }
   },
   'key': '2A86'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than and single line not equal to'
     }
   },
   'key': '2A87'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than and single line not equal to'
     }
   },
   'key': '2A88'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than and not approximate'
     }
   },
   'key': '2A89'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than and not approximate'
     }
   },
   'key': '2A8A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than above double line equal above greater than'
     }
   },
   'key': '2A8B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than above double line equal above less than'
     }
   },
   'key': '2A8C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than above similar or equal'
     }
   },
   'key': '2A8D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than above similar or equal'
     }
   },
   'key': '2A8E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than above similar above greater than'
     }
   },
   'key': '2A8F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than above similar above less than'
     }
   },
   'key': '2A90'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than above greater than above double line equal'
     }
   },
   'key': '2A91'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than above less than above double line equal'
     }
   },
   'key': '2A92'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than above slanted equal above greater than' +
         ' above slanted equal'
     }
   },
   'key': '2A93'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than above slanted equal above less than above ' +
         'slanted equal'
     }
   },
   'key': '2A94'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'slanted equal to or less than'
     }
   },
   'key': '2A95'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'slanted equal to or greater than'
     }
   },
   'key': '2A96'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'slanted equal to or less than with dot inside'
     }
   },
   'key': '2A97'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'slanted equal to or greater than with dot inside'
     }
   },
   'key': '2A98'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double line equal to or less than'
     }
   },
   'key': '2A99'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double line equal to or greater than'
     }
   },
   'key': '2A9A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double line slanted equal to or less than'
     }
   },
   'key': '2A9B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double line slanted equal to or greater than'
     }
   },
   'key': '2A9C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'similar or less than'
     }
   },
   'key': '2A9D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'similar or greater than'
     }
   },
   'key': '2A9E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'similar above less than above equals sign'
     }
   },
   'key': '2A9F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'similar above greater than above equals sign'
     }
   },
   'key': '2AA0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double nested less than'
     }
   },
   'key': '2AA1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double nested greater than'
     }
   },
   'key': '2AA2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double nested less than with underbar'
     }
   },
   'key': '2AA3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than overlapping less than'
     }
   },
   'key': '2AA4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than beside less than'
     }
   },
   'key': '2AA5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than closed by curve'
     }
   },
   'key': '2AA6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than closed by curve'
     }
   },
   'key': '2AA7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'less than closed by curve above slanted equal'
     }
   },
   'key': '2AA8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greater than closed by curve above slanted equal'
     }
   },
   'key': '2AA9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'smaller than'
     }
   },
   'key': '2AAA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'larger than'
     }
   },
   'key': '2AAB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'smaller than or equal to'
     }
   },
   'key': '2AAC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'larger than or equal to'
     }
   },
   'key': '2AAD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'equals sign with bumpy above'
     }
   },
   'key': '2AAE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes above single line equals sign'
     }
   },
   'key': '2AAF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds above single line equals sign'
     }
   },
   'key': '2AB0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes above single line not equal to'
     }
   },
   'key': '2AB1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds above single line not equal to'
     }
   },
   'key': '2AB2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes above equals sign'
     }
   },
   'key': '2AB3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds above equals sign'
     }
   },
   'key': '2AB4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes above not equal to'
     }
   },
   'key': '2AB5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds above not equal to'
     }
   },
   'key': '2AB6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes above almost equal to'
     }
   },
   'key': '2AB7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds above almost equal to'
     }
   },
   'key': '2AB8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'precedes above not almost equal to'
     }
   },
   'key': '2AB9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'succeeds above not almost equal to'
     }
   },
   'key': '2ABA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double precedes'
     }
   },
   'key': '2ABB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double succeeds'
     }
   },
   'key': '2ABC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset with dot'
     }
   },
   'key': '2ABD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset with dot'
     }
   },
   'key': '2ABE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset with plus sign below'
     }
   },
   'key': '2ABF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset with plus sign below'
     }
   },
   'key': '2AC0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset with multiplication sign below'
     }
   },
   'key': '2AC1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset with multiplication sign below'
     }
   },
   'key': '2AC2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of or equal to with dot above'
     }
   },
   'key': '2AC3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of or equal to with dot above'
     }
   },
   'key': '2AC4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of above equals sign'
     }
   },
   'key': '2AC5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of above equals sign'
     }
   },
   'key': '2AC6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of above tilde operator'
     }
   },
   'key': '2AC7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of above tilde operator'
     }
   },
   'key': '2AC8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of above almost equal to'
     }
   },
   'key': '2AC9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of above almost equal to'
     }
   },
   'key': '2ACA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset of above not equal to'
     }
   },
   'key': '2ACB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset of above not equal to'
     }
   },
   'key': '2ACC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square left open box operator'
     }
   },
   'key': '2ACD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'square right open box operator'
     }
   },
   'key': '2ACE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed subset'
     }
   },
   'key': '2ACF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed superset'
     }
   },
   'key': '2AD0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed subset or equal to'
     }
   },
   'key': '2AD1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'closed superset or equal to'
     }
   },
   'key': '2AD2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset above superset'
     }
   },
   'key': '2AD3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset above subset'
     }
   },
   'key': '2AD4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'subset above subset'
     }
   },
   'key': '2AD5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset above superset'
     }
   },
   'key': '2AD6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset beside subset'
     }
   },
   'key': '2AD7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'superset beside and joined by dash with subset'
     }
   },
   'key': '2AD8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'element of opening downwards'
     }
   },
   'key': '2AD9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'pitchfork with tee top'
     }
   },
   'key': '2ADA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'transversal intersection'
     }
   },
   'key': '2ADB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'forking'
     }
   },
   'key': '2ADC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'nonforking'
     }
   },
   'key': '2ADD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'short left tack'
     }
   },
   'key': '2ADE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'short down tack'
     }
   },
   'key': '2ADF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'short up tack'
     }
   },
   'key': '2AE0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'perpendicular with s'
     }
   },
   'key': '2AE1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical bar triple right turnstile'
     }
   },
   'key': '2AE2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double vertical bar left turnstile'
     }
   },
   'key': '2AE3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical bar double left turnstile'
     }
   },
   'key': '2AE4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double vertical bar double left turnstile'
     }
   },
   'key': '2AE5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'long dash from left member of double vertical'
     }
   },
   'key': '2AE6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'short down tack with overbar'
     }
   },
   'key': '2AE7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'short up tack with underbar'
     }
   },
   'key': '2AE8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'short up tack above short down tack'
     }
   },
   'key': '2AE9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double down tack'
     }
   },
   'key': '2AEA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double up tack'
     }
   },
   'key': '2AEB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double stroke not sign'
     }
   },
   'key': '2AEC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'reversed double stroke not sign'
     }
   },
   'key': '2AED'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'does not divide with reversed negation slash'
     }
   },
   'key': '2AEE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical line with circle above'
     }
   },
   'key': '2AEF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'vertical line with circle below'
     }
   },
   'key': '2AF0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'down tack with circle below'
     }
   },
   'key': '2AF1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'parallel with horizontal stroke'
     }
   },
   'key': '2AF2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'parallel with tilde operator'
     }
   },
   'key': '2AF3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple vertical bar binary relation'
     }
   },
   'key': '2AF4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple vertical bar with horizontal stroke'
     }
   },
   'key': '2AF5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple colon operator'
     }
   },
   'key': '2AF6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple nested less than'
     }
   },
   'key': '2AF7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple nested greater than'
     }
   },
   'key': '2AF8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double line slanted less than or equal to'
     }
   },
   'key': '2AF9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double line slanted greater than or equal to'
     }
   },
   'key': '2AFA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'triple solidus binary relation'
     }
   },
   'key': '2AFB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'large triple vertical bar operator'
     }
   },
   'key': '2AFC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'double solidus operator'
     }
   },
   'key': '2AFD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'white vertical bar'
     }
   },
   'key': '2AFE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'n ary white vertical bar'
     }
   },
   'key': '2AFF'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'wave dash'
     }
   },
   'key': '301C'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical comma'
     }
   },
   'key': 'FE10'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical colon'
     }
   },
   'key': 'FE13'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical semicolon'
     }
   },
   'key': 'FE14'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical exclamation mark'
     }
   },
   'key': 'FE15'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical question mark'
     }
   },
   'key': 'FE16'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical horizontal ellipsis'
     }
   },
   'key': 'FE19'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical two dot leader',
       'alternative': 'glyph for vertical two dot leader'
     }
   },
   'key': 'FE30'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical em dash',
       'alternative': 'glyph for vertical em dash'
     }
   },
   'key': 'FE31'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical en dash',
       'alternative': 'glyph for vertical en dash'
     }
   },
   'key': 'FE32'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical low line',
       'alternative': 'glyph for vertical spacing underscore'
     }
   },
   'key': 'FE33'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical wavy low line',
       'alternative': 'glyph for vertical spacing wavy underscore'
     }
   },
   'key': 'FE34'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'sesame dot'
     }
   },
   'key': 'FE45'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'white sesame dot'
     }
   },
   'key': 'FE46'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'dashed overline',
       'alternative': 'spacing dashed overscore'
     }
   },
   'key': 'FE49'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'centerline overline',
       'alternative': 'spacing centerline overscore'
     }
   },
   'key': 'FE4A'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'wavy overline',
       'alternative': 'spacing wavy overscore'
     }
   },
   'key': 'FE4B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'double wavy overline',
       'alternative': 'spacing double wavy overscore'
     }
   },
   'key': 'FE4C'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'dashed low line',
       'alternative': 'spacing dashed underscore'
     }
   },
   'key': 'FE4D'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'centerline low line',
       'alternative': 'spacing centerline underscore'
     }
   },
   'key': 'FE4E'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'wavy low line',
       'alternative': 'spacing wavy underscore'
     }
   },
   'key': 'FE4F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small comma'
     }
   },
   'key': 'FE50'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small full stop',
       'alternative': 'small period'
     }
   },
   'key': 'FE52'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small semicolon'
     }
   },
   'key': 'FE54'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small colon'
     }
   },
   'key': 'FE55'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small question mark'
     }
   },
   'key': 'FE56'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small exclamation mark'
     }
   },
   'key': 'FE57'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'small em dash'
     }
   },
   'key': 'FE58'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small number sign'
     }
   },
   'key': 'FE5F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small ampersand'
     }
   },
   'key': 'FE60'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small asterisk'
     }
   },
   'key': 'FE61'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small plus sign'
     }
   },
   'key': 'FE62'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'small hyphen minus'
     }
   },
   'key': 'FE63'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small less than sign'
     }
   },
   'key': 'FE64'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small greater than sign'
     }
   },
   'key': 'FE65'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'small equals sign'
     }
   },
   'key': 'FE66'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small reverse solidus',
       'alternative': 'small backslash'
     }
   },
   'key': 'FE68'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'small dollar sign'
     }
   },
   'key': 'FE69'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small percent sign'
     }
   },
   'key': 'FE6A'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'small commercial at'
     }
   },
   'key': 'FE6B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth exclamation mark'
     }
   },
   'key': 'FF01'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth quotation mark'
     }
   },
   'key': 'FF02'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth number sign'
     }
   },
   'key': 'FF03'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'fullwidth dollar sign'
     }
   },
   'key': 'FF04'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth percent sign'
     }
   },
   'key': 'FF05'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth ampersand'
     }
   },
   'key': 'FF06'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth apostrophe'
     }
   },
   'key': 'FF07'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth asterisk'
     }
   },
   'key': 'FF0A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth plus sign'
     }
   },
   'key': 'FF0B'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth comma'
     }
   },
   'key': 'FF0C'
  },
  {'category': 'Pd',
   'mappings': {
     'default': {
       'default': 'fullwidth hyphen minus'
     }
   },
   'key': 'FF0D'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth full stop',
       'alternative': 'fullwidth period'
     }
   },
   'key': 'FF0E'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth solidus',
       'alternative': 'fullwidth slash'
     }
   },
   'key': 'FF0F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth colon'
     }
   },
   'key': 'FF1A'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth semicolon'
     }
   },
   'key': 'FF1B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth less than sign'
     }
   },
   'key': 'FF1C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth equals sign'
     }
   },
   'key': 'FF1D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth greater than sign'
     }
   },
   'key': 'FF1E'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth question mark'
     }
   },
   'key': 'FF1F'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth commercial at'
     }
   },
   'key': 'FF20'
  },
  {'category': 'Po',
   'mappings': {
     'default': {
       'default': 'fullwidth reverse solidus',
       'alternative': 'fullwidth backslash'
     }
   },
   'key': 'FF3C'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'fullwidth circumflex accent',
       'alternative': 'fullwidth spacing circumflex'
     }
   },
   'key': 'FF3E'
  },
  {'category': 'Pc',
   'mappings': {
     'default': {
       'default': 'fullwidth low line',
       'alternative': 'fullwidth spacing underscore'
     }
   },
   'key': 'FF3F'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'fullwidth grave accent',
       'alternative': 'fullwidth spacing grave'
     }
   },
   'key': 'FF40'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth vertical line',
       'alternative': 'fullwidth vertical bar'
     }
   },
   'key': 'FF5C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth tilde',
       'alternative': 'fullwidth spacing tilde'
     }
   },
   'key': 'FF5E'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'fullwidth cent sign'
     }
   },
   'key': 'FFE0'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'fullwidth pound sign'
     }
   },
   'key': 'FFE1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'fullwidth not sign'
     }
   },
   'key': 'FFE2'
  },
  {'category': 'Sk',
   'mappings': {
     'default': {
       'default': 'fullwidth macron',
       'alternative': 'fullwidth spacing macron'
     }
   },
   'key': 'FFE3'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'fullwidth broken bar',
       'alternative': 'fullwidth broken vertical bar'
     }
   },
   'key': 'FFE4'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'fullwidth yen sign'
     }
   },
   'key': 'FFE5'
  },
  {'category': 'Sc',
   'mappings': {
     'default': {
       'default': 'fullwidth won sign'
     }
   },
   'key': 'FFE6'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'halfwidth forms light vertical'
     }
   },
   'key': 'FFE8'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'halfwidth black square'
     }
   },
   'key': 'FFED'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'halfwidth white circle'
     }
   },
   'key': 'FFEE'
  },
  {'category': 'Ll',
   'names': [],
   'key': '03B1',
   'mappings': {
     'default': {
       'default': 'greek small letter alpha',
       'short': 'alpha'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B2',
   'mappings': {
     'default': {
       'default': 'greek small letter beta',
       'short': 'beta'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B3',
   'mappings': {
     'default': {
       'default': 'greek small letter gamma',
       'short': 'gamma'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B4',
   'mappings': {
     'default': {
       'default': 'greek small letter delta',
       'short': 'delta'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B5',
   'mappings': {
     'default': {
       'default': 'greek small letter epsilon',
       'short': 'epsilon'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B6',
   'mappings': {
     'default': {
       'default': 'greek small letter zeta',
       'short': 'zeta'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B7',
   'mappings': {
     'default': {
       'default': 'greek small letter eta',
       'short': 'eta'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B8',
   'mappings': {
     'default': {
       'default': 'greek small letter theta',
       'short': 'theta'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03B9',
   'mappings': {
     'default': {
       'default': 'greek small letter iota',
       'short': 'iota'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03BA',
   'mappings': {
     'default': {
       'default': 'greek small letter kappa',
       'short': 'kappa'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03BB',
   'mappings': {
     'default': {
       'default': 'greek small letter lamda',
       'alternative': 'greek small letter lambda',
       'short': 'lamda'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03BC',
   'mappings': {
     'default': {
       'default': 'greek small letter mu',
       'short': 'mu'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03BD',
   'mappings': {
     'default': {
       'default': 'greek small letter nu',
       'short': 'nu'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03BE',
   'mappings': {
     'default': {
       'default': 'greek small letter xi',
       'short': 'xi'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03BF',
   'mappings': {
     'default': {
       'default': 'greek small letter omicron',
       'short': 'omicron'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C0',
   'mappings': {
     'default': {
       'default': 'greek small letter pi',
       'short': 'pi'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C1',
   'mappings': {
     'default': {
       'default': 'greek small letter rho',
       'short': 'rho'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C2',
   'mappings': {
     'default': {
       'default': 'greek small letter final sigma',
       'short': 'final sigma'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C3',
   'mappings': {
     'default': {
       'default': 'greek small letter sigma',
       'short': 'sigma'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C4',
   'mappings': {
     'default': {
       'default': 'greek small letter tau',
       'short': 'tau'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C5',
   'mappings': {
     'default': {
       'default': 'greek small letter upsilon',
       'short': 'upsilon'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C6',
   'mappings': {
     'default': {
       'default': 'greek small letter phi',
       'short': 'phi'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C7',
   'mappings': {
     'default': {
       'default': 'greek small letter chi',
       'short': 'chi'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C8',
   'mappings': {
     'default': {
       'default': 'greek small letter psi',
       'short': 'psi'
     }}},
  {'category': 'Ll',
   'names': [],
   'key': '03C9',
   'mappings': {
     'default': {
       'default': 'greek small letter omega',
       'short': 'omega'
     }}},
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek beta symbol',
       'alternative': 'greek small letter curled beta',
       'short': 'beta'
     }
   },
   'key': '03D0'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek theta symbol',
       'alternative': 'greek small letter script theta',
       'short': 'theta'
     }
   },
   'key': '03D1'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek phi symbol',
       'alternative': 'greek small letter script phi',
       'short': 'phi'
     }
   },
   'key': '03D5'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek pi symbol',
       'alternative': 'greek small letter omega pi',
       'short': 'pi'
     }
   },
   'key': '03D6'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek kai symbol',
       'short': 'kai'
     }
   },
   'key': '03D7'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek kappa symbol',
       'alternative': 'greek small letter script kappa',
       'short': 'kappa'
     }
   },
   'key': '03F0'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek rho symbol',
       'alternative': 'greek small letter tailed rho',
       'short': 'rho'
     }
   },
   'key': '03F1'
  },
  {'category': 'Ll',
   'mappings': {
     'default': {
       'default': 'greek lunate epsilon symbol',
       'short': 'epsilon'
     }
   },
   'key': '03F5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'greek reversed lunate epsilon symbol',
       'short': 'reversed epsilon'
     }
   },
   'key': '03F6'
  },
  {'category': 'Lu',
   'names': [],
   'key': '0391',
   'mappings': {
     'default': {
       'default': 'greek capital letter alpha',
       'short': 'cap alpha'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0392',
   'mappings': {
     'default': {
       'default': 'greek capital letter beta',
       'short': 'cap beta'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0393',
   'mappings': {
     'default': {
       'default': 'greek capital letter gamma',
       'short': 'cap gamma'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0394',
   'mappings': {
     'default': {
       'default': 'greek capital letter delta',
       'short': 'cap delta'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0395',
   'mappings': {
     'default': {
       'default': 'greek capital letter epsilon',
       'short': 'cap epsilon'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0396',
   'mappings': {
     'default': {
       'default': 'greek capital letter zeta',
       'short': 'cap zeta'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0397',
   'mappings': {
     'default': {
       'default': 'greek capital letter eta',
       'short': 'cap eta'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0398',
   'mappings': {
     'default': {
       'default': 'greek capital letter theta',
       'short': 'cap theta'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '0399',
   'mappings': {
     'default': {
       'default': 'greek capital letter iota',
       'short': 'cap iota'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '039A',
   'mappings': {
     'default': {
       'default': 'greek capital letter kappa',
       'short': 'cap kappa'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '039B',
   'mappings': {
     'default': {
       'default': 'greek capital letter lamda',
       'alternative': 'greek capital letter lambda',
       'short': 'cap lamda'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '039C',
   'mappings': {
     'default': {
       'default': 'greek capital letter mu',
       'short': 'cap mu'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '039D',
   'mappings': {
     'default': {
       'default': 'greek capital letter nu',
       'short': 'cap nu'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '039E',
   'mappings': {
     'default': {
       'default': 'greek capital letter xi',
       'short': 'cap xi'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '039F',
   'mappings': {
     'default': {
       'default': 'greek capital letter omicron',
       'short': 'cap omicron'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A0',
   'mappings': {
     'default': {
       'default': 'greek capital letter pi',
       'short': 'cap pi'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A1',
   'mappings': {
     'default': {
       'default': 'greek capital letter rho',
       'short': 'cap rho'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A3',
   'mappings': {
     'default': {
       'default': 'greek capital letter sigma',
       'short': 'cap sigma'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A4',
   'mappings': {
     'default': {
       'default': 'greek capital letter tau',
       'short': 'cap tau'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A5',
   'mappings': {
     'default': {
       'default': 'greek capital letter upsilon',
       'short': 'cap upsilon'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A6',
   'mappings': {
     'default': {
       'default': 'greek capital letter phi',
       'short': 'cap phi'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A7',
   'mappings': {
     'default': {
       'default': 'greek capital letter chi',
       'short': 'cap chi'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A8',
   'mappings': {
     'default': {
       'default': 'greek capital letter psi',
       'short': 'cap psi'
     }}},
  {'category': 'Lu',
   'names': [],
   'key': '03A9',
   'mappings': {
     'default': {
       'default': 'greek capital letter omega',
       'short': 'cap omega'
     }}},
  {'category': 'Lu',
   'mappings': {
     'default': {
       'default': 'greek capital theta symbol',
       'short': 'cap theta'
     }
   },
   'key': '03F4'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left parenthesis',
       'alternative': 'opening parenthesis'
     }
   },
   'key': '0028'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right parenthesis',
       'alternative': 'closing parenthesis'
     }
   },
   'key': '0029'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left square bracket',
       'alternative': 'opening square bracket'
     }
   },
   'key': '005B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right square bracket',
       'alternative': 'closing square bracket'
     }
   },
   'key': '005D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left curly bracket',
       'alternative': 'opening curly bracket'
     }
   },
   'key': '007B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right curly bracket',
       'alternative': 'closing curly bracket'
     }
   },
   'key': '007D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left square bracket with quill'
     }
   },
   'key': '2045'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right square bracket with quill'
     }
   },
   'key': '2046'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left ceiling'
     }
   },
   'key': '2308'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right ceiling'
     }
   },
   'key': '2309'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left floor'
     }
   },
   'key': '230A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right floor'
     }
   },
   'key': '230B'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'bottom right crop'
     }
   },
   'key': '230C'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'bottom left crop'
     }
   },
   'key': '230D'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'top right crop'
     }
   },
   'key': '230E'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'top left crop'
     }
   },
   'key': '230F'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'top left corner'
     }
   },
   'key': '231C'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'top right corner'
     }
   },
   'key': '231D'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'bottom left corner'
     }
   },
   'key': '231E'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'bottom right corner'
     }
   },
   'key': '231F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'top half integral'
     }
   },
   'key': '2320'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bottom half integral'
     }
   },
   'key': '2321'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left pointing angle bracket',
       'alternative': 'bra'
     }
   },
   'key': '2329'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right pointing angle bracket',
       'alternative': 'ket'
     }
   },
   'key': '232A'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left parenthesis upper hook'
     }
   },
   'key': '239B'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left parenthesis extension'
     }
   },
   'key': '239C'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left parenthesis lower hook'
     }
   },
   'key': '239D'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right parenthesis upper hook'
     }
   },
   'key': '239E'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right parenthesis extension'
     }
   },
   'key': '239F'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right parenthesis lower hook'
     }
   },
   'key': '23A0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left square bracket upper corner'
     }
   },
   'key': '23A1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left square bracket extension'
     }
   },
   'key': '23A2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left square bracket lower corner'
     }
   },
   'key': '23A3'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right square bracket upper corner'
     }
   },
   'key': '23A4'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right square bracket extension'
     }
   },
   'key': '23A5'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right square bracket lower corner'
     }
   },
   'key': '23A6'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left curly bracket upper hook'
     }
   },
   'key': '23A7'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left curly bracket middle piece'
     }
   },
   'key': '23A8'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'left curly bracket lower hook'
     }
   },
   'key': '23A9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'curly bracket extension'
     }
   },
   'key': '23AA'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right curly bracket upper hook'
     }
   },
   'key': '23AB'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right curly bracket middle piece'
     }
   },
   'key': '23AC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'right curly bracket lower hook'
     }
   },
   'key': '23AD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'integral extension'
     }
   },
   'key': '23AE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'horizontal line extension'
     }
   },
   'key': '23AF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'upper left or lower right curly bracket section'
     }
   },
   'key': '23B0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'upper right or lower left curly bracket section'
     }
   },
   'key': '23B1'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'summation top'
     }
   },
   'key': '23B2'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'summation bottom'
     }
   },
   'key': '23B3'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'top square bracket'
     }
   },
   'key': '23B4'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'bottom square bracket'
     }
   },
   'key': '23B5'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'bottom square bracket over top square bracket'
     }
   },
   'key': '23B6'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'radical symbol bottom'
     }
   },
   'key': '23B7'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'left vertical box line'
     }
   },
   'key': '23B8'
  },
  {'category': 'So',
   'mappings': {
     'default': {
       'default': 'right vertical box line'
     }
   },
   'key': '23B9'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'top parenthesis'
     }
   },
   'key': '23DC'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bottom parenthesis'
     }
   },
   'key': '23DD'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'top curly bracket'
     }
   },
   'key': '23DE'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bottom curly bracket'
     }
   },
   'key': '23DF'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'top tortoise shell bracket'
     }
   },
   'key': '23E0'
  },
  {'category': 'Sm',
   'mappings': {
     'default': {
       'default': 'bottom tortoise shell bracket'
     }
   },
   'key': '23E1'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'medium left parenthesis ornament'
     }
   },
   'key': '2768'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'medium right parenthesis ornament'
     }
   },
   'key': '2769'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'medium flattened left parenthesis ornament'
     }
   },
   'key': '276A'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'medium flattened right parenthesis ornament'
     }
   },
   'key': '276B'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'medium left pointing angle bracket ornament'
     }
   },
   'key': '276C'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'medium right pointing angle bracket ornament'
     }
   },
   'key': '276D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'heavy left pointing angle quotation mark ornament'
     }
   },
   'key': '276E'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'heavy right pointing angle quotation mark ornament'
     }
   },
   'key': '276F'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'heavy left pointing angle bracket ornament'
     }
   },
   'key': '2770'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'heavy right pointing angle bracket ornament'
     }
   },
   'key': '2771'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'light left tortoise shell bracket ornament'
     }
   },
   'key': '2772'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'light right tortoise shell bracket ornament'
     }
   },
   'key': '2773'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'medium left curly bracket ornament'
     }
   },
   'key': '2774'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'medium right curly bracket ornament'
     }
   },
   'key': '2775'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left s shaped bag delimiter'
     }
   },
   'key': '27C5'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right s shaped bag delimiter'
     }
   },
   'key': '27C6'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'mathematical left white square bracket'
     }
   },
   'key': '27E6'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'mathematical right white square bracket'
     }
   },
   'key': '27E7'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'mathematical left angle bracket'
     }
   },
   'key': '27E8'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'mathematical right angle bracket'
     }
   },
   'key': '27E9'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'mathematical left double angle bracket'
     }
   },
   'key': '27EA'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'mathematical right double angle bracket'
     }
   },
   'key': '27EB'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'mathematical left white tortoise shell bracket'
     }
   },
   'key': '27EC'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'mathematical right white tortoise shell bracket'
     }
   },
   'key': '27ED'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'mathematical left flattened parenthesis'
     }
   },
   'key': '27EE'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'mathematical right flattened parenthesis'
     }
   },
   'key': '27EF'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left white curly bracket'
     }
   },
   'key': '2983'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right white curly bracket'
     }
   },
   'key': '2984'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left white parenthesis'
     }
   },
   'key': '2985'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right white parenthesis'
     }
   },
   'key': '2986'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'z notation left image bracket'
     }
   },
   'key': '2987'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'z notation right image bracket'
     }
   },
   'key': '2988'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'z notation left binding bracket'
     }
   },
   'key': '2989'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'z notation right binding bracket'
     }
   },
   'key': '298A'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left square bracket with underbar'
     }
   },
   'key': '298B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right square bracket with underbar'
     }
   },
   'key': '298C'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left square bracket with tick in top corner'
     }
   },
   'key': '298D'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right square bracket with tick in bottom corner'
     }
   },
   'key': '298E'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left square bracket with tick in bottom corner'
     }
   },
   'key': '298F'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right square bracket with tick in top corner'
     }
   },
   'key': '2990'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left angle bracket with dot'
     }
   },
   'key': '2991'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right angle bracket with dot'
     }
   },
   'key': '2992'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left arc less than bracket'
     }
   },
   'key': '2993'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right arc greater than bracket'
     }
   },
   'key': '2994'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'double left arc greater than bracket'
     }
   },
   'key': '2995'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'double right arc less than bracket'
     }
   },
   'key': '2996'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left black tortoise shell bracket'
     }
   },
   'key': '2997'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right black tortoise shell bracket'
     }
   },
   'key': '2998'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left wiggly fence'
     }
   },
   'key': '29D8'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right wiggly fence'
     }
   },
   'key': '29D9'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left double wiggly fence'
     }
   },
   'key': '29DA'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right double wiggly fence'
     }
   },
   'key': '29DB'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left pointing curved angle bracket'
     }
   },
   'key': '29FC'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right pointing curved angle bracket'
     }
   },
   'key': '29FD'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'top left half bracket'
     }
   },
   'key': '2E22'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'top right half bracket'
     }
   },
   'key': '2E23'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'bottom left half bracket'
     }
   },
   'key': '2E24'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'bottom right half bracket'
     }
   },
   'key': '2E25'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left sideways u bracket'
     }
   },
   'key': '2E26'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right sideways u bracket'
     }
   },
   'key': '2E27'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left double parenthesis'
     }
   },
   'key': '2E28'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right double parenthesis'
     }
   },
   'key': '2E29'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left angle bracket',
       'alternative': 'opening angle bracket'
     }
   },
   'key': '3008'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right angle bracket',
       'alternative': 'closing angle bracket'
     }
   },
   'key': '3009'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left double angle bracket',
       'alternative': 'opening double angle bracket'
     }
   },
   'key': '300A'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right double angle bracket',
       'alternative': 'closing double angle bracket'
     }
   },
   'key': '300B'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left corner bracket',
       'alternative': 'opening corner bracket'
     }
   },
   'key': '300C'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right corner bracket',
       'alternative': 'closing corner bracket'
     }
   },
   'key': '300D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left white corner bracket',
       'alternative': 'opening white corner bracket'
     }
   },
   'key': '300E'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right white corner bracket',
       'alternative': 'closing white corner bracket'
     }
   },
   'key': '300F'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left black lenticular bracket',
       'alternative': 'opening black lenticular bracket'
     }
   },
   'key': '3010'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right black lenticular bracket',
       'alternative': 'closing black lenticular bracket'
     }
   },
   'key': '3011'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left tortoise shell bracket',
       'alternative': 'opening tortoise shell bracket'
     }
   },
   'key': '3014'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right tortoise shell bracket',
       'alternative': 'closing tortoise shell bracket'
     }
   },
   'key': '3015'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left white lenticular bracket',
       'alternative': 'opening white lenticular bracket'
     }
   },
   'key': '3016'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right white lenticular bracket',
       'alternative': 'closing white lenticular bracket'
     }
   },
   'key': '3017'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left white tortoise shell bracket',
       'alternative': 'opening white tortoise shell bracket'
     }
   },
   'key': '3018'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right white tortoise shell bracket',
       'alternative': 'closing white tortoise shell bracket'
     }
   },
   'key': '3019'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'left white square bracket',
       'alternative': 'opening white square bracket'
     }
   },
   'key': '301A'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'right white square bracket',
       'alternative': 'closing white square bracket'
     }
   },
   'key': '301B'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'reversed double prime quotation mark'
     }
   },
   'key': '301D'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'double prime quotation mark'
     }
   },
   'key': '301E'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'low double prime quotation mark'
     }
   },
   'key': '301F'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'ornate left parenthesis'
     }
   },
   'key': 'FD3E'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'ornate right parenthesis'
     }
   },
   'key': 'FD3F'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left white lenticular bracket'
     }
   },
   'key': 'FE17'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right white lenticular' +
         ' bracket'
     }
   },
   'key': 'FE18'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left parenthesis',
       'alternative': 'glyph for vertical opening parenthesis'
     }
   },
   'key': 'FE35'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right parenthesis',
       'alternative': 'glyph for vertical closing parenthesis'
     }
   },
   'key': 'FE36'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left curly bracket',
       'alternative': 'glyph for vertical opening curly bracket'
     }
   },
   'key': 'FE37'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right curly bracket',
       'alternative': 'glyph for vertical closing curly bracket'
     }
   },
   'key': 'FE38'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left tortoise shell bracket',
       'alternative': 'glyph for vertical opening tortoise shell bracket'
     }
   },
   'key': 'FE39'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right tortoise shell bracket',
       'alternative': 'glyph for vertical closing tortoise shell bracket'
     }
   },
   'key': 'FE3A'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left black lenticular' +
         ' bracket',
       'alternative': 'glyph for vertical opening black lenticular bracket'
     }
   },
   'key': 'FE3B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right black lenticular' +
         ' bracket',
       'alternative': 'glyph for vertical closing black lenticular bracket'
     }
   },
   'key': 'FE3C'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left double angle bracket',
       'alternative': 'glyph for vertical opening double angle bracket'
     }
   },
   'key': 'FE3D'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right double angle bracket',
       'alternative': 'glyph for vertical closing double angle bracket'
     }
   },
   'key': 'FE3E'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left angle bracket',
       'alternative': 'glyph for vertical opening angle bracket'
     }
   },
   'key': 'FE3F'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right angle bracket',
       'alternative': 'glyph for vertical closing angle bracket'
     }
   },
   'key': 'FE40'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left corner bracket',
       'alternative': 'glyph for vertical opening corner bracket'
     }
   },
   'key': 'FE41'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right corner bracket',
       'alternative': 'glyph for vertical closing corner bracket'
     }
   },
   'key': 'FE42'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left white corner bracket',
       'alternative': 'glyph for vertical opening white corner bracket'
     }
   },
   'key': 'FE43'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right white corner bracket',
       'alternative': 'glyph for vertical closing white corner bracket'
     }
   },
   'key': 'FE44'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical left square bracket'
     }
   },
   'key': 'FE47'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'presentation form for vertical right square bracket'
     }
   },
   'key': 'FE48'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'small left parenthesis',
       'alternative': 'small opening parenthesis'
     }
   },
   'key': 'FE59'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'small right parenthesis',
       'alternative': 'small closing parenthesis'
     }
   },
   'key': 'FE5A'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'small left curly bracket',
       'alternative': 'small opening curly bracket'
     }
   },
   'key': 'FE5B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'small right curly bracket',
       'alternative': 'small closing curly bracket'
     }
   },
   'key': 'FE5C'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'small left tortoise shell bracket',
       'alternative': 'small opening tortoise shell bracket'
     }
   },
   'key': 'FE5D'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'small right tortoise shell bracket',
       'alternative': 'small closing tortoise shell bracket'
     }
   },
   'key': 'FE5E'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'fullwidth left parenthesis',
       'alternative': 'fullwidth opening parenthesis'
     }
   },
   'key': 'FF08'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'fullwidth right parenthesis',
       'alternative': 'fullwidth closing parenthesis'
     }
   },
   'key': 'FF09'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'fullwidth left square bracket',
       'alternative': 'fullwidth opening square bracket'
     }
   },
   'key': 'FF3B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'fullwidth right square bracket',
       'alternative': 'fullwidth closing square bracket'
     }
   },
   'key': 'FF3D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'fullwidth left curly bracket',
       'alternative': 'fullwidth opening curly bracket'
     }
   },
   'key': 'FF5B'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'fullwidth right curly bracket',
       'alternative': 'fullwidth closing curly bracket'
     }
   },
   'key': 'FF5D'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'fullwidth left white parenthesis'
     }
   },
   'key': 'FF5F'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'fullwidth right white parenthesis'
     }
   },
   'key': 'FF60'
  },
  {'category': 'Ps',
   'mappings': {
     'default': {
       'default': 'halfwidth left corner bracket',
       'alternative': 'halfwidth opening corner bracket'
     }
   },
   'key': 'FF62'
  },
  {'category': 'Pe',
   'mappings': {
     'default': {
       'default': 'halfwidth right corner bracket',
       'alternative': 'halfwidth closing corner bracket'
     }
   },
   'key': 'FF63'
  }
];


/**
 * Symbol mappings.
 * @type{Array.<{category: string,
 *        mappings: Object,
 *        key: string,
 *        names: Array.<string>}>}
 * @private
 */
cvox.AndroidMathMap.FUNCTION_MAPPINGS_ = [
  // Elementary functions
  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'logarithm',
       'alternative': 'logarithm function',
       'short': 'log'
     }
   },
   'key': 'log',
   'names': ['log']
  },
  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'natural logarithm',
       'alternative': 'natural logarithm function',
       'short': 'natural log'
     }
   },
   'key': 'ln',
   'names': ['ln']
  },
  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'logarithm base 10',
       'short': 'log base 10'} },
   'key': 'lg',
   'names': ['lg']},
  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'exponential',
       'alternative': 'exponential function',
       'short': 'exp'
     }
   },
   'key': 'exp',
   'names': ['exp', 'expt']
  },

  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'greatest common divisor',
       'short': 'gcd'
     }
   },
   'key': 'gcd',
   'names': ['gcd']
  },
  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'least common multiple',
       'short': 'lcm'
     }
   },
   'key': 'gcd',
   'names': ['gcd']
  },
  {'category': 'Complex',
   'mappings': {
     'default': {
       'default': 'argument',
       'short': 'arg'
     }
   },
   'key': 'arg',
   'names': ['arg']
  },
  {'category': 'Complex',
   'mappings': {
     'default': {
       'default': 'imaginary part',
       'short': 'imaginary'
     }
   },
   'key': 'im',
   'names': ['im']
  },
  {'category': 'Complex',
   'mappings': {
     'default': {
       'default': 'real part',
       'short': 'real'
     }
   },
   'key': 're',
   'names': ['re']
  },
  // Limits
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'infimum',
       'short': 'inf'
     }
   },
   'key': 'inf',
   'names': ['inf']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'limit',
       'short': 'lim'
     }
   },
   'key': 'lim',
   'names': ['lim']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'infimum default',
       'alternative': 'inferior limit',
       'short': 'liminf'
     }
   },
   'key': 'liminf',
   'names': ['lim inf']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'supremum limit',
       'alternative': 'superior limit',
       'short': 'limsup'
     }
   },
   'key': 'limsup',
   'names': ['lim sup']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'maximum',
       'short': 'max'
     }
   },
   'key': 'max',
   'names': ['max']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'minimum',
       'short': 'min'
     }
   },
   'key': 'min',
   'names': ['min']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'supremum',
       'short': 'sup'
     }
   },
   'key': 'sup',
   'names': ['sup']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'injective limit',
       'alternative': 'direct limit',
       'short': 'colimit'
     }
   },
   'key': 'injlim',
   'names': ['injlim', 'inj lim']
  },
  {'category': 'Limits',
   'mappings': {
     'default': {
       'default': 'projective limit',
       'alternative': 'inverse limit',
       'short': 'limit'
     }
   },
   'key': 'projlim',
   'names': ['projlim', 'proj lim']
  },
  {'category': 'Elementary',
   'mappings': {
     'default': {
       'default': 'modulo',
       'short': 'mod'
     }
   },
   'key': 'mod',
   'names': ['mod']
  },
  {'category': 'Probability',
   'mappings': {
     'default': {
       'default': 'probability'
     }
   },
   'key': 'Pr',
   'names': ['Pr']
  },
  // Trigonometric functions
  {'category': 'Trigonometric',
   'mappings': {
     'default': {
       'default': 'cosine function',
       'short': 'cosine'
     }
   },
   'key': 'cos',
   'names': ['cos', 'cosine']
  },
  {'category': 'Trigonometric',
   'mappings': {
     'default': {
       'default': 'cotangent function',
       'short': 'cotangent'} },
   'key': 'cot',
   'names': ['cot']
  },
  {'category': 'Trigonometric',
   'mappings': {
     'default': {
       'default': 'cosecant function',
       'short': 'cosecant'} },
   'key': 'csc',
   'names': ['csc']
  },
  {'category': 'Trigonometric',
   'mappings': {
     'default': {
       'default': 'secant function',
       'short': 'secant'} },
   'key': 'sec',
   'names': ['sec']
  },
  {'category': 'Trigonometric',
   'mappings': {
     'default': {
       'default': 'sine function',
       'alternative': 'sine function',
       'short': 'sine'
     }
   },
   'key': 'sin',
   'names': ['sin', 'sine']
  },
  {'category': 'Trigonometric',
   'mappings': {
     'default': {
       'default': 'tangent function',
       'short': 'tangent'} },
   'key': 'tan',
   'names': ['tan']
  },
  // Inverse trigonometric or cyclometric functions
  {'category': 'Cyclometric',
   'mappings': {
     'default': {
       'default': 'inverse cosine function',
       'alternative': 'arc cosine function',
       'short': 'arc cosine'} },
   'key': 'arccos',
   'names': ['arccos']
  },
  {'category': 'Cyclometric',
   'mappings': {
     'default': {
       'default': 'inverse cotangent function',
       'alternative': 'arc cotangent function',
       'short': 'arc cotangent'} },
   'key': 'arccot',
   'names': ['arccot']
  },
  {'category': 'Cyclometric',
   'mappings': {
     'default': {
       'default': 'inverse cosecant function',
       'alternative': 'arc cosecant function',
       'short': 'arc cosecant'} },
   'key': 'arccsc',
   'names': ['arccsc']
  },
  {'category': 'Cyclometric',
   'mappings': {
     'default': {
       'default': 'inverse secant function',
       'alternative': 'arc secant function',
       'short': 'arc secant'} },
   'key': 'arcsec',
   'names': ['arcsec']
  },
  {'category': 'Cyclometric',
   'mappings': {
     'default': {
       'default': 'inverse sine function',
       'alternative': 'arc sine function',
       'short': 'arc sine'} },
   'key': 'arcsin',
   'names': ['arcsin']
  },
  {'category': 'Cyclometric',
   'mappings': {
     'default': {
       'default': 'inverse tangent function',
       'alternative': 'arc tangent function',
       'short': 'arc tangent'} },
   'key': 'arctan',
   'names': ['arctan']
  },
  // Hyperbolic functions
  {'category': 'Hyperbolic',
   'mappings': {
     'default': {
       'default': 'hyperbolic cosine function',
       'short': 'hyperbolic cosine'
     }
   },
   'key': 'cosh',
   'names': ['cosh']
  },
  {'category': 'Hyperbolic',
   'mappings': {
     'default': {
       'default': 'hyperbolic cotangent function',
       'short': 'hyperbolic cotangent'} },
   'key': 'coth',
   'names': ['coth']
  },
  {'category': 'Hyperbolic',
   'mappings': {
     'default': {
       'default': 'hyperbolic cosecant function',
       'short': 'hyperbolic cosecant'} },
   'key': 'csch',
   'names': ['csch']
  },
  {'category': 'Hyperbolic',
   'mappings': {
     'default': {
       'default': 'hyperbolic secant function',
       'short': 'hyperbolic secant'} },
   'key': 'sech',
   'names': ['sech']
  },
  {'category': 'Hyperbolic',
   'mappings': {
     'default': {
       'default': 'hyperbolic sine function',
       'short': 'hyperbolic sine'
     }
   },
   'key': 'sinh',
   'names': ['sinh']
  },
  {'category': 'Hyperbolic',
   'mappings': {
     'default': {
       'default': 'hyperbolic tangent function',
       'short': 'hyperbolic tangent'} },
   'key': 'tanh',
   'names': ['tanh']
  },
  // Inverse hyperbolic or area functions
  {'category': 'Area',
   'mappings': {
     'default': {
       'default': 'inverse hyperbolic cosine function',
       'alternative': 'area hyperbolic cosine function',
       'short': 'area hyperbolic cosine'} },
   'key': 'arcosh',
   'names': ['arcosh', 'arccosh']
  },
  {'category': 'Area',
   'mappings': {
     'default': {
       'default': 'inverse hyperbolic cotangent function',
       'alternative': 'area hyperbolic cotangent function',
       'short': 'area hyperbolic cotangent'} },
   'key': 'arcoth',
   'names': ['arcoth', 'arccoth']
  },
  {'category': 'Area',
   'mappings': {
     'default': {
       'default': 'inverse hyperbolic cosecant function',
       'alternative': 'area hyperbolic cosecant function',
       'short': 'area hyperbolic cosecant'} },
   'key': 'arcsch',
   'names': ['arcsch', 'arccsch']
  },
  {'category': 'Area',
   'mappings': {
     'default': {
       'default': 'inverse hyperbolic secant function',
       'alternative': 'area hyperbolic secant function',
       'short': 'area hyperbolic secant'} },
   'key': 'arsech',
   'names': ['arsech', 'arcsech']
  },
  {'category': 'Area',
   'mappings': {
     'default': {
       'default': 'inverse hyperbolic sine function',
       'alternative': 'area hyperbolic sine function',
       'short': 'area hyperbolic sine'} },
   'key': 'arsinh',
   'names': ['arsinh', 'arcsinh']
  },
  {'category': 'Area',
   'mappings': {
     'default': {
       'default': 'inverse hyperbolic tangent function',
       'alternative': 'area hyperbolic tangent function',
       'short': 'area hyperbolic tangent'} },
   'key': 'artanh',
   'names': ['artanh', 'arctanh']
  },
  // Algebra
  {'category': 'Algebra',
   'mappings': {
     'default': {
       'default': 'degree'
     }
   },
   'key': 'deg',
   'names': ['deg']
  },
  {'category': 'Algebra',
   'mappings': {
     'default': {
       'default': 'determinant',
       'short': 'det'
     }
   },
   'key': 'det',
   'names': ['det']
  },
  {'category': 'Algebra',
   'mappings': {
     'default': {
       'default': 'dimension'
     }
   },
   'key': 'dim',
   'names': ['dim']
  },
  {'category': 'Algebra',
   'mappings': {
     'default': {
       'default': 'homomorphism',
       'short': 'hom'
     }
   },
   'key': 'hom',
   'names': ['hom', 'Hom']
  },
  {'category': 'Algebra',
   'mappings': {
     'default': {
       'default': 'kernel'
     }
   },
   'key': 'ker',
   'names': ['ker']
  },
  {'category': 'Algebra',
   'mappings': {
     'default': {
       'default': 'trace'
     }
   },
   'key': 'Tr',
   'names': ['Tr', 'tr']
  }
];
