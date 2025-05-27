import TransitionLink from '@/components/TransitionLink';
import { cn } from '@/lib/utils';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

/*
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link">
    <path id="arrow-line" d="M15 3h6v6"></path>
    <path id="arrow-curb" d="M10 14 21 3"></path>
    <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>

<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.9996 6.18259H10.2846C5.70915 6.18259 2 9.89172 2 14.4672V60.0324C2 64.6079 5.70914 68.317 10.2846 68.317H55.8498C60.4253 68.317 64.1344 64.6079 64.1344 60.0324V24.9401" stroke="#DDDDDD" stroke-width="3.10672" stroke-linecap="round"/>
<rect x="38.2451" y="30.0007" width="40.3874" height="3.10672" rx="1.55336" transform="rotate(-45 38.2451 30.0007)" fill="#DDDDDD"/>
<path d="M58.5561 3.23069L67.9426 1.59357C68.1983 1.54899 68.4231 1.76656 68.387 2.02352L67.0827 11.2992" stroke="#DDDDDD" stroke-width="2.07115" stroke-linecap="round"/>
</svg>

*/

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
    const externalLinkRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <div className="relative group/project py-8 first:pt-0">
            <div className="flex items-start w-full">
                <div className="flex items-start gap-6 w-[80%] border-b-2 border-border/50 pb-4 last:border-none">
                    <TransitionLink
                        href={`/projects/${project.slug}`}
                        className="project-item leading-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all block"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex gap-2 md:gap-5">
                            <div className="font-anton text-muted-foreground">
                                _{(index + 1).toString().padStart(2, '0')}.
                            </div>
                            <div className="">
                                <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                    {project.title}
                                </h4>
                                <div className="mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs">
                                    {project.techStack
                                        .slice(0, 3)
                                        .map((tech, idx, stackArr) => (
                                            <div
                                                className="gap-3 flex items-center"
                                                key={tech}
                                            >
                                                <span className="">{tech}</span>
                                                {idx !== stackArr.length - 1 && (
                                                    <span className="inline-block size-2 rounded-full bg-background-light"></span>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </TransitionLink>

                    <TransitionLink
                        href={`/projects/${project.slug}`}
                        className="text-foreground opacity-0 group-hover/project:opacity-100 transition-all duration-300 hover:text-primary flex-shrink-0 mt-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ref={externalLinkRef}
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </TransitionLink>
                </div>
            </div>

            {/* Project Info Card - Always rendered but only visible on hover */}
            <div className="absolute left-[35rem] top-0 w-full max-w-md opacity-0 invisible group-hover/project:opacity-100 group-hover/project:visible transition-all duration-300 z-10">
                <div className="bg-background-light rounded-lg p-6 shadow-lg border border-border backdrop-blur-sm">
                    <div className="space-y-6">
                        <div>
                            <h5 className="text-xl font-semibold mb-3 text-foreground">Key Features</h5>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                {project.description.split('<ul>')[1]?.split('</ul>')[0]
                                    .split('<li>')
                                    .slice(1)
                                    .map((feature) => (
                                        <p key={feature}>
                                            {feature.split('</li>')[0]}
                                        </p>
                                    ))
                                    .slice(0, 3)}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold mb-3 text-foreground">Tech Stack</h5>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm bg-background rounded-full border border-border text-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
