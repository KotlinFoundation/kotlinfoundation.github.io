---
title: "Google Summer of Code 2023 – Enhancing kotlinx-benchmark's API and User Experience"
date: 2024-01-08 11:00
---

The Kotlin Foundation sponsored four projects for the Google Summer of Code 2023, and we are excited to announce the completion of a project to enhance the _kotlinx-benchmark_ library! JetBrains, a Kotlin Foundation member, provided mentoring support for this project.

The contributor to this project was [Henok Woldesenbet](https://github.com/wldeh), an aspiring software engineer and the mentor was Abduqodiri Qurbonzoda, a software developer working on Kotlin libraries at JetBrains. The project aimed to improve the [kotlinx-benchmark](https://github.com/Kotlin/kotlinx-benchmark) library API and user experience.

## Introduction

The _kotlinx-benchmark_ library is an invaluable open-source tool that facilitates the benchmarking of multiplatform code written in Kotlin. Despite its essential function, its user experience had some gaps, confusing users and lacking features that developers have come to expect from benchmarking libraries.

## Goals

The primary goals for the project were:
* Infuse the library with clear and concise documentation, supplemented with practical usage examples. The absence of comprehensive documentation previously made using _kotlinx-benchmark_ challenging for many, especially newcomers.
* Address user concerns and lint the library API, making it more intuitive and user friendly.
* Refine the library's internals, including by enhancing integration tests, improving error feedback through refined validations and task descriptions, and streamlining the profiler's execution process.
* Elevate the overall user experience, transforming the _kotlinx-benchmark_ from a budding tool into a robust library that the Kotlin community can rely on.

## Achievements

Here are the primary achievements made in the Google Summer of Code project:
* **Documentation for increased accessibility**: Detailed documentation was added, ensuring that anyone, from novices to experts, could dive into, experiment with, and harness the power of the library.
* **Improved error messages**: A library's UX is significantly influenced by the quality of its error feedback. Error messages were revamped, ensuring they are not only accurate but also instructive, guiding users towards solutions.
* **Refined integration tests**: Comprehensive integration tests were added to ensure stability across a variety of use cases.
* **Tech stack modernization**: The library was migrated to the latest versions of Gradle and JMH, and transitioned from Groovy DSL to the latest version of Kotlin DSL to optimize the build scripts.
* **Streamlined profiler usage**: In response to feedback from our users, the process of running profilers was simplified, facilitating a smoother user experience.

## Next Steps

To further enhance _kotlinx-benchmark_, we are planning to:
* Support the Android target and integrate the _androidx.benchmark_ framework into _kotlinx-benchmark_.
* Implement an IntelliJ IDEA plugin to support running benchmarks with a click of a run button, the same way as running unit tests.

If you'd like to help continue improving _kotlinx-benchmark_, check out the project's [contribution guide](https://github.com/Kotlin/kotlinx-benchmark/CONTRIBUTING.md).

Thank you Henok and Abduqodiri for making _kotlinx-benchmark_ even better for Kotlin developers!
