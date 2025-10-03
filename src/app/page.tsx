'use client';

import {useState, useEffect} from 'react';
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

const affiliateAds = [
  {
    href: 'https://s.click.aliexpress.com/e/_c3ekGfOJ',
    imgSrc:
      'https://ae01.alicdn.com/kf/Sf8eb8217199e41b8a6c261029ea20d98P.jpg_240x240.jpg',
    alt: 'Anúncio AliExpress',
    title: 'Oferta Especial AliExpress',
    price: '',
  },
  {
    href: '#', // Placeholder link
    imgSrc: 'https://picsum.photos/seed/minato/240/240',
    alt: 'Camisa Minato',
    title: 'Camisa Minato',
    price: 'R$20,00',
    'data-ai-hint': 'anime shirt',
  },
  {
    href: '#', // Placeholder link
    imgSrc: 'https://picsum.photos/seed/tshirt/240/240',
    alt: 'Camisa com escrita em inglês',
    title: 'Camisa "Cool Vibes"',
    price: '$4.00',
    'data-ai-hint': 'graphic tee',
  },
];

const getRandomAd = () =>
  affiliateAds[Math.floor(Math.random() * affiliateAds.length)];

export default function Home() {
  const [name, setName] = useState<string>('');
  const [currentAd, setCurrentAd] = useState(getRandomAd());

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
    setCurrentAd(getRandomAd());
  };

  useEffect(() => {
    // Para evitar hydration mismatch, definimos o anúncio inicial no cliente
    setCurrentAd(getRandomAd());
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
        <CardHeader className="text-center">
          {currentAd && (
            <div className="mb-4 flex flex-col items-center justify-center">
              <a
                href={currentAd.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="overflow-hidden rounded-lg border-2 border-primary/20 group-hover:border-primary transition-all">
                  <Image
                    src={currentAd.imgSrc}
                    alt={currentAd.alt}
                    width={240}
                    height={240}
                    className="transform transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={currentAd['data-ai-hint']}
                  />
                </div>
                <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {currentAd.title}
                </h3>
                {currentAd.price && (
                  <p className="text-md font-semibold text-primary">
                    {currentAd.price}
                  </p>
                )}
              </a>
            </div>
          )}
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
      </Card>
    </main>
  );
}
