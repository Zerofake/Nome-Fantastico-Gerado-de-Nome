'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Wand2} from 'lucide-react';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';

export default function Home() {
  const [name, setName] = useState<string>('');

  const generateRandomName = () => {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const nameLength = Math.floor(Math.random() * 5) + 4; // Gera nomes de 4 a 8 letras
    let randomName = '';
    let isVowelTurn = Math.random() < 0.5;

    for (let i = 0; i < nameLength; i++) {
      if (isVowelTurn) {
        randomName += vowels.charAt(Math.floor(Math.random() * vowels.length));
      } else {
        randomName += consonants.charAt(
          Math.floor(Math.random() * consonants.length)
        );
      }
      isVowelTurn = !isVowelTurn;
    }

    randomName = randomName.charAt(0).toUpperCase() + randomName.slice(1);

    setName(randomName);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline tracking-tighter flex justify-center items-center gap-4">
            <Wand2 className="w-12 h-12 text-primary" />
            Nome Fantástico
          </CardTitle>
          <CardDescription className="text-lg">
            Clique no botão para gerar um nome aleatório.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-8 min-h-[160px]">
            {name ? (
              <p className="text-4xl font-bold tracking-wider text-primary">
                {name}
              </p>
            ) : (
              <p className="text-2xl text-center text-muted-foreground">
                Seu nome fantástico aparecerá aqui.
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={generateRandomName}>
              <Wand2 className="mr-2" />
              Gerar Nome
            </Button>
          </div>
        </CardFooter>

        <a
          href="https://s.click.aliexpress.com/e/_DkR3b5T"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full bg-background"
        >
          <div className="mx-6 mb-6 rounded-lg border bg-card/50 p-4 transition-colors hover:bg-card">
            <div className="flex items-center gap-4">
              <Image
                src="https://ae01.alicdn.com/kf/S057b936a066348f9864b4c466d7353b3Z.jpg_80x80.jpg"
                alt="Anúncio AliExpress"
                width={48}
                height={48}
                className="rounded-md"
              />
              <div className="flex-grow">
                <h4 className="font-semibold text-foreground">
                  Confira esta Nova Oferta
                </h4>
                <p className="text-sm text-muted-foreground">
                  Clique para ver mais detalhes...
                </p>
              </div>
              <div className="text-right">
                <Badge
                  variant="outline"
                  className="mb-1 border-primary/50 text-primary"
                >
                  AliExpress
                </Badge>
                <p className="text-lg font-bold text-primary">US $7.35</p>
              </div>
            </div>
          </div>
        </a>
      </Card>
    </main>
  );
}
