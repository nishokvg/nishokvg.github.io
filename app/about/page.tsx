import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Site Reliability Engineer with 15+ years in cloud platforms, Kubernetes, and distributed systems.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Page header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-text-muted font-mono mb-4">
          <a href="/" className="hover:text-accent transition-colors">
            ~/home
          </a>
          <span>/</span>
          <span className="text-accent">about</span>
        </div>
        <h1 className="text-3xl font-bold text-text-primary">About</h1>
        <p className="text-text-secondary">
          The person behind this learning journal.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Profile card */}
      <div className="rounded-xl border border-border bg-bg-secondary p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Avatar */}
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/40 flex items-center justify-center flex-shrink-0">
          <span className="text-4xl font-bold text-accent/70 font-mono select-none">
            N
          </span>
        </div>
        {/* Info */}
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-text-primary">Nishok Vishnu Ganesan</h2>
          <p className="text-sm font-mono text-accent">Senior Site Reliability Engineer · Cloud Platform Engineering · Kubernetes & Distributed Systems</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Results-driven SRE with 15+ years of experience building, operating, and scaling mission-critical cloud platforms. Combines deep hands-on infrastructure expertise with a leadership track record of driving reliability, observability, and operational excellence at enterprise scale.
          </p>
          <p className="text-xs text-text-muted font-mono">Mountain House, CA</p>
        </div>
      </div>

      {/* Professional Profile */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Professional Profile
        </h2>
        <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
          {[
            "Expert in Kubernetes cluster operations, VM lifecycle management, and cloud-native platform engineering at scale across AWS, Azure, and bare-metal environments.",
            "Proven architect of end-to-end observability stacks (Prometheus, Grafana, Alertmanager, Splunk) enabling rapid incident detection, RCA, and continuous service improvement.",
            "Champion of Infrastructure as Code (Terraform), CI/CD automation, and production readiness frameworks that accelerate safe delivery while maintaining SLO compliance.",
            "Skilled incident commander with a demonstrated track record of reducing MTTR by 65%, critical incidents by 40%, and achieving 99.99% DR recovery success rates through rigorous post-mortem culture.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-accent font-mono mt-0.5 flex-shrink-0">›</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Tech Stack */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Cloud Platforms", detail: "AWS (EKS, EC2, RDS, S3, Bedrock), Azure, GCP, VMware" },
            { label: "Containers & Orchestration", detail: "Kubernetes (CKA), EKS, Helm, Docker" },
            { label: "Infrastructure as Code", detail: "Terraform (expert), Ansible, CloudFormation" },
            { label: "Observability", detail: "Prometheus, Grafana, Alertmanager, Splunk, Datadog" },
            { label: "Languages", detail: "Python (expert), Go (proficient), Bash, Ruby, JavaScript" },
            { label: "CI/CD & Automation", detail: "GitHub Actions, Jenkins, ArgoCD, Azure DevOps" },
            { label: "Databases", detail: "Aurora, PostgreSQL, MongoDB, Redis, Oracle" },
            { label: "AI & ML Platform", detail: "AWS Bedrock, SageMaker, LLM workflows, Cursor" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-bg-tertiary px-3 py-2.5 space-y-0.5"
            >
              <p className="text-sm font-medium text-text-primary font-mono">
                {item.label}
              </p>
              <p className="text-xs text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Experience */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Experience
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Senior Principal Engineer — Cloud & SRE Platform",
              company: "Saama Technologies",
              location: "Campbell, CA",
              period: "Jun 2021 – Present",
              highlights: [
                "Led team of 8 engineers on AWS EKS platforms — 70% faster deployments, 35% cost reduction.",
                "Built observability stack across 20 engineering teams; maintained 99.9%+ platform availability.",
                "Managed $3.5M infrastructure budget with 25% YoY savings via Terraform IaC & rightsizing.",
              ],
            },
            {
              title: "Cloud Platform Engineer — Infrastructure & SRE",
              company: "Comcast",
              location: "West Chester, PA",
              period: "Jan 2019 – Jun 2021",
              highlights: [
                "Operated mission-critical AWS + Cloud Foundry IaaS for 3,000+ users at 99.95% uptime.",
                "Reduced critical incidents by 40% and MTTR by 65% YoY via post-mortem programs.",
                "Managed $2.2M vendor contracts with 18% cost reduction.",
              ],
            },
            {
              title: "Senior Cloud Software Engineer",
              company: "Cardionics",
              location: "Houston, TX",
              period: "Jul 2016 – Jan 2019",
              highlights: [
                "Led on-prem to AWS migration — 45% OpEx reduction, 60% faster release cycles.",
                "Implemented HIPAA compliance controls; passed external audit with zero critical findings.",
              ],
            },
          ].map((role) => (
            <div key={role.title} className="rounded-lg border border-border bg-bg-secondary p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="text-sm font-semibold text-text-primary">{role.title}</p>
                  <p className="text-xs font-mono text-accent">{role.company} · {role.location}</p>
                </div>
                <span className="text-xs text-text-muted font-mono flex-shrink-0">{role.period}</span>
              </div>
              <ul className="space-y-1">
                {role.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-xs text-text-secondary">
                    <span className="text-accent flex-shrink-0 mt-0.5">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Education */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Education & Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "M.S. Computer Engineering", detail: "University of Houston – Clear Lake · GPA 3.8/4.0 · Dec 2015" },
            { label: "B.E. Electronics & Communication", detail: "Kongu Engineering College, India · May 2011" },
            { label: "AWS Certified Developer – Associate", detail: "Amazon Web Services" },
            { label: "Certified Kubernetes Administrator", detail: "CKA · CNCF" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border bg-bg-tertiary px-3 py-2.5 space-y-0.5">
              <p className="text-sm font-medium text-text-primary">{item.label}</p>
              <p className="text-xs text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Contact */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Get In Touch
        </h2>
        <p className="text-sm text-text-secondary">
          Open to interesting conversations around SRE, cloud platforms, AI/ML, and engineering leadership.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/nishokvg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/nishok-v-g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:nishokvg@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
          >
            nishokvg@gmail.com ↗
          </a>
        </div>
      </div>
    </div>
  );
}
