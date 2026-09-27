import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Code,
  FileText,
  FlaskConical,
  TriangleAlert,
} from "lucide-react";
import {
  benchmarks,
  deploymentNotes,
  domainComparison,
  experimentGroups,
  failureCases,
  fieldMeasurements,
  frameBudget,
  heroMedia,
  integrationGaps,
  lessons,
  materials,
  nextExperiment,
  page,
  pipeline,
  pipelineStatusLabels,
  projectStatus,
  questionSection,
  researchQuestion,
  researchQuestions,
  rosNodes,
  statusNote,
  statusSection,
  team,
  type PipelineStage,
} from "./research-content";

import {
  ExperimentEntry,
  Labeled,
  Media,
  SectionHeading,
  statusStyles,
  Table,
} from "./components";

const canonicalUrl =
  "https://amannindra.com/projects/autonomous-bicycle/";

export const metadata: Metadata = {
  title: `${page.title} | Aman Nindra`,
  description: page.subtitle,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: `${page.title} | Aman Nindra`,
    description: page.subtitle,
    images: [
      {
        url: "https://amannindra.com/projects/autonomous-bicycle/bike_image1.jpg",
        width: 1920,
        height: 1080,
        alt: "Pathfinder autonomous bicycle research",
      },
    ],
  },
};

const actionClass =
  "inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2";

const linkClass =
  "text-primary underline decoration-zinc-300 underline-offset-2 hover:decoration-primary";

const stageStyles: Record<PipelineStage["status"], string> = {
  offline: "border-sky-300 bg-sky-50",
  jetson: "border-emerald-300 bg-emerald-50",
  integration: "border-dashed border-amber-400 bg-amber-50",
};

const navItems = [
  { href: "#question", label: "Question" },
  { href: "#status", label: "Status" },
  { href: "#experiments", label: "Experiments" },
  { href: "#failures", label: "Failures" },
  { href: "#jetson", label: "Jetson" },
  { href: "#steering", label: "Steering" },
  { href: "#next", label: "Next step" },
  { href: "#materials", label: "Materials" },
];

