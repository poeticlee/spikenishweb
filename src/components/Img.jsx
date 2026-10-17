import { useState } from "react";
import { FlaskConical, ImageOff } from "lucide-react";

/**
 * Image with a shimmer loading state and a branded fallback tile if the
 * file is missing or fails to load — so a broken file never breaks layout.
 *
 * The fallback also works as the "owner hasn't uploaded a photo yet" state.
 */
export default function Img({
  src,
  alt,
  imgClassName = "",
  containerClassName = "",
  ratio = "aspect-[4/3]",
  eager = false,
  label,
}) {
  const [status, setStatus] = useState("loading"); // loading | ready | error

  return (
    <div className={`relative overflow-hidden bg-mist-100 ${ratio} ${containerClassName}`}>
      {status !== "error" && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === "ready" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}

      {status === "loading" && <div className="shimmer absolute inset-0" aria-hidden="true" />}

      {status === "error" && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-50 text-center"
          role="img"
          aria-label={alt ? `${alt} (image unavailable)` : "Image unavailable"}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-700 shadow-sm">
            {label ? <ImageOff className="h-5 w-5" /> : <FlaskConical className="h-5 w-5" />}
          </span>
          <span className="px-4 text-xs font-semibold leading-snug text-ink-500">
            {label || (alt ? alt.slice(0, 60) : "Photo coming soon")}
          </span>
        </div>
      )}
    </div>
  );
}
