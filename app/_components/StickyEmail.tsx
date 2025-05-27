import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block">
            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}`}
                className="px-3 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-foreground hover:!bg-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    // background:
                    //     'linear-gradient(to bottom, hsl(var(--muted-foreground)) 0% 33.33%, hsl(var(--primary)) 33.33% 66.66%, hsl(var(--muted-foreground)) 66.66% 100%)',
                    // backgroundSize: '100% 300%',

                    // backgroundClip: 'text',
                    // color: 'transparent',

                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>
        </div>
    );
};

export default StickyEmail;
