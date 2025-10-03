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
    imgSrc: '//ae01.alicdn.com/kf/Sf8eb8217199e41b8a6c261029ea20d98P.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress',
    title: 'Confira esta Nova Oferta',
    price: 'R$ 7,35',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3ekGfOJ',
    imgSrc: '//ae01.alicdn.com/kf/Sf8eb8217199e41b8a6c261029ea20d98P.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress',
    title: 'Check out this New Offer',
    price: 'US$ 1.50',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4SyE9dz',
    imgSrc: '//ae01.alicdn.com/kf/S4a39da6e574c47d8a6299583be7b12265.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress 2',
    title: 'Super Oferta Imperdível',
    price: 'R$ 9,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4SyE9dz',
    imgSrc: '//ae01.alicdn.com/kf/S4a39da6e574c47d8a6299583be7b12265.jpg_140x140.jpg',
    imgAlt: 'Anúncio AliExpress 2',
    title: 'Unmissable Super Offer',
    price: 'US$ 1.50',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3G3f183',
    imgSrc: '//ae01.alicdn.com/kf/S0f21f2b48ac34fbc9071372f2dffb46aK.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'R$ 19,99',
  },
    {
    href: 'https://s.click.aliexpress.com/e/_c3G3f183',
    imgSrc: '//ae01.alicdn.com/kf/S0f21f2b48ac34fbc9071372f2dffb46aK.jpg_140x140.jpg',
    imgAlt: 'T-Shirt',
    title: 'T-Shirt',
    price: 'US$ 3.85',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4F9jGT5',
    imgSrc: '//ae01.alicdn.com/kf/S39da97d24c7f4a5b9be2c155935f75a5p.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'R$ 10,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4F9jGT5',
    imgSrc: '//ae01.alicdn.com/kf/S39da97d24c7f4a5b9be2c155935f75a5p.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'US$ 2.00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4WJxmNp',
    imgSrc: '//ae01.alicdn.com/kf/S5e4e70274e164bdab0798d7c331a8f9bw.jpg_140x140.jpg',
    imgAlt: '7 PCS Toy',
    title: '7 PCS Toy',
    price: 'R$ 15,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c4WJxmNp',
    imgSrc: '//ae01.alicdn.com/kf/S5e4e70274e164bdab0798d7c331a8f9bw.jpg_140x140.jpg',
    imgAlt: '7 PCS Toy',
    title: '7 PCS Toy',
    price: 'US$ 2.50',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c44LfFKJ',
    imgSrc: '//ae01.alicdn.com/kf/Sabcc009498e64ed7aabe4a15ee959575D.jpg_140x140.jpg',
    imgAlt: 'TOY',
    title: 'TOY',
    price: 'R$ 12,00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c44LfFKJ',
    imgSrc: '//ae01.alicdn.com/kf/Sabcc009498e64ed7aabe4a15ee959575D.jpg_140x140.jpg',
    imgAlt: 'TOY',
    title: 'TOY',
    price: 'US$ 2.00',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3tuqnSR',
    imgSrc: '//ae01.alicdn.com/kf/Scb2387ab34dc4fe8a7fe7012f463c577j.jpg_140x140.jpg',
    imgAlt: 'SSD 256 GB',
    title: 'SSD 256 GB',
    price: 'R$ 58',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3tuqnSR',
    imgSrc: '//ae01.alicdn.com/kf/Scb2387ab34dc4fe8a7fe7012f463c577j.jpg_140x140.jpg',
    imgAlt: 'SSD 256 GB',
    title: 'SSD 256 GB',
    price: 'US$ 8',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3mbVhu7',
    imgSrc: '//ae01.alicdn.com/kf/Hf54837d546954dee89821b5be4a1fa0c9.jpg_140x140.jpg',
    imgAlt: 'Mochila',
    title: 'Mochila',
    price: 'R$ 17',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3mbVhu7',
    imgSrc: '//ae01.alicdn.com/kf/Hf54837d546954dee89821b5be4a1fa0c9.jpg_140x140.jpg',
    imgAlt: 'Backpack',
    title: 'Backpack',
    price: 'US$ 3',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3CWnn6J',
    imgSrc: '//ae01.alicdn.com/kf/Scfeddfb9500d4e15b397bd586bbc89226.jpg_140x140.jpg',
    imgAlt: 'SAIA',
    title: 'SAIA',
    price: 'R$ 30',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3CWnn6J',
    imgSrc: '//ae01.alicdn.com/kf/Scfeddfb9500d4e15b397bd586bbc89226.jpg_140x140.jpg',
    imgAlt: 'SAIA',
    title: 'SAIA',
    price: 'US$ 8',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3YBgMwx',
    imgSrc: '//ae01.alicdn.com/kf/S810a739123484adf9facc3c1b21bce8bV.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'R$ 12',
  },
  {
    href: 'https://s.click.aliexpress.com/e/_c3YBgMwx',
    imgSrc: '//ae01.alicdn.com/kf/S810a739123484adf9facc3c1b21bce8bV.jpg_140x140.jpg',
    imgAlt: 'Camisa',
    title: 'Camisa',
    price: 'US$ 3',
  },
];

const AdBanner = ({ ad }: { ad: typeof allAds[0] }) => (
  <a
    href={ad.href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full"
  >
    <div className="rounded-lg border bg-card/50 p-4 transition-colors hover:bg-card">
      <div className="flex items-center gap-4">
        <Image
          src={`https:${ad.imgSrc}`}
          alt={ad.imgAlt}
          width={140}
          height={140}
          className="rounded-md"
        />
        <div className="flex-grow">
          <h4 className="font-semibold text-foreground">
            {ad.title}
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
            {ad.price}
          </p>
        </div>
      </div>
    </div>
  </a>
);

export default function Home() {
  const [name, setName] = useState<string>('');
  const [currentAd, setCurrentAd] = useState(allAds[0]);
  const [currentAd2, setCurrentAd2] = useState(allAds[1]);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd(allAds[Math.floor(Math.random() * allAds.length)]);
      setCurrentAd2(allAds[Math.floor(Math.random() * allAds.length)]);
    }, 5000);

    return () => clearInterval(adInterval);
  }, []);
  
  const generateRandomName = () => {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const nameLength = Math.floor(Math.random() * 5) + 4;
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

    setCurrentAd(allAds[Math.floor(Math.random() * allAds.length)]);
    setCurrentAd2(allAds[Math.floor(Math.random() * allAds.length)]);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
        
        <CardHeader className="text-center pt-6">
          <CardTitle className="text-4xl font-bold font-headline tracking-tighter flex justify-center items-center gap-4">
            <Wand2 className="w-12 h-12 text-primary" />
            Nome Fantástico
          </CardTitle>
          <CardDescription className="text-lg">
            Clique no botão para gerar um nome aleatório.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full space-y-4 pb-4">
             <AdBanner ad={currentAd} />
          </div>
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
        <CardFooter className="flex-col gap-4 p-6">
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={generateRandomName}>
              <Wand2 className="mr-2" />
              Gerar Nome
            </Button>
          </div>
           <div className="w-full space-y-4 pt-4">
            <AdBanner ad={currentAd2} />
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
