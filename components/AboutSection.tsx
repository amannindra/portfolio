"use client";

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

const currentFocus = [
  {
    label: "Autonomous Robotics",
    detail:
      "A low-speed autonomous bicycle using Jetson edge inference, road/lane segmentation, and steer-by-wire control.",
  },
  {
    label: "Distributed AI Training",
    detail:
      "A self-hosted platform for shared GPU training jobs, queue management, job isolation, and VRAM-aware scheduling.",
  },
  {
    label: "Applied ML Systems",
    detail:
      "Computer vision, NLP, and infrastructure projects built with PyTorch, FastAPI, AWS, and Linux.",
  },
];

export default function AboutSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>

      <div className="space-y-4 mb-10">
        <p className="text-base text-muted-foreground leading-relaxed">
          I&apos;m Aman Nindra, a Computer Science & Engineering student at UC
          Merced. I build machine learning systems that have to work outside a
          notebook — models wired to real hardware, real users, and real
          infrastructure.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          Right now I&apos;m focused on two systems: an{" "}
          <B>autonomous bicycle</B>, an embedded lane-keeping and steer-by-wire
          research platform built on Jetson edge inference, and a{" "}
          <B>self-hosted distributed training platform</B> that schedules
          PyTorch jobs across shared GPU machines.
        </p>

        <p className="text-base text-muted-foreground leading-relaxed">
          What interests me most is the engineering side of ML — training,
          deployment, monitoring, and the question of how to make a system
          reliable, fast, and usable, not just accurate. I&apos;m looking for
          ML engineering, robotics, computer vision, and AI infrastructure
          opportunities.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Currently Working On
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {currentFocus.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-card p-4"
            >
              <p className="font-semibold text-card-foreground text-sm mb-1">
                {item.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Education
        </h3>

        <div className="rounded-lg border border-border bg-card p-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-card-foreground">
              University of California, Merced
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              B.S. Computer Science & Engineering
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1 mt-0.5">
            Expected December 2027
          </span>
        </div>
      </div>
    </div>
  );
}
