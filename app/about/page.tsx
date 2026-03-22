import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "The engineer who reads Thirukkural — Senior SRE, cloud platforms, Tamil literature, and AI/ML learning journal.",
};

const SectionHeader = ({ label }: { label: string }) => (
  <h2 className="font-serif text-lg font-semibold flex items-center gap-2 mb-4 text-[var(--text-primary)]">
    <span className="font-mono text-sm text-[var(--accent-indigo)]">#</span>
    {label}
  </h2>
);

const Divider = () => <hr className="my-8 border-[var(--bg-border)]" />;

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs mb-6 text-[var(--text-muted)]">
        <a href="/" className="transition-colors hover:text-[var(--accent-indigo)]">~/home</a>
        <span>/</span>
        <span className="text-[var(--accent-indigo)]">about</span>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-3xl font-bold mb-1 text-[var(--text-primary)]">
        The engineer who reads Thirukkural
      </h1>
      <p className="text-base mb-8 text-[var(--text-secondary)]">
        Ancient wisdom. Modern infrastructure. One life, many threads.
      </p>

      <Divider />

      {/* Profile card */}
      <div className="rounded-xl border p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6
                      border-[var(--bg-border)] bg-[var(--bg-surface)] mb-8">
        <div className="relative flex-shrink-0">
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-[rgba(129,140,248,0.4)]">
            <Image src="/profile.jpg" alt="Nishok Vishnu Ganesan" width={96} height={96}
                   className="object-cover object-top w-full h-full" />
          </div>
          <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full"
                style={{ backgroundColor: "var(--accent-emerald)", boxShadow: "0 0 0 2px var(--bg-surface)" }} />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="font-serif text-xl font-semibold text-[var(--text-primary)]">
            Nishok Vishnu Ganesan
          </h2>
          <p className="font-mono text-xs text-[var(--accent-indigo)]">
            Senior SRE · Cloud Platform Engineering · Kubernetes &amp; Distributed Systems
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            Results-driven SRE with 15+ years building, operating, and scaling mission-critical cloud platforms. Learning AI/ML in public. Reading Thirukkural between deployments.
          </p>
          <p className="font-mono text-xs text-[var(--text-muted)]">Mountain House, CA</p>
        </div>
      </div>

      {/* Professional */}
      <div className="mb-8">
        <SectionHeader label="Professional Profile" />
        <div className="space-y-3 text-sm text-[var(--text-secondary)]">
          {[
            "Expert in Kubernetes cluster operations and cloud-native platform engineering at scale across AWS, Azure, and bare-metal environments.",
            "Proven architect of end-to-end observability stacks (Prometheus, Grafana, Alertmanager, Splunk) enabling rapid incident detection and RCA.",
            "Champion of Infrastructure as Code (Terraform), CI/CD automation, and production readiness frameworks.",
            "Skilled incident commander with a track record of reducing MTTR by 65%, critical incidents by 40%, and 99.99% DR recovery success rates.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-mono flex-shrink-0 mt-0.5 text-[var(--accent-indigo)]">›</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Technical Skills */}
      <div className="mb-8">
        <SectionHeader label="Technical Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Cloud Platforms",           detail: "AWS (EKS, EC2, RDS, Bedrock), Azure, GCP, VMware" },
            { label: "Containers & Orchestration", detail: "Kubernetes (CKA), EKS, Helm, Docker" },
            { label: "Infrastructure as Code",    detail: "Terraform, Terragrunt, Ansible, CloudFormation" },
            { label: "Observability",             detail: "Prometheus, Grafana, Alertmanager, Splunk, Datadog" },
            { label: "Languages",                detail: "Python (expert), Go, Bash, Ruby, JavaScript" },
            { label: "CI/CD & Automation",        detail: "GitHub Actions, Jenkins, ArgoCD, Azure DevOps" },
            { label: "Databases",                detail: "Aurora, PostgreSQL, MongoDB, Redis, Oracle" },
            { label: "AI & ML Platform",          detail: "AWS Bedrock, SageMaker, LLM workflows, Claude" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border px-3 py-2.5
                                             border-[var(--bg-border)] bg-[var(--bg-elevated)]">
              <p className="font-mono text-xs font-medium mb-0.5 text-[var(--text-primary)]">{item.label}</p>
              <p className="text-xs text-[var(--text-muted)]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Experience */}
      <div className="mb-8">
        <SectionHeader label="Experience" />
        <div className="space-y-4">
          {[
            {
              title: "Senior Principal Engineer — Cloud & SRE Platform",
              company: "Saama Technologies", location: "Campbell, CA",
              period: "Jun 2021 – Present",
              highlights: [
                "Led team of 8 engineers on AWS EKS platforms — 70% faster deployments, 35% cost reduction.",
                "Built observability stack across 20 engineering teams; maintained 99.9%+ platform availability.",
                "Managed $3.5M infrastructure budget with 25% YoY savings via Terraform IaC & rightsizing.",
              ],
            },
            {
              title: "Cloud Platform Engineer — Infrastructure & SRE",
              company: "Comcast", location: "West Chester, PA",
              period: "Jan 2019 – Jun 2021",
              highlights: [
                "Operated mission-critical AWS + Cloud Foundry IaaS for 3,000+ users at 99.95% uptime.",
                "Reduced critical incidents by 40% and MTTR by 65% YoY via post-mortem programs.",
              ],
            },
            {
              title: "Senior Cloud Software Engineer",
              company: "Cardionics", location: "Houston, TX",
              period: "Jul 2016 – Jan 2019",
              highlights: [
                "Led on-prem to AWS migration — 45% OpEx reduction, 60% faster release cycles.",
                "Implemented HIPAA compliance controls; passed external audit with zero critical findings.",
              ],
            },
          ].map((role) => (
            <div key={role.title} className="rounded-lg border p-4
                                             border-[var(--bg-border)] bg-[var(--bg-surface)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{role.title}</p>
                  <p className="font-mono text-xs text-[var(--accent-indigo)]">
                    {role.company} · {role.location}
                  </p>
                </div>
                <span className="font-mono text-xs flex-shrink-0 text-[var(--text-muted)]">{role.period}</span>
              </div>
              <ul className="space-y-1">
                {role.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="flex-shrink-0 mt-0.5 text-[var(--accent-emerald)]">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Education */}
      <div className="mb-8">
        <SectionHeader label="Education & Certifications" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "M.S. Computer Engineering",         detail: "University of Houston – Clear Lake · GPA 3.8/4.0" },
            { label: "B.E. Electronics & Communication",  detail: "Kongu Engineering College, India · May 2011" },
            { label: "AWS Certified Developer – Associate", detail: "Amazon Web Services" },
            { label: "Certified Kubernetes Administrator", detail: "CKA · CNCF" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border px-3 py-2.5
                                             border-[var(--bg-border)] bg-[var(--bg-elevated)]">
              <p className="text-sm font-medium mb-0.5 text-[var(--text-primary)]">{item.label}</p>
              <p className="text-xs text-[var(--text-muted)]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Contact */}
      <div>
        <SectionHeader label="Get In Touch" />
        <p className="text-sm mb-4 text-[var(--text-secondary)]">
          Open to conversations around SRE, cloud platforms, AI/ML, Tamil literature, and engineering.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "https://github.com/nishokvg", label: "GitHub ↗", external: true },
            { href: "https://linkedin.com/in/nishok-v-g", label: "LinkedIn ↗", external: true },
            { href: "mailto:nishokvg@gmail.com", label: "nishokvg@gmail.com", external: false },
          ].map(({ href, label, external }) => (
            <a key={label} href={href}
               target={external ? "_blank" : undefined}
               rel={external ? "noopener noreferrer" : undefined}
               className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all
                          border-[var(--bg-border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]
                          hover:text-[var(--accent-indigo)] hover:border-[rgba(129,140,248,0.5)]">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
