import type { ReactNode } from "react";
import { Film, ImageIcon } from "lucide-react";
import type {
  DataTable,
  Experiment,
  MediaSlot,
  StatusKind,
} from "./research-content";

export const statusStyles: Record<StatusKind, string> = {
  evaluated: "border-emerald-200 bg-emerald-50 text-emerald-800",
  partial: "border-amber-200 bg-amber-50 text-amber-800",
  exploratory: "border-sky-200 bg-sky-50 text-sky-800",
  reference: "border-zinc-200 bg-zinc-50 text-zinc-600",
};

function toYouTubeEmbedUrl(youtube: string) {
  // Accepts a full watch/share URL or a bare video ID.
  const watchMatch = youtube.match(/[?&]v=([^&]+)/);
  const shortMatch = youtube.match(/youtu\.be\/([^?&]+)/);
  const id = watchMatch?.[1] ?? shortMatch?.[1] ?? youtube;
  return `https://www.youtube.com/embed/${id}`;
}

export function Media({
  slot,
  className = "",
}: {
  slot: MediaSlot;
  className?: string;
}) {
  if (!slot.src && !slot.youtube) return null;
  let body: ReactNode;
  if (slot.youtube) {
    body = (
      <iframe
        src={toYouTubeEmbedUrl(slot.youtube)}
        title={slot.caption}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-video w-full rounded-lg border border-zinc-200 bg-black"
      />
    );
  } else if (slot.src && slot.kind === "video") {
    body = (
      <video
        controls
        playsInline
        preload="metadata"
        poster={slot.poster}
        aria-label={slot.caption}
        className="aspect-video w-full rounded-lg border border-zinc-200 bg-black object-contain"
      >
        <source src={slot.src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    );
  } else if (slot.src) {
    body = (
      <a href={slot.src} target="_blank" rel="noopener noreferrer">
        {/* Static export with unoptimized images; a plain img keeps unknown aspect ratios intact. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slot.src}
          alt={slot.caption}
          className="h-auto w-full rounded-lg border border-zinc-200"
        />
      </a>
    );
  } else {
    const Icon = slot.kind === "video" ? Film : ImageIcon;
    body = (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 py-8 text-center">
        <Icon aria-hidden="true" size={28} className="text-zinc-400" />
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
          {slot.kind} to add
        </p>
        <p className="max-w-lg text-sm leading-6 text-zinc-600">
          {slot.placeholder}
        </p>
        {slot.source && (
          <p className="max-w-lg font-mono text-xs leading-5 text-zinc-400">
            {slot.source}
          </p>
        )}
      </div>
    );
  }

  return (
    <figure className={className}>
      {body}
      <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
        {slot.caption}
      </figcaption>
    </figure>
  );
}

export function Table({ table }: { table: DataTable }) {
  return (
    <figure className="my-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-zinc-300">
              {table.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="whitespace-nowrap px-3 py-2 font-semibold text-zinc-900"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-zinc-200">
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className={`px-3 py-2 align-top leading-6 ${index === 0 ? "font-medium text-zinc-800" : "text-zinc-600"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && (
        <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 border-b border-zinc-200 pb-3 text-2xl font-semibold text-zinc-900 sm:text-3xl"
    >
      {children}
    </h2>
  );
}

export function Labeled({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p className="leading-7 text-zinc-600">
      <span className="font-semibold text-zinc-900">{label}.</span> {children}
    </p>
  );
}

export function ExperimentEntry({ experiment }: { experiment: Experiment }) {
  return (
    <article id={experiment.id} className="scroll-mt-20">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h4 className="text-xl font-semibold text-zinc-900">
          {experiment.title}
        </h4>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[experiment.status.kind]}`}
        >
          {experiment.status.label}
        </span>
      </div>
      <p className="mt-2 leading-7 text-zinc-700">{experiment.summary}</p>

      <div className="mt-6 space-y-6">
        {experiment.media.map((slot) => (
          <Media key={slot.placeholder} slot={slot} />
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <Labeled label="Why I tried it">{experiment.why}</Labeled>
        <div>
          <p className="font-semibold text-zinc-900">What I implemented.</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-zinc-600 marker:text-zinc-400">
            {experiment.implemented.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {experiment.evidence && <Table table={experiment.evidence} />}

      <div className="mt-4 space-y-4">
        {experiment.wentWrong && (
          <Labeled label="What went wrong?">{experiment.wentWrong}</Labeled>
        )}
        {experiment.cause && <Labeled label="Why?">{experiment.cause}</Labeled>}
        {experiment.learned && (
          <Labeled label="What I learned?">{experiment.learned}</Labeled>
        )}
      </div>

      {experiment.details && (
        <details className="mt-5 rounded-lg border border-zinc-200 px-4 py-3">
          <summary className="cursor-pointer text-sm font-medium text-zinc-700">
            Configurations, files, and additional videos
          </summary>
          <div className="mt-3 space-y-4">
            {experiment.details.map((group) => (
              <div key={group.heading}>
                <p className="text-sm font-semibold text-zinc-800">
                  {group.heading}
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 marker:text-zinc-400">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}
