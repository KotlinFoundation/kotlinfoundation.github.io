### **Building a Better Developer Experience: A Collaboration Between Gradle, Google, and JetBrains**

Developers are at the heart of everything we do. You are the ones who create all of those new things to make the world better. To do that effectively, you need tools to rely on that are powerful yet easy to use.

That’s why Kotlin was created. But the language is only a part of the story – you need an entire ecosystem to make things actually work together. That includes various developer tools and, among others, a build system, and an IDE.

For Kotlin projects, the Gradle Build Tool, also known as Gradle, is often the build system of choice. Gradle, as a powerful and flexible build system, has become a key part of many development processes. Nowadays it is at the core of many server-side, frontend, and mobile projects. It is also the default build system for Android projects.

However, great flexibility comes with challenges. Complexity, a steep learning curve, and friction between the IDE, language, and build system can make everyday development harder than it should be. These are not just technical hurdles – they affect your productivity, creativity, and satisfaction. At Google, Gradle, and JetBrains, we recognize this and want to deliver the best possible developer experience. Hence, even before the Kotlin Foundation was created, we worked closely on key ecosystem components and their integrations.

Several parties are involved, each playing a unique role in the developer ecosystem:

* **JetBrains** creates the IntelliJ Platform, the foundation for many IDEs, including Google's Android Studio. JetBrains also develops Kotlin, which is the language of choice for Android and also targets multiple other platforms.
* **Google** extends the IntelliJ Platform into Android Studio and develops multiple other tools and technologies, tailoring them to the needs of mobile and cloud developers.
* **Gradle** powers the build processes that bring your code to life, enabling smooth workflows for testing, packaging, and deployment.

Our tools are deeply interconnected, and the quality of the developer experience depends on how well they work together. By aligning our efforts, we can solve shared problems more effectively and deliver a seamless experience across the entire development stack.

That’s why JetBrains, Gradle, and Google have joined forces to address these challenges head-on: to simplify configuration, minimize friction between the parts involved, and make development more enjoyable. By working together, we’re not just aiming for incremental fixes – we’re rethinking how our tools interact to create a smoother, faster, and more intuitive experience for developers everywhere.

Joining forces means bringing together feedback and knowledge about user needs. While our audiences intersect, each company still gets unique feedback, so combining our perspectives allows us to see the bigger picture in the industry. Our expertise in specific areas allows us to come up with different ideas and make sure our efforts are aligned and address user needs.

### **Collaboration in action**

This partnership isn’t just theoretical – it’s a hands-on collaboration.

* We established regular syncs to discuss technical challenges, from build performance to IDE integration and simple bugs. We share knowledge about developer pain points, prioritize solutions, and align on the best approaches.
* For the last three years, we’ve brought our teams together for intensive, in-person annual summits. These gatherings are opportunities to brainstorm, prototype solutions, reflect on progress, and plan the future of the involved ecosystems, such as Android, Kotlin, Gradle, and software development in general.
* Beyond technical fixes, we’re aligning on ways to improve the user experience across all of our tools, making sure developers spend less time struggling with configuration and more time building.

This collaboration is already delivering real results, including:

* [Kotlin DSL as the default for new builds in the Gradle Build Tool](https://blog.gradle.org/kotlin-dsl-is-now-the-default-for-new-gradle-builds) since 2023\.
* Better IDE Integration – Gradle sync in IntelliJ IDEA and Android Studio has become faster and more reliable, with clearer feedback when something goes wrong. With the upcoming configuration cache and Isolated Projects, we anticipate further speed increases for end users.
* [Declarative Gradle initiative](https://declarative.gradle.org/) – A shift towards simpler, more readable, developer-first build configurations that reduce complexity and improve maintainability.
* [Gradle Daemon toolchain support](https://docs.gradle.org/current/userguide/gradle_daemon.html#sec:daemon_jvm_criteria) – A common way to define the JVM for the Gradle Daemon and make sure it always starts and does so with the same JVM.
* [Project isolation initiative](https://docs.gradle.org/current/userguide/isolated_projects.html), which is bringing significant performance gains for large projects, thanks to Gradle’s improvements in isolating subprojects and optimizing caching.
* A lot of other small Improvements, from better error messaging to faster default configurations.
* Various ecosystem and educational programs to gather more feedback and share best practices, driven or developed by the [Kotlin Foundation committees](https://kotlinfoundation.org/structure/).

There are other things in the works which we expect to bring a lot of value for developers. Stay tuned for more announcements\!

### **Areas of focus**

While we’re proud of what we’ve achieved, there are a lot of things to work on. The priorities for future improvements include:

1. **The in-IDE experience** – Making Gradle and Kotlin integrations seamless, responsive, and intuitive within IDEs.
2. **Performance** – Reducing sync and build times and ensuring smooth scalability for large, complex projects.
3. **Clarity** – Simplifying configurations, improving error messaging, providing help, and making tools easier to use.

### **We’re listening: Your feedback matters**

Everything we do is based on user the needs and pain points we recognize. The source of this knowledge is your feedback, so please keep it coming\! We are listening\!

Whether through surveys, issue trackers, or community discussions, we want to hear from you. What’s working? What isn’t? Where can the experience be improved?

We encourage you to keep sharing your thoughts, ideas, and experiences with us whenever you want. You are welcome to join the relevant channels (e.g. \#gradle) inside [Kotlin Slack](https://surveys.jetbrains.com/s3/kotlin-slack-sign-up).

**Let’s build something better together\!**