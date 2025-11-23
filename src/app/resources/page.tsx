export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="container mx-auto flex flex-col items-center justify-center space-y-2 py-16 text-center md:py-24">
        <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Recursos
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Este é o seu espaço para adicionar e gerenciar imagens para o projeto.
        </p>
      </header>
      <main className="flex flex-1 items-start justify-center">
        <div className="container mx-auto max-w-sm px-4">
            <div className="text-center text-muted-foreground">
                <p>Você pode adicionar suas imagens aqui.</p>
            </div>
        </div>
      </main>
    </div>
  );
}
