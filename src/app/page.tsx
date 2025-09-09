import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline tracking-tighter">
            Nome Fantástico
          </CardTitle>
          <CardDescription className="text-lg">
            Seu aplicativo está pronto!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-8 min-h-[160px]">
            <p className="text-2xl text-center text-muted-foreground">
              Comece a editar seu aplicativo em{' '}
              <code className="bg-muted-foreground/20 text-muted-foreground font-bold px-1 py-0.5 rounded-sm">
                src/app/page.tsx
              </code>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
