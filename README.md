# z-index-reporter

## Installation

`npm install -g z-index-reporter`

## Usage

In your command line:

`z-index-reporter {url to you css}`

## Example

`z-index-reporter https://raw.githubusercontent.com/epayet/z-index-reporter/master/example/simple.css`

This css contains: 

```css
.class1 {
    z-index: 1;
}

.class2 {
    z-index: 2;
}

.another-class-with-z-index-2 {
    z-index: 2;
}
```

And the output will be:

```
{ 
  '1': [ '.class1' ],
  '2': [ '.class2', '.another-class-with-z-index-2' ] 
}
```

You see classes that has a z-index of 1, 2, etc. 
In that case one class has a z-index of 1, and 2 classes have a z-index of 2.

## Contributing

Pull requests and suggestions are welcome!

### TODO

* Handle multiple files
* Handle strings from cli

## License

MIT License

Copyright (c) 2016 Emmanuel Payet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.