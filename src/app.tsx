import './app.css'
import { signal } from '@preact/signals'

const output = signal<string[]>([])
const currentInput = signal<string>('')
const commandHistory = signal<string[]>([])

// Terminal output: stores and displays command history and output
// TODO: implement output buffer, scrolling, text rendering
function TerminalOutput() {
  return (
    <div class="terminal-output">
      {output.value.map((line: string) => <div>{line}</div>)}
    </div>
  )
}

// Terminal input: user command input field
// TODO: implement input handling, command history navigation, autocomplete
function TerminalInput() {
  const handleInput = (e: Event) => {
    currentInput.value = (e.target as HTMLInputElement).value
  }

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      commandHistory.value = [...commandHistory.value, currentInput.value]
      output.value = [...output.value, `$ ${currentInput.value}`]
      currentInput.value = ''
    }
  }

  return (
    <input
      type="text"
      class="terminal-input"
      placeholder="$ "
      value={currentInput.value}
      onInput={handleInput}
      onKeyDown={handleSubmit}
    />
  )
}

// Main terminal component
// TODO: manage state for commands, output history, current input
export function App() {
  return (
    <div class="terminal-container">
      <TerminalOutput />
      <TerminalInput />
    </div>
  )
}
