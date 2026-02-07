import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  items: string[];
  highlight?: boolean;
  dark?: boolean;
  icon?: ReactNode;
  href?: string;
};

export default function FeatureCard({
  title,
  subtitle,
  items,
  highlight,
  dark,
  icon,
  href,
}: Props) {
  const CardBody = (
    <div
      className={`group rounded-xl p-6 transition-colors duration-200 cursor-pointer
        ${dark ? "bg-black text-white" : "bg-gray-50"}
        ${highlight ? "border-2 border-purple-500" : ""}
        hover:bg-black hover:text-white
      `}
    >
      {icon && (
        <div
          className={`mb-4 flex items-center justify-center text-3xl ${
            dark
              ? "text-white group-hover:text-white"
              : "text-black group-hover:text-white"
          }`}
        >
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>

      {subtitle && (
        <p
          className={`text-sm mt-1 ${
            dark ? "text-gray-300" : "text-gray-500 group-hover:text-gray-300"
          }`}
        >
          {subtitle}
        </p>
      )}

      <ul className="mt-4 space-y-2 text-sm group-hover:text-white">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline text-inherit"
      >
        {CardBody}
      </a>
    );
  }

  return CardBody;
}
