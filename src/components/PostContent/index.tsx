import Button from "@rescui/button";

const DEFAULT_EXCERPT_SIZE = 200;

export function PostContent({ excerpt, fields, frontmatter }) {
    const { date, title, spoilerSize } = frontmatter;
    const url = fields.url;

    const cutContent = excerpt
        .substring(0, spoilerSize || DEFAULT_EXCERPT_SIZE);

    const isTrimmed = cutContent.length !== excerpt.length;

    const content = cutContent
        .split('\n\n')
        .map((text, i, list) => (
            <p key={text}>{text}{isTrimmed && i === list.length - 1 && '…'}</p>
        ));

    return (
        <>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            {isTrimmed && (
                <Button size="l" mode="outline" href={url}>Read more</Button>
            )}
        </>
    );
}
