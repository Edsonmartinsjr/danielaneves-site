import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Negativa de Cobertura de Plano de Saúde | Advogada Especialista",
  description: "Consultoria jurídica para negativas de cobertura de plano de saúde.",
};

export default function MedicoPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-6">Seu plano de saúde negou a cobertura?</h1>
      <p className="text-xl text-gray-600 mb-8">
        Vamos reverter essa decisão. Consultoria jurídica especializada em negativas de cobertura.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Como funciona</h2>
        <ol className="list-decimal list-inside space-y-3">
          <li className="text-lg">Consulta Inicial - Você nos apresenta seu caso</li>
          <li className="text-lg">Análise Jurídica - Analisamos contrato e legislação</li>
          <li className="text-lg">Ação - Enviamos recurso ou iniciamos processo judicial</li>
          <li className="text-lg">Cobertura Aprovada - Plano reconhece obrigação</li>
        </ol>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>
        <p className="text-lg mb-4">Fale conosco agora via WhatsApp</p>
        <a href="https://wa.me/5513982197717" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
