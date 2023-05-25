"use strict";(self.webpackChunkkotlinfoundation_github_io=self.webpackChunkkotlinfoundation_github_io||[]).push([[116],{71542:function(e,n,t){t.r(n),t.d(n,{Layout:function(){return E},LayoutSize:function(){return b},MarkdownLayout:function(){return v},PageMarkdownLayout:function(){return w},default:function(){return k}});var a=t(67294),l=t(11151);function i(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",strong:"strong"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"language-committee-guidelines"},"Language Committee guidelines"),"\n",a.createElement(n.p,null,"The Kotlin Language Committee has to approve every ",a.createElement(n.a,{href:"https://kotlinlang.org/docs/kotlin-evolution.html#incompatible-changes"},"incompatible change")," before it lands in a stable version. The committee determines whether the change is appropriate and motivated enough to be introduced and what deprecation procedures have to be carried out to ensure comfortable migration for end users."),"\n",a.createElement(n.p,null,"These guidelines describe the process the Committee follows and the criteria used for decision making. We realize that these criteria can not be fully formalized and treat them as general guidelines, not a mechanical set of rules."),"\n",a.createElement(n.h2,{id:"review-process"},"Review process"),"\n",a.createElement(n.p,null,"Incompatible changes are submitted to the Language Committee by the ",a.createElement(n.a,{href:"/structure/"},"Lead Language Designer"),". The Committee evaluates the implications of such changes, considering the following:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Substance: what is going to be changed"),"\n",a.createElement(n.li,null,"Impact: who will be affected by the change and in what ways"),"\n",a.createElement(n.li,null,"Motivation: why the change is needed"),"\n",a.createElement(n.li,null,"Detectability: can problematic code be automatically detected"),"\n",a.createElement(n.li,null,"Migration: to what extent can the code be migrated automatically"),"\n"),"\n",a.createElement(n.h3,{id:"estimating-impact"},"Estimating impact"),"\n",a.createElement(n.p,null,"When in doubt, we inspect large bodies of code available to us and test the implementations in EAP builds to collect information about the expected impact of a change."),"\n",a.createElement(n.h3,{id:"proposals"},"Proposals"),"\n",a.createElement(n.p,null,"A proposal is usually written by a developer responsible for the change or the relevant subsystems. See the ",a.createElement(n.a,{href:"/submitting-incompatible-changes/"},"Guide to submitting incompatible changes"),"."),"\n",a.createElement(n.p,null,"When an issue has all the necessary details, it can be scheduled for review by the Language Committee. Approved proposals are to be implemented by the development team and shipped in the appropriate stable release."),"\n",a.createElement(n.h2,{id:"scope"},"Scope"),"\n",a.createElement(n.p,null,"Only features and components published as ",a.createElement(n.a,{href:"https://kotlinlang.org/docs/components-stability.html#stability-levels-explained"},"Stable")," are in the scope of Language Committee. Besides, the Language Committee's scope is limited to the following:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Language: syntax, static checks, execution semantics of language constructs"),"\n",a.createElement(n.li,null,"The interop subsystem of the language: how foreign declarations are seen from Kotlin, and how Kotlin declarations are seen from other languages"),"\n",a.createElement(n.li,null,"Compatibility of binary artifacts produced by kotlinc with one another and with other binaries (e.g. Java binaries)"),"\n",a.createElement(n.li,null,"Standard library: API and contracts of the declarations in kotlin-stdlib (and its extensions such as for ",a.createElement(n.code,null,"kotlin-stdlib-jdk7"),")"),"\n",a.createElement(n.li,null,"CLI parameters of the compiler except for the ",a.createElement(n.code,null,"-X/-XX")," keys"),"\n",a.createElement(n.li,null,"KDoc syntax"),"\n"),"\n",a.createElement(n.p,null,"For example, the following matters are out of scope for the Language Committee:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Pre-stable language features & APIs"),"\n",a.createElement(n.li,null,"Build tools and plugins for them (e.g. Gradle support)"),"\n",a.createElement(n.li,null,"IDE and static analysis tools (other than the compiler)"),"\n",a.createElement(n.li,null,"Java2Kotlin converter and other source code manipulation tools"),"\n",a.createElement(n.li,null,"APIs and contracts of libraries other than the standard library"),"\n",a.createElement(n.li,null,"API of the compiler"),"\n",a.createElement(n.li,null,"Scripting support and Compiler REPL"),"\n",a.createElement(n.li,null,"Internal packages of the standard library"),"\n"),"\n",a.createElement(n.p,null,"Also, see ",a.createElement(n.a,{href:"#appendix-a-examples-of-non-issues"},"Appendix A")," for examples of changes that are not considered to be compatibility issues."),"\n",a.createElement(n.h2,{id:"migration-aids-and-deprecation"},"Migration aids and deprecation"),"\n",a.createElement(n.p,null,"Normally, incompatible changes to stable features only land in feature releases. We announce the changes in a previous release (it may be an incremental update to the previous feature release, but should allow enough time for users to migrate their code)."),"\n",a.createElement(n.p,null,"The announcement is best done through compiler warnings, or in some cases IDE inspections and/or other tools. If places in the code that should be changed in advance to prevent compatibility issues in the future can be detected automatically, we announce the change and publish detection tools."),"\n",a.createElement(n.p,null,"If the necessary changes to user code can be automated, we publish a migration tool along with the announcement. Preferably, the IDE should suggest running the migration when it encounters deprecated constructs in the code."),"\n",a.createElement(n.p,null,"When automatic detection and/or migration is not practically possible, we publish instructions on how user code should be adjusted."),"\n",a.createElement(n.h3,{id:"insignificant-changes"},"Insignificant changes"),"\n",a.createElement(n.p,null,"Some types of changes can be made without a deprecation cycle:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Small fixes that virtually no users will encounter can normally be made right away (but still require committee review)"),"\n",a.createElement(n.li,null,"Bugs causing compiler errors in good code can be fixed right away"),"\n",a.createElement(n.li,null,"Bugs causing bad code to compile, but always fail at runtime can be fixed right away"),"\n"),"\n",a.createElement(n.h3,{id:"incompatible-changes-to-the-language"},"Incompatible changes to the language"),"\n",a.createElement(n.p,null,"The typical deprecation cycle for an incompatible language change:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The change planned for version B is announced in release notes to a previous version A","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The compiler reports deprecation warnings (messages provide some guidance to possible replacements)"),"\n",a.createElement(n.li,null,"Automated migration tools are available in the IDE"),"\n",a.createElement(n.li,null,"For eligible changes, the ",a.createElement(n.code,null,"-progressive")," flag enables the change before version B (e.g. in version A or an incremental update to it)"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Version B ships with the change enabled (e.g. warnings turn into errors)","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Migrations aids are kept available in the IDE"),"\n",a.createElement(n.li,null,"Backward compatibility flags in the compiler (",a.createElement(n.code,null,"-language-version")," and ",a.createElement(n.code,null,"-api-version"),") support the behavior of version A"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Future versions can remove migration aids and compatibility flags, but a version capable of automated migration should be kept available for a reasonable amount of time"),"\n"),"\n",a.createElement(n.h3,{id:"incompatible-changes-to-the-libraries"},"Incompatible changes to the libraries"),"\n",a.createElement(n.p,null,"The typical deprecation cycle for libraries:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The change planned for version B is announced in release notes to a previous version A","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Relevant declarations are marked as ",a.createElement(n.code,null,"@Deprecated(level = WARNING)")),"\n",a.createElement(n.li,null,"Migration is automated through ReplaceWith or sometimes custom tooling"),"\n",a.createElement(n.li,null,"In some cases an optional support dependency that exposes the same API is published"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Version B marks the declarations as ",a.createElement(n.code,null,"@Deprecated(level = ERROR)")),"\n",a.createElement(n.li,null,"Version C can mark the declarations as ",a.createElement(n.code,null,"@Deprecated(level = HIDDEN)"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Note: for inline functions, complete removal is sometimes possible at this point"),"\n"),"\n"),"\n"),"\n",a.createElement(n.h2,{id:"changes-to-these-guidelines"},"Changes to these guidelines"),"\n",a.createElement(n.p,null,"Changes to these guidelines need to be approved by the Kotlin Language Committee."),"\n",a.createElement(n.p,null,"Any proposed change needs to be published in advance providing a reasonable time to allow for comments on the change by the Kotlin Community."),"\n",a.createElement(n.h2,{id:"appendix-a-examples-of-non-issues"},"Appendix A. Examples of non-issues"),"\n",a.createElement(n.p,null,"The following cases are not considered to be compatibility issues and thus are out of scope for the Language Committee."),"\n",a.createElement(n.h3,{id:"changes-related-to-binaries-and-translation"},"Changes related to binaries and translation"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"A binary compiled against kotlin-stdlib fails to link or run because kotlin-stdlib is absent or outdated (older version than used during compilation)."),"\n",a.createElement(n.li,null,"Adding generic parameters to existing declarations does not change the ABI on the JVM (due to erasure)."),"\n",a.createElement(n.li,null,"Changes to signatures of functions marked ",a.createElement(n.code,null,"@InlineOnly")," are not changing the ABI on the JVM."),"\n",a.createElement(n.li,null,"Adding supertypes to existing library classes/interfaces."),"\n"),"\n",a.createElement(n.h3,{id:"source-language-changes"},"Source language changes"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Code compilable with a newer version fails to compile with an older version (e.g. due to usages of new language features)."),"\n",a.createElement(n.li,null,"The code breaks only if the user alters the build configuration or compiler settings explicitly (i.e. in addition to advancing the compiler version)."),"\n"),"\n",a.createElement(n.h3,{id:"library-changes"},"Library changes"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Relaxing a contract on existing APIs."),"\n",a.createElement(n.li,null,"Clarification for unspecified behaviors."),"\n",a.createElement(n.li,null,"Changes in ",a.createElement(n.code,null,"hashCode()")," are not breaking changes."),"\n",a.createElement(n.li,null,"Changes in ",a.createElement(n.code,null,"toString()")," on other than ",a.createElement(n.code,null,"Boolean"),", ",a.createElement(n.code,null,"Numeric"),", and ",a.createElement(n.code,null,"String")," types are not breaking changes."),"\n",a.createElement(n.li,null,"Issues connected with loading of two different versions of the same library at runtime or link time."),"\n"),"\n",a.createElement(n.h3,{id:"changes-affecting-performance"},"Changes affecting performance"),"\n",a.createElement(n.p,null,"We recognize that runtime performance and bytecode size are important metrics, and will make reasonable effort to keep them in a good shape, but we don't consider every slowdown (e.g. in edge cases or in very cold code) and every extra byte in the classfile a breaking change."),"\n",a.createElement(n.h2,{id:"appendix-b-assumptions-for-pragmatic-language-evolution"},"Appendix B. Assumptions for pragmatic language evolution"),"\n",a.createElement(n.p,null,"We make decisions on language changes under the assumption that most user code is designed with the following considerations in mind. We do not optimize for smooth migration that disregards these considerations."),"\n",a.createElement(n.h3,{id:"availability-of-the-standard-library"},"Availability of the standard library"),"\n",a.createElement(n.p,null,"All Kotlin code should be linked and run against the Standard Library of at least the same version as specified by the ",a.createElement(n.code,null,"-api-version")," upon compilation."),"\n",a.createElement(n.h3,{id:"type-inference-and-overload-resolution-algorithms"},"Type inference and overload resolution algorithms"),"\n",a.createElement(n.p,null,"Improvements in type inference algorithms may result in more precise static types known for some expressions, this may cause changes in overload resolution and even in signatures of declarations that don't specify return types explicitly."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Overloads of the same function should be intended to do the same thing"),". Language improvements may cause a different overload to be selected in a new language version."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Declarations sensitive to API/ABI stability (e.g. public APIs) should specify return types explicitly"),". Language improvements may cause a different type to be inferred for a given body expression. Also, some innocuous-looking changes in the source code, done by the user, may cause similar effects."),"\n",a.createElement(n.h3,{id:"non-public-api"},"Non-public API"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Internal declarations have no separate compilation guarantees"),". While sometimes accessible from other languages (e.g. Java), declarations marked ",a.createElement(n.strong,null,"internal")," in Kotlin should not be called from outside the module they are declared in."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Private and synthetic declarations should not be relied upon"),". On some platforms, reflection has access to declarations marked private and synthetic. We do not provide any compatibility guarantees for code that relies on such access."),"\n",a.createElement(n.h3,{id:"impedance-mismatches-across-language-boundaries"},"Impedance mismatches across language boundaries"),"\n",a.createElement(n.p,null,"A Kotlin API exposed to another language may yield values that work in that language differently from Kotlin. For example, Kotlin's unsigned integers will look signed for Java clients, and the programmer that works with the same API in the Java code will be surprised by getting different result. While an undesirable situation, this is sometimes inevitable, and should not be considered a breaking change (it does not fall under the intuitive definition of one anyway)."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(i,e)):i(e)},r=t(94184),s=t.n(r),c=t(97812),u=(t(43999),t(49293)),m=t(31866),d=t(90025),h=t(3962),g=t(21772),p=t(33520),f=t(85893);let b=function(e){return e.Regular="regular",e.Narrow="narrow",e.Wide="wide",e}({});function E(e){let{children:n,location:t,title:a,layout:l,socialImage:i=null,contactUs:o,greyLayout:r}=e;const d=l===b.Wide?n:(0,f.jsx)(y,{className:b.Narrow===l&&p.Ln,children:n});return(0,f.jsxs)(c.L.Provider,{value:t,children:[(0,f.jsx)(u.H,{title:a,image:i}),(0,f.jsx)(m.h,{}),(0,f.jsxs)("div",{className:s()(p.bK,{[p.G3]:Boolean(r)}),children:[d,o&&(0,f.jsx)(h.U,{}),(0,f.jsx)(g.$,{})]})]})}function y(e){let{className:n,children:t}=e;return(0,f.jsx)("div",{className:s()(n,"ktl-layout ktl-layout--center ktl-layout--spacing"),children:t})}function v(e){let{children:n,...t}=e;return(0,f.jsx)(E,{...t,children:(0,f.jsx)(d.U,{children:n})})}function w(e){var n,t,a,l,i,o,r;let{pageContext:s,...c}=e;const u=null==s||null===(n=s.frontmatter)||void 0===n?void 0:n.title,m=null!==(t=null==s||null===(a=s.frontmatter)||void 0===a?void 0:a.layout)&&void 0!==t?t:b.Narrow,d=null!==(l=null==s||null===(i=s.frontmatter)||void 0===i?void 0:i.contactUs)&&void 0!==l&&l,h=null!==(o=null==s||null===(r=s.frontmatter)||void 0===r?void 0:r.greyLayout)&&void 0!==o&&o;return(0,f.jsx)(v,{...c,title:u,layout:m,contactUs:d,greyLayout:h})}function k(e){return a.createElement(w,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-components-layout-index-tsx-content-file-path-home-runner-work-kotlinfoundation-github-io-kotlinfoundation-github-io-src-pages-language-committee-guidelines-mdx-1ea36e7d9aa6cf037dc1.js.map