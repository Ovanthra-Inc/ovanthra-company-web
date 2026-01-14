export interface IntelligenceInsight {
    slug: string;
    category: string;
    title: string;
    description: string;
    image: string;
    hero: {
        status: string;
        statusColor: string;
        headline: string;
        subheadline: string;
        downloadLabel: string;
        secondaryCta: string;
    };
    compliance: {
        title: string;
        subtitle: string;
        description: string;
        certifications: Array<{
            icon: string;
            name: string;
            description: string;
        }>;
    };
    dataProtection: {
        title: string;
        subtitle: string;
        atRest: {
            icon: string;
            title: string;
            features: string[];
        };
        inTransit: {
            icon: string;
            title: string;
            features: string[];
        };
    };
    accessControl: {
        title: string;
        subtitle: string;
        description: string;
        features: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    };
    technicalDueDiligence: {
        title: string;
        description: string;
        downloadLabel: string;
        secondaryCta: string;
    };
}

export const intelligenceInsights: IntelligenceInsight[] = [
    {
        slug: "enterprise-trust-architecture",
        category: "Industry Report",
        title: "The Architecture of Enterprise Trust in Generative AI",
        description:
            "Examining the critical security frameworks required to deploy LLMs within regulated industries without compromising data sovereignty.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBReJKjnU57NUTBPHAd2wbXGYjvtTHErUdKdzwyUwEiRCMOE-PWgScHatVWSL5hgYcRR6YvmruvD761KrB9IJ7TWRD0wqiP8hbFpsAVlM6cE-k5HtxLzKJj_RsXxPZPbj_nRMmui7nvr21dY55zASynwaSu9Yw-z-fqr0Tbi3peYtHDgQZeVgpPRYmoGSakzQKtsT1WdaaNKdA3gT70j7-xFrLWbF6FyfOzlcTLUo2_l-vhPC5v__eEAkWIs9BACi1mWT8uR4S-uhPp",
        hero: {
            status: "System Status: Operational & Secure",
            statusColor: "emerald",
            headline: "Security First, by Design.",
            subheadline:
                "Our platform is architected with a defense-in-depth approach, ensuring that your enterprise data remains sovereign, encrypted, and compliant at every layer of the stack.",
            downloadLabel: "Download Security Whitepaper",
            secondaryCta: "View Compliance Center",
        },
        compliance: {
            title: "Compliance",
            subtitle: "Global Standards & Certifications",
            description:
                "We undergo rigorous annual audits to ensure our controls meet the highest international standards for information security and privacy.",
            certifications: [
                {
                    icon: "verified_user",
                    name: "SOC 2 Type II",
                    description:
                        "Annual audit verifying security, availability, and confidentiality controls.",
                },
                {
                    icon: "shield",
                    name: "ISO 27001",
                    description: "Certified Information Security Management System (ISMS).",
                },
                {
                    icon: "lock",
                    name: "GDPR",
                    description: "Full compliance with EU General Data Protection Regulation.",
                },
                {
                    icon: "medical_services",
                    name: "HIPAA",
                    description: "Safeguards for Protected Health Information (PHI).",
                },
                {
                    icon: "gavel",
                    name: "CCPA",
                    description:
                        "Compliance with California Consumer Privacy Act standards.",
                },
                {
                    icon: "cloud_done",
                    name: "CSA STAR",
                    description: "Cloud Security Alliance registry level 1 assessment.",
                },
            ],
        },
        dataProtection: {
            title: "Data Protection",
            subtitle: "End-to-End Encryption",
            atRest: {
                icon: "hard_drive",
                title: "Data at Rest",
                features: [
                    "AES-256 encryption for all data volumes, object storage, and backups.",
                    "Customer-managed encryption keys (CMEK) via AWS KMS.",
                    "Strict cryptographic separation between tenants in multi-tenant environments.",
                ],
            },
            inTransit: {
                icon: "swap_calls",
                title: "Data in Transit",
                features: [
                    "TLS 1.3 enforced for all internal and external network traffic.",
                    "Certificate pinning and Perfect Forward Secrecy (PFS) enabled.",
                    "Private connectivity options via AWS PrivateLink and Azure Private Link.",
                ],
            },
        },
        accessControl: {
            title: "Access Control",
            subtitle: "Enterprise Identity Management",
            description:
                "Seamlessly integrate Ovanthra with your existing identity infrastructure. We support all major Identity Providers (IdP) to ensure secure, streamlined access for your teams.",
            features: [
                {
                    icon: "badge",
                    title: "SSO & SAML 2.0",
                    description:
                        "Turnkey integration with Okta, Azure AD, OneLogin, and Google Workspace.",
                },
                {
                    icon: "group_add",
                    title: "Granular RBAC",
                    description:
                        "Define precise permissions with custom roles to enforce least-privilege access policies.",
                },
                {
                    icon: "phonelink_lock",
                    title: "MFA Enforcement",
                    description:
                        "Mandatory multi-factor authentication for all administrative access.",
                },
            ],
        },
        technicalDueDiligence: {
            title: "Technical Due Diligence",
            description:
                "Download our comprehensive Security Whitepaper for a deep dive into our infrastructure, penetration testing results, and compliance controls. Designed for CTOs and Security Architects.",
            downloadLabel: "Download Whitepaper (PDF)",
            secondaryCta: "Contact Security Team",
        },
    },
    {
        slug: "ethical-alignment-neural-networks",
        category: "AI Ethics",
        title: "Beyond Compliance: Ethical Alignment in Neural Networks",
        description:
            "How organizations can embed core values directly into model weights to ensure alignment with corporate governance standards.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuByJKwsfQd1Xlo61jEWVy4FLr0QkRpg08UEjYQwVo4Mie2s7lv_PpTCUTUFyxaofVSb91KUnOSldFhUVjfAglYBhi6wL2gb_7ozfe3tEx2NzriWoSt1cXgx_aDIclYCkYPRXZJCnjyOh8HBA7y69AlnK_2A4IMI28BZKJby1-zjtDENIH_nP7yt-62A5jJnzMB3YG4MJGRMkwMTXlsg47mNB4To25F8lxdqdE-SmYBd0SY5NzKnS3Knsn_KcP8lpoFxXz21-spAmT-T",
        hero: {
            status: "Research Status: Actively Publishing",
            statusColor: "blue",
            headline: "Ethical AI, by Principle.",
            subheadline:
                "Our research explores how organizations can systematically embed ethical principles and corporate values into AI systems, ensuring alignment with governance standards beyond mere regulatory compliance.",
            downloadLabel: "Download Research Paper",
            secondaryCta: "View Ethics Framework",
        },
        compliance: {
            title: "Ethics Framework",
            subtitle: "Core Principles & Standards",
            description:
                "We've developed a comprehensive ethical framework that guides AI development, ensuring fairness, transparency, and accountability at every stage.",
            certifications: [
                {
                    icon: "psychology",
                    name: "Bias Mitigation",
                    description:
                        "Systematic detection and correction of algorithmic bias across protected classes.",
                },
                {
                    icon: "visibility",
                    name: "Transparency",
                    description:
                        "Clear documentation of model decisions and training data provenance.",
                },
                {
                    icon: "balance",
                    name: "Fairness Metrics",
                    description:
                        "Quantifiable fairness assessment across demographic segments.",
                },
                {
                    icon: "account_balance",
                    name: "Governance",
                    description:
                        "Structured oversight committees and ethical review processes.",
                },
                {
                    icon: "policy",
                    name: "Policy Alignment",
                    description:
                        "Integration with existing corporate ethics and compliance policies.",
                },
                {
                    icon: "gpp_good",
                    name: "Value Encoding",
                    description:
                        "Direct embedding of organizational values into model architectures.",
                },
            ],
        },
        dataProtection: {
            title: "Privacy Protection",
            subtitle: "Ethical Data Handling",
            atRest: {
                icon: "encrypted",
                title: "Privacy Preservation",
                features: [
                    "Differential privacy techniques to protect individual data points.",
                    "Federated learning for distributed training without data centralization.",
                    "Automated PII detection and redaction in training datasets.",
                ],
            },
            inTransit: {
                icon: "shield_locked",
                title: "Secure Processing",
                features: [
                    "Homomorphic encryption for computation on encrypted data.",
                    "Zero-knowledge proofs for model validation without data exposure.",
                    "Secure multi-party computation for collaborative training.",
                ],
            },
        },
        accessControl: {
            title: "Governance Controls",
            subtitle: "Ethical Oversight Mechanisms",
            description:
                "Implement robust governance structures to ensure AI systems remain aligned with organizational values and ethical principles throughout their lifecycle.",
            features: [
                {
                    icon: "groups",
                    title: "Ethics Committees",
                    description:
                        "Cross-functional review boards evaluating AI initiatives for ethical implications.",
                },
                {
                    icon: "fact_check",
                    title: "Audit Trails",
                    description:
                        "Comprehensive logging of model decisions for accountability and review.",
                },
                {
                    icon: "report",
                    title: "Impact Assessments",
                    description:
                        "Mandatory ethical impact assessments before deployment of AI systems.",
                },
            ],
        },
        technicalDueDiligence: {
            title: "Research Collaboration",
            description:
                "Access our latest research on ethical AI alignment and join our collaborative network of organizations working to establish industry-wide ethical standards.",
            downloadLabel: "Download Research Paper (PDF)",
            secondaryCta: "Join Ethics Consortium",
        },
    },
    {
        slug: "enterprise-roadmap-2025",
        category: "Strategic Forecast",
        title: "Scaling Intelligence: The 2025 Enterprise Roadmap",
        description:
            "A forward-looking analysis of hardware constraints, model distillation, and the next wave of industrial automation.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB9DuWcMWr2nxTgKBeJ7r_NqqdtEXNnGu8wNOInQ709x6sFpEs2PlfQkyR_UxQxkeff5C2QKfarzwZUustmk6iFxZC7LVN6CuEL4Hx4VyqvSJ_BMot5svWBu-3chRyh6R6CCoIJiOejFUJ7fBZH_p7dm_9Fwszjoc62S1w6vB2faMxFT8waigFeQfhoEDpQcfApkAYBfkL0ZL6JqcD8JX6g-PRaWUeMR-WVI524GzrdZEm_zYNrhK82_iaLs9eanv7IQbvCaslHsGh9",
        hero: {
            status: "Forecast Status: 2025 Outlook",
            statusColor: "purple",
            headline: "The Future of Enterprise AI.",
            subheadline:
                "Our strategic forecast examines emerging trends in AI infrastructure, model optimization, and industrial automation, providing enterprise leaders with actionable insights for 2025 and beyond.",
            downloadLabel: "Download Strategic Report",
            secondaryCta: "Watch Executive Briefing",
        },
        compliance: {
            title: "Technology Trends",
            subtitle: "Key Innovation Areas",
            description:
                "We've identified six critical technology trends that will shape enterprise AI deployment strategies over the next 24 months.",
            certifications: [
                {
                    icon: "memory",
                    name: "Hardware Evolution",
                    description:
                        "Next-gen AI accelerators and specialized silicon for inference workloads.",
                },
                {
                    icon: "compress",
                    name: "Model Distillation",
                    description:
                        "Advanced techniques for compressing large models without accuracy loss.",
                },
                {
                    icon: "precision_manufacturing",
                    name: "Industrial Automation",
                    description:
                        "AI-driven process optimization and autonomous systems in manufacturing.",
                },
                {
                    icon: "hub",
                    name: "Edge Computing",
                    description:
                        "Distributed inference capabilities for low-latency applications.",
                },
                {
                    icon: "trending_up",
                    name: "Multimodal Models",
                    description:
                        "Integration of vision, language, and structured data in unified architectures.",
                },
                {
                    icon: "auto_awesome",
                    name: "AutoML Evolution",
                    description:
                        "Automated model selection and hyperparameter optimization at scale.",
                },
            ],
        },
        dataProtection: {
            title: "Infrastructure Trends",
            subtitle: "Next-Generation Architecture",
            atRest: {
                icon: "storage",
                title: "Storage Innovation",
                features: [
                    "Tiered storage strategies optimizing for hot/warm/cold model access patterns.",
                    "Vector databases for efficient similarity search and retrieval.",
                    "Compressed model formats reducing storage footprint by 80%.",
                ],
            },
            inTransit: {
                icon: "network_check",
                title: "Network Optimization",
                features: [
                    "5G and edge deployment for ultra-low latency inference.",
                    "Model sharding techniques for distributed deployment.",
                    "Adaptive bandwidth management for dynamic model delivery.",
                ],
            },
        },
        accessControl: {
            title: "Operational Excellence",
            subtitle: "Enterprise Deployment Strategies",
            description:
                "Adopt proven strategies for scaling AI operations across your organization, from pilot projects to production-grade deployments serving millions of users.",
            features: [
                {
                    icon: "rocket_launch",
                    title: "Rapid Deployment",
                    description:
                        "Containerized models and CI/CD pipelines for fast iteration cycles.",
                },
                {
                    icon: "monitoring",
                    title: "Observability",
                    description:
                        "Real-time monitoring of model performance, drift, and resource utilization.",
                },
                {
                    icon: "autorenew",
                    title: "Continuous Learning",
                    description:
                        "Automated retraining pipelines to maintain model accuracy over time.",
                },
            ],
        },
        technicalDueDiligence: {
            title: "Strategic Planning",
            description:
                "Download our comprehensive 2025 roadmap to understand how emerging technologies will impact your AI strategy and what investments to prioritize for competitive advantage.",
            downloadLabel: "Download Roadmap (PDF)",
            secondaryCta: "Schedule Strategy Session",
        },
    },
];

export function getIntelligenceInsightBySlug(
    slug: string
): IntelligenceInsight | undefined {
    return intelligenceInsights.find((insight) => insight.slug === slug);
}
