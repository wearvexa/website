"use client";

const VexaLoading = () => {
  return (
    <div className="fixed inset-0 z-9999 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5f5f5_0%,#ffffff_55%,#ffffff_100%)]" />

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative flex flex-col items-center">
          {/* Orbit system */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full border border-gray-200/80" />
            <div className="absolute h-44 w-44 rounded-full border border-gray-100" />

            <div className="absolute h-56 w-56 animate-[spin_10s_linear_infinite]">
              <span className="absolute -top-1 left-1/2 block h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gray-900 shadow-[0_0_24px_rgba(17,24,39,0.18)]" />
            </div>

            <div className="absolute h-44 w-44 animate-[spin_7s_linear_infinite_reverse]">
              <span className="absolute -bottom-1 left-1/2 block h-2 w-2 -translate-x-1/2 rounded-full bg-gray-300" />
            </div>

            <div className="relative flex h-32 w-32 items-center justify-center rounded-full overflow-hidden border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="/logo/fav-bg-black.png"
                alt="Vexa"
                className="relative size-20 object-contain animate-pulse"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gray-900" />
              <p className="text-sm font-medium text-gray-600">
                در حال آماده‌سازی پنل مدیریت
              </p>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gray-300 [animation-delay:200ms]" />
            </div>
          </div>

          <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-1/2 animate-[vexa-loader_1.6s_ease-in-out_infinite] rounded-full bg-gray-900" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes vexa-loader {
          0% {
            transform: translateX(-110%);
          }
          50% {
            transform: translateX(105%);
          }
          100% {
            transform: translateX(-110%);
          }
        }
      `}</style>
    </div>
  );
};

export default VexaLoading;
