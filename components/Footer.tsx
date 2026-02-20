export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-neutral-400">
        <span className="font-mono">daniel — {new Date().getFullYear()}</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/premo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/danielpremo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            linkedin
          </a>
          <a
            href="mailto:daniel@example.com"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
