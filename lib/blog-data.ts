export interface BlogPost {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    author: {
        name: string;
        initials: string;
        role: string;
        avatar?: string;
    };
    date: string;
    readTime: string;
    image: string;
    featured: boolean;
    tags: string[];
    content: {
        intro: string;
        sections: Array<{
            heading?: string;
            paragraphs?: string[];
            quote?: {
                text: string;
                attribution: string;
            };
            list?: Array<{
                icon: string;
                title: string;
                description: string;
            }>;
        }>;
    };
    relatedPosts: string[]; // slugs of related posts
}

export const blogPosts: BlogPost[] = [
    {
        slug: "sovereign-ai-roadmap",
        category: "Featured Analysis",
        title: "The Roadmap to Sovereign AI",
        excerpt:
            "Why national and enterprise-level AI independence is becoming the defining strategic imperative of the 2020s. We analyze the shift from shared models to private intelligence infrastructure.",
        author: {
            name: "Marcus Thorne",
            initials: "MT",
            role: "Chief Strategy Officer",
            avatar:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCQAJOFNsv7v-RkzLGEMgdwokzFKDrSOYrrV2trvbVX0AmnVYLB74RfF7-ZZS9qVJjTEh00YJfNsI94U_3ovIfAkwqqOXAcjt8KxIyXMUyy5GA4Y0BZZMbXkAV4PYCKdEztfQ3qbpZc4VJGA00ZRkxQ1Nly9ooxBlLODSra78B3npPWduV7rN8BAzByi-syLdA1mPJw8EqMRRQTdWTANyITw94qhI-br6mb1cKx3bt1aKE6MoTcXtHDc-o4Uqjaq0TFU9SAFy75Dxal",
        },
        date: "October 28, 2024",
        readTime: "12 Min Read",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC-r_ttqREsFHP7q1j9XqD5AWdbw8VAUin_1Bt6SJi-sipdoY61t7B1bSA8YFWE-ls-BdTiIyDwdL3cQuEZXkz1cBjPd_sYyScO7ATNTa5v3Qi_od46JQYQYm8yd4OkAOucTKaB4GhrR6hcrk2QnH3Rd_QYr65TAaepcEFM0eU1Pzsahc42GtjLjjfIqvEIhL5HYAPMJzqcptkoFC7WHnpObp4tknn85UKWK-qywdGGBDcOvmkctxDcfsHabBqtzEGtlKVkTBsXSvMM",
        featured: true,
        tags: ["Strategy", "AI Independence", "Enterprise"],
        content: {
            intro:
                "As artificial intelligence systems become increasingly integral to national infrastructure, the question shifts from capability to sovereignty. How do nations and enterprises ensure strategic independence in an era defined by algorithmic decision-making?",
            sections: [
                {
                    paragraphs: [
                        "The traditional model of shared AI infrastructure—cloud-based, centralized, and often controlled by a handful of technology giants—is facing a fundamental reckoning. Organizations are beginning to recognize that true strategic advantage lies not in access to AI, but in ownership of it.",
                    ],
                },
                {
                    heading: "The Sovereignty Imperative",
                    paragraphs: [
                        "Sovereign AI represents the capacity to develop, deploy, and maintain artificial intelligence systems within one's own controlled infrastructure. This extends beyond mere data residency to encompass the entire technology stack: from model architecture to training pipelines to deployment infrastructure.",
                        "For enterprises, this means building private AI capabilities that align with corporate values, protect intellectual property, and ensure regulatory compliance. For nations, it means maintaining technological independence in critical sectors.",
                    ],
                },
                {
                    quote: {
                        text: "The organizations and nations that will define the next decade are those that treat AI not as a commodity, but as critical infrastructure requiring sovereign control.",
                        attribution: "Ovanthra Strategic Outlook 2025",
                    },
                },
                {
                    heading: "Building the Foundation",
                    paragraphs: [
                        "The path to AI sovereignty requires investment across three critical dimensions: infrastructure, talent, and data governance. Organizations must develop the capability to train and fine-tune models on proprietary data, deploy them within secure perimeters, and maintain full auditability of their decision-making processes.",
                    ],
                },
            ],
        },
        relatedPosts: [
            "ethical-ai-future",
            "edge-computing-ai",
            "measuring-roi-generative-era",
        ],
    },
    {
        slug: "ethical-ai-future",
        category: "AI Ethics",
        title: "The Future of Ethical AI in Global Enterprise",
        excerpt:
            "As artificial intelligence systems become increasingly integral to global infrastructure, the question shifts from capability to conscience.",
        author: {
            name: "Dr. Sarah Chen",
            initials: "SC",
            role: "Chief AI Officer",
        },
        date: "October 14, 2024",
        readTime: "8 min read",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDwGh2G5ggahhK-fbrBTmLDjvi1D7NVllzZhK5ZJUd0oqcxe7R0oq-fDzvRKC8TUYbEv_oajkxKnhJgv-_cHSFDaT7iXp-9_9QNi_1oyVw6deJKRwIJhVj0wV7zzWYYymbVuZStavsA4cJZzth2nqANGgWWpGCWdNq5Q7e_JzIxLeLiB2OL2UoxyoELttx52WcvtLk3kh8IokgpkxM2DjlnYrSOlKLiRJFf7z9_tSFlYNxtjUig3UJm5s8T9p0fKCiezQd3pMkJun4I",
        featured: false,
        tags: ["AI Ethics", "Enterprise", "Strategy"],
        content: {
            intro:
                "As artificial intelligence systems become increasingly integral to global infrastructure, the question shifts from capability to conscience. How do we engineer ethics into the very fabric of neural networks without compromising the velocity required by modern markets?",
            sections: [
                {
                    paragraphs: [
                        "At Ovanthra, we believe that the next frontier of intelligence is not measured in parameters, but in principles. The deployment of large-scale models across enterprise environments necessitates a rigorous framework for alignment—ensuring that machine outputs remain strictly within the bounds of human intent and institutional values.",
                    ],
                },
                {
                    heading: "The Alignment Architecture",
                    paragraphs: [
                        "Traditional approaches to AI safety often rely on post-hoc filtering. However, for a global enterprise, safety must be intrinsic. We advocate for a 'constitutional' approach to model design, where ethical guidelines are embedded into the training objective itself. This ensures that the model's fundamental drives are aligned with safety protocols from inception.",
                    ],
                },
                {
                    quote: {
                        text: "True intelligence is not just about processing speed; it is about the structural integrity of the decision-making process.",
                        attribution: "Ovanthra Annual Letter",
                    },
                },
                {
                    paragraphs: [
                        "This structural integrity requires a shift in how we view data ingestion. It is no longer sufficient to consume vast quantities of unstructured information. We must curate, sanitize, and verify. The quality of the input dictates the morality of the output.",
                    ],
                },
                {
                    heading: "Key Pillars of Ethical Deployment",
                    list: [
                        {
                            icon: "check_circle",
                            title: "Traceability",
                            description:
                                "Every decision made by the AI must be traceable back to its data source and logic path, allowing for complete audit trails.",
                        },
                        {
                            icon: "check_circle",
                            title: "Bias Mitigation",
                            description:
                                "Active monitoring systems that detect and neutralize statistical deviations in real-time before they impact downstream users.",
                        },
                        {
                            icon: "check_circle",
                            title: "Human Oversight",
                            description:
                                "Critical thresholds where automated systems defer to human experts, ensuring accountability in high-stakes scenarios.",
                        },
                    ],
                },
                {
                    paragraphs: [
                        "The organizations that will define the next decade are those that treat AI not as a tool, but as a partner that requires guidance, governance, and clearly defined boundaries. By prioritizing ethical architecture, we build systems that are not only powerful but enduring.",
                    ],
                },
            ],
        },
        relatedPosts: [
            "sovereign-ai-roadmap",
            "edge-computing-ai",
            "federated-intelligence-v24",
        ],
    },
    {
        slug: "edge-computing-ai",
        category: "AI Research",
        title: "Deep Learning and the Edge: The Next Frontier",
        excerpt:
            "Moving powerful inference closer to the data source. How edge-native AI is reducing latency and enhancing data security for manufacturing.",
        author: {
            name: "Dr. James Liu",
            initials: "JL",
            role: "Director of AI Research",
        },
        date: "Oct 24, 2024",
        readTime: "10 min read",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCSw1pXMPYUM9sqet9ik4Y85Npa-IQm2FHLKThrz1wCmrkTD595_nLThFmMpT7XyZT9f8WZpTygGpxdSEAPQ5_861QBz7BBYSx6tcyC5zjCSxOp5FBGjV4_nVyedmRyJCwUfMQTg14fgYZn-YXeVNa-m6yA9UkVSlYpFeoicK_TekgscI63wDmxkqMsca0ErPcJovuU3ujheFH5trIU1McIqAt3qaAWLQJuCc-MxJT8xA2I4TvmLzbiGejAFHcRHU-xTrNwBUAdC9ik",
        featured: false,
        tags: ["AI Research", "Edge Computing", "Manufacturing"],
        content: {
            intro:
                "The next wave of AI deployment is happening at the edge—where data is generated, decisions must be made in milliseconds, and connectivity cannot be guaranteed. Edge AI represents a fundamental shift in how we architect intelligent systems.",
            sections: [
                {
                    paragraphs: [
                        "Traditional cloud-based AI architectures introduce latency that is unacceptable in time-critical applications. Manufacturing floors, autonomous vehicles, and medical devices require inference times measured in single-digit milliseconds—a threshold impossible to meet when data must travel to remote data centers and back.",
                    ],
                },
                {
                    heading: "The Edge Advantage",
                    paragraphs: [
                        "By deploying models directly on edge devices, we eliminate network latency entirely. But the benefits extend beyond speed. Edge AI enhances data privacy by keeping sensitive information local, reduces bandwidth costs, and enables operation in environments with intermittent connectivity.",
                        "However, edge deployment introduces new challenges: limited computational resources, power constraints, and the need for models that can operate efficiently on specialized hardware.",
                    ],
                },
                {
                    heading: "Model Optimization Strategies",
                    list: [
                        {
                            icon: "check_circle",
                            title: "Quantization",
                            description:
                                "Reducing model precision from 32-bit to 8-bit or lower without significant accuracy loss.",
                        },
                        {
                            icon: "check_circle",
                            title: "Pruning",
                            description:
                                "Removing redundant neurons and connections to create sparse, efficient networks.",
                        },
                        {
                            icon: "check_circle",
                            title: "Knowledge Distillation",
                            description:
                                "Training smaller 'student' models to replicate the behavior of larger 'teacher' models.",
                        },
                    ],
                },
                {
                    paragraphs: [
                        "The future of AI is distributed. As edge devices become more capable and models become more efficient, we'll see a new paradigm emerge: hybrid architectures that leverage both cloud and edge, dynamically routing tasks based on latency requirements, data sensitivity, and available computational resources.",
                    ],
                },
            ],
        },
        relatedPosts: [
            "measuring-roi-generative-era",
            "federated-intelligence-v24",
            "ethical-ai-future",
        ],
    },
    {
        slug: "measuring-roi-generative-era",
        category: "Enterprise Strategy",
        title: "Measuring ROI in the Generative Era",
        excerpt:
            "Beyond the hype: A framework for CFOs to evaluate the actual productivity gains from implementing large-scale language models.",
        author: {
            name: "Patricia Morales",
            initials: "PM",
            role: "Chief Financial Officer",
        },
        date: "Oct 21, 2024",
        readTime: "9 min read",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDTTGzsx9sLqyOYsWPaxcLEc-RQ_Y3e7gpg0fDPPdGkp5cLuydJeTdB7SrGp0HCn9D_8qGQbsWs8Whn2E4GeVm8HEtI0pTI67J_KaMKt7OcIkZRZkyAMlyVB4iG_uhx21bVKY9auvlAIOA0zLQ4qYzkmKzbTuin-SajX0MVj_4NuEgNcesBeOc3JMWp1h3jHLst1rBooNUgk6pOFDPznKmQUMei1FFi_kSp-Dz000qEo8BV_wWOAikeI7aD5YY0j_wpiiE-QiRmA1vK",
        featured: false,
        tags: ["ROI", "Enterprise Strategy", "Generative AI"],
        content: {
            intro:
                "The boardroom question is no longer whether to adopt generative AI, but how to measure its business impact. As CFOs navigate budget allocations for AI initiatives, they need frameworks that go beyond vendor promises to quantify real productivity gains.",
            sections: [
                {
                    paragraphs: [
                        "Traditional ROI calculations fall short when applied to generative AI. Unlike conventional software investments with clear per-seat licensing costs and defined functionality, LLMs introduce variable costs, emergent capabilities, and productivity benefits that materialize across unexpected workflows.",
                    ],
                },
                {
                    heading: "A New Framework for AI ROI",
                    paragraphs: [
                        "We propose a three-tier evaluation framework: efficiency gains, capability expansion, and strategic optionality. Each tier requires different metrics and measurement horizons.",
                    ],
                },
                {
                    heading: "Measurement Tiers",
                    list: [
                        {
                            icon: "check_circle",
                            title: "Tier 1: Efficiency Gains",
                            description:
                                "Direct time savings in existing workflows. Measurable within weeks of deployment through before/after time studies.",
                        },
                        {
                            icon: "check_circle",
                            title: "Tier 2: Capability Expansion",
                            description:
                                "Enablement of tasks previously outsourced or not performed. Measured through project completion rates and quality metrics.",
                        },
                        {
                            icon: "check_circle",
                            title: "Tier 3: Strategic Optionality",
                            description:
                                "Creation of new business opportunities impossible without AI. Measured through new revenue streams and market positioning.",
                        },
                    ],
                },
                {
                    paragraphs: [
                        "The key insight is that Tier 1 benefits justify the initial investment, but Tiers 2 and 3 determine competitive advantage. Organizations that focus exclusively on cost reduction miss the transformative potential of generative AI.",
                    ],
                },
            ],
        },
        relatedPosts: [
            "federated-intelligence-v24",
            "edge-computing-ai",
            "sovereign-ai-roadmap",
        ],
    },
    {
        slug: "federated-intelligence-v24",
        category: "Product Updates",
        title: "Ovanthra Core v2.4: Federated Intelligence",
        excerpt:
            "Introducing cross-departmental secure training. Our latest update allows for shared learning without moving raw data from silos.",
        author: {
            name: "Dev Team",
            initials: "OV",
            role: "Engineering",
        },
        date: "Oct 18, 2024",
        readTime: "6 min read",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-2HJi8LS67gpLelhJk5Z952jjv7RiX7S7sc8GWYbzdPHRsM45O4mm_TJTKDbdxMnRkK1kFBbabwsEnF-Ae_NOE9-ER-Tzh9NpNIRJUNGqjkYPDdXcCo5aP1PsRUa7sD0UM3xzi4oezNY_-2NL7C4gvzQTOU_vNlNXNc8FcJd9KiXmg6KquT7KEW76qVbgF7LKxzCo913rIq8IWfWzJKcz70d-CAMekYaqFKnsLZBmuuE2s8kjPW2MBojHMNFu5x6nRrGnUimtrPuw",
        featured: false,
        tags: ["Product Updates", "Federated Learning", "Security"],
        content: {
            intro:
                "We're excited to announce Ovanthra Core v2.4, featuring our most significant update to date: enterprise-grade federated learning capabilities that enable secure, collaborative AI training across departmental boundaries.",
            sections: [
                {
                    paragraphs: [
                        "In traditional enterprise AI deployments, data silos pose a fundamental challenge. Regulatory requirements, privacy concerns, and organizational politics prevent the consolidation of data necessary for training powerful models. Federated learning solves this by bringing the model to the data, rather than the reverse.",
                    ],
                },
                {
                    heading: "How It Works",
                    paragraphs: [
                        "Instead of centralizing data, each department trains a local copy of the model on their own data. Only model updates—encrypted gradients and parameters—are shared with a central coordinator. This coordinator aggregates the updates to improve the global model, which is then distributed back to participants for the next training round.",
                        "The result: a model that learns from diverse, distributed datasets while raw data never leaves its originating department.",
                    ],
                },
                {
                    heading: "Key Features",
                    list: [
                        {
                            icon: "check_circle",
                            title: "Differential Privacy",
                            description:
                                "Built-in noise injection protects individual data points from reconstruction attacks.",
                        },
                        {
                            icon: "check_circle",
                            title: "Secure Aggregation",
                            description:
                                "Encrypted gradient sharing ensures no single party can inspect another's training updates.",
                        },
                        {
                            icon: "check_circle",
                            title: "Fault Tolerance",
                            description:
                                "Training continues even when individual nodes drop offline or experience failures.",
                        },
                    ],
                },
                {
                    paragraphs: [
                        "This release represents a fundamental shift in how enterprises can leverage AI while respecting data governance requirements. We're seeing organizations use federated learning to build models across geographies, business units, and even partner networks.",
                    ],
                },
            ],
        },
        relatedPosts: [
            "ethical-ai-future",
            "measuring-roi-generative-era",
            "edge-computing-ai",
        ],
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
    return blogPosts.find((post) => post.featured);
}

export function getRecentPosts(limit: number = 4): BlogPost[] {
    return blogPosts.filter((post) => !post.featured).slice(0, limit);
}

export function getRelatedPosts(currentSlug: string, relatedSlugs: string[]): BlogPost[] {
    return blogPosts.filter(
        (post) => relatedSlugs.includes(post.slug) && post.slug !== currentSlug
    ).slice(0, 3);
}
