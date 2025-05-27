import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/Faraazrehan2002/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Faraazrehan2002"
                        className="underline"
                    >
                        Design & built by Faraaz Rehan
                    </a>
                    <br />
                    <span className="text-muted-foreground">
                        Copyright © {new Date().getFullYear()}. All rights
                        reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
