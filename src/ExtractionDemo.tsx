import { useState } from 'react';
import { extracted, sampleDoc } from './data';

// Hero illustration: a short study summary on the left, the structured record pulled
// from it on the right. Pointing at a field lights up the sentence it came from.
export default function ExtractionDemo() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <figure className='demo' aria-label='Example of extracting structured data from a study summary'>
            <div className='demo-doc'>
                <div className='demo-doc-head'>
                    <span>Study summary</span>
                    <span>p. 1 of 1</span>
                </div>
                <p>
                    {sampleDoc.map((seg, i) =>
                        seg.field ? (
                            <mark
                                key={i}
                                className={'hl' + (active === seg.field ? ' is-active' : '')}
                                style={{ animationDelay: `${0.35 + i * 0.07}s` }}
                            >
                                {seg.text}
                            </mark>
                        ) : (
                            <span key={i}>{seg.text}</span>
                        ),
                    )}
                </p>
            </div>

            <dl className='demo-out' onMouseLeave={() => setActive(null)}>
                {extracted.map((row, i) => (
                    <div
                        key={row.field}
                        className={'demo-row' + (active === row.field ? ' is-active' : '')}
                        tabIndex={0}
                        onMouseEnter={() => setActive(row.field)}
                        onFocus={() => setActive(row.field)}
                        onBlur={() => setActive(null)}
                        style={{ animationDelay: `${0.5 + i * 0.09}s` }}
                    >
                        <dt>{row.field}</dt>
                        <dd>{row.value}</dd>
                    </div>
                ))}
            </dl>

            <figcaption>
                Every extracted value points back to the sentence it came from. Hover a field to see its
                source. The study is made up, but the problem is close to what I worked on at ClinChoice.
            </figcaption>
        </figure>
    );
}
