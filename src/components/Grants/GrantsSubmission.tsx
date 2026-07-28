import { lastDayGrants, isGrantOpen } from '../../utlis';
import { Link } from '../Link';
import { MODERN_SHORT_CODES } from '../Markdown';
import { GrantsAction, GrantsActionProps } from './GrantsAction';

type GrantsSubmissionOpenProps = Omit<GrantsActionProps, 'url'> & {
  url: string;
};

type GrantsSubmissionCloseProps = Omit<GrantsActionProps, 'url'> & {
  url?: undefined;
};

type GrantsSubmissionProps = GrantsSubmissionOpenProps | GrantsSubmissionCloseProps;

export function GrantsSubmission({ url, ...props }: GrantsSubmissionProps) {
  if (url) {
    return <GrantsSubmissionOpen url={url} {...props} />;
  }

  return <GrantsSubmissionClose {...props} />;
}

function GrantsSubmissionOpen({ url, ...props }: GrantsSubmissionOpenProps) {
  if (!isGrantOpen()) {
    return <GrantsSubmissionClose {...props} />;
  }

  return (
    <GrantsAction theme="dark" action="Application form" url={url} target={'_blank'} {...props}>
      <MODERN_SHORT_CODES.p>
        To submit your project, fill in the application form.
        <br className="hide--mm" /> Applications for the first round are accepted through {lastDayGrants()}.
      </MODERN_SHORT_CODES.p>
    </GrantsAction>
  );
}

function GrantsSubmissionClose(props: GrantsSubmissionCloseProps) {
  return (
    <GrantsAction theme="dark" action="News" url="/news/" target="_self" {...props}>
      <MODERN_SHORT_CODES.p>
        Grant submissions are now closed. The Ecosystem Committee will review all applications and we’ll share the
        results in the <Link href="/news/">News</Link> section.
      </MODERN_SHORT_CODES.p>
    </GrantsAction>
  );
}
