import { Link } from '../Link';
import { MODERN_SHORT_CODES } from '../Markdown';
import { GrantsAction, GrantsActionProps } from './GrantsAction';

type GrantsSubmissionOpenProps = Omit<GrantsActionProps, 'url'> & {
  url: string;
  until?: string;
};

type GrantsSubmissionCloseProps = Omit<GrantsActionProps, 'url'> & {
  url?: undefined;
};

type GrantsSubmissionProps = GrantsSubmissionOpenProps | GrantsSubmissionCloseProps;

function parseUntil(until: string | undefined): Date {
  const match = until?.match(/^(\d{2})-(\d{2})-(\d{4})$/);

  const isoString = `${match?.[3]}-${match?.[2]}-${match?.[1]}T01:00:00.000Z`;

  return new Date(isoString);
}

export function GrantsSubmission({ url, ...props }: GrantsSubmissionProps) {
  if (url) {
    return <GrantsSubmissionOpen url={url} {...props} />;
  }

  return <GrantsSubmissionClose {...props} />;
}

function GrantsSubmissionOpen({ url, until, ...props }: GrantsSubmissionOpenProps) {
  const untilDate = parseUntil(until);

  if (until && !(untilDate > new Date())) {
    return <GrantsSubmissionClose {...props} />;
  }

  return (
    <GrantsAction theme="dark" action="Application form" url={url} target={'_blank'} {...props}>
      <MODERN_SHORT_CODES.p>
        To submit your project, fill in the application form.
        {!isNaN(untilDate.getTime()) && (
          <>
            <br className="hide--mm" /> The first round of submissions closes{' '}
            {untilDate.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
            })}
            .
          </>
        )}
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
