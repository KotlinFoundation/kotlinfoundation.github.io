---
title: "Google Summer of Code 2025 – Gradle Convention Plugin for Developing Jenkins Plugins"
date: 2025-11-19 11:45
coverImage: "./cover.png"
socialImage: "./social.png"
---


# Gradle Convention Plugin for Developing Jenkins Plugins

> The moment that acceptance email landed in my inbox, I couldn’t stop smiling. Working with my mentors was one of the most rewarding parts of this journey. - Aarav Mahajan

[Project page](https://community.gradle.org/events/gsoc/2025/jenkins-plugins-toolchain/)

Mentors: Oleg Nenashev (ex-Gradle), Rahul Somasunderam (Netflix), Steve Hill (Netflix)

For Aarav Mahajan, a computer engineering student from Punjab, India, it wasn’t just writing a Gradle plugin – it was about expanding what’s possible for Jenkins developers and modernizing plugin development for Gradle.

The Gradle Convention Plugin introduces a clean, Kotlin-first way to build, test, and publish Jenkins plugins, standardizing best practices, automating checks, and bringing long-requested Gradle parity to the community.

## Introduction

Hello everyone 👋, I’m [Aarav Mahajan](https://www.linkedin.com/in/aaravmahajan12/), a computer engineering student at Thapar Institute of Engineering & Technology in Patiala, Punjab, India. This year, I had the incredible opportunity to work on a **Kotlin Foundation** project for **Google Summer of Code 2025**, contributing under the **Jenkins organisation** on the **Gradle Convention Plugin** project – an experience that blended my love for Kotlin, DevOps, and developer tooling.

*The moment that acceptance email from Google landed in my inbox, I couldn’t stop smiling. I knew right then that my summer was about to be filled with code, learning, and a lot of open-source magic.* 😊

## Project overview

While most of the Java and Kotlin ecosystem has embraced modern build tools like Gradle, with its fast builds and elegant Kotlin DSL, Jenkins plugin developers have largely remained tied to Apache Maven. It remains the primary and officially recommended build tool for Jenkins plugin development, powering the vast majority of plugins in the ecosystem. Its strong integration with the Jenkins plugin parent POM, extensive documentation, and mature lifecycle support make it the safest and default choice for most developers.

Gradle support technically existed through the **Gradle JPI plugin**, but it came with major limitations: no native PCT support, fragile dependency management, and missing compliance for Jenkins hosting. In late 2022, the Jenkins community opened a [discussion](https://groups.google.com/g/jenkinsci-dev/c/lHQAiEepBiw?pli=1) highlighting significant gaps in Gradle support for plugin hosting and automation. During that time, new open-source Jenkins plugins using Gradle were temporarily blocked from hosting until those issues were resolved.

![][GSoC3]

The **Jenkins Gradle Convention Plugin**, developed as part of my Google Summer of Code (GSoC) 2025, offers a standardized solution for building Jenkins plugins with Gradle. This initiative arose from community discussions and efforts to address existing gaps. I built this plugin in collaboration with **Gradle**, **Netflix**, and the **Kotlin Foundation**, under the expert guidance of [Oleg Nenashev](https://github.com/oleg-nenashev), [Steve Hill](https://github.com/sghill), and [Rahul Somasunderam](https://github.com/rahulsom).

It is a Kotlin-first Gradle convention plugin that acts as the Maven [parent POM](https://github.com/jenkinsci/plugin-pom) equivalent for Jenkins plugin development with Gradle. Built on top of the well-established Gradle JPI plugin, it provides a unified, opinionated foundation for building, testing, and publishing Jenkins plugins – standardizing best practices, automating quality checks, and eliminating boilerplate. It is an important step toward making Gradle a first-class citizen in Jenkins plugin development, closing long-standing gaps identified in prior community discussions.

This plugin also showcases how Kotlin’s expressive DSL and strong type-safety simplify complex Gradle build logic, turning repetitive scripts into clean, reliable configurations. It also highlights Kotlin’s versatility – not just for building applications, but for building the infrastructure that powers them.

## My GSoC journey with the Kotlin Foundation

**The search that led me here**

Google Summer of Code (GSoC) has always been more than just a program – it’s where curiosity meets real-world contribution, and a dream opportunity for every tech enthusiast. Each GSoC season, I’d read about developers who started as users and went on to contribute to the tools they used on a daily basis. Every one of those stories left a spark in me – a quiet sense of inspiration and determination that someday, I would be part of that journey too.

So, as I was scrolling through this year’s organizations and project ideas, a **Google Discover notification** popped up on my phone: *“*The Kotlin Foundation joins GSoC 2025\.*”* I paused for a moment – and honestly, my eyes lit up. Kotlin had been such a big part of my journey as a developer; the idea of contributing back to its ecosystem felt *right*. It wasn’t just excitement; it was an unmistakable feeling of **“this is where I’m meant to be.”** From that very moment, I knew I had found the organization I wanted to be part of.

The next phase was project selection. I scanned through a broad range of projects across build systems, developer tooling, and multiplatform support. The “[Jenkins Plugins Toolchain / Gradle Convention Plugin](https://kotlinlang.org/docs/gsoc-2025.html#gradle-convention-plugin-for-developing-jenkins-plugins-easy-to-hard-90-hrs-to-350-hrs)” idea jumped out. It brought together everything I love – automation, Gradle, and the Kotlin ecosystem – with a clear goal of simplifying plugin development through consistency and convention.

**Writing the proposal**

Crafting the proposal turned out to be an intense but deeply rewarding process. I spent a week diving deep into the pain points of Jenkins plugin development, studying how the existing **Gradle JPI plugin** worked and where it fell short, and going through the community discussions to understand what developers struggled with the most. My goal wasn’t just to offer quick patches/fixes, but to design and implement a solution that genuinely enhanced the developer experience.

Once I felt confident about the direction, I began writing the proposal – gathering resources, watching talks on Gradle plugin development, exploring Jenkins repositories, and falling down more than one rabbit hole along the way. I built a small **prototype** to enhance my understanding and showcase the idea in action. After drafting my initial proposal, I shared it with **Oleg**, the **organization admin**, who gave me insightful feedback. Shortly after, Oleg scheduled a quick **virtual coffee chat**, where we discussed the project, my motivations, and how the idea could evolve during GSoC. That conversation gave me a clearer vision of what lay ahead and transformed my excitement into genuine momentum.

**The selection moment**

When the results were announced, I remember refreshing my inbox late at night – heart racing – and there it was: *“*Congratulations\!*”* I had been selected. That single word felt like the reward for weeks of effort, late nights, and hard work. I couldn’t help but smile, and the first thing I did was tell my family – they were just as excited as I was.

**Community bonding**

The **Community Bonding Phase** that followed next kicked things off with introductions, aligned goals and expectations, and set up communication channels to keep the project on track. I spent time configuring my development environment and exploring the Jenkins plugin ecosystem more deeply.

**First Coding Phase: Laying the foundation**

Once the community bonding period ended, it was time to roll up my sleeves and dive into the code. The first few weeks were all about understanding how the Jenkins plugin ecosystem worked in practice, experimenting, breaking things, and learning fast. My primary focus was simplifying dependency management with the [Jenkins Bill of Materials (BOM)](https://github.com/jenkinsci/bom) and wiring up the basic Gradle conventions. I added support for code-quality tools like **Checkstyle**, **SpotBugs**, **Detekt**, etc., making plugin builds cleaner and more reliable by default. I began testing the convention plugin on several Jenkins plugins already built with Gradle to see how it performed in real-world scenarios. That phase gave me confidence that this project wasn’t just an experiment anymore; it was becoming something developers could truly depend on.

**Mid-term evaluation: Building momentum**

By mid-term evaluation, I had to demonstrate working BOM integration, quality tool setup, and working examples. The pressure was real, but passing that evaluation with positive feedback from my mentors was one of the proudest and most fun moments of my summer.

Here is my demo from the mid-term evaluation: [Google Drive Link](https://drive.google.com/file/d/1VaGFiRP466RS1FyaT6rT7xskZKXJ50x_/view?usp=drive_link).

**Final Coding Phase: Bringing it all together**

Everything came together in the last stretch. I concentrated on enhancing support for [Plugin Compatibility Tester (PCT)](https://github.com/jenkinsci/plugin-compat-tester), streamlining metadata production, and getting the plugin ready for public release. It seemed like a full-circle moment to submit the plugin hosting request and have it approved by the official [Jenkins](https://github.com/jenkinsci/) organisation. Writing a [community blog post](https://www.jenkins.io/blog/2025/08/31/aarav-mahajan-gsoc-gradle-convention-plugin-for-jenkins-plugin-development/), documenting the plugin, and getting early feedback from developers who were testing it out were how I ended the summer.

**Working with my mentors**

I would say this was one of the most rewarding parts of this journey. Oleg, Steve, and Rahul weren’t just reviewers; they were guides who challenged my assumptions, encouraged experimentation, and shared insights from real-world experience. Our discussions often went beyond the project itself, touching on design philosophy, long-term maintainability, and open-source collaboration. The feedback that they provided shaped not just my code, but my approach to problem-solving. This taught me more about modern software engineering than any textbook could.

**Challenges along the way**

The steep learning curve of understanding Jenkins’ plugin architecture, coupled with Gradle’s evolving APIs, tested my patience and adaptability. Some days, I spent long hours debugging tricky build issues, ensuring cross-version compatibility, meeting Jenkins hosting requirements, wiring up code-quality tools, and refining every small piece until the build felt truly production-ready. Integrating the **Jenkins BOM** and **Plugin Compatibility Tester (PCT)** added another layer of complexity, as I had to ensure the plugin worked seamlessly across multiple Jenkins core and dependency versions. Every roadblock taught me something. I learnt how to break down complex problems, research effectively, and approach debugging with structure without losing my cool.

**What this journey taught me**

This project was a crash course in real-world engineering. I deepened my understanding of **Gradle plugin development**, **Jenkins’ build ecosystem**, and modern **toolchain management**. On the non-technical side, I learned how to plan deliverables, communicate progress clearly, and write maintainable, community-friendly code. I presented my work to the [Jenkins Developer Mailing List](https://groups.google.com/g/jenkinsci-dev/c/00r_hESYtKY?pli=1), wrote blog posts for the Gradle Community and Jenkins.io, and engaged with developers who had honest, nuanced feedback.

With this experience, I realized how much I enjoy working on developer infrastructure – the invisible layer that makes everyone else’s work smoother. Contributing to open source at this scale gave me confidence in my technical direction and reaffirmed my goal of building tools that empower developers worldwide.

**Final thoughts and reflections**

Last but not least, it wasn’t just a summer project – it became a stepping stone toward a career centered around impact and collaboration. The journey gave me memories I will cherish for years to come – late nights, small wins, the bonds I built with my mentors, and the joy of seeing an idea turn into something tangible.

Thank you for taking the time to read my GSoC journey.☕ If you’d like to explore my work, check out my [project page](https://community.gradle.org/events/gsoc/2025/jenkins-plugins-toolchain/) and [GitHub repository](https://github.com/jenkinsci/gradle-convention-plugin).

**Let’s connect**

LinkedIn: [aaravmahajan12](https://www.linkedin.com/in/aaravmahajan12)  
GitHub: [aaravmahajanofficial](https://github.com/aaravmahajanofficial)  
Slack: [\#*jenkins-plugin-toolchain*](https://gradle-community.slack.com/archives/C08S0GKMB5G)
