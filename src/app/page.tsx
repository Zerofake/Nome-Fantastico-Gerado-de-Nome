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
import {Badge} from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const allAds = [
  {
    href: 'https://s.click.aliexpress.com/e/_c3ekGfOJ',
    imgSrc: 'https://ae01.alicdn.com/kf/Sf8eb8217199e41b8a6c261029ea20d98P.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress',
    title: 'Confira esta Nova Oferta',
    price: 'R$ 7,35',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3ekGfOJ',
    imgSrc: 'https://ae01.alicdn.com/kf/Sf8eb8217199e41b8a6c261029ea20d98P.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress',
    title: 'Check out this New Offer',
    price: 'US$ 1.50',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4SyE9dz',
    imgSrc: 'https://ae01.alicdn.com/kf/S4a39da6e574c47d8a6299583be7b12265.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress 2',
    title: 'Super Oferta Imperdível',
    price: 'R$ 9,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4SyE9dz',
    imgSrc: 'https://ae01.alicdn.com/kf/S4a39da6e574c47d8a6299583be7b12265.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress 2',
    title: 'Unmissable Super Offer',
    price: 'US$ 1.50',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3G3f183',
    imgSrc: 'https://ae01.alicdn.com/kf/S0f21f2b48ac34fbc9071372f2dffb46aK.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'R$ 19,99',
  },
    {
    href: 'https://s.click.aliexpress.com/e/_c3G3f183',
    imgSrc: 'https://ae01.alicdn.com/kf/S0f21f2b48ac34fbc9071372f2dffb46aK.jpg_140x140.jpg',
    imgAlt: 'T-Shirt',
    title: 'T-Shirt',
    price: 'US$ 3.85',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4F9jGT5',
    imgSrc: 'https://ae01.alicdn.com/kf/S39da97d24c7f4a5b9be2c155935f75a5p.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'R$ 10,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4F9jGT5',
    imgSrc: 'https://ae01.alicdn.com/kf/S39da97d24c7f4a5b9be2c155935f75a5p.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'US$ 2.00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4WJxmNp',
    imgSrc: 'https://ae01.alicdn.com/kf/S5e4e70274e164bdab0798d7c331a8f9bw.jpg_140x140.jpg',
    imgAlt: '7 PCS Toy',
    title: '7 PCS Toy',
    price: 'R$ 15,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4WJxmNp',
    imgSrc: 'https://ae01.alicdn.com/kf/S5e4e70274e164bdab0798d7c331a8f9bw.jpg_140x140.jpg',
    imgAlt: '7 PCS Toy',
    title: '7 PCS Toy',
    price: 'US$ 2.50',
  },
];

export default function Home() {
  const [name, setName] = useState<string>('');
  const [currentAd, setCurrentAd] = useState(allAds[0]);

  useEffect(() => {
    // Start cycling ads every 5 seconds
    const adInterval = setInterval(() => {
      setCurrentAd(allAds[Math.floor(Math.random() * allAds.length)]);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(adInterval);
  }, []);
  
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

    // Change ad when a new name is generated
    setCurrentAd(allAds[Math.floor(Math.random() * allAds.length)]);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
        <div className="p-6">
          <a
            href={currentAd.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="rounded-lg border bg-card/50 p-4 transition-colors hover:bg-card">
              <div className="flex items-center gap-4">
                <Image
                  src={currentAd.imgSrc}
                  alt={currentAd.imgAlt}
                  width={140}
                  height={140}
                  className="rounded-md"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground">
                    {currentAd.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Clique para ver mais detalhes...
                  </p>
                </div>
                <div className="text-right flex flex-col items-end">
                   <Badge
                    variant="outline"
                    className="mb-2 border-primary/50 text-primary"
                  >
                    AliExpress
                  </Badge>
                  <p className="text-2xl font-bold text-primary">
                    {currentAd.price}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <CardHeader className="text-center pt-0">
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
