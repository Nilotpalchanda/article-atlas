export default function Loading() {
  return (
    <div className="mx-auto mb-8 mt-8 w-full max-w-6xl px-4">
      <div className="w-full animate-pulse rounded-lg bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-2 shadow-lg sm:p-4 md:p-6">
        {/* Chat Area Skeleton */}
        <div className="mb-2 h-4 w-16 rounded bg-gray-200 px-2 sm:px-4"></div>
        <div className="scrollbar-thin max-h-[60vh] min-h-[40vh] space-y-6 overflow-y-auto px-2 py-4 sm:max-h-[calc(100vh-400px)] sm:min-h-[calc(100vh-400px)] sm:px-4 sm:py-6">
          {/* User message skeleton */}
          <div className="flex justify-end">
            <div className="flex items-start gap-2 sm:gap-2.5">
              <div className="h-7 w-7 rounded-full bg-gray-200 sm:h-8 sm:w-8"></div>
              <div className="flex w-full max-w-[90vw] flex-col gap-1 sm:max-w-[320px]">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="h-3 w-16 rounded bg-gray-200"></div>
                  <div className="h-3 w-10 rounded bg-gray-100"></div>
                </div>
                <div className="flex flex-col rounded-e-xl rounded-es-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-3 py-2 sm:px-4 sm:py-3">
                  <div className="mb-1 h-4 w-32 rounded bg-gray-200"></div>
                  <div className="h-4 w-24 rounded bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Bot message skeleton */}
          <div className="flex items-start gap-2 sm:gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gray-200 sm:h-8 sm:w-8"></div>
            <div className="flex w-full flex-col gap-4">
              <div>
                <div className="mb-2 flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="h-3 w-28 rounded bg-gray-200"></div>
                  <div className="h-3 w-10 rounded bg-gray-100"></div>
                </div>
                <div className="flex flex-col rounded-e-xl rounded-es-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-3 py-2 sm:px-4 sm:py-3">
                  <div className="mb-1 h-4 w-40 rounded bg-gray-200"></div>
                  <div className="h-4 w-28 rounded bg-gray-100"></div>
                </div>
              </div>
              {/* Sources skeleton */}
              <div className="space-y-2">
                <div className="h-3 w-20 rounded bg-gray-200"></div>
                <div className="w-fit max-w-[90vw] rounded-xl bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 p-3 sm:max-w-sm sm:p-4">
                  <div className="mb-2 h-3 w-24 rounded bg-gray-200"></div>
                  <div className="h-3 w-32 rounded bg-gray-100"></div>
                </div>
              </div>
              {/* Suggestions skeleton */}
              <div className="space-y-2">
                <div className="h-3 w-40 rounded bg-gray-200"></div>
                <div className="flex flex-wrap gap-2">
                  <div className="h-6 w-36 rounded-full bg-gray-100"></div>
                  <div className="h-6 w-28 rounded-full bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Loading indicator skeleton */}
          <div className="mt-6 flex items-start gap-2 sm:gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gray-200 sm:h-8 sm:w-8"></div>
            <div className="flex w-full max-w-[90vw] flex-col gap-1 sm:max-w-[320px]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="h-3 w-32 rounded bg-gray-200"></div>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-sm sm:p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-300"></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-300"
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-300"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Input Area Skeleton */}
        <div className="sticky bottom-0 w-full bg-transparent p-2 sm:p-4">
          <div className="relative rounded-2xl border border-neutral-200 bg-white shadow-lg">
            <div className="flex">
              <div className="m-2 min-h-12 grow rounded bg-gray-100 sm:m-4 sm:min-h-16"></div>
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-2">
              <div className="h-3 w-10 rounded bg-gray-200"></div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200"></div>
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center justify-between gap-2 sm:mt-4 sm:flex-row">
            <div className="h-3 w-24 rounded bg-gray-200"></div>
            <div className="h-8 w-36 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
