import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Images,
  Play,
} from "lucide-react";
import { autonomousBicycleResearch as research } from "@/lib/portfolio-data";

const canonicalUrl =
  "https://amannindra.com/projects/autonomous-bicycle/";

export const metadata: Metadata = {
  title: "Pathfinder: Autonomous Bicycle | Aman Nindra",
  description: research.summary,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: "Pathfinder: Autonomous Bicycle | Aman Nindra",
    description: research.summary,
    images: [
      {
        url: "https://amannindra.com/projects/autonomous-bicycle/bike_image1.jpg",
        width: 1920,
        height: 1080,
        alt: research.systemEvidence.perception.alt,
      },
    ],
  },
};

const actionClass =
  "inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2";

export default function AutonomousBicyclePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <header className="border-b border-zinc-100">
        <nav
          aria-label="Project navigation"
          className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900"
          >
            <ArrowLeft aria-hidden="true" size={15} />
            Portfolio
          </Link>
          <span className="text-sm text-zinc-400">UC Merced Research</span>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <section className="text-center">
          <p className="text-sm font-medium text-zinc-500">
            Undergraduate Research · 2026
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Pathfinder: Autonomous Bicycle
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Embedded lane keeping, road perception, and steer-by-wire control
            for a low-speed autonomous bicycle.
          </p>

          <p className="mt-5 text-sm leading-6">
            <span className="font-semibold text-primary">Aman Nindra</span>
            <span className="mx-2 text-zinc-300">·</span>
            <span className="text-zinc-600">{research.institution}</span>
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            {research.role} · {research.period}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            <a href="#demo" className={actionClass}>
              <Play aria-hidden="true" size={15} />
              Demo
            </a>
            <a href="#method" className={actionClass}>
              <span aria-hidden="true" className="font-mono text-xs">
                01
              </span>
              Method
            </a>
            <a href="#gallery" className={actionClass}>
              <Images aria-hidden="true" size={15} />
              Images
            </a>
          </div>
        </section>

        <figure className="mt-12">
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100">
            <Image
              src={research.systemEvidence.perception.poster}
              alt={research.systemEvidence.perception.alt}
              width={1920}
              height={1080}
              priority
              sizes="(min-width: 896px) 832px, calc(100vw - 40px)"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mx-auto mt-3 max-w-3xl text-center text-sm leading-6 text-zinc-500">
            Road-guidance output showing detected vehicles, fitted lane
            boundaries, target heading, steering command, lateral offset, and
            confidence.
          </figcaption>
        </figure>

        <section aria-labelledby="abstract-heading" className="mx-auto mt-14 max-w-3xl">
          <h2
            id="abstract-heading"
            className="text-center text-2xl font-semibold text-zinc-900"
          >
            Abstract
          </h2>
          <p className="mt-5 leading-7 text-zinc-600">
            {research.summary}
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-zinc-600 marker:text-zinc-400">
            <li>
              LaneATT ego-lane detection reached a best validation F1 of
              78.52% after fine-tuning on CULane.
            </li>
            <li>
              YOLOv11 was reduced to four driving-relevant classes: person,
              vehicle, traffic light, and stop sign.
            </li>
            <li>
              ONNX Runtime and TensorRT scripts explore Jetson-class
              deployment, while ROS 2 and Gazebo support path-following tests.
            </li>
          </ul>
        </section>

        <section aria-labelledby="results-heading" className="mt-14">
          <h2
            id="results-heading"
            className="text-center text-2xl font-semibold text-zinc-900"
          >
            Measured results
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-zinc-500">
            Evaluation results recorded in the project&apos;s training and
            validation logs.
          </p>
          <dl className="mt-7 grid grid-cols-1 divide-y divide-zinc-200 border-y border-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {research.measuredResults.map((result) => (
              <div key={result.label} className="px-5 py-6 text-center">
                <dt className="text-sm text-zinc-500">{result.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-zinc-900">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="method" className="mt-16 scroll-mt-8">
          <h2 className="text-center text-2xl font-semibold text-zinc-900">
            Method overview
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center leading-7 text-zinc-500">
            A four-stage offline pipeline connects visual perception to a
            steering estimate and deployment experiments.
          </p>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {research.systemFlow.map((stage) => (
              <li key={stage.label} className="rounded-lg border border-zinc-200 p-5">
                <p className="font-mono text-xs font-semibold text-primary">
                  {stage.label}
                </p>
                <h3 className="mt-2 font-semibold text-zinc-900">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="demo" className="mt-16 scroll-mt-8">
          <h2 className="text-center text-2xl font-semibold text-zinc-900">
            Quick preview
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm italic leading-6 text-zinc-500">
            Play the short offline clips to inspect road-guidance and relative
            depth outputs frame by frame.
          </p>

          <div className="mt-8 space-y-10">
            <figure>
              <video
                controls
                playsInline
                preload="metadata"
                poster={research.systemEvidence.perception.poster}
                aria-label={research.systemEvidence.perception.alt}
                className="aspect-video w-full rounded-lg border border-zinc-200 bg-black object-cover"
              >
                <source
                  src={research.systemEvidence.perception.src}
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>
              <figcaption className="mt-3 text-center text-sm leading-6 text-zinc-500">
                <span className="font-medium text-zinc-700">
                  Road guidance.
                </span>{" "}
                {research.systemEvidence.perception.caption}
              </figcaption>
            </figure>

            <figure>
              <video
                controls
                playsInline
                preload="metadata"
                poster={research.systemEvidence.video.poster}
                aria-label="Monocular depth-estimation output video"
                className="aspect-video w-full rounded-lg border border-zinc-200 bg-black object-cover"
              >
                <source
                  src={research.systemEvidence.video.src}
                  type="video/mp4"
                />
                Your browser does not support embedded video.
              </video>
              <figcaption className="mt-3 text-center text-sm leading-6 text-zinc-500">
                <span className="font-medium text-zinc-700">
                  Depth estimation.
                </span>{" "}
                {research.systemEvidence.video.caption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="gallery" className="mt-16 scroll-mt-8">
          <h2 className="text-center text-2xl font-semibold text-zinc-900">
            Project images
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center leading-7 text-zinc-500">
            The physical prototype and its UC Merced research presentation.
          </p>

          <div className="mt-8 grid items-start gap-6 sm:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)]">
            {research.images.map((projectImage) => (
              <figure key={projectImage.src}>
                <div className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100">
                  <Image
                    src={projectImage.src}
                    alt={projectImage.alt}
                    width={projectImage.src.includes("team") ? 750 : 1280}
                    height={projectImage.src.includes("team") ? 1000 : 960}
                    sizes="(min-width: 640px) 60vw, calc(100vw - 40px)"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
                  {projectImage.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl border-t border-zinc-200 pt-10">
          <h2 className="text-center text-2xl font-semibold text-zinc-900">
            Implementation
          </h2>
          <p className="mt-5 leading-7 text-zinc-600">
            The research repository includes training and inference work for
            lane detection, road segmentation, YOLOv11 object detection, depth
            estimation, and Jetson-oriented ONNX/TensorRT execution. The
            road-guidance runtime extracts a center path and computes a Stanley
            steering command from path-heading and cross-track error.
          </p>
          <p className="mt-4 text-sm leading-6 text-zinc-500">
            LaneATT, YOLOv11, HybridNets, and Depth Anything V2 are published
            research systems adapted here for training, integration, guidance,
            and edge-deployment experiments; their base architectures are not
            claimed as original work.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {research.researchTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-3xl border-t border-zinc-200 pt-10">
          <h2 className="text-center text-2xl font-semibold text-zinc-900">
            Current limitations
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 marker:text-zinc-400">
            <li>
              The displayed videos are offline pipeline outputs, not evidence
              of closed-loop autonomous bicycle operation.
            </li>
            <li>
              Depth Anything V2 currently provides relative depth; metric
              distance and vehicle-speed estimation are not yet implemented.
            </li>
            <li>
              Jetson deployment paths are prepared, but verified on-device FPS
              results are not yet recorded in the repository.
            </li>
            <li>
              Steering estimates depend on camera and lane-width assumptions
              and have not been safety validated for riderless operation.
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-lg bg-zinc-50 px-6 py-8 text-center">
          <h2 className="text-lg font-semibold text-zinc-900">
            Continue exploring
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Return to the portfolio experience section for the full research
            role and related work.
          </p>
          <Link
            href="/#experience"
            className={`${actionClass} mt-5`}
          >
            <ArrowLeft aria-hidden="true" size={15} />
            Back to experience
          </Link>
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-7 text-center text-xs text-zinc-400">
        Pathfinder autonomous bicycle research · Aman Nindra
      </footer>
    </div>
  );
}
