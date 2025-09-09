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

const DragonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.828 10.243c.44-.439.44-1.152 0-1.591L15.145 6c-1.112-1.111-2.39-1.667-3.834-1.667-1.445 0-2.723.556-3.835 1.667L5.01 8.409c-.44.439-.44 1.152 0 1.591L6.701 11.7c1.334 1.334 3.326 2.068 5.299 2.068s3.965-.734 5.299-2.068l.529-.529zM12 15.75c-2.33 0-4.403-.89-5.96-2.448l-.759-.759a.75.75 0 010-1.06L7.43 9.334a.75.75 0 011.06 0l.759.759c.74.74 1.77 1.157 2.867 1.157s2.127-.417 2.867-1.157l.759-.759a.75.75 0 011.06 0l2.149 2.149a.75.75 0 010 1.06l-.759.759A7.468 7.468 0 0112 15.75zm-3.3-8.083c.318 0 .578-.26.578-.578V5.01a.579.579 0 00-.578-.578H8.12a.579.579 0 00-.578.578v2.08c0 .318.26.578.578.578h.577zm7.18 0c.318 0 .578-.26.578-.578V5.01a.579.579 0 00-.578-.578h-.578a.579.579 0 00-.578.578v2.08c0 .318.26.578.578.578h.578zm-1.125 10.515a.75.75 0 01.75-.75h.375a.75.75 0 010 1.5h-.375a.75.75 0 01-.75-.75zM12 18.375c.414 0 .75.336.75.75v3.125a.75.75 0 01-1.5 0v-3.125a.75.75 0 01.75-.75z" />
  </svg>
);


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
          <CardTitle className="text-4xl font-bold font-headline tracking-tighter flex justify-center items-center gap-4">
             <DragonIcon className="w-12 h-12 text-primary" />
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
