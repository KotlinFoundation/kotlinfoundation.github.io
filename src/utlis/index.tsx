import cn from 'classnames';

export function cls(props, ...classes: cn.ArgumentArray) {
  return { ...props, className: cn(props.className, ...classes) };
}

/** Last included day of the current grant program, in `DD-MM-YYYY` format. */
export const GRANT_PROGRAM_LAST_DAY = '15-07-2026';
/** IANA time zone the grant program dates are expressed in. */
export const GRANT_PROGRAM_TIME_ZONE = 'Europe/Brussels';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Difference (ms) between the wall-clock time in `timezone` and UTC at the given moment. */
function getTimezoneOffsetMs(timestamp: number, timezone: string): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    // The default is `h12`, which would feed 1..12 (and `AM`/`PM`) into `Date.UTC` below.
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const parts = formatter.formatToParts(new Date(timestamp));
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));

  return asUtc - timestamp;
}

/** Parses `DD-MM-YYYY` as midnight in the given IANA timezone; returns a UTC timestamp or NaN. */
function parseDateInTimezone(day: string, timezone: string): number {
  const match = day.match(/^(\d{2})-(\d{2})-(\d{4})$/);

  if (!match) {
    return NaN;
  }

  const [, dayStr, monthStr, yearStr] = match;
  const wallTime = Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
  const utc = new Date(wallTime);

  // Reject overflow like `31-02-2026`, which `Date.UTC` silently rolls over to March 3.
  if (
    utc.getUTCFullYear() !== Number(yearStr) ||
    utc.getUTCMonth() !== Number(monthStr) - 1 ||
    utc.getUTCDate() !== Number(dayStr)
  ) {
    return NaN;
  }

  // `wall = instant + offset`, hence `instant = wall - offset`.
  return wallTime - getTimezoneOffsetMs(wallTime, timezone);
}

const lastDayStartTime = parseDateInTimezone(GRANT_PROGRAM_LAST_DAY, GRANT_PROGRAM_TIME_ZONE);

if (Number.isNaN(lastDayStartTime)) {
  throw new Error(
    `GRANT_PROGRAM_LAST_DAY must be an existing calendar date in DD-MM-YYYY format, got "${GRANT_PROGRAM_LAST_DAY}".`
  );
}

/**
 * Submissions close at the start of the day after the last included day.
 * Note: a DST transition on the last day itself is not accounted for (23h/25h days).
 */
const grantsCloseTime = lastDayStartTime + DAY_MS;

export function lastDayGrants(): string {
  return new Date(lastDayStartTime).toLocaleDateString('en-US', {
    timeZone: GRANT_PROGRAM_TIME_ZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isGrantOpen(): boolean {
  return grantsCloseTime > Date.now();
}
