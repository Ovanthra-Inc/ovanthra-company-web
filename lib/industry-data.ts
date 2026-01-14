export interface IndustryMember {
    name: string;
    role: string;
    description: string;
    image?: string;
}

export interface RoadmapPhase {
    phase: string;
    title: string;
    description: string;
}

export interface IndustryImpactItem {
    title: string;
    description: string;
}

export interface IndustryData {
    slug: string;
    id: string;
    sector: string;
    title: string;
    heroImage: string;
    description: string;
    stats: {
        label: string;
        value: string;
    }[];
    impact: {
        title: string;
        items: IndustryImpactItem[];
    };
    quote: {
        text: string;
        attribution: string;
    };
    roadmap: RoadmapPhase[];
    team: {
        title: string;
        description: string;
        members: IndustryMember[];
    };
}

export const industries: IndustryData[] = [
    {
        slug: "financial-services",
        id: "01",
        sector: "Finance",
        title: "Redefining Capital Intelligence for the Modern Era.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwGh2G5ggahhK-fbrBTmLDjvi1D7NVllzZhK5ZJUd0oqcxe7R0oq-fDzvRKC8TUYbEv_oajkxKnhJgv-_cHSFDaT7iXp-9_9QNi_1oyVw6deJKRwIJhVj0wV7zzWYYymbVuZStavsA4cJZzth2nqANGgWWpGCWdNq5Q7e_JzIxLeLiB2OL2UoxyoELttx52WcvtLk3kh8IokgpkxM2DjlnYrSOlKLiRJFf7z9_tSFlYNxtjUig3UJm5s8T9p0fKCiezQd3pMkJun4I",
        description: "Ovanthra partners with global financial institutions to deploy sovereign neural architectures that transform risk into predictive advantage.",
        stats: [
            { label: "Market Position", value: "Tier 1 Partner" },
            { label: "AUM Influence", value: "$4.2T+ Framework" }
        ],
        impact: {
            title: "Architecting trust in high-frequency environments.",
            items: [
                {
                    title: "Predictive Liquidity Mapping",
                    description: "Advanced neural networks that forecast market shifts with institutional precision, optimizing liquidity pools in real-time."
                },
                {
                    title: "Sovereign Risk Frameworks",
                    description: "Encapsulated AI environments that ensure data residency and regulatory compliance across global jurisdictions."
                },
                {
                    title: "Automated Compliance Ops",
                    description: "Reducing manual audit overhead by 60% through continuous, AI-driven monitoring of transaction integrity."
                }
            ]
        },
        quote: {
            text: "Intelligence is no longer about the quantity of data, but the sovereignty and speed of its application.",
            attribution: "Ovanthra Strategic Philosophy"
        },
        roadmap: [
            {
                phase: "Phase 01",
                title: "Audit & Infrastructure",
                description: "Comprehensive mapping of existing data pipelines and the deployment of the Ovanthra Core environment."
            },
            {
                phase: "Phase 02",
                title: "Model Customization",
                description: "Fine-tuning of proprietary LLMs on institutional datasets within secured, zero-trust compute nodes."
            },
            {
                phase: "Phase 03",
                title: "Operational Integration",
                description: "Deployment across front-office trading and back-office compliance terminals for live execution."
            },
            {
                phase: "Phase 04",
                title: "Scale & Optimization",
                description: "Global rollout and continuous recursive learning to refine predictive accuracy and system throughput."
            }
        ],
        team: {
            title: "Led by Industry Visionaries",
            description: "Our financial division is staffed by former institutional leads and world-class AI researchers.",
            members: [
                {
                    name: "Dr. Alistair Thorne",
                    role: "Managing Director, Finance",
                    description: "Formerly Head of Quantitative Strategy at Global Capital Partners.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByJKwsfQd1Xlo61jEWVy4FLr0QkRpg08UEjYQwVo4Mie2s7lv_PpTCUTUFyxaofVSb91KUnOSldFhUVjfAglYBhi6wL2gb_7ozfe3tEx2NzriWoSt1cXgx_aDIclYCkYPRXZJCnjyOh8HBA7y69AlnK_2A4IMI28BZKJby1-zjtDENIH_nP7yt-62A5jJnzMB3YG4MJGRMkwMTXlsg47mNB4To25F8lxdqdE-SmYBd0SY5NzKnS3Knsn_KcP8lpoFxXz21-spAmT-T"
                },
                {
                    name: "Elena Rodriguez",
                    role: "VP, Regulatory Strategy",
                    description: "Architect of three global sovereign compliance frameworks.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9DuWcMWr2nxTgKBeJ7r_NqqdtEXNnGu8wNOInQ709x6sFpEs2PlfQkyR_UxQxkeff5C2QKfarzwZUustmk6iFxZC7LVN6CuEL4Hx4VyqvSJ_BMot5svWBu-3chRyh6R6CCoIJiOejFUJ7fBZH_p7dm_9Fwszjoc62S1w6vB2faMxFT8waigFeQfhoEDpQcfApkAYBfkL0ZL6JqcD8JX6g-PRaWUeMR-WVI524GzrdZEm_zYNrhK82_iaLs9eanv7IQbvCaslHsGh9"
                },
                {
                    name: "Marcus Chen",
                    role: "Lead AI Engineer",
                    description: "Specialist in neural architecture for high-frequency market analysis."
                }
            ]
        }
    },
    {
        slug: "healthcare",
        id: "02",
        sector: "Healthcare",
        title: "Precision Medicine Powered by Federated Intelligence.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrE_rdLeIso9aHhlLEPOOaQOfW2USkWniYtKL78AFdjVZe591tcWOD49C7mH2CIU5uL9Psfvjphn0RHNqurSLvztFpKRQ2wKUHYENHawbO927d86X_iQQAmiT0xefuLCPkR4frY5ByFwFEAe8h4wkjzwQ0hpjEdoa0qADWc-bETf2H5aGWNFYLhRq0Zfm8jL-CJOJ5EDkPacbN8qAxbOVeOdLoWjSSKYzFXox6NWti49co-ZkbOQ6y_ULMcFyTuriW3xOIh1AT7Huh",
        description: "Accelerate precision diagnostics and optimize patient outcomes using predictive health data and AI-driven clinical insights.",
        stats: [
            { label: "Deployment", value: "Global Hospital Networks" },
            { label: "Data Security", value: "HIPAA Compliant" }
        ],
        impact: {
            title: "Transforming patient care with neural velocity.",
            items: [
                {
                    title: "Federated Learning nodes",
                    description: "Training models on distributed sensitive patient data without ever moving the data from source."
                },
                {
                    title: "Diagnostic Vision",
                    description: "High-accuracy image analysis for early detection of complex anomalies in oncology and neurology."
                },
                {
                    title: "Clinical Workflow Ops",
                    description: "Automating administrative overhead to allow specialists to focus on high-fidelity patient care."
                }
            ]
        },
        quote: {
            text: "Deep learning isn't just about discovery; it's about the speed of recovery.",
            attribution: "Ovanthra Healthcare Vision"
        },
        roadmap: [
            { phase: "Phase 01", title: "Compliance Mapping", description: "Securing data silos and establishing HIPAA/GDPR compliant infrastructure." },
            { phase: "Phase 02", title: "Federated Node Deployment", description: "Initializing secure compute nodes across hospital networks." },
            { phase: "Phase 03", title: "Clinical Pilot", description: "Deploying vision models in live diagnostic workflows." },
            { phase: "Phase 04", title: "Protocol Optimization", description: "Scaling across multi-national networks with central governance." }
        ],
        team: {
            title: "Clinical & Neural Experts",
            description: "Bridging the gap between medical science and advanced computational architecture.",
            members: [
                { name: "Dr. Sarah Jenkins", role: "Director of Clinical AI", description: "Former Lead Researcher at Global Health Institute." },
                { name: "Julian Voss", role: "Head of Bio-Engineering", description: "Architect of distributed neural health systems." }
            ]
        }
    },
    {
        slug: "energy-utilities",
        id: "03",
        sector: "Energy",
        title: "The Intelligent Grid: Autonomous Resource Management.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCktZmtGe20wh6xv_cYyssiU-QETvAdCM3nJEIkiJDj04SgIAJ8qNM-bBwIdV8SAvwd9HCLvWRHIgbJl3l5nmxTvjpSouB__JFcrJyvcHAjD8Vb6uAxebyIzWDY60-bt27nMs_FowgPQqbzb4nc61MA5VlAvMcD1Ya4HL_v0h1f8JKe6KWQYk-GjBFI5cBmb3rG-GrR3nowW_UeN1xUlfak-6wJO7mJ2M4PRotZ_5vyNTt90_4UVdoQ15c_7PnR21vvx1OSy_zeru7k",
        description: "Enhancing grid intelligence and predictive maintenance schedules to ensure sustainable energy distribution across global networks.",
        stats: [
            { label: "Grid Efficiency", value: "+22% Improvement" },
            { label: "Uptime", value: "99.99% Reliability" }
        ],
        impact: {
            title: "Powering the future with structural clarity.",
            items: [
                {
                    title: "Predictive Load Balancing",
                    description: "Real-time adjustments to grid distribution based on massive neural consumption forecasts."
                },
                {
                    title: "Autonomous Maintenance",
                    description: "Deterioration modeling that identifies structural failures before they impact service delivery."
                },
                {
                    title: "Renewable Integration",
                    description: "Seamlessly syncing volatile green energy sources with institutional baseline requirements."
                }
            ]
        },
        quote: {
            text: "Sustainability is an engineering challenge that only high-velocity intelligence can solve.",
            attribution: "Ovanthra Energy Initiative"
        },
        roadmap: [
            { phase: "Phase 01", title: "Sensor Convergence", description: "Integrating IoT telemetry into a unified Ovanthra Core stream." },
            { phase: "Phase 02", title: "Demand Modeling", description: "Training models on historical and real-time consumption vectors." },
            { phase: "Phase 03", title: "Grid Automation", description: "Live deployment of autonomous switching and distribution protocols." },
            { phase: "Phase 04", title: "Resilience Scaling", description: "Hardening infrastructure against global supply shocks." }
        ],
        team: {
            title: "Grid Intelligence Pioneers",
            description: "Staffed by experts in renewable engineering and high-frequency IoT architecture.",
            members: [
                { name: "Robert Khalife", role: "Lead Energy Architect", description: "Former CTO of Continental Grid Systems." },
                { name: "Nina Petrov", role: "VP, Sustainability Tech", description: "Specialist in renewable integration and storage optimization." }
            ]
        }
    },
    {
        slug: "retail",
        id: "04",
        sector: "Retail",
        title: "Hyper-Personalized Commerce at Global Scale.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhdAk_maYvbB14UbuQpN1NlkvKX3KRLP2JjYs-TWWb06cZjpcdVHUTRcKXE2pHnlKCNwkao4d8y0HxFL6c6HkLJ_wFHBZX8STQGAc7ZrIRBZmd_0TdI84YxboofmkQ5zU9roos1EtCdG5KA30lYyOjjB8ZDx6whb45PxAQuCp12s5F91FyNocmtp6xkLmtvALXt_8G2mISsxo2bxWBIoAgIHnm9qrAyeg0PhoJ0vOLCsN63wUQ6IVbGu85rWtVDhNv8wlRF0CmxzGi",
        description: "Deliver hyper-personalized customer journeys and resilient supply chain logistics powered by Ovanthra's retail AI engine.",
        stats: [
            { label: "Customer LTV", value: "+45% Increase" },
            { label: "Churn Reduction", value: "-30% Forecasted" }
        ],
        impact: {
            title: "Redefining the relationship between brand and consumer.",
            items: [
                {
                    title: "Contextual Journeys",
                    description: "AI that understands micro-intent to deliver perfectly-timed product interventions."
                },
                {
                    title: "Logistics Velocity",
                    description: "Predictive inventory placement that anticipates demand spikes before they occur."
                },
                {
                    title: "Ethical Data Mining",
                    description: "Providing deep consumer insights while maintaining absolute privacy and sovereignty."
                }
            ]
        },
        quote: {
            text: "Commerce is moving from search-based to intent-based. We provide the intent.",
            attribution: "Ovanthra Retail Strategy"
        },
        roadmap: [
            { phase: "Phase 01", title: "Omnichannel Sync", description: "Harmonizing physical and digital data points into one identity." },
            { phase: "Phase 02", title: "Intent Mapping", description: "Building predictive models that anticipate customer life-stage shifts." },
            { phase: "Phase 03", title: "Scale Deployment", description: "Rolling out personalized engines across global storefronts." },
            { phase: "Phase 04", title: "Supply Chain Loop", description: "Closing the gap between customer intent and factory output." }
        ],
        team: {
            title: "Retail AI Visionaries",
            description: "Led by former retail executives and neural branding specialists.",
            members: [
                { name: "Sophie Laurent", role: "Head of Consumer AI", description: "Former Director of Digital Strategy at Maison Global." },
                { name: "David Stark", role: "VP, Global Supply Chain", description: "Architect of resilient logistics for tier-1 retailers." }
            ]
        }
    }
];

export function getIndustryBySlug(slug: string) {
    return industries.find(industry => industry.slug === slug);
}
