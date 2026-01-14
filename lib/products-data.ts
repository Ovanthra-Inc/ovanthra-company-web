export interface Product {
    slug: string;
    name: string;
    category: string;
    icon: string;
    version: string;
    hero: {
        title: string;
        titleHighlight: string;
        description: string;
    };
    capabilities: {
        icon: string;
        title: string;
        description: string;
        features: string[];
    }[];
    integrations: {
        title: string;
        description: string;
        platforms: { icon: string; name: string }[];
    };
    specs: {
        deployment: { label: string; value: string }[];
        performance: { label: string; value: string }[];
        compliance: { label: string; value: string }[];
        support: { label: string; value: string }[];
    };
    cta: {
        title: string;
        description: string;
    };
}

export const productsData: Product[] = [
    {
        slug: "ovanthra-core",
        name: "Ovanthra Core",
        category: "Infrastructure",
        icon: "hub",
        version: "v2.4",
        hero: {
            title: "Transform Enterprise Data into",
            titleHighlight: "Actionable Strategy",
            description:
                "Ovanthra Core is the central nervous system for intelligent enterprises. Unify disparate data streams into a single source of truth.",
        },
        capabilities: [
            {
                icon: "dataset",
                title: "Unified Data Ingestion",
                description:
                    "Automatically normalize structured and unstructured data from over 200+ enterprise sources into a coherent knowledge graph.",
                features: ["Real-time streaming", "Schema-less flexibility"],
            },
            {
                icon: "psychology",
                title: "Predictive Modeling",
                description:
                    "Deploy pre-trained proprietary models that detect anomalies and forecast market shifts with 94.8% tested accuracy.",
                features: ["Automated retraining", "Explainability built-in"],
            },
            {
                icon: "security",
                title: "Governance & Security",
                description:
                    "Enterprise-grade role-based access control (RBAC) and audit trails ensure your intelligence remains strictly confidential.",
                features: ["SOC2 Type II Compliant", "Field-level encryption"],
            },
        ],
        integrations: {
            title: "Works with your stack. Not against it.",
            description:
                "Ovanthra Core acts as the intelligence layer on top of your existing infrastructure. Connect directly to your data lakes, CRMs, and ERP systems without disrupting daily operations.",
            platforms: [
                { icon: "cloud", name: "AWS & Azure" },
                { icon: "database", name: "Snowflake" },
                { icon: "hub", name: "Salesforce" },
                { icon: "api", name: "REST & GraphQL" },
            ],
        },
        specs: {
            deployment: [
                { label: "Containerization", value: "Docker / Kubernetes" },
                { label: "Environment", value: "Hybrid / On-Prem / Cloud" },
                { label: "Scalability", value: "Auto-scaling clusters" },
            ],
            performance: [
                { label: "API Response", value: "< 45ms (p99)" },
                { label: "Event Processing", value: "100k events/sec" },
                { label: "Uptime SLA", value: "99.99% Guaranteed" },
            ],
            compliance: [
                { label: "Data Residency", value: "Multi-region support" },
                { label: "GDPR / CCPA", value: "Native handling tools" },
            ],
            support: [
                { label: "Tier", value: "24/7 Dedicated Engineering" },
                { label: "Integration", value: "Assisted Onboarding" },
            ],
        },
        cta: {
            title: "Ready to transform your data landscape?",
            description:
                "Experience the power of Ovanthra Core firsthand. Schedule a personalized walkthrough with our product specialists.",
        },
    },
    {
        slug: "nexus-analytics",
        name: "Nexus Analytics",
        category: "Intelligence",
        icon: "insights",
        version: "v3.1",
        hero: {
            title: "Turn Complex Data into",
            titleHighlight: "Predictive Clarity",
            description:
                "Nexus Analytics leverages deep learning to transform raw datasets into actionable forecasts, enabling proactive decision-making.",
        },
        capabilities: [
            {
                icon: "monitoring",
                title: "Market Trend Forecasting",
                description:
                    "Analyze historical patterns and external indicators to predict market movements with industry-leading precision.",
                features: ["Multi-variate analysis", "Seasonal adjustments"],
            },
            {
                icon: "query_stats",
                title: "Operational Efficiency",
                description:
                    "Identify bottlenecks and optimization opportunities across your value chain using automated workflow analysis.",
                features: ["Resource optimization", "Cost reduction insights"],
            },
            {
                icon: "speed",
                title: "Real-Time Dashboards",
                description:
                    "Visualize KPIs and metrics in customizable, interactive dashboards that update in real-time.",
                features: ["Drag-and-drop builder", "Mobile responsive"],
            },
        ],
        integrations: {
            title: "Connect to your data ecosystem",
            description:
                "Nexus seamlessly integrates with BI tools, data warehouses, and streaming platforms to provide unified analytics.",
            platforms: [
                { icon: "analytics", name: "Tableau & Power BI" },
                { icon: "database", name: "BigQuery" },
                { icon: "stream", name: "Kafka" },
                { icon: "api", name: "Custom APIs" },
            ],
        },
        specs: {
            deployment: [
                { label: "Deployment Model", value: "SaaS / Self-Hosted" },
                { label: "Infrastructure", value: "Cloud-native architecture" },
                { label: "Compute", value: "GPU-accelerated processing" },
            ],
            performance: [
                { label: "Query Latency", value: "< 200ms average" },
                { label: "Data Refresh", value: "Every 30 seconds" },
                { label: "Concurrent Users", value: "10,000+ supported" },
            ],
            compliance: [
                { label: "Data Privacy", value: "GDPR & HIPAA ready" },
                { label: "Audit Trails", value: "Comprehensive logging" },
            ],
            support: [
                { label: "Support Hours", value: "24/7 Global coverage" },
                { label: "Onboarding", value: "Dedicated analyst team" },
            ],
        },
        cta: {
            title: "Unlock the power of predictive analytics",
            description:
                "See how Nexus Analytics can transform your data into strategic insights. Book a demo with our team.",
        },
    },
    {
        slug: "sentinel-security",
        name: "Sentinel Security",
        category: "Security",
        icon: "shield_lock",
        version: "v1.8",
        hero: {
            title: "Real-Time Threat Detection with",
            titleHighlight: "Ethical Guardrails",
            description:
                "Sentinel Security ensures your AI operations remain secure, compliant, and aligned with your organization's values.",
        },
        capabilities: [
            {
                icon: "gpp_maybe",
                title: "Anomaly Detection",
                description:
                    "Identify unusual patterns in system behavior and flag potential security breaches before they escalate.",
                features: ["Behavioral analysis", "Automated alerts"],
            },
            {
                icon: "verified_user",
                title: "Compliance Monitoring",
                description:
                    "Continuously validate that AI outputs adhere to regulatory requirements and internal policies.",
                features: ["GDPR compliance", "Audit-ready reports"],
            },
            {
                icon: "policy",
                title: "Access Control",
                description:
                    "Granular role-based permissions ensure only authorized personnel can access sensitive AI models and data.",
                features: ["Multi-factor auth", "IP whitelisting"],
            },
        ],
        integrations: {
            title: "Integrate with your security stack",
            description:
                "Sentinel works alongside your existing SIEM, IAM, and monitoring tools to provide comprehensive protection.",
            platforms: [
                { icon: "security", name: "Okta & Auth0" },
                { icon: "shield", name: "Splunk" },
                { icon: "vpn_key", name: "AWS IAM" },
                { icon: "api", name: "REST APIs" },
            ],
        },
        specs: {
            deployment: [
                { label: "Architecture", value: "Zero-trust framework" },
                { label: "Deployment", value: "On-prem / Cloud hybrid" },
                { label: "Updates", value: "Automated security patches" },
            ],
            performance: [
                { label: "Threat Detection", value: "< 5 second response" },
                { label: "Event Throughput", value: "500k events/sec" },
                { label: "Alert Accuracy", value: "99.5% precision" },
            ],
            compliance: [
                { label: "Certifications", value: "ISO 27001, SOC2" },
                { label: "Encryption", value: "AES-256 at rest & transit" },
            ],
            support: [
                { label: "Incident Response", value: "Priority escalation" },
                { label: "Security Advisories", value: "Proactive notifications" },
            ],
        },
        cta: {
            title: "Protect your AI infrastructure",
            description:
                "Schedule a security assessment with our specialists to see how Sentinel can safeguard your operations.",
        },
    },
    {
        slug: "cognitive-mesh",
        name: "Cognitive Mesh",
        category: "Intelligence",
        icon: "neurology",
        version: "v2.0",
        hero: {
            title: "Human-Like Interaction at",
            titleHighlight: "Enterprise Scale",
            description:
                "Cognitive Mesh delivers NLP that understands context, tone, and intent, powering intelligent automation and conversational AI.",
        },
        capabilities: [
            {
                icon: "chat",
                title: "Conversational AI",
                description:
                    "Build sophisticated chatbots and virtual assistants that understand nuanced language and deliver personalized responses.",
                features: ["Multi-language support", "Context retention"],
            },
            {
                icon: "text_snippet",
                title: "Document Intelligence",
                description:
                    "Extract insights from contracts, reports, and unstructured text using advanced entity recognition and summarization.",
                features: ["Named Entity Recognition", "Auto-summarization"],
            },
            {
                icon: "sentiment_satisfied",
                title: "Sentiment Analysis",
                description:
                    "Gauge customer sentiment from reviews, surveys, and social media to inform product and service improvements.",
                features: ["Emotion detection", "Trend identification"],
            },
        ],
        integrations: {
            title: "Seamlessly integrate language AI",
            description:
                "Cognitive Mesh connects with CRM platforms, customer support tools, and content management systems.",
            platforms: [
                { icon: "support_agent", name: "Zendesk & Intercom" },
                { icon: "hub", name: "HubSpot CRM" },
                { icon: "cloud", name: "Google Cloud NLP" },
                { icon: "api", name: "Webhook API" },
            ],
        },
        specs: {
            deployment: [
                { label: "Model Type", value: "Transformer-based LLMs" },
                { label: "Hosting", value: "Cloud or self-hosted" },
                { label: "Customization", value: "Fine-tuning support" },
            ],
            performance: [
                { label: "Response Time", value: "< 300ms per query" },
                { label: "Accuracy", value: "92% intent classification" },
                { label: "Throughput", value: "50k requests/min" },
            ],
            compliance: [
                { label: "Data Privacy", value: "PII redaction built-in" },
                { label: "Model Bias", value: "Fairness testing included" },
            ],
            support: [
                { label: "NLP Expertise", value: "Dedicated linguists" },
                { label: "Model Training", value: "Assisted fine-tuning" },
            ],
        },
        cta: {
            title: "Elevate customer interactions",
            description:
                "Discover how Cognitive Mesh can enhance your customer experience. Request a personalized demo.",
        },
    },
    {
        slug: "aegis-vault",
        name: "Aegis Vault",
        category: "Security",
        icon: "fingerprint",
        version: "v1.5",
        hero: {
            title: "Immutable Data Sovereignty for",
            titleHighlight: "Intellectual Property",
            description:
                "Aegis Vault protects your most sensitive data with military-grade encryption and access controls designed for zero-trust environments.",
        },
        capabilities: [
            {
                icon: "encrypted",
                title: "End-to-End Encryption",
                description:
                    "All data is encrypted at rest and in transit using AES-256 and TLS 1.3, ensuring maximum protection against breaches.",
                features: ["Hardware security modules", "Key rotation policies"],
            },
            {
                icon: "published_with_changes",
                title: "Version Control",
                description:
                    "Track every change to your data with immutable audit logs and rollback capabilities for regulatory compliance.",
                features: ["Blockchain-verified logs", "Time-travel queries"],
            },
            {
                icon: "vpn_lock",
                title: "Zero-Trust Architecture",
                description:
                    "Every access request is verified and authenticated, ensuring only authorized users can decrypt and view sensitive information.",
                features: ["Biometric authentication", "Geo-fencing controls"],
            },
        ],
        integrations: {
            title: "Secure your data ecosystem",
            description:
                "Aegis Vault integrates with cloud storage providers, databases, and enterprise file systems to provide unified protection.",
            platforms: [
                { icon: "cloud", name: "AWS S3 & Azure Blob" },
                { icon: "database", name: "PostgreSQL" },
                { icon: "folder", name: "SharePoint" },
                { icon: "api", name: "RESTful APIs" },
            ],
        },
        specs: {
            deployment: [
                { label: "Encryption", value: "AES-256, RSA-4096" },
                { label: "Key Management", value: "HSM-backed vaults" },
                { label: "Deployment", value: "Air-gapped or cloud" },
            ],
            performance: [
                { label: "Encryption Speed", value: "10 GB/s throughput" },
                { label: "Access Latency", value: "< 100ms" },
                { label: "Storage Overhead", value: "< 5% increase" },
            ],
            compliance: [
                { label: "Standards", value: "FIPS 140-2, Common Criteria" },
                { label: "Certifications", value: "SOC2, ISO 27001" },
            ],
            support: [
                { label: "Security Team", value: "24/7 incident response" },
                { label: "Threat Intel", value: "Weekly briefings" },
            ],
        },
        cta: {
            title: "Fortress-level data protection",
            description:
                "Protect your critical assets with Aegis Vault. Schedule a security consultation today.",
        },
    },
    {
        slug: "quantum-bridge",
        name: "Quantum Bridge",
        category: "Infrastructure",
        icon: "speed",
        version: "v1.2",
        hero: {
            title: "Ultra-Low Latency Pipelines for",
            titleHighlight: "Mission-Critical Systems",
            description:
                "Quantum Bridge delivers real-time data streaming optimized for high-frequency trading, industrial IoT, and edge computing.",
        },
        capabilities: [
            {
                icon: "flash_on",
                title: "Sub-Millisecond Latency",
                description:
                    "Purpose-built for applications where every microsecond counts, delivering unparalleled speed and reliability.",
                features: ["Hardware acceleration", "Kernel bypass networking"],
            },
            {
                icon: "router",
                title: "Edge Computing Support",
                description:
                    "Deploy processing logic at the edge to reduce round-trip times and enable real-time decision-making.",
                features: ["Distributed nodes", "Local inference"],
            },
            {
                icon: "sync_alt",
                title: "Event Streaming",
                description:
                    "Stream millions of events per second with guaranteed ordering and exactly-once semantics.",
                features: ["Kafka-compatible", "Custom protocols"],
            },
        ],
        integrations: {
            title: "High-speed integrations",
            description:
                "Quantum Bridge connects to trading platforms, IoT gateways, and real-time databases for seamless data flow.",
            platforms: [
                { icon: "candlestick_chart", name: "FIX Protocol" },
                { icon: "sensors", name: "MQTT & CoAP" },
                { icon: "database", name: "TimescaleDB" },
                { icon: "api", name: "gRPC" },
            ],
        },
        specs: {
            deployment: [
                { label: "Architecture", value: "Distributed edge nodes" },
                { label: "Network", value: "RDMA & InfiniBand support" },
                { label: "Scalability", value: "Horizontal auto-scaling" },
            ],
            performance: [
                { label: "Latency (p99)", value: "< 500 microseconds" },
                { label: "Throughput", value: "10M events/sec" },
                { label: "Jitter", value: "< 50 microseconds" },
            ],
            compliance: [
                { label: "Financial Regs", value: "MiFID II compliant" },
                { label: "Data Integrity", value: "CRC validation" },
            ],
            support: [
                { label: "SLA", value: "99.999% uptime guarantee" },
                { label: "Engineering", value: "White-glove onboarding" },
            ],
        },
        cta: {
            title: "Accelerate your data pipelines",
            description:
                "See Quantum Bridge in action. Request a performance benchmark tailored to your use case.",
        },
    },
];
