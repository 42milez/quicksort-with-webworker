# Overview
I started this project for benchmarking the performance of quick sort with Web Worker.
There are the two parts in this project. One of them evaluates the performance of recursive quick sort.
Another one evaluates only non-recursive quick sort performance.
Some of the non-recursive quick sort benchmarking are evaluated with one or two worker threads.

# How to run the benchmark
You can run some specs to open a SpecRunner.html in your browser.
For example, if you run a multi-thread non-recursive quick sort spec, open a HTML file below:

> test/spec/multi-thread/non-recursive/doubleworker/SpecRunner.html

And you can see the result of benchmarking in the console on a browser.

# Specs

#### 1. Recursive Quick Sort
test/spec/single-thread/recursive

#### 2. Non-Recursive Quick Sort
test/spec/single-thread/non-recursive

#### 3. Non-Recursive Quick Sort with a WebWorker thread
test/spec/multi-thread/singleworker

#### 4. Non-Recursive Quick Sort with Typed Array and a WebWorker thread
test/spec/multi-thread/singleworker/typedarray

#### 5. Non-Recursive Quick Sort with 2 WebWorker threads
test/spec/multi-thread/doubleworker

#### 6. Non-Recursive Quick Sort with Typed Array and 2 WebWorker threads
test/spec/multi-thread/doubleworker/typedarray

# Spec options

You can set some test options in a test by passing query parameters to a SpecRunner like below:

> test/spec/multi-thread/singleworker?n=10000&randmax=100&verbose=true

> n:       The number of the elements for an array which will be sorted.
> randmax: The max value of an element.
> verbose: Show some additional debug messages in a browser's console.

# Copyright and license
The MIT License

Copyright (c) 2015 Akihiro TAKASE http://akihiro-takase.tumblr.com/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
