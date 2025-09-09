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

    // Capitaliza a primeira letra
    randomName = randomName.charAt(0).toUpperCase() + randomName.slice(1);

    setName(randomName);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline tracking-tighter">
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
        <CardFooter className="justify-center">
          <Button size="lg" onClick={generateRandomName}>
            <Wand2 className="mr-2" />
            Gerar Nome
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}