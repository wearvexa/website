import type { ReactNode } from "react";

const SectionTitle = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2">{children}</div>
      </div>
    </>
  );
};

export default SectionTitle;
