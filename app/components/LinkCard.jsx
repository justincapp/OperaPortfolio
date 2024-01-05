import clsx from "clsx";
import Image from "next/image";

export default function LinkCard({
  children,
  className,
  backgroundImage,
  type,
  image,
  alt,
  href,
  background
}) {
  return (
    <div
      className={clsx(
        className,
        "w-full space-y-2 hover:scale-110 transition group"
      )}
    >
      {type === "icon" ? (
      <a href={href} target="_blank">
          <div className={clsx("rounded-2xl w-full h-24 flex items-center justify-center", background)}>
          <Image
            height="200"
            width="200"
            src={image}
            alt={alt}
            className="w-10 rounded-lg"
          />
        </div>
      </a>
      ) : (
        <div
          className="bg-black/70 cursor-pointer rounded-2xl w-full h-24 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      )}

      <p className="text-sm text-white text-center group-hover:scale-90 transition">
        {children}
      </p>
    </div>
  );
}
