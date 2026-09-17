import { spawn } from 'node:child_process'

const viteCommand = process.platform === 'win32' ? 'vite.cmd' : 'vite'
const port = process.env.PORT || '4173'

const server = spawn(viteCommand, ['preview', '--host', '0.0.0.0', '--port', port], {
  stdio: 'inherit',
  shell: process.platform === 'win32'
})

server.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  else process.exit(code ?? 1)
})
