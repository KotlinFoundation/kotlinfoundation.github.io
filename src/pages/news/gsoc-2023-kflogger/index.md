---
title: "Google Summer of Code 2023 - KFlogger (Kotlin Multiplatform Flogger)"
date: 2024-01-08 00:02
---

The Kotlin Foundation sponsored 4 projects for the Google Summer of Code 2023 and we are excited to announce the completion of the KFlogger project, an experimental Kotlin Multiplatform version of [Google's Flogger logging library](https://github.com/google/flogger)! The contributor to this project was [Giancarlo Buenaflor](https://www.linkedin.com/in/giancarlo-buenaflor/), a computer science undergraduate, and the mentor was Mark Mann, a Kotlin Multiplatform engineer at Google.

## Introduction

Flogger, Google's default logging framework for JVM projects, opens up new opportunities for efficient cross-platform logging. The KFlogger project aims to enable the integration of Flogger into iOS and JVM, benefitting from the multiplatform capabilities of Kotlin.

KFlogger incorporates the existing JVM Flogger codebase as a Java module, preserving its core functionality. The JVM implementation remains largely untouched and is directly actualized through the actual typealias mechanism. On the iOS side, KFlogger introduces a default logging backend based on OSLog.

Here is a demo of this working on Android and iOS:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hkyL-Lhkla8?si=sC-VNE7s8YTZ673C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Getting Started

To use KFlogger, add the following dependency to your `commonMain` sourceSet:

```kotlin
// Find the latest version on https://mvnrepository.com/artifact/com.giancarlobuenaflor/kflogger
implementation("com.buenaflor:kflogger:0.0.3")
```

This will allow you to start simple logging.
Add the `KFluentLogger` instance to your class and then you can start logging through your common code:

```kotlin
import com.giancarlobuenaflor.kflogger.KFluentLogger

class LoggingClass {
    private val logger = KFluentLogger.forEnclosingClass()
    
    fun log() {
        logger.atWarning().log("string: %s“, “example”)
        logger.atWarning().log("integer: %d”, 1)
        logger.atWarning().log(“float: %f, 1.0f)
        logger.atWarning().log(“%d%% %s, 100, “chance”)
    }
}
```

The source is in a [GitHub repository](https://github.com/buenaflor/KFlogger) and we'd love your feedback and contributions!

Thank you Giancarlo and Mark for helping make Kotlin Multiplatform even better!