export default function AutonomousBicyclePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/95 backdrop-blur">
        <nav
          aria-label="Project navigation"
          className="mx-auto flex max-w-5xl items-center gap-6 overflow-x-auto px-5 py-3 text-sm sm:px-8"
        >
          <Link
            href="/#experience"
            className="inline-flex shrink-0 items-center gap-1.5 text-zinc-500 transition hover:text-zinc-900"
          >
            <ArrowLeft aria-hidden="true" size={15} />
            Portfolio
          </Link>
          <div className="flex shrink-0 gap-4 text-zinc-500">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        {/* Title block */}
        <section className="text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Ongoing undergraduate research
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
            {page.subtitle}
          </p>

          <p className="mt-6 text-lg">
            {team.map((member, index) => (
              <span key={member.name}>
                {index > 0 && <span className="mx-3" />}
                <span className="text-primary">{member.name}</span>
              </span>
            ))}
          </p>
          <p className="mt-1 text-zinc-600">{page.institution}</p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            {team.map((member) => (
              <span key={member.name} className="block">
                <span className="font-medium text-zinc-700">
                  {member.name.split(" ")[0]}:
                </span>{" "}
                {member.contribution}
              </span>
            ))}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <a href="#poster" className={actionClass}>
              <FileText aria-hidden="true" size={15} />
              Research poster
            </a>
            <a href="#experiments" className={actionClass}>
              <FlaskConical aria-hidden="true" size={15} />
              Experiments
            </a>
            <a href="#failures" className={actionClass}>
              <TriangleAlert aria-hidden="true" size={15} />
              Current challenges
            </a>
            {page.codeUrl ? (
              <a
                href={page.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClass}
              >
                <Code aria-hidden="true" size={15} />
                Code
              </a>
            ) : (
              <span
                className={`${actionClass} cursor-default bg-zinc-400 hover:bg-zinc-400`}
                title="Repository link coming soon"
              >
                <Code aria-hidden="true" size={15} />
                Code (coming soon)
              </span>
            )}
          </div>
        </section>

        <div
          role="note"
          className="mt-10 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-left"
        >
          <p className="text-sm font-semibold text-amber-900">Current status</p>
          <p className="mt-1 leading-7 text-amber-900/90">{statusNote}</p>
        </div>

        {/* Research poster: keep the original single-column poster presentation. */}
        <section id="poster" className="mx-auto mt-12 max-w-4xl scroll-mt-20">
          <Media slot={heroMedia.poster} />
        </section>

        <div className="mt-16 space-y-20">
          {/* Research question */}
          <section>
            <SectionHeading id="question">The research question</SectionHeading>

            <blockquote className="mt-6 border-l-4 border-primary pl-5 text-xl font-medium leading-8 text-zinc-900 sm:text-2xl sm:leading-9">
              {researchQuestion}
            </blockquote>

            {questionSection.intro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "mt-6 leading-7 text-zinc-600" : "mt-5 leading-7 text-zinc-600"}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {questionSection.subQuestionsLabel}
              </p>

              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {questionSection.subQuestions.map((question, index) => (
                  <li
                    key={question}
                    className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-zinc-700 sm:text-[15px]">
                      {question}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {questionSection.outro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "mt-8 leading-7 text-zinc-600" : "mt-5 leading-7 text-zinc-600"}
              >
                {paragraph}
              </p>
            ))}
            {/* 
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Media slot={domainComparison.car} />
              <Media slot={domainComparison.bicycle} />
            </div> */}

            {/* <p className="mt-3 text-sm leading-6 text-zinc-500">
              {domainComparison.caption}
            </p> */}
          </section>

          {/* Status table */}
          <section>
            <SectionHeading id="status">
              Where the project stands?
            </SectionHeading>
            <div>
              <p className="leading-7 text-zinc-600">{statusSection.intro}</p>

              <div className="mt-6 space-y-8">
                {statusSection.videos.map((slot) => (
                  <Media key={slot.caption + (slot.src ?? "")} slot={slot} />
                ))}
              </div>

              {/* <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-zinc-300">
                    <th scope="col" className="px-3 py-2 font-semibold text-zinc-900">Area</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-zinc-900">Progress</th>
                    <th scope="col" className="px-3 py-2 font-semibold text-zinc-900">Remaining question</th>
                  </tr>
                </thead>
                <tbody>
                  {projectStatus.map((row) => (
                    <tr key={row.area} className="border-b border-zinc-200">
                      <td className="px-3 py-3 align-top font-medium">
                        <a href={row.href} className={linkClass}>{row.area}</a>
                      </td>
                      <td className="px-3 py-3 align-top leading-6 text-zinc-600">{row.progress}</td>
                      <td className="px-3 py-3 align-top leading-6 text-zinc-600">{row.question}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div> */}
            </div>
          </section>

          {/* Experiments */}
          <section>
            <SectionHeading id="experiments">
              Experiments and approaches
            </SectionHeading>
            <p className="mt-6 leading-7 text-zinc-600">
              Each entry follows the same structure: why I tried it, what I
              implemented, the evidence, what went wrong and why, and what I
              learned. Status labels are specific: <em>evaluated</em> means
              measured on a dataset or checked offline;{" "}
              <em>partially implemented</em> means code exists but training,
              validation, or integration is incomplete; <em>exploratory</em>{" "}
              means investigation without a completed result. None of these is a
              claim that the approach cannot work.
            </p>

            <nav
              aria-label="Experiment index"
              className="mt-6 rounded-lg bg-zinc-50 px-5 py-4 text-sm"
            >
              {experimentGroups.map((group) => (
                <p key={group.id} className="leading-7">
                  <span className="font-medium text-zinc-800">
                    {group.title}:
                  </span>{" "}
                  {group.experiments.map((experiment, index) => (
                    <span key={experiment.id}>
                      {index > 0 && <span className="text-zinc-300"> · </span>}
                      <a href={`#${experiment.id}`} className={linkClass}>
                        {experiment.title}
                      </a>
                    </span>
                  ))}
                </p>
              ))}
            </nav>

            <div className="mt-12 space-y-20">
              {experimentGroups.map((group) => (
                <div key={group.id}>
                  <h3
                    id={group.id}
                    className="scroll-mt-20 text-sm font-semibold uppercase tracking-wide text-zinc-500"
                  >
                    {group.title}
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-600">{group.intro}</p>
                  <div className="mt-10 space-y-16">
                    {group.experiments.map((experiment) => (
                      <ExperimentEntry
                        key={experiment.id}
                        experiment={experiment}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Failure analysis */}
          <section>
            <SectionHeading id="failures">Failure analysis</SectionHeading>
            <p className="mt-6 leading-7 text-zinc-600">
              Several of the most important failures happen outside the neural
              network. Each case lists what should happen, what did happen, the
              suspected cause, and whether that cause has been verified.
            </p>
            <div className="mt-10 space-y-16">
              {failureCases.map((failure, index) => (
                <article
                  key={failure.id}
                  id={failure.id}
                  className="scroll-mt-20"
                >
                  <h3 className="text-xl font-semibold text-zinc-900">
                    <span className="mr-2 text-zinc-400">{index + 1}.</span>
                    {failure.title}
                  </h3>
                  {failure.id === "failure-selector" ? (
                    <figure
                      role="img"
                      aria-label="A valid left and right lane pair overlaps vertically. An unrelated third prediction does not overlap them, so the selector's shared interval becomes empty and it returns no lanes."
                      className="mt-5 rounded-lg border border-zinc-200 bg-zinc-50 p-5"
                    >
                      <div className="grid gap-3 sm:grid-cols-3">
                        {[
                          [
                            "Left boundary",
                            "y = 400–700",
                            "border-sky-300 bg-sky-50",
                          ],
                          [
                            "Right boundary",
                            "y = 400–700",
                            "border-indigo-300 bg-indigo-50",
                          ],
                          [
                            "Unrelated prediction",
                            "y = 50–150",
                            "border-amber-300 bg-amber-50",
                          ],
                        ].map(([name, range, color]) => (
                          <div
                            key={name}
                            className={["rounded-md border p-3", color].join(
                              " ",
                            )}
                          >
                            <p className="font-medium text-zinc-900">{name}</p>
                            <p className="mt-1 font-mono text-sm text-zinc-600">
                              {range}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-center text-sm text-zinc-500">
                        Selector intersects every prediction&apos;s vertical
                        range
                      </p>
                      <p className="mt-2 rounded-md bg-white px-4 py-3 text-center font-medium text-zinc-900">
                        Empty shared interval → valid pair discarded → no lane
                        output
                      </p>
                      <figcaption className="sr-only">
                        Reproducible selector test; the third prediction is
                        outside the valid pair&apos;s vertical range.
                      </figcaption>
                    </figure>
                  ) : (
                    <Media slot={failure.media} className="mt-5" />
                  )}
                  <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-[10rem_1fr]">
                    {[
                      ["Expected", failure.expected],
                      ["Observed", failure.observed],
                      ["Suspected cause", failure.suspectedCause],
                      ["Verified?", failure.verified],
                    ].map(([term, description]) => (
                      <div key={term} className="contents">
                        <dt className="font-semibold text-zinc-900">{term}</dt>
                        <dd className="leading-7 text-zinc-600">
                          {description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-sm text-zinc-500">
                    Related:{" "}
                    {failure.related.map((link, linkIndex) => (
                      <span key={link.href + link.label}>
                        {linkIndex > 0 && ", "}
                        <a href={link.href} className={linkClass}>
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Jetson */}
          <section>
            <SectionHeading id="jetson">
              Making inference run on the Jetson
            </SectionHeading>
            <p className="mt-6 leading-7 text-zinc-600">
              Deployment went from PyTorch to ONNX to ONNX Runtime to TensorRT
              FP16 engines, and then to a Torch-free runtime on the Jetson.
              Along the way I added per-stage timing, render and no-render
              comparisons, sequential and separate-process runs, power-mode
              comparisons, and numerical parity checks. TensorRT FP16 made
              LaneATT about 3.7× faster than ONNX Runtime FP32 under the same
              benchmark scope.
            </p>
            <Table table={benchmarks} />

            <h3 className="mt-10 text-lg font-semibold text-zinc-900">
              Engine time is not pipeline time
            </h3>
            <Table table={frameBudget} />

            <h3 className="mt-10 text-lg font-semibold text-zinc-900">
              Field measurements and estimates
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-zinc-600 marker:text-zinc-400">
              {fieldMeasurements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-semibold text-zinc-900">
              Deployment notes
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-zinc-600 marker:text-zinc-400">
              {deploymentNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Perception to steering */}
          <section>
            <SectionHeading id="steering">
              Connecting perception to steering
            </SectionHeading>
            <p className="mt-6 leading-7 text-zinc-600">
              Running the models does not by itself keep the bicycle in its
              lane. Lane keeping also needs lane selection, path geometry,
              timing, and the connection to hardware, and each of those is at a
              different stage.
            </p>

            <figure className="mt-8">
              <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
                {pipeline.map((stage, index) => (
                  <li
                    key={stage.title}
                    className="flex flex-1 items-center gap-2 sm:flex-col sm:items-stretch"
                  >
                    <div
                      className={`flex-1 rounded-lg border-2 px-3 py-3 ${stageStyles[stage.status]}`}
                    >
                      <p className="font-semibold text-zinc-900">
                        {stage.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-zinc-600">
                        {stage.detail}
                      </p>
                      <p className="mt-2 text-xs font-medium text-zinc-500">
                        {pipelineStatusLabels[stage.status]}
                      </p>
                    </div>
                    {index < pipeline.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden text-center text-zinc-400 sm:block"
                      >
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <figcaption className="mt-4 text-sm leading-6 text-zinc-500">
                Green: runs on the Jetson in ROS 2. Blue: implemented and tested
                offline on recorded video. Dashed amber: code exists (ESP32-S3
                firmware by Rayan) but the perception-to-actuator connection has
                not been verified.
              </figcaption>
            </figure>

            <Media
              className="mt-10"
              slot={{
                kind: "image",
                caption:
                  "ROS 2 topic graph for the perception stack, including the mismatched stereo-depth topics.",
                placeholder:
                  "rqt_graph screenshot (or a clean redrawn diagram) of the ROS 2 nodes and topics: camera → laneatt2 / yolov112 → visualizers, plus stereo_depth → object_tracker_controller.",
                source: "Autonomous-Bicycle/ros2_ws/",
              }}
            />

            <h3 className="mt-10 text-lg font-semibold text-zinc-900">
              ROS 2 nodes
            </h3>
            <Table table={rosNodes} />

            <h3 className="mt-10 text-lg font-semibold text-zinc-900">
              Why model inference has not yet become lane keeping?
            </h3>
            <div className="mt-4 space-y-4">
              {integrationGaps.map((gap) => (
                <Labeled key={gap.title} label={gap.title}>
                  {gap.body}
                </Labeled>
              ))}
            </div>
          </section>

          {/* Lessons */}
          <section>
            <SectionHeading id="lessons">What I learned</SectionHeading>
            <ol className="mt-6 space-y-5">
              {lessons.map((lesson) => (
                <li key={lesson.lesson}>
                  <p className="font-semibold text-zinc-900">{lesson.lesson}</p>
                  <p className="mt-1 leading-7 text-zinc-600">
                    {lesson.evidence}{" "}
                    <a href={lesson.href} className={`${linkClass} text-sm`}>
                      See evidence
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Next experiment */}
          <section>
            <SectionHeading id="next">Proposed next experiment</SectionHeading>
            <p className="mt-6 text-sm font-medium uppercase tracking-wide text-zinc-500">
              Proposed, not yet done
            </p>
            <p className="mt-2 text-lg leading-8 text-zinc-800">
              {nextExperiment.summary}
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-zinc-600 marker:text-zinc-400">
              {nextExperiment.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-5">
              <p className="font-semibold text-zinc-900">
                Where I would value guidance
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-zinc-700 marker:text-zinc-400">
                {nextExperiment.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Materials */}
          <section>
            <SectionHeading id="materials">
              Research materials and credits
            </SectionHeading>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-zinc-900">Poster and code</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-zinc-600 marker:text-zinc-400">
                  <li>
                    {page.posterPdf ? (
                      <a href={page.posterPdf} download className={linkClass}>
                        Research poster (PDF)
                      </a>
                    ) : (
                      "Research poster PDF: original file being located"
                    )}
                  </li>
                  <li>
                    {page.codeUrl ? (
                      <a
                        href={page.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        Code repository
                      </a>
                    ) : (
                      "Code repository: link to be added"
                    )}
                  </li>
                </ul>
              </div>
              {materials.map((group) => (
                <div key={group.heading}>
                  <p className="font-semibold text-zinc-900">{group.heading}</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-zinc-600 marker:text-zinc-400">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-6">
              <p className="font-semibold text-zinc-900">Team</p>
              <ul className="mt-2 space-y-1.5 leading-7 text-zinc-600">
                {team.map((member) => (
                  <li key={member.name}>
                    <span className="font-medium text-zinc-800">
                      {member.name}
                    </span>{" "}
                    · {member.contribution}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                LaneATT, LaneNet, H-Net, HybridNets, DeepLab, DDRNet, LaneTCA,
                YOLO11, and Depth Anything V2 are published research systems
                adapted here for training, evaluation, and deployment
                experiments; their architectures are not claimed as original
                work.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-100 py-7 text-center text-xs text-zinc-400">
        {page.title} · {page.institution} · Last updated {page.lastUpdated}
      </footer>
    </div>
  );
}
