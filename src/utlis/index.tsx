import cn from 'classnames';

export function cls(props, ...classes: cn.ArgumentArray) {
  return { ...props, className: cn(props.className, ...classes) };
}

/** Deadline for the current grant program, in `DD-MM-YYYY` format. */
export const GRANT_PROGRAM_DEADLINE = '14-07-2026';

/**
 * Parses a `DD-MM-YYYY` deadline string into a Date.
 * Returns an invalid Date (NaN) when the input is missing or malformed.
 */
export function parseUntil(until: string | undefined): Date {
  const match = until?.match(/^(\d{2})-(\d{2})-(\d{4})$/);

  const isoString = `${match?.[3]}-${match?.[2]}-${match?.[1]}T01:00:00.000Z`;

  return new Date(isoString);
}

/**
 * Whether the grant program is still open for the given `DD-MM-YYYY` deadline.
 * A missing `until` is treated as open (no deadline to enforce); a malformed
 * one is treated as closed.
 */
export function isGrantOpen(until: string | undefined): boolean {
  return !until || parseUntil(until) > new Date();
}
