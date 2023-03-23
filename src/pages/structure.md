---
title: "Structure"
layout: "regular"
---

export {Layout as default} from '../components/Layout';

# Structure

The Kotlin Foundation is a nonprofit nonstock corporation registered in the state of Delaware, USA.

<Structure>
<Department
    hero
    name="Board of Directors"
    members={[
        { name: 'Maxim Shafirov', company: 'JetBrains' },
        { name: 'Roman Elizarov', company: 'JetBrains' },
        { name: 'Grace Kloba', company: 'Google' },
        { name: 'Jeffrey van Gogh', company: 'Google' },
        { name: 'Werner Dietl', company: 'Independent Director' }
    ]}
>

The Foundation is governed by the Board of Directors that makes all decisions by voting.
The Board appoints the Lead Language Designer and the members of the Language Committee.

</Department>

<Department
    name={'President'}
    members={{ name: 'Maxim Shafirov', company: 'JetBrains' }}
>

Elected by the Board of Directors as well. The President acts as the chief officer of the Foundation
and supervises its affairs and operations.

</Department>

<Department
    name={'Secretary'}
    members={{ name: 'Jeffrey van Gogh', company: 'Google' }}
>

The Secretary keeps record of all meetings of the Board and its committees, and keeps track of membership
and notices to the members, directors and third parties.

</Department>

<Department
    name={'Lead Language Designer'}
    members={{ name: 'Roman Elizarov', company: 'JetBrains' }}
>

This person is in charge of all decisions regarding the development of the project and evolution of the language.
The Foundation appoints the Lead Language Designer, but does not directly make decisions about the course of the project.

</Department>

<Department
    name={'Language Committee'}
    members={[
        { name: 'Roman Elizarov', company: 'JetBrains' },
        { name: 'Jeffrey van Gogh', company: 'Google' },
        { name: 'Werner Dietl', company: 'Independent Director' }
    ]}
>

A special Language Committee appointed by the Foundation reviews the changes proposed by the Lead Language Designer
and has the power to reject incompatible changes or require certain deprecation procedures to be carried out.

[Language Committee](/language-committee-guidelines/)<br/>
[Submitting Incompatible changes](/submitting-incompatible-changes/)

</Department>

<Department
    name={'Trademark Committee'}
    members={[
        { name: 'Hadi Hariri', company: 'JetBrains' },
        { name: 'Jan Cichy', company: 'JetBrains' },
        { name: 'Alina Dolgikh', company: 'JetBrains' },
        { name: 'Hilary Richardson', company: 'Google' },
        { name: 'Isabella Fiterman', company: 'Google' },
    ]}
>

The Trademark Committee is responsible for managing the proper use of the Kotlin trademark,
which includes its general purpose use as outlined by the Trademark Usage Guidelines,
as well as handling specific use-cases that may fall out of the norm.
The Trademark Committee reports directly to the Foundation’s board of directors, albeit mostly has autonomy on matters regarding trademarks.

[Kotlin Brand Usage guidelines](/guidelines/)

</Department>

<Department
    name={'Operating Committee'}
    members={[
        { name: 'Jeffrey van Gogh', company: 'Google' },
        { name: 'Hadi Hariri', company: 'JetBrains' },
        { name: 'John Pampuch', company: 'Google' },
        { name: 'Egor Tolstoy', company: 'JetBrains' },
    ]}
>

The Operating Committee goal is to ensure the functioning of the Kotlin Foundation by executing different operational tasks.
The Operating Committee reports directly to the Foundation’s board of directors.

</Department>
</Structure>