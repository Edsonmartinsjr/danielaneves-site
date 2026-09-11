import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniela Neves Advocacia',
  description: 'Serviços jurídicos especializados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
