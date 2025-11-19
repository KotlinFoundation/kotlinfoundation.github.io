---
title: "Google Summer of Code 2025 – Improving Configuration Cache in Key Gradle Plugins"
date: 2025-11-19 11:45
coverImage: "./cover.png"
socialImage: "./social.png"
---

<h1>Improving Configuration Cache in Key Gradle Plugins</h1>

>Working with my mentors was an amazing experience. They provided invaluable guidance, from high-level architectural advice to detailed feedback on pull requests. - Nouran Atef

[Project page](https://community.gradle.org/events/gsoc/2025/configuration-cache-and-lock-contention/)

Mentors: Oleg Nenashev (ex-Gradle), Rafael Chaves (Gradle), Rodrigo Oliveira (Gradle)

Hailing from Cairo, Nouran Atef spent her summer making Gradle builds faster and more reliable. Her project tackled Configuration Cache compatibility across major community plugins, refactoring them to remove bottlenecks and enable smarter caching. She contributed fixes, documentation, and patterns now adopted across plugins, boosting performance for developers everywhere.
## **About the author**

Hi everyone\! I'm Nouran Atef, a senior computer engineering student from Cairo, Egypt. I'm passionate about developer tooling and open-source collaboration, and I love diving deep into build systems to make development faster and more efficient for everyone.

## **Why this project matters**

We've all been there: You make a tiny change, hit "build," and then wait... and wait. In large-scale projects, slow build times are a major drain on productivity. This is the exact problem my Google Summer of Code project with the Kotlin Foundation aimed to tackle.

The goal was to improve support for Gradle’s **Configuration Cache**, a powerful feature that dramatically speeds up builds by caching the result of the configuration phase. When a plugin isn't compatible, the entire cache is invalidated, and the performance gains are lost. My project focused on identifying popular community plugins with these compatibility issues, fixing them, and contributing those fixes back to the open-source community.

By making more plugins compatible, we make Gradle builds faster and more reliable, which is a huge win for developer productivity and CI stability across the Gradle plugins.

## **Technical highlights**

The primary technical challenge encountered was that plugins were accessing the live, non-serializable `Project` object during task execution, which is incompatible with the Configuration Cache.

To solve this, I used a consistent strategy across several plugins: **decouple tasks from the live project model**. This meant reading all the necessary data during the configuration phase and passing it to the task in a safe, serializable way.

My main tools for this were:

1. **Serializable data transfer objects (DTOs):** I created simple data-holder classes to act as a "snapshot" of the required project information.  
2. **Gradle’s lazy Provider API:** I used `Provider<T>` to represent values that might not be known at configuration time, deferring their computation until they were actually needed. This allowed me to safely connect data from the plugin extension to the task inputs, ensuring proper task dependency tracking and configuration cache compatibility.

## **A few key contributions**

While I worked on several plugins, here are a few highlights:

### 1\. Nebula Gradle Lint Plugin (gradle-lint-plugin)

* **Problem:** The plugin's primary violation was its direct reference to the `Project` object and its use of `project.configurations` to resolve dependencies at configuration time. The direct `Project` reference has been successfully removed.  
* **Fix:** The core approach was to decouple tasks and services from Gradle's live `Project` object. This was achieved through a consistent, two-pattern strategy:  
  1. **Operate on data snapshots:** I created simple, serializable data containers (`ProjectInfo` and `ProjectTree`) to act as a "snapshot" of the necessary data, extracted using Gradle's lazy Provider API.  
  2. **Defer access with a supplier:** For rare cases where a task absolutely required the live `Project` model at execution time, I used the serializable `Supplier`. This provides a "recipe" to get the `Project` object on demand, isolating the non-cache-friendly logic.  
* **Technical write-up:** [Supporting Configuration Cache \- my learnings from the Nebula Lint Plugin](https://dev.to/gradle-community/unlocking-configuration-cache-with-gsoc-contributor-374l).  
* **Pull request:** [\#433](https://github.com/nebula-plugins/gradle-lint-plugin/pull/433) 

### 2\. Liquibase Gradle Plugin (liquibase-gradle-plugin)

* **Problem:** The main task accessed `project.properties`, `project.getProjectDir()`, and other `Project` APIs directly during execution.  
* **Fix:** I introduced two DTOs, `LiquibaseInfo` and `ProjectInfo`, to capture all the necessary data at configuration time. The task was then refactored to operate on these DTOs, making its execution logic stateless and cache-friendly.  
* **Pull request:** [\#176](https://github.com/liquibase/liquibase-gradle-plugin/pull/176)   
* **Bonus:** This work was turned into a guide for the official Gradle Cookbook: [Case Study \- Enabling Gradle Configuration Cache Support in the Liquibase Plugin](https://cookbook.gradle.org/plugin-development/configuration-cache/example-config-cache-liquibase-plugin/?_gl=1*j978j1*_gcl_au*MTM2OTczMDc1MC4xNzYwNDU1NzUw*_ga*MzAxNTA3OS4xNzYwNDU1NzUy*_ga_7W7NC6YNPT*czE3NjA0NTU3NTEkbzEkZzAkdDE3NjA0NTU3NTkkajUyJGwwJGgw).

### 3\. Compose Multiplatform Localization Plugin

* **Problem:** The plugin's main task contained multiple Configuration Cache violations by accessing the `Project` object during the execution phase. Specifically, it used `project.projectDir` to resolve file paths and `project.logger` for logging messages.  
* **Fix:** This was a more straightforward fix. I replaced the `project.projectDir` call with a lazy `@Internal` property and switched from `project.logger` to the task's own built-in `getLogger()` method.  
* **Pull requests:** [\#12](https://github.com/hyperether/compose-multiplatform-localize/pull/12) and [\#13](https://github.com/hyperether/compose-multiplatform-localize/pull/13)

## **About My GSoC Experience**

I discovered GSoC while looking for ways to contribute to impactful open-source projects. The idea of working on developer tools that I use every day was incredibly exciting. I spent a lot of time studying Gradle's build lifecycle and the Configuration Cache documentation to write a proposal that outlined a clear, actionable plan for identifying and fixing issues in community plugins.

Working with my mentors, **Rafael Chaves**, **Rodrigo Oliveira**, and **Oleg Nenashev**, was an amazing experience. They provided invaluable guidance, from high-level architectural advice to detailed feedback on pull requests. Their expertise helped me navigate the complexities of both Gradle and the various open-source projects I contributed to.

The biggest challenge was the variety of plugin architectures. Each one required a unique approach, and some required deep architectural changes. It was a fantastic learning opportunity.

Through GSoC, I've learned so much:

* **Technical skills:** I gained deep knowledge of the Gradle API, build performance optimization, and advanced debugging techniques.  
* **Tools:** I became much more proficient with Git and GitHub Actions.  
* **Mindset:** I learned the art of open-source collaboration, how to communicate effectively with maintainers, respond to feedback, and patiently work to get contributions merged.

This experience has solidified my passion for working on developer productivity tools. My plan is to stay active in the Gradle community, continue supporting my open PRs, and find new plugins to improve.

## **Demos**

* **Midterm demo:** This video demonstrates the progress made during the first half of the project, showcasing the initial fixes and the overall approach to making community plugins compatible with Gradle's Configuration Cache.  
  * [GSoC 2025- Nouran- Improving Configuration Cache and lock contention in key Gradle plugins](https://youtu.be/nhuRXXAnick?si=pt-CsoIE7ZJR1GmN)  
* **Final evaluation:** This video covers the full scope of the project, including all completed deliverables and future plans.   
  * [GSoC 2025 Final Presentation](https://www.youtube.com/watch?v=_TAho7gWsgc)

## **Resources**

* **My GSoC project page:** [Improving Configuration Cache in key Gradle plugins](https://www.google.com/search?q=https://summerofcode.withgoogle.com/programs/2025/projects/your-project-link-here)  
* **My technical blog post:** [Supporting Configuration Cache \- my learnings from the Nebula Lint Plugin](https://dev.to/gradle-community/unlocking-configuration-cache-with-gsoc-contributor-374l)  
* **Gradle Cookbook guide:** [Example \- Configuration Cache compatibility for the Liquibase plugin](https://cookbook.gradle.org/plugin-development/configuration-cache/example-config-cache-liquibase-plugin/?_gl=1*j978j1*_gcl_au*MTM2OTczMDc1MC4xNzYwNDU1NzUw*_ga*MzAxNTA3OS4xNzYwNDU1NzUy*_ga_7W7NC6YNPT*czE3NjA0NTU3NTEkbzEkZzAkdDE3NjA0NTU3NTkkajUyJGwwJGgw)  
* **Community tracking issue:** [List of Community Plugins with Configuration Cache Issues](https://github.com/gradle/gradle/issues/13490)

## **Find me online**

I'm always happy to connect and talk about build systems, open source, or anything in between\!

* **GitHub:** [@Nouran-11](https://github.com/Nouran-11)  
* **LinkedIn:** [www.linkedin.com/in/nouran-atef11](http://www.linkedin.com/in/nouran-atef11)
