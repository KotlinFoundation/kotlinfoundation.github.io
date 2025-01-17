---
title: "Google Summer of Code 2024 – Incremental Compilation for the Kotlin/Wasm Compiler"
date: 2025-01-17 11:00
---


The Kotlin Foundation sponsored four projects for the [Google Summer of Code 2024](https://summerofcode.withgoogle.com/archive/2024/organizations/kotlin-foundation), and we are excited to announce the completion of the “Incremental Compilation for the Kotlin/Wasm Compiler” project\! JetBrains, a Kotlin Foundation member, provided mentoring support for this project.

This project enhanced the Kotlin-to-Wasm compiler with incremental compilation capabilities, reducing build times by allowing it to recompile only modified files. The contributor, Osama Ahmad, optimized and reused components from the Kotlin/JS backend while improving documentation and refactoring the codebase.

Thanks to [Osama Ahmad](https://www.linkedin.com/in/osamaahmad123/) and the mentor from JetBrains, [Igor Yakovlev](https://www.linkedin.com/in/igoriakovlev), for their great input\!

Explore [Kotlin/Wasm](https://kotlinlang.org/docs/wasm-overview.html).

## Introduction

Incremental compilation is a technique that helps increase compilation speed by recompiling only changed files instead of your whole program (a clean build). The Kotlin-to-Wasm compiler is used to support only clean builds, but during this project, we enhanced it to support incremental compilation, too.

## Goals of the project

The primary goals for the project were:

* To implement incremental compilation for the Wasm backend.  
* To reuse code as much as possible from the JavaScript  backend.  
* To specialize and optimize incremental compilation for Wasm.

## Achievements

During the project, the following key achievements were made:

* **Incorporation of incremental compilation**: Now, the Wasm backend supports incremental compilation in addition to performing clean builds.  
* **Code reuse**: Many of the incremental compilation components were reused from the JavaScript backend and are specialized to work with the Wasm backend as well. One example is the CacheUpdater component, which determines the files for which we can use cached compiled files and the files that need to be recompiled, and updates the cached files as appropriate.  
* **Optimizations**: Multiple optimizations have been tried. Some are not worth the complexity they’ll introduce, such as trying to resolve struct field IDs in link time, but some have been successfully applied, such as the relocation of most bodiless declarations before starting the compilation process.  
* Documentation and refactoring: As a side effect of incorporating incremental compilation, the codebase became more complex and needed some refactoring and documentation for easier future development. One example is breaking the final linking function, `linkWasmCompiledFragments`, into multiple smaller and clearer functions, along with the necessary documentation.Newly introduced components such as `WasmSerializer` and `WasmDeserializer` are well documented, as well.

## Next steps

Through benchmarking, we found that the time taken to serialize and deserialize Wasm cached compiled files majorly contributes to linking time. This is because a single Wasm binary is produced, and each time a change is made, we need to load (deserialize) all cached compiled modules and link all of them in a single binary, even if only a single file in a single module was changed.

One solution to this problem is to implement per-module compilation, in which each Kotlin module is compiled to a standalone Wasm binary, and utilize Wasm features to link between the different module Wasm binaries. This way, we don’t need to load every module and link all of them into a single binary on each recompilation.
