const LoadingScreen = (): React.JSX.Element => {
  return (
    <div className="fixed inset-0 z-50 space-x-2 flex items-center justify-center">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 dark:bg-gray-50 bg-stone-950 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 dark:bg-gray-50 bg-stone-950 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 dark:bg-gray-50 bg-stone-950 rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingScreen;
