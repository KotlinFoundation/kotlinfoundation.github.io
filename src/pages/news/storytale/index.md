---
title: "Google Summer of Code 2024 – Storytale Compose Multiplatform Component Gallery Generator"
date: 2025-01-16 11:00
---


The Kotlin Foundation facilitated mentorship for several projects during the [Google Summer of Code 2024](https://summerofcode.withgoogle.com/archive/2024/organizations/kotlin-foundation), and we are excited to announce the completion of a project for a composable functions gallery generator\!

[WhiteScent](https://github.com/whitescent), a part-time computer science student and Android enthusiast, contributed to this project, and [Artem Kobzar](https://github.com/JSMonk), a software engineer working on [Kotlin/Wasm](https://kotlinlang.org/docs/wasm-overview.html) at JetBrains, served as the mentor. 

The project aimed to develop a Gradle Plugin and runtime library to describe and generate a multiplatform (web, desktop, iOS, and Android) gallery app that shows all of the described composable functions individually in a single location.

Explore [Storytale on GitHub](https://github.com/Kotlin/Storytale).

## Introduction

At the beginning of the React era of web development, Storybook’s proposed approach of describing component states and generating the whole UI library gallery is still one of the most common approaches to documentation in web development.

Jetpack Compose, the declarative UI framework developed by Google, has advanced rapidly, and JetBrains has extended this technology across multiple platforms. The result is [Compose Multiplatform](https://github.com/JetBrains/compose-multiplatform), a framework for sharing UIs across Android, iOS, web, and desktop.

With Compose UI, you can easily write components for your multiplatform apps. But what if you could visually integrate the components you’ve written into one place?

That's exactly what our project Storytale aims to accomplish.

## Project goals

First, we plan to create a Compose Multiplatform app that can showcase all of the created components. Leveraging the power of the multiplatform technology, you'll be able to seamlessly view your components across various platforms.

To achieve this, we will:

* Develop a Gradle plugin that provides separate source sets and tasks for generating the gallery.  
* Build a runtime library to describe the different states of composable functions.  
* Create a multiplatform UI that is available for all of the platforms.

We will also provide developers with a set of runtime APIs and Gradle tasks, which will help simplify the process of writing components that need visualization in your projects. 

Let's write a simple use case, assuming we have a `PrimaryButton` component.

```kotlin
@Composable  
fun PrimaryButton(  
  text: String,  
  onClick: () -> Unit = {},  
  enabled: Boolean = true  
) {  
 Button(onClick = onClick, enabled = enabled) {  
   Text(text)
 }  
}
```

In the project, we can create a `commonStories` folder and then write the following code:

```kotlin
val PrimaryButton by story {  
  val enabled by parameter(true)  
  val text by parameter("Click Me")

  PrimaryButton(text = text, enabled = enabled)  
}
```

Then, depending on the target platform, we can run the `storiesRun` command, and we'll be able to see this visualized component on the corresponding platform. We'll also be able to edit `PrimaryButton`'s text and enabled parameters. That's it\!

Here is a demo of the generated gallery for an example project working on Android, iOS, and desktop: [https://youtu.be/9IYsHYakMuM](https://youtu.be/9IYsHYakMuM)

The source code of the described stories is [here](https://github.com/Kotlin/Storytale/tree/main/examples/src/commonStories/kotlin).
## Next steps

We've experimented with the feasibility of many aspects in this project, and so far the results look promising\! Here are the future improvements we are planning to make:

* Extending the runtime API to describe enums and modifiers and to provide variation themes.  
* Integrating Dokka documentation into the Composable function stories.  
* Implementing an IntelliJ IDEA plugin to support an @Preview-like experience for a single story.

Thanks to WhiteScent and Artem Kobzar for creating this tool and making the Compose Multiplatform tools ecosystem even richer\!

Feel free to share your ideas and contributions to our project: [Storytale on GitHub](https://github.com/Kotlin/Storytale)\!
