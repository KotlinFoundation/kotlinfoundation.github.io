---
title: "Introducing the KMP Contest Starter Kit"
date: 2026-08-19 17:00
spoilerSize: 240
---

We are thrilled to announce the KMP Contest Starter Kit (nicknamed “**Koko**”), a new open-source, AI-ready framework designed to help developers build and publish commercial-ready Android and iOS applications using Kotlin Multiplatform (KMP).

Created in support of the KMP contest and kickstarted by the [KMP Contest Starter Kit grant](/news/kmp-contest-starter-kit-2026-grant-recipient/)—with [Mirzamehdi (“Mirza”) Karimov](https://www.linkedin.com/in/mirzemehdi/) serving as the grant recipient and primary contributor—Koko dramatically lowers the barrier to entry for shipping commercial-ready apps that are ready for Google Play and the App Store. Learn more about what motivated Mirza to build Koko at his blog post “[Meet Koko, the KMP Contest Starter Kit for Your First Mobile App](https://proandroiddev.com/meet-koko-the-kmp-contest-starter-kit-for-your-first-mobile-app-ffc256f5192f).”

Whether you are a seasoned multiplatform developer or entering the KMP ecosystem for the first time, Koko provides the architecture, integrations, and embedded AI skills you need to go from idea to Google Play and the App Store faster than ever.

## Built for AI

What makes Koko unique is its native support for AI coding agents. The project is designed out-of-the-box to work seamlessly with tools like Android Studio and its agent, Gemini CLI, Cursor, Claude Code, and Codex.

The repository includes an `AGENTS.md` primary context file and an extensive `skills/` directory using the open `SKILL.md` format. These documents lay out a phase-by-phase developer journey that guides either you or your AI agent through the entire lifecycle of the app: from the `getting-started` skill that gets the app working on your devices to `integrations` that connects to remote services like Firebase and Replicate, to `publishing` and `monetization` skills that get you ready on Google Play and the App Store. With access to these skills, AI agents can help developers quickly get through the operational requirements of building, publishing, and commercializing the app so that the developer can spend more time making the app valuable to their future users.

## A Commercial-Ready Tech Stack

Koko doesn't just provide UI boilerplate; it solves the hard problems of commercial app development. The framework is built on a modern, robust stack:

* **Language & UI:** Kotlin 2.3.20 and Compose Multiplatform 1.10.0 for sharing UI and business logic across Android, iOS, Web (WASM), and JVM Desktop.
* **Architecture & DI:** Koin 4.2.0-beta2.
* **Networking & Data:** Ktor 3.3.1 for networking, Room 3.0.0-alpha01 for offline persistence across all targets, and DataStore for user preferences.
* **Monetization & Growth:** Built-in Google AdMob integration, plus switchable In-App Purchases and Subscriptions via Adapty (default) or RevenueCat.
* **Authentication & Backend:** Firebase Authentication (Google & Apple sign-in) and Firebase Cloud Functions for secure AI integrations (OpenAI, Replicate, DALL-E).

Koko also includes a pre-built design system, runtime permissions (via Calf), structured logging (Napier), and a pre-configured CI/CD pipeline using GitHub Actions and Fastlane to automate your formatting, testing, and store publishing.

## Why Include Monetization in the KMP Contest Starter Kit?

The **KMP Contest has no requirement or expectation for apps to support monetization**. Nonetheless, Koko enables monetization out of the box to support sustainable app development activities and to expose new developers to skills they may need for a successful career as a mobile developer.

1\. **Offsetting Developer Costs:** Shipping a production-grade app incurs upfront expenses—from developer platform fees and hardware to API costs for Generative AI and third-party services. Built-in monetization ensures that launching a high-quality app remains financially accessible to all creators.

2\. **Sustaining Long-Term Commitment:** Transforming an initial prototype into a polished, competitive application requires months of effort. Sustainable revenue models provide the continuous incentive needed to prevent project abandonment and ensure long-term maintenance.

3\. **Funding Targeted User Acquisition:** Reaching relevant audiences beyond immediate personal networks often demands targeted marketing and experimentation. Revenue generation gives developers the resources to test market fit and gather authentic feedback from target segments that a mobile developer could not otherwise reach.

4\. **Developing Essential Product Skills:** As AI coding tools handle more routine technical tasks, understanding unit economics, conversion funnels, and business metrics are likely to become necessary skills for modern mobile developers.

## How to Get Started

We’ve made bootstrapping your next project incredibly simple using Koko's embedded AI skills.

1. **Clone the repository**

```
git clone https://github.com/KotlinFoundation/kmp-contest-starter-kit
```

2. **Launch the Agent:** Open the project in Android Studio.
3. **Run the Skill:** Type the following command into your agent's chat panel: `Proceed with @koko-getting-started`

Your agent will walk you through setting up your foundational capabilities, configuring Firebase, and getting your app running locally.

## Join the Community

Koko is released under the MIT License and thrives on community contributions. Whether it's adding new agent skills, refining the Compose UI components, or expanding the CI/CD workflows, we welcome your pull requests\!

**Ready to build? Explore the resources below:**

* **GitHub Repository:** [KotlinFoundation/kmp-contest-starter-kit](https://github.com/KotlinFoundation/kmp-contest-starter-kit)
* **Full Documentation:** [KotlinFoundation/kmp-contest-starter-kit-documentation](https://github.com/KotlinFoundation/kmp-contest-starter-kit-documentation)

**Related Articles:**

* [Read Mirza's original post “Meet Koko, the KMP Contest Starter Kit for Your First Mobile App”](https://proandroiddev.com/meet-koko-the-kmp-contest-starter-kit-for-your-first-mobile-app-ffc256f5192f)
* [Announcing the Kotlin Multiplatform Contest](/news/kmp-contest-starter-kit-2026/)

