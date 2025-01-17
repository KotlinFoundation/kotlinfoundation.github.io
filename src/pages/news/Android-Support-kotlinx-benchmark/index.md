---
title: "Google Summer of Code 2024 – Android Support in `kotlinx-benchmark`"
date: 2025-01-17 11:00
---


The Kotlin Foundation sponsored a project to implement Android support in the `kotlinx-benchmark` library as part of [Google Summer of Code 2024](https://summerofcode.withgoogle.com/archive/2024/organizations/kotlin-foundation), and we are excited to announce its completion.

Thank you to [Qizhao Chen](https://github.com/kx412764776) and the mentor team from Google and JetBrains – Abduqodiri Qurbonzoda, Dustin Lam, and Rahul Ravikumar – for your great input.

Check out the [`kotlinx-benchmark` library](https://github.com/Kotlin/kotlinx-benchmark).

## Introduction

The [`kotlinx-benchmark` library](https://github.com/Kotlin/kotlinx-benchmark) is an open-source tool for benchmarking Kotlin code on various platforms, including the JVM, JS, wasmJs, and native. However, the library lacks support for benchmarking on Android. This project integrated this functionality using the existing Android benchmarking library `androidx.benchmark` to ensure that the current functionality supports Android as well.

## Goals of the project

The main goals for this project were to:

* Automatically detect Android targets in Kotlin Multiplatform projects and retrieve the corresponding compilation output.  
* Create a template Android project that can be used to run the benchmarks.  
* Retrieve benchmark annotations from the Android target and use the `androidx.benchmark` library to run these benchmarks in the generated project.  
* Display the benchmark results in the console during execution and write the final results to a file for further analysis.

## Achievements

The project yielded the following key achievements:

* **Android target detection and compilation output**: Implemented detection of Android targets in Kotlin Multiplatform projects and retrieval of the necessary compilation outputs.  
* **Template Android project generation**: Developed a mechanism to generate a template Android project in the build directory, allowing benchmarks to run seamlessly in an Android environment.  
* **Annotation mapping and code generation**: Decompiled the compilation output of the Android target and retrieved the annotations with associated data, mapped the annotations to the `androidx.benchmark` configuration, and generated the necessary benchmark code that can be run by the androidx.benchmark library.  
* **Test validation**: Ensured that the template project and generated code could compile and run successfully on environments, validating the flexibility and robustness of the solution.  
* **Capture and reporting of benchmark results**: Captured benchmark data from Logcat during execution, with measurement data output to the console and the final benchmark results being written in a file.

## Next steps

Further improvements will focus on:

* Adding Android-specific configuration options to enhance flexibility when running benchmarks.  
* Fetching raw benchmarking results from `androidx.benchmark` in binary format to replace the current Logcat-based data capture method.
