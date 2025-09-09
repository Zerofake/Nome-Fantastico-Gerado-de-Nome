'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Wand2, Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateRandomName } from '@/ai/flows/generate-random-name';
import {
  customizeNameGeneration,
  type CustomizeNameGenerationInput,
} from '@/ai/flows/customize-name-generation-with-tools';

type LoadingState = 'idle' | 'random' | 'custom';

export default function Home() {
  const [name, setName] = useState('Seu nome fantástico aparecerá aqui');
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [structure, setStructure] =
    useState<CustomizeNameGenerationInput['structure']>('rhythmic');
  const { toast } = useToast();

  const handleGenerateRandom = async () => {
    setLoadingState('random');
    try {
      const result = await generateRandomName({});
      if (result.name) {
        setName(result.name);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro',
        description: 'Não foi possível gerar um nome aleatório.',
        variant: 'destructive',
      });
    } finally {
      setLoadingState('idle');
    }
  };

  const handleGenerateCustom = async () => {
    setLoadingState('custom');
    try {
      const result = await customizeNameGeneration({ structure });
      if (result.name) {
        setName(result.name);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro',
        description: 'Não foi possível gerar um nome personalizado.',
        variant: 'destructive',
      });
    } finally {
      setLoadingState('idle');
    }
  };

  const isLoading = loadingState !== 'idle';

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background p-4 font-body">
      <Card className="w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold font-headline tracking-tighter">
            Nome Fantástico
          </CardTitle>
          <CardDescription className="text-lg">
            Gere nomes aleatórios e únicos com um toque de magia.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-8 min-h-[160px]">
            <p
              className={`text-4xl md:text-5xl font-bold text-center text-primary transition-opacity duration-300 ${
                isLoading ? 'opacity-25' : 'opacity-100'
              }`}
              key={name}
            >
              {name}
            </p>
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-center md:text-left">
                Geração Simples
              </h3>
              <p className="text-muted-foreground text-center md:text-left text-sm min-h-[40px]">
                Clique para obter um nome surpreendente e totalmente aleatório.
              </p>
              <Button
                size="lg"
                onClick={handleGenerateRandom}
                disabled={isLoading}
                className="w-full"
              >
                {loadingState === 'random' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Wand2 />
                )}
                <span>Gerar Nome Aleatório</span>
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-center md:text-left">
                Geração Personalizada
              </h3>
              <p className="text-muted-foreground text-center md:text-left text-sm min-h-[40px]">
                Influencie a estrutura do nome para um resultado mais específico.
              </p>
              <RadioGroup
                defaultValue={structure}
                onValueChange={(
                  value: CustomizeNameGenerationInput['structure']
                ) => setStructure(value)}
                className="flex items-center justify-center md:justify-start gap-6 my-2"
                disabled={isLoading}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rhythmic" id="rhythmic" />
                  <Label htmlFor="rhythmic">Rítmica</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="syllabic" id="syllabic" />
                  <Label htmlFor="syllabic">Silábica</Label>
                </div>
              </RadioGroup>
              <Button
                size="lg"
                onClick={handleGenerateCustom}
                disabled={isLoading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {loadingState === 'custom' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Sparkles />
                )}
                <span>Gerar Nome Personalizado</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
