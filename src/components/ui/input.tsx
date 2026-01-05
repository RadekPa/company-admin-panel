import React from 'react'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${props.className ?? ''}`} />
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 ${props.className ?? ''}`} />
}
