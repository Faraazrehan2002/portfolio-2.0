import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'faraazrehan2002@gmail.com',

    emailSubject: "Let's discuss a project",
    emailBody: 'Hi Faraaz, I am reaching out to you because...',

    oldPortfolio: 'https://faraaz-rehan.netlify.app/',
    upworkProfile: '', // No Upwork profile
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Faraazrehan2002' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/faraaz-rehan-junaidi-mohammed-797653191/' },
    { name: 'instagram', url: 'https://www.instagram.com/faraazrehan07/' },
    { name: 'Old Portfolio', url: GENERAL_INFO.oldPortfolio },
    // Add or remove social links as needed
];

export const MY_STACK = {
    languages: [
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'R',
            icon: '/logo/r.png',
        },
        {
            name: 'C/C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'Swift',
            icon: '/logo/swift.png',
        }
    ],
    frontend: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Shadcn UI',
            icon: '/logo/shadcn.png',
        },
        {
            name: 'HTML5',
            icon: '/logo/html.png',
        },
        {
            name: 'CSS3',
            icon: '/logo/css.png',
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Spring Data JPA',
            icon: '/logo/spring.png',
        },
        {
            name: 'Flask',
            icon: '/logo/flask.png',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgresql.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        }
    ],
    ai_ml: [
        {
            name: 'TensorFlow',
            icon: '/logo/tensorflow.png',
        },
        {
            name: 'PyTorch',
            icon: '/logo/pytorch.png',
        },
        {
            name: 'OpenCV',
            icon: '/logo/opencv.png',
        },
        {
            name: 'Scikit-learn',
            icon: '/logo/scikit.png',
        }
    ],
    cloud_devops: [
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Google Cloud',
            icon: '/logo/googlecloud.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Kubernetes',
            icon: '/logo/kubernetes.png',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        }
    ]
};

