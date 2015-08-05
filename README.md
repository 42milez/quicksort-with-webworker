# Overview
I started this project for benchmarking the performance of quick sort with Web Worker.
There are the two parts in this project. One of them evaluates the performance of recursive quick sort.
Another one evaluates only non-recursive quick sort performance.
Some of the non-recursive quick sort benchmarking are evaluated with one or two worker threads.

see also: [非再帰版クイックソートのパフォーマンス比較（Web Workers + Array Buffer）](http://akihiro-takase.tumblr.com/post/122149323831/%E9%9D%9E%E5%86%8D%E5%B8%B0%E7%89%88%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF%E3%82%BD%E3%83%BC%E3%83%88%E3%81%AE%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E6%AF%94%E8%BC%83web-workers-array)

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

# Test options

You can set some test options in a test by passing query parameters to a SpecRunner like below:

> test/spec/multi-thread/singleworker?n=10000&randmax=100&verbose=true

Key           | Value
------------- | -------------
n             | The number of the elements for an array which will be sorted.
randmax       | The max value of an element.
verbose       | Show some additional debug messages in a browser's console.

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
