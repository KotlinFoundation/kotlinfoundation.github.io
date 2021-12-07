import { Layout } from "../../components/Layout";
import { FAQ } from "../../components/FAQ";
import { Link } from "../../components/Link";

export default function FAQPage() {
    return (
        <Layout>
            <h1 className={'ktl-h1 ktl-offset-bottom-l'}>FAQ</h1>
            <FAQ className={'ktl-offset-bottom-xxl'}>
                <FAQ.Question>How can I contribute or provide feedback to Kotlin?</FAQ.Question>
                <FAQ.Answer>
                    Kotlin is an open source project, and there are many ways you can contribute:

                    <ul className="ktl-offset-top-s">
                        <li className="ktl-offset-bottom-s">Language features. Please use the{' '}
                            <Link href="https://github.com/Kotlin/KEEP">
                                Kotlin{'\u00A0'}Evolution and{'\u00A0'}Enhancement{'\u00A0'}process{'\u00A0'}(KEEP)
                            </Link>{' '}
                            if you'd like to make a proposal for the Kotlin programming language.
                        </li>
                        <li className="ktl-offset-bottom-s">Code contributions. Please refer to Contributions section at the{' '}
                            <Link href="https://github.com/JetBrains/kotlin/blob/master/docs/contributing.md#contributing">Kotlin{'\u00A0'}GitHub repository</Link>.
                        </li>
                        <li className="ktl-offset-bottom-s">Filing issues or suggestions. Please use the{' '}
                            <Link href="https://youtrack.jetbrains.com/issues/KT">Kotlin{'\u00A0'}Issue{'\u00A0'}Tracker</Link> to file issues or suggestions.
                        </li>
                    </ul>

                    Other types of contributions are described in the{' '}
                    <Link href="https://kotlinlang.org/docs/contribute.html">Kotlin{'\u00A0'}documentation</Link>.
                </FAQ.Answer>

                <FAQ.Question>How can I get more involved with the Kotlin community?</FAQ.Question>
                <FAQ.Answer>There are many online and in-person Kotlin communities. Please visit the{' '}
                    <Link href="https://kotlinlang.org/community/">Kotlin{'\u00A0'}community{'\u00A0'}page</Link> to
                    see a list of user groups, Kotlin nights and other ways that you can get involved!
                </FAQ.Answer>

                <FAQ.Question>How is the Kotlin Foundation governed?</FAQ.Question>
                <FAQ.Answer>The Foundation is governed by the Board of Directors, who then appoint a president, Lead Language
                    Designer and members of the Language Committee. JetBrains and Google each delegate two directors to
                    the board. The independent member is elected by the rest of the board.
                </FAQ.Answer>

                <FAQ.Question>Do JetBrains and Google contribute financially to the foundation?</FAQ.Question>
                <FAQ.Answer>Yes, to cover the operational and administrative expenses.</FAQ.Answer>

                <FAQ.Question>Does the foundation generate any revenue?</FAQ.Question>
                <FAQ.Answer>No, Kotlin Foundation is a non-profit entity whose operational costs are covered by JetBrains and
                    Google.
                </FAQ.Answer>

                <FAQ.Question>Can I license the Kotlin trademark?</FAQ.Question>
                <FAQ.Answer>Yes. You are free to use the Kotlin trademark in accordance with our{' '}
                    <Link href="https://kotlinlang.org/docs/guidelines.html">Kotlin brand usage guidelines</Link>.
                    Any use of the Trademark other than those described in the Guidelines must be approved in advance.
                    If you need a specific license, please{' '}
                    <Link href="https://surveys.jetbrains.com/s3/request-for-permission-of-kotlin-trademark-usage">refer to the request</Link> form
                </FAQ.Answer>

                <FAQ.Question>How can a company or an individual join the foundation?</FAQ.Question>
                <FAQ.Answer>We are discussing possible ways for companies and individuals to participate, and will provide
                    updates here in the future.
                </FAQ.Answer>

                <FAQ.Question>What resources should I follow to stay up-to-date on Kotlin?</FAQ.Question>
                <FAQ.Answer>The best way to stay up-to-date on Kotlin is to visit the{' '}
                    <Link href="https://kotlinlang.org">official Kotlin{'\u00A0'}website</Link>, follow the
                    official <Link href="https://blog.jetbrains.com/kotlin/">Kotlin{'\u00A0'}blog</Link> and subscribe to{' '}
                    the <Link href="https://www.youtube.com/c/kotlin">official YouTube{'\u00A0'}channel</Link>.
                </FAQ.Answer>
            </FAQ>
        </Layout>
    );
}
