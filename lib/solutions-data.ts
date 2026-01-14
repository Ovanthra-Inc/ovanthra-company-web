export interface Solution {
    slug: string;
    hero: {
        subtitle: string;
        title: string;
        titleHighlight: string;
        description: string;
        stats: {
            items: { label: string; value: string; icon?: string; color?: string }[];
        };
    };
    applications: {
        subtitle: string;
        title: string;
        description: string;
        items: {
            icon: string;
            title: string;
            description: string;
            features: string[];
        }[];
    };
    metrics: {
        subtitle: string;
        title: string;
        description: string;
        stats: { value: string; label: string }[];
    };
    security: {
        subtitle: string;
        title: string;
        description: string;
        items: { icon: string; title: string; description: string }[];
    };
    testimonial: {
        image: string;
        quote: string;
        author: string;
        role: string;
        company: string;
        stats: { value: string; label: string }[];
    };
    cta: {
        title: string;
        description: string;
    };
}

export const solutionsData: Solution[] = [
    {
        slug: "financial-services",
        hero: {
            subtitle: "Financial Services Solutions",
            title: "Precision Intelligence for",
            titleHighlight: "Global Finance.",
            description:
                "Deploy institutional-grade AI models for high-frequency trading, fraud prevention, and regulatory compliance. Built for speed, security, and scale.",
            stats: {
                items: [
                    { label: "Portfolio Alpha", value: "+24.8%" },
                    {
                        label: "Risk Adjusted",
                        value: "1.42 Sharpe",
                        icon: "trending_up",
                        color: "text-emerald-400",
                    },
                ],
            },
        },
        applications: {
            subtitle: "Core Applications",
            title: "Operational Intelligence",
            description:
                "Targeted solutions designed to address the most critical challenges in modern financial ecosystems.",
            items: [
                {
                    icon: "policy",
                    title: "Fraud Detection",
                    description:
                        "Real-time transaction analysis using unsupervised learning to identify anomalies and prevent fraudulent activities before settlement.",
                    features: [
                        "99.8% False Positive Reduction",
                        "<10ms Latency Analysis",
                    ],
                },
                {
                    icon: "candlestick_chart",
                    title: "Algorithmic Trading",
                    description:
                        "Reinforcement learning models that adapt to market volatility, optimizing execution strategies across fragmented liquidity pools.",
                    features: [
                        "Multi-Asset Capability",
                        "Predictive Slippage Control",
                    ],
                },
                {
                    icon: "security",
                    title: "Risk Management",
                    description:
                        "Holistic risk assessment integrating alternative data sources to construct robust credit models and stress-test portfolio resilience.",
                    features: ["Basel III Compliant Models", "Scenario Simulation Engine"],
                },
            ],
        },
        metrics: {
            subtitle: "Performance Metrics",
            title: "Measurable Impact on Bottom Line",
            description:
                "Our financial models aren't just theoretical. We deliver tangible ROI through efficiency gains, loss prevention, and alpha generation. Clients typically see full implementation value within the first quarter.",
            stats: [
                { value: "40%", label: "Reduction in Ops Cost" },
                { value: "3.5x", label: "ROI in Year One" },
            ],
        },
        security: {
            subtitle: "Enterprise Grade Security",
            title: "Compliance Built-in, Not Bolt-on",
            description:
                "We understand the regulatory landscape of financial services. Our platform meets the most stringent international standards for data privacy and security.",
            items: [
                {
                    icon: "verified_user",
                    title: "SOC2 Type II",
                    description:
                        "Audited controls for security, availability, and confidentiality.",
                },
                {
                    icon: "gavel",
                    title: "GDPR Compliant",
                    description:
                        "Full data sovereignty and right-to-be-forgotten architecture.",
                },
                {
                    icon: "lock",
                    title: "AES-256 Encryption",
                    description: "End-to-end encryption for data at rest and in transit.",
                },
                {
                    icon: "cloud_done",
                    title: "ISO 27001",
                    description:
                        "Internationally recognized information security management.",
                },
            ],
        },
        testimonial: {
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC_0sybnD7bhf_bvLPLz5vPSxzw6f10ErdcihW-Nulbd76dLBOo3V_jzvhOgINdb6wyABVTsnu7kXKKVB4IZIQPR9vs6l_P2yvuDfF_Y-fqGkvR43WFX6YxW4ihWOkBBrcMLggGoEr1nKL5fNDKVrRsibXFNzV6kDvpKj8wHo2VPI29Jq20WxSEcny_9Fzg1NHr3l9cMFlUd0LN2dK4WMXx3pC9M6Ch4BVsOfI5by4XdVduIfe0mekmRH_0xVVBZgHvM23GDWmuDrQu",
            quote:
                "Ovanthra's intelligence layer didn't just automate our compliance checks; it fundamentally restructured how we assess risk. We've reduced manual review hours by 70% while improving detection accuracy significantly.",
            author: "James Sterling",
            role: "Chief Risk Officer",
            company: "Vertex Systems",
            stats: [
                { value: "70%", label: "Manual Reduction" },
                { value: "£4.2M", label: "Annual Savings" },
            ],
        },
        cta: {
            title: "Secure your financial infrastructure today.",
            description:
                "Join the leading financial institutions leveraging Ovanthra for competitive advantage. Request a confidential consultation with our sector specialists.",
        },
    },
    {
        slug: "global-healthcare",
        hero: {
            subtitle: "Healthcare Solutions",
            title: "Accelerating Diagnostics for",
            titleHighlight: "Global Health.",
            description:
                "Empowering clinicians with predictive AI that parses medical imaging, genomic data, and patient history to suggest treatments with unprecedented accuracy.",
            stats: {
                items: [
                    { label: "Diagnostic Accuracy", value: "99.2%" },
                    {
                        label: "Time Saved",
                        value: "4.5 Hrs/Case",
                        icon: "schedule",
                        color: "text-blue-400",
                    },
                ],
            },
        },
        applications: {
            subtitle: "Core Applications",
            title: "Clinical Intelligence",
            description:
                "AI-driven tools that integrate seamlessly into hospital workflows, enhancing decision-making without adding complexity.",
            items: [
                {
                    icon: "medical_services",
                    title: "Diagnostic Imaging",
                    description:
                        "Computer vision algorithms that detect anomalies in X-rays, MRIs, and CT scans with higher sensitivity than standard review.",
                    features: ["Early Detection", "Automated Triage"],
                },
                {
                    icon: "genetics",
                    title: "Genomic Analysis",
                    description:
                        "Processing vast genomic datasets to identify potential hereditary risks and personalized treatment pathways.",
                    features: ["Variant Calling", "Pharmacogenomics"],
                },
                {
                    icon: "monitor_heart",
                    title: "Patient Monitoring",
                    description:
                        "IoT integration for real-time patient vitals monitoring, predicting deterioration before critical events occur.",
                    features: ["Predictive Alerts", "Remote Integration"],
                },
            ],
        },
        metrics: {
            subtitle: "Performance Metrics",
            title: "Impact on Patient Outcomes",
            description:
                "By reducing diagnostic errors and speeding up treatment initiation, Ovanthra technology directly contributes to saving lives and improving quality of care.",
            stats: [
                { value: "30%", label: "Readmission Reduction" },
                { value: "2x", label: "Patient Turnover" },
            ],
        },
        security: {
            subtitle: "Enterprise Grade Security",
            title: "HIPAA & GDPR Compliant",
            description:
                "Patient data privacy is paramount. Our systems are built with privacy-by-design principles to ensure full compliance with global health regulations.",
            items: [
                {
                    icon: "verified_user",
                    title: "HIPAA Certified",
                    description: "Full compliance for handling protected health info.",
                },
                {
                    icon: "lock",
                    title: "Zero Trust",
                    description: "Strict identity verification for every access request.",
                },
                {
                    icon: "security",
                    title: "De-identification",
                    description: "Automated PHI removal for research datasets.",
                },
                {
                    icon: "cloud_done",
                    title: "HITRUST CSF",
                    description: "Certified comprehensive security framework.",
                },
            ],
        },
        testimonial: {
            image:
                "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
            quote:
                "The speed at which we can now process patient data and reach a diagnosis is revolutionary. It allows our doctors to spend more time on patient care and less on administration.",
            author: "Dr. Elena Rostova",
            role: "Chief Medical Officer",
            company: "Nexus Global Health",
            stats: [
                { value: "45%", label: "Faster Diagnosis" },
                { value: "12k+", label: "Patients Served" },
            ],
        },
        cta: {
            title: "Transform your clinical operations.",
            description:
                "Partner with Ovanthra to bring next-generation AI to your healthcare facility. Schedule a demo with our medical implementation team.",
        },
    },
    {
        slug: "supply-chain-logistics",
        hero: {
            subtitle: "Logistics Solutions",
            title: "Autonomous Optimization for",
            titleHighlight: "Global Trade.",
            description:
                "Predictive inventory management and route optimization that adapts to disruption in real-time. Reduce overhead and maximize throughput.",
            stats: {
                items: [
                    { label: "Efficiency Gain", value: "+35%" },
                    {
                        label: "Cost Reduction",
                        value: "-22%",
                        icon: "trending_down",
                        color: "text-emerald-400",
                    },
                ],
            },
        },
        applications: {
            subtitle: "Core Applications",
            title: "Logistical Intelligence",
            description:
                "End-to-end visibility and control over your supply chain, from raw material sourcing to final mile delivery.",
            items: [
                {
                    icon: "inventory_2",
                    title: "Predictive Inventory",
                    description:
                        "Demand forecasting models that optimize stock levels, reducing warehousing costs and preventing stockouts.",
                    features: ["Auto-Replenishment", "Seasonality AI"],
                },
                {
                    icon: "local_shipping",
                    title: "Route Optimization",
                    description:
                        "Dynamic routing that accounts for traffic, weather, and fuel costs to ensure the fastest and cheapest delivery paths.",
                    features: ["Real-time Adjustment", "Fuel Efficiency"],
                },
                {
                    icon: "factory",
                    title: "Supplier Risk",
                    description:
                        "Analyzing global events and supplier data to predict disruptions and suggest alternative sourcing strategies.",
                    features: ["Disruption Alerts", "Vendor Scoring"],
                },
            ],
        },
        metrics: {
            subtitle: "Performance Metrics",
            title: "Efficiency at Scale",
            description:
                "Our logistics partners see immediate improvements in delivery times and significant reductions in operational waste.",
            stats: [
                { value: "25%", label: "Faster Delivery" },
                { value: "15%", label: "Fuel Savings" },
            ],
        },
        security: {
            subtitle: "Enterprise Grade Security",
            title: "Secure Global Operations",
            description:
                "Protecting your trade secrets and logistical data with industrial-grade cyber security protocols.",
            items: [
                {
                    icon: "verified_user",
                    title: "ISO 28000",
                    description: "Security management systems for the supply chain.",
                },
                {
                    icon: "gavel",
                    title: "Customs Compliant",
                    description: "Automated documentation for international trade.",
                },
                {
                    icon: "lock",
                    title: "Blockchain Ready",
                    description: "Immutable ledgers for shipment tracking.",
                },
                {
                    icon: "cloud_done",
                    title: "99.99% Uptime",
                    description: "Critical infrastructure guarantees.",
                },
            ],
        },
        testimonial: {
            image:
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
            quote:
                "We went from reactive to proactive. Ovanthra's system predicted the port congestion allowing us to reroute shipments weeks in advance.",
            author: "Marcus Chen",
            role: "VP of Operations",
            company: "Orbital Corp",
            stats: [
                { value: "98%", label: "On-Time Delivery" },
                { value: "$8M", label: "Logistics Savings" },
            ],
        },
        cta: {
            title: "Optimize your supply chain today.",
            description:
                "See how Ovanthra can streamline your operations. Book a consultation with our logistics experts.",
        },
    },
];
