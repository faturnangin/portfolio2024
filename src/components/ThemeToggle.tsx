// src/components/ThemeToggleWithHook.tsx
import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useDarkMode()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const baseClasses = 'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
  const buttonClasses = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <button
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  )
}