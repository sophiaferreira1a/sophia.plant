import { useState } from "react";

export default function ProjectPreview({ image, alt, lang, className = "h-32", rounded = "rounded-xl", emojiSize = "text-3xl" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`w-full overflow-hidden bg-moss/10 ${rounded} ${className}`}>
      {!imageError && image ? (
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={`flex h-full flex-col items-center justify-center gap-2 border border-sand ${rounded}`}>
          <span className={emojiSize}>🌷</span>
          <p className="text-sm text-soil">
            {lang === "pt" ? "Preview em breve" : "Preview coming soon"}
          </p>
        </div>
      )}
    </div>
  );
}