export const PROJECTS: IProject[] = [
    {
        title: 'FinAI',
        slug: 'finai',
        liveUrl: 'https://github.com/Faraazrehan2002/FinancialAI',
        year: 2025,
        description: `
        A Full-Stack AI Finance Platform built with modern technologies and AI integration.
        
        Key Features:
        <ul>
            <li>🤖 AI-powered financial insights and analytics</li>
            <li>⚡ Streamlined workflows with Arcjet and Inngest</li>
            <li>🔒 Secure user management via Clerk</li>
            <li>📊 Real-time data visualization and reporting</li>
            <li>🎨 Modern, responsive UI with Tailwind and Shadcn</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Implemented secure authentication and user management</li>
            <li>Integrated AI workflows for automated financial analysis</li>
            <li>Built scalable backend architecture with Next.js</li>
            <li>Designed intuitive UI components with Shadcn UI</li>
        </ul>
        `,
        role: `
        Full Stack Developer <br/>
        Responsibilities:
        <ul>
            <li>✅ Architected and developed the entire platform from scratch</li>
            <li>🔄 Implemented AI integration and data processing workflows</li>
            <li>🎨 Designed and built responsive UI components</li>
            <li>🚀 Deployed and maintained the application infrastructure</li>
        </ul>
        `,
        techStack: [
            'React 19',
            'Next.js 15',
            'Tailwind CSS',
            'Supabase',
            'Prisma',
            'Clerk',
            'Inngest',
            'Arcjet',
            'Shadcn UI'
        ],
        thumbnail: '/projects/thumbnail/finai.jpg',
        longThumbnail: '/projects/long/finai.jpg',
        images: [
            '/projects/images/finai-1.jpg',
            '/projects/images/finai-2.jpg'
        ],
    },
    {
        title: 'ChequeOCR',
        slug: 'cheque-ocr',
        liveUrl: 'https://github.com/Faraazrehan2002/ChequeOCR',
        year: 2025,
        description: `
        An intelligent document processing solution for automated cheque data extraction.
        
        Key Features:
        <ul>
            <li>📝 Automated cheque data extraction using OCR</li>
            <li>🔍 Advanced image preprocessing for improved accuracy</li>
            <li>🤖 Integration with Google Cloud Document AI</li>
            <li>📊 Structured Excel report generation</li>
            <li>⚡ High accuracy in data recognition</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Implemented sophisticated image preprocessing techniques</li>
            <li>Integrated multiple OCR technologies for optimal results</li>
            <li>Built efficient data extraction and validation pipeline</li>
            <li>Developed automated report generation system</li>
        </ul>
        `,
        role: `
        Lead Developer <br/>
        Responsibilities:
        <ul>
            <li>✅ Designed end-to-end OCR solution architecture</li>
            <li>🔄 Implemented image preprocessing pipeline</li>
            <li>🤖 Integrated Google Cloud Document AI</li>
            <li>📊 Developed automated report generation system</li>
        </ul>
        `,
        techStack: [
            'Python',
            'OpenCV',
            'Tesseract',
            'Google Cloud Document AI',
            'OpenPyXL'
        ],
        thumbnail: '/projects/thumbnail/cheque-ocr.jpg',
        longThumbnail: '/projects/long/cheque-ocr.jpg',
        images: [
            '/projects/images/cheque-ocr-1.jpg',
            '/projects/images/cheque-ocr-2.jpg'
        ],
    },
    {
        title: 'Crypto App',
        slug: 'crypto-app',
        liveUrl: 'https://github.com/Faraazrehan2002/crypto-app',
        year: 2024,
        description: `
        A comprehensive cryptocurrency tracking application with portfolio simulation capabilities.
        
        Key Features:
        <ul>
            <li>💹 Real-time cryptocurrency price tracking</li>
            <li>📊 Portfolio simulation and management</li>
            <li>🔍 Advanced search and filtering functionality</li>
            <li>📈 Live price charts and trends</li>
            <li>💰 Support for 100+ cryptocurrencies</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Integrated real-time cryptocurrency APIs</li>
            <li>Implemented complex data visualization</li>
            <li>Built responsive and interactive UI</li>
            <li>Developed efficient state management system</li>
        </ul>
        `,
        role: `
        Frontend Developer <br/>
        Responsibilities:
        <ul>
            <li>✅ Developed the frontend architecture</li>
            <li>📊 Implemented data visualization components</li>
            <li>🔄 Integrated cryptocurrency APIs</li>
            <li>🎨 Designed responsive UI/UX</li>
        </ul>
        `,
        techStack: [
            'React',
            'TypeScript',
            'Chart.js',
            'Cryptocurrency APIs',
            'Tailwind CSS'
        ],
        thumbnail: '/projects/thumbnail/crypto-app.jpg',
        longThumbnail: '/projects/long/crypto-app.jpg',
        images: [
            '/projects/images/crypto-app-1.jpg',
            '/projects/images/crypto-app-2.jpg'
        ],
    },
    {
        title: 'Watch Wizards',
        slug: 'watch-wizards',
        liveUrl: 'https://github.com/Faraazrehan2002/WatchWizards',
        year: 2024,
        description: `
        A responsive web application for browsing movies and TV shows using TMDb API.
        
        Key Features:
        <ul>
            <li>🎬 Comprehensive movie and TV show database</li>
            <li>🔍 Advanced search functionality</li>
            <li>📋 Personal watchlist management</li>
            <li>⭐ User ratings and reviews</li>
            <li>📱 Fully responsive design</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Implemented seamless TMDb API integration</li>
            <li>Built intuitive search and filter system</li>
            <li>Developed responsive UI components</li>
            <li>Created efficient local storage management</li>
        </ul>
        `,
        role: `
        Frontend Developer <br/>
        Responsibilities:
        <ul>
            <li>✅ Designed and developed the frontend</li>
            <li>🔄 Integrated TMDb API</li>
            <li>📱 Implemented responsive design</li>
            <li>💾 Developed local storage management</li>
        </ul>
        `,
        techStack: [
            'JavaScript',
            'HTML5',
            'CSS3',
            'TMDb API',
            'Local Storage'
        ],
        thumbnail: '/projects/thumbnail/watch-wizards.jpg',
        longThumbnail: '/projects/long/watch-wizards.jpg',
        images: [
            '/projects/images/watch-wizards-1.jpg',
            '/projects/images/watch-wizards-2.jpg'
        ],
    },
    {
        title: 'Face Secure',
        slug: 'face-secure',
        liveUrl: 'https://github.com/Faraazrehan2002/face-secure',
        year: 2023,
        description: `
        A facial recognition application leveraging AWS Rekognition for secure user authentication.
        
        Key Features:
        <ul>
            <li>👤 Real-time face detection and recognition</li>
            <li>🔒 Secure user authentication system</li>
            <li>⚡ Fast and accurate visitor validation</li>
            <li>🎯 Robust error handling</li>
            <li>📱 Responsive web interface</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Integrated AWS Rekognition for facial recognition</li>
            <li>Implemented secure authentication flow</li>
            <li>Built scalable web application architecture</li>
            <li>Developed real-time face detection system</li>
        </ul>
        `,
        role: `
        Full Stack Developer <br/>
        Responsibilities:
        <ul>
            <li>✅ Designed and implemented the application architecture</li>
            <li>🔄 Integrated AWS Rekognition API</li>
            <li>🔒 Developed secure authentication system</li>
            <li>🎨 Created responsive user interface</li>
        </ul>
        `,
        techStack: [
            'React',
            'AWS Rekognition',
            'Node.js',
            'Express',
            'MongoDB'
        ],
        thumbnail: '/projects/thumbnail/face-secure.jpg',
        longThumbnail: '/projects/long/face-secure.jpg',
        images: [
            '/projects/images/face-secure-1.jpg',
            '/projects/images/face-secure-2.jpg'
        ],
    },
    {
        title: 'Hate Comment Toxicity',
        slug: 'hate-comment-toxicity',
        liveUrl: 'https://github.com/Faraazrehan2002/hate-comment-toxicity',
        year: 2023,
        description: `
        A deep learning model for classifying toxic comments with high accuracy.
        
        Key Features:
        <ul>
            <li>🎯 90% precision, recall, and accuracy</li>
            <li>⚡ Real-time predictions under 1 second</li>
            <li>📊 Interactive Gradio interface</li>
            <li>🔄 Efficient training pipeline</li>
            <li>📈 Advanced data processing</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Developed deep learning model using TensorFlow/Keras</li>
            <li>Improved training efficiency by 50%</li>
            <li>Processed large datasets (160,000 samples)</li>
            <li>Built interactive interface for real-time testing</li>
        </ul>
        `,
        role: `
        Machine Learning Engineer <br/>
        Responsibilities:
        <ul>
            <li>✅ Designed and trained the deep learning model</li>
            <li>📊 Implemented data processing pipeline</li>
            <li>🔄 Optimized model performance</li>
            <li>🎨 Developed interactive interface</li>
        </ul>
        `,
        techStack: [
            'TensorFlow',
            'Keras',
            'Python',
            'Gradio',
            'NumPy',
            'Pandas'
        ],
        thumbnail: '/projects/thumbnail/hate-toxicity.jpg',
        longThumbnail: '/projects/long/hate-toxicity.jpg',
        images: [
            '/projects/images/hate-toxicity-1.jpg',
            '/projects/images/hate-toxicity-2.jpg'
        ],
    },
    {
        title: 'Diabetes Predictor',
        slug: 'diabetes-predictor',
        liveUrl: 'https://github.com/Faraazrehan2002/diabetes-predictor',
        year: 2023,
        description: `
        A full-stack web application for precise diabetes prediction using machine learning.
        
        Key Features:
        <ul>
            <li>🎯 98% prediction accuracy</li>
            <li>📊 Comprehensive data visualization</li>
            <li>🔍 Advanced feature analysis</li>
            <li>🎨 Intuitive user interface</li>
            <li>📈 Detailed result analysis</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Implemented logistic regression model</li>
            <li>Conducted extensive exploratory data analysis</li>
            <li>Performed hyperparameter tuning</li>
            <li>Reduced input errors by 30%</li>
        </ul>
        `,
        role: `
        Full Stack Developer <br/>
        Responsibilities:
        <ul>
            <li>✅ Developed machine learning model</li>
            <li>🔄 Built Flask web application</li>
            <li>📊 Implemented data visualization</li>
            <li>🎨 Designed user interface</li>
        </ul>
        `,
        techStack: [
            'Python',
            'Flask',
            'Scikit-learn',
            'HTML/CSS/JS',
            'Pandas',
            'Matplotlib'
        ],
        thumbnail: '/projects/thumbnail/diabetes-predictor.jpg',
        longThumbnail: '/projects/long/diabetes-predictor.jpg',
        images: [
            '/projects/images/diabetes-predictor-1.jpg',
            '/projects/images/diabetes-predictor-2.jpg'
        ],
    },
    {
        title: 'Twitter Sentiment Analysis',
        slug: 'twitter-sentiment',
        liveUrl: 'https://github.com/Faraazrehan2002/twitter-sentiment',
        year: 2022,
        description: `
        A sentiment analysis system for Twitter data with high accuracy classification.
        
        Key Features:
        <ul>
            <li>🎯 89% classification accuracy</li>
            <li>📊 0.94 ROC-AUC score</li>
            <li>🔍 Advanced text preprocessing</li>
            <li>📈 Comprehensive feature engineering</li>
            <li>⚡ Efficient data processing</li>
        </ul>
        
        Technical Highlights:
        <ul>
            <li>Processed 25,000 sentiment-labeled samples</li>
            <li>Implemented TF-IDF feature transformation</li>
            <li>Applied sophisticated text cleaning techniques</li>
            <li>Achieved high accuracy in sentiment classification</li>
        </ul>
        `,
        role: `
        Machine Learning Engineer <br/>
        Responsibilities:
        <ul>
            <li>✅ Developed text processing pipeline</li>
            <li>📊 Implemented feature engineering</li>
            <li>🔄 Built classification model</li>
            <li>📈 Conducted performance analysis</li>
        </ul>
        `,
        techStack: [
            'Python',
            'NLTK',
            'Scikit-learn',
            'Pandas',
            'NumPy',
            'Matplotlib'
        ],
        thumbnail: '/projects/thumbnail/twitter-sentiment.jpg',
        longThumbnail: '/projects/long/twitter-sentiment.jpg',
        images: [
            '/projects/images/twitter-sentiment-1.jpg',
            '/projects/images/twitter-sentiment-2.jpg'
        ],
    }
];

export const MY_EXPERIENCE = [
    {
        id: 'eunimart-2023',
        title: 'Software Developer Intern',
        company: 'Eunimart',
        duration: 'Jan 2023 - Jun 2023',
    },
    {
        id: 'fewcuts-2022-2',
        title: 'Research and Software Development Intern',
        company: 'FewCuts Inc',
        duration: 'Jun 2022 - Nov 2022',
    },
    {
        id: 'fewcuts-2022-1',
        title: 'Software Developer Intern (Volunteer)',
        company: 'FewCuts Inc',
        duration: 'Jan 2022 - Jun 2022',
    }
];
