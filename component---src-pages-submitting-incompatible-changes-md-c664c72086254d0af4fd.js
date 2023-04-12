"use strict";(self.webpackChunkkotlinfoundation_github_io=self.webpackChunkkotlinfoundation_github_io||[]).push([[613],{9924:function(e,n,t){t.r(n);var l=t(1151),a=t(7294),i=t(5289);function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",strong:"strong",h3:"h3",ul:"ul",li:"li"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,null,"Guide to submitting incompatible changes"),"\n",a.createElement(n.p,null,"A proposal is usually written by a developer responsible for the change or the relevant subsystems. It has to be described in the ",a.createElement(n.a,{href:"https://youtrack.jetbrains.com/issues/KT?q=%23for-language-committee%20%23Unresolved%20tag:%20-language-committee-approved"},"issue tracker"),' and marked with the "for-language-committee" tag. To provide all the necessary details, issue in the tracker should follow the template below.'),"\n",a.createElement(n.h2,null,"Issue template"),"\n",a.createElement(n.p,null,"The issue should follow this template:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-text"},"# Classification\n\nType of change: <see guide below>\nMotivation types: <see guide below>\nImpact types: <see guide below>\nDetection and Migration modes: <see guide below>\n\n# Background\n> Optional section. Describe the background of the issue and possibly some motivation\n# Existing behavior\n> 1. (Minimal) code example\n> 2. What's wrong with it\n> 3. Detailed explanation of why and how this happens\n> 4. Any known reasoning behind such behavior\n> 5. Affected versions: when did the problem appear first? \n\n# Proposed changes\n> 1. Proposed changes\n> 2. How it fixes the issue?\n\n# Impact\n> Examples of negative effects: changes of behavior, previously compiled code forbidden, etc.\n> If possible: \n> * number of impacted users\n> * how common this pattern is\n> * if we believe it's a rare case, why\n> * is automated migration possible\n\n# Migration plan\n> Provide a detailed step-by-step migration plan\n> Can the proposed changes be implemented immediately in the progressive mode?\n")),"\n",a.createElement(n.h2,null,"Classification"),"\n",a.createElement(n.p,null,"The ",a.createElement(n.strong,null,"Classification")," section needs to classify the change, without describing its essence.\nThe classification is used by the Committee to quickly assess the severity of the issue. Here are the common categories to be used."),"\n",a.createElement(n.p,null,"This section can be used as a checklist of things that need to be evaluated/thought of."),"\n",a.createElement(n.h3,null,"Type of change"),"\n",a.createElement(n.p,null,"Specify one or more of the following:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"New errors are introduced"),"\n",a.createElement(n.li,null,"Some valid language constructs change their meaning"),"\n",a.createElement(n.li,null,"Change in the standard library","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"API removal","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Affecting ABI"),"\n",a.createElement(n.li,null,"Not affecting ABI"),"\n"),"\n"),"\n",a.createElement(n.li,null,"API moved to different artifact"),"\n",a.createElement(n.li,null,"API type signature change","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Affecting ABI"),"\n",a.createElement(n.li,null,"Not affecting ABI"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Contract refinement"),"\n",a.createElement(n.li,null,"Other contract changes"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Change in compilation strategy","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Change in ABI"),"\n",a.createElement(n.li,null,"Change in the behavior of generated code"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Change in interoperability layer(s)"),"\n"),"\n",a.createElement(n.h3,null,"Motivation types"),"\n",a.createElement(n.p,null,"Specify one or more of the following:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"User code fails with exception(s)"),"\n",a.createElement(n.li,null,"Compiler/Tooling fails with exception(s)"),"\n",a.createElement(n.li,null,"The implementation does not abide by a published spec or documentation"),"\n",a.createElement(n.li,null,"Type safety guarantees are not met (including fail-fast behavior for non-null types)"),"\n",a.createElement(n.li,null,"Separate/incremental compilation guarantees are not met"),"\n",a.createElement(n.li,null,"API stability guarantees are not met"),"\n",a.createElement(n.li,null,"ABI stability guarantees are not met"),"\n",a.createElement(n.li,null,"Implementation changes are required for implementation design/architectural reasons"),"\n",a.createElement(n.li,null,"Problematic/meaningless usage patterns need to be discouraged/blocked (e.g. counterintuitive behaviors)","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Code is error-prone"),"\n",a.createElement(n.li,null,"Code can't be compiled correctly"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Some prospective language changes are blocked"),"\n",a.createElement(n.li,null,"Inconsistency in the design (things are done differently in different contexts)"),"\n",a.createElement(n.li,null,"Redundant/outdated mechanism"),"\n"),"\n",a.createElement(n.h3,null,"Impact types"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Compilation"),". Some code that used to compile won't compile any more","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Such code always caused the compiler to fail with exception"),"\n",a.createElement(n.li,null,"Such code always threw an exception immediately upon execution or could not link"),"\n",a.createElement(n.li,null,"Such code inevitably caused exceptions to be thrown somewhere down the line after it was executed"),"\n",a.createElement(n.li,null,"There were cases when such code worked with no exceptions","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"There was a warning reported on all such code"),"\n",a.createElement(n.li,null,"Some such code could compile without any warnings"),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Binaries"),". Some binary metadata will change after recompilation","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Internal (and maybe private) signatures","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"None of them could have been called from other languages"),"\n",a.createElement(n.li,null,"Some of them may have been callable from other languages (Java/JS/C/Swift/...)"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Public and/or protected signatures may change"),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Behavior")," changes","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Exceptions","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Some exceptions may change their type or place, but all code that ran without exceptions keeps doing so","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Some exceptions can be thrown earlier than before"),"\n",a.createElement(n.li,null,"Some exceptions can be thrown later than before"),"\n",a.createElement(n.li,null,"Some exceptions change their type, but not the point of execution at which they are thrown","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The new type is a subtype of the old one"),"\n",a.createElement(n.li,null,"The new type is not a subtype of the old one"),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Some code that compiled and ran without exceptions will throw exceptions in the new version"),"\n"),"\n"),"\n",a.createElement(n.li,null,"The behavior in question belongs under a previously released specification, contract or official documentation","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"By the contract, the old behavior is incorrect (thus a fix is needed)"),"\n",a.createElement(n.li,null,"The contract doesn't specify this behavior","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The new behavior needs to be specified"),"\n",a.createElement(n.li,null,"The new behavior will remain unspecified"),"\n"),"\n"),"\n",a.createElement(n.li,null,"The new behavior contradicts the contract (i.e. the contract has to be changed)"),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Performance and code size"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,'Some code may run slower (including "small" changes like extra checks and indirections)'),"\n",a.createElement(n.li,null,"Some code may make more allocations or otherwise consume more memory"),"\n",a.createElement(n.li,null,"Code size may increase","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The increase in code size is constant regardless of the source"),"\n",a.createElement(n.li,null,"The increase in code size is proportional to some parameters of the source"),"\n"),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(n.h3,null,"Detection and migration modes"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"All code locations affected by this change can be accurately detected statically"),"\n",a.createElement(n.li,null,"Some, but not all code locations affected by this change can be accurately detected statically"),"\n",a.createElement(n.li,null,"No code locations affected by this change can be accurately detected statically"),"\n",a.createElement(n.li,null,"Migration can be fully automated"),"\n",a.createElement(n.li,null,"Some automated migration is possible"),"\n",a.createElement(n.li,null,"Migration can't be automated"),"\n"))}n.default=function(e){return void 0===e&&(e={}),a.createElement(i.A,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-submitting-incompatible-changes-md-c664c72086254d0af4fd.js.